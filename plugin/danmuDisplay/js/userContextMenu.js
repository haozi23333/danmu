/**
 * Created by haozi on 16/2/17.
 * userContextMenu 鼠标在用户头像上面的监听事件
 */

//创建系统级的右键菜单  显示的时候会停止UI绘制
var menu = new nw.Menu();

// Add some items
var jinyan = nw.MenuItem({ label: '禁言' });
jinyan.click=function(){

}
var pinbi = nw.MenuItem({ label: '屏蔽' });
pinbi.click=function(){

}
var ganxie = nw.MenuItem({ label: '感谢' });
ganxie.click=function(){

}
var XXOO = nw.MenuItem({ label: '屏蔽' });
XXOO.click=function(){

}
menu.append(jinyan);
menu.append(pinbi);
menu.append(ganxie);
menu.append(XXOO);

