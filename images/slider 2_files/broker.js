if(void 0===COMSCORE)var COMSCORE={};void 0===COMSCORE.SiteRecruit&&(COMSCORE.SiteRecruit={sv:"scor",testUrl:"broker-test.js",configUrl:"broker-config.js",builderUrl:"builder.js",CONSTANTS:{STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}}},COMSCORE.SiteRecruit.Utils=function(){var r=COMSCORE.SiteRecruit;return{location:document.location.toString(),referrer:document.referrer.toString(),loadScript:function(e,t){t&&!r.allowScriptCaching&&(e=r.Utils.appendQueryParams(e,(new Date).getTime()));var i=document.createElement("script");i.src=e,document.body.appendChild(i)},cleanURL:function(e){var t=e.split("?");if(1<t.length){var r="?";if(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)|%40/i.test(t[1])){var o=t[1].split("&");for(i=0;i<o.length;i++)/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)|%40/i.test(o[i])||(r+=0==i?o[i]:"&"+o[i]);e=1<r.length?t[0]+r:t[0]}}return e},getDevice:function(e,t){var i=new RegExp(e,"i"),r=navigator.userAgent,o=new RegExp(t,"i"),n=self.screen.availWidth,a={};return i.test(r)?(a.type=2,770<=n&&!o.test(r)&&(a.type=3)):a.type=1,a},fireBeacon:function(e){setTimeout(function(){-1==e.indexOf("?")?e+=(/\?/.test(e)?"&":"?")+(new Date).getTime():e+="&"+(new Date).getTime(),(new Image).src=e},1)},appendQueryParams:function(e,t){return e?(e=e.replace("?","")+"?",t&&(e+=t.toString().replace("?","")),e):t},getRandom:function(e){function t(e,t,i,r,o){var n=Math.floor(e/i);return n=t*(e-n*i)-n*r,Math.round(n<0?n+o:n)}for(var i=2147483563,r=40014,o=53668,n=12211,a=2147483647&Math.round((new Date).getTime()%1e5),s=a,c=[32],u=0;u<19;u++)s=t(s,r,o,n,i);for(u=0;u<32;u++)s=t(s,r,o,n,i),c[31-u]=s;s=t(s,r,o,n,i),a=t(a,40692,52774,3791,2147483399);var l=Math.round((c[Math.floor(c[0]/67108862)]+a)%i),d=Math.floor(l/(i/(1e9+1)))/1e9;return void 0===e?d:Math.floor(d*(e+1))},getExecutingPath:function(e){for(var t=document.getElementsByTagName("script"),i=t.length-1;0<=i;i--){var r=t[i].src;if(-1!=(this.scriptUrl=r).indexOf("/"+e))return r.replace(/(.*)(\/.*)$/,"$1/")}},JSONDeserialize:function(e){return JSON.parse(e)},JSONSerialize:function(e){return JSON.stringify(e)}}}(),COMSCORE.SiteRecruit.Utils.UserPersistence={CONSTANTS:{STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}},getCookieName:function(){var e;return COMSCORE.SiteRecruit.Broker&&COMSCORE.SiteRecruit.Broker.config&&(e=COMSCORE.SiteRecruit.Broker.config.cookie).name?e.name:""},getDefaultCookieOptions:function(){return{cookiename:"msresearch",path:"/",domain:".microsoft.com",duration:90}},getJSONCookieString:function(){var e=this.getDefaultCookieOptions().cookiename,t=this.getCookieValue(e).toString();return/\:undefined/i.test(t)&&(t=t.replace(/\:undefined/g,':"undefined"')),t},getUserId:function(){var e="",t=this.getJSONCookieString();return 0!=t&&/userid/i.test(t)&&(e=JSON.parse(t).userid),e},isWithinExcludePeriod:function(){var e=this.getDefaultCookieOptions().cookiename,t=this.getCookieValue(e).toString();return!!/IDLE/i.test(t)},updateOldCookie:function(){var e=COMSCORE.SiteRecruit,t=this.getJSONCookieString();if(!1!==t&&/lastinvited/i.test(t)){var i=(new Date).getTime(),r=parseInt(JSON.parse(t).lastinvited),o=90-Math.round((i-r)/1e3/60/60/24);if(!isNaN(o)){var n=this.getUserId();e.Utils.UserPersistence.removeCookie(e.Utils.UserPersistence.getDefaultCookieOptions().cookiename,e.Utils.UserPersistence.getDefaultCookieOptions().domain),0<o&&e.Utils.UserPersistence.setIdleAlreadyAskedCookie(o,n)}}},setIdleAlreadyAskedCookie:function(e,t){var i={};i=this.getDefaultCookieOptions(),inputcookiename=i.cookiename,i.cookieoptions||(i.cookieoptions=this.getDefaultCookieOptions());var r={state:{}};if(r.state.name=this.CONSTANTS.STATE_NAME.IDLE,!t)t=this.getUserId();r.userid=t;var o=COMSCORE.SiteRecruit.Utils.JSONSerialize(r);i.cookieoptions.duration=e||90,this.createCookie(inputcookiename,o,i.cookieoptions)},createCookie:function(e,t,i){if(t=escape(t),i.duration&&0<i.duration){var r=new Date;r.setTime(r.getTime()+24*i.duration*60*60*1e3),t+="; expires="+r.toGMTString()}else/msie|rv\:11|edge/i.test(navigator.userAgent)||(t+="; expires=");return i.path&&(t+="; path="+i.path),i.domain&&(t+="; domain="+i.domain),t+="; secure",i.graceperiod&&(t+="; graceperiod="+i.graceperiod),t+="; SameSite=Strict",document.cookie=e+"="+t,!0},removeCookie:function(e,t){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+t},getCookieValue:function(e){var t=document.cookie.match("(?:^|;)\\s*"+e+"=([^;]*)");return!!t&&unescape(t[1])},createUserObj:function(e){var t=new Date,i=e.url,r=this.CONSTANTS.STATE_NAME.IDLE;e.statename&&(r=e.statename);var o=t.getTime();e.timestamp&&(o=e.timestamp);var n=this.getCookieName();e.cookiename&&(n=e.cookiename),e.cookieoptions||(e.cookieoptions=this.getDefaultCookieOptions());var a={state:{}};a.state.name=r,"IDLE"!==a.state.name&&(a.state.timestamp=o,a.state.url="undefined"==i?"":i,a.graceperiod=5),a.userid=t.getTime().toString()+Math.floor(1e16*Math.random()).toString();var s=COMSCORE.SiteRecruit.Utils.JSONSerialize(a);return this.createCookie(n,s,e.cookieoptions),a},setUserObj:function(e){var t,i,r,o,n,a,s=this.getUserObj(e);s||(s=this.createUserObj(e)),new Date,r=0,o=this.getCookieName(),n=5,a=0,i=this.CONSTANTS.STATE_NAME.IDLE,e.url?t=e.url:s.state.url&&(t=s.state.url),e.statename?i=e.statename:s.state&&s.state.name&&(i=s.state.name),e.timestamp?r=e.timestamp:s.state&&s.state.timestamp&&(r=s.state.timestamp),e.cookiename&&(o=e.cookiename),e.cookieoptions||(e.cookieoptions=this.getDefaultCookieOptions()),e.graceperiod?n=e.graceperiod:s.graceperiod&&(n=s.graceperiod),e.trackertimestamp?a=e.trackertimestamp:s.trackertimestamp&&(a=s.trackertimestamp),i&&(s.state.name=i,s.state.url=t,i!==this.CONSTANTS.STATE_NAME.IDLE?(s.state.timestamp=r,s.graceperiod=n,s.trackertimestamp=a):(delete s.state.timestamp,delete s.gracePeriod,delete s.trackertimestamp));var c=COMSCORE.SiteRecruit.Utils.JSONSerialize(s);return this.createCookie(o,c,e.cookieoptions),s},getUserObj:function(e){var t=this.getCookieName();e.cookiename&&(t=e.cookiename);var i=this.getCookieValue(t);if(i&&""!==i){var r=COMSCORE.SiteRecruit.Utils.JSONDeserialize(i);if(r)return r}return null}},COMSCORE.SiteRecruit.DDKeepAlive=function(){var n,a=COMSCORE.SiteRecruit,s=a.Utils,r=s.UserPersistence;return{start:function(){var e=this;n=setInterval(function(){a.Broker.isDDInProgress()&&e.isTrackerPageOpen()?e.setDDTrackerCookie():(e.isTrackerPageOpen()||e.handleClosedTrackerPage(),e.stop())},1e3)},stop:function(){clearInterval(n),!1!==r.getCookieValue(a.Broker.config.cookie.name)&&r.setIdleAlreadyAskedCookie(90)},isTrackerPageOpen:function(){var e={};e.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;var t,i=s.UserPersistence.getUserObj(e),r=(new Date).getTime(),o=!0;if(i&&i.state&&i.state.name==a.CONSTANTS.STATE_NAME.DDINPROGRESS&&i.state.timestamp&&i.trackertimestamp){var n=r-i.trackertimestamp;if((t=COMSCORE.SiteRecruit.Builder&&COMSCORE.SiteRecruit.Builder.invitation&&COMSCORE.SiteRecruit.Builder.invitation.config?COMSCORE.SiteRecruit.Builder.invitation.config.trackerGracePeriod:i.gracePeriod?i.gracePeriod:1!=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr")&&!COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("cddsinprogress")&&8)&&1!=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr"))n<2*(t=parseInt(t))*1e3||(o=!1)}return o},handleClosedTrackerPage:function(){this.stop()},setDDTrackerCookie:function(){var e=a.Broker.config.cookie,t={};t.cookiename=e.name,t.cookieoptions={path:e.path,domain:e.domain,duration:e.duration};var i=r.getUserObj(t);!1===document.hidden||void 0===document.hidden?t.url=encodeURIComponent(s.location):t.url=r.getUserObj(e.name).state.url,t.statename=a.CONSTANTS.STATE_NAME.DDINPROGRESS,t.timestamp=(new Date).getTime(),a.Builder&&a.Builder.invitation&&a.Builder.invitation.config?(t.pid=a.Builder.invitation.config.projectId,t.graceperiod=a.Builder.invitation.config.trackerGracePeriod):i&&i.gracePeriod&&(t.graceperiod=i.graceperiod),s.UserPersistence.setUserObj(t)},mDDKeepAlive:function(){n=setInterval(function(){var e,t,i=0;null!=sessionStorage.locationList&&(e=sessionStorage.locationList),null!=sessionStorage.timeList&&(t=sessionStorage.timeList);var r=escape(s.cleanURL(window.location.toString()));if(/\,/.test(e)){var o=e.split(",");o[o.length-1]!=r&&(e+=","+r,t+=","+(new Date).getTime(),i=1)}else r!=e&&(e+=","+r,t+=","+(new Date).getTime(),i=1);1==i&&(sessionStorage.locationList=e,sessionStorage.timeList=t),0==COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("mDDS")&&(clearInterval(n),null!=sessionStorage.locationList&&sessionStorage.removeItem("locationList"),null!=sessionStorage.timeList&&sessionStorage.removeItem("timeList"),null!=sessionStorage.locationList&&sessionStorage.removeItem("csLocation"),null!=sessionStorage.timeList&&sessionStorage.removeItem("csReferrer"))},3e3)}}}(),COMSCORE.SiteRecruit.PagemapFinder=function(){var l,n=COMSCORE.SiteRecruit.Utils;return{getTotalFreq:function(){return l},find:function(e){var t=window.location.toString();/cs\_tstMode\=(.+)/i.test(t)&&/([^\#+]*)/.test(t)&&(t=RegExp.$1);for(var i=e,r=[],o=!1,n=l=0;i&&n<i.length;n++){var a=!1,s=i[n];if(s){var c=new RegExp(s.m,"i");if(-1!=t.search(c)){var u=i[n].prereqs;if(a=!0,s.d)new RegExp(COMSCORE.SiteRecruit.device.type).test(s.d)||"0"===s.d||(a=!1);u&&(this.isMatchContent(u.content)||(a=!1),this.isMatchCookie(u.cookie)||(a=!1),this.isMatchLanguage(u.language)||(a=!1))}if(a){if(s.halt){o=!0;break}r.push(s),l=s.f}}}return!0===o?(l=0,r=null):this.choosePriority(r)},choosePriority:function(e){for(var t=null,i=0;i<e.length;i++)null===t?(t=e[i],l=e[i].f):t.p<e[i].p&&(t=e[i],l=e[i].f);return t},isMatchContent:function(e){for(var t=!0,i=0;t&&i<e.length;){var r=!1,o=!1,n=e[i];if(n.element)for(var a=document.getElementsByTagName(n.element),s=!0,c=0;c<a.length;c++){var u=new RegExp(n.elementValue,"i");if(u?u.test(a[c].innerHTML)&&(s&&(s=!1),r=!0):r=!0,n.attrib&&n.attrib.length){var l=a[c].attributes.getNamedItem(n.attrib),d=new RegExp(n.attribValue);l&&(n.attribValue&&n.attribValue.length?d.test(l.value)&&(o=!0):o=!0)}else o=!0}r&&o||(t=!1),i++}return t},isMatchCookie:function(e){for(var t=!0,i=0;t&&i<e.length;){var r=e[i],o=n.UserPersistence.getCookieValue(r.name);r=e[i];if(!(o=n.UserPersistence.getCookieValue(r.name))||null===o)return!1;t=new RegExp(r.value,"i").test(o),i++}return t},isMatchLanguage:function(e){var t=navigator.language||navigator.userLanguage;return t=t.toLowerCase(),!e||!!new RegExp(e).test(t)}}}(),COMSCORE.SiteRecruit.Broker=function(){var s=COMSCORE.SiteRecruit,c=s.Utils;return{init:function(){c.location=c.cleanURL(c.location),c.referrer=c.cleanURL(c.referrer),s.executingPath=c.getExecutingPath("broker.js"),c.UserPersistence.updateOldCookie(),_isMsResearchIdle=c.UserPersistence.isWithinExcludePeriod(),/cs\_tstMode/i.test(window.location)&&c.loadScript("https://www.microsoft.com/library/svy/"+s.testUrl,!1);var e=c.UserPersistence.getCookieValue("cddsinprogress"),t=c.UserPersistence.getCookieValue("mDDS"),i=/cs\_tstMode/i.test(window.location)||/cs_tstMode/i.test(document.cookie);(!_isMsResearchIdle||e||t||i||!c.UserPersistence.getCookieValue("msresearch"))&&c.loadScript(s.executingPath+s.configUrl,!0);var r=unescape(c.UserPersistence.getCookieValue("msresearch"));if(/ddinprogress/i.test(r)&&COMSCORE.isDDInProgress()){var o=COMSCORE.SiteRecruit.Utils.JSONDeserialize(r);if(o)if(o.trackertimestamp)(900<((new Date).getTime()-o.trackertimestamp)/1e3||!COMSCORE.SiteRecruit.DDKeepAlive.isTrackerPageOpen())&&COMSCORE.SiteRecruit.DDKeepAlive.handleClosedTrackerPage()}},start:function(){this.init()},run:function(){s.device=c.getDevice(COMSCORE.SiteRecruit.Broker.config.mobile.match,COMSCORE.SiteRecruit.Broker.config.mobile.largePhones);COMSCORE.SiteRecruit.Broker.config.mTracker;var e=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("mDDS");if(/^1/.test(e)&&/pid=(p\d+)\,site\=(\d+)/.test(e)&&(c.loadScript(s.executingPath+"inv_mdds_"+RegExp.$1+"_"+RegExp.$2+".js",!0),COMSCORE.SiteRecruit.DDKeepAlive.mDDKeepAlive()),this.config.Events.beforeRecruit(),this.config.mobile){var t=new RegExp(this.config.mobile.match,"i");if(!0===this.config.mobile.halt&&t.test(navigator.userAgent))return}if(s.sv===this.config.sv){var i,r,o=this.config.testMode;if(i=!1!==c.UserPersistence.getCookieValue("tstMode"),r=o||i,this.isDDInProgress())this.processDDInProgress();else{if(!o||this.isDDInProgress()){var n={};n.cookiename=this.config.cookie.name;var a=c.UserPersistence.getUserObj(n);if(a&&"IDLE"==a.state.name)return}if(this.findPageMapping()&&(!COMSCORE.SiteRecruit._halt||!0!==COMSCORE.SiteRecruit._halt))if(r)this.pagemap&&this.loadBuilder();else c.getRandom()<=s.PagemapFinder.getTotalFreq()&&this.pagemap&&this.loadBuilder()}}},mDDSbuildLayer:function(e,t,i,r,o){COMSCORE.SiteRecruit.Utils;var n=document.createElement("div");n.id=r;var a=n;a.innerHTML=e;var s=this.mDDSgetPageWidth(2),c=this.mDDSgetPageHeight(2),u=a.style;u.position="fixed",u.zIndex=1999999999999,u.left=s,u.top=c,u.marginLeft=-1*t+"px",u.marginTop=-1*i+"px",u.visibility=1==o?"visible":"hidden",document.body.appendChild(a)},mDDSdestroyLayer:function(e){var t=document.getElementById(e);t.style.visibility="hidden";try{t.parentNode.removeChild(t)}catch(e){}},mDDSshowLayer:function(e){document.getElementById(e).style.visibility="visible"},mDDSlaunchSurvey:function(){var e=COMSCORE.SiteRecruit.mobile.tracker;/pid=(p\d+)\,site\=(\d+),frequency\=(.+)/.test(c.UserPersistence.getCookieValue("mDDS"))&&(e.f=RegExp.$3);var t=c.UserPersistence.getUserObj("msresearch");c.UserPersistence.removeCookie("mDDS",".microsoft.com"),null!=sessionStorage.locationList?e.acceptParams.raw+="&locationList="+sessionStorage.locationList+","+encodeURIComponent(window.location.toString())+"&timeList="+sessionStorage.timeList+","+(new Date).getTime()+"&location="+sessionStorage.csLocation+"&referrer="+sessionStorage.csReferrer:e.acceptParams.raw+="&locationList=NOTSUPPORTED&timeList=NOTSUPPORTED&location=NOTSUPPORTED&referrer=NOTSUPPORTED",null!=sessionStorage.removeItem("locationList")&&sessionStorage.removeItem("locationList"),null!=sessionStorage.removeItem("timeList")&&sessionStorage.removeItem("timeList"),null!=sessionStorage.removeItem("csLocation")&&sessionStorage.removeItem("csLocation"),null!=sessionStorage.removeItem("csReferrer")&&sessionStorage.removeItem("csReferrer"),e.beforeSubmit(),window.open(e.acceptUrl+"?"+e.acceptParams.raw+"&site="+e.acceptParams.siteCode+"&projectId="+e.projectId+"&SRmethodology="+e.methodology+"&weight="+e.weight+"&device="+COMSCORE.SiteRecruit.device.type+"&sv=scor&frequency="+e.f+"&userid="+t.userid)},mDDStrackerSwap:function(e){1==e?(this.mDDSdestroyLayer("csMenu"),this.mDDSlaunchSurvey()):(this.mDDSdestroyLayer("csTrack"),this.mDDSshowLayer("csMenu"))},mDDSgetPageWidth:function(e){switch(e){case 0:return"0%";case 1:return"50%";case 2:return"100%";default:return"0%"}},mDDSgetPageHeight:function(e){switch(e){case 0:return"0%";case 1:return"50%";case 2:return"100%";default:return"0%"}},isDDInProgress:function(){var e=!1,t={};t.cookiename=COMSCORE.SiteRecruit.Utils.UserPersistence.getDefaultCookieOptions().cookiename;var i=c.UserPersistence.getUserObj(t);return i&&i.state.name==s.CONSTANTS.STATE_NAME.DDINPROGRESS&&(e=!0),e},processDDInProgress:function(){s.DDKeepAlive.start()},findPageMapping:function(){return this.pagemap=s.PagemapFinder.find(this.config.mapping),this.pagemap},loadBuilder:function(){var e=s.executingPath+s.builderUrl;c.loadScript(e)}}}(),COMSCORE.isDDInProgress=COMSCORE.SiteRecruit.Broker.isDDInProgress,COMSCORE.SiteRecruit.OnReady=function(){var a=COMSCORE.SiteRecruit;return{onload:function(){a.OnReady.done||(a.OnReady.done=!0,a.Broker.start(),a.OnReady.timer&&clearInterval(a.OnReady.timer),document.addEventListener&&document.removeEventListener("DOMContentLoaded",a.OnReady.onload,!1))},listen:function(){var e=document.domain.split(".");e="."+e[e.length-2]+"."+e[e.length-1];var t="msresearch",i=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(t);/DDINPROGRESS/i.test(i)&&(COMSCORE.SiteRecruit.Broker.config={cookie:{name:t,path:"/",domain:e,duration:90,rapidDuration:0,expireDate:""}},COMSCORE.SiteRecruit.Broker.processDDInProgress());var r=document.domain.split("."),o="";r=r[r.length-2]+"."+r[r.length-1];var n=new RegExp(r,"i");if(""!==document.referrer&&(o=document.referrer),""===o||void 0===o||n.test(o)?a.Broker.delayConfig=!1:a.Broker.delayConfig=!0,document.addEventListener&&(/loading|uninitialized/i.test(document.readyState)?document.addEventListener("DOMContentLoaded",a.OnReady.onload,!1):a.OnReady.onload()),window.ActiveXObject)COMSCORE.SiteRecruit.OnReady.waitForLoad=setInterval(function(){try{document.documentElement.doScroll("left")}catch(e){return}COMSCORE.SiteRecruit.OnReady.waitForLoad=clearInterval(COMSCORE.SiteRecruit.OnReady.waitForLoad),COMSCORE.SiteRecruit.OnReady.onload()},1e3);else if(window.addEventListener)window.addEventListener("load",a.OnReady.onload,!1);else if(window.attachEvent)return window.attachEvent("onload",a.OnReady.onload)},f:[],done:!1,timer:null}}(),COMSCORE.SiteRecruit.OnReady.listen());