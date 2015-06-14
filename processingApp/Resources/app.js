// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//window contenant la scrollableView et ses contenus html
var win1 = Titanium.UI.createWindow({  
    title:'HTML',
    url: 'views/win1.js' ,
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'html',
    window: win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am conceptWindow 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
tabGroup.addTab(tab1);



//window de debug 
var debugWin = Titanium.UI.createWindow({  
    title:'Processing',
    url: 'views/win2.js' ,
    backgroundColor:'#fff'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Processing',
    window: debugWin
});


tabGroup.addTab(tab2);  






// open tab group
tabGroup.open();

