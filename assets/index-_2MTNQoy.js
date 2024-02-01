var Se=Object.defineProperty;var Be=(t,e,n)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>(Be(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function U(){}function S(t,e){for(const n in e)t[n]=e[n];return t}function $e(t){return t()}function de(){return Object.create(null)}function q(t){t.forEach($e)}function ye(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ke(t){return Object.keys(t).length===0}function Le(t,e,n,r){if(t){const o=we(t,e,n,r);return t[0](o)}}function we(t,e,n,r){return t[1]&&r?S(n.ctx.slice(),t[1](r(e))):n.ctx}function Oe(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(e.dirty.length,o.length);for(let c=0;c<s;c+=1)i[c]=e.dirty[c]|o[c];return i}return e.dirty|o}return e.dirty}function Pe(t,e,n,r,o,i){if(o){const s=we(e,n,r,i);t.p(s,o)}}function Ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function H(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function f(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function je(){return b("")}function z(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ae(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let ie;function R(t){ie=t}const P=[],_e=[];let j=[];const ge=[],Ce=Promise.resolve();let re=!1;function Ie(){re||(re=!0,Ce.then(be))}function oe(t){j.push(t)}const te=new Set;let O=0;function be(){if(O!==0)return;const t=ie;do{try{for(;O<P.length;){const e=P[O];O++,R(e),Me(e.$$)}}catch(e){throw P.length=0,O=0,e}for(R(null),P.length=0,O=0;_e.length;)_e.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];te.has(n)||(te.add(n),n())}j.length=0}while(P.length);for(;ge.length;)ge.pop()();re=!1,te.clear(),R(t)}function Me(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Fe(t){const e=[],n=[];j.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),j=e}const G=new Set;let ze;function $(t,e){t&&t.i&&(G.delete(t),t.i(e))}function v(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),ze.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ve(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const l in s)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);t[i]=c}else for(const l in s)o[l]=1}for(const s in r)s in n||(n[s]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function N(t){t&&t.c()}function x(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),oe(()=>{const i=t.$$.on_mount.map($e).filter(ye);t.$$.on_destroy?t.$$.on_destroy.push(...i):q(i),t.$$.on_mount=[]}),o.forEach(oe)}function E(t,e){const n=t.$$;n.fragment!==null&&(Fe(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(t,e){t.$$.dirty[0]===-1&&(P.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,o,i,s=null,c=[-1]){const l=ie;R(t);const u=t.$$={fragment:null,ctx:[],props:i,update:U,not_equal:o,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:de(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let C=!1;if(u.ctx=n?n(t,e.props||{},(d,I,...m)=>{const h=m.length?m[0]:I;return u.ctx&&o(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),C&&Re(t,d)),I}):[],u.update(),C=!0,q(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=Ae(e.target);u.fragment&&u.fragment.l(d),d.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&$(t.$$.fragment),x(t,e.target,e.anchor),be()}R(l)}class X{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){E(this,1),this.$destroy=U}$on(e,n){if(!ye(n))return U;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);function he(t){let e,n;return{c(){e=Q("title"),n=b(t[0])},m(r,o){D(r,e,o),f(e,n)},p(r,o){o&1&&ne(n,r[0])},d(r){r&&A(e)}}}function qe(t){let e,n,r,o=t[0]&&he(t);const i=t[3].default,s=Le(i,t,t[2],null);return{c(){e=Q("svg"),o&&o.c(),n=je(),s&&s.c(),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox",t[1]),g(e,"class","svelte-c8tyih")},m(c,l){D(c,e,l),o&&o.m(e,null),f(e,n),s&&s.m(e,null),r=!0},p(c,[l]){c[0]?o?o.p(c,l):(o=he(c),o.c(),o.m(e,n)):o&&(o.d(1),o=null),s&&s.p&&(!r||l&4)&&Pe(s,i,c,c[2],r?Oe(i,c[2],l,null):Ne(c[2]),null),(!r||l&2)&&g(e,"viewBox",c[1])},i(c){r||($(s,c),r=!0)},o(c){v(s,c),r=!1},d(c){c&&A(e),o&&o.d(),s&&s.d(c)}}}function De(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:i=null}=e,{viewBox:s}=e;return t.$$set=c=>{"title"in c&&n(0,i=c.title),"viewBox"in c&&n(1,s=c.viewBox),"$$scope"in c&&n(2,o=c.$$scope)},[i,s,o,r]}class Ee extends X{constructor(e){super(),W(this,e,De,qe,J,{title:0,viewBox:1})}}function Ke(t){let e;return{c(){e=Q("path"),g(e,"d","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z")},m(n,r){D(n,e,r)},p:U,d(n){n&&A(e)}}}function Te(t){let e,n;const r=[{viewBox:"0 0 320 512"},t[0]];let o={$$slots:{default:[Ke]},$$scope:{ctx:t}};for(let i=0;i<r.length;i+=1)o=S(o,r[i]);return e=new Ee({props:o}),{c(){N(e.$$.fragment)},m(i,s){x(e,i,s),n=!0},p(i,[s]){const c=s&1?ve(r,[r[0],xe(i[0])]):{};s&2&&(c.$$scope={dirty:s,ctx:i}),e.$set(c)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function Ve(t,e,n){return t.$$set=r=>{n(0,e=S(S({},e),H(r)))},e=H(e),[e]}class me extends X{constructor(e){super(),W(this,e,Ve,Te,J,{})}}function Ge(t){let e;return{c(){e=Q("path"),g(e,"d","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z")},m(n,r){D(n,e,r)},p:U,d(n){n&&A(e)}}}function He(t){let e,n;const r=[{viewBox:"0 0 320 512"},t[0]];let o={$$slots:{default:[Ge]},$$scope:{ctx:t}};for(let i=0;i<r.length;i+=1)o=S(o,r[i]);return e=new Ee({props:o}),{c(){N(e.$$.fragment)},m(i,s){x(e,i,s),n=!0},p(i,[s]){const c=s&1?ve(r,[r[0],xe(i[0])]):{};s&2&&(c.$$scope={dirty:s,ctx:i}),e.$set(c)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function Je(t,e,n){return t.$$set=r=>{n(0,e=S(S({},e),H(r)))},e=H(e),[e]}class pe extends X{constructor(e){super(),W(this,e,Je,He,J,{})}}function Qe(t){let e,n,r,o,i,s,c,l,u,C,d,I,m,h,ce,p,M,B,se,K,le,Y,fe,F,k,ue,T,L,Z,ae;return c=new me({}),h=new pe({}),B=new me({}),k=new pe({}),{c(){e=_("div"),n=_("p"),n.textContent="Score",r=y(),o=_("div"),i=_("div"),s=_("button"),N(c.$$.fragment),l=y(),u=_("h2"),C=b("P1: "),d=b(t[0]),I=y(),m=_("button"),N(h.$$.fragment),ce=y(),p=_("div"),M=_("button"),N(B.$$.fragment),se=y(),K=_("h2"),le=b("P2: "),Y=b(t[1]),fe=y(),F=_("button"),N(k.$$.fragment),ue=y(),T=_("button"),T.textContent="Reset",g(s,"class","icon svelte-15hn325"),g(m,"class","icon svelte-15hn325"),w(i,"margin","8px"),g(M,"class","icon svelte-15hn325"),g(F,"class","icon svelte-15hn325"),w(p,"margin","8px"),g(o,"id","parent"),w(o,"display","flex"),w(o,"flex-direction","row"),w(o,"justify-content","center"),w(e,"padding","8px"),w(e,"min-width","320px")},m(a,V){D(a,e,V),f(e,n),f(e,r),f(e,o),f(o,i),f(i,s),x(c,s,null),f(i,l),f(i,u),f(u,C),f(u,d),f(i,I),f(i,m),x(h,m,null),f(o,ce),f(o,p),f(p,M),x(B,M,null),f(p,se),f(p,K),f(K,le),f(K,Y),f(p,fe),f(p,F),x(k,F,null),f(e,ue),f(e,T),L=!0,Z||(ae=[z(s,"click",t[4]),z(m,"click",t[5]),z(M,"click",t[2]),z(F,"click",t[3]),z(T,"click",t[6])],Z=!0)},p(a,[V]){(!L||V&1)&&ne(d,a[0]),(!L||V&2)&&ne(Y,a[1])},i(a){L||($(c.$$.fragment,a),$(h.$$.fragment,a),$(B.$$.fragment,a),$(k.$$.fragment,a),L=!0)},o(a){v(c.$$.fragment,a),v(h.$$.fragment,a),v(B.$$.fragment,a),v(k.$$.fragment,a),L=!1},d(a){a&&A(e),E(c),E(h),E(B),E(k),Z=!1,q(ae)}}}function We(t,e,n){let r=0,o=0;function i(){n(1,o+=1)}function s(){o>0&&n(1,o-=1)}function c(){n(0,r+=1)}function l(){r>0&&n(0,r-=1)}function u(){n(0,r=0),n(1,o=0)}return[r,o,i,s,c,l,u]}class Xe extends X{constructor(e){super(),W(this,e,We,Qe,J,{})}}new Xe({target:document.getElementById("app")});
