import{d as s,u as d,__tla as T}from"./index.5cfbf42e.js";import{M as n,aC as o,r as k,az as E,aD as M,k as b,i as _,ak as v,o as w,U as x,V as C,$ as u,u as c,n as D}from"./vue.86fe07f1.js";let i,L=Promise.all([(()=>{try{return T}catch{}})()]).then(async()=>{let e;e=n({name:"layoutTransverse"}),i=n({...e,setup(P){const f=o(()=>s(()=>import("./header.18208dd6.js").then(async a=>(await a.__tla,a)),["assets/header.18208dd6.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),p=o(()=>s(()=>import("./main.36ac9582.js").then(async a=>(await a.__tla,a)),["assets/main.36ac9582.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),t=k(),y=d(),{themeConfig:m}=E(y),h=M(),r=()=>{t.value.layoutMainScrollbarRef.update()},l=()=>{D(()=>{setTimeout(()=>{r(),t.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return b(()=>{l()}),_(()=>h.path,()=>{l()}),_(m,()=>{r()},{deep:!0}),(a,V)=>{const R=v("el-container");return w(),x(R,{class:"layout-container flex-center layout-backtop"},{default:C(()=>[u(c(f)),u(c(p),{ref_key:"layoutMainRef",ref:t},null,512)]),_:1})}}})});export{L as __tla,i as default};