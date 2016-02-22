/**
 * Created by haozi on 16/2/18.
 * user.js
 * 获取用户信息库 for importScripts
 */
importScripts("minajax.js");
var user={};
/**
 * 用UID获取用户信息
 * @param id
 * @param callback
 */
user.getInfoById=function(id,callback)
{
    minAjax({
        url:"http://api.bilibili.cn/userinfo",
        type:"GET",
        data:{
            mid:id
        },
        success:function(a){
            callback(JSON.parse(a));
        }
    })
}
/**
 * 转换短房间号为长房间号
 * @param id
 */
user.getRoomIdByshortId=function(id){

}
/**
 * 获取房间相关信息
 * @param id
 * @param callback
 */
user.getRoomInfo=function(id,callback){
    minAjax({
        url:"http://live.bilibili.com/live/getInfo",
        type:"GET",
        data:{
            roomid:id
        },
        success:function(a){
            callback(JSON.parse(a));
        }
    })
}
/**
 *   发送弹幕
 * @param roomid    有效房间号
 * @param str       需要发送的字符串自己做判断小于20字
 * @param callback  发送成功回调  如果没有登录传入false
 */
user.sendDanmu=function(roomid,str,callback)
{
    if (global.isLogin)
    minAjax({
        "url":"http://live.bilibili.com/msg/send",
        data:{
            color:"16777215",
            fontsize:"25",
            mode:"1",
            msg:str,
            rnd:new Date().getTime(),
            roomid:roomid
        },
        success: function (a) {
            callback(a);
        }
    })
    else
    {
        callback(false);
    }
}
