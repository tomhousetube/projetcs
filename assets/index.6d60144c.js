import{d as i,r as h,o as d,c as p,a as t,t as _,F as f,p as g,b as v,e as l,f as m,g as y}from"./vendor.2acfe60d.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};b();var V="/project/assets/logo.03d6d6da.png";var k=(r,n)=>{for(const[a,s]of n)r[a]=s;return r};const c=r=>(g("data-v-8203a322"),r=r(),v(),r),S=c(()=>t("p",null,[l(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),x=c(()=>t("p",null,[l("See "),t("code",null,"README.md"),l(" for more information.")],-1)),E=c(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),I=c(()=>t("p",null,[l(" Edit "),t("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),N=i({props:{msg:null},setup(r){const n=h(0);return(a,s)=>(d(),p(f,null,[t("h1",null,_(r.msg),1),S,x,E,t("button",{type:"button",onClick:s[0]||(s[0]=e=>n.value++)},"count is: "+_(n.value),1),I],64))}});var j=k(N,[["__scopeId","data-v-8203a322"]]);const D={};const L=t("img",{alt:"Vue logo",src:V},null,-1),A=i({setup(r){return(n,a)=>(d(),p(f,null,[L,m(j,{msg:"Hello Vuex 3 + TypeScript + Vite"}),m(D)],64))}});y(A).mount("#app");
