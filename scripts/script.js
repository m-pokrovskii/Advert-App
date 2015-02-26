var CallbackRegistry = {};
function cls(){
	var viewport = document.querySelector("#ddd123Viewport"), 
			styleLink    = document.querySelector("#ddd123StyleLink"),
			app          = document.querySelector(".ddd123_app");
	
	viewport.remove();
	styleLink.remove();
	styleLink.remove();

	if (!Skip_URL) {
		app.remove();
	} else if (Skip_URL.indexOf("http") > -1) {
		window.location = Skip_URL;
	} else {
		app.remove();
		window.location = Skip_URL;
	}
};
// if (App_Prefix === undefined || App_Prefix === '' || App_Prefix === null) App_Prefix = 'prefix';
if (B_Title === undefined || B_Title === '' || B_Title === null) B_Title = 'Download Free!';
if (B_Color === undefined || B_Color === '' || B_Color === null) B_Color = 'F78D1F';
if (App_Name === undefined || App_Name === '' || App_Name === null){App_Name = '';}else{App_Name = 'Welcome to '+App_Name+'<br> & Discover this Free App!';}
if (Custom_Title === undefined || Custom_Title === '' || Custom_Title === null) Custom_Title = 'Discover this Free App!';
if (App_Name!=''){	Custom_Title=App_Name;}

function scriptRequest(url, onSuccess, onError) {
	var scriptOk = false;
	var callbackName = 'f'+String(Math.random()).slice(2);

	url += ~url.indexOf('?') ? '&' : '?';
	url += 'callback=CallbackRegistry.'+callbackName;
 
	CallbackRegistry[callbackName] = function(data) {      
		scriptOk = true;
		delete CallbackRegistry[callbackName];
		onSuccess(data);
	};

	function checkCallback() {     
		if (scriptOk) return;
		delete CallbackRegistry[callbackName];
		onError(url);
	}
 
	var script = document.createElement('script'); 
	script.onreadystatechange = function() {   
		if (this.readyState == 'complete' || this.readyState == 'loaded'){  
			this.onreadystatechange = null;  
			setTimeout(checkCallback, 0);
		}
	}
	script.onload = script.onerror = checkCallback;
	script.src = url;
	 document.body.appendChild(script);
 }

function appendLinkCss() {
	style      = document.createElement('link');
	style.rel  = 'stylesheet';
	style.type = 'text/css';
	style.id   = 'ddd123StyleLink';
	style.href = 'styles/style.css';
	document.getElementsByTagName('head')[0].appendChild(style);
}

// function appendStyles () {
// 	style      = document.createElement('style');
// 	style.type = 'text/css';
// 	var css = cssGenerate();
// 	if (style.styleSheet){
// 		style.styleSheet.cssText = css;
// 	} else {
// 		style.appendChild(document.createTextNode(css));
// 	}
// 	document.getElementsByTagName('head')[0].appendChild(style);
// }

function appendViewport() {
	var viewport     = document.createElement('meta');
	viewport.name    = "viewport";
	viewport.id      = "ddd123Viewport";
	viewport.content = "width=device-width,initial-scale=1.0";
	document.getElementsByTagName('head')[0].appendChild(viewport);
}

function success_jsonp(data) {
	appendLinkCss();
	appendViewport();
	apps=data.apps[0];
	var elem;
	var frag = document.createDocumentFragment();
	elem = document.createElement("div");
	elem.className = 'ddd123_global_wrapper';
	elem.id = 'be_remove';
	urlap="javascript:document.location.href='"+apps.urlApp+"'";
	elem.innerHTML =
		'<div class="ddd123_app">'+
		'<div class="ddd123_app__container">'+
		'<div class="ddd123_app__top" onclick="'+urlap+'">'+
		'<div class="ddd123_app__headline only-portrait"><span class="ddd123_app-headline__text">'+Custom_Title+'</span></div>'+
		'<div class="ddd123_app__image-container">'+
		'<img src="'+apps.urlImg+'" alt="'+data.apps.title+'">'+
		'</div>'+
		'</div>'+
		'<div class="ddd123_app__bottom">'+
		'<div class="ddd123_app__headline only-landscape" onclick="'+urlap+'">'+Custom_Title+'</div>'+
		'<div class="ddd123_app__desc">'+
		'<div class="ddd123_app-desc__title" onclick="'+urlap+'">'+apps.title+'</div>'+
		'<div class="ddd123_app-desc__desc" onclick="'+urlap+'">'+apps.desc+'</div>'+
		'<div class="ddd123_app__button-container" onclick="'+urlap+'">'+
			'<a href="#" style="background:'+B_Color+'" class="ddd123_app__btn">'+B_Title+'</a>'+
		'</div>'+
		'<div class="ddd123_app__footer only-landscape">'+
			'<div class="ddd123_app-footer__cell">'+
				'<div class="ddd123_app__powered-by">'+
					'<img src="images/m3.png" alt="">'+
				'</div>'+
				'<div class="ddd123_app__skip">'+
					'<a class="ddd123_app__skip-link" href="javascript:void(0)" onclick="cls()">Skip</a>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="ddd123_app__footer only-portrait">'+
			'<div class="ddd123_app-footer__cell">'+
				'<div class="ddd123_app__powered-by">'+
					'<img src="images/m3.png" alt="">'+
				'</div>'+
				'<div class="ddd123_app__skip">'+
					'<a class="ddd123_app__skip-link" href="#" onclick="cls()">Skip</a>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'</div>'+
		'</div>';
	frag.appendChild(elem);
	document.getElementsByTagName('body')[0].appendChild(frag);
	if (Timeout!=='') {
			secToClose = parseInt(Timeout) * 1000;
			setTimeout(function () {
				var el1 = document.getElementById("stlapp");
				el1.parentNode.removeChild(el1);
				var el2 = document.getElementById("be_remove");
				el2.parentNode.removeChild(el2);
			},secToClose)
	}
}
 
function fail_jsonp(url) {
	console.log('Error in query ' + url);
}

function onPush() {
		var showTimes = Times_to_Show;
		if (showTimes === undefined || showTimes == '' || showTimes === null) showTimes = 0;
		var showTimout = Times_to_Show_Reset;
		if (showTimout === undefined || showTimout == '' || showTimout === null) showTimout = 0;

		function setCookie(key, value) {
			var expires = new Date();
			expires.setTime(expires.getTime() + (1000 * 60 * showTimout));
			document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
		}

		function getCookie(key) {
			var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		}

		var showAdsCookies = false;

		if (showTimes == 0) {
			showAdsCookies = true
		} else if (!getCookie('showsCount')) {
			setCookie('showsCount', 1);
			showAdsCookies = true;
		} else if (getCookie('showsCount') && parseInt(getCookie('showsCount')) < showTimes) {
			setCookie('showsCount', parseInt(getCookie('showsCount')) + 1);
			showAdsCookies = true;
		}

		if (showAdsCookies) {
						if (navigator.appVersion.toLowerCase().indexOf("android") > -1 && Android_ID !== "") {
							scriptRequest("https://admin.appnext.com/offerWallApi.aspx?id="+Android_ID+"&cnt=1&cat="+Category+"pbk="+Postback, success_jsonp, fail_jsonp); 
						} else if (navigator.appVersion.toLowerCase().indexOf("mac os") > -1 && iOS_ID !== "") {
							scriptRequest("https://admin.appnext.com/offerWallApi.aspx?id="+iOS_ID+"&cnt=1&cat="+Category+"pbk="+Postback, success_jsonp, fail_jsonp); 
						}
		}
};
onPush()