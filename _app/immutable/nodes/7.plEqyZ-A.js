import{s as ie,n as L}from"../chunks/scheduler.GJ_Rr4Ix.js";import{S as le,i as se,e as v,t as T,s as E,c as k,h as w,g as ne,k as V,f as P,d,a as u,b as x,l as b,n as N,j as G,o as R,p as q,q as re,r as H,u as oe,v as ce,w as he,x as fe,y as pe}from"../chunks/index.WyERFreg.js";import{e as S}from"../chunks/each.6w4Ej4nR.js";function U(o,e,i){const t=o.slice();return t[1]=e[i],t[3]=i,t}function W(o,e,i){const t=o.slice();return t[4]=e[i],t}function X(o){let e,i=o[4]+"",t;return{c(){e=v("span"),t=T(i),this.h()},l(c){e=k(c,"SPAN",{class:!0});var f=w(e);t=V(f,i),f.forEach(d),this.h()},h(){u(e,"class","text-xs text-slate-700 border-[1px] border-slate-200 [border-radius:3px] p-[3px] bg-slate-200")},m(c,f){x(c,e,f),b(e,t)},p(c,f){f&1&&i!==(i=c[4]+"")&&N(t,i)},d(c){c&&d(e)}}}function Y(o){let e,i="·";return{c(){e=v("span"),e.textContent=i,this.h()},l(t){e=k(t,"SPAN",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-uq9nb8"&&(e.textContent=i),this.h()},h(){u(e,"class","text-sm mx-[-4px] text-green-500")},m(t,c){x(t,e,c)},d(t){t&&d(e)}}}function ee(o){let e,i=o[1].title+"",t,c,f,s,p=o[3]<o[0].links.length-1&&Y();return{c(){e=v("a"),t=T(i),f=E(),p&&p.c(),s=R(),this.h()},l(a){e=k(a,"A",{href:!0,target:!0,class:!0});var n=w(e);t=V(n,i),n.forEach(d),f=P(a),p&&p.l(a),s=R(),this.h()},h(){u(e,"href",c=o[1].href),u(e,"target","_blank"),u(e,"class","text-sm text-green-500 hover:text-green-700")},m(a,n){x(a,e,n),b(e,t),x(a,f,n),p&&p.m(a,n),x(a,s,n)},p(a,n){n&1&&i!==(i=a[1].title+"")&&N(t,i),n&1&&c!==(c=a[1].href)&&u(e,"href",c),a[3]<a[0].links.length-1?p||(p=Y(),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},d(a){a&&(d(e),d(f),d(s)),p&&p.d(a)}}}function de(o){let e,i,t,c="# ",f=o[0].title+"",s,p,a,n=o[0].date+"",h,C,y,F,D,M=o[0].desc+"",B,K,$,J,I=S(o[0].techs),m=[];for(let r=0;r<I.length;r+=1)m[r]=X(W(o,I,r));let A=S(o[0].links),g=[];for(let r=0;r<A.length;r+=1)g[r]=ee(U(o,A,r));return{c(){e=v("a"),i=v("div"),t=v("span"),t.textContent=c,s=T(f),p=E(),a=v("span"),h=T(n),C=E(),y=v("div");for(let r=0;r<m.length;r+=1)m[r].c();F=E(),D=v("div"),B=T(M),K=E(),$=v("div");for(let r=0;r<g.length;r+=1)g[r].c();this.h()},l(r){e=k(r,"A",{href:!0,target:!0,class:!0});var _=w(e);i=k(_,"DIV",{class:!0});var l=w(i);t=k(l,"SPAN",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-1a6a4zs"&&(t.textContent=c),s=V(l,f),p=P(l),a=k(l,"SPAN",{class:!0});var z=w(a);h=V(z,n),z.forEach(d),C=P(l),y=k(l,"DIV",{class:!0});var O=w(y);for(let j=0;j<m.length;j+=1)m[j].l(O);O.forEach(d),l.forEach(d),F=P(_),D=k(_,"DIV",{class:!0});var Z=w(D);B=V(Z,M),Z.forEach(d),K=P(_),$=k(_,"DIV",{class:!0});var Q=w($);for(let j=0;j<g.length;j+=1)g[j].l(Q);Q.forEach(d),_.forEach(d),this.h()},h(){u(t,"class","text-green-400"),u(a,"class","text-xs text-slate-700"),u(y,"class","flex mt-1 gap-2 flex-wrap"),u(i,"class","text-xl font-bold mb-4"),u(D,"class","mt-6 text-base"),u($,"class","flex mt-6 gap-2"),u(e,"href",J=o[0].link),u(e,"target","_blank"),u(e,"class","w-full p-4 rounded-md z-[100] hover:bg-slate-50 transition-all")},m(r,_){x(r,e,_),b(e,i),b(i,t),b(i,s),b(i,p),b(i,a),b(a,h),b(i,C),b(i,y);for(let l=0;l<m.length;l+=1)m[l]&&m[l].m(y,null);b(e,F),b(e,D),b(D,B),b(e,K),b(e,$);for(let l=0;l<g.length;l+=1)g[l]&&g[l].m($,null)},p(r,[_]){if(_&1&&f!==(f=r[0].title+"")&&N(s,f),_&1&&n!==(n=r[0].date+"")&&N(h,n),_&1){I=S(r[0].techs);let l;for(l=0;l<I.length;l+=1){const z=W(r,I,l);m[l]?m[l].p(z,_):(m[l]=X(z),m[l].c(),m[l].m(y,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=I.length}if(_&1&&M!==(M=r[0].desc+"")&&N(B,M),_&1){A=S(r[0].links);let l;for(l=0;l<A.length;l+=1){const z=U(r,A,l);g[l]?g[l].p(z,_):(g[l]=ee(z),g[l].c(),g[l].m($,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=A.length}_&1&&J!==(J=r[0].link)&&u(e,"href",J)},i:L,o:L,d(r){r&&d(e),G(m,r),G(g,r)}}}function ue(o,e,i){let{project:t}=e;return o.$$set=c=>{"project"in c&&i(0,t=c.project)},[t]}class me extends le{constructor(e){super(),se(this,e,ue,de,ie,{project:0})}}function te(o,e,i){const t=o.slice();return t[1]=e[i],t}function ae(o){let e,i;return e=new me({props:{project:o[1]}}),{c(){oe(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,c){he(e,t,c),i=!0},p:L,i(t){i||(q(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){fe(e,t)}}}function ge(o){let e,i,t,c,f=S(o[0]),s=[];for(let a=0;a<f.length;a+=1)s[a]=ae(te(o,f,a));const p=a=>H(s[a],1,1,()=>{s[a]=null});return{c(){e=v("div");for(let a=0;a<s.length;a+=1)s[a].c();i=E(),t=v("div"),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=w(e);for(let h=0;h<s.length;h+=1)s[h].l(n);n.forEach(d),i=P(a),t=k(a,"DIV",{class:!0}),w(t).forEach(d),this.h()},h(){u(e,"class","flex flex-col gap-4 mt-4 ml-[-16px]"),u(t,"class","mb-[7.5rem]")},m(a,n){x(a,e,n);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(e,null);x(a,i,n),x(a,t,n),c=!0},p(a,[n]){if(n&1){f=S(a[0]);let h;for(h=0;h<f.length;h+=1){const C=te(a,f,h);s[h]?(s[h].p(C,n),q(s[h],1)):(s[h]=ae(C),s[h].c(),q(s[h],1),s[h].m(e,null))}for(pe(),h=f.length;h<s.length;h+=1)p(h);re()}},i(a){if(!c){for(let n=0;n<f.length;n+=1)q(s[n]);c=!0}},o(a){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)H(s[n]);c=!1},d(a){a&&(d(e),d(i),d(t)),G(s,a)}}}function _e(o){const e=[{title:"zyzx",desc:"natural language terminal shell built in Zig and using fine-tuned Mixtral 8x7b. in crude testing, our custom model outperformed GPT3.5 in natural language to bash translation. built with @tam-albert and @richen for treehacks 2024.",date:"Feb 2024",link:"https://zyzx.azliu.cc",links:[{title:"website",href:"https://zyzx.azliu.cc"},{title:"code",href:"https://github.com/tam-albert/zyzx"}],techs:["zig","pytorch"]},{title:"image-to-image-translation",desc:"stable diffusion implementation from scratch in PyTorch, including VAE, transformer, and diffusion modules. the website is a web visualizer for the model, which is deployed on a serverless inference server via modelbit",date:"Jan 2024",link:"https://image.azliu.cc",links:[{title:"website",href:"https://image.azliu.cc"},{title:"code",href:"https://github.com/azliu0/image-to-image-translation"}],techs:["pytorch","react","flask","mantine","modelbit"]},{title:"pigeon",desc:"rag-powered end-to-end email client, built to optimize help email workflows. uses redis vector database to embed documents and aws to receive/send emails. built with the HackMIT dev team",date:"Jan 2024",link:"https://pigeon.hackmit.org",links:[{title:"website",href:"https://pigeon.hackmit.org"},{title:"code",href:"https://github.com/techx/pigeon"}],techs:["redis","react","flask","postgres","mantine","aws"]},{title:"diffusion-image-style",desc:"for 6.790 [6.867] final project, I explored style classification capabilities in deep cnns and diffusion classifiers. analyzed findings with linear probes and visualized with PCA",date:"Dec 2023",link:"https://azliu.cc/assets/pdf/6_790_final_paper.pdf",links:[{title:"paper",href:"https://azliu.cc/assets/pdf/6_790_final_paper.pdf"},{title:"code",href:"https://github.com/azliu0/diffusion-image-style"}],techs:["pytorch"]},{title:"mazed",desc:"live multiplayer maze tag game integrated with a learning interface including user/teacher views. top 6 in web lab 2023",date:"Jan 2023",link:"https://github.com/azliu0/mazed",links:[{title:"code",href:"https://github.com/azliu0/mazed"},{title:"winners",href:"https://weblab.mit.edu/winners/"}],techs:["react","mongodb","node","express","tailwind"]},{title:"processor",desc:"for 6.191 [6.004] design project, I optimized a processor by implementing heuristics such as data prefetching, branch target buffer, simd instructions, kogge-stone addition, pipelined CLA multiplication, and more. achieved top 5 performance in the class out of ~200 students",date:"May 2023",link:"",links:[],techs:["minispec"]},{title:"stellar spectra analysis @ MIT Kavli Institute",desc:"devised a Monte Carlo pipeline for extracting radial velocity and stellar temperature data given raw spectra of M-dwarfs. these stars were being studied specifically for exoplanet habitability, and this pipeline was used in the linked paper to analyze a newly discovered star-exoplanet system.",date:"Dec 2022",link:"https://arxiv.org/abs/2307.05368",links:[{title:"paper",href:"https://arxiv.org/abs/2307.05368"}],techs:["pandas","jupyter"]},{title:"AmarBot",desc:"for 6.106 [6.172] final project, my team (4 members) optimized a bot in playing leiserchess, a variant of chess, using heuristics such as young-siblings wait, bitboards, and caching optimizations. achieved top 5 performance in the class out of 35 teams",date:"Dec 2023",link:"https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf",links:[{title:"writeup",href:"https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf"}],techs:["C/C++","cilk"]},{title:"optimizing subgraph counting @ MIT CSAIL",desc:"devised and implemented new ways to count subgraph isomorphisms in large network graphs, e.g., triangles in Facebook. specifically focused on optimizing matrix multiplication for small subgraphs (<=K4)",date:"Jun 2023",link:"",links:[],techs:["C/C++","cilk"]},{title:"upper bounds on the list color function",desc:"made progress on an open problem in algebraic graph theory related to the long-run behavior of the list color function, a function that generalizes the classic chromatic polynomial. published in involve journal of mathematics.",date:"Nov 2022",link:"https://arxiv.org/pdf/2207.04831.pdf",links:[{title:"paper",href:"https://arxiv.org/pdf/2207.04831.pdf"}],techs:["algebra","graph theory"]},{title:"polynomial reps of the DP color function",desc:"proved that the long-run behavior of the DP color function is polynomial for generalized theta graphs, a function that generalizes list coloring, which generalizes the classical graph coloring problem.",date:"Sep 2020",link:"https://arxiv.org/pdf/2012.12897.pdf",links:[{title:"paper",href:"https://arxiv.org/pdf/2012.12897.pdf"}],techs:["algebra","graph theory"]},{title:"_andrew.sty",desc:"personal latex style file for note taking and homework",date:"Oct 2022",link:"https://github.com/azliu0/_andrew.sty",links:[{title:"code",href:"https://github.com/azliu0/_andrew.sty"},{title:"demo",href:"https://azliu.cc/coursework"}],techs:["latex"]}];return e.sort((i,t)=>{const c=new Date(i.date.replace(/(\w+) (\d{4})/,"$1 01, $2")).getTime();return new Date(t.date.replace(/(\w+) (\d{4})/,"$1 01, $2")).getTime()-c}),[e]}class we extends le{constructor(e){super(),se(this,e,_e,ge,ie,{})}}export{we as component};