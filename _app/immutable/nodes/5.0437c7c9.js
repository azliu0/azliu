import{_ as l}from"../chunks/preload-helper.a4192956.js";import{H as p}from"../chunks/control.f5b05b5f.js";import{s as f,n as c}from"../chunks/scheduler.bf1121f8.js";import{S as g,i as v,g as y,m,h as E,j as h,n as u,f as d,a as P,x as _,o as w}from"../chunks/index.38db1e43.js";const O=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function b(e,t){return new p(e,t)}new TextEncoder;async function x({params:e}){try{const t=await O(Object.assign({"../../../logs/diffusion.md":()=>l(()=>import("../chunks/diffusion.c81234d0.js"),["../chunks/diffusion.c81234d0.js","../chunks/scheduler.bf1121f8.js","../chunks/index.38db1e43.js"],import.meta.url),"../../../logs/hello-world.md":()=>l(()=>import("../chunks/hello-world.d53b4577.js"),["../chunks/hello-world.d53b4577.js","../chunks/scheduler.bf1121f8.js","../chunks/index.38db1e43.js"],import.meta.url),"../../../logs/nac-sphere.md":()=>l(()=>import("../chunks/nac-sphere.d74c8176.js"),["../chunks/nac-sphere.d74c8176.js","../chunks/scheduler.bf1121f8.js","../chunks/index.38db1e43.js"],import.meta.url)}),`../../../logs/${e.slug}.md`);return{content:t.default,meta:t.metadata}}catch{throw b(404,"Post not found")}}const k=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));function S(e){let t,r,o=JSON.stringify(e[0],null,2)+"",n,s;return{c(){t=y("pre"),r=m("  "),n=m(o),s=m(`
`)},l(i){t=E(i,"PRE",{});var a=h(t);r=u(a,"  "),n=u(a,o),s=u(a,`
`),a.forEach(d)},m(i,a){P(i,t,a),_(t,r),_(t,n),_(t,s)},p(i,[a]){a&1&&o!==(o=JSON.stringify(i[0],null,2)+"")&&w(n,o)},i:c,o:c,d(i){i&&d(t)}}}function T(e,t,r){let{data:o}=t;return e.$$set=n=>{"data"in n&&r(0,o=n.data)},[o]}class q extends g{constructor(t){super(),v(this,t,T,S,f,{data:0})}}export{q as component,k as universal};
