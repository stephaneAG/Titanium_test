// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//(main.js? ^) > We not got our App listening to our custom events ! ^
Ti.App.addEventListener('postPublished',postPublished);

function postPublished()
{
    win2.close(); // on referme notre page d'édition de post
    win3.open(); // on ouvre notre win finale
}

Ti.App.addEventListener('enablePostEditFields',enablePostEditFields);

function enablePostEditFields(){
	
	post_title_input.enabled = true;
	post_meta_main_category_for_mobile_table_row_input.enabled = true;
	post_meta_level_one_category_for_mobile_table_row_input.enabled = true;
	post_meta_level_two_category_for_mobile_table_row_input.enabled = true;
		
	post_meta_reference_produit_input.enabled = true;
	post_meta_nom_boutique_produit_input.enabled = true;
	post_meta_categorie_produit_input.enabled = true;
	post_meta_categorie_produit_input.enabled = true;
	
}

Ti.App.addEventListener('resetPostEditFields',enablePostEditFields);

function resetPostEditFields(){
	
	post_title_input.value = 'empty';
	post_title_input.value.
	post_meta_main_category_for_mobile_table_row_input.value = '';
	post_meta_level_one_category_for_mobile_table_row_input.value = '';
	post_meta_level_two_category_for_mobile_table_row_input.value = '';
		
	post_meta_reference_produit_input.value = '';
	post_meta_nom_boutique_produit_input.value = '';
	post_meta_categorie_produit_input.value = '';
	post_meta_categorie_produit_input.value = '';
	
}




//je crée la premiere window : celle de l'accueil/////////////////////////////////////////////////////////////////
//contenu: 2 inputs / 1 bnt login

//je crée des var s bidons pour tester la fct de login
var username = 'stephaneAG';
var userpass = 'jackass007';

//je crée la window
var win1 = Titanium.UI.createWindow({  
    title:'Post.',
    backgroundColor:'#191919'
});

// je crée un label de ibenvenue
var welcomeLbl = Titanium.UI.createLabel({
	color:'#999',
	text:"Bienvenue sur Post. \n D'ici ,on peut poster tout...  \n mais pas n'importe quoi! ^^" ,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	//backgroundColor: '#C3C3C3',
	//width:'auto'
	width: 320,
	height: 100,
	top:40,
    left:0
});

