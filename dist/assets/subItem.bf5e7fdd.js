import{M as d,l as g,ak as l,o as n,a as e,ac as C,F as u,U as k,V as m,$ as t,b as _,_ as r,u as c,a8 as S,Z as w}from"./vue.86fe07f1.js";import{o as s,__tla as F}from"./index.5cfbf42e.js";let y,V=Promise.all([(()=>{try{return F}catch{}})()]).then(async()=>{let o,p;o=["onClick"],p=d({name:"navMenuSubItem"}),y=d({...p,props:{chil:{type:Array,default:()=>[]}},setup(f){const I=f,x=g(()=>I.chil),M=h=>{s.handleOpenLink(h)};return(h,A)=>{const i=l("SvgIcon"),b=l("sub-item",!0),v=l("el-sub-menu"),L=l("el-menu-item");return n(!0),e(u,null,C(x.value,a=>(n(),e(u,null,[a.children&&a.children.length>0?(n(),k(v,{index:a.path,key:a.path},{title:m(()=>[t(i,{name:a.meta.icon},null,8,["name"]),_("span",null,r(c(s).setMenuI18n(a)),1)]),default:m(()=>[t(b,{chil:a.children},null,8,["chil"])]),_:2},1032,["index"])):(n(),k(L,{index:a.path,key:a.path},{default:m(()=>[!a.meta.isLink||a.meta.isLink&&a.meta.isIframe?(n(),e(u,{key:0},[t(i,{name:a.meta.icon},null,8,["name"]),_("span",null,r(c(s).setMenuI18n(a)),1)],64)):(n(),e("a",{key:1,class:"w100",onClick:S(B=>M(a),["prevent"])},[t(i,{name:a.meta.icon},null,8,["name"]),w(" "+r(c(s).setMenuI18n(a)),1)],8,o))]),_:2},1032,["index"]))],64))),256)}}})});export{V as __tla,y as default};
