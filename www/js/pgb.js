function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	
}

function onDeviceReady() {
	navigator.splashscreen.show();
	navigator.notification.beep(1);
}

