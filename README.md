B站弹幕姬 for NW.js 

说明(=・ω・=)
-------
这个项目是方便使用`linux`和`MACOS`系统进行直播的同学提供的弹幕SDK<br>
当然在`window`系统下面都是可以使用的<br>
本人注重弹幕`交互`,并不适合经常刷大量弹幕的直播间用户<br>
[本人直播间地址](http://live.bilibili.com/61627)房间号61627<br>
注意在res/font/下面偶一个字体，有`26M`<br>
Version 0.0.1

食用方式(｀・ω・´)
------
`clone`这个项目<br>
`下载`[NW.js SDK](http://nwjs.io/);<br>
`nw.js /danmu`<br>


全局API(｡･ω･｡)
--------
```javascript
    //写插件请不要使用link.js开启新的socket线程
    //DmLister 是一个`global`属性的对象 请不要覆盖。
    var listen = global.DmLister.connect();//链接到本弹幕姬事件中心
        listen.on("data",function(data){//添加事件监听
            //TOTD ......
        })
    /**
     *  
     */
    listen.id;
    /**
     *  添加事件监听
     * @param eventName 事件名称
     * @param callback  回调
     * @returns {boolean}   是否添加成功 已存在返回false
     */
    listen.on(eventName,callback);
    /**
     * 全局广播事件
     * @param eventName     事件名
     * @param data          数据
     */
    listen.emit(eventName,data);//
    /**
     * 指定激活事件
     * @param id            接收者id
     * @param eventName     事件名
     * @param data          数据
     */
    listen.emitOne(id,eventName,data);
    /**
     * 移除事件监听
     * @param eventName 事件名称
     * @returns {boolean}   true/false
     */
    listen.remove(eventName);
     /**
     * 删除全部事件监听
     * @return true;
     */
    listen.removeAll(eventName);
    
    //系统事件！
    listen.on("DM_msg",callback);//接收弹幕信息
    listen.on("DM_connect",callback);//接收错误信息
    listen.on("DM_error",callback);//接收错误信息
    listen.on("exit",callback);//停止插件运行并退出
    listen.on("reload",callback);//插件重新加载
    listen.on("stop",callback)//强行退出插件在收到这个信息5秒之后窗口会被强制关闭
```
请稍微遵守以下命名规则如`DM`+`_`+`msg`,这样就可以理解`DM`系统发出了一个`msg`事件<br>

多线程库还在拖稿
-------
```javascript
    //_(:зゝ∠)_表着急
    //用来优化网络io什么的
```
数据库  拖
-------

```javascript
     //_(:зゝ∠)_表着急
     //好像不是很有必要的样子
```
主程序保留关键字<br>
`User`:用户信息<br>
`Config`:主程序配置文件<br>
`face`:用户头像地址<br>
`test`:测试用<br>

当然可以吧程序的配置文件放在插件内文件夹也可以放在数据库反正咱`nodejs`不虚

编写插件(｀・ω・´)
------
注意件事情`nw.js`内核是`chrome`,所有东西都不需要考虑兼容性问题。
```javascript
    {
        "name":"插件名称",
        "main":"启动文件",
        "author":"作者",
        "version":"0.0.1",
        window:{
            "transparent":true//窗口透明
        },
        "npm":[{
            "name":"名称"，
            "version":"版本"
        }]
    }
```
`package.json`注意事项<br>
1.除json外不要包含任何字符 如注释
[window 支持属性](http://docs.nwjs.io/en/v0.13.0-beta5/References/Manifest%20Format/#window-subfields)window属性必须在创建窗口的时候传入，是否透明，窗口图标，最大宽高度什么的
`npm`暂不支持<br>
由于nw.js 支持`node`所以允许加载nodejs的模块<br>
本弹幕姬的插件系统比较简单,所有东西都可以自定义自由度较高//(╯‵□′)╯︵┻━┻偷懒就偷懒废话这么多<br>

用到的库
-----
[minAjax](http://argunner.github.io/minAjax.js/)开源的小巧轻便的ajax框架(有修改)<br>
`plugin`引用路径`src="../../js/minajax.js"`<br>
[Jquery v3.0.0-beta1](https://jquery.com/)前端框架<br>
`plugin`引用路径`src="../../js/jquery.js"`<br>

资料ε=ε=(ノ≧∇≦)ノ
------
[NW.js 官方英文文档](http://docs.nwjs.io/)<br> 
[Nodejs 官方英文文档](https://nodejs.org/api/)<br>
[W3C 官方英文文档](https://www.w3.org/)<br>
[Jquery 中文文档](http://www.jquery123.com/)<br>

聊天扯淡开发群(￣3￣)
------
[![](http://pub.idqqimg.com/wpa/images/group.png)](http://shang.qq.com/wpa/qunwpa?idkey=36fe0bea12ddced29bfc544fa36cc01acc704974968c56c8798f2835b80df52d)<br>
本人常年在线，有任何问题以及意见都可以像我反馈(･∀･)
license(｀・ω・´)
------
`danmu`'s code in this repo uses the GUN license

捐助
-----
学生党求点打赏<br>
直播间刷点辣条也好QAQ<br>
注明`B站ID`或者`github ID`<br>
![](http://bqsql.club/dashang.png)

