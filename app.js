var net = require("net");
var PORT = 88;
//var HOST ="livecmt.bilibili.com";
var client = new net.Socket();
var HOST ="58.220.29.21";
var roomid = new Buffer([0x01,0x01,0x00,0x0c,0x00,0x00,0xf0,0xbb,0x00,0x00,0x00,0x00])
var xintiao = new Buffer([0x01,0x02,0x00,0x04]);
var client;
var chongshicishu=0;
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
app.listen(8080);
function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    socket.emit('OK', { "Success":"OK" });
});
connect()
function connect(){
    client.connect(PORT,HOST,function(){
        //console.log("连接弹幕服务器中")
        send_MSG("连接弹幕服务器中");
        //console.log("CONNECTED TO:"+HOST+":"+PORT+"\n");
        send_MSG("CONNECTED TO:"+HOST+":"+PORT+"\n");
        client.write(roomid);
        client.write(xintiao);
        H= setInterval(function(){
            client.write(xintiao);
        },30000)
    })
    client.on("data",function(data){
        //console.log(data);
        dm(data);
    })
    client.on("error",function(dada){
        //console.log("ERROR:"+dada);
    })
    client.on('close', function(data) {
        console.log("连接弹幕服务器爆炸")
        //$("body").html("<li>连接弹幕服务器爆炸"+data+"</li>");
        //console.log('Connection closed:'+data);
        clearInterval(H);
        client.destroy();
        chongshicishu++;
        if(chongshicishu<10)
            connect();
    });
}
function send_MSG(a){
    io.sockets.emit("msg",a);
}
function send_DATA(a)
{
    io.sockets.emit("data",a);
}
function dm (data)
{
    try {
        console.log(data);
        data = JSON.parse("{" + (data.toString().split("{")[1]));
        io.sockets.emit("data",data);
    }
    catch (e){

    }
}
