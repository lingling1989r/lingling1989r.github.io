import{_ as B,r as i,a as _,o as c,b as s,d as l,w as a,F as I,i as N,f as o,k as m,e as $,t as p,u as E,l as F}from"./index-BruAy4jv.js";const G={class:"gallery-container"},L={class:"image-info"},j={class:"bottom"},D={class:"time"},S={__name:"Gallery",setup(U){const f=i([{url:"https://placekitten.com/600/400",title:"写真作品 1",date:"2023-05-15"},{url:"https://placekitten.com/601/400",title:"写真作品 2",date:"2023-05-16"},{url:"https://placekitten.com/600/401",title:"写真作品 3",date:"2023-05-17"},{url:"https://placekitten.com/602/402",title:"写真作品 4",date:"2023-05-18"},{url:"https://placekitten.com/603/403",title:"写真作品 5",date:"2023-05-19"},{url:"https://placekitten.com/604/404",title:"写真作品 6",date:"2023-05-20"}]),d=i(!1),r=i(null),k=n=>{r.value=n,d.value=!0},g=n=>{const e=document.createElement("a");e.href=n.url,e.download=`${n.title}.jpg`,document.body.appendChild(e),e.click(),document.body.removeChild(e)};return(n,e)=>{const u=o("el-image"),v=o("el-icon"),h=o("el-button"),y=o("el-card"),w=o("el-col"),b=o("el-row"),C=o("el-dialog");return c(),_("div",G,[e[1]||(e[1]=s("h1",null,"作品展示",-1)),l(b,{gutter:20},{default:a(()=>[(c(!0),_(I,null,N(f.value,(t,x)=>(c(),m(w,{key:x,xs:24,sm:12,md:8,lg:6,xl:6},{default:a(()=>[l(y,{"body-style":{padding:"0px"},class:"image-card"},{default:a(()=>[l(u,{src:t.url,fit:"cover",class:"gallery-image",onClick:V=>k(t)},null,8,["src","onClick"]),s("div",L,[s("span",null,p(t.title),1),s("div",j,[s("time",D,p(t.date),1),l(h,{text:"",class:"button",onClick:V=>g(t)},{default:a(()=>[l(v,null,{default:a(()=>[l(E(F))]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(C,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=t=>d.value=t),width:"70%"},{default:a(()=>[r.value?(c(),m(u,{key:0,src:r.value.url,fit:"contain",style:{width:"100%"}},null,8,["src"])):$("",!0)]),_:1},8,["modelValue"])])}}},z=B(S,[["__scopeId","data-v-c77a144a"]]);export{z as default};
