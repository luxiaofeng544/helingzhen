(function(m){function s(){if(a.ishttps){h.gifpath="https://vstgif.17u.cn/__tctm.gif";h.eventpath="https://vstlog.17u.cn/TrackEvent/TrackEvent.ashx"}}function t(){a.ct=[a.dl.hostname.toLowerCase()==="m.ly.com"?"2":"1",a.ca.split(".")[0],a.ca.split(".")[4],a.cb.split(".")[3],a.cb.split(".")[0],a.uid].join("\u02c7");a.d.cookie="__tctrack=0;path=/;"+a.dc}function u(){a.tpd=v(a.dm).toLowerCase();a.dc="domain="+a.tpd+";";return q(a.tpd)}function w(){if(!a.dr&&typeof window.opener!="undefined"&&window.opener)try{a.dr=
window.opener.location.href}catch(b){}if(a.dr){if(a.dr.indexOf("[")==0&&a.dr.lastIndexOf("]")==a.dr.length-1)a.dr="-"}else a.dr="-";x(a.dr)}function x(b){a.dr=b.replace("http://","").replace("https://","");a.fpd=v(b).toLowerCase()}function v(b){var c=b.match(h.pd);if(c!=null)return c[0];c=0;if((c=b.indexOf("/"))>-1)return b.substring(0,c);return b}function q(b){if(!b)return 1;for(var c=0,d=0,g=b.length-1;g>=0;g--){d=parseInt(b.charCodeAt(g));c=(c<<6&268435455)+d+(d<<14);if((d=c&266338304)!=0)c^=d>>
21}return c}function y(){var b=0,c=0;a.ca=o("__tctma");a.cb=o("__tctmb");var d=o("__tctmu");a.cz=o("__tctmz");if(!h.cazz.test(a.ca)){a.ca=a.u+"."+a.mt+"."+a.mt+"."+a.mt+".1";b=-1}if(!h.cbzz.test(a.cb)){a.cb=a.hid+"."+a.mt+"."+a.mt+".1";c=-1}var g=0,f=q(a.du.toLowerCase()),e=q(a.dr.toLowerCase());if(b==0&&c==0){b=o("__tctmc");c=o("__tctmd");if(b!=f||c!=e){a.cb=z(a.cb);k("__tctmc",f);k("__tctmd",e)}else g=1}else{if(b==0)a.ca=z(a.ca);k("__tctmc",f);k("__tctmd",e);a.fns=1}A(d);return g}function z(b){var c=
b.split("."),d=c[c.length-1]*1+1,g=c[c.length-2];b="";for(var f=0;f<c.length-3;f++)b+=c[f]+".";b+=g+"."+a.mt+"."+d;return b}function A(b){if(b=="-"){a.cu=0;a.ci=0}else if(b.indexOf("tckeyword=")>-1){a.cu=b.replace("tckeyword=","");a.ci=0}else{a.cu=b.split(".")[0];a.ci=b.split(".")[1]}}function o(b){b=l(a.d.cookie,b+"="+a.dmh,";");if(b!="-")b=b.substring(b.indexOf(".")+1);return b}function l(b,c,d){if(!b||!c||!d)return"-";var g,f="-";g=b.indexOf(c);c=c.indexOf("=")+1;if(g>-1){d=b.indexOf(d,g);if(d<
0)d=b.length;f=b.substring(g+c,d)}return f}function k(b,c,d){var g="";g=b=="longKey"?b+"="+c+";path=/;":b+"="+a.dmh+"."+c+";path=/;";if(d)g+=d;g+=a.dc;a.d.cookie=g}function B(){if(typeof _tcq!="undefined")for(var b="",c=0;c<_tcq.length;c++)if(typeof _tcq[c][1]!="undefined"){b=_tcq[c][0].toLowerCase().replace(/{|\^|}/g,"");var d=_tcq[c][1];switch(b){case "_serialid":a.orser=d;break;case "_vrcode":a.acct=d;break;case "_trackpageview":a.pview=d;break;case "_refid":a.refid=d;break;case "_userid":a.uid=
d;break;case "_resid":a.resid=d;break;case "_qdid":a.qdid=d;break;case "_flag":a.fg=d}}}function C(){var b="",c="-",d=0,g=0,f=0,e=a.cz;f=a.dls;c=l(f,h.crf+"=","&");try{c!="-"&&c!=""&&x(typeof decodeURIComponent=="function"?decodeURIComponent(c):decodeURI(c))}catch(j){}c=l(f,h.csr+"=","&");if(c!="-"&&c!=""){b="utmcsr="+i(n(c));c=l(f,h.ccn+"=","&");b+=c!="-"&&c!=""?"|utmccn="+i(n(c)):"|utmccn=(not+set)";c=l(f,h.cmd+"=","&");b+=c!="-"&&c!=""?"|utmcmd="+i(n(c)):"|utmcmd=(not+set)";c=D(1);if(c!="-"&&c!=
"")b+=c;c=l(f,h.cct+"=","&");if(c!="-"&&c!="")b+="|utmcct="+i(n(c))}if(b=="-"||b=="")b=D();if(b=="-"||b=="")b=I();c=l(f,h.ctr+"=","&");a.cu=c!="-"&&c!=""?c:a.cu;c=l(f,h.cti+"=","&");a.ci=c!="-"&&c!=""?c:a.ci;if(b=="-"||b==""||typeof b=="undefined"){if(e=="-")b="utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)";if(b=="-"||b=="")return""}if(e!="-"){f=e.indexOf(".");if(f>-1)f=e.indexOf(".",f+1);if(f>-1)f=e.indexOf(".",f+1);c=e.substring(f+1,e.length);if(c.toLowerCase()==b.toLowerCase())d=1;c=e.substring(0,
f);if((f=c.lastIndexOf("."))>-1){c=c.substring(f+1,c.length);g=c*1}}if(d==0||a.fns==1){g++;a.cz=a.mt+"."+a.ca.split(".")[a.ca.split(".").length-1]+"."+g+"."+b}return d==0||a.fns==1?"&utmcn=1":"&utmcr=1"}function I(){if(a.dr=="0"||a.dr==""||a.dr=="-")return"";var b=a.dr.toLowerCase(),c="-";if(b.indexOf("/")>-1){c=b.substring(b.indexOf("/")+1,b.length);if(c.indexOf("?")>-1)c=c.substring(0,c.indexOf("?"))}if(!h.ldm.test(a.fpd)&&a.fpd!=a.tpd){a.cu=0;a.ci=0;return"utmccn=(referral)|utmcsr="+n(a.fpd)+"|utmcct="+
n(c)+"|utmcmd=referral"}else return""}function D(b){if(a.dr=="0"||a.dr==""||a.dr=="-")return"";for(var c=0,d=a.dr.toLowerCase(),g,f=0;f<h.osr.length;f++)if(a.fpd.indexOf(h.osr[f])>-1)if((c=d.indexOf("?"+h.okw[f]+"="))>-1||(c=d.indexOf("&"+h.okw[f]+"="))>-1){g=d.substring(c+h.okw[f].length+2,d.length).replace("|","\u2016");if((c=g.indexOf("&"))>-1)g=g.substring(0,c);c="-";if(h.esl[f]!="")c=l(d.substring(d.indexOf("?")+1,d.length),h.esl[f]+"=","&");if(h.eslutf.test(d))c="utf-8";if(c=="-"){c="utf-8";
if(h.eslgb.test(h.osr[f]))c="gb2312";switch(h.osr[f]){case "baidu":if(d.indexOf("ssid=0/from=844b")>0)c="utf-8"}}a.cu=0;a.ci=0;return b?"|utmEsl="+c+"|utmctr="+n(g):"utmccn=(organic)|utmcmd=organic|utmEsl="+c+"|utmcsr="+h.osr[f]+"|utmctr="+n(g)}return""}function n(b){return b.replace(/ /g,"+")}function E(){var b="";b+=i("__tctma="+a.dmh+"."+a.ca+";+");b+=i("__tctmb="+a.dmh+"."+a.cb.substring(a.cb.indexOf(".")+1,a.cb.length)+";+");b+=i("__tctmu="+a.dmh+".tckeyword="+a.cu+"|tcideaid="+a.ci+";");b+=
i("__tctmz="+a.dmh+"."+a.cz+";+");return b}function F(){var b="-",c="-",d="-",g="-",f=0,e="";e=navigator;if(self.screen){b=screen.width+"x"+screen.height;c=screen.colorDepth+"-bit"}else if(self.java){b=java.awt.Toolkit.getDefaultToolkit().getScreenSize();b=b.width+"x"+b.height}if(e.language)d=e.language.toLowerCase();else if(e.browserLanguage)d=e.browserLanguage.toLowerCase();f=e.javaEnabled()?1:0;if(a.d.characterSet)g=i(a.d.characterSet);else if(a.d.charset)g=i(a.d.charset);var j=e.userAgent.toLowerCase();
e=j.indexOf("metasr")>-1?"sogou":j.indexOf("theworld")>-1?"theworld":j.indexOf("firefox")>-1?"firefox":j.indexOf("chrome")>-1?"chrome":j.indexOf("safari")>-1?"safari":j.indexOf("opera")>-1?"opera":j.indexOf("msie")>-1?"msie":j.indexOf("ipad")?"safari mobile":e.appName?e.appName.toLowerCase():"other";return"utmcs="+g.toLowerCase()+";utmsr="+b+";utmsc="+c+";utmul="+d+";utmje="+f+";utmie="+e}function i(b,c){return typeof encodeURIComponent=="function"?c?encodeURI(b):encodeURIComponent(b):escape(b)}function p(b,
c){c+=1;if(!(c>2||!b)){var d=new Image;d.src=b+"&_v="+c+"&dt="+(new Date).getTime();d.onload=function(){delete d};d.onerror=function(){p(b,c);return true}}}function G(b,c){c+=1;if(!(c>2||!b)){var d=document.createElement("script");d.language="javaScript";d.type="text/JavaScript";d.src=b+"&_v="+c;document.getElementsByTagName("head")[0].appendChild(d);d.onerror=function(){G(b,c);return true}}}function r(){if(a.fg){var b="";b+="&utmn="+Math.round(Math.random()*2147483647);b+=C();if(a.d.title)b+="&utmdt="+
i(a.d.title);b+="&utmhid="+a.cb.split(".")[0];b+="&utmr="+i(a.dr);b+="&utmp="+i(a.du);if(a.orser)b+="&serialid="+a.orser;if(a.resid)b+="&resourceid="+a.resid;if(a.qdid)b+="&qdid="+a.qdid;if(a.pview)b+="&Pageview="+i(a.pview);b+="&refId="+a.refid+"&userId="+a.uid;b=h.gifpath+"?utmac="+a.acct+b+"&utmcc="+E()+"&bInfo="+i(F());p(b,0);a.fns=0;k("__tctmu",a.cu+"."+a.ci,"");a.cz!="-"&&a.cz!=""&&k("__tctmz",a.cz,"")}}function J(){var b=document.createElement("script");b.type="text/javascript";b.src="http://www."+
a.fpd+"/vstjsonp/GetCookie.ashx?CookieKey=__tctmu,__tctmz&CallBack=_tcTraObj.CallBack";b.onreadystatechange=b.onerror=function(){if(!this.readyState||(this.readyState==="loaded"||this.readyState==="complete")&&!window[obj])r()};document.getElementsByTagName("head")[0].appendChild(b)}var a={dc:"",d:m,dl:m.location,dls:m.location.search,dm:m.domain,dmh:0,du:m.location.href.replace("http://","").replace("https://",""),dr:m.referrer,ishttps:m.location.protocol=="https:",fpd:"",tpd:"",u:_tclk,mt:_tcmmt,
dt:(new Date).getTime(),fns:0,acct:"-",orser:"",pview:"",refid:0,uid:0,resid:0,qdid:0,fg:true,ca:"",cb:"",cu:"",ci:"",cz:"",ct:"",hid:Math.round(Math.random()*4503599627370495)},h={ccn:"utm_campaign",cct:"utm_content",cmd:"utm_medium",csr:"utm_source",crf:"utm_referrer",ctr:"tcbdkeyid",cti:"tcideaid",osr:["baidu","baidu","google","sogou","soso","youdao","bing","yahoo","114so","gougou","jike","panguso","360","so","sogou"],okw:["wd","word","q","query","w","q","q","p","kw","search","q","q","q","q","keyword"],
esl:["ie","ie","ie","ie","ie","ue","","ei","","","","","ie","ie",""],eslutf:/(m.baidu.com|wap.baidu.com|baidu.mobi|3g.baidu.com|m1.baidu.com|m5.baidu.com)/,eslgb:/^(baidu|soso|sogou|118114)$/,ta:/^(172.|192.|127.|10.|localhost)/,ldm:/(ly.com|tongcheng.com|17u.cn|17u.com|17u.net)/,pd:/[\w-]+\.(com|net|org|gov|cc|biz|info|cn|mil|biz|name|rec)(\.(cn|hk|ca|pe))*/,cazz:/^(\d+\.\d+\.\d+\.\d+\.\d+){1}$/,cbzz:/^(\d+\.\d+\.\d+\.\d+){1}$/,gifpath:"http://vstgif.17usoft.com/__tctm.gif",eventpath:"http://vstlog.17usoft.com/TrackEvent/TrackEvent.ashx",
clickpath:"http://vstlog.17usoft.com/HeatMap/ClickStream.ashx"};(function(){B();if(a.fg)if(a.dl.protocol!="file:")if(!h.ta.test(a.dm)){s();a.dmh=u();if(a.dmh>0){w();if(!a.dls)a.dls="";if(typeof a.dl.hash!="undefined"&&a.dl.hash)a.dls=a.dls.replace("?","")+a.dl.hash.replace("#","&");var b,c;c="expires="+(new Date(a.dt+63072E6)).toGMTString()+";";b="expires="+(new Date(a.dt+18E5)).toGMTString()+";";var d=y();k("__tctma",a.ca,c);k("__tctmb",a.cb,b);if(d==0)!a.ishttps&&a.fpd!=a.tpd&&h.ldm.test(a.fpd)?
J():r()}k("longKey",a.ca.split(".")[0],"");t()}})();window._tcTraObj={CallBack:function(b){try{if(b){var c=eval(b);c.hasOwnProperty("__tctmu")&&c.__tctmu.length>0&&A(c.__tctmu.substr(c.__tctmu.indexOf(".")+1));if(c.hasOwnProperty("__tctmz")&&c.__tctmz.length>0){var d=c.__tctmz.indexOf(".");if(d>-1)d=c.__tctmz.indexOf(".",d+1);if(d>-1)d=c.__tctmz.indexOf(".",d+1);if(d>-1)d=c.__tctmz.indexOf(".",d+1);var g=c.__tctmz.substring(d+1,c.__tctmz.length);if(a.cz=="-")g=a.mt+"."+a.ca.split(".")[a.ca.split(".").length-
1]+".1."+g;else{d=a.cz.indexOf(".");b=0;if(d>-1)d=a.cz.indexOf(".",d+1);if(d>-1)d=a.cz.indexOf(".",d+1);var f=a.cz.substring(0,d);if((d=f.lastIndexOf("."))>-1){f=f.substring(d+1,f.length);b=f*1}g=a.mt+"."+a.ca.split(".")[a.ca.split(".").length-1]+"."+b+"."+g}a.cz=g}}}catch(e){}r()},_tcTrackEvent:function(b,c,d,g,f){if(b&&c){var e="{";if(!f)f=a.du;e+='"LoginKey":'+a.ca.split(".")[0];e+=',"LoginCount":'+a.ca.split(".")[4];e+=',"SessionId":'+a.cb.split(".")[0];e+=',"PageCount":'+a.cb.split(".")[3];e+=
',"Category":"'+i(b)+'"';e+=',"Action":"'+i(c)+'"';e+=',"FromPage":"'+i(f)+'"';e+=',"Label":"'+(d?i(d):"")+'"';e+=',"Value":"'+(g?i(g):"")+'"';e+="}";p(h.eventpath+"?TrackEvent="+e,0)}},CookieInfo:function(){return a.ct},_tcTrackPage:function(b,c){a.du=a.dm+"/sg/"+b;a.dr=a.dm+"/sg/"+c;B();if(!a.fg)if(a.dl.protocol!="file:")if(!h.ta.test(a.dm)){s();a.dmh=u();if(a.dmh>0){w();if(!a.dls)a.dls="";if(typeof a.dl.hash!="undefined"&&a.dl.hash)a.dls=a.dls.replace("?","")+a.dl.hash.replace("#","&");var d,g;
g="expires="+(new Date(a.dt+63072E6)).toGMTString()+";";d="expires="+(new Date(a.dt+18E5)).toGMTString()+";";var f=y();k("__tctma",a.ca,g);k("__tctmb",a.cb,d);if(f==0)if(!a.fg){d="";d+="&utmn="+Math.round(Math.random()*2147483647);d+=C();if(a.d.title)d+="&utmdt="+i(a.d.title);d+="&utmhid="+a.cb.split(".")[0];d+="&utmr="+i(a.dr);d+="&utmp="+i(a.du);if(a.orser)d+="&serialid="+a.orser;if(a.pview)d+="&Pageview="+i(a.pview);if(a.resid)d+="&resourceid="+a.resid;if(a.qdid)d+="&qdid="+a.qdid;d+="&refId="+
a.refid+"&userId="+a.uid;d=h.gifpath+"?utmac="+a.acct+d+"&utmcc="+E()+"&bInfo="+i(F());p(d,0);a.fns=0;k("__tctmu",a.cu+"."+a.ci,"");a.cz!="-"&&a.cz!=""&&k("__tctmz",a.cz,"")}}k("longKey",a.ca.split(".")[0],"");t()}}};(function(b){var c,d=function(e){if(!_tcHotmapx.pid||parseInt(Math.random()*100)>_tcHotmapx.sp)return false;flag=false;c&&clearTimeout(c);c=setTimeout(function(){flag=true},500);e=g(e);return"?rx="+(e.x-parseInt(f()/2,10))+"&ry="+e.y+"&pid="+_tcHotmapx.pid},g=function(e){e=e||window.event;
return{x:e.pageX||e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),y:e.pageY||e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)}},f=function(){var e,j;if(window.innerWidth&&window.scrollMaxX)e=window.innerWidth+window.scrollMaxX;else if(document.body.scrollHeight>document.body.offsetHeight)e=document.body.scrollWidth;else if(document.body)e=document.body.offsetWidth;if(window.innerWidth)j=window.innerWidth;else if(document.documentElement&&document.documentElement.clientWidth)j=
document.documentElement.clientWidth;else if(document.body)j=document.body.clientWidth;return e<j?j:e};typeof _tcHotmapx=="undefined"||!_tcHotmapx||function(e,j,H){if(e.addEventListener)e.addEventListener(j,H,false);else e.attachEvent&&e.attachEvent("on"+j,H)}(b,"mousedown",function(e){if(d(e)){e=h.clickpath+d(e);G(e,0)}})})(m)})(document||window.document);