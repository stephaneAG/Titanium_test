//setting the default orientation and prevent gesture detection & orientation change
function switchOrientation(){
	Ti.UI.orientation = Ti.UI.PORTRAIT;
}

switchOrientation();
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////// HOME VIEW ///////////////////////////////////////////////////////////////////////////////
var homeWin = Titanium.UI.createWindow({  
    title:'HOME',
    url: 'views/home.js' ,
    backgroundColor:'#fff' ,
    //backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
});

var homeTab = Titanium.UI.createTab({  
    icon:'pers_nav_home_rnd.png',
    title:'home',
    window: homeWin
});


tabGroup.addTab(homeTab);

//////////////////////////////////PRODUITS CATEGORIE UNE//////////////////////////////////////////////////////////
var productCatOneWin = Titanium.UI.createWindow({  
    title:'ProdCat1',
    url: 'views/productCatOneWin.js' ,
    backgroundColor:'#fff' ,
});

var wproductCatOneTab = Titanium.UI.createTab({  
    icon:'pers_nav_restaurant_rnd.png',
    title:'Prod Cat 1',
    window: productCatOneWin
});

tabGroup.addTab(wproductCatOneTab);

//////////////////////////////////PRODUITS CATEGORIE DEUX//////////////////////////////////////////////////////////
var productCatTwoWin = Titanium.UI.createWindow({  
    title:'ProdCat2',
    url: 'views/productCatTwoWin.js' ,
    backgroundColor:'#fff' ,
});

var wproductCatTwoTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Prod Cat 2',
    window: productCatTwoWin
});

//tabGroup.addTab(wproductCatTwoTab);


//////////////////////////////////PRODUITS CATEGORIE TROIS//////////////////////////////////////////////////////////
var productCatThreeWin = Titanium.UI.createWindow({  
    title:'ProdCat3',
    url: 'views/productCatTwoWin.js' ,
    backgroundColor:'#fff' ,
});

var productCatThreeTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Prod Cat 3',
    window: productCatThreeWin
});

//tabGroup.addTab(productCatThreeTab);

////////////////////////////// SHOPPING BAG VIEW ///////////////////////////////////////////////////////////////////////////////
var bagWin = Titanium.UI.createWindow({  
    title:'Shopping Bag',
    url: 'views/shoppingbag.js' ,
    backgroundColor:'#fff' ,
    //backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
});

var bagTab = Titanium.UI.createTab({  
    icon:'pers_nav_bag_rnd.png',
    title:'shopping bag',
    window: bagWin
});


tabGroup.addTab(bagTab);

////////////////////////////// INFOS VIEW ///////////////////////////////////////////////////////////////////////////////
var infosWin = Titanium.UI.createWindow({  
    title:'Infos',
    url: 'views/infos.js' ,
    backgroundColor:'#fff' ,
    //backgroundImage: 'views/homeStuff/homeBckgrnd.png' ,
});

var infosTab = Titanium.UI.createTab({  
    icon:'pers_nav_infos_rnd.png',
    title:'infos',
    window: infosWin
});


tabGroup.addTab(infosTab);



tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
    duration:1500});