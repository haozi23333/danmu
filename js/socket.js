/**
 * Created by haozi on 16/2/20.
 */

global.DmLister={list:{}};
/**
 * 连接 nw.js 事件中心
 * @returns {*}
 */
global.DmLister.connect=function(){
    var s = new this.Socket();
    global.DmLister.list[s.id]=s;
    return s;
}
global.DmLister.Socket=function(){
    var s = {event:{}};
    s.id = global.DmLister.uuid();
    s.emit=function(eventName,data){
        global.DmLister.emit(this.id,eventName,data);
    }
    /**
     * 激活事件
     * @param id            接收者id
     * @param eventName     事件名
     * @param data          数据
     */
    s.emitOne=function(id,eventName,data){
        global.DmLister.emit(this.id,id,eventName,data);
    }
    /**
     *  添加事件监听
     * @param eventName 事件名称
     * @param callback  回调
     * @returns {boolean}   是否添加成功 已存在返回false
     */
    s.on=function(eventName,callback){
        if(global.DmLister.list[this.id].event[eventName])
           return false;
        global.DmLister.list[this.id].event[eventName]=callback;
        return true;
    }
    /**
     * 移除事件监听
     * @param eventName 事件名称
     * @returns {boolean}   是否成功
     */
    s.remove=function(eventName){
        if(!global.DmLister.list[this.id][eventName])
            return false;
        else
            delete global.DmLister.list[this.id][eventName];
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
global.DmLister.uuid=function() {
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
global.DmLister.emit=function(id,eventName,data){
    for(var p in global.DmLister.list)
    {
        if(id!=p&&global.DmLister.list[p].event[eventName])
            global.DmLister.list[p].event[eventName](data);
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
global.DmLister.emitOne=function(senderId,recId,eventName,data){
    for(var p in global.DmLister.list)
    {
        if(p.id==id)
        {
            global.DmLister.list[p][eventName](data);
            return;
        }
    }
}
/**
 * 绑定到全局对象 使其可以全局调用
 */
