import{s as e,__tla as g}from"./index.5cfbf42e.js";let r,a,l,u,o,d,i,c=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{l=function(t){return e({url:"/gen/fieldtype/page",method:"get",params:t})},o=function(t){return e({url:"/gen/fieldtype/list",method:"get",params:t})},r=function(t){return e({url:"/gen/fieldtype",method:"post",data:t})},u=function(t){return e({url:"/gen/fieldtype/details/"+t,method:"get"})};function s(t){return e({url:"/gen/fieldtype/details",method:"get",params:t})}a=function(t){return e({url:"/gen/fieldtype",method:"delete",data:t})},d=function(t){return e({url:"/gen/fieldtype",method:"put",data:t})},i=function(t,f,n,p){if(p)return n();s({columnType:f}).then(m=>{m.data!==null?n(new Error("\u7C7B\u578B\u5DF2\u7ECF\u5B58\u5728")):n()})}});export{c as __tla,r as a,a as d,l as f,u as g,o as l,d as p,i as v};
