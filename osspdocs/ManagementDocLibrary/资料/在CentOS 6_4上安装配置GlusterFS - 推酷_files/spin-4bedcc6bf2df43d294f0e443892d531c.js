!function(t,e,o){function a(t,o){var a,s=e.createElement(t||"div");for(a in o)s[a]=o[a];return s}function s(t){for(var e=1,o=arguments.length;o>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,o,a){var s=["opacity",e,~~(100*t),o,a].join("-"),i=.01+100*(o/a),n=Math.max(1-(1-t)/e*(100-i),t),r=d.substring(0,d.indexOf("Animation")).toLowerCase(),l=r&&"-"+r+"-"||"";return u[s]||(p.insertRule("@"+l+"keyframes "+s+"{"+"0%{opacity:"+n+"}"+i+"%{opacity:"+t+"}"+(i+.01)+"%{opacity:1}"+(i+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+n+"}"+"}",p.cssRules.length),u[s]=1),s}function n(t,e){var a,s,i=t.style;if(i[e]!==o)return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),s=0;s<f.length;s++)if(a=f[s]+e,i[a]!==o)return a}function r(t,e){for(var o in e)t.style[n(t,o)||o]=e[o];return t}function l(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)t[s]===o&&(t[s]=a[s])}return t}function c(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var d,f=["webkit","Moz","ms","O"],u={},p=function(){var t=a("style",{type:"text/css"});return s(e.getElementsByTagName("head")[0],t),t.sheet||t.styleSheet}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},m=function _(t){return this.spin?(this.opts=l(t||{},_.defaults,h),void 0):new _(t)};m.defaults={},l(m.prototype,{spin:function(t){this.stop();var e,o,s=this,i=s.opts,n=s.el=r(a(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),l=i.radius+i.length+i.width;if(t&&(t.insertBefore(n,t.firstChild||null),o=c(t),e=c(n),r(n,{left:(i.left=="auto"?o.x-e.x+(t.offsetWidth>>1):parseInt(i.left,10)+l)+"px",top:(i.top=="auto"?o.y-e.y+(t.offsetHeight>>1):parseInt(i.top,10)+l)+"px"})),n.setAttribute("aria-role","progressbar"),s.lines(n,s.opts),!d){var f=0,u=i.fps,p=u/i.speed,h=(1-i.opacity)/(p*i.trail/100),m=p/i.lines;(function _(){f++;for(var t=i.lines;t;t--){var e=Math.max(1-(f+t*m)%p*h,i.opacity);s.opacity(n,i.lines-t,e,i)}s.timeout=s.el&&setTimeout(_,~~(1e3/u))})()}return s},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=o),this},lines:function(t,e){function o(t,o){return r(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:o,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*l+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var n,l=0;l<e.lines;l++)n=r(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:d&&i(e.opacity,e.trail,l,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&s(n,r(o("#000","0 0 4px #000"),{top:"2px"})),s(t,s(n,o(e.color,"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(t,e,o){e<t.childNodes.length&&(t.childNodes[e].style.opacity=o)}}),function(){function t(t,e){return a("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=r(a("group"),{behavior:"url(#default#VML)"});!n(e,"transform")&&e.adj?(p.addRule(".spin-vml","behavior:url(#default#VML)"),m.prototype.lines=function(e,o){function a(){return r(t("group",{coordsize:c+" "+c,coordorigin:-l+" "+-l}),{width:c,height:c})}function i(e,i,n){s(f,s(r(a(),{rotation:360/o.lines*e+"deg",left:~~i}),s(r(t("roundrect",{arcsize:o.corners}),{width:l,height:o.width,left:o.radius,top:-o.width>>1,filter:n}),t("fill",{color:o.color,opacity:o.opacity}),t("stroke",{opacity:0}))))}var n,l=o.length+o.width,c=2*l,d=-(o.width+o.length)*2+"px",f=r(a(),{position:"absolute",top:d,left:d});if(o.shadow)for(n=1;n<=o.lines;n++)i(n,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(n=1;n<=o.lines;n++)i(n);return s(e,f)},m.prototype.opacity=function(t,e,o,a){var s=t.firstChild;a=a.shadow&&a.lines||0,s&&e+a<s.childNodes.length&&(s=s.childNodes[e+a],s=s&&s.firstChild,s=s&&s.firstChild,s&&(s.opacity=o))}):d=n(e,"animation")}(),"function"==typeof define&&define.amd?define(function(){return m}):t.Spinner=m}(window,document);