import{b as le,p as O,k as ae,t as te,g as P,d as oe,__tla as ne}from"./index.5cfbf42e.js";import{M as U,r as v,a3 as se,ak as s,au as I,o as r,a as re,b as C,W as y,a0 as de,u as n,$ as a,V as l,ad as ie,Z as d,_ as f,U as i,E as ue,Y as x,aC as me}from"./vue.86fe07f1.js";import{u as ce,__tla as pe}from"./table.e019e948.js";let Q,ye=Promise.all([(()=>{try{return ne}catch{}})(),(()=>{try{return pe}catch{}})()]).then(async()=>{let T,S,q,B,D;T={class:"layout-padding"},S={class:"layout-padding-auto layout-padding-view"},q={class:"mb8",style:{width:"100%"}},B={style:{"margin-left":"12px"}},D=U({name:"systemMenu"}),Q=U({...D,setup(fe){const W=me(()=>oe(()=>import("./form.d2bafe3a.js").then(async e=>(await e.__tla,e)),["assets/form.d2bafe3a.js","assets/index.5cfbf42e.js","assets/vue.86fe07f1.js","assets/index.192907a2.css"])),{t:R}=le(),N=v(),k=v(),w=v(!0),$=v(!1),m=se({pageList:O,queryForm:{menuName:""},isPage:!1}),{getDataList:_,tableStyle:V}=ce(m),E=(e,o)=>{k.value.openDialog(e,o)},Y=(e,o)=>{k.value.openDialog(e,o)},F=e=>(e.children||[]).length>0,Z=async()=>{$.value=!$.value;const e=await O();L(e.data,$.value)},L=(e,o=!0)=>{var b;for(const c in e)(b=N.value)==null||b.toggleRowExpansion(e[c],o),e[c].children&&L(e[c].children,o)},j=async e=>{try{await ae().confirm(R("common.delConfirmText"))}catch{return}try{await te(e.id),_(),P().success(R("common.delSuccessText"))}catch(o){P().error(o.msg)}};return(e,o)=>{var A;const b=s("el-input"),c=s("el-form-item"),p=s("el-button"),z=s("el-form"),M=s("el-row"),G=s("right-toolbar"),u=s("el-table-column"),H=s("SvgIcon"),h=s("el-tag"),J=s("el-tooltip"),X=s("el-table"),g=I("auth"),ee=I("loading");return r(),re("div",T,[C("div",S,[y(a(M,{shadow:"hover",class:"ml10"},{default:l(()=>[a(z,{inline:!0,model:n(m).queryForm,onKeyup:ie(n(_),["enter"]),ref:"queryRef"},{default:l(()=>[a(c,{label:e.$t("sysmenu.name"),prop:"menuName"},{default:l(()=>[a(b,{placeholder:e.$t("sysmenu.inputNameTip"),clearable:"",style:{"max-width":"180px"},modelValue:n(m).queryForm.menuName,"onUpdate:modelValue":o[0]||(o[0]=t=>n(m).queryForm.menuName=t)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),a(c,null,{default:l(()=>[a(p,{onClick:n(_),class:"ml10",icon:"search",type:"primary"},{default:l(()=>[d(f(e.$t("common.queryBtn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","onKeyup"])]),_:1},512),[[de,n(w)]]),a(M,null,{default:l(()=>[C("div",q,[y((r(),i(p,{onClick:E,class:"ml10",icon:"folder-add",type:"primary"},{default:l(()=>[d(f(e.$t("common.addBtn")),1)]),_:1})),[[g,"sys_menu_add"]]),a(p,{onClick:Z},{default:l(()=>[d(f(e.$t("common.expandBtn")),1)]),_:1}),a(G,{showSearch:n(w),"onUpdate:showSearch":o[1]||(o[1]=t=>ue(w)?w.value=t:null),class:"ml10",style:{float:"right","margin-right":"20px"},onQueryTable:n(_)},null,8,["showSearch","onQueryTable"])])]),_:1}),y((r(),i(X,{ref_key:"tableRef",ref:N,data:n(m).dataList,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"path",style:{width:"100%"},border:"","cell-style":n(V).cellStyle,"header-cell-style":(A=n(V))==null?void 0:A.headerCellStyle},{default:l(()=>[a(u,{label:e.$t("sysmenu.name"),fixed:"",prop:"name","show-overflow-tooltip":""},null,8,["label"]),a(u,{label:e.$t("sysmenu.sortOrder"),prop:"sortOrder","show-overflow-tooltip":""},null,8,["label"]),a(u,{label:e.$t("sysmenu.icon"),prop:"icon","show-overflow-tooltip":""},{default:l(t=>[a(H,{name:t.row.meta.icon},null,8,["name"])]),_:1},8,["label"]),a(u,{label:e.$t("sysmenu.path"),prop:"path","show-overflow-tooltip":""},null,8,["label"]),a(u,{label:e.$t("sysmenu.menuType"),"show-overflow-tooltip":""},{default:l(t=>[t.row.menuType==="0"?(r(),i(h,{key:0},{default:l(()=>[d("\u5DE6\u83DC\u5355")]),_:1})):x("",!0),t.row.menuType==="2"?(r(),i(h,{key:1},{default:l(()=>[d("\u9876\u83DC\u5355")]),_:1})):x("",!0),t.row.menuType==="1"?(r(),i(h,{key:2,type:"success"},{default:l(()=>[d("\u6309\u94AE")]),_:1})):x("",!0)]),_:1},8,["label"]),a(u,{label:e.$t("sysmenu.keepAlive"),"show-overflow-tooltip":""},{default:l(t=>[t.row.meta.isKeepAlive?(r(),i(h,{key:0},{default:l(()=>[d("\u5F00\u542F")]),_:1})):(r(),i(h,{key:1,type:"info"},{default:l(()=>[d("\u5173\u95ED")]),_:1}))]),_:1},8,["label"]),a(u,{label:e.$t("sysmenu.permission"),"show-overflow-tooltip":!0,prop:"permission"},null,8,["label"]),a(u,{label:e.$t("common.action"),"show-overflow-tooltip":"",width:"250"},{default:l(t=>[y((r(),i(p,{icon:"folder-add",onClick:K=>E("add",t.row),text:"",type:"primary"},{default:l(()=>[d(f(e.$t("common.addBtn")),1)]),_:2},1032,["onClick"])),[[g,"sys_menu_add"]]),y((r(),i(p,{icon:"edit-pen",onClick:K=>Y("edit",t.row),text:"",type:"primary"},{default:l(()=>[d(f(e.$t("common.editBtn")),1)]),_:2},1032,["onClick"])),[[g,"sys_menu_edit"]]),a(J,{icon:"delete",content:e.$t("sysmenu.deleteDisabledTip"),disabled:!F(t.row),placement:"top"},{default:l(()=>[C("span",B,[y((r(),i(p,{icon:"delete",disabled:F(t.row),onClick:K=>j(t.row),text:"",type:"primary"},{default:l(()=>[d(f(e.$t("common.delBtn")),1)]),_:2},1032,["disabled","onClick"])),[[g,"sys_menu_del"]])])]),_:2},1032,["content","disabled"])]),_:1},8,["label"])]),_:1},8,["data","cell-style","header-cell-style"])),[[ee,n(m).loading]])]),a(n(W),{onRefresh:o[2]||(o[2]=t=>n(_)()),ref_key:"menuDialogRef",ref:k},null,512)])}}})});export{ye as __tla,Q as default};
