import{b as R,g as _,__tla as S}from"./index.5cfbf42e.js";import{p as j,a as E,g as M,v as O,__tla as W}from"./fieldtype.4e969b75.js";import{M as b,r as c,a3 as Z,ak as i,au as z,o as h,U as V,V as r,b as A,$ as d,Z as v,_ as k,u as e,W as I,E as K,n as P}from"./vue.86fe07f1.js";let x,G=Promise.all([(()=>{try{return S}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let y,g;y={class:"dialog-footer"},g=b({name:"systemFieldTypeDialog"}),x=b({...g,emits:["refresh"],setup(H,{expose:w,emit:N}){const{t:u}=R(),n=c(),m=c(!1),s=c(!1),l=Z({id:"",columnType:"",attrType:"",packageName:"",createTime:""}),U=c({columnType:[{required:!0,message:"\u5B57\u6BB5\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:(t,a,p)=>{O(t,a,p,l.id!=="")}}],attrType:[{required:!0,message:"\u5C5E\u6027\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),$=t=>{m.value=!0,P(()=>{var a;(a=n.value)==null||a.resetFields()}),t?(l.id=t,D(t)):l.id=""},B=async()=>{if(!await n.value.validate().catch(()=>{}))return!1;try{s.value=!0,l.id?await j(l):await E(l),_().success(u(l.id?"common.editSuccessText":"common.addSuccessText")),m.value=!1,N("refresh")}catch(t){_().error(t.msg)}finally{s.value=!1}},D=t=>{M(t).then(a=>{Object.assign(l,a.data)})};return w({openDialog:$}),(t,a)=>{const p=i("el-input"),f=i("el-form-item"),F=i("el-form"),T=i("el-button"),q=i("el-dialog"),C=z("loading");return h(),V(q,{title:e(l).id?t.$t("common.editBtn"):t.$t("common.addBtn"),modelValue:e(m),"onUpdate:modelValue":a[4]||(a[4]=o=>K(m)?m.value=o:null),width:"600","close-on-click-modal":!1,draggable:""},{footer:r(()=>[A("span",y,[d(T,{onClick:a[3]||(a[3]=o=>m.value=!1)},{default:r(()=>[v(k(t.$t("common.cancelButtonText")),1)]),_:1}),d(T,{type:"primary",onClick:B,disabled:e(s)},{default:r(()=>[v(k(t.$t("common.confirmButtonText")),1)]),_:1},8,["disabled"])])]),default:r(()=>[I((h(),V(F,{ref_key:"dataFormRef",ref:n,model:e(l),rules:e(U),formDialogRef:"","label-width":"90px"},{default:r(()=>[d(f,{label:e(u)("fieldtype.columnType"),prop:"columnType"},{default:r(()=>[d(p,{modelValue:e(l).columnType,"onUpdate:modelValue":a[0]||(a[0]=o=>e(l).columnType=o),placeholder:e(u)("fieldtype.inputcolumnTypeTip")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(f,{label:e(u)("fieldtype.attrType"),prop:"attrType"},{default:r(()=>[d(p,{modelValue:e(l).attrType,"onUpdate:modelValue":a[1]||(a[1]=o=>e(l).attrType=o),placeholder:e(u)("fieldtype.inputattrTypeTip")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(f,{label:e(u)("fieldtype.packageName"),prop:"packageName"},{default:r(()=>[d(p,{modelValue:e(l).packageName,"onUpdate:modelValue":a[2]||(a[2]=o=>e(l).packageName=o),placeholder:e(u)("fieldtype.inputpackageNameTip")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[C,e(s)]])]),_:1},8,["title","modelValue"])}}})});export{G as __tla,x as default};