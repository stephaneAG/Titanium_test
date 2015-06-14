/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;
/* old school way, no thaaat dynamic ...
var newsWebView = Titanium.UI.createWebView({
	url: 'http://twitter.com/#!/StephaneAG' ,
});

//win.add(newsWebView);

*/

//la function qui charge les tweets
function loadTweets(){
	//array vide pour notre table View
	var rowData = [];
	
	//on crée notre client http et on le nomme "loader"
	var loader = Titanium.Network.createHTTPClient();
	
	//on spécfifie la requete http et l url des datas
	loader.open( "GET" , "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=StephaneAG" );
	//on lance notre function quand les data sont pretes pr le process
	loader.onload = function(){
		//on evalue le JSON
		var tweets = eval( '(' + this.responseText + ')' );
		
		for ( var i=0; i < tweets.length; i++ ){
			
			var tweet = tweets[i].text; //le message du tweet
			var user = tweets[i].user.screen_name; //le nom du user
			var avatar = tweets[i].user.profile_image_url; //l'image du profil
			
			//petit ajout : un spacer qui permet un affichage propre même avec peu de texte..
			var tweetInnerSpacer = Titanium.UI.createView({ height: 15 })
			
			///////////////////////////////////////////////
			//on crée une row et on spécifie sa hauteur en "auto"
			var row = Titanium.UI.createTableViewRow({
				height:'auto', 
				//backgroundColor: '#191919' // version sombre
				backgroundColor: '#f2f2f2'
			});
			
			//on crée la vue qui contiendra le texte et l'avatar
			var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });
			
			//on crée une imageView pour contenir l image de profil
			var av_image = Titanium.UI.createImageView({
				//url: avatar, //l'image de notre imageView
				image: avatar, //l'image de notre imageView
				top:0 ,
				left: 0 ,
				height: 48 ,
				width: 48
			});
			
			post_view.add(av_image);
			
			//on crée un label qui contiendra le username de nos post view
			var user_lbl = Titanium.UI.createLabel({
				text: user ,
				left: 54 ,
				width: 120 ,
				top: -48 ,
				//top: 48 ,
				bottom: 2 ,
				height: 16 ,
				textAlign: 'left' ,
				color: '#444444' , //bright version
				//color: '#FFFFFF' ,
				font: {
					fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
				}
			});
			
			post_view.add(user_lbl);
			
			//élément final du post view :
			//on crée un label qui contiendra le mesage du tweet et qui le formattera prprement ds le post view
			var tweet_lbl = Titanium.UI.createLabel({
				text: tweet,
				left: 54 ,
				top: 0 ,
				bottom: 2 ,
				height: 'auto' ,
				//width: 236 , // iphone base width for the tweet msg
				//width: 556 , // ipad base width for the tweet msg > in portrait mode
				width: 755 , // ipad base width for the tweet msg > in landscape mode
				textAlign: 'left' ,
				//color: '#E6E6E6' , // dark version
				font: {
					fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
				}
			});
			
			post_view.add(tweet_lbl);
			
			//ajout du "petit ajout" ^^( > le fameux tweetInnerSpacer qui est en fait une simple view )
			post_view.add(tweetInnerSpacer);
			
			//Last but not least, on ajoute le post view complets au row:
			row.add(post_view);
			
			//on donne a chaque row un nom de classe
			row.className = "item" + i;
			
			//on ajoute le row a notre rowData array
			rowData[i] = row;
			  
		}
		
	//on est sortit de notre boucle for(...)
	
	//on crée une table view et on spécifie sa source > notre "rowData" array
	var tableView = Titanium.UI.createTableView({ 
		data: rowData , 
		backgroundColor: '#333333' 
	});
	
	//on ajoute notre tableView la la fenetre
	win.add(tableView);
	
		
	}
	
	//on envoie notre rerquete http
	loader.send();
	
}

loadTweets();


