/**
 * Created by haozi on 16/2/20.
 * 插件系统
 */
var fs = require("fs");
var plugin={list:{}};
/**
 * 初始化插件模块
 * 读取本地信息
 * @returns {Array}
 */
plugin.init=function(){
    this._temp=[];
    var a = fs.readdirSync(process.cwd()+"/plugin");
        for(var i=0;i< a.length;i++)
        {
            if(fs.lstatSync(process.cwd()+"/plugin/"+a[i]).isDirectory())
            {
                plugin._temp.push(JSON.parse(fs.readFileSync(process.cwd()+"/plugin/"+a[0]+"/package.json","UTF8")));
            }
        }
}
/**
 * 载入插件
 * @param p 对象
 */
plugin.load=function(){
    var that = this;
    for(var i = 0 ;i< this._temp.length;i++)
    {
        nw.Window.open("plugin/"+this._temp[i].name+"/"+this._temp[i].main+"?"+i,this._temp[i].window, function(new_win) {
            var _i = new_win.window.document.location.href.split("?")[1];
            that.list[that._temp.name] = that._temp[_i];
            that.list[that._temp.name].win = new_win;
        });
    }
}