//je crée le premier input
var username_input = Titanium.UI.createTextField({
    color:'#336699',
    top:150,
    left:40,
    width:240,
    height:40,
    hintText:'Username',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

//je crée le second input
var userpass_input = Titanium.UI.createTextField({
    color:'#336699',
    top:200,
    left:40,
    width:240,
    height:40,
    hintText:'Userpass',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

//je crée le bouton de login
var loginBtn = Ti.UI.createButton({
	title: 'Login',
    width:100,
    height:40,
    //backgroundColor: '#c4c4c4',
    //backgroundImage:'../images/order.png',
    top:250,
    left:185,
    //opacity:0
});

//ajout des différents event listeners
//-- Listen for the next click on the key board
username_input.addEventListener('return',function(){userpass_input.focus();});
userpass_input.addEventListener('return',function(){userpass_input.blur();});

//event listener du bouton login
loginBtn.addEventListener('click',function(){
	
	if (username_input.value == '' || userpass_input.value == ''){
    	alert('Tous les champs sont requis');
	} else if (username_input.value == username || userpass_input.value == userpass){
   	
   		alert('Glad to see you son!');
   		username_input.enabled = false;
   		userpass_input.enabled = false;
   		win1.close();
   		win2.open({ transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT });
	} else {
	
		alert("Vous ne possédez pas les droits d'accès à cet application");
		
	}
	
});

//on ajoute les différents éléemnts a notre window
win1.add(welcomeLbl);
win1.add(username_input);
win1.add(userpass_input);
win1.add(loginBtn);











//je crée la seconde window : celle de l'ajout de post/////////////////////////////////////////////////////////////////
//nb: pour ce dev de test, je vise un custom type précis: les produits ^
//contenu: bcp de trucs ^^

//je crée la window
var win2 = Titanium.UI.createWindow({  
    title:'Posts',
    backgroundColor:'#191919'
});


//je crée la scrollView qui va contenir les différents champs et boutons de ma page de rédaction de post
var win2ScrollView = Titanium.UI.createScrollView({
	//backgroundColor: 'black' ,
	contentWidth: 'auto' ,
	//contentWidth: 960 ,
	contentHeight: 'auto' ,
	//contentHeight: 370 ,
	//showVerticalScrollIndicator: false ,
	//showHorizontalScrollIndicator: false ,
	//horizontalBounce: false ,
	//verticalBoune: false ,
	
});


//je crée le client HTTP (! avant tout autre chose ! ^)
var publishReq = Titanium.Network.createHTTPClient();


// je crée un label de ibenvenue
var postsLbl = Titanium.UI.createLabel({
	color:'#999',
	text:"Bienvenue sur vos Post." ,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	//backgroundColor: '#C3C3C3',
	//width:'auto'
	width: 320,
	height: 25,
	top:25,
    left:0
});

//je crée le premier des inputs du post , en l'occurence celui du titre
var post_title_input = Titanium.UI.createTextField({
    color:'#336699',
    top:60,
    left:40,
    width:240,
    height:40,
    hintText:'Post title',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

//je crée tous les autres inputs de mon post, donc des metas ( > question de liberté ;p)

//en premier les champs utiles a une future nav bien pratique (..)
var post_meta_main_category_for_mobile_table_row_input = Titanium.UI.createTextField({
    color:'#336699',
    top:110,
    left:40,
    width:240,
    height:40,
    hintText:'Main cat for table row',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

var post_meta_level_one_category_for_mobile_table_row_input = Titanium.UI.createTextField({
    color:'#336699',
    top:160,
    left:40,
    width:240,
    height:40,
    hintText:'Level one cat for table row',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

var post_meta_level_two_category_for_mobile_table_row_input = Titanium.UI.createTextField({
    color:'#336699',
    top:210,
    left:40,
    width:240,
    height:40,
    hintText:'Level two cat for table row',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

//et en second ce qui nous intéresse réellement, c.a.d le contenu de notre post
var post_meta_reference_produit_input = Titanium.UI.createTextField({
    color:'#336699',
    top:260,
    left:40,
    width:240,
    height:40,
    hintText:'Reference',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

var post_meta_nom_boutique_produit_input = Titanium.UI.createTextField({
    color:'#336699',
    top:310,
    left:40,
    width:240,
    height:40,
    hintText:'Nom en boutique',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

var post_meta_categorie_produit_input = Titanium.UI.createTextField({
    color:'#336699',
    top:360,
    left:40,
    width:240,
    height:40,
    hintText:'Catégorie',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

var post_meta_type_produit_input = Titanium.UI.createTextField({
    color:'#336699',
    top:410,
    left:40,
    width:240,
    height:40,
    hintText:'Type',
    //backgroundColor: '#ffffff',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    //borderColor:'#FFFFFF',
    borderColor:'#191919',
    //backgroundImage:'../images/textfield.png',
    paddingLeft:8,
    paddingRight:8,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    suppressReturn:false
});

//je crée le bouton qui permet d'updater le post tout fraichement rédigé
var updatePostBtn = Ti.UI.createButton({
	title: 'Post!',
    width:100,
    height:40,
    //backgroundColor: '#c4c4c4',
    //backgroundImage:'../images/order.png',
    top:460,
    left:185,
    //opacity:0
});


//on ajoute les différents éléemnts a notre window
// Edit : > ou a notre scrollView ;p

win2ScrollView.add(postsLbl);

win2ScrollView.add(post_title_input);

win2ScrollView.add(post_meta_main_category_for_mobile_table_row_input);
win2ScrollView.add(post_meta_level_one_category_for_mobile_table_row_input);
win2ScrollView.add(post_meta_level_two_category_for_mobile_table_row_input);

win2ScrollView.add(post_meta_reference_produit_input);
win2ScrollView.add(post_meta_nom_boutique_produit_input);
win2ScrollView.add(post_meta_categorie_produit_input);
win2ScrollView.add(post_meta_type_produit_input);

win2ScrollView.add(updatePostBtn);


win2.add(win2ScrollView);


//ajout des différents event listeners
//-- Listen for the next click on the key board
post_title_input.addEventListener('return',function(){post_meta_main_category_for_mobile_table_row_input.focus();});

post_meta_main_category_for_mobile_table_row_input.addEventListener('return',function(){post_meta_level_one_category_for_mobile_table_row_input.focus();});
post_meta_level_one_category_for_mobile_table_row_input.addEventListener('return',function(){post_meta_level_two_category_for_mobile_table_row_input.focus();});
post_meta_level_two_category_for_mobile_table_row_input.addEventListener('return',function(){post_meta_reference_produit_input.focus();});

post_meta_reference_produit_input.addEventListener('return',function(){post_meta_nom_boutique_produit_input.focus();});
post_meta_nom_boutique_produit_input.addEventListener('return',function(){post_meta_categorie_produit_input.focus();});
post_meta_categorie_produit_input.addEventListener('return',function(){post_meta_type_produit_input.focus();});

post_meta_type_produit_input.addEventListener('return',function(){post_meta_type_produit_input.blur();});

//event listener du bouton login
updatePostBtn.addEventListener('click',function(){
	
	if (post_title_input.value == ''){
    	alert('Veuillez saisir au moins un titre');
	} else if (post_meta_main_category_for_mobile_table_row_input.value == '' || post_meta_level_one_category_for_mobile_table_row_input.value == ''  || post_meta_level_two_category_for_mobile_table_row_input.value == '' ){
   	
   		alert('Attention! \nAucun repère de produit saisi pour l app ');
   		//win2.open({ transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT });
	} else {
	
		//on empeche la modification des champs avant d'émettre notre requette HTTP
		post_title_input.enabled = false;
		post_meta_main_category_for_mobile_table_row_input.enabled = false;
		post_meta_level_one_category_for_mobile_table_row_input.enabled = false;
		post_meta_level_two_category_for_mobile_table_row_input.enabled = false;
		
		post_meta_reference_produit_input.enabled = false;
		post_meta_nom_boutique_produit_input.enabled = false;
		post_meta_categorie_produit_input.enabled = false;
		post_meta_categorie_produit_input.enabled = false;
		
		//on définit notre requete HTTP
		publishReq.open('POST','http://stephaneadamgarnier.com/WORDPRESSJQUERYMOBILE/mobilePostAppWPPublisher.php');
		var params = {
			
			title: post_title_input.value,
			metamaincatformobiletablerow: post_meta_categorie_produit_input.value,
			metalvlonecatformobiletablerow: post_meta_level_one_category_for_mobile_table_row_input.value,
			metalvltwocatformobiletablerow: post_meta_level_two_category_for_mobile_table_row_input.value,
			metareferenceproduit: post_meta_reference_produit_input.value,
			metanomboutiqueproduit: post_meta_nom_boutique_produit_input.value,
			metacategorieproduit: post_meta_categorie_produit_input.value,
			metatypeproduit: post_meta_type_produit_input.value
						
		};
		
		//on envoie notre requette HTTP
		publishReq.send(params);
	}
	
});

//event listener de la mthd onLoad de notre requête HTTP
//-- onLoad method for our http request
publishReq.onload = function(){
	
    var json = this.responseText;
    var response = JSON.parse(json);
 
    //l'insert du post a fonctionné correctement
    if (response.insert == true){
    	
        var alertDialog = Titanium.UI.createAlertDialog({
            title: 'Succès',
            message: 'Votre Post est en ligne!',
            buttonNames: ['Sweet!']
        });
        alertDialog.show();
        alertDialog.addEventListener('click',function(e)
        {
            //le custom event qui permet de switcher l'utilisateur de view
            //en l'occurence ,utilisé pour reconduire le user sur une autre page pdt que je vide la page du post posté (;p)
            Ti.App.fireEvent('postPublished');
        });
    } else if(response.insert == false)  {
        //l'insert du post a merdé lamentablement
        alert("Echec: impossib' d'ojouter 'brin d'paill' dans t' ranch' lô !");
        post_title_input.enabled = true;
		post_meta_main_category_for_mobile_table_row_input.enabled = true;
		post_meta_level_one_category_for_mobile_table_row_input.enabled = true;
		post_meta_level_two_category_for_mobile_table_row_input.enabled = true;
		
		post_meta_reference_produit_input.enabled = true;
		post_meta_nom_boutique_produit_input.enabled = true;
		post_meta_categorie_produit_input.enabled = true;
		post_meta_categorie_produit_input.enabled = true;
    } else {
    	
    	alert('Erreur inconnue');
    	
    }
};
 
//une erreur de connection est survenue > aka "eh merde!"
publishReq.onerror = function(event){
	
    alert('Erreur de réseau: ' + JSON.stringify(event));
    post_title_input.enabled = true;
	post_meta_main_category_for_mobile_table_row_input.enabled = true;
	post_meta_level_one_category_for_mobile_table_row_input.enabled = true;
	post_meta_level_two_category_for_mobile_table_row_input.enabled = true;
		
	post_meta_reference_produit_input.enabled = true;
	post_meta_nom_boutique_produit_input.enabled = true;
	post_meta_categorie_produit_input.enabled = true;
	post_meta_categorie_produit_input.enabled = true;
};









//je crée la troisieme window : celle de l'after post publish ^^ /////////////////////////////////////////////////////////////////
//contenu: 2 inputs / 1 bnt login

//je crée la window
var win3 = Titanium.UI.createWindow({  
    title:'Thx for Posting',
    backgroundColor:'#191919'
});

// je crée un label de ibenvenue
var postPublishedLbl = Titanium.UI.createLabel({
	color:'#999',
	text:"Merci d'avoir utilisé Post." ,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	//backgroundColor: '#C3C3C3',
	//width:'auto'
	width: 320,
	height: 100,
	top:160,
    left:0
});

//je crée le bouton de login
var rePostBtn = Ti.UI.createButton({
	title: 'Riposte!',
    width:100,
    height:40,
    //backgroundColor: '#c4c4c4',
    //backgroundImage:'../images/order.png',
    top:300,
    left:185,
    //opacity:0
});

var sleepBtn = Ti.UI.createButton({
	title: 'Sleep mode..',
    width:100,
    height:40,
    //backgroundColor: '#c4c4c4',
    //backgroundImage:'../images/order.png',
    top:360,
    left:185,
    //opacity:0
});


//on ajoute les différents éléemnts a notre window
win3.add(postPublishedLbl);
win3.add(rePostBtn);
win3.add(sleepBtn);


//ajout des différents event listeners
//event listener du bouton login
rePostBtn.addEventListener('click',function(){
	
	//Ti.App.fireEvent('eventName');
	Ti.App.fireEvent('enablePostEditFields');
	Ti.App.fireEvent('resetPostEditFields');
	win3.close();
	win2.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
    duration:1000});
	
});

sleepBtn.addEventListener('click',function(){
	
	//Ti.App.fireEvent('eventName');
	Ti.App.fireEvent('enablePostEditFields');
	Ti.App.fireEvent('resetPostEditFields');
	win3.close();
	win1.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT,
    duration:1000});
	
});















///////////////// " GRAND OPENING TONIGHT: " //////////////////////////////////


//win1.open();
//custom entry ... tadaaaaaAAAA ^
setTimeout(function() {
    win1.open({
    transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP,
    duration:1500});
}, 2500);

// end de ma pitite custom entry ;p

/*

var tabGroup = Titanium.UI.createTabGroup();
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.open();
*/