var CallbackRegistry = {};
function cls(){
	if (Skip_URL.indexOf("http") > -1){window.location = Skip_URL;}else{window.location = 'http://'+Skip_URL;}
};
if (App_Prefix === undefined || App_Prefix === '' || App_Prefix === null) App_Prefix = 'prefix';
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

function cssGenerate () {
	return "."+App_Prefix+"_modal_inner_cust * {" +
	"vertical-align: baseline;" +
	"font-family: Arial;" +
	"font-weight: inherit;" +
	"font-style: inherit;" +
	"font-size: 100%;" +
	"outline: 0;" +
	"padding: 0;" +
	"margin: 0;" +
	"border: 0;" +
	"}" +

	"."+App_Prefix+"_clrfix{clear:both;}" +
	"."+App_Prefix+"_modal_inner_cust {" +
		"background: white;" +
		"line-height: 1;" +
		"color: black;" +
		"font-size: 62.5%;" +
		"background-color: white;" +
		"height: 100%;" +
		"left: 0;" +
		"position: fixed;" +
		"top: 0;" +
		"width: 100%;" +
		"z-index:99999;" +
	"}" +

	"."+App_Prefix+"_modal_title {" +
		"box-sizing: border-box;" +
		"color: rgb(51, 51, 51);" +
		"display: flex;" +
		"flex-direction: column;" +
		"font-size: 2em;" +
		"font-weight: bold;" +
		"justify-content: center;" +
		"letter-spacing: -0.8px;" +
		"padding: 3% 12%;" +
		"text-align: center;" +
	"}" +
	"."+App_Prefix+"_modal_main_img {"+
		"display: block;"+
		"height: 48%;"+
		"padding-bottom: 3%;"+
		"width: 100%;"+
		"text-align: center;"+
	"}"+
	"."+App_Prefix+"_modal_main_img_itm {"+
		"height: 100%; "+
	"}"+
	"."+App_Prefix+"_modal_itm_info_title {"+
		"color: #333;"+
		"font: 700 2em arial;"+

		"padding: 0 12% 1%;"+
		"text-align: center;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_text {"+
		"color: rgb(51, 51, 51);"+
		"font: 400 1.6em/1.3em arial;"+
		"letter-spacing: -0.5px;"+
		"padding: 0 10%;"+
		"text-align: center;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_btn{"+
		"background: rgb(244,217,17);"+
		"background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y0ZDkxMSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmNmI3MTIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);"+
		"background: -moz-linear-gradient(top,  rgba(244,217,17,1) 0%, rgba(246,183,18,1) 100%);"+
		"background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(244,217,17,1)), color-stop(100%,rgba(246,183,18,1)));"+
		"background: -webkit-linear-gradient(top,  rgba(244,217,17,1) 0%,rgba(246,183,18,1) 100%);"+
		"background: -o-linear-gradient(top,  rgba(244,217,17,1) 0%,rgba(246,183,18,1) 100%);"+
		"background: -ms-linear-gradient(top,  rgba(244,217,17,1) 0%,rgba(246,183,18,1) 100%);"+
		"background: linear-gradient(to bottom,  rgba(244,217,17,1) 0%,rgba(246,183,18,1) 100%);"+
		"filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4d911', endColorstr='#f6b712',GradientType=0 );"+
		"display: block;"+
		"box-shadow: 0 5px 10px rgba(153, 153, 153, 0.5);"+
		"margin: 3% auto auto;"+
		"padding: 5% 0;"+
		"line-height: 16px;"+
		"/*font-size: 3em;*/"+
		"font-size: 1.8em;"+
		"color:#333;"+
		"text-decoration: none;"+
		"width: 56%;"+
		"text-align: center;	"+
		"font-weight: bold;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_foot {"+
		"width: 100%;"+
		"position: absolute;"+
		"bottom: 10px;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_foot_img {"+
		"float: left;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_foot_img {"+
		"float: left;"+
		"width: 20%;"+
		"margin: 0 0 0 15px;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info_foot_btn {"+
		"color: #999;"+
		"float: right;"+
		"font-size: 1.1em;"+
		"margin: 0 15px 0 0;"+
		"text-decoration: none;"+
	"}"+
	"."+App_Prefix+"_modal_itm_info {" +
		"align-content: space-between;" +
		"-webkit-align-content: space-between;" +
		"display: flex;" +
		"display: -webkit-flex;" +
		
		"flex-flow: column nowrap;" +
		"-webkit-flex-flow: column nowrap;" +
		"height: 38%;" +
		"justify-content: space-between;" +
		"-webkit-justify-content: space-between;" +
	"}" +
	"."+App_Prefix+"_sub_content {" +
		"display: block;" +
		"width: 100%;" +
	"}" +

	"."+App_Prefix+"_modal_title--landscape {" +
		"display: none;" +
	"}" +

	"@media only screen and (orientation : landscape){" +

		"."+App_Prefix+"_only-landscape {" +
			"display: block;" +
		"}" +
		"."+App_Prefix+"_only-portrait {" +
			"display: none;" +
		"}" +

		"."+App_Prefix+"_modal_inner_cust {" +
			"font-size: 100%;" +
			"}" +

		"."+App_Prefix+"_top_content {" +
			"float: left;" +
			"height: 100%;" +
			"width: 52%;" +
			"display: block;" +
		"}" +
		"."+App_Prefix+"_modal_main_img {" +
			"height: 100%;" +
			"position:relative;" +
			"padding-bottom: 0;" +
		"}" +
		"."+App_Prefix+"_modal_main_img_itm {" +
			"position: absolute;" +
			"left: 0;" +
			// "right: 0;" +
			"bottom: 0;" +
			"top: 0;" +
			"margin: auto;" +
			"height: auto;" +
			"width: 94%;" +
			"max-height: 100%;" +
		"}" +
		"."+App_Prefix+"_modal_itm_info {" +
			"position: relative;" +
			"height: 100%;" +
			"width: 48%;" +
		"}" +
		"."+App_Prefix+"_sub_content {" +
			// "margin-top: 27%;" +
			// "height: 66%;" +
			"height: 100%;" +
			"box-sizing: border-box;" +
			
			"align-content: space-between;" +
			"-webkit-align-content: space-between;" +
			"display: flex;" +
			"display: -webkit-flex;" +

			"flex-flow: column nowrap;" +
			"-webkit-flex-flow: column nowrap;" +
			"justify-content: space-between;" +
			"-webkit-justify-content: space-between;" +
		"}" +
		
		"."+App_Prefix+"_js_app_url."+App_Prefix+"_sub_content * {" +
			"margin: auto;" +
		"}" +
		"."+App_Prefix+"_modal_itm_info_title {" +
			"font-size: 1em;" +
			"padding: 0 3% 2%;" +
		"}" +
		"."+App_Prefix+"_modal_title {" +
			"display: none;" +
		"}" +
		"."+App_Prefix+"_modal_title--landscape {" +
			"display: block;" +
			"font-size: 1.2em;" +
			"padding:0;"+
		"}" +
		"."+App_Prefix+"_modal_itm_info_text {" +
			"font: 400 0.8em arial;" +
			"padding: 0 6%;" +
			"margin-top: -5% !important;" +
			"margin-bottom: -3% !important;" +
		"}" +
		"."+App_Prefix+"_modal_itm_info_btn {" +
			"font-size: 1.3em;" +
			"margin-top: 6%;" +
			"padding:6% 0;" +
			"width: 80%;" +
		"}" +
		"."+App_Prefix+"_modal_itm_info_foot {" +
				"box-sizing: border-box;" +
				"position: static;" +
				"bottom: auto;" +
				"padding-right: 15px;"+
		"}" +
		"."+App_Prefix+"_modal_itm_info_foot_btn {" +
			"font-size: 0.7em;" +
			"margin: 8px 2% 0 0;" +
		"}" +
	"}"+
	"@media (min-width: 768px) {" +
		"."+App_Prefix+"_modal_title--landscape {" +
			"font-size: 3em;" +
		"}" +

		"."+App_Prefix+"_modal_itm_info_title {" +
			"font-size: 2.5em;" +
		"}" +

		"."+App_Prefix+"_modal_itm_info_text {" +
			"font-size: 1.8em;" +
		"}" +
	"}";
}

