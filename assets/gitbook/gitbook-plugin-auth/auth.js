require(['gitbook', 'jquery'], function(gitbook, $) {
    
    gitbook.events.bind('start', function(e, config) {
        var token = window.localStorage.getItem("token")
        try{
            token = token ? JSON.parse(token) : null
        }catch(e){
            token = null
        }
        
        if(token && token.t && token.u){
            var $dialog = $('<div class="_my_dialog"><div class="black_overlay"></div><div class="dialog_content" style="width: 800px;"><div class="dialog_token"><span class="dialog_token_label">您的Token：</span><span class="dialog_token_value"></span></div><br/><div class="dialog_close_div"><button class="button size-1  dialog_close_btn">关闭</button></div></div></div>')
            $("body").append($dialog);
            $dialog.find(".dialog_close_btn").click(function(){
                $dialog.hide();
            })
    
            gitbook.toolbar.createButton({
                text: token.u,
                className: 'auth-username',
                position: 'right',
                dropdown: [
                    {
                        text: "查看Access Token",
                        onClick: function(e) {
                            $.ajax({
                                url: "https://api.youngwang1228.com:48000/oauth/token",
                                type: "GET",
                                dataType: "json",
                                headers: {
                                    "Authorization": token.t
                                },
                                success: function(data){
                                    if(data.code == 200){
                                        $dialog.find(".dialog_token_value").text(data.data)
                                        $dialog.show();
                                    }else{
                                        window.localStorage.clear()
                                        location.reload();
                                    }
                                },
                                error: function(data){
                                    window.localStorage.clear()
                                    location.reload();
                                }
                            })
                        }
                    }
                ]
            });
        }else{
            var $loginDialog = $("#fast_login_dialog")
            $loginDialog.find(".dialog_close_btn").click(function(){
                $loginDialog.hide();
            })
    
            $loginDialog.find(".car").click(function(){
                var loginType = $(this).data("type")
                window.open("https://api.youngwang1228.com:48000/oauth/render/"+loginType+"?redirect="+encodeURIComponent(window.location.href), "_blank" )
                $loginDialog.hide();
            })

            gitbook.toolbar.createButton({
                text: '未登录',
                className: 'auth-username',
                position: 'right',
                onClick: function(e) {
                    var token = window.localStorage.getItem("token")
                    try{
                        token = token ? JSON.parse(token) : null
                    }catch(e){
                        token = null
                    }
                    if(token && token.t && token.u){
                        location.reload();
                    }else{
                        $loginDialog.show();
                    }
                }
            });
        }

        
    });


    gitbook.events.bind("page.change", function () {
        var token = window.localStorage.getItem("token")
        try{
            token = token ? JSON.parse(token) : null
        }catch(e){
            token = null
        }
        if(token && token.t && token.u){
            $(".book-body>.book-header>.auth-username>a").html(token.u + " <i class='fa fa-angle-down'></i>");
        }
    });

});
