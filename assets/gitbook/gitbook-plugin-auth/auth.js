require(['gitbook', 'jquery'], function(gitbook, $) {
    
    gitbook.events.bind('start', function(e, config) {
        var loginUser = window.localStorage.getItem("login_user")
        if(loginUser){
            var $dialog = $('<div class="_my_dialog"><div class="black_overlay"></div><div class="dialog_content"><div class="dialog_token"><span class="dialog_token_label">您的Token：</span><span class="dialog_token_value">lfjlsjdhgdjgdflgdfkjd</span></div><div class="dialog_close_div"><button class="button size-1  dialog_close_btn">关闭</button></div></div></div>')
            $("body").append($dialog);
            $dialog.find(".dialog_close_btn").click(function(){
                $("._my_dialog").hide();
            })
    
            gitbook.toolbar.createButton({
                text: '王治杨',
                className: 'auth-username',
                position: 'right',
                dropdown: [
                    {
                        text: "按钮1",
                        onClick: function(e) {
                            alert("按钮1")
                        }
                    },
                    {
                        text: "按钮2",
                        onClick: function(e) {
                            $dialog.show();
                        }
                    }
                ]
            });
        }else{
            gitbook.toolbar.createButton({
                text: '未登录',
                className: 'auth-username',
                position: 'right',
                onClick: function(e) {
                    window.open("http://127.0.0.1:38000/oauth/render/gitee", "_blank" )
                }
            });
        }
    });


    gitbook.events.bind("page.change", function () {
        var loginUser = window.localStorage.getItem("login_user")
        if(loginUser){
            $(".book-body>.book-header>.auth-username>a").html(loginUser.username + " <i class='fa fa-angle-down'></i>");
        }
        
    });

});
