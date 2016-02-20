/**
 * Created by haozi on 16/2/20.
 */

var socketServeer = require("./js/link.js").init(61627);
socketServeer.onData(function(data){

});
var DmLister={list:{}};
/**
 * 连接 nw.js 事件中心
 * @returns {*}
 */
DmLister.connect=function(){
    var s = new this.Socket();
    this.list[s.id]=s;
    return s;
}
DmLister.Socket=function(){
    var s = {event:{}};
    s.id = DmLister.uuid();
    s.emit=function(eventName,data){
        DmLister.emit(id,eventName,data);
    }
    /**
     * 激活事件
     * @param id            接收者id
     * @param eventName     事件名
     * @param data          数据
     */
    s.emitOne=function(id,eventName,data){
        DmLister.emit(this.id,id,eventName,data);
    }
    /**
     *  添加事件监听
     * @param eventName 事件名称
     * @param callback  回调
     * @returns {boolean}   是否添加成功 已存在返回false
     */
    s.on=function(eventName,callback){
        if(this.event[eventName])
           return false;
        this.event[eventName]=callback;
        return true;
    }
    /**
     * 移除事件监听
     * @param eventName 事件名称
     * @returns {boolean}   是否成功
     */
    s.remove=function(eventName){
        if(!this.event[eventName])
            return false;
        else
            delete this.event[eventName];
        return true;
    }
    /**
     * 删除全部事件监听
     * @return true;
     */
    s.removeAll=function(){
        delete this.event;
        this.event={};
    }
    return s;
}

/**
 * 生成uuid
 * @returns {string}    生成好的uuid
 */
DmLister.uuid=function() {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
/**
 *
 * @param eventName     事件名称
 * @param data          数据
 * @param callback      回调  返回事件接收的数量
 */
DmLister.emit=function(eventName,data){
    for(var p in this.list)
    {
        p[eventName](data);
    }
}

/**
 *  定向发送
 * @param senderId                FA♂送者id
 * @param recId                   接收者id
 * @param eventName               事件名称
 * @param data                    数据
 * @param callback                回调
 */
DmLister.emitOne=function(senderId,recId,eventName,data){
    for(var p in this.list)
    {
        if(p.id==id)
        {
            p[eventName]({"eventName":eventName,"sender":senderId,"recId":recId,"data":data,"Date":new Date()});
            return;
        }
    }
}
/**
 * 绑定到全局对象 使其可以全局调用
 */
global.DmLister=DmLister;
