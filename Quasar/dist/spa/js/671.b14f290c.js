"use strict";(self["webpackChunkquasar"]=self["webpackChunkquasar"]||[]).push([[671],{3165:(n,e,l)=>{l.d(e,{Z:()=>h});var o=l(3673);function s(n,e,l,s,t,r){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a,{label:"Download File",color:"primary",icon:"download","no-caps":"",onClick:e[0]||(e[0]=e=>n.downloadFile())})])}var t=l(1959),r=l(2841),a=l(52),i=l.n(a);const u=(0,o.aZ)({props:{url:{type:String,required:!0},fileName:{type:String}},setup(n){const e=(0,t.iH)("");async function l(){const l=await i().get(n.url);console.log(l),(0,r.Z)(e.value,l.data)}return n.fileName||(e.value=n.url.split("/")[n.url.split("/").length-1]),{downloadFile:l}}});var c=l(4260),d=l(6819),p=l(7518),m=l.n(p);const g=(0,c.Z)(u,[["render",s]]),h=g;m()(u,"components",{QBtn:d.Z})},7791:(n,e,l)=>{l.d(e,{Z:()=>d});var o=l(3673),s=l(2323);const t={class:"row"},r={class:"bg-grey q-py-lg"};function a(n,e,l,a,i,u){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",t,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Number(n.numBlocks),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:(0,s.C_)(`col-md-${Math.floor(12/n.numColumns)} col-sm-6 col-12 q-pa-sm ${n.contentClass}`)},[(0,o.WI)(n.$slots,e,{},(()=>[(0,o._)("div",r,(0,s.zw)(e),1)]))],2)))),128))])])}const i=(0,o.aZ)({props:{numBlocks:{type:Number||String,default:4},numColumns:{type:Number||String,default:4},contentClass:{}},setup(){return{}}});var u=l(4260);const c=(0,u.Z)(i,[["render",a]]),d=c},7671:(n,e,l)=>{l.r(e),l.d(e,{default:()=>Z});l(246);var o=l(3673),s=l(2323);const t=(0,o._)("h3",{class:"q-mx-none"},"Typography",-1),r=(0,o._)("div",{class:"q-mb-lg"},[(0,o._)("i",null,"Last update: 2022 Jan 06")],-1),a={class:"row items-center q-mb-md"},i=(0,o._)("p",{class:"q-pa-ma-none"},"Download typography.scss",-1),u=(0,o._)("div",{class:"q-ma-lg q-pa-lg bg-green-alpha-2 q-border-round-8 q-border-x q-border-md q-border-green"},[(0,o.Uk)(" In case your project is not auto compiling scss. You can use "),(0,o._)("a",{href:"https://beautifytools.com/scss-compiler.php",target:"_blank"},"this online scss compilier"),(0,o.Uk)("to convert it to css. All you need to do is download the .scss file and copy everything to the compilier. All the syntax below will still works in css file. ")],-1),c=["innerHTML"],d=(0,o._)("div",{class:"q-horizontal-divider"},[(0,o._)("h1",null,"Header 1"),(0,o._)("h2",null,"Header 2"),(0,o._)("h3",null,"Header 3"),(0,o._)("h4",null,"Header 4"),(0,o._)("h5",null,"Header 5"),(0,o._)("h6",null,"Header 6"),(0,o._)("p",null,"Paragraph of text")],-1),p=(0,o._)("div",null,[(0,o._)("h6",{class:"q-my-sm"},"To use typography.scss"),(0,o._)("p",null,[(0,o.Uk)(" Add google font name to scss variable on top part of the file "),(0,o._)("code",null,"$bodyFont"),(0,o.Uk)(" and "),(0,o._)("code",null,"$headerFont")])],-1),m=(0,o._)("p",null,[(0,o._)("b",null,"Font Weight")],-1),g=(0,o._)("p",null,[(0,o.Uk)(" Use "),(0,o._)("code",null,".font-weight-{100 to 900}"),(0,o.Uk)(" to set different font weights ")],-1);function h(n,e,l,h,_,w){const y=(0,o.up)("FileDownloader"),f=(0,o.up)("Columns"),v=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(v,{class:"q-pa-lg"},{default:(0,o.w5)((()=>[t,r,(0,o._)("div",a,[i,(0,o.Wm)(y,{class:"q-mx-sm",url:"https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/typography.scss"}),u]),(0,o._)("div",{innerHTML:n.description,class:"q-mb-lg"},null,8,c),d,p,(0,o._)("div",null,[(0,o.Wm)(f,{"num-blocks":"1","num-columns":"3"},{1:(0,o.w5)((()=>[m,g,((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(9,(n=>(0,o._)("p",{key:n,class:(0,s.C_)(["font-weight-"+100*n,"q-my-none"])},(0,s.zw)("font-weight-"+100*n),3))),64))])),_:1})])])),_:1})}var _=l(3165),w=l(7791);const y=(0,o.aZ)({props:{description:{type:String}},components:{FileDownloader:_.Z,Columns:w.Z},setup(){return{}}});var f=l(4260),v=l(4379),b=l(7518),q=l.n(b);const k=(0,f.Z)(y,[["render",h]]),Z=k;q()(y,"components",{QPage:v.Z})}}]);