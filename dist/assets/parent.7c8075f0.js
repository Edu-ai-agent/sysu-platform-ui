import{j as O,u as U,e as c,S as j,d as x,__tla as z}from"./index.5cfbf42e.js";import{M as d,aD as H,aH as M,az as _,a3 as S,l as k,K as W,n as A,k as X,I as Y,i as $,ak as b,o as f,a as q,$ as r,V as o,a1 as h,u as e,U as y,W as p,a0 as w,X as L,Y as g,aI as B,aC as J}from"./vue.86fe07f1.js";let I,F=Promise.all([(()=>{try{return z}catch{}})()]).then(async()=>{let R,v;R={class:"layout-parent"},v=d({name:"layoutParentView"}),I=d({...v,setup(G){const N=J(()=>x(()=>import("./iframes.a19cacae.js"),["assets/iframes.a19cacae.js","assets/vue.86fe07f1.js"])),t=H(),P=M(),T=O(),C=U(),{keepAliveNames:u,cachedViews:E}=_(T),{themeConfig:K}=_(C),a=S({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),l=k(()=>K.value.animation),n=k(()=>t.meta.isIframe),D=async()=>{P.getRoutes().forEach(s=>{s.meta.isIframe&&(s.meta.isIframeOpen=!1,s.meta.loading=!0,a.iframeList.push({...s}))})};return W(()=>{a.keepAliveNameList=u.value,c.on("onTagsViewRefreshRouterView",s=>{a.keepAliveNameList=u.value.filter(i=>t.name!==i),a.refreshRouterViewKey="",a.iframeRefreshKey="",A(()=>{a.refreshRouterViewKey=s,a.iframeRefreshKey=s,a.keepAliveNameList=u.value})})}),X(()=>{D(),A(()=>{setTimeout(()=>{if(K.value.isCacheTagsView){let s=j.get("tagsViewList")||[];E.value=s.filter(i=>{var m;return(m=i.meta)==null?void 0:m.isKeepAlive}).map(i=>i.name)}},0)})}),Y(()=>{c.off("onTagsViewRefreshRouterView",()=>{})}),$(()=>t.fullPath,()=>{a.refreshRouterViewKey=decodeURI(t.fullPath)},{immediate:!0}),(s,i)=>{const m=b("router-view");return f(),q("div",R,[r(m,null,{default:o(({Component:V})=>[r(h,{name:e(l),mode:"out-in"},{default:o(()=>[(f(),y(B,null,[e(t).meta.isKeepAlive?p((f(),y(L(V),{key:e(a).refreshRouterViewKey,class:"w100"})),[[w,!e(n)]]):g("",!0)],1024))]),_:2},1032,["name"]),r(h,{name:e(l),mode:"out-in"},{default:o(()=>[e(t).meta.isKeepAlive?g("",!0):p((f(),y(L(V),{key:e(a).refreshRouterViewKey,class:"w100"})),[[w,!e(n)]])]),_:2},1032,["name"])]),_:1}),r(h,{name:e(l),mode:"out-in"},{default:o(()=>[p(r(e(N),{class:"w100",refreshKey:e(a).iframeRefreshKey,name:e(l),list:e(a).iframeList},null,8,["refreshKey","name","list"]),[[w,e(n)]])]),_:1},8,["name"])])}}})});export{F as __tla,I as default};