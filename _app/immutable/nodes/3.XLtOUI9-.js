import{s as F,n as P}from"../chunks/scheduler.GJ_Rr4Ix.js";import{S as J,i as K,e as x,s as N,c as L,g as j,f as z,h as D,d as h,a as A,b as p,j as V,t as w,k as y,l as C}from"../chunks/index.WyERFreg.js";import{e as E}from"../chunks/each.6w4Ej4nR.js";function H(f,e,_){const c=f.slice();return c[2]=e[_],c}function q(f,e,_){const c=f.slice();return c[5]=e[_],c}function U(f,e,_){const c=f.slice();return c[2]=e[_],c}function $(f,e,_){const c=f.slice();return c[5]=e[_],c}function G(f){let e=" ",_,c,o,v=f[5].title+"",b,m;return{c(){_=w(e),c=w("("),o=x("a"),b=w(v),m=w(")"),this.h()},l(r){_=y(r,e),c=y(r,"("),o=L(r,"A",{href:!0,target:!0,class:!0});var n=D(o);b=y(n,v),n.forEach(h),m=y(r,")"),this.h()},h(){A(o,"href",f[5].href),A(o,"target","_blank"),A(o,"class","coursework-ref")},m(r,n){p(r,_,n),p(r,c,n),p(r,o,n),C(o,b),p(r,m,n)},p:P,d(r){r&&(h(_),h(c),h(o),h(m))}}}function O(f){let e,_=f[2].number+"",c,o,v=f[2].title+"",b,m,r,n=E(f[2].links),i=[];for(let s=0;s<n.length;s+=1)i[s]=G($(f,n,s));return{c(){e=x("li"),c=w(_),o=w(": "),b=w(v),m=N();for(let s=0;s<i.length;s+=1)i[s].c();r=N()},l(s){e=L(s,"LI",{});var u=D(e);c=y(u,_),o=y(u,": "),b=y(u,v),m=z(u);for(let l=0;l<i.length;l+=1)i[l].l(u);r=z(u),u.forEach(h)},m(s,u){p(s,e,u),C(e,c),C(e,o),C(e,b),C(e,m);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);C(e,r)},p(s,u){if(u&1){n=E(s[2].links);let l;for(l=0;l<n.length;l+=1){const I=$(s,n,l);i[l]?i[l].p(I,u):(i[l]=G(I),i[l].c(),i[l].m(e,r))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},d(s){s&&h(e),V(i,s)}}}function X(f){let e=" ",_,c,o,v=f[5].title+"",b,m;return{c(){_=w(e),c=w("("),o=x("a"),b=w(v),m=w(")"),this.h()},l(r){_=y(r,e),c=y(r,"("),o=L(r,"A",{href:!0,target:!0,class:!0});var n=D(o);b=y(n,v),n.forEach(h),m=y(r,")"),this.h()},h(){A(o,"href",f[5].href),A(o,"target","_blank"),A(o,"class","coursework-ref")},m(r,n){p(r,_,n),p(r,c,n),p(r,o,n),C(o,b),p(r,m,n)},p:P,d(r){r&&(h(_),h(c),h(o),h(m))}}}function B(f){let e,_=f[2].number+"",c,o,v=f[2].title+"",b,m,r,n=E(f[2].links),i=[];for(let s=0;s<n.length;s+=1)i[s]=X(q(f,n,s));return{c(){e=x("li"),c=w(_),o=w(": "),b=w(v),m=N();for(let s=0;s<i.length;s+=1)i[s].c();r=N()},l(s){e=L(s,"LI",{});var u=D(e);c=y(u,_),o=y(u,": "),b=y(u,v),m=z(u);for(let l=0;l<i.length;l+=1)i[l].l(u);r=z(u),u.forEach(h)},m(s,u){p(s,e,u),C(e,c),C(e,o),C(e,b),C(e,m);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);C(e,r)},p(s,u){if(u&2){n=E(s[2].links);let l;for(l=0;l<n.length;l+=1){const I=q(s,n,l);i[l]?i[l].p(I,u):(i[l]=X(I),i[l].c(),i[l].m(e,r))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},d(s){s&&h(e),V(i,s)}}}function Q(f){let e,_=`<p>This is a list of some the classes that I&#39;ve taken or are currently taking.
    I like to take notes in LaTeX. I use my own style package to format my
    documents, which can be found <a href="https://github.com/azliu0/_andrew.sty" target="_blank" class="coursework-ref">here</a>.</p> <p>My setup is <a href="https://neovim.io/" target="_blank" class="coursework-ref">Neovim</a>
    with
    <a href="https://github.com/lervag/vimtex" target="_blank" class="coursework-ref">VimTex</a>
    and
    <a href="https://pwmt.org/projects/zathura/" target="_blank" class="coursework-ref">zathura</a>. More details about my workflow can be found
    <a href="https://github.com/azliu0/dotfiles/tree/main/latex" target="_blank" class="coursework-ref">here</a>.</p> <p>The source code for all of my notes can be found <a href="https://github.com/azliu0/mit-notes" target="_blank" class="coursework-ref">here</a>
    (build
    <a href="https://azliu0.github.io/mit-notes/" target="_blank" class="coursework-ref">here</a>). I use a
    <a href="https://github.com/features/actions" target="_blank" class="coursework-ref">GitHub action</a> to automatically deploy whenever I update my notes, so the pdfs on this page
    will always be the latest versions.</p>`,c,o,v="Computer Science",b,m,r,n,i="Mathematics",s,u,l,I,M=E(f[0]),d=[];for(let t=0;t<M.length;t+=1)d[t]=O(U(f,M,t));let T=E(f[1]),k=[];for(let t=0;t<T.length;t+=1)k[t]=B(H(f,T,t));return{c(){e=x("div"),e.innerHTML=_,c=N(),o=x("div"),o.textContent=v,b=N(),m=x("ul");for(let t=0;t<d.length;t+=1)d[t].c();r=N(),n=x("div"),n.textContent=i,s=N(),u=x("ul");for(let t=0;t<k.length;t+=1)k[t].c();l=N(),I=x("div"),this.h()},l(t){e=L(t,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1ua58pf"&&(e.innerHTML=_),c=z(t),o=L(t,"DIV",{class:!0,"data-svelte-h":!0}),j(o)!=="svelte-9be4fq"&&(o.textContent=v),b=z(t),m=L(t,"UL",{});var g=D(m);for(let S=0;S<d.length;S+=1)d[S].l(g);g.forEach(h),r=z(t),n=L(t,"DIV",{"data-svelte-h":!0}),j(n)!=="svelte-tp4bt4"&&(n.textContent=i),s=z(t),u=L(t,"UL",{});var a=D(u);for(let S=0;S<k.length;S+=1)k[S].l(a);a.forEach(h),l=z(t),I=L(t,"DIV",{class:!0}),D(I).forEach(h),this.h()},h(){A(e,"class","space-y-6"),A(o,"class","mt-6"),A(I,"class","mb-[7.5rem]")},m(t,g){p(t,e,g),p(t,c,g),p(t,o,g),p(t,b,g),p(t,m,g);for(let a=0;a<d.length;a+=1)d[a]&&d[a].m(m,null);p(t,r,g),p(t,n,g),p(t,s,g),p(t,u,g);for(let a=0;a<k.length;a+=1)k[a]&&k[a].m(u,null);p(t,l,g),p(t,I,g)},p(t,[g]){if(g&1){M=E(t[0]);let a;for(a=0;a<M.length;a+=1){const S=U(t,M,a);d[a]?d[a].p(S,g):(d[a]=O(S),d[a].c(),d[a].m(m,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=M.length}if(g&2){T=E(t[1]);let a;for(a=0;a<T.length;a+=1){const S=H(t,T,a);k[a]?k[a].p(S,g):(k[a]=B(S),k[a].c(),k[a].m(u,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=T.length}},i:P,o:P,d(t){t&&(h(e),h(c),h(o),h(b),h(m),h(r),h(n),h(s),h(u),h(l),h(I)),V(d,t),V(k,t)}}}function R(f){return[[{number:"6.780 [6.437]",title:"Inference and Information",links:[],grad:!0,current:!0},{number:"6.790 [6.867]",title:"Machine Learning",links:[{title:"notes",href:"/assets/pdf/6_790_Notes.pdf"},{title:"project",href:"/assets/pdf/6_790_final_paper.pdf"}],grad:!0},{number:"6.820 [6.884]",title:"Sensorimotor Learning",links:[],grad:!0,current:!0},{number:"6.584 [6.824]",title:"Distributed Systems",links:[],grad:!0,current:!0},{number:"6.106 [6.172]",title:"Software Performance Engineering",links:[]},{number:"6.861 [6.806]",title:"Advanced NLP",links:[]},{number:"6.102 [6.031]",title:"Software Construction",links:[],current:!0},{number:"6.191 [6.004]",title:"Computation Structures",links:[]},{number:"6.122 [6.046]",title:"Design and Analysis of Algorithms",links:[{title:"notes",href:"/assets/pdf/6_122_Notes.pdf"}]},{number:"6.181 [6.039]",title:"Operating Systems",links:[]},{number:"6.962 [6.148]",title:"web.lab",links:[{title:"project",href:"https://github.com/azliu0/mazed"}]}],[{number:"18.656",title:"Non-Asymptotic Statistics",links:[],grad:!0,current:!0},{number:"18.615",title:"Stochastic Processes",links:[{title:"notes",href:"/assets/pdf/18_615_Notes.pdf"}],grad:!0},{number:"18.701",title:"Abstract Algebra",links:[{title:"notes",href:"/assets/pdf/18_701_Notes.pdf"}]},{number:"18.650",title:"Statistics",links:[{title:"notes",href:"/assets/pdf/18_650_Notes.pdf"}]},{number:"6.S095",title:"Probability",links:[{title:"notes",href:"/assets/pdf/6_S095_Notes.pdf"}]}]]}class ee extends J{constructor(e){super(),K(this,e,R,Q,F,{})}}export{ee as component};