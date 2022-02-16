"use strict";(self["webpackChunkquasar"]=self["webpackChunkquasar"]||[]).push([[373],{7373:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(3673);const l=(0,n.Uk)(" Quasar Code Base");function r(e,t,a,r,i,o){const s=(0,n.up)("q-btn"),u=(0,n.up)("q-icon"),p=(0,n.up)("router-link"),d=(0,n.up)("q-toolbar-title"),c=(0,n.up)("q-toolbar"),m=(0,n.up)("q-header"),h=(0,n.up)("ListNavigation"),w=(0,n.up)("q-drawer"),v=(0,n.up)("router-view"),f=(0,n.up)("q-page-container"),g=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(g,{view:"hHh lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"bg-white text-black q-border-b q-border-black"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t[0]||(t[0]=t=>e.leftDrawerOpen=!e.leftDrawerOpen)}),(0,n.Wm)(d,{class:"full-width text-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:"home"}),(0,n.Wm)(p,{to:"/",class:"no-underline text-black"},{default:(0,n.w5)((()=>[l])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(w,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1},8,["modelValue"]),(0,n.Wm)(f,{style:{"max-width":"1200px"},class:"q-mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(v)])),_:1})])),_:1})}var i=a(1959);function o(e,t,a,l,r,i){const o=(0,n.up)("NavItem");return(0,n.wg)(),(0,n.iD)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.navItems,(e=>((0,n.wg)(),(0,n.j4)(o,{key:e.title,item:e},null,8,["item"])))),128))])}var s=a(2323);const u={class:"full-width column justify-center"},p={key:0,class:"q-pa-ma-none"},d={key:0};function c(e,t,a,l,r,i){const o=(0,n.up)("router-link"),c=(0,n.up)("nav-item",!0),m=(0,n.up)("q-expansion-item");return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(`bg-grey-${e.nestLevel+2}`)},[(0,n.Wm)(m,{label:" ".repeat(2*e.nestLevel)+e.item.title,"expand-icon-class":e.item.children?"":"hidden"},{header:(0,n.w5)((()=>[(0,n._)("div",u,[e.item.path?e.item.name?((0,n.wg)(),(0,n.j4)(o,{key:1,class:"q-no-decoration text-grey-10 no-underline full-width",to:{name:e.item.name}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(" ".repeat(2*e.nestLevel)+e.item.title),1)])),_:1},8,["to"])):((0,n.wg)(),(0,n.j4)(o,{key:2,class:"q-no-decoration text-grey-10 no-underline full-width",to:e.item.path},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(" ".repeat(2*e.nestLevel)+e.item.title),1)])),_:1},8,["to"])):((0,n.wg)(),(0,n.iD)("p",p,(0,s.zw)(" ".repeat(2*e.nestLevel)+e.item.title),1))])])),default:(0,n.w5)((()=>[e.item.children?((0,n.wg)(),(0,n.iD)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.item.children,((t,a)=>((0,n.wg)(),(0,n.j4)(c,{key:a,item:t,"nest-level":e.nestLevel+1,"parent-path":e.parentPath+"/"+(e.item.pathName?e.item.pathName:e.item.title)},null,8,["item","nest-level","parent-path"])))),128))])):(0,n.kq)("",!0)])),_:1},8,["label","expand-icon-class"])],2)}var m=a(9582);const h=(0,m.tv)(),w=(0,n.aZ)({name:"NavItem",props:{item:{type:Object,required:!0},parentPath:{default:""},nestLevel:{default:0}},setup(){return{router:h}}});var v=a(4260),f=a(2017),g=a(7518),y=a.n(g);const b=(0,v.Z)(w,[["render",c]]),k=b;y()(w,"components",{QExpansionItem:f.Z});const _=[{title:"CSV Parser",path:"/csv_parser"},{title:"Styles",children:[{title:"Extended Style",path:"/styles/extended_style"},{title:"Typography",path:"/styles/typography"},{title:"Elevation",path:"/styles/elevation"}]},{title:"Data Visualisation",children:[{title:"Google Charts",path:"/data_viz/g_charts"},{title:"Chart.js",path:"/data_viz/chart_js"}]},{title:"Background",path:"/background"},{title:"Google Map",path:"/g_map"},{title:"UI Components",children:[{title:"Tag Selector",name:"Tag Selector",path:"/ui/tag_selector"}]},{title:"Containers",path:"/containers"}],q=(0,n.aZ)({components:{NavItem:k},setup(){return{navItems:_}}}),Z=(0,v.Z)(q,[["render",o]]),x=Z,D=(0,n.aZ)({name:"MainLayout",components:{ListNavigation:x},setup(){const e=(0,i.iH)(!1);return{leftDrawerOpen:e}}});var C=a(3066),L=a(3812),W=a(9570),Q=a(2165),j=a(3747),I=a(4554),N=a(9526),O=a(2652);const T=(0,v.Z)(D,[["render",r]]),z=T;y()(D,"components",{QLayout:C.Z,QHeader:L.Z,QToolbar:W.Z,QBtn:Q.Z,QToolbarTitle:j.Z,QIcon:I.Z,QDrawer:N.Z,QPageContainer:O.Z})}}]);