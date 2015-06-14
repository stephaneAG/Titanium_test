/**
 * @author Stéphane ADAM-GARNIER
 */

win = Titanium.UI.currentWindow;

var myDebugView = Titanium.UI.createWebView({
	height: 480,
	width: 340,
	url: 'processingHTML/processingView.html'
})

win.add(myDebugView);
