(()=>{var u=class{galleryUID;items=[];constructor(t,r=1){if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=r,u.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let r=t.querySelectorAll("figure.gallery-image");for(let i of r){let n=i.querySelector("figcaption"),o=i.querySelector("img"),a={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:i};n&&(a.title=n.innerHTML),this.items.push(a)}}static createGallery(t){let r=t.querySelectorAll("img.gallery-image");for(let o of Array.from(r)){let a=o.closest("p");if(!a||!t.contains(a)||(a.textContent.trim()==""&&a.classList.add("no-text"),!a.classList.contains("no-text")))continue;let m=o.parentElement.tagName=="A",d=o,l=document.createElement("figure");if(l.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),l.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),m&&(d=o.parentElement),d.parentElement.insertBefore(l,d),l.appendChild(d),o.hasAttribute("alt")){let s=document.createElement("figcaption");s.innerText=o.getAttribute("alt"),l.appendChild(s)}if(!m){l.className="gallery-image";let s=document.createElement("a");s.href=o.src,s.setAttribute("target","_blank"),o.parentNode.insertBefore(s,o),s.appendChild(o)}}let i=t.querySelectorAll("figure.gallery-image"),n=[];for(let o of i)n.length?o.previousElementSibling===n[n.length-1]?n.push(o):n.length&&(u.wrap(n),n=[o]):n=[o];n.length>0&&u.wrap(n)}static wrap(t){let r=document.createElement("div");r.className="gallery";let i=t[0].parentNode,n=t[0];i.insertBefore(r,n);for(let o of t)r.appendChild(o)}open(t){let r=document.querySelector(".pswp");new window.PhotoSwipe(r,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:n=>{let o=this.items[n].el.getElementsByTagName("img")[0],a=window.pageYOffset||document.documentElement.scrollTop,c=o.getBoundingClientRect();return{x:c.left,y:c.top+a,w:c.width}}}).init()}bindClick(){for(let[t,r]of this.items.entries())r.el.querySelector("a").addEventListener("click",n=>{n.preventDefault(),this.open(t)})}},b=u;var h={};if(localStorage.hasOwnProperty("StackColorsCache"))try{h=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{h={}}async function S(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!h.hasOwnProperty(e)||h[e].hash!==t){let i=await Vibrant.from(r).getPalette();h[e]={hash:t,Vibrant:{hex:i.Vibrant.hex,rgb:i.Vibrant.rgb,bodyTextColor:i.Vibrant.bodyTextColor},DarkMuted:{hex:i.DarkMuted.hex,rgb:i.DarkMuted.rgb,bodyTextColor:i.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(h))}return h[e]}var x=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},H=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},A=(e,t=500)=>window.getComputedStyle(e).display==="none"?H(e,t):x(e,t);function v(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),A(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function D(e,t,r){var i=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let o=t[n];n=="dangerouslySetInnerHTML"?i.innerHTML=o.__html:o===!0?i.setAttribute(n,n):o!==!1&&o!=null&&i.setAttribute(n,o.toString())}for(let n=2;n<arguments.length;n++){let o=arguments[n];o&&i.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return i}var w=D;var y=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",r=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let r=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(r)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},E=y;function g(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var q=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",T="#TableOfContents",L="#TableOfContents li",M="active-class";function B(e,t){let r=e.querySelector("a").offsetHeight,i=e.offsetTop-t.offsetHeight/2+r/2-t.offsetTop;i<0&&(i=0),t.scrollTo({top:i,behavior:"smooth"})}function N(e){let t={};return e.forEach(r=>{let n=r.querySelector("a").getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=r)}),t}function k(e){let t=[];return e.forEach(r=>{t.push({id:r.id,offset:r.offsetTop})}),t.sort((r,i)=>r.offset-i.offset),t}function P(){let e=document.querySelectorAll(q);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(T);if(!t){console.warn("No toc matched query",T);return}let r=document.querySelectorAll(L);if(!r){console.warn("No navigation matched query",L);return}let i=k(e),n=!1;t.addEventListener("mouseenter",g(()=>n=!0)),t.addEventListener("mouseleave",g(()=>n=!1));let o,a=N(r);function c(){let d=document.documentElement.scrollTop||document.body.scrollTop,l;i.forEach(p=>{d>=p.offset-20&&(l=document.getElementById(p.id))});let s;l&&(s=a[l.id]),l&&!s?console.debug("No link found for section",l):s!==o&&(o&&o.classList.remove(M),s&&(s.classList.add(M),n||B(s,t)),o=s)}window.addEventListener("scroll",g(c));function m(){i=k(e),c()}window.addEventListener("resize",g(m))}var O="a[href]";function C(){document.querySelectorAll(O).forEach(e=>{e.getAttribute("href").startsWith("#")&&e.addEventListener("click",r=>{r.preventDefault();let i=decodeURI(e.getAttribute("href").substring(1)),n=document.getElementById(i),o=n.getBoundingClientRect().top-document.documentElement.getBoundingClientRect().top;window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:o,behavior:"smooth"})})})}var I={init:()=>{v();let e=document.querySelector(".article-content");e&&(new b(e),C(),P());let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(i,n)=>{i.forEach(o=>{if(!o.isIntersecting)return;n.unobserve(o.target),o.target.querySelectorAll("article.has-image").forEach(async c=>{let m=c.querySelector("img"),d=m.src,l=m.getAttribute("data-key"),s=m.getAttribute("data-hash"),p=c.querySelector(".article-details"),f=await S(l,s,d);p.style.background=`
                        linear-gradient(0deg, 
                            rgba(${f.DarkMuted.rgb[0]}, ${f.DarkMuted.rgb[1]}, ${f.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${f.Vibrant.rgb[0]}, ${f.Vibrant.rgb[1]}, ${f.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(t),new E(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){I.init()},0)});window.Stack=I;window.createElement=w;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
