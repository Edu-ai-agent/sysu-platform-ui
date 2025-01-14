import{b as z,r as B,g as w,d as D,__tla as I}from"./index.5cfbf42e.js";import{v as M,d as N,r as O,__tla as W}from"./user.22b8f69e.js";import{M as v,r as m,a3 as V,ak as s,au as Z,o as y,U as x,V as l,$ as a,u as t,Z as F,_ as p,W as j,b as K,aC as G}from"./vue.86fe07f1.js";let k,H=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let _;_=v({name:"register"}),k=v({..._,emits:["afterSuccess"],setup(J,{emit:P}){const U=G(()=>D(()=>import("./index.75d86b72.js").then(async e=>(await e.__tla,e)),["assets/index.75d86b72.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css","assets/index.9cc43542.css"])),{t:$}=z(),g=m(),c=m(!1),f=m("0"),o=V({isShowPassword:!1,ruleForm:{username:"",password:"",phone:"",checked:""}}),S=V({username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:5,max:20,message:"\u7528\u6237\u540D\u79F0\u957F\u5EA6\u5FC5\u987B\u4ECB\u4E8E 5 \u548C 20 \u4E4B\u95F4",trigger:"blur"},{validator:(e,r,u)=>{M(e,r,u,!1)},trigger:"blur"}],phone:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:B.validatePhone,trigger:"blur"},{validator:(e,r,u)=>{N(e,r,u,!1)},trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:20,message:"\u7528\u6237\u5BC6\u7801\u957F\u5EA6\u5FC5\u987B\u4ECB\u4E8E 6 \u548C 20 \u4E4B\u95F4",trigger:"blur"},{validator:(e,r,u)=>{Number(f.value)<2?u("\u5BC6\u7801\u5F3A\u5EA6\u592A\u4F4E"):u()},trigger:"blur"}],checked:[{required:!0,message:"\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u6761\u6B3E",trigger:"blur"}]}),q=e=>{f.value=e},L=async()=>{if(!await g.value.validate().catch(()=>{}))return!1;try{c.value=!0,await O(o.ruleForm),w().success($("common.optSuccessText")),P("afterSuccess")}catch(e){w().error(e.msg)}finally{c.value=!1}};return(e,r)=>{const u=s("ele-User"),d=s("el-icon"),h=s("el-input"),i=s("el-form-item"),T=s("ele-Unlock"),A=s("ele-Position"),C=s("el-checkbox"),b=s("el-button"),E=s("el-form"),R=Z("waves");return y(),x(E,{size:"large",class:"login-content-form",rules:t(S),ref_key:"dataFormRef",ref:g,model:t(o).ruleForm},{default:l(()=>[a(i,{class:"login-animation1",prop:"username"},{default:l(()=>[a(h,{text:"",placeholder:e.$t("password.accountPlaceholder1"),modelValue:t(o).ruleForm.username,"onUpdate:modelValue":r[0]||(r[0]=n=>t(o).ruleForm.username=n),clearable:"",autocomplete:"off"},{prefix:l(()=>[a(d,{class:"el-input__icon"},{default:l(()=>[a(u)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),a(i,{class:"login-animation2",prop:"password"},{default:l(()=>[a(t(U),{placeholder:e.$t("password.accountPlaceholder2"),modelValue:t(o).ruleForm.password,"onUpdate:modelValue":r[1]||(r[1]=n=>t(o).ruleForm.password=n),autocomplete:"off",maxLength:20,minLength:6,onScore:q},{prefix:l(()=>[a(d,{class:"el-input__icon"},{default:l(()=>[a(T)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),a(i,{class:"login-animation3",prop:"phone"},{default:l(()=>[a(h,{text:"",placeholder:e.$t("password.phonePlaceholder4"),modelValue:t(o).ruleForm.phone,"onUpdate:modelValue":r[2]||(r[2]=n=>t(o).ruleForm.phone=n),clearable:"",autocomplete:"off"},{prefix:l(()=>[a(d,{class:"el-input__icon"},{default:l(()=>[a(A)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),a(i,null,{default:l(()=>[a(C,{modelValue:t(o).ruleForm.checked,"onUpdate:modelValue":r[3]||(r[3]=n=>t(o).ruleForm.checked=n)},{default:l(()=>[F(p(e.$t("password.readAccept")),1)]),_:1},8,["modelValue"]),a(b,{link:"",type:"primary"},{default:l(()=>[F(p(e.$t("password.privacyPolicy")),1)]),_:1})]),_:1}),a(i,{class:"login-animation4"},{default:l(()=>[j((y(),x(b,{type:"primary",class:"login-content-submit",onClick:L,loading:t(c)},{default:l(()=>[K("span",null,p(e.$t("password.registerBtnText")),1)]),_:1},8,["loading"])),[[R]])]),_:1})]),_:1},8,["rules","model"])}}})});export{H as __tla,k as default};
