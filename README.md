B站弹幕姬 for NW.js 

说明(=・ω・=)
-------
这个项目是方便使用`linux`和`MACOS`系统进行直播的同学提供的弹幕SDK<br>
当然在`window`系统下面都是可以使用的

Version 0.0.1

食用方式(｀・ω・´)
------
`clone`这个项目<br>
`下载`[NW.js SDK](http://nwjs.io/);<br>
`nw.js /danmu`<br>
文件说明(╯‵□′)╯︵┻━┻
--------
link.js

```javascript
    var DM = require("./js/link.js").init(61627);//init(房间号)
        DM.onData(function(data){
            console.log(data)
        });//onData(callback)接受到弹幕信息的时候执行回调               
```

