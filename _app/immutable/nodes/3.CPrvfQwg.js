import{s as j,n as P}from"../chunks/scheduler.Duw6Te52.js";import{S as q,i as x,e as L,s as N,c as y,k as O,f as w,a as I,d as h,l as E,g as p,m as C,t as b,b as k,h as S}from"../chunks/index.9KwSBbko.js";import{e as A}from"../chunks/each.D1BQu7bi.js";function D(u,l,f){const o=u.slice();return o[2]=l[f],o}function z(u,l,f){const o=u.slice();return o[5]=l[f],o}function M(u,l,f){const o=u.slice();return o[2]=l[f],o}function H(u,l,f){const o=u.slice();return o[5]=l[f],o}function T(u){let l=" ",f,o,c,d=u[5].title+"",_,m;return{c(){f=b(l),o=b("("),c=L("a"),_=b(d),m=b(")"),this.h()},l(s){f=k(s,l),o=k(s,"("),c=y(s,"A",{href:!0,target:!0,class:!0});var a=I(c);_=k(a,d),a.forEach(h),m=k(s,")"),this.h()},h(){E(c,"href",u[5].href),E(c,"target","_blank"),E(c,"class","coursework-ref")},m(s,a){p(s,f,a),p(s,o,a),p(s,c,a),S(c,_),p(s,m,a)},p:P,d(s){s&&(h(f),h(o),h(c),h(m))}}}function U(u){let l,f=u[2].number+"",o,c,d=u[2].title+"",_,m,s,a=A(u[2].links),t=[];for(let r=0;r<a.length;r+=1)t[r]=T(H(u,a,r));return{c(){l=L("li"),o=b(f),c=b(": "),_=b(d),m=N();for(let r=0;r<t.length;r+=1)t[r].c();s=N()},l(r){l=y(r,"LI",{});var n=I(l);o=k(n,f),c=k(n,": "),_=k(n,d),m=w(n);for(let e=0;e<t.length;e+=1)t[e].l(n);s=w(n),n.forEach(h)},m(r,n){p(r,l,n),S(l,o),S(l,c),S(l,_),S(l,m);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(l,null);S(l,s)},p(r,n){if(n&1){a=A(r[2].links);let e;for(e=0;e<a.length;e+=1){const g=H(r,a,e);t[e]?t[e].p(g,n):(t[e]=T(g),t[e].c(),t[e].m(l,s))}for(;e<t.length;e+=1)t[e].d(1);t.length=a.length}},d(r){r&&h(l),C(t,r)}}}function V(u){let l=" ",f,o,c,d=u[5].title+"",_,m;return{c(){f=b(l),o=b("("),c=L("a"),_=b(d),m=b(")"),this.h()},l(s){f=k(s,l),o=k(s,"("),c=y(s,"A",{href:!0,target:!0,class:!0});var a=I(c);_=k(a,d),a.forEach(h),m=k(s,")"),this.h()},h(){E(c,"href",u[5].href),E(c,"target","_blank"),E(c,"class","coursework-ref")},m(s,a){p(s,f,a),p(s,o,a),p(s,c,a),S(c,_),p(s,m,a)},p:P,d(s){s&&(h(f),h(o),h(c),h(m))}}}function $(u){let l,f=u[2].number+"",o,c,d=u[2].title+"",_,m,s,a=A(u[2].links),t=[];for(let r=0;r<a.length;r+=1)t[r]=V(z(u,a,r));return{c(){l=L("li"),o=b(f),c=b(": "),_=b(d),m=N();for(let r=0;r<t.length;r+=1)t[r].c();s=N()},l(r){l=y(r,"LI",{});var n=I(l);o=k(n,f),c=k(n,": "),_=k(n,d),m=w(n);for(let e=0;e<t.length;e+=1)t[e].l(n);s=w(n),n.forEach(h)},m(r,n){p(r,l,n),S(l,o),S(l,c),S(l,_),S(l,m);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(l,null);S(l,s)},p(r,n){if(n&2){a=A(r[2].links);let e;for(e=0;e<a.length;e+=1){const g=z(r,a,e);t[e]?t[e].p(g,n):(t[e]=V(g),t[e].c(),t[e].m(l,s))}for(;e<t.length;e+=1)t[e].d(1);t.length=a.length}},d(r){r&&h(l),C(t,r)}}}function B(u){let l,f='<p>See <a href="https://github.com/azliu0/_andrew.sty" target="_blank" class="coursework-ref">here</a> for my style package.</p>',o,c,d,_,m,s,a=A(u[0]),t=[];for(let e=0;e<a.length;e+=1)t[e]=U(M(u,a,e));let r=A(u[1]),n=[];for(let e=0;e<r.length;e+=1)n[e]=$(D(u,r,e));return{c(){l=L("div"),l.innerHTML=f,o=N(),c=L("ul");for(let e=0;e<t.length;e+=1)t[e].c();d=N(),_=L("ul");for(let e=0;e<n.length;e+=1)n[e].c();m=N(),s=L("div"),this.h()},l(e){l=y(e,"DIV",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-1safo1d"&&(l.innerHTML=f),o=w(e),c=y(e,"UL",{});var g=I(c);for(let v=0;v<t.length;v+=1)t[v].l(g);g.forEach(h),d=w(e),_=y(e,"UL",{});var i=I(_);for(let v=0;v<n.length;v+=1)n[v].l(i);i.forEach(h),m=w(e),s=y(e,"DIV",{class:!0}),I(s).forEach(h),this.h()},h(){E(l,"class","space-y-6"),E(s,"class","mb-[7.5rem]")},m(e,g){p(e,l,g),p(e,o,g),p(e,c,g);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(c,null);p(e,d,g),p(e,_,g);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(_,null);p(e,m,g),p(e,s,g)},p(e,[g]){if(g&1){a=A(e[0]);let i;for(i=0;i<a.length;i+=1){const v=M(e,a,i);t[i]?t[i].p(v,g):(t[i]=U(v),t[i].c(),t[i].m(c,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}if(g&2){r=A(e[1]);let i;for(i=0;i<r.length;i+=1){const v=D(e,r,i);n[i]?n[i].p(v,g):(n[i]=$(v),n[i].c(),n[i].m(_,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},i:P,o:P,d(e){e&&(h(l),h(o),h(c),h(d),h(_),h(m),h(s)),C(t,e),C(n,e)}}}function F(u){return[[{number:"6.780 [6.437]",title:"Inference and Information",links:[],grad:!0,current:!0},{number:"6.790 [6.867]",title:"Machine Learning",links:[{title:"notes",href:"/assets/pdf/6_790_Notes.pdf"}],grad:!0},{number:"6.820 [6.884]",title:"Sensorimotor Learning",links:[],grad:!0,current:!0},{number:"6.584 [6.824]",title:"Distributed Systems",links:[],grad:!0,current:!0},{number:"6.106 [6.172]",title:"Software Performance Engineering",links:[]},{number:"6.861 [6.806]",title:"Advanced NLP",links:[]},{number:"6.102 [6.031]",title:"Software Construction",links:[],current:!0},{number:"6.191 [6.004]",title:"Computation Structures",links:[]},{number:"6.122 [6.046]",title:"Design and Analysis of Algorithms",links:[{title:"notes",href:"/assets/pdf/6_122_Notes.pdf"}]},{number:"6.181 [6.039]",title:"Operating Systems",links:[]},{number:"6.962 [6.148]",title:"web.lab",links:[{title:"project",href:"https://github.com/azliu0/mazed"}]}],[{number:"18.656",title:"Non-Asymptotic Statistics",links:[],grad:!0,current:!0},{number:"18.615",title:"Stochastic Processes",links:[{title:"notes",href:"/assets/pdf/18_615_Notes.pdf"}],grad:!0},{number:"18.701",title:"Abstract Algebra",links:[{title:"notes",href:"/assets/pdf/18_701_Notes.pdf"}]},{number:"18.650",title:"Statistics",links:[{title:"notes",href:"/assets/pdf/18_650_Notes.pdf"}]},{number:"6.S095",title:"Probability",links:[{title:"notes",href:"/assets/pdf/6_S095_Notes.pdf"}]}]]}class Q extends q{constructor(l){super(),x(this,l,F,B,j,{})}}export{Q as component};