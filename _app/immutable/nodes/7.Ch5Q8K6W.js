import{s as ae,n as L}from"../chunks/scheduler.eYBbMEsY.js";import{S as se,i as ne,e as v,t as T,s as E,c as k,a as z,k as re,b as V,f as P,d,l as p,g as w,h as _,j as N,m as G,z as U,n as F,q as oe,r as O,u as ce,v as he,w as fe,x as pe,y as de}from"../chunks/index.Dkpprff0.js";import{e as M}from"../chunks/each.du6qwO2M.js";function W(o,e,l){const t=o.slice();return t[1]=e[l],t[3]=l,t}function X(o,e,l){const t=o.slice();return t[4]=e[l],t}function Y(o){let e,l=o[4]+"",t;return{c(){e=v("span"),t=T(l),this.h()},l(h){e=k(h,"SPAN",{class:!0});var f=z(e);t=V(f,l),f.forEach(d),this.h()},h(){p(e,"class","text-xs text-slate-700 border-[1px] border-slate-200 [border-radius:3px] p-[3px] bg-slate-200")},m(h,f){w(h,e,f),_(e,t)},p(h,f){f&1&&l!==(l=h[4]+"")&&N(t,l)},d(h){h&&d(e)}}}function ee(o){let e,l="·";return{c(){e=v("span"),e.textContent=l,this.h()},l(t){e=k(t,"SPAN",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-uq9nb8"&&(e.textContent=l),this.h()},h(){p(e,"class","text-sm mx-[-4px] text-green-500")},m(t,h){w(t,e,h)},d(t){t&&d(e)}}}function te(o){let e,l=o[1].title+"",t,h,f,c,b,i=o[3]<o[0].links.length-1&&ee();return{c(){e=v("a"),t=T(l),c=E(),i&&i.c(),b=U(),this.h()},l(s){e=k(s,"A",{href:!0,target:!0,class:!0});var n=z(e);t=V(n,l),n.forEach(d),c=P(s),i&&i.l(s),b=U(),this.h()},h(){p(e,"href",h=o[1].href),p(e,"target",f=o[1].href.includes("azliu.cc")?"":"_blank"),p(e,"class","text-sm text-green-500 hover:text-green-700")},m(s,n){w(s,e,n),_(e,t),w(s,c,n),i&&i.m(s,n),w(s,b,n)},p(s,n){n&1&&l!==(l=s[1].title+"")&&N(t,l),n&1&&h!==(h=s[1].href)&&p(e,"href",h),n&1&&f!==(f=s[1].href.includes("azliu.cc")?"":"_blank")&&p(e,"target",f),s[3]<s[0].links.length-1?i||(i=ee(),i.c(),i.m(b.parentNode,b)):i&&(i.d(1),i=null)},d(s){s&&(d(e),d(c),d(b)),i&&i.d(s)}}}function ue(o){let e,l,t,h="# ",f=o[0].title+"",c,b,i,s=o[0].date+"",n,C,y,H,I,S=o[0].desc+"",J,K,$,B,q,D=M(o[0].techs),m=[];for(let r=0;r<D.length;r+=1)m[r]=Y(X(o,D,r));let A=M(o[0].links),g=[];for(let r=0;r<A.length;r+=1)g[r]=te(W(o,A,r));return{c(){e=v("a"),l=v("div"),t=v("span"),t.textContent=h,c=T(f),b=E(),i=v("span"),n=T(s),C=E(),y=v("div");for(let r=0;r<m.length;r+=1)m[r].c();H=E(),I=v("div"),J=T(S),K=E(),$=v("div");for(let r=0;r<g.length;r+=1)g[r].c();this.h()},l(r){e=k(r,"A",{href:!0,target:!0,class:!0});var u=z(e);l=k(u,"DIV",{class:!0});var a=z(l);t=k(a,"SPAN",{class:!0,"data-svelte-h":!0}),re(t)!=="svelte-1a6a4zs"&&(t.textContent=h),c=V(a,f),b=P(a),i=k(a,"SPAN",{class:!0});var x=z(i);n=V(x,s),x.forEach(d),C=P(a),y=k(a,"DIV",{class:!0});var Z=z(y);for(let j=0;j<m.length;j+=1)m[j].l(Z);Z.forEach(d),a.forEach(d),H=P(u),I=k(u,"DIV",{class:!0});var Q=z(I);J=V(Q,S),Q.forEach(d),K=P(u),$=k(u,"DIV",{class:!0});var R=z($);for(let j=0;j<g.length;j+=1)g[j].l(R);R.forEach(d),u.forEach(d),this.h()},h(){p(t,"class","text-green-400"),p(i,"class","text-xs text-slate-700"),p(y,"class","flex mt-1 gap-2 flex-wrap"),p(l,"class","text-xl font-bold mb-4"),p(I,"class","mt-6 text-base"),p($,"class","flex mt-6 gap-2"),p(e,"href",B=o[0].link),p(e,"target",q=o[0].link.includes("azliu.cc")?"":"_blank"),p(e,"class","w-full p-4 rounded-md z-[100] hover:bg-slate-50 transition-all")},m(r,u){w(r,e,u),_(e,l),_(l,t),_(l,c),_(l,b),_(l,i),_(i,n),_(l,C),_(l,y);for(let a=0;a<m.length;a+=1)m[a]&&m[a].m(y,null);_(e,H),_(e,I),_(I,J),_(e,K),_(e,$);for(let a=0;a<g.length;a+=1)g[a]&&g[a].m($,null)},p(r,[u]){if(u&1&&f!==(f=r[0].title+"")&&N(c,f),u&1&&s!==(s=r[0].date+"")&&N(n,s),u&1){D=M(r[0].techs);let a;for(a=0;a<D.length;a+=1){const x=X(r,D,a);m[a]?m[a].p(x,u):(m[a]=Y(x),m[a].c(),m[a].m(y,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=D.length}if(u&1&&S!==(S=r[0].desc+"")&&N(J,S),u&1){A=M(r[0].links);let a;for(a=0;a<A.length;a+=1){const x=W(r,A,a);g[a]?g[a].p(x,u):(g[a]=te(x),g[a].c(),g[a].m($,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=A.length}u&1&&B!==(B=r[0].link)&&p(e,"href",B),u&1&&q!==(q=r[0].link.includes("azliu.cc")?"":"_blank")&&p(e,"target",q)},i:L,o:L,d(r){r&&d(e),G(m,r),G(g,r)}}}function me(o,e,l){let{project:t}=e;return o.$$set=h=>{"project"in h&&l(0,t=h.project)},[t]}class ge extends se{constructor(e){super(),ne(this,e,me,ue,ae,{project:0})}}function ie(o,e,l){const t=o.slice();return t[1]=e[l],t}function le(o){let e,l;return e=new ge({props:{project:o[1]}}),{c(){ce(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,h){fe(e,t,h),l=!0},p:L,i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function _e(o){let e,l,t,h,f=M(o[0]),c=[];for(let i=0;i<f.length;i+=1)c[i]=le(ie(o,f,i));const b=i=>O(c[i],1,1,()=>{c[i]=null});return{c(){e=v("div");for(let i=0;i<c.length;i+=1)c[i].c();l=E(),t=v("div"),this.h()},l(i){e=k(i,"DIV",{class:!0});var s=z(e);for(let n=0;n<c.length;n+=1)c[n].l(s);s.forEach(d),l=P(i),t=k(i,"DIV",{class:!0}),z(t).forEach(d),this.h()},h(){p(e,"class","flex flex-col gap-4 mt-4 ml-[-16px]"),p(t,"class","mb-[7.5rem]")},m(i,s){w(i,e,s);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(e,null);w(i,l,s),w(i,t,s),h=!0},p(i,[s]){if(s&1){f=M(i[0]);let n;for(n=0;n<f.length;n+=1){const C=ie(i,f,n);c[n]?(c[n].p(C,s),F(c[n],1)):(c[n]=le(C),c[n].c(),F(c[n],1),c[n].m(e,null))}for(de(),n=f.length;n<c.length;n+=1)b(n);oe()}},i(i){if(!h){for(let s=0;s<f.length;s+=1)F(c[s]);h=!0}},o(i){c=c.filter(Boolean);for(let s=0;s<c.length;s+=1)O(c[s]);h=!1},d(i){i&&(d(e),d(l),d(t)),G(c,i)}}}function be(o){const e=[{title:"twister",desc:"canary exploit challenge based on the mersenne twister prng for HackMIT puzzle 2024",date:"July 2024",link:"https://twister.hackmit.org",links:[{title:"website",href:"https://twister.hackmit.org"},{title:"code",href:"https://github.com/azliu0/twister"}],techs:["prng","binexp"]},{title:"zyzx",desc:"natural language terminal shell built in Zig and using fine-tuned Mixtral 8x7b. in crude testing, our custom model outperformed GPT3.5 in natural language to bash translation. built with @tam-albert and @richen for treehacks 2024",date:"Feb 2024",link:"https://zyzx.azliu.cc",links:[{title:"website",href:"https://zyzx.azliu.cc"},{title:"code",href:"https://github.com/tam-albert/zyzx"}],techs:["zig","pytorch"]},{title:"image-to-image-translation",desc:"stable diffusion implementation from scratch in PyTorch, including VAE, transformer, and diffusion modules. the website is a web visualizer for the model, which is deployed on a serverless inference server via modelbit",date:"Jan 2024",link:"https://image.azliu.cc",links:[{title:"website",href:"https://image.azliu.cc"},{title:"code",href:"https://github.com/azliu0/image-to-image-translation"}],techs:["pytorch","react","flask","mantine","modelbit"]},{title:"pigeon",desc:"rag-powered end-to-end email client, built to optimize help email workflows. uses redis vector database to embed documents and aws to receive/send emails. built with the HackMIT dev team",date:"Jan 2024",link:"https://pigeon.hackmit.org",links:[{title:"website",href:"https://pigeon.hackmit.org"},{title:"code",href:"https://github.com/techx/pigeon"}],techs:["redis","react","flask","postgres","mantine","aws"]},{title:"diffusion-image-style",desc:"for 6.790 [6.867] final project, I explored style classification capabilities in deep cnns and diffusion classifiers. analyzed findings with linear probes and visualized with PCA",date:"Dec 2023",link:"https://azliu.cc/assets/pdf/6_790_final_paper.pdf",links:[{title:"paper",href:"https://azliu.cc/assets/pdf/6_790_final_paper.pdf"},{title:"code",href:"https://github.com/azliu0/diffusion-image-style"}],techs:["pytorch"]},{title:"mazed",desc:"live multiplayer maze tag game",date:"Jan 2023",link:"https://github.com/azliu0/mazed",links:[{title:"code",href:"https://github.com/azliu0/mazed"},{title:"winners",href:"https://weblab.mit.edu/winners/"}],techs:["react","mongodb","node","express","tailwind"]},{title:"processor",desc:"for 6.191 [6.004] design project, I optimized a processor by implementing heuristics such as data prefetching, branch target buffer, simd instructions, kogge-stone addition, pipelined CLA multiplication, and more",date:"May 2023",link:"",links:[],techs:["minispec"]},{title:"stellar spectra analysis @ MIT Kavli Institute",desc:"devised a Monte Carlo pipeline for extracting radial velocity and stellar temperature data given raw spectra of M-dwarfs. these stars were being studied specifically for exoplanet habitability, and this pipeline was used in the linked paper to analyze a newly discovered star-exoplanet system",date:"Dec 2022",link:"https://arxiv.org/abs/2307.05368",links:[{title:"paper",href:"https://arxiv.org/abs/2307.05368"}],techs:["pandas","jupyter"]},{title:"AmarBot",desc:"for 6.106 [6.172] final project, my team (4 members) optimized a bot in playing leiserchess, a variant of chess, using heuristics such as young-siblings wait, bitboards, and caching optimizations",date:"Dec 2023",link:"https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf",links:[{title:"writeup",href:"https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf"}],techs:["C/C++","cilk"]},{title:"optimizing subgraph counting @ MIT CSAIL",desc:"devised and implemented new ways to count subgraph isomorphisms in large network graphs, e.g., triangles in Facebook. specifically focused on optimizing matrix multiplication for small subgraphs (<=K4)",date:"Jun 2023",link:"",links:[],techs:["C/C++","cilk"]},{title:"upper bounds on the list color function",desc:"made progress on an open problem in algebraic graph theory related to the long-run behavior of the list color function, a function that generalizes the classic chromatic polynomial",date:"Nov 2022",link:"https://arxiv.org/pdf/2207.04831.pdf",links:[{title:"paper",href:"https://arxiv.org/pdf/2207.04831.pdf"}],techs:["algebra","graph theory"]},{title:"polynomial reps of the DP color function",desc:"proved that the long-run behavior of the DP color function is polynomial for generalized theta graphs, a function that generalizes list coloring, which generalizes the classical graph coloring problem",date:"Sep 2020",link:"https://arxiv.org/pdf/2012.12897.pdf",links:[{title:"paper",href:"https://arxiv.org/pdf/2012.12897.pdf"}],techs:["algebra","graph theory"]},{title:"_andrew.sty",desc:"personal latex style file for note taking and homework",date:"Oct 2022",link:"https://github.com/azliu0/_andrew.sty",links:[{title:"code",href:"https://github.com/azliu0/_andrew.sty"},{title:"demo",href:"https://azliu.cc/coursework"}],techs:["latex"]}];return e.sort((l,t)=>{const h=new Date(l.date.replace(/(\w+) (\d{4})/,"$1 01, $2")).getTime();return new Date(t.date.replace(/(\w+) (\d{4})/,"$1 01, $2")).getTime()-h}),[e]}class we extends se{constructor(e){super(),ne(this,e,be,_e,ae,{})}}export{we as component};
