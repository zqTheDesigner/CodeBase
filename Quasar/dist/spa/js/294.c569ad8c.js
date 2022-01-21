"use strict";(self["webpackChunkquasar"]=self["webpackChunkquasar"]||[]).push([[294],{3165:(e,l,o)=>{o.d(l,{Z:()=>q});var r=o(3673);function n(e,l,o,n,s,d){const i=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{label:"Download File",color:"primary",icon:"download","no-caps":"",onClick:l[0]||(l[0]=l=>e.downloadFile())})])}var s=o(1959),d=o(2841),i=o(52),a=o.n(i);const t=(0,r.aZ)({props:{url:{type:String,required:!0},fileName:{type:String}},setup(e){const l=(0,s.iH)("");async function o(){const o=await a().get(e.url);console.log(o),(0,d.Z)(l.value,o.data)}return e.fileName||(l.value=e.url.split("/")[e.url.split("/").length-1]),{downloadFile:o}}});var c=o(4260),u=o(6819),p=o(7518),_=o.n(p);const b=(0,c.Z)(t,[["render",n]]),q=b;_()(t,"components",{QBtn:u.Z})},7791:(e,l,o)=>{o.d(l,{Z:()=>u});var r=o(3673),n=o(2323);const s={class:"row"},d={class:"bg-grey q-py-lg"};function i(e,l,o,i,a,t){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Number(e.numBlocks),(l=>((0,r.wg)(),(0,r.iD)("div",{key:l,class:(0,n.C_)(`col-md-${Math.floor(12/e.numColumns)} col-sm-6 col-12 q-pa-sm ${e.contentClass}`)},[(0,r.WI)(e.$slots,l,{},(()=>[(0,r._)("div",d,(0,n.zw)(l),1)]))],2)))),128))])])}const a=(0,r.aZ)({props:{numBlocks:{type:Number||String,default:4},numColumns:{type:Number||String,default:4},contentClass:{}},setup(){return{}}});var t=o(4260);const c=(0,t.Z)(a,[["render",i]]),u=c},294:(e,l,o)=>{o.r(l),o.d(l,{default:()=>he});var r=o(3673),n=o(2323);const s=e=>((0,r.dD)("data-v-1b91283d"),e=e(),(0,r.Cn)(),e),d=s((()=>(0,r._)("h3",{class:"q-mx-none"},"Extended Style",-1))),i=s((()=>(0,r._)("div",{class:"q-mb-lg"},[(0,r._)("i",null,"Last update: 2022 Jan 21")],-1))),a=["innerHTML"],t={class:"row items-center q-mb-md"},c=s((()=>(0,r._)("p",{class:"q-pa-ma-none"},"Download q-extended-style.scss",-1))),u=s((()=>(0,r._)("a",{href:"https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/q-extended-style.scss",target:"_blank"},"Open file in new tab",-1))),p=s((()=>(0,r._)("div",{class:"q-ma-lg q-pa-lg bg-green-opacity-low q-border-round-8 q-border-x q-border-md q-border-green"},[(0,r.Uk)(" In case your project is not auto compiling scss. You can use "),(0,r._)("a",{href:"https://beautifytools.com/scss-compiler.php",target:"_blank"},"this online scss compilier"),(0,r.Uk)("to convert it to css. All you need to do is download the .scss file and copy everything to the compilier. All the syntax below will still works in css file. ")],-1))),_=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Borders")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-border-{size variable} "),(0,r.Uk)(" for different thickness of borders. Border thickness ratio is following fibonacci sequence. ")])],-1))),b={class:"q-gutter-xs content-end"},q=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Border Radius")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-border-round-{4, 8, 16 till 60} "),(0,r.Uk)(" for different border radius. Can use together with "),(0,r._)("code",null,"q-border-{size variable}")])],-1))),m={class:"q-gutter-xs"},w=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Border Colors")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-border-{color variable} "),(0,r.Uk)(" for different border colors, include Sentient.io colors and all quasar colors. Can use together with "),(0,r._)("code",null,"q-border-{size variable}")])],-1))),g={class:"q-gutter-xs"},v=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Border Color Opacity")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-border-{color variable}-opacity-{'low', 'medium', 'high'} "),(0,r.Uk)(" for different border color transprancy. Can use together with "),(0,r._)("code",null,"q-border-{size variable}")])],-1))),k={class:"q-gutter-xs bg-amber-alpha-2 q-pa-md"},h=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Background Color Opacity")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-bg-{color variable}-opacity-{'low', 'medium', 'high'} "),(0,r.Uk)(" for different background color transprancy. ")])],-1))),y={class:"q-gutter-xs bg-amber-alpha-2 q-pa-md"},f=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Shadow Color")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-shadow-{size variable}-{color variable} "),(0,r.Uk)(" for different background color transprancy. ")])],-1))),x={class:"q-gutter-md q-pr-sm q-pt-xs q-pb-sm"},U=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Text Color Opacity")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"text-{color variable}-opacity-{'low', 'medium', 'high'} "),(0,r.Uk)(" for different text color color transprancy. ")])],-1))),C={class:"q-gutter-xs q-pr-sm q-pt-xs q-pb-sm"},D=s((()=>(0,r._)("div",{class:"scoped-style-description"},[(0,r._)("p",null,[(0,r._)("b",null,"Dividers")]),(0,r._)("p",null,[(0,r.Uk)(" Use "),(0,r._)("code",null,"q-{horizontal / vertical}-divider "),(0,r.Uk)(" for vertical / horizontal dividers. Use "),(0,r._)("code",null,"q-border-{width variable}"),(0,r.Uk)(" and "),(0,r._)("code",null,"q-border-{color variable}"),(0,r.Uk)(" for differnt divider thickness and color ")])],-1))),z={class:"q-gutter-xs"},$={class:"scoped-style-description"},B=s((()=>(0,r._)("p",null,[(0,r._)("b",null,"Additional border classes")],-1))),H=(0,r.Uk)(" Use "),Z=(0,r.Uk)(" for special border appearance. Must use width "),Y=s((()=>(0,r._)("code",null,"q-border-{width variable}",-1))),L=(0,r.Uk)(" and "),M=s((()=>(0,r._)("code",null,"q-border-{color variable}",-1))),W=(0,r.Uk)(". "),K={class:"row q-gutter-sm"},S=s((()=>(0,r._)("p",null,[(0,r._)("b",null," Below are some additional classes can use together with Quasar components: ")],-1))),T={class:"column q-gutter-lg"},Q=s((()=>(0,r._)("code",null,".no-underline",-1))),N=(0,r.Uk)(" Will remove the underline for "),E=(0,r.Uk)("<router-link>"),F=(0,r.Uk)(" or "),I=s((()=>(0,r._)("a",{href:"#",class:"no-underline"},"<a>",-1))),A=(0,r.Uk)(" element. "),O=s((()=>(0,r._)("b",null,"HTML Example: ",-1))),V=s((()=>(0,r._)("code",null,' <router-link to="#" class="no-underline"> router-link </router-link>',-1))),j=s((()=>(0,r._)("li",null,[(0,r._)("code",null,".underline"),(0,r._)("p",null,[(0,r.Uk)(" Add customised underline to "),(0,r._)("i",{class:"underline"},"specific element"),(0,r.Uk)(". "),(0,r._)("code",null,".underline"),(0,r.Uk)(" is essentially "),(0,r._)("code",null,".q-horizontal-divider"),(0,r.Uk)(" so you can use any border related class to control the "),(0,r._)("b",{class:"underline q-border-red"},"color"),(0,r.Uk)(" ("),(0,r._)("code",null,'class="underline q-border-red"'),(0,r.Uk)(")and the "),(0,r._)("b",{class:"underline q-border-lg"},"thickness"),(0,r.Uk)(" ("),(0,r._)("code",null,'class="underline q-border-lg"'),(0,r.Uk)(") ")]),(0,r._)("b",null,"HTML Example: "),(0,r._)("code",null,' <i class="underline">specific element</i>')],-1))),J=s((()=>(0,r._)("li",null,[(0,r._)("code",null,".q-pa-ma-none"),(0,r._)("p",null,"Will simply remove both padding and margin for an element")],-1))),P=s((()=>(0,r._)("code",null,".q-no-dropdown-arrow",-1))),R=(0,r.Uk)(" For some rare case, you can use this class to remove the dropdown arrow "),G=(0,r.Uk)(" for <q-btn-dropdown> element. "),X=s((()=>(0,r._)("div",{class:"q-mx-md"},[(0,r._)("h3",null,"👻 Boo!"),(0,r._)("p",null,"There is a dropdown arrow!")],-1))),ee=s((()=>(0,r._)("div",{class:"q-mx-md",style:{width:"320px"}},[(0,r._)("h3",null,"👻 Boo!"),(0,r._)("p",null,[(0,r.Uk)(" You can also use "),(0,r._)("code",null,'dropdown-icon=" "'),(0,r.Uk)(" attribute to remove the triangle, but look at the blank space, the container is still there! ")])],-1))),le=s((()=>(0,r._)("div",{class:"q-mx-md",style:{width:"320px"}},[(0,r._)("h3",null,"👻 Boo!"),(0,r._)("p",null," Not only the triangle arrow been removed, the empty space is also gone ")],-1))),oe=s((()=>(0,r._)("br",null,null,-1))),re=s((()=>(0,r._)("b",null,"HTML Example: ",-1))),ne=s((()=>(0,r._)("code",null,' <q-btn-dropdown class="q-no-dropdown-arrow"> Some Content </q-btn-dropdown>',-1))),se=s((()=>(0,r._)("div",{class:"q-mx-md"},[(0,r._)("h3",null,"👻 Boo!"),(0,r._)("p",null," Same class also can be used on <q-expansion-item> to remove the drop down arrow ")],-1))),de=s((()=>(0,r._)("b",null,"HTML Example: ",-1))),ie=s((()=>(0,r._)("code",null,' <q-expansion-item class="q-no-dropdown-arrow"> Some Content </q-expansion-item>',-1))),ae=s((()=>(0,r._)("div",{style:{height:"200px"}},null,-1)));function te(e,l,o,s,te,ce){const ue=(0,r.up)("FileDownloader"),pe=(0,r.up)("Columns"),_e=(0,r.up)("router-link"),be=(0,r.up)("q-icon"),qe=(0,r.up)("q-btn-dropdown"),me=(0,r.up)("q-expansion-item"),we=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(we,{class:"q-pa-lg"},{default:(0,r.w5)((()=>[d,i,(0,r._)("div",{innerHTML:e.description,class:"q-mb-lg"},null,8,a),(0,r._)("div",t,[c,(0,r.Wm)(ue,{class:"q-mx-sm",url:"https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/q-extended-style.scss"}),u,p]),(0,r.Wm)(pe,{"num-blocks":"9","num-columns":"3","content-class":"q-mb-xl q-pb-xl q-horizontal-divider"},{1:(0,r.w5)((()=>[_,(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.sizes,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`q-border-${e} `,"q-pa-xs"])}," q-border-"+(0,n.zw)(e),3)))),128))])])),2:(0,r.w5)((()=>[q,(0,r._)("div",m,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(5,(e=>(0,r._)("div",{key:e,class:(0,n.C_)([`q-border-round-${4*e} q-border-sm `,"q-pa-xs"])}," q-border-round-"+(0,n.zw)(4*e),3))),64))])])),3:(0,r.w5)((()=>[w,(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.colors,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`q-border-${e} q-border-lg`,"q-pa-xs"])}," q-border-"+(0,n.zw)(e),3)))),128))])])),4:(0,r.w5)((()=>[v,(0,r._)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.opacityLevels,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`q-border-sentient-purple-opacity-${e} q-border-lg`,"q-pa-xs"])}," q-border-sentient-purple-alpha-"+(0,n.zw)(e),3)))),128))])])),5:(0,r.w5)((()=>[h,(0,r._)("div",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.opacityLevels,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`bg-sentient-purple-opacity-${e}`,"q-pa-xs"])}," bg-sentient-purple-opacity-"+(0,n.zw)(e),3)))),128))])])),6:(0,r.w5)((()=>[f,(0,r._)("div",x,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.colors,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`shadow-sm-${e}`,"q-pa-xs"])}," shadow-sm-${color} ",2)))),128))])])),7:(0,r.w5)((()=>[U,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.opacityLevels,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,n.C_)([`text-sentient-purple-opacity-${e}`,"bg-grey-4 q-pa-xs"])},(0,n.zw)(`text-sentient-purple-opacity-${e}`),3)))),128))])])),8:(0,r.w5)((()=>[D,(0,r._)("div",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.sizes,((l,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:(0,n.C_)(`q-vertical-divider q-border-${l} q-border-${e.colors[o]}`)},(0,n.zw)(`q-vertical-divider q-border-${l} q-border-${e.colors[o]}`),3)))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.sizes,((l,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:(0,n.C_)(`q-horizontal-divider q-border-${l} q-border-${e.colors[o]}`)},(0,n.zw)(`q-horizontal-divider q-border-${l} q-border-${e.colors[o]}`),3)))),128))])])),9:(0,r.w5)((()=>[(0,r._)("div",$,[B,(0,r._)("p",null,[H,(0,r._)("code",null,"q-border-{ "+(0,n.zw)(e.additionalBorderVar)+" } ",1),Z,Y,L,M,W])]),(0,r._)("div",K,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.additionalBorderVar,((l,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:(0,n.C_)(`bg-grey-2 col-5 q-border-${l} q-border-${e.colors[o]?e.colors[o]:e.colors[o-6]?e.colors[o-6]:e.colors[4]} q-border-md`)},(0,n.zw)(`q-border-${l} q-border-${e.colors[o]?e.colors[o]:e.colors[o-6]?e.colors[o-6]:e.colors[4]} q-border-md`),3)))),128))])])),_:1}),S,(0,r._)("ul",T,[(0,r._)("li",null,[Q,(0,r._)("p",null,[N,(0,r.Wm)(_e,{to:"#",class:"no-underline"},{default:(0,r.w5)((()=>[E])),_:1}),F,I,A]),O,V]),j,J,(0,r._)("li",null,[P,(0,r._)("p",null,[R,(0,r.Wm)(be,{name:"arrow_drop_down"}),G]),(0,r.Wm)(qe,{"no-caps":"",label:"Click Me"},{default:(0,r.w5)((()=>[X])),_:1}),(0,r.Wm)(qe,{"no-caps":"",label:"Click Me","dropdown-icon":" "},{default:(0,r.w5)((()=>[ee])),_:1}),(0,r.Wm)(qe,{"no-caps":"",label:"Click Me",class:"q-no-dropdown-arrow"},{default:(0,r.w5)((()=>[le])),_:1}),oe,re,ne,(0,r.Wm)(me,{class:"q-my-sm q-border-xs q-no-dropdown-arrow",label:"Click Me"},{default:(0,r.w5)((()=>[se])),_:1}),de,ie])]),ae])),_:1})}var ce=o(7791),ue=o(3165);const pe=(0,r.aZ)({name:"",props:{description:{type:String}},components:{Columns:ce.Z,FileDownloader:ue.Z},setup(){const e="some fake data",l=["xs","sm","md","lg","xl"],o=["sentient-beige","sentient-green","sentient-red","sentient-purple","amber","cyan"],r=["T","7","L","J","C","D","U","N","x","y","l","r","t","b"],n=["low","medium","high"];return{sizes:l,colors:o,fakeV:e,additionalBorderVar:r,opacityLevels:n}}});var _e=o(4260),be=o(4379),qe=o(4554),me=o(9316),we=o(2542),ge=o(7518),ve=o.n(ge);const ke=(0,_e.Z)(pe,[["render",te],["__scopeId","data-v-1b91283d"]]),he=ke;ve()(pe,"components",{QPage:be.Z,QIcon:qe.Z,QBtnDropdown:me.Z,QExpansionItem:we.Z})}}]);