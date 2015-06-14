//setting the default orientation and prevent gesture detection & orientation change
function switchOrientation(){
	Ti.UI.orientation = Ti.UI.LANDSCAPE_LEFT;
}

switchOrientation();
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//Titanium.UI.setBackgroundColor('#000');
Titanium.UI.setBackgroundColor('#333333');


// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//window contenant la scrollableView et ses contenus html
var homeWin = Titanium.UI.createWindow({  
    title:'HOME',
    url: 'views/home.js' ,
    backgroundColor:'#fff' ,
    backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var homeTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'home',
    window: homeWin
});

var homeLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'Welcome to A# App !',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

homeWin.add(homeLabel);
tabGroup.addTab(homeTab);

// je crée la window de la scrollable présentation
var showreelWin = Titanium.UI.createWindow({  
    title:'SHOWREEL 2011',
    url: 'views/showreel.js' ,
    backgroundColor:'#fff' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var showreelTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'showreel',
    window: showreelWin
});

tabGroup.addTab(showreelTab);


// je crée la window des actualités / dernières offres
var newsWin = Titanium.UI.createWindow({  
    title:'NEWS',
    url: 'views/news.js' ,
    backgroundColor:'#fff' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var newsTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'News',
    window: newsWin
});

tabGroup.addTab(newsTab);


// je crée la window des geolocalisation en provenance d un JSON gen a partir de bdd WP
var wpjsonWin = Titanium.UI.createWindow({  
    title:'WPJSON',
    url: 'views/wpjson.js' ,
    backgroundColor:'#fff' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var wpjsonTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'WPJSON',
    window: wpjsonWin
});

tabGroup.addTab(wpjsonTab);


//je crée la window contenant la vebview pointant vers le webshop
var webshopWin = Titanium.UI.createWindow({  
    title:'WEBSHOP',
    url: 'views/webshop.js' ,
    backgroundColor:'#fff' ,
    backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var webshopTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'webshop',
    window: webshopWin
});


tabGroup.addTab(webshopTab);


//je crée la window contenant la vebview qui pointe vers une version iPad de mon WP
var IpadWordPressWin = Titanium.UI.createWindow({  
    title:'WEBSHOP',
    url: 'views/ipadwordpress.js' ,
    backgroundColor:'#fff' ,
    backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var IpadWordPressTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'iPadPress',
    window: IpadWordPressWin
});


tabGroup.addTab(IpadWordPressTab);


// je crée la window de contact / map
var contactWin = Titanium.UI.createWindow({  
    title:'CONTACT',
    url: 'views/contact.js' ,
    backgroundColor:'#fff' ,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

var contactTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Contact',
    window: contactWin
});

tabGroup.addTab(contactTab);

// open tab group
//tabGroup.open();

setTimeout(function() {
    tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP,
    duration:2500});
}, 2500);
