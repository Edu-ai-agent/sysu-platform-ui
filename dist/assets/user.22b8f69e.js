import{s as r,__tla as E}from"./index.5cfbf42e.js";let d,o,m,i,l,p,h,c,f,g,w,_,y=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{h=e=>r({url:"/admin/user/page",method:"get",params:e}),m=e=>r({url:"/admin/user",method:"post",data:e}),c=e=>r({url:"/admin/user/details/"+e,method:"get"}),f=e=>r({url:"/admin/user",method:"delete",data:e}),o=e=>r({url:"/admin/user",method:"put",data:e});function s(e){return r({url:"/admin/user/details",method:"get",params:e})}p=function(e){return r({url:"/admin/user/edit",method:"put",data:e})},g=function(e){return r({url:"/admin/user/password",method:"put",data:e})},d=function(e){return r({url:"/admin/user/unbinding",method:"post",params:{type:e}})},i=function(e){return r({url:"/admin/user/check",method:"post",params:{password:e}})},w=e=>r({url:"/admin/register/user",method:"post",data:e}),_=function(e,t,a,n){if(new RegExp(/^([a-z\d]+?)$/).test(t)||a(new Error("\u7528\u6237\u540D\u652F\u6301\u5C0F\u5199\u82F1\u6587\u3001\u6570\u5B57")),n)return a();s({username:t}).then(u=>{u.data!==null?a(new Error("\u7528\u6237\u540D\u5DF2\u7ECF\u5B58\u5728")):a()})},l=function(e,t,a,n){if(n)return a();s({phone:t}).then(u=>{u.data!==null?a(new Error("\u624B\u673A\u53F7\u5DF2\u7ECF\u5B58\u5728")):a()})}});export{d as U,y as __tla,o as a,m as b,i as c,l as d,p as e,h as f,c as g,f as h,g as p,w as r,_ as v};
