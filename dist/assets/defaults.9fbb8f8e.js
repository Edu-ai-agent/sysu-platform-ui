import{d as r,u as v,N as D,__tla as M}from"./index.5cfbf42e.js";import{M as i,aC as s,r as p,aD as A,az as L,k as P,i as y,ak as d,o as S,U as V,V as o,$ as t,u as _,n as C}from"./vue.86fe07f1.js";let R,I=Promise.all([(()=>{try{return M}catch{}})()]).then(async()=>{let n;n=i({name:"layoutDefaults"}),R=i({...n,setup(O){const h=s(()=>r(()=>import("./aside.7da0689f.js").then(async a=>(await a.__tla,a)),["assets/aside.7da0689f.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),m=s(()=>r(()=>import("./header.18208dd6.js").then(async a=>(await a.__tla,a)),["assets/header.18208dd6.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),w=s(()=>r(()=>import("./main.36ac9582.js").then(async a=>(await a.__tla,a)),["assets/main.36ac9582.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),e=p(""),l=p(),E=A(),T=v(),{themeConfig:b}=L(T),u=()=>{e.value.update(),l.value.layoutMainScrollbarRef.update()},c=()=>{C(()=>{setTimeout(()=>{u(),e.value.wrapRef.scrollTop=0,l.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return P(()=>{c(),D.done(600)}),y(()=>E.path,()=>{c()}),y(b,()=>{u()},{deep:!0}),(a,g)=>{const k=d("el-scrollbar"),f=d("el-container");return S(),V(f,{class:"layout-container"},{default:o(()=>[t(_(h)),t(f,{class:"layout-container-view h100"},{default:o(()=>[t(k,{ref_key:"layoutScrollbarRef",ref:e,class:"layout-backtop"},{default:o(()=>[t(_(m)),t(_(w),{ref_key:"layoutMainRef",ref:l},null,512)]),_:1},512)]),_:1})]),_:1})}}})});export{I as __tla,R as default};
