// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//déclaration des différentes fenetres de l'app

//la splashView (page sur laquelle on tombe en lancant l'app)
var splashView = Titanium.UI.createWindow({  
    title:'SplashView',
    backgroundColor:'#fff',
    url: 'views/splash.js'
});

//la page home
var homeView = Titanium.UI.createWindow({  
    title:'homeView',
    backgroundColor:'#fff',
    url: 'views/home.js'
});

//la page news
var newsView = Titanium.UI.createWindow({  
    title:'newsView',
    backgroundColor:'#fff',
    url: 'views/news.js'
});

//la page products
var productsView = Titanium.UI.createWindow({  
    title:'productsView',
    backgroundColor:'#fff',
    url: 'views/products.js'
});

//la page contact
var contactView = Titanium.UI.createWindow({  
    title:'contactView',
    backgroundColor:'#fff',
    url: 'views/contact.js'
});


//on ajoute ici les tabs btns de la tabbar menant directement aux pages
// nb: pas de tab pour accéder au splash ;p !

var homeTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'accueil',
    window: homeView
});

var newsTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'actualité',
    window: newsView ,
     
});

var productsTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'produits',
    window: productsView
});

var contactTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'contact',
    window: contactView
});

//je crée ici un label pour la splash (et même peut etre une image de background/image tt court ...)
var splashLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'I am a Splash!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
// et je lui ajoute ici
splashView.add(splashLabel);


//j'ajoute les différents tabs btns
tabGroup.addTab(homeTab);  
tabGroup.addTab(newsTab);  
tabGroup.addTab(productsTab);  
tabGroup.addTab(contactTab);  


// on  ouvre le groupe des tabs (il faut apparement faire comme ceci ...?! )
tabGroup.open();
