---
layout: home
title: 王阳的免费API
permalink: /
---

本人从事开发10余年，在自己的项目中积攒了大量技术组件，恰好手上有空闲服务器，准备将技术组件API化，并免费提供给有需要的人。

本站API都是由本人利用业余时间开发和维护的，欢迎大家使用，如果发现bug或者有更好的建议，欢迎联系。

### API文档
* [王阳的免费API-Github](https://youngwang1228.github.io/)
* [王阳的免费API-Gitee](https://youngwang1228.gitee.io/)

### 注意事项
1. 由于带宽和计算资源有限，每个API都将会限制调用频率，具体限制视计算复杂度而定，一般都可以满足正常使用
2. 为避免恶意攻击，每个账号都将限制调用频率，正常使用一般不会被误伤
3. 我会及时维护本站API，确保数据得到更新。同时会持续开发新的接口，丰富服务内容
4. 如果有API需求也可直接联系我，通用且在我能力范围内的，将尽快安排
5. 生产使用请预估你的业务量，如果可预见将超出频率限制，建议可增加队列缓冲
6. 本站API永久免费

### 联系方式
 <youngwang1228@gmail.com>


### API列表

<div class="table-wrapper" markdown="block">

API        |说明   
:-         |:-
[IP查询](/api/ip.html)         |获取您的IP地址和归属地
[IP归属地查询](/api/ip2region.html)         |IP归属地查询
[节假日查询](/api/holiday.html)         |节假日查询

</div>
持续更新中...   

### 使用说明
1. 右上角 :arrow_upper_right: 使用 `Github` 或 `gitee` 快速登录，登录后可以获取 `AccessToken`
2. 在请求头增加 `Authorization: AccessToken` 即可调用API
```json
"Header":{
        "Authorization":"您的AccessToken",
}
```
![Authorization](/assets/doc/home/1.png)



### 鼓励一下
如果你觉得本站对您有帮助，不妨请作者喝杯咖啡。

---
本站基于开源项目 [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) 搭建
