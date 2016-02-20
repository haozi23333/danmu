/**
 * Created by haozi on 16/2/17.
 * link bilibili danmu server
 * vaersion 0.0.1
 * 代码渣 看个鬼啊 _(:зゝ∠)_
 */
var net = require("net");
var link ={
    "PORT":88,
    "HOST":"58.220.29.21",
    "roomid":new Buffer([0x01,0x01,0x00,0x0c,0x00,0x00,0xf0,0xbb,0x00,0x00,0x00,0x00]),
    "xintiaobao":new Buffer([0x01,0x02,0x00,0x04]),
    "chongshicishu":10,
    "jishiqi":0,
    "Data":function(data){
        console.log(data);
    }
}
link.init=function(roomid){
    var roomid;
    if(roomid<4096) {
        roomid = "0" + roomid.toString(16);
        this.roomid[6] = parseInt(roomid.substring(0, 2), 16);
        this.roomid[7] = parseInt(roomid.substring(2, 4), 16);
    }
    if(roomid>65536&&roomid<1048576) {
        roomid = "0"+roomid.toString(16);
        this.roomid[5] = parseInt(roomid.substring(0, 2), 16);
        this.roomid[6] = parseInt(roomid.substring(2,4),16);
        this.roomid[7] = parseInt(roomid.substring(4,6),16);
    }
    else
    {
        roomid = roomid.toString(16);
        this.roomid[6] = parseInt(roomid.substring(0,2),16);
        this.roomid[7] = parseInt(roomid.substring(2,4),16);
    }
    var that = this;
    this.client = net.Socket();
    this.client.on("data",function(data){
        that.Data({"type":"success","code":0,msg:JSON.parse(data.toString().substring(4))})
    });
    this.client.on("error",function(dada){
        console.log("ERROR:"+dada);
    })
    this.client.on('close', function(data) {
        //console.log("连接弹幕服务器爆炸")
        that.Data({"type":"error","code":-1,"msg":"连接弹幕服务器爆炸Σ(っ °Д °;)っ"})
        clearInterval(this.jishiqi);
        that.client.destroy();
        that.chongshicishu++;
        if(that.chongshicishu<10)
            that.connect();
    });
    return this;
}
link.connect=function(){
    //console.log("链接服务器");
    this.Data({"type":"success","code":0,"msg":"正在连接弹幕服务器_(:зゝ∠)_"})
    var that = this;
    this.client.connect(this.PORT,this.HOST,function(){
        that.client.write(that.roomid);
        that.client.write(that.xintiaobao);
        that.jishiqi= setInterval(function(){
            that.client.write(that.xintiaobao);
        },30000)
    });
}
link.onData=function(a)
{
    this.Data = a;
}
//module.exports=link;





