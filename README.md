B站弹幕姬 for NW.js 

说明(=・ω・=)
-------
这个项目是方便使用`linux`和`MACOS`系统进行直播的同学提供的弹幕SDK<br>
当然在`window`系统下面都是可以使用的<br>
本人直播间地址[~|](http://live.bilibili.com/61627)<br>
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
socket
```javascript
    //如果加入了本文件 请不要使用link.js开启新的socket线程
    //DmLister 是一个`global`属性的对象 请不要覆盖。
    var listen = DmLister.connect();//链接到本弹幕姬事件中心
        listen.on("data",function(data){//添加事件监听
            //TOTD ......
        })
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
```


Lister(｀・ω・´)
------
