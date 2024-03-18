import{e as F,s as x,n as I,c as ee,a as te,f as ne,u as re,g as ae,h as oe,i as le}from"../chunks/scheduler.0GBxUH4o.js";import{S as U,i as q,e as v,s as N,c as g,a as A,d as m,f as S,l as o,g as C,h as y,y as L,k as z,t as P,b as O,j as se,C as $,r as G,u as X,v as K,q as j,p as ie,n as V,w as W,D as ce,E as ue,x as me}from"../chunks/index.-5tGiGzS.js";import{e as B,u as fe,d as de}from"../chunks/each.71k9p7N5.js";import{p as he}from"../chunks/stores.5cv3cdKw.js";const pe=async({url:s})=>({pathname:s.pathname}),_e=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,load:pe,prerender:_e},Symbol.toStringTag,{value:"Module"}));function ve(s){const e=s-1;return e*e*e+1}function J(s,{delay:e=0,duration:n=400,easing:t=ve,x:l=0,y:u=0,opacity:r=0}={}){const i=getComputedStyle(s),a=+i.opacity,d=i.transform==="none"?"":i.transform,b=a*(1-r),[w,h]=F(l),[p,k]=F(u);return{delay:e,duration:n,easing:t,css:(f,c)=>`
			transform: ${d} translate(${(1-f)*w}${h}, ${(1-f)*p}${k});
			opacity: ${a-b*c}`}}function Q(s,e,n){const t=s.slice();return t[5]=e[n],t}function ge(s){let e,n='<a href="/">Andrew Liu<span class="text-gray-500 text-[2.75rem] pl-[0.2rem]">.</span></a>';return{c(){e=v("div"),e.innerHTML=n,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-ivm7yy"&&(e.innerHTML=n),this.h()},h(){o(e,"class","text-4xl")},m(t,l){C(t,e,l)},p:I,d(t){t&&m(e)}}}function ye(s){let e,n,t=s[2](s[0])+"",l,u;return{c(){e=v("div"),n=v("a"),l=P(t),this.h()},l(r){e=g(r,"DIV",{class:!0});var i=A(e);n=g(i,"A",{href:!0});var a=A(n);l=O(a,t),a.forEach(m),i.forEach(m),this.h()},h(){o(n,"href",u="/"+s[0]),o(e,"class","text-3xl")},m(r,i){C(r,e,i),y(e,n),y(n,l)},p(r,i){i&1&&t!==(t=r[2](r[0])+"")&&se(l,t),i&1&&u!==(u="/"+r[0])&&o(n,"href",u)},d(r){r&&m(e)}}}function we(s){let e,n=s[5].name+"",t;return{c(){e=v("a"),t=P(n),this.h()},l(l){e=g(l,"A",{class:!0,href:!0});var u=A(e);t=O(u,n),u.forEach(m),this.h()},h(){o(e,"class","my-0 mx-[0.2rem] py-[0.2rem] px-[0.5rem] text-center text-lg text-gray-500 hover:cursor-pointer hover:text-black"),o(e,"href",s[5].href)},m(l,u){C(l,e,u),y(e,t)},p:I,d(l){l&&m(e)}}}function ke(s){let e,n=s[5].name+"",t;return{c(){e=v("a"),t=P(n),this.h()},l(l){e=g(l,"A",{class:!0,href:!0});var u=A(e);t=O(u,n),u.forEach(m),this.h()},h(){o(e,"class","my-0 mx-[0.2rem] py-[0.2rem] px-[0.5rem] text-center text-lg text-black hover:cursor-pointer"),o(e,"href",s[5].href)},m(l,u){C(l,e,u),y(e,t)},p:I,d(l){l&&m(e)}}}function Y(s,e){let n,t;function l(i,a){return i[5].name===i[0]?ke:we}let u=l(e),r=u(e);return{key:s,first:null,c(){n=L(),r.c(),t=L(),this.h()},l(i){n=L(),r.l(i),t=L(),this.h()},h(){this.first=n},m(i,a){C(i,n,a),r.m(i,a),C(i,t,a)},p(i,a){e=i,u===(u=l(e))&&r?r.p(e,a):(r.d(1),r=u(e),r&&(r.c(),r.m(t.parentNode,t)))},d(i){i&&(m(n),m(t)),r.d(i)}}}function Ee(s){let e,n,t,l,u,r,i,a,d=[],b=new Map;function w(c,E){return E&1&&(u=null),u==null&&(u=!!c[1].find(c[4])),u?ye:ge}let h=w(s,-1),p=h(s),k=B(s[1]);const f=c=>c[5];for(let c=0;c<k.length;c+=1){let E=Q(s,k,c),T=f(E);b.set(T,d[c]=Y(T,E))}return{c(){e=v("header"),n=v("div"),t=v("div"),l=v("div"),p.c(),r=N(),i=v("div"),a=v("div");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){e=g(c,"HEADER",{class:!0});var E=A(e);n=g(E,"DIV",{class:!0});var T=A(n);t=g(T,"DIV",{class:!0});var D=A(t);l=g(D,"DIV",{});var M=A(l);p.l(M),M.forEach(m),r=S(D),i=g(D,"DIV",{});var _=A(i);a=g(_,"DIV",{class:!0});var R=A(a);for(let H=0;H<d.length;H+=1)d[H].l(R);R.forEach(m),_.forEach(m),D.forEach(m),T.forEach(m),E.forEach(m),this.h()},h(){o(a,"class","text-lg flex justify-end max-md:mb-[2.75rem]"),o(t,"class","mt-[7.5rem] mb-[2rem] flex justify-between max-md:flex-col-reverse"),o(n,"class","w-[732px] px-6 max-md:mt-[-4rem] max-md:mb-[4rem]"),o(e,"class","flex justify-center")},m(c,E){C(c,e,E),y(e,n),y(n,t),y(t,l),p.m(l,null),y(t,r),y(t,i),y(i,a);for(let T=0;T<d.length;T+=1)d[T]&&d[T].m(a,null)},p(c,[E]){h===(h=w(c,E))&&p?p.p(c,E):(p.d(1),p=h(c),p&&(p.c(),p.m(l,null))),E&3&&(k=B(c[1]),d=fe(d,E,f,1,c,k,b,a,de,Y,null,Q))},i:I,o:I,d(c){c&&m(e),p.d();for(let E=0;E<d.length;E+=1)d[E].d()}}}function be(s,e,n){let t;ee(s,he,a=>n(3,t=a));const l=[{name:"home",href:"/"},{name:"coursework",href:"/coursework"},{name:"projects",href:"/projects"},{name:"logs",href:"/logs"}],u=a=>a?a.charAt(0).toUpperCase()+a.slice(1).toLowerCase():"";let r=null;const i=a=>a.name===r&&a.name!=="home";return s.$$.update=()=>{if(s.$$.dirty&8){const a=l.find(({href:d})=>d===t.url.pathname||d.length>1&&t.url.pathname.startsWith(d));a?n(0,r=a.name):n(0,r=null)}},[r,l,u,t,i]}class Te extends U{constructor(e){super(),q(this,e,be,Ee,x,{})}}function Me(s){let e,n,t,l,u,r,i,a,d,b,w,h,p,k,f,c,E,T,D=`{
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Andrew Liu",
      "url": "https://www.azliu.cc",
      "image": "https://www.azliu.cc/assets/favicons/favicon.ico",
      "alumniOf": "MIT"
    }`;return document.title=e=s[0],{c(){n=v("meta"),t=v("meta"),l=v("meta"),u=v("meta"),r=v("meta"),i=v("meta"),a=v("meta"),d=v("meta"),b=v("meta"),w=v("meta"),h=v("meta"),p=v("meta"),k=v("meta"),f=v("link"),c=v("meta"),E=v("meta"),T=v("script"),T.textContent=D,this.h()},l(M){const _=$("svelte-1dmpzjt",document.head);n=g(_,"META",{name:!0,content:!0}),t=g(_,"META",{property:!0,content:!0}),l=g(_,"META",{property:!0,content:!0}),u=g(_,"META",{property:!0,content:!0}),r=g(_,"META",{property:!0,content:!0}),i=g(_,"META",{property:!0,content:!0}),a=g(_,"META",{property:!0,content:!0}),d=g(_,"META",{property:!0,content:!0}),b=g(_,"META",{property:!0,content:!0}),w=g(_,"META",{property:!0,content:!0}),h=g(_,"META",{property:!0,content:!0}),p=g(_,"META",{property:!0,content:!0}),k=g(_,"META",{property:!0,content:!0}),f=g(_,"LINK",{rel:!0,href:!0}),c=g(_,"META",{name:!0,content:!0}),E=g(_,"META",{"http-equiv":!0,content:!0}),T=g(_,"SCRIPT",{type:!0,"data-svelte-h":!0}),z(T)!=="svelte-8m2gml"&&(T.textContent=D),_.forEach(m),this.h()},h(){o(n,"name","description"),o(n,"content",s[1]),o(t,"property","og:type"),o(t,"content","website"),o(l,"property","og:url"),o(l,"content",s[2]),o(u,"property","og:title"),o(u,"content",s[0]),o(r,"property","og:description"),o(r,"content",s[1]),o(i,"property","og:image"),o(i,"content",s[3]),o(a,"property","og:site_name"),o(a,"content",s[4]),o(d,"property","twitter:card"),o(d,"content","summary_large_image"),o(b,"property","twitter:url"),o(b,"content",s[2]),o(w,"property","twitter:title"),o(w,"content",s[0]),o(h,"property","twitter:description"),o(h,"content",s[1]),o(p,"property","twitter:image"),o(p,"content",s[3]),o(k,"property","twitter:creator"),o(k,"content","@azliu0"),o(f,"rel","canonical"),o(f,"href",s[2]),o(c,"name","viewport"),o(c,"content","width=device-width, initial-scale=1"),o(E,"http-equiv","Content-Language"),o(E,"content","en"),o(T,"type","application/ld+json")},m(M,_){y(document.head,n),y(document.head,t),y(document.head,l),y(document.head,u),y(document.head,r),y(document.head,i),y(document.head,a),y(document.head,d),y(document.head,b),y(document.head,w),y(document.head,h),y(document.head,p),y(document.head,k),y(document.head,f),y(document.head,c),y(document.head,E),y(document.head,T)},p(M,[_]){_&1&&e!==(e=M[0])&&(document.title=e),_&2&&o(n,"content",M[1]),_&4&&o(l,"content",M[2]),_&1&&o(u,"content",M[0]),_&2&&o(r,"content",M[1]),_&8&&o(i,"content",M[3]),_&16&&o(a,"content",M[4]),_&4&&o(b,"content",M[2]),_&1&&o(w,"content",M[0]),_&2&&o(h,"content",M[1]),_&8&&o(p,"content",M[3]),_&4&&o(f,"href",M[2])},i:I,o:I,d(M){m(n),m(t),m(l),m(u),m(r),m(i),m(a),m(d),m(b),m(w),m(h),m(p),m(k),m(f),m(c),m(E),m(T)}}}function Ae(s,e,n){let{title:t="Andrew Liu"}=e,{description:l="Hello! I'm Andrew, an undergraduate studying Computer Science (course 6) and Mathematics (course 18) at MIT."}=e,{url:u="https://www.azliu.cc"}=e,{imageUrl:r="https://www.azliu.cc/assets/favicons/favicon.ico"}=e,{siteName:i="Andrew Liu"}=e;return s.$$set=a=>{"title"in a&&n(0,t=a.title),"description"in a&&n(1,l=a.description),"url"in a&&n(2,u=a.url),"imageUrl"in a&&n(3,r=a.imageUrl),"siteName"in a&&n(4,i=a.siteName)},[t,l,u,r,i]}class Ce extends U{constructor(e){super(),q(this,e,Ae,Me,x,{title:0,description:1,url:2,imageUrl:3,siteName:4})}}function Z(s){let e,n,t,l,u,r,i,a,d;const b=s[2].default,w=ne(b,s,s[1],null);return{c(){e=v("main"),n=v("div"),t=v("div"),l=v("div"),w&&w.c(),u=N(),r=v("div"),this.h()},l(h){e=g(h,"MAIN",{});var p=A(e);n=g(p,"DIV",{class:!0});var k=A(n);t=g(k,"DIV",{class:!0});var f=A(t);l=g(f,"DIV",{class:!0});var c=A(l);w&&w.l(c),c.forEach(m),f.forEach(m),k.forEach(m),u=S(p),r=g(p,"DIV",{class:!0}),A(r).forEach(m),p.forEach(m),this.h()},h(){o(l,"class","w-full px-6 text-lg"),o(t,"class","w-[732px] p-0 max-md:mt-[-4rem]"),o(n,"class","flex justify-center"),o(r,"class","mb-8")},m(h,p){C(h,e,p),y(e,n),y(n,t),y(t,l),w&&w.m(l,null),y(e,u),y(e,r),d=!0},p(h,p){w&&w.p&&(!d||p&2)&&re(w,b,h,h[1],d?oe(b,h[1],p,null):ae(h[1]),null)},i(h){d||(V(w,h),h&&le(()=>{d&&(a&&a.end(1),i=ce(e,J,{x:-10,duration:200,delay:200}),i.start())}),d=!0)},o(h){j(w,h),i&&i.invalidate(),h&&(a=ue(e,J,{y:5,duration:200})),d=!1},d(h){h&&m(e),w&&w.d(h),h&&a&&a.end()}}}function Ie(s){let e,n,t,l="",u,r,i=`window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-XN7F4CTMD0");`,a,d,b,w=s[0].pathname,h,p;e=new Ce({}),d=new Te({});let k=Z(s);return{c(){G(e.$$.fragment),n=N(),t=v("script"),t.innerHTML=l,r=v("script"),r.textContent=i,a=N(),G(d.$$.fragment),b=N(),k.c(),h=L(),this.h()},l(f){X(e.$$.fragment,f),n=S(f);const c=$("svelte-1iiclzj",document.head);t=g(c,"SCRIPT",{src:!0,"data-svelte-h":!0}),z(t)!=="svelte-9c8lqg"&&(t.innerHTML=l),r=g(c,"SCRIPT",{"data-svelte-h":!0}),z(r)!=="svelte-mxg97k"&&(r.textContent=i),c.forEach(m),a=S(f),X(d.$$.fragment,f),b=S(f),k.l(f),h=L(),this.h()},h(){t.async=!0,te(t.src,u="https://www.googletagmanager.com/gtag/js?id=G-XN7F4CTMD0")||o(t,"src",u)},m(f,c){K(e,f,c),C(f,n,c),y(document.head,t),y(document.head,r),C(f,a,c),K(d,f,c),C(f,b,c),k.m(f,c),C(f,h,c),p=!0},p(f,[c]){c&1&&x(w,w=f[0].pathname)?(me(),j(k,1,1,I),ie(),k=Z(f),k.c(),V(k,1),k.m(h.parentNode,h)):k.p(f,c)},i(f){p||(V(e.$$.fragment,f),V(d.$$.fragment,f),V(k),p=!0)},o(f){j(e.$$.fragment,f),j(d.$$.fragment,f),j(k),p=!1},d(f){f&&(m(n),m(a),m(b),m(h)),W(e,f),m(t),m(r),W(d,f),k.d(f)}}}function De(s,e,n){let{$$slots:t={},$$scope:l}=e,{data:u}=e;return s.$$set=r=>{"data"in r&&n(0,u=r.data),"$$scope"in r&&n(1,l=r.$$scope)},[u,l,t]}class ze extends U{constructor(e){super(),q(this,e,De,Ie,x,{data:0})}}export{ze as component,Se as universal};
