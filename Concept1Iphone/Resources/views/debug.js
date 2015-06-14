/**
 * @author Stéphane ADAM-GARNIER
 */

win = Titanium.UI.currentWindow;

var myDebugView = Titanium.UI.createWebView({
	url: 'htmlLocalContent/htmlContentDebug.html'
})

win.add(myDebugView);
