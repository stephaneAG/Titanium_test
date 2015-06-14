// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  
    title:'ScrollableWin1',
    backgroundColor:'#fff'
});

var webview = Titanium.UI.createWebView({url:'http://78.192.40.156:4567/'}); 

win1.add(webview); 
win1.open();