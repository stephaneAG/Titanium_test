/**
 * @author Stéphane ADAM-GARNIER
 */

var currentWin = Titanium.UI.currentWindow;

var captureBtn = Titanium.UI.createButton({
	title:'shoot!',
	height: 40,
	backgroundColor: 'blue',
	top: 400
})

currentWin.add(captureBtn);
