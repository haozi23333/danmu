/**
 * Created by haozi on 16/2/20.
 * 插件系统
 */
var fs = require("fs");
var plugin={list:{}};
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
    return plugin._temp;
}
