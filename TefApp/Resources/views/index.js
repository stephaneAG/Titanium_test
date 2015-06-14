/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

var webView = Titanium.UI.createWebView({
	html: 'Hello World Tef'
});

win.add(webView);
