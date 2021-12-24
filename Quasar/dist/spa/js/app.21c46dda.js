(()=>{var e={3912:(e,t,r)=>{"use strict";r(5363),r(71);var n=r(8880),a=r(2277),o=r(3673);function i(e,t,r,n,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l=(0,o.aZ)({name:"App"});var s=r(4260);const d=(0,s.Z)(l,[["render",i]]),c=d;var u=r(7083),p=r(9582),h=r(8649);const{navRoutes:f}=(0,h.S)(),v=[{path:"/",component:()=>Promise.all([r.e(736),r.e(979)]).then(r.bind(r,9979)),children:[...f,{path:"",component:()=>Promise.all([r.e(736),r.e(548)]).then(r.bind(r,1548))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(293)]).then(r.bind(r,7293))}],g=v,m=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function b(e,t){const r="function"===typeof m?await m({}):m,n=e(c);return n.use(a.Z,t),{app:n,router:r}}const y={config:{}},C="";async function P({app:e,router:t},r){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},o=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===n&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:o,urlPath:i,publicPath:C})}catch(l){return l&&l.url?void o(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}b(n.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,6451)),Promise.resolve().then(r.bind(r,1768))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},1768:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,api:()=>i});var n=r(7083),a=r(52),o=r.n(a);const i=o().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=i}))},6451:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7083),a=r(5948);const o={failed:"Action failed",success:"Action was successful"},i={"en-US":o},l=(0,n.xr)((({app:e})=>{const t=(0,a.o)({locale:"en-US",messages:i});e.use(t)}))},8649:(e,t,r)=>{"use strict";r.d(t,{S:()=>o});const n=[{title:"Grand Parent",pathName:"grand_parent",page:"GrandParent.vue",description:"Grand Parend Level Content",children:[{title:"Parent",page:"Parent.vue",description:"Parent Level Content",children:[{title:"Child",page:"Child.vue",description:"Child Level Content",children:[{title:"GrandChild",page:"GrandChild.vue",description:"Grand Chuld Level Content"}]}]},{title:"ParentSibling",page:"ParentSibling.vue",description:"ParentSibling Content",children:[{title:"Child",page:"Child.vue",description:"Child Level Content",children:[{title:"GrandChild",page:"GrandChild.vue",description:"Grand Chuld Level Content"}]}]}]},{title:"Data Visualisation",pathName:"data_viz",page:"DataViz.vue",description:"Page for google charts data visualisation components"},{title:"Extended Style",pathName:"extended_style",page:"ExtendedStyle.vue",description:'Page for extended css style, access these styles by copy and embed <code class="bg-grey-2 q-px-sm">q-style-extended.scss</code> to <code class="bg-grey-2 q-px-sm">app.scss</code>. Take note, comment not used color variables as much as possible, else the css file size will be HUGE'},{title:"Backgrounds",pathName:"bg_pattern",page:"Backgrounds.vue",description:"different animated backgrounds"},{title:"Google Map",pathName:"g_map",page:"GoogleMapExample.vue",description:"Some useful google map functions. For costing purpose, each day been limited to 300 api calls."}],a=e=>{const t=[],n=(e,a="")=>e.forEach((e=>{const o=`${a}/${e.pathName?e.pathName:e.title}`;e.children&&n(e.children,o),t.push({path:o,component:()=>r(717)(`./${e.page}`),props:{description:e.description}})}));return n(e),t},o=()=>({nav:n,navRoutes:a(n)})},717:(e,t,r)=>{var n={"./Backgrounds":[8282,282],"./Backgrounds.vue":[8282,282],"./Child":[2437,736,437],"./Child.vue":[2437,736,437],"./DataViz":[2906,736,906],"./DataViz.vue":[2906,736,906],"./Error404":[7293,736,293],"./Error404.vue":[7293,736,293],"./ExtendedStyle":[2165,736,165],"./ExtendedStyle.vue":[2165,736,165],"./GoogleMapExample":[5007,736,7],"./GoogleMapExample.vue":[5007,736,7],"./GrandChild":[8315,736,315],"./GrandChild.vue":[8315,736,315],"./GrandParent":[7534,736,534],"./GrandParent.vue":[7534,736,534],"./GrandParentSibling":[6586,736,586],"./GrandParentSibling.vue":[6586,736,586],"./Index":[1548,736,548],"./Index.vue":[1548,736,548],"./Parent":[5375,736,375],"./Parent.vue":[5375,736,375],"./ParentSibling":[4727,736,727],"./ParentSibling.vue":[4727,736,727]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(n),a.id=717,e.exports=a}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{7:"4251f032",165:"59df3a5f",282:"14e27248",293:"5e6dbd37",315:"b07c08e8",375:"ed938550",437:"7fcf4340",534:"299808bf",548:"46812281",586:"ccfc5510",727:"3715e9e3",906:"2ceea9fd",979:"7e18fc2c"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"efb09cd8",165:"d1c4be4c",282:"f225c93b",736:"04a483ec"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar:";r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[a];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=n=>new Promise(((a,o)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return a();e(n,l,a,o)})),a={143:0};r.f.miniCss=(e,t)=>{var r={165:1,282:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=o);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[i[d]]=0;return r.O(c)},n=self["webpackChunkquasar"]=self["webpackChunkquasar"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(3912)));n=r.O(n)})();