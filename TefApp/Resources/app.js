// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'Accueil',
    url: 'views/index.js' ,
    backgroundColor:'#333333'
});

var win2 = Titanium.UI.createWindow({  
    title:'Portfolio',
    url: 'views/portfolio.js' ,
    backgroundColor:'#333333'
});

var win3 = Titanium.UI.createWindow({  
    title:'Contact',
    url: 'views/contact.js' ,
    backgroundColor:'#333333'
});


var tab1 = Titanium.UI.createTab({  
    //icon: Titanium.UI.iPhone.SystemIcon.TOP_RATED ,
    icon: 'icons/Home_nav_ui.png',
    title:'Accueil',
    window:win1
});

var tab2 = Titanium.UI.createTab({  
    icon: 'icons/Portfolio_nav_ui.png',
    title:'Portfolio',
    window:win2
});

var tab3 = Titanium.UI.createTab({  
    //icon:'KS_nav_views.png',
    icon: 'icons/Contact_nav_ui.png',
    title:'Contact',
    window:win3
});


/*
var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
*/

//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
