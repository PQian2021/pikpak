var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))me.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))_e.call(t,o)&&H(e,o,t[o]);return e};import{d as N,u as fe,r as h,o as G,a as K,b as v,c as Y,w as c,e as i,f as n,N as ge,g as he,h as ve,z as ke,i as Ee,j as ye,k as q,l as Fe,m as we,n as Ae,p as Ce,q as xe,s as E,t as De,v as Ie,x as Ne,y,A as P,B as Pe,C as be,D,E as f,F as Z,G as Le,H as $e,I as b,L as Se,J as X,K as Be,M as Oe,O as Te,P as Ve,Q as Re,R as je,S as Me,T as ze,U as Q,V as Je,W as Ue,X as He,Y as We,Z as ee,_ as Ge,$ as Ke,a0 as Ye,a1 as qe,a2 as Ze,a3 as Xe}from"./vendor.64da71ad.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Qe();const et=N({setup(e){return window.$message=fe(),(t,o)=>null}}),tt=["https://pikpak.pqian.workers.dev"],ot=N({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,a)=>{const s=K("router-view");return v(),Y(n(ye),{locale:n(ke),"date-locale":n(Ee),"theme-overrides":t.value},{default:c(()=>[i(n(ve),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(he),null,{default:c(()=>[i(et),i(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",te={},at="/pikpak/",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${at}${a}`,a in te)return;te[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":st,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((C,_)=>{u.addEventListener("load",C),u.addEventListener("error",_)})})).then(()=>t())};var nt="/pikpak/assets/logo1.08eb9157.png";const m=q.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let w=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!w?(console.log("wait",o.url),w=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,m(o))).catch(()=>(I.push("/login"),!1))):r.username&&r.password&&w?new Promise((u,C)=>{const _=setInterval(()=>{w||(clearInterval(_),u(m(o)))},100)}):(I.push("/login"),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const oe=q.create({});oe.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const Dt=oe,se=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const it=f("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[f("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),f("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},ut=y("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5\uFFE5119\u8D2D\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),dt=y(" 2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5 \u30101\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A119\u5143\uFF01\u539F\u4EF7450\u5143\u3011 2022\u5E741\u67081\u65E5\u8D77\uFF1A 1\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A169\u5143\uFF01\u539F\u4EF7450\u5143\u3011 -\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),pt={class:"bottom-user-info"},mt={key:0,src:nt,class:"user-info-avatar"},_t={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ft={class:"user-info-name"},gt={key:0},ht={class:"action"},vt=y(" \u9000\u51FA\u767B\u5F55 "),kt=f("p",null,[f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),Et=y("\u6DFB\u52A0"),yt=N({setup(e){const t=h(!1),o=l=>()=>Q(b,null,{default:()=>Q(l)}),a=Fe(),s=we(),r=h([{label:"\u6587\u4EF6",key:"list",icon:o(Ge)},{label:"\u89C6\u9891",key:"video",icon:o(Je)},{label:"\u56FE\u7247",key:"image",icon:o(Ue)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(He)},{label:"\u9080\u8BF7",key:"invited",icon:o(We)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(ee)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(ee)}]),u=h(),C=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},_=h(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{_.value=l.data}).catch(l=>{console.log(l)})},k=h(),ae=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var d;k.value=(d=l.data)==null?void 0:d.data})},ne=(l,d)=>{console.log(d),a.push("/"+d.key)};G(()=>{C(),L(),ae()});const x=h(),F=h(!1),ie=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:x.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},$=h(!1),re=l=>{$.value=l<800,t.value||(t.value=l<800)};Ae(s,()=>{$.value&&(t.value=!0)});const ue=Ce(),le=()=>{ue.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,d)=>{const ce=K("router-view"),de=xe("resize");return v(),E(ze,null,[De(i(n(X),{"has-sider":"",onResize:re},{default:c(()=>[i(n(Ie),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=g=>t.value=!0),onExpand:d[2]||(d[2]=g=>t.value=!1),bordered:""},{default:c(()=>{var g,S,B,O,T,V,R,j,M,z,J;return[it,i(n(Ne),{options:r.value,value:String(n(s).name),"onUpdate:value":ne},null,8,["options","value"]),t.value?D("",!0):(v(),E("div",rt,[y(P(n(se)((g=_.value)==null?void 0:g.quota.usage))+" / "+P(n(se)((S=_.value)==null?void 0:S.quota.limit))+" ",1),i(n(Pe),{type:"primary",onClick:d[0]||(d[0]=At=>F.value=!0)},{default:c(()=>[ut]),_:1}),((B=_.value)==null?void 0:B.quota)?(v(),Y(n(be),{key:0,type:"line",percentage:Number((((O=_.value)==null?void 0:O.quota.usage)/((T=_.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):D("",!0),f("p",lt,[i(n(Z),{width:600,placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[dt]),_:1})])])),t.value?D("",!0):(v(),E("div",{key:1,class:Le(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[f("div",pt,[((j=k.value)==null?void 0:j.status)==="ok"?(v(),E("img",mt)):(v(),E("img",_t)),f("div",ft,[y(P((M=u.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),E("div",gt,[i(n($e),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):D("",!0)]),f("div",ht,[i(n(Z),null,{trigger:c(()=>[i(n(b),{onClick:le},{default:c(()=>[i(n(Se))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n(Be),{style:{height:"100vh"}},{default:c(()=>[i(n(Oe),{style:{"max-height":"100vh"}},{default:c(()=>[i(ce)]),_:1})]),_:1})]),_:1})]),_:1},512),[[de]]),i(n(Me),{show:F.value,"onUpdate:show":d[5]||(d[5]=g=>F.value=g)},{default:c(()=>[i(n(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(b),{onClick:d[3]||(d[3]=g=>F.value=!1)},{default:c(()=>[i(n(Ve))]),_:1})]),action:c(()=>[i(n(Re),{block:!0,type:"primary",disabled:!x.value,onClick:ie},{default:c(()=>[Et]),_:1},8,["disabled"])]),default:c(()=>[i(n(je),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":d[4]||(d[4]=g=>x.value=g)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),Ft=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.93ffdd9a.js"),["assets/list.93ffdd9a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.93ffdd9a.js"),["assets/list.93ffdd9a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.93ffdd9a.js"),["assets/list.93ffdd9a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.7e9966a4.js"),["assets/trash.7e9966a4.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.be022813.js"),["assets/setting.be022813.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.5fa33f86.js"),["assets/invited.5fa33f86.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])},{path:"share",name:"share",component:()=>p(()=>import("./share.6bc95afc.js"),["assets/share.6bc95afc.js","assets/share.4f9c11c6.css","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>p(()=>import("./test.b93f8177.js"),["assets/test.b93f8177.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.7c14f63d.js"),["assets/shareInfo.7c14f63d.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.cb11c7ff.js"),["assets/login.cb11c7ff.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.55aa19a2.js"),["assets/sms.55aa19a2.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.3b47b7d5.js"),["assets/register.3b47b7d5.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>p(()=>import("./testtest.60fd0102.js"),["assets/testtest.60fd0102.js","assets/vendor.64da71ad.js"])}],wt=Ke({history:Ye(),routes:Ft});var I=wt;const A=qe(ot);A.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(I);A.use(Xe,{router:I,siteIdList:[1280510106]});A.mount("#app");export{se as b,m as i,Dt as n,tt as p};
