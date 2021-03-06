/**
 * Created by haozi on 16/2/17.
 */
var createDM={};
//包含库文件
importScripts("../../../js/minajax.js");
//用户信息请求库
importScripts("../../../js/uitl/user.js");
//
importScripts("../../../js/uitl/GiftName.js");
//线程事件处理
onmessage = function(msg) {
    if(msg.data.type=="createTextDm")
        createDM.createTextDm(msg.data.data);
    if(msg.data.type=="createGiftDm")
        createDM.createGiftDm(msg.data.data);
};
createDM.createTextDm=function (data){
    user.getInfoById(data.uid,function(a)
    {
        console.log(data.value);

        var box = "<div userId=\""+data.uid+"\" class='DM TextDM' id=\"DM_"+ data.num+"\"><div class='tx' style='background-image: url(\""+ a.face+"\")'></div><span>"+data.name+":"+data.value+"</span></div>";
        //不能再线程中操作UI,也不可以吧window,document什么的传过,必须发送回主线程进行UI绘制
        postMessage({"type":"TextDM",data:{number:data.num,"html":box}});
    });
}
createDM.createGiftDm=function (data){
    //过滤一根辣条
    if(data.giftnum==1&&data.giftId==GIFTNAME.latiao)
        return;
    //判断金银瓜子
    if(data.coinType=="undefined"||data.coinType=="silver")
        var c = "DM_Gift_Yin"
    else
        var c = "DM_Gift_Jin"
    //switch (data.sf)
    //{
    //    case "LY":
    //        break;
    //    case "GLY":
    //        break;
    //    case "FG":
    //        break;
    //}
    user.getInfoById(data.uid,function(a) {
        //switch (data.giftId) {
        //    case GIFTNAME.biangdang:
        //        break;
        //    case GIFTNAME.kela:
        //        break;
        //    case GIFTNAME.latiao:
        //        break;
        //    case GIFTNAME.miaoniang:
        //        break;
        //    case GIFTNAME.moxing22:
        //        break;
        //    case GIFTNAME.moxing33:
        //        break;
        //    case GIFTNAME.yiyuan:
        //        break;
        //    case GIFTNAME.pangci:
        //        break;
        //    case GIFTNAME["666"]:
        //        break;
        //    case GIFTNAME.FFF:
        //        break;
        //    case GIFTNAME["233"]:
        //        break;
        //    case GIFTNAME.yingyuanbang:
        //        break;
        //    case GIFTNAME.yingyuanjing:
        //        break;
        //    case GIFTNAME.niangao:
        //        break;
        //}

        var box = "<div userId=\"" + data.uid + "\" class='DM GiftDM' id=\"DM_" + data.num + "\"><div class=\"tx " + c + "\" style='background-image: url(\"" + a.face + "\")'></div>";
        box += "<span style='float: left;width: auto'>"+data.name+":</span><div class=\"ly "+ c +"\" style='background-image: url(\"../../../resources/img/gift/gift-"+data.giftId+".gif\")'  ></div>X"+data.giftnum+"</div>";
        postMessage({"type": "TextDM", data: {number: data.num, "html": box}});
    });
}
