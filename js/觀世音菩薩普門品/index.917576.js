var notifyyt,notifyqueue;function onYouTubeIframeAPIReady(){notifyyt(),window.loadyt=function(e){e()}}window.loadyt=function(e){var t=document.createElement("script");t.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),notifyqueue||(notifyqueue=[],notifyyt=function(){var e;for(e=0;e<notifyqueue.length;++e){(0,notifyqueue[e])()}}),notifyqueue.push(e)};window.plstp||(window.plstp=[]),plst=function(p,w){for(var n in window.plstp)window.plstp[n]();window.plstp=[],void 0!==p&&(window.plstp[p]=w)},plrm=function(w){delete window.plstp[w]};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();var ready=function(){!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){var t=navigator.userAgent,a=/chrome/i.test(t),o=/firefox/i.test(t),n=/iPad|iPhone|iPod/.test(t)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;e.addEventListener("click",function(t){var r=!1,i=document.body.parentNode;n&&"none"!=getComputedStyle(i).getPropertyValue("scroll-snap-type")&&(i.setAttribute("data-snap",i.style.scrollSnapType),i.style.scrollSnapType="none",r=!0);var s=0;if(e.hash.length>1){var u=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));!o&&u||(u=1);var l=e.hash.slice(1),c=document.getElementById(l);if(null===c&&null===(c=document.querySelector('[name="'+l+'"]')))return;s=a?c.getBoundingClientRect().top*u+pageYOffset:(c.getBoundingClientRect().top+pageYOffset)*u}else if(r)for(var m=document.querySelectorAll("[data-block-group]"),p=0;p<m.length;p++)if("none"!=getComputedStyle(m[p]).getPropertyValue("scroll-snap-align")){c=m[p];break}if(r)window.smoothScroll(t,c,1);else if("scrollBehavior"in document.documentElement.style)scroll({top:s,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var d=pageYOffset,f=null;requestAnimationFrame(function e(t){f||(f=t);var a=(t-f)/400;scrollTo(0,d<s?(s-d)*a+d:d-(d-s)*a),a<1?requestAnimationFrame(e):scrollTo(0,s)})}else scrollTo(0,s);t.preventDefault()},!1)})}(),window.smoothScroll=function(e,t,a,o){e.stopImmediatePropagation();var n,r=pageYOffset;t?(("string"==typeof t||t instanceof String)&&(t=document.querySelector(t)),n=t.getBoundingClientRect().top):n=-r;var i=navigator.userAgent,s=/chrome/i.test(i),u=/firefox/i.test(i),l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));!u&&l||(l=1);var c=n*l+(s?0:r*(l-1)),m=null;function p(){d(window.performance.now?window.performance.now():Date.now())}function d(e){null===m&&(m=e);var n=(e-m)/1e3,i=function(e,t,a){switch(o){case"linear":break;case"easeInQuad":e*=e;break;case"easeOutQuad":e=1-(1-e)*(1-e);break;case"easeInCubic":e*=e*e;break;case"easeOutCubic":e=1-Math.pow(1-e,3);break;case"easeInOutCubic":e=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;break;case"easeInQuart":e*=e*e*e;break;case"easeOutQuart":e=1-Math.pow(1-e,4);break;case"easeInOutQuart":e=e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2;break;case"easeInQuint":e*=e*e*e*e;break;case"easeOutQuint":e=1-Math.pow(1-e,5);break;case"easeInOutQuint":e=e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2;break;case"easeInCirc":e=1-Math.sqrt(1-Math.pow(e,2));break;case"easeOutCirc":e=Math.sqrt(1-Math.pow(0,2));break;case"easeInOutCirc":e=e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2;break;case"easeInOutQuad":default:e=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}e>1&&(e=1);return t+a*e}(n/a,r,c);window.scrollTo(0,i),n<a?"requestAnimationFrame"in window?requestAnimationFrame(d):setTimeout(p,1e3/120):(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&(t&&t.scrollIntoView(),setTimeout(function(){var e=document.body.parentNode;e.style.scrollSnapType=e.getAttribute("data-snap"),e.removeAttribute("data-snap")},100))}return"requestAnimationFrame"in window?requestAnimationFrame(d):setTimeout(p,1e3/120),!1};window.loadyt(function(){var f=0;uq=new YT.Player('pl1',{host:'https://www.youtube-nocookie.com',videoId: 'oByjqFpBbzA',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl1',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl1')}if(0===e.data){f=0;plrm('pl1')}}}});});window.loadyt(function(){var f=0;uq2=new YT.Player('pl2',{host:'https://www.youtube-nocookie.com',videoId: 'OY6m7ChS8rI',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl2',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl2')}if(0===e.data){f=0;plrm('pl2')}}}});});window.loadyt(function(){var f=0;uq3=new YT.Player('pl3',{host:'https://www.youtube-nocookie.com',videoId: 'vr18fAnsBlI',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl3',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl3')}if(0===e.data){f=0;plrm('pl3')}}}});});window.loadyt(function(){var f=0;uq4=new YT.Player('pl4',{host:'https://www.youtube-nocookie.com',videoId: 'kuR_tDR1WcI',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl4',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl4')}if(0===e.data){f=0;plrm('pl4')}}}});});window.loadyt(function(){var f=0;uq5=new YT.Player('pl5',{host:'https://www.youtube-nocookie.com',videoId: 'WRvR947koz8',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl5',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl5')}if(0===e.data){f=0;plrm('pl5')}}}});});window.loadyt(function(){var f=0;uq6=new YT.Player('pl6',{host:'https://www.youtube-nocookie.com',videoId: 'NSXgm1tkfy8',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl6',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl6')}if(0===e.data){f=0;plrm('pl6')}}}});});window.loadyt(function(){var f=0;uq7=new YT.Player('pl7',{host:'https://www.youtube-nocookie.com',videoId: 'bn4_Xipn0y8',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl7',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl7')}if(0===e.data){f=0;plrm('pl7')}}}});});window.loadyt(function(){var f=0;uq8=new YT.Player('pl8',{host:'https://www.youtube-nocookie.com',videoId: 'U6U5Y7jPH3k',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl8',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl8')}if(0===e.data){f=0;plrm('pl8')}}}});});!function(){var e=null;if(location.hash){var t=location.hash.replace("#",""),n=function(){var o=document.getElementById(t);null===o&&(o=document.querySelector('[name="'+t+'"]')),o&&o.scrollIntoView(!0),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")?setTimeout(n,100):null!=e&&setTimeout(e,100)};n()}else null!=e&&e()}();wl.addAnimation('.un1',"1.00s","0.00s",1,100);wl.start();};load=function(){};"interactive"==document.readyState?(ready(),window.addEventListener("load",load)):"complete"==document.readyState?(ready(),load()):document.addEventListener("readystatechange",function(){"interactive"==document.readyState&&ready(),"complete"==document.readyState&&load()});