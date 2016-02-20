B站弹幕姬 for NW.js 

说明(=・ω・=)
-------
这个项目是方便使用`linux`和`MACOS`系统进行直播的同学提供的弹幕SDK<br>
当然在`window`系统下面都是可以使用的<br>
[本人直播间地址](http://live.bilibili.com/61627)房间号61627<br>
Version 0.0.1

食用方式(｀・ω・´)
------
`clone`这个项目<br>
`下载`[NW.js SDK](http://nwjs.io/);<br>
`nw.js /danmu`<br>
文件说明(｡･ω･｡)
--------
link.js

```javascript
    var DM = require("./js/link.js").init(61627);//init(房间号)
        DM.onData(function(data){
            console.log(data)
        });//onData(callback)接受到弹幕信息的时候执行回调,返回的是socket接收到的原数据
    //data格式
    var t=   {"info":
            [
                [0,1,25,16777215,1455719956,"1455705800",0,"7aa0e8c7",0],
                "弹幕文字",
                [用户UID,
                    "用户名",
                    1,0,0],
                [],
                [21,16067],
                []
            ],
        "cmd":"DANMU_MSG"
    }
```
全局API
```javascript
    //写插件请不要使用link.js开启新的socket线程
    //DmLister 是一个`global`属性的对象 请不要覆盖。
    var listen = DmLister.connect();//链接到本弹幕姬事件中心
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
    listen.on("DM",callback);//接收弹幕信息
    listen.on("exit",callback);//停止插件运行并退出
    listen.on("reload",callback);//插件重新加载
    listen.on("stop",callback)//强行退出插件在收到这个信息5秒之后窗口会被强制关闭
```
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
```

编写插件(｀・ω・´)
------
注意件事情`nw.js`内核是`chrome`,所有东西都不需要考虑兼容性问题。
```josn
    {
        "name":"插件名称",
        "main":"启动文件",
        "author":"作者",
        "version":"0.0.1",
        "npm":[{
            "name":"名称"，
            "version":"版本"
        }]
    }
```
`npm`暂不支持<br>
由于nw.js 支持`node`所以允许加载nodejs的模块<br>
本弹幕姬的插件系统比较简单,所有东西都可以自定义自由度较高//(╯‵□′)╯︵┻━┻偷懒就偷懒废话这么多<br>

用到的库
-----
[minAjax](http://argunner.github.io/minAjax.js/)开源的小巧轻便的ajax框架(有修改)<br>
`plugin`引用路径`src="../../js/minajax.js"`<br>
[Jquery v3.0.0-beta1](https://jquery.com/)前端框架<br>
`plugin`引用路径`src="../../js/jquery.js"`<br>

聊天扯淡开发群
------
[![](http://pub.idqqimg.com/wpa/images/group.png)](http://shang.qq.com/wpa/qunwpa?idkey=36fe0bea12ddced29bfc544fa36cc01acc704974968c56c8798f2835b80df52d);
license(｀・ω・´)
------
`danmu`'s code in this repo uses the GUN license

捐助
-----
学生党求点打赏<br>
直播间刷点辣条也好QAQ<br>
注明`B站ID`或者`github ID`<br>
![](http://bqsql.club/aex09165h9zbw2os5hpzt09.png)

