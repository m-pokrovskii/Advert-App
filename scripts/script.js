var CallbackRegistry = {};

function cleanGarbage() {
	var viewport = document.querySelector("#ddd123Viewport"), 
			styleLink = document.querySelector("#ddd123StyleLink"),
			script    = document.querySelector("#ddd123Script"),
			script    = document.querySelector("#ddd123ExternalScript"),
			app       = document.querySelector("#be_remove");
	app.parentNode.removeChild(app);
	viewport.parentNode.removeChild(viewport);
	styleLink.parentNode.removeChild(styleLink);
	script.parentNode.removeChild(script);
}

function cls(){
	if (!Skip_URL) {
		cleanGarbage();
	} else if (Skip_URL.indexOf("http") > -1) {
		window.location = Skip_URL;
	} else {
		cleanGarbage();
		window.location = Skip_URL;
	}

};
// if (App_Prefix === undefined || App_Prefix === '' || App_Prefix === null) App_Prefix = 'prefix';
if (B_Title === undefined || B_Title === '' || B_Title === null) B_Title = 'Download Free!';
if (B_Color === undefined || B_Color === '' || B_Color === null) B_Color = '';
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
	script.id = "ddd123ExternalScript";
	 document.body.appendChild(script);
 }

function appendLinkCss() {
	style      = document.createElement('link');
	style.rel  = 'stylesheet';
	style.type = 'text/css';
	style.id   = 'ddd123StyleLink';
	// style.href = 'styles/style.css';
	style.href = 'http://pokrovskii.com/job/mobile/new/styles/style.css';
	// style.href = 'https://admin.appnext.com/webInterstitial/v3/styles/style.css';
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

function removeViewports () {
	 var viewportmeta = document.querySelectorAll('meta[name="viewport"]');
	 Array.prototype.forEach.call( viewportmeta, function( node ) {
			 node.parentNode.removeChild( node );
	 });
}

function appendViewport() {
	var viewport     = document.createElement('meta');
	viewport.name    = "viewport";
	viewport.id      = "ddd123Viewport";
	viewport.content = "width=device-width,initial-scale=1.0";
	document.getElementsByTagName('head')[0].appendChild(viewport);
}

function truncate(txt, maxLength) {
	if (txt.length > maxLength) {
			txt = txt.substr(0,maxLength-3) + "...";
	}
	return txt;
}

function success_jsonp(data) {
	removeViewports();
	appendViewport();
	appendLinkCss();
	apps=data.apps[0];
	apps.desc = truncate(apps.desc, 80);
	var elem;
	var frag = document.createDocumentFragment();
	elem = document.createElement("div");
	elem.className = 'ddd123-global_wrapper';
	elem.id = 'be_remove';
	urlap="javascript:document.location.href='"+apps.urlApp+"'";
	elem.innerHTML =
	'<div class="ddd123-app">'+
	'<div class="ddd123-app__wrapper">'+
	'<div class="ddd123-app__container">'+
	'<div class="ddd123-app__top" onclick="'+urlap+'">'+
	'<div class="ddd123-app__headline only-portrait"><span class="ddd123-app__headline__text">'+Custom_Title+'</span></div>'+
	'<div class="ddd123-app__image-container">'+
	'<img src="'+apps.urlImg+'" alt="'+data.apps.title+'">'+
	'</div>'+
	'</div>'+
	'<div class="ddd123-app__bottom">'+
	'<div class="ddd123-app__content-wrapper">'+
	'<div class="ddd123-app__headline only-landscape" onclick="'+urlap+'">'+Custom_Title+'</div>'+
	'<div class="ddd123-app__desc">'+
	'<table class="ddd123-app__app-desc__table">'+
	'<tr>'+
	'<td>'+
	'<div class="ddd123-app__app-desc__title" onclick="'+urlap+'">'+apps.title+'</div>'+
	'<div class="ddd123-app__app-desc__desc" onclick="'+urlap+'">'+apps.desc+'</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td>'+
	'<div class="ddd123-app__button-container" onclick="'+urlap+'">'+
	'<a href="#" class="ddd123-app__btn" style="background:'+B_Color+'">'+B_Title+'</a>'+
	'</div>'+
	'</td>'+
	'</tr>'+
	'</table>'+
	'</div>'+
	'<div class="ddd123-app__footer only-landscape">'+
	'<div class="ddd123-app__powered-by">'+
	'<a href="https://www.appnext.com"><img src="https://admin.appnext.com/webInterstitial/v3/images/m3.png" alt=""></a>'+
	'</div>'+
	'<div class="ddd123-app__skip">'+
	'<a class="ddd123-app__skip-link" href="javascript:void(0)" onclick="cls()">Skip</a>'+
	'</div>'+
	'</div>'+
	'</div>'+
	'</div>'+
	'<div class="ddd123-app__footer only-portrait">'+
	'<div class="ddd123-app__powered-by">'+
	'<a href="https://www.appnext.com"><img src="https://admin.appnext.com/webInterstitial/v3/images/m3.png" alt=""></a>'+
	'</div>'+
	'<div class="ddd123-app__skip">'+
	'<a class="ddd123-app__skip-link" href="javascript:void(0)" onclick="cls()">Skip</a>'+
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
				cleanGarbage();
				// var el1 = document.getElementById("stlapp");
				// el1.parentNode.removeChild(el1);
				// var el2 = document.getElementById("be_remove");
				// el2.parentNode.removeChild(el2);
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