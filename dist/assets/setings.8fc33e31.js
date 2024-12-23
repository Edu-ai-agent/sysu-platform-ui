import{E as M,b as Ma,u as Sa,L as f,e as S,o as Ua,a as _a,_ as za,__tla as ka}from"./index.5cfbf42e.js";import{M as j,az as Da,a3 as Aa,l as Ea,k as Ga,n as La,I as Fa,ak as x,o as Ha,a as Pa,$ as u,V as v,Z as w,_ as o,b as l,Q as h,P as $,aF as Ra,aG as qa}from"./vue.86fe07f1.js";import{c as Oa,__tla as Wa}from"./commonFunction.b7b69811.js";let J,Na=Promise.all([(()=>{try{return ka}catch{}})(),(()=>{try{return Wa}catch{}})()]).then(async()=>{function I(){return{hexToRgb:i=>{let m="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(i))return M.warning("\u8F93\u5165\u9519\u8BEF\u7684hex"),"";i=i.replace("#",""),m=i.match(/../g);for(let r=0;r<3;r++)m[r]=parseInt(m[r],16);return m},rgbToHex:(i,m,r)=>{let d=/^\d{1,3}$/;if(!d.test(i)||!d.test(m)||!d.test(r))return M.warning("\u8F93\u5165\u9519\u8BEF\u7684rgb\u989C\u8272\u503C"),"";let b=[i.toString(16),m.toString(16),r.toString(16)];for(let B=0;B<3;B++)b[B].length==1&&(b[B]=`0${b[B]}`);return`#${b.join("")}`},getDarkColor:(i,m)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(i))return M.warning("\u8F93\u5165\u9519\u8BEF\u7684hex\u989C\u8272\u503C"),"";let r=I().hexToRgb(i);for(let d=0;d<3;d++)r[d]=Math.floor(r[d]*(1-m));return I().rgbToHex(r[0],r[1],r[2])},getLightColor:(i,m)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(i))return M.warning("\u8F93\u5165\u9519\u8BEF\u7684hex\u989C\u8272\u503C"),"";let r=I().hexToRgb(i);for(let d=0;d<3;d++)r[d]=Math.floor((255-r[d])*m+r[d]);return I().rgbToHex(r[0],r[1],r[2])}}}const H=i=>{const m="1.23452384164.123412416";document.getElementById(m)!==null&&document.body.removeChild(document.getElementById(m));const r=document.createElement("canvas");r.width=200,r.height=130;const d=r.getContext("2d");d.rotate(-20*Math.PI/180),d.font="12px Vedana",d.fillStyle="rgba(200, 200, 200, 0.30)",d.textBaseline="middle",d.fillText(i,r.width/10,r.height/2);const b=document.createElement("div");return b.id=m,b.style.pointerEvents="none",b.style.top="0px",b.style.left="0px",b.style.position="fixed",b.style.zIndex="10000000",b.style.width=`${document.documentElement.clientWidth}px`,b.style.height=`${document.documentElement.clientHeight}px`,b.style.background=`url(${r.toDataURL("image/png")}) left top repeat`,document.body.appendChild(b),m},P={set:i=>{let m=H(i);document.getElementById(m)===null&&(m=H(i))},del:()=>{let i="1.23452384164.123412416";document.getElementById(i)!==null&&document.body.removeChild(document.getElementById(i))}},V=i=>(Ra("data-v-9ad22c59"),i=i(),qa(),i),Q={class:"layout-breadcrumb-seting"},Z={class:"layout-breadcrumb-seting-bar-flex"},K=V(()=>l("div",{class:"layout-breadcrumb-seting-bar-flex-label"},"primary",-1)),X={class:"layout-breadcrumb-seting-bar-flex-value"},Y={class:"layout-breadcrumb-seting-bar-flex mt15"},ee={class:"layout-breadcrumb-seting-bar-flex-label"},le={class:"layout-breadcrumb-seting-bar-flex-value"},ae={class:"layout-breadcrumb-seting-bar-flex mt15"},te={class:"layout-breadcrumb-seting-bar-flex-label"},se={class:"layout-breadcrumb-seting-bar-flex-value"},ue={class:"layout-breadcrumb-seting-bar-flex"},oe={class:"layout-breadcrumb-seting-bar-flex-label"},re={class:"layout-breadcrumb-seting-bar-flex-value"},ie={class:"layout-breadcrumb-seting-bar-flex"},ne={class:"layout-breadcrumb-seting-bar-flex-label"},de={class:"layout-breadcrumb-seting-bar-flex-value"},ce={class:"layout-breadcrumb-seting-bar-flex mt10"},me={class:"layout-breadcrumb-seting-bar-flex-label"},be={class:"layout-breadcrumb-seting-bar-flex-value"},ve={class:"layout-breadcrumb-seting-bar-flex"},ye={class:"layout-breadcrumb-seting-bar-flex-label"},ge={class:"layout-breadcrumb-seting-bar-flex-value"},fe={class:"layout-breadcrumb-seting-bar-flex"},pe={class:"layout-breadcrumb-seting-bar-flex-label"},xe={class:"layout-breadcrumb-seting-bar-flex-value"},he={class:"layout-breadcrumb-seting-bar-flex"},Ce={class:"layout-breadcrumb-seting-bar-flex-label"},Ve={class:"layout-breadcrumb-seting-bar-flex-value"},we={class:"layout-breadcrumb-seting-bar-flex mt14"},$e={class:"layout-breadcrumb-seting-bar-flex-label"},Be={class:"layout-breadcrumb-seting-bar-flex-value"},Ie={class:"layout-breadcrumb-seting-bar-flex-label"},Te={class:"layout-breadcrumb-seting-bar-flex-value"},Me={class:"layout-breadcrumb-seting-bar-flex-label"},Se={class:"layout-breadcrumb-seting-bar-flex-value"},Ue={class:"layout-breadcrumb-seting-bar-flex-label"},_e={class:"layout-breadcrumb-seting-bar-flex-value"},ze={class:"layout-breadcrumb-seting-bar-flex-label"},ke={class:"layout-breadcrumb-seting-bar-flex-value"},De={class:"layout-breadcrumb-seting-bar-flex-label"},Ae={class:"layout-breadcrumb-seting-bar-flex-value"},Ee={class:"layout-breadcrumb-seting-bar-flex-label"},Ge={class:"layout-breadcrumb-seting-bar-flex-value"},Le={class:"layout-breadcrumb-seting-bar-flex mt15"},Fe={class:"layout-breadcrumb-seting-bar-flex-label"},He={class:"layout-breadcrumb-seting-bar-flex-value"},Pe={class:"layout-breadcrumb-seting-bar-flex-label"},Re={class:"layout-breadcrumb-seting-bar-flex-value"},qe={class:"layout-breadcrumb-seting-bar-flex mt15"},Oe={class:"layout-breadcrumb-seting-bar-flex-label"},We={class:"layout-breadcrumb-seting-bar-flex-value"},Ne={class:"layout-breadcrumb-seting-bar-flex mt15"},je={class:"layout-breadcrumb-seting-bar-flex-label"},Je={class:"layout-breadcrumb-seting-bar-flex-value"},Qe={class:"layout-breadcrumb-seting-bar-flex-label"},Ze={class:"layout-breadcrumb-seting-bar-flex-value"},Ke={class:"layout-breadcrumb-seting-bar-flex mt15"},Xe={class:"layout-breadcrumb-seting-bar-flex-label"},Ye={class:"layout-breadcrumb-seting-bar-flex-value"},el={class:"layout-breadcrumb-seting-bar-flex mt15"},ll={class:"layout-breadcrumb-seting-bar-flex-label"},al={class:"layout-breadcrumb-seting-bar-flex-value"},tl={class:"layout-breadcrumb-seting-bar-flex mt15"},sl={class:"layout-breadcrumb-seting-bar-flex-label"},ul={class:"layout-breadcrumb-seting-bar-flex-value"},ol={class:"layout-breadcrumb-seting-bar-flex mt15"},rl={class:"layout-breadcrumb-seting-bar-flex-label"},il={class:"layout-breadcrumb-seting-bar-flex-value"},nl={class:"layout-breadcrumb-seting-bar-flex-label"},dl={class:"layout-breadcrumb-seting-bar-flex-value"},cl={class:"layout-breadcrumb-seting-bar-flex mt15"},ml={class:"layout-breadcrumb-seting-bar-flex-label"},bl={class:"layout-breadcrumb-seting-bar-flex-value"},vl={class:"layout-breadcrumb-seting-bar-flex mt15"},yl={class:"layout-breadcrumb-seting-bar-flex-label"},gl={class:"layout-breadcrumb-seting-bar-flex-value"},fl={class:"layout-breadcrumb-seting-bar-flex mt15"},pl={class:"layout-breadcrumb-seting-bar-flex-label"},xl={class:"layout-breadcrumb-seting-bar-flex-value"},hl={class:"layout-breadcrumb-seting-bar-flex mt15"},Cl={class:"layout-breadcrumb-seting-bar-flex-label"},Vl={class:"layout-breadcrumb-seting-bar-flex-value"},wl={class:"layout-breadcrumb-seting-bar-flex mt15"},$l={class:"layout-breadcrumb-seting-bar-flex-label"},Bl={class:"layout-breadcrumb-seting-bar-flex-value"},Il={class:"layout-breadcrumb-seting-bar-flex mt15"},Tl={class:"layout-breadcrumb-seting-bar-flex-label"},Ml={class:"layout-breadcrumb-seting-bar-flex-value"},Sl={class:"layout-breadcrumb-seting-bar-flex mt15"},Ul={class:"layout-breadcrumb-seting-bar-flex-label"},_l={class:"layout-breadcrumb-seting-bar-flex-value"},zl={class:"layout-breadcrumb-seting-bar-flex-label"},kl={class:"layout-breadcrumb-seting-bar-flex-value"},Dl={class:"layout-breadcrumb-seting-bar-flex-label"},Al={class:"layout-breadcrumb-seting-bar-flex-value"},El={class:"layout-drawer-content-flex"},Gl=V(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),Ll=V(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),Fl=[Gl,Ll],Hl={class:"layout-tips-box"},Pl={class:"layout-tips-txt"},Rl=V(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),ql=V(()=>l("section",{class:"el-container"},[l("aside",{class:"el-aside",style:{width:"20px"}}),l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),Ol=[Rl,ql],Wl={class:"layout-tips-box"},Nl={class:"layout-tips-txt"},jl=V(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),Jl=V(()=>l("section",{class:"el-container"},[l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),Ql=[jl,Jl],Zl={class:"layout-tips-box"},Kl={class:"layout-tips-txt"},Xl=V(()=>l("aside",{class:"el-aside-dark",style:{width:"10px"}},null,-1)),Yl=V(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),ea=V(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),la=[Xl,Yl,ea],aa={class:"layout-tips-box"},ta={class:"layout-tips-txt"},sa={class:"copy-config"},ua=j({name:"layoutBreadcrumbSeting"}),oa=j({...ua,setup(i,{expose:m}){const{locale:r}=Ma(),d=Sa(),{themeConfig:b}=Da(d),{copyText:B}=Oa(),{getLightColor:z,getDarkColor:ra}=I(),k=Aa({isMobile:!1}),e=Ea(()=>b.value),R=()=>{if(!e.value.primary)return M.warning("\u5168\u5C40\u4E3B\u9898 primary \u989C\u8272\u503C\u4E0D\u80FD\u4E3A\u7A7A");document.documentElement.style.setProperty("--el-color-primary-dark-2",`${ra(e.value.primary,.1)}`),document.documentElement.style.setProperty("--el-color-primary",e.value.primary);for(let t=1;t<=9;t++)document.documentElement.style.setProperty(`--el-color-primary-light-${t}`,`${z(e.value.primary,t/10)}`);F()},y=t=>{document.documentElement.style.setProperty(`--next-bg-${t}`,b.value[t]),t==="menuBar"&&document.documentElement.style.setProperty("--next-bg-menuBar-light-1",z(e.value.menuBar,.05)),D(),A(),E(),F()},D=()=>{G(".layout-navbars-breadcrumb-index",e.value.isTopBarColorGradual,e.value.topBar)},A=()=>{G(".layout-container .el-aside",e.value.isMenuBarColorGradual,e.value.menuBar)},E=()=>{G(".layout-container .layout-columns-aside",e.value.isColumnsMenuBarColorGradual,e.value.columnsMenuBar)},G=(t,a,C)=>{setTimeout(()=>{let p=document.querySelector(t);if(!p)return!1;document.documentElement.style.setProperty("--el-menu-bg-color",document.documentElement.style.getPropertyValue("--next-bg-menuBar")),a?p.setAttribute("style",`background:linear-gradient(to bottom left , ${C}, ${z(C,.6)}) !important;`):p.setAttribute("style",""),n()},200)},ia=()=>{n()},na=()=>{F()},da=()=>{e.value.isFixedHeaderChange=!e.value.isFixedHeader,n()},ca=()=>{e.value.isBreadcrumb=!1,n(),S.emit("getBreadcrumbIndexSetFilterRoutes")},ma=()=>{e.value.isShowLogoChange=!e.value.isShowLogo,n()},ba=()=>{e.value.layout==="classic"&&(e.value.isClassicSplitMenu=!1),n()},va=()=>{S.emit("openOrCloseSortable"),n()},ya=()=>{S.emit("openShareTagsView"),n()},U=t=>{t==="grayscale"?e.value.isGrayscale&&(e.value.isInvert=!1):e.value.isInvert&&(e.value.isGrayscale=!1);const a=t==="grayscale"?`grayscale(${e.value.isGrayscale?1:0})`:`invert(${e.value.isInvert?"80%":"0%"})`;document.body.setAttribute("style",`filter: ${a}`),n()},q=()=>{const t=document.documentElement;e.value.isIsDark?t.setAttribute("data-theme","dark"):t.setAttribute("data-theme","")},O=()=>{var a;const t=((a=_a().userInfos.user)==null?void 0:a.username)||e.value.globalTitle;e.value.isWartermark?P.set(t):P.del(),n()},_=t=>{if(f.set("oldLayout",t),e.value.layout===t)return!1;t==="transverse"&&(e.value.isCollapse=!1),e.value.layout=t,e.value.isDrawer=!1,L()},L=()=>{y("menuBar"),y("menuBarColor"),y("menuBarActiveColor"),y("topBar"),y("topBarColor"),y("columnsMenuBar"),y("columnsMenuBarColor")},ga=()=>{e.value.isFixedHeaderChange=!1,e.value.isShowLogoChange=!1,e.value.isDrawer=!1,n()},fa=()=>{e.value.isDrawer=!0},F=()=>{n(),pa()},n=()=>{f.remove("themeConfig"),f.set("themeConfig",e.value)},pa=()=>{f.set("themeConfigStyle",document.documentElement.style.cssText)},xa=()=>{let t=f.get("themeConfig");t.isDrawer=!1,B(JSON.stringify(t)).then(()=>{e.value.isDrawer=!1})},ha=()=>{f.clear(),window.location.reload(),f.set("version","3.7.1")},Ca=t=>{f.remove("themeConfig"),b.value.globalComponentSize=t,f.set("themeConfig",b.value),e.value.isDrawer=!1,window.location.reload()},Va=()=>{D(),A(),E()};return Ga(()=>{La(()=>{f.get("frequency")||L(),f.set("frequency",1),S.on("layoutMobileResize",t=>{e.value.layout=t.layout,e.value.isDrawer=!1,L(),k.isMobile=Ua.isMobile()}),setTimeout(()=>{R(),e.value.isGrayscale&&U("grayscale"),e.value.isInvert&&U("invert"),e.value.isIsDark&&q(),O(),f.get("themeConfig")&&(r.value=f.get("themeConfig").globalI18n),Va()},100)})}),Fa(()=>{S.off("layoutMobileResize",()=>{})}),m({openDrawer:fa}),(t,a)=>{const C=x("el-divider"),p=x("el-color-picker"),c=x("el-switch"),g=x("el-option"),T=x("el-select"),wa=x("el-alert"),$a=x("ele-CopyDocument"),W=x("el-icon"),N=x("el-button"),Ba=x("ele-RefreshRight"),Ia=x("el-scrollbar"),Ta=x("el-drawer");return Ha(),Pa("div",Q,[u(Ta,{title:t.$t("layout.configTitle"),modelValue:e.value.isDrawer,"onUpdate:modelValue":a[48]||(a[48]=s=>e.value.isDrawer=s),direction:"rtl","destroy-on-close":"",size:"260px",onClose:ga},{default:v(()=>[u(Ia,{class:"layout-breadcrumb-seting-bar"},{default:v(()=>[u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.oneTitle")),1)]),_:1}),l("div",Z,[K,l("div",X,[u(p,{modelValue:e.value.primary,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.primary=s),onChange:R},null,8,["modelValue"])])]),l("div",Y,[l("div",ee,o(t.$t("layout.fourIsDark")),1),l("div",le,[u(c,{modelValue:e.value.isIsDark,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.isIsDark=s),size:"small",onChange:q},null,8,["modelValue"])])]),l("div",ae,[l("div",te,o(t.$t("user.title0")),1),l("div",se,[u(T,{modelValue:e.value.globalComponentSize,"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.globalComponentSize=s),placeholder:"\u8BF7\u9009\u62E9",style:{width:"90px"},onChange:Ca},{default:v(()=>[u(g,{label:t.$t("user.dropdownLarge"),value:"large"},null,8,["label"]),u(g,{label:t.$t("user.dropdownDefault"),value:"default"},null,8,["label"]),u(g,{label:t.$t("user.dropdownSmall"),value:"small"},null,8,["label"])]),_:1},8,["modelValue"])])]),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.twoTopTitle")),1)]),_:1}),l("div",ue,[l("div",oe,o(t.$t("layout.twoTopBar")),1),l("div",re,[u(p,{modelValue:e.value.topBar,"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.topBar=s),onChange:a[4]||(a[4]=s=>y("topBar"))},null,8,["modelValue"])])]),l("div",ie,[l("div",ne,o(t.$t("layout.twoTopBarColor")),1),l("div",de,[u(p,{modelValue:e.value.topBarColor,"onUpdate:modelValue":a[5]||(a[5]=s=>e.value.topBarColor=s),onChange:a[6]||(a[6]=s=>y("topBarColor"))},null,8,["modelValue"])])]),l("div",ce,[l("div",me,o(t.$t("layout.twoIsTopBarColorGradual")),1),l("div",be,[u(c,{modelValue:e.value.isTopBarColorGradual,"onUpdate:modelValue":a[7]||(a[7]=s=>e.value.isTopBarColorGradual=s),size:"small",onChange:D},null,8,["modelValue"])])]),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.twoMenuTitle")),1)]),_:1}),l("div",ve,[l("div",ye,o(t.$t("layout.twoMenuBar")),1),l("div",ge,[u(p,{modelValue:e.value.menuBar,"onUpdate:modelValue":a[8]||(a[8]=s=>e.value.menuBar=s),onChange:a[9]||(a[9]=s=>y("menuBar"))},null,8,["modelValue"])])]),l("div",fe,[l("div",pe,o(t.$t("layout.twoMenuBarColor")),1),l("div",xe,[u(p,{modelValue:e.value.menuBarColor,"onUpdate:modelValue":a[10]||(a[10]=s=>e.value.menuBarColor=s),onChange:a[11]||(a[11]=s=>y("menuBarColor"))},null,8,["modelValue"])])]),l("div",he,[l("div",Ce,o(t.$t("layout.twoMenuBarActiveColor")),1),l("div",Ve,[u(p,{modelValue:e.value.menuBarActiveColor,"onUpdate:modelValue":a[12]||(a[12]=s=>e.value.menuBarActiveColor=s),"show-alpha":"",onChange:a[13]||(a[13]=s=>y("menuBarActiveColor"))},null,8,["modelValue"])])]),l("div",we,[l("div",$e,o(t.$t("layout.twoIsMenuBarColorGradual")),1),l("div",Be,[u(c,{modelValue:e.value.isMenuBarColorGradual,"onUpdate:modelValue":a[14]||(a[14]=s=>e.value.isMenuBarColorGradual=s),size:"small",onChange:A},null,8,["modelValue"])])]),u(C,{"content-position":"left",style:h({opacity:e.value.layout!=="columns"?.5:1})},{default:v(()=>[w(o(t.$t("layout.twoColumnsTitle")),1)]),_:1},8,["style"]),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",Ie,o(t.$t("layout.twoColumnsMenuBar")),1),l("div",Te,[u(p,{modelValue:e.value.columnsMenuBar,"onUpdate:modelValue":a[15]||(a[15]=s=>e.value.columnsMenuBar=s),onChange:a[16]||(a[16]=s=>y("columnsMenuBar")),disabled:e.value.layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",Me,o(t.$t("layout.twoColumnsMenuBarColor")),1),l("div",Se,[u(p,{modelValue:e.value.columnsMenuBarColor,"onUpdate:modelValue":a[17]||(a[17]=s=>e.value.columnsMenuBarColor=s),onChange:a[18]||(a[18]=s=>y("columnsMenuBarColor")),disabled:e.value.layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",Ue,o(t.$t("layout.twoIsColumnsMenuBarColorGradual")),1),l("div",_e,[u(c,{modelValue:e.value.isColumnsMenuBarColorGradual,"onUpdate:modelValue":a[19]||(a[19]=s=>e.value.isColumnsMenuBarColorGradual=s),size:"small",onChange:E,disabled:e.value.layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",ze,o(t.$t("layout.twoIsColumnsMenuHoverPreload")),1),l("div",ke,[u(c,{modelValue:e.value.isColumnsMenuHoverPreload,"onUpdate:modelValue":a[20]||(a[20]=s=>e.value.isColumnsMenuHoverPreload=s),size:"small",onChange:ia,disabled:e.value.layout!=="columns"},null,8,["modelValue","disabled"])])],4),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.threeTitle")),1)]),_:1}),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:h({opacity:e.value.layout==="transverse"?.5:1})},[l("div",De,o(t.$t("layout.threeIsCollapse")),1),l("div",Ae,[u(c,{modelValue:e.value.isCollapse,"onUpdate:modelValue":a[21]||(a[21]=s=>e.value.isCollapse=s),disabled:e.value.layout==="transverse",size:"small",onChange:na},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:h({opacity:e.value.layout==="transverse"?.5:1})},[l("div",Ee,o(t.$t("layout.threeIsUniqueOpened")),1),l("div",Ge,[u(c,{modelValue:e.value.isUniqueOpened,"onUpdate:modelValue":a[22]||(a[22]=s=>e.value.isUniqueOpened=s),disabled:e.value.layout==="transverse",size:"small",onChange:n},null,8,["modelValue","disabled"])])],4),l("div",Le,[l("div",Fe,o(t.$t("layout.threeIsFixedHeader")),1),l("div",He,[u(c,{modelValue:e.value.isFixedHeader,"onUpdate:modelValue":a[23]||(a[23]=s=>e.value.isFixedHeader=s),size:"small",onChange:da},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:h({opacity:e.value.layout!=="classic"?.5:1})},[l("div",Pe,o(t.$t("layout.threeIsClassicSplitMenu")),1),l("div",Re,[u(c,{modelValue:e.value.isClassicSplitMenu,"onUpdate:modelValue":a[24]||(a[24]=s=>e.value.isClassicSplitMenu=s),disabled:e.value.layout!=="classic",size:"small",onChange:ca},null,8,["modelValue","disabled"])])],4),l("div",qe,[l("div",Oe,o(t.$t("layout.threeIsLockScreen")),1),l("div",We,[u(c,{modelValue:e.value.isLockScreen,"onUpdate:modelValue":a[25]||(a[25]=s=>e.value.isLockScreen=s),size:"small",onChange:n},null,8,["modelValue"])])]),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.fourTitle")),1)]),_:1}),l("div",Ne,[l("div",je,o(t.$t("layout.fourIsShowLogo")),1),l("div",Je,[u(c,{modelValue:e.value.isShowLogo,"onUpdate:modelValue":a[26]||(a[26]=s=>e.value.isShowLogo=s),size:"small",onChange:ma},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:h({opacity:e.value.layout==="classic"||e.value.layout==="transverse"?.5:1})},[l("div",Qe,o(t.$t("layout.fourIsBreadcrumb")),1),l("div",Ze,[u(c,{modelValue:e.value.isBreadcrumb,"onUpdate:modelValue":a[27]||(a[27]=s=>e.value.isBreadcrumb=s),disabled:e.value.layout==="classic"||e.value.layout==="transverse",size:"small",onChange:ba},null,8,["modelValue","disabled"])])],4),l("div",Ke,[l("div",Xe,o(t.$t("layout.fourIsBreadcrumbIcon")),1),l("div",Ye,[u(c,{modelValue:e.value.isBreadcrumbIcon,"onUpdate:modelValue":a[28]||(a[28]=s=>e.value.isBreadcrumbIcon=s),size:"small",onChange:n},null,8,["modelValue"])])]),l("div",el,[l("div",ll,o(t.$t("layout.fourIsTagsview")),1),l("div",al,[u(c,{modelValue:e.value.isTagsview,"onUpdate:modelValue":a[29]||(a[29]=s=>e.value.isTagsview=s),size:"small",onChange:n},null,8,["modelValue"])])]),l("div",tl,[l("div",sl,o(t.$t("layout.fourIsTagsviewIcon")),1),l("div",ul,[u(c,{modelValue:e.value.isTagsviewIcon,"onUpdate:modelValue":a[30]||(a[30]=s=>e.value.isTagsviewIcon=s),size:"small",onChange:n},null,8,["modelValue"])])]),l("div",ol,[l("div",rl,o(t.$t("layout.fourIsCacheTagsView")),1),l("div",il,[u(c,{modelValue:e.value.isCacheTagsView,"onUpdate:modelValue":a[31]||(a[31]=s=>e.value.isCacheTagsView=s),size:"small",onChange:n},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:h({opacity:k.isMobile?.5:1})},[l("div",nl,o(t.$t("layout.fourIsSortableTagsView")),1),l("div",dl,[u(c,{modelValue:e.value.isSortableTagsView,"onUpdate:modelValue":a[32]||(a[32]=s=>e.value.isSortableTagsView=s),disabled:!!k.isMobile,size:"small",onChange:va},null,8,["modelValue","disabled"])])],4),l("div",cl,[l("div",ml,o(t.$t("layout.fourIsShareTagsView")),1),l("div",bl,[u(c,{modelValue:e.value.isShareTagsView,"onUpdate:modelValue":a[33]||(a[33]=s=>e.value.isShareTagsView=s),size:"small",onChange:ya},null,8,["modelValue"])])]),l("div",vl,[l("div",yl,o(t.$t("layout.fourIsFooter")),1),l("div",gl,[u(c,{modelValue:e.value.isFooter,"onUpdate:modelValue":a[34]||(a[34]=s=>e.value.isFooter=s),size:"small",onChange:n},null,8,["modelValue"])])]),l("div",fl,[l("div",pl,o(t.$t("layout.fourIsGrayscale")),1),l("div",xl,[u(c,{modelValue:e.value.isGrayscale,"onUpdate:modelValue":a[35]||(a[35]=s=>e.value.isGrayscale=s),size:"small",onChange:a[36]||(a[36]=s=>U("grayscale"))},null,8,["modelValue"])])]),l("div",hl,[l("div",Cl,o(t.$t("layout.fourIsInvert")),1),l("div",Vl,[u(c,{modelValue:e.value.isInvert,"onUpdate:modelValue":a[37]||(a[37]=s=>e.value.isInvert=s),size:"small",onChange:a[38]||(a[38]=s=>U("invert"))},null,8,["modelValue"])])]),l("div",wl,[l("div",$l,o(t.$t("layout.fourIsWartermark")),1),l("div",Bl,[u(c,{modelValue:e.value.isWartermark,"onUpdate:modelValue":a[39]||(a[39]=s=>e.value.isWartermark=s),size:"small",onChange:O},null,8,["modelValue"])])]),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.fiveTitle")),1)]),_:1}),l("div",Il,[l("div",Tl,o(t.$t("layout.fiveTagsStyle")),1),l("div",Ml,[u(T,{modelValue:e.value.tagsStyle,"onUpdate:modelValue":a[40]||(a[40]=s=>e.value.tagsStyle=s),placeholder:"\u8BF7\u9009\u62E9",style:{width:"90px"},onChange:n},{default:v(()=>[u(g,{label:"\u98CE\u683C1",value:"tags-style-one"}),u(g,{label:"\u98CE\u683C4",value:"tags-style-four"}),u(g,{label:"\u98CE\u683C5",value:"tags-style-five"})]),_:1},8,["modelValue"])])]),l("div",Sl,[l("div",Ul,o(t.$t("layout.fiveAnimation")),1),l("div",_l,[u(T,{modelValue:e.value.animation,"onUpdate:modelValue":a[41]||(a[41]=s=>e.value.animation=s),placeholder:"\u8BF7\u9009\u62E9",style:{width:"90px"},onChange:n},{default:v(()=>[u(g,{label:"slide-right",value:"slide-right"}),u(g,{label:"slide-left",value:"slide-left"}),u(g,{label:"opacitys",value:"opacitys"})]),_:1},8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",zl,o(t.$t("layout.fiveColumnsAsideStyle")),1),l("div",kl,[u(T,{modelValue:e.value.columnsAsideStyle,"onUpdate:modelValue":a[42]||(a[42]=s=>e.value.columnsAsideStyle=s),placeholder:"\u8BF7\u9009\u62E9",style:{width:"90px"},disabled:e.value.layout!=="columns",onChange:n},{default:v(()=>[u(g,{label:"\u5706\u89D2",value:"columns-round"}),u(g,{label:"\u5361\u7247",value:"columns-card"})]),_:1},8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15 mb27",style:h({opacity:e.value.layout!=="columns"?.5:1})},[l("div",Dl,o(t.$t("layout.fiveColumnsAsideLayout")),1),l("div",Al,[u(T,{modelValue:e.value.columnsAsideLayout,"onUpdate:modelValue":a[43]||(a[43]=s=>e.value.columnsAsideLayout=s),placeholder:"\u8BF7\u9009\u62E9",style:{width:"90px"},disabled:e.value.layout!=="columns",onChange:n},{default:v(()=>[u(g,{label:"\u6C34\u5E73",value:"columns-horizontal"}),u(g,{label:"\u5782\u76F4",value:"columns-vertical"})]),_:1},8,["modelValue","disabled"])])],4),u(C,{"content-position":"left"},{default:v(()=>[w(o(t.$t("layout.sixTitle")),1)]),_:1}),l("div",El,[l("div",{class:"layout-drawer-content-item",onClick:a[44]||(a[44]=s=>_("defaults"))},[l("section",{class:$(["el-container el-circular",{"drawer-layout-active":e.value.layout==="defaults"}])},Fl,2),l("div",{class:$(["layout-tips-warp",{"layout-tips-warp-active":e.value.layout==="defaults"}])},[l("div",Hl,[l("p",Pl,o(t.$t("layout.sixDefaults")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[45]||(a[45]=s=>_("classic"))},[l("section",{class:$(["el-container is-vertical el-circular",{"drawer-layout-active":e.value.layout==="classic"}])},Ol,2),l("div",{class:$(["layout-tips-warp",{"layout-tips-warp-active":e.value.layout==="classic"}])},[l("div",Wl,[l("p",Nl,o(t.$t("layout.sixClassic")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[46]||(a[46]=s=>_("transverse"))},[l("section",{class:$(["el-container is-vertical el-circular",{"drawer-layout-active":e.value.layout==="transverse"}])},Ql,2),l("div",{class:$(["layout-tips-warp",{"layout-tips-warp-active":e.value.layout==="transverse"}])},[l("div",Zl,[l("p",Kl,o(t.$t("layout.sixTransverse")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[47]||(a[47]=s=>_("columns"))},[l("section",{class:$(["el-container el-circular",{"drawer-layout-active":e.value.layout==="columns"}])},la,2),l("div",{class:$(["layout-tips-warp",{"layout-tips-warp-active":e.value.layout==="columns"}])},[l("div",aa,[l("p",ta,o(t.$t("layout.sixColumns")),1)])],2)])]),l("div",sa,[u(wa,{title:t.$t("layout.tipText"),type:"warning",closable:!1},null,8,["title"]),u(N,{class:"copy-config-btn",type:"primary",ref:"copyConfigBtnRef",onClick:xa},{default:v(()=>[u(W,{class:"mr5"},{default:v(()=>[u($a)]),_:1}),w(" "+o(t.$t("layout.copyText")),1)]),_:1},512),u(N,{class:"copy-config-btn-reset",type:"info",onClick:ha},{default:v(()=>[u(W,{class:"mr5"},{default:v(()=>[u(Ba)]),_:1}),w(" "+o(t.$t("layout.resetText")),1)]),_:1})])]),_:1})]),_:1},8,["title","modelValue"])])}}});J=za(oa,[["__scopeId","data-v-9ad22c59"]])});export{Na as __tla,J as default};
