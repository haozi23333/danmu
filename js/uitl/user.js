/**
 * Created by haozi on 16/2/18.
 * user.js
 * 获取用户信息库 for importScripts
 */
importScripts("minajax.js");
var user={};
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
user.getRoomById=function(){

}
user.getRoomIdByshortId=function(id){



}