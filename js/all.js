!function(){/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}(),function(e,t,n){"use strict";var o=function(o,a){!!t.getComputedStyle||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var i,s,r,l,c,u,d,p=function(e,t,n,o){if("addEventListener"in e)try{e.addEventListener(t,n,o)}catch(a){if("object"!=typeof n||!n.handleEvent)throw a;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},h=function(e,t,n,o){if("removeEventListener"in e)try{e.removeEventListener(t,n,o)}catch(a){if("object"!=typeof n||!n.handleEvent)throw a;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},f=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},v=function(e,t){for(var n in t)e.setAttribute(n,t[n])},g=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},m=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},b=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,o,e[o])},y=function(e,t){return e.className&&new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},w=function(){for(var e=this,t=s.menuItems;-1===e.className.indexOf(t);)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement},E=e.createElement("style"),T=e.documentElement,x=function(t,n){var o;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",enableFocus:!1,enableDropdown:!1,menuItems:"menu-items",subMenu:"sub-menu",openDropdown:"Open sub menu",closeDropdown:"Close sub menu",init:function(){},open:function(){},close:function(){},resizeMobile:function(){},resizeDesktop:function(){}};for(o in n)this.options[o]=n[o];if(g(T,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=f(this.wrapper),s=this.options,i=this.wrapper,this._init(this)};return x.prototype={destroy:function(){if(this._removeStyles(),m(i,"closed"),m(i,"opened"),m(i,s.navClass),m(i,s.navClass+"-"+this.index),m(T,s.navActiveClass),i.removeAttribute("style"),i.removeAttribute("aria-hidden"),h(t,"resize",this,!1),h(t,"focus",this,!1),h(e.body,"touchmove",this,!1),h(r,"touchstart",this,!1),h(r,"touchend",this,!1),h(r,"mouseup",this,!1),h(r,"keyup",this,!1),h(r,"click",this,!1),s.customToggle?r.removeAttribute("aria-hidden"):r.parentNode.removeChild(r),s.enableDropdown){var n=this;b(d,function(e,t){h(t,"touchstart",n,!1),h(t,"touchend",n,!1),h(t,"mouseup",n,!1),h(t,"keyup",n,!1),h(t,"click",n,!1)})}},toggle:function(){l===!0&&(u?this.close():this.open())},open:function(){u||(m(i,"closed"),g(i,"opened"),g(T,s.navActiveClass),g(r,"active"),i.style.position=s.openPos,v(i,{"aria-hidden":"false"}),v(i,{"aria-expanded":"true"}),v(r,{"aria-expanded":"true"}),u=!0,s.open())},close:function(){u&&(g(i,"closed"),m(i,"opened"),m(T,s.navActiveClass),m(r,"active"),v(i,{"aria-hidden":"true"}),v(i,{"aria-expanded":"false"}),v(r,{"aria-expanded":"false"}),s.animate?(l=!1,setTimeout(function(){i.style.position="absolute",l=!0,s.enableDropdown&&(m(i,"dropdown-active"),b(d,function(e,t){m(t,"toggled"),m(t.nextSibling,"toggled")}))},s.transition+10)):(i.style.position="absolute",s.enableDropdown&&(m(i,"dropdown-active"),b(d,function(e,t){m(t,"toggled"),m(t.nextSibling,"toggled")}))),u=!1,s.close())},resize:function(){"none"!==t.getComputedStyle(r,null).getPropertyValue("display")?(c=!0,v(r,{"aria-hidden":"false"}),v(i,{"aria-expanded":"false"}),v(r,{"aria-expanded":"false"}),i.className.match(/(^|\s)closed(\s|$)/)&&(v(i,{"aria-hidden":"true"}),i.style.position="absolute"),i.className.match(/(^|\s)closed(\s|$)/)||(v(i,{"aria-expanded":"true"}),v(r,{"aria-expanded":"true"})),this._createStyles(),this._calcHeight(),s.resizeMobile()):(c=!1,v(r,{"aria-hidden":"true"}),v(i,{"aria-hidden":"false"}),i.removeAttribute("aria-expanded"),r.removeAttribute("aria-expanded"),i.style.position=s.openPos,this._removeStyles(),s.resizeDesktop())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,g(i,s.navClass),g(i,s.navClass+"-"+this.index),g(i,"closed"),l=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize(),this._createFocus(),this._createDropdown();var o=this;setTimeout(function(){o.resize()},20),p(t,"resize",this,!1),p(t,"focus",this,!1),p(e.body,"touchmove",this,!1),p(r,"touchstart",this,!1),p(r,"touchend",this,!1),p(r,"mouseup",this,!1),p(r,"keyup",this,!1),p(r,"click",this,!1),s.init()},_createStyles:function(){E.parentNode||(E.type="text/css",e.getElementsByTagName("head")[0].appendChild(E))},_removeStyles:function(){E.parentNode&&E.parentNode.removeChild(E)},_createToggle:function(){if(s.customToggle){var t=s.customToggle.replace("#","");if(e.getElementById(t))r=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");r=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=s.label,v(n,{href:"#",class:"nav-toggle"}),"after"===s.insert?i.parentNode.insertBefore(n,i.nextSibling):i.parentNode.insertBefore(n,i),r=n}},_closeOnNavClick:function(){if(s.closeOnNavClick){var e=i.getElementsByTagName("a"),t=this;b(e,function(n,o){p(e[n],"click",function(){c&&t.toggle()},!1)})}},_preventDefault:function(e){if(e.preventDefault)return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1;e.returnValue=!1},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,h(r,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),c){var n=e||t.event,o=n.target||n.srcElement,a=!1;if(y(o,"dropdown-toggle")&&s.enableDropdown&&(a=!0),!this.touchHasMoved){if("touchend"===e.type)return void(a?this._toggleDropdown(o):this.toggle());var i=e||t.event;3!==i.which&&2!==i.button&&(a?this._toggleDropdown(o):this.toggle())}}},_onKeyUp:function(e){var n=e||t.event,o=e.target,a=!1;y(o,"dropdown-toggle")&&s.enableDropdown&&(a=!0),13===n.keyCode&&(a?this._toggleDropdown(o):this.toggle())},_transitions:function(){if(s.animate){var e=i.style,t="max-height "+s.transition+"ms, visibility "+s.transition+"ms linear";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<i.inner.length;t++)e+=i.inner[t].offsetHeight;var n="."+s.jsClass+" ."+s.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+s.jsClass+" ."+s.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";E.styleSheet?E.styleSheet.cssText=n:E.innerHTML=n,n=""},_createFocus:function(){if(s.enableFocus){var e,t,n=i.getElementsByTagName("ul")[0],o=n.getElementsByTagName("a");for(t=0,e=o.length;t<e;t++)o[t].addEventListener("focus",w,!0),o[t].addEventListener("blur",w,!0)}},_createDropdown:function(){if(s.enableDropdown){var e,t,n=this,o=(i.getElementsByTagName("ul")[0],i.getElementsByClassName(s.subMenu));for(g(i,"multiple-level-nav"),e=0,t=o.length;e<t;e++)o[e].insertAdjacentHTML("beforebegin",'<button type="button" class="dropdown-toggle" aria-label="Open/close dropdown" aria-expanded="false">'+s.openDropdown+"</button>");d=i.querySelectorAll(".dropdown-toggle"),b(d,function(e,t){p(t,"touchstart",n,!1),p(t,"touchend",n,!1),p(t,"mouseup",n,!1),p(t,"keyup",n,!1),p(t,"click",n,!1)})}},_toggleDropdown:function(e){g(i,"dropdown-active"),e.innerHTML===s.openDropdown?e.innerHTML=s.closeDropdown:e.innerHTML=s.openDropdown;var t=e.parentNode;y(t.parentNode.parentNode,"dropdown");if(y(e,"toggled")){m(e,"toggled"),e.setAttribute("aria-expanded","false");var n=e.nextElementSibling;m(n,"toggled"),m(i,"dropdown-active")}else{g(e,"toggled"),e.setAttribute("aria-expanded","true");var n=e.nextElementSibling;g(n,"toggled"),g(i,"dropdown-active")}}},new x(o,a)};"undefined"!=typeof module&&module.exports?module.exports=o:t.responsiveNav=o}(document,window,0);var MoveTo=function(){function e(e,t,n,o){return e/=o,e--,-n*(e*e*e*e-1)+t}function t(e){for(var t=0,n=0;e;)t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent;return{top:t,left:n}}function n(e,t){var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),Object.keys(t).forEach(function(e){n[e]=t[e]}),n}function o(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(s,t),this.easeFunctions=n({easeOutQuart:e},o)}function i(e,t){var n={};return Object.keys(t).forEach(function(t){var a=e.getAttribute("data-mt-"+o(t));a&&(n[t]=isNaN(a)?a:parseInt(a,10))}),n}var s={tolerance:0,duration:800,easing:"easeOutQuart",callback:function(){}};return a.prototype.registerTrigger=function(e,t){var o=this;if(e){var a=e.getAttribute("href")||e.getAttribute("data-target"),s=a&&"#"!==a?document.getElementById(a.substring(1)):0,r=n(this.options,i(e,this.options));"function"==typeof t&&(r.callback=t),e.addEventListener("click",function(e){e.preventDefault(),o.move(s,r)})}},a.prototype.move=function(e){var o=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){a=n(this.options,a);var i="number"==typeof e?e:t(e).top,s=window.pageYOffset;i-=a.tolerance;var r=i-s,l=null,c=void 0,u=function t(n){var u=window.pageYOffset;l||(l=n-1);var d=n-l;if(c&&(c===u||r>0&&c>u||r<0&&c<u))return a.callback(e);c=u;var p=o.easeFunctions[a.easing](d,s,r,a.duration);window.scroll(0,p),d<a.duration?window.requestAnimationFrame(t):(window.scroll(0,i),a.callback(e))};window.requestAnimationFrame(u)}},a.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},a}();"undefined"!=typeof module?module.exports=MoveTo:window.MoveTo=MoveTo;var customToggle=document.getElementById("nav-toggle"),customLabel=document.getElementById("nav-toggle-label"),navigation=responsiveNav(".nav-collapse",{animate:!1,customToggle:".nav-toggle",navClass:".nav-collapse",menuItems:"menu-items",subMenu:"sub-menu",enableFocus:!0,enableDropdown:!0,openDropdown:screenReaderTexts.expandSubMenu,closeDropdown:screenReaderTexts.collapseSubMenu,open:function(){customLabel.innerHTML=screenReaderTexts.collapseMenu},close:function(){customLabel.innerHTML=screenReaderTexts.expandMenu},resizeMobile:function(){customToggle.setAttribute("aria-controls","nav")},resizeDesktop:function(){customToggle.removeAttribute("aria-controls")}});!function(e){e(window).scroll(function(){e(this).scrollTop()>300?e(".top").addClass("is-visible"):e(".top").removeClass("is-visible"),e(this).scrollTop()>1200?e(".top").addClass("fade-out"):e(".top").removeClass("fade-out")}),e(function(){const e=new MoveTo,t=document.getElementById("target");e.move(t);const n=document.getElementsByClassName("js-trigger")[0];e.registerTrigger(n)})}(jQuery);