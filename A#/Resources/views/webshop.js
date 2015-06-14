/**
 * @author Stéphane ADAM-GARNIER
 */

// c 'est plus ou moins la meme chose qu un global $post ^^
var win = Titanium.UI.currentWindow;

var wp_webview = Titanium.UI.createWebView({url:'http://stephaneadamgarnier.com/webshop/'});
win.add(wp_webview);
win.open({modal:true});

//petit test d'ajout d un bouton back

// Back Button
var backBtn = Titanium.UI.createButton({
   title:'Back',
   style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
 
backBtn.addEventListener( 'click', function() {
    wp_webview.goBack();
    //goBackCallback();
});

function goBackCallback(){
	//setTimeout(reloadThatPage, 3000);
	//wp_webview.reload();
}

function reloadThatPage(){
	
	//wp_webview.url()
	
}
 
//Ti.UI.currentWindow.setLeftNavButton(backBtn);