function appendStyles () {
	style      = document.createElement('style');
	style.type = 'text/css';
	// var css = 'body {border:solid 1px red;}';
	var css = cssGenerate();
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
}

function appendViewport() {
	if (document.querySelector("meta[name=viewport]")) {
		return;
	} else {
		var viewport = document.createElement('meta');
		viewport.name = "viewport";
		viewport.content = "width=device-width,initial-scale=1.0";
		document.getElementsByTagName('head')[0].appendChild(viewport);
	}
}

function success_jsonp(data) {
	appendStyles();
	appendViewport();
	apps=data.apps[0];
	var elem;
	var frag = document.createDocumentFragment();
	elem = document.createElement("div");
	elem.className = App_Prefix+'_modal_inner_cust';
	elem.id = 'be_remove';
	urlap="javascript:document.location.href='"+apps.urlApp+"'";
	elem.innerHTML =
			'<span class="'+App_Prefix+'_js_app_url '+App_Prefix+'_top_content" onclick="'+urlap+'">'+
				'<h2 class="'+App_Prefix+'_modal_title">'+Custom_Title+'</h2>'+
				'<div class="'+App_Prefix+'_modal_main_img">'+
					'<img src="'+apps.urlImg+'" class="'+App_Prefix+'_modal_main_img_itm" alt="'+data.apps.title+'" title="">'+
				'</div>'+
			'</span>'+
			'<div class="'+App_Prefix+'_modal_itm_info">'+
				'<div class="'+App_Prefix+'_js_app_url '+App_Prefix+'_sub_content" onclick="'+urlap+'">'+
					'<h2 class="'+App_Prefix+'_modal_title '+App_Prefix+'_modal_title--landscape">'+Custom_Title+'</h2>'+
					'<p class="'+App_Prefix+'_modal_itm_info_title">'+apps.title+'</p>'+
					'<p class="'+App_Prefix+'_modal_itm_info_text">'+apps.desc+'</p>'+
					'<a href="/" class="'+App_Prefix+'_modal_itm_info_btn" style="background-color:#'+B_Color+'">'+B_Title+'</a>'+
					'<div class="'+App_Prefix+'_modal_itm_info_foot '+App_Prefix+'_only-landscape">'+
						'<img src="https://admin.appnext.com/welcomeweb/v1/img/m3.png" class="'+App_Prefix+'_modal_itm_info_foot_img" alt="" title="">'+
						'<a href="javascript:void(0)" class="'+App_Prefix+'_modal_itm_info_foot_btn" onclick="cls()">Skip</a>'+
						'<div class="'+App_Prefix+'_clrfix"></div>'+
					'</div>'+
				'</div>'+
				'<div class="'+App_Prefix+'_modal_itm_info_foot '+App_Prefix+'_only-portrait">'+
					'<img src="https://admin.appnext.com/welcomeweb/v1/img/m3.png" class="'+App_Prefix+'_modal_itm_info_foot_img" alt="" title="">'+
					'<a href="javascript:void(0)" class="'+App_Prefix+'_modal_itm_info_foot_btn" onclick="cls()">Skip</a>'+
					'<div class="'+App_Prefix+'_clrfix"></div>'+
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