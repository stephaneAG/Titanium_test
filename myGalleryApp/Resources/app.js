//setting the default orientation and prevent gesture detection & orientation change
function switchOrientation(){
	Ti.UI.orientation = Ti.UI.PORTRAIT;
}

switchOrientation();
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//Titanium.UI.setBackgroundColor('#000');
Titanium.UI.setBackgroundColor('#333333');


// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//window contenant la scrollableView et ses contenus html
var homeWin = Titanium.UI.createWindow({  
    title:'Capture it!',
    url: 'views/home.js' ,
    backgroundColor:'#fff' ,
    backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
});

var homeTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Home',
    window: homeWin
});

var homeLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'Welcome to myGallery App !',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

homeWin.add(homeLabel);
tabGroup.addTab(homeTab);

// je crée la window de la scrollable présentation
var galleryWin = Titanium.UI.createWindow({  
    title:'Gallery',
    url: 'views/gallery.js' ,
    backgroundColor:'#fff' ,
});

var showreelTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Gallery',
    window: galleryWin
});

tabGroup.addTab(showreelTab);


// je crée la window des actualités / dernières offres
var contactWin = Titanium.UI.createWindow({  
    title:'Contact',
    url: 'views/contact.js' ,
    backgroundColor:'#fff' ,
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
