"use strict";(self.webpackChunkipydatagrid=self.webpackChunkipydatagrid||[]).push([[130],{8419:(t,n,r)=>{r.d(n,{H:()=>o,L:()=>e});class e extends Map{constructor(t,n=l){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(f(this,t))}has(t){return super.has(f(this,t))}set(t,n){return super.set(i(this,t),n)}delete(t){return super.delete(u(this,t))}}class o extends Set{constructor(t,n=l){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const n of t)this.add(n)}has(t){return super.has(f(this,t))}add(t){return super.add(i(this,t))}delete(t){return super.delete(u(this,t))}}function f({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):r}function i({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):(t.set(e,r),r)}function u({_intern:t,_key:n},r){const e=n(r);return t.has(e)&&(r=t.get(e),t.delete(e)),r}function l(t){return null!==t&&"object"==typeof t?t.valueOf():t}},6130:(t,n,r)=>{function e(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function o(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function f(t){let n,r,f;function u(t,e,o=0,f=t.length){if(o<f){if(0!==n(e,e))return f;do{const n=o+f>>>1;r(t[n],e)<0?o=n+1:f=n}while(o<f)}return o}return 2!==t.length?(n=e,r=(n,r)=>e(t(n),r),f=(n,r)=>t(n)-r):(n=t===e||t===o?t:i,r=t,f=t),{left:u,center:function(t,n,r=0,e=t.length){const o=u(t,n,r,e-1);return o>r&&f(t[o-1],n)>-f(t[o],n)?o-1:o},right:function(t,e,o=0,f=t.length){if(o<f){if(0!==n(e,e))return f;do{const n=o+f>>>1;r(t[n],e)<=0?o=n+1:f=n}while(o<f)}return o}}}function i(){return 0}function u(t){return null===t?NaN:+t}function*l(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let r=-1;for(let e of t)null!=(e=n(e,++r,t))&&(e=+e)>=e&&(yield e)}}r.r(n),r.d(n,{Adder:()=>I,InternMap:()=>j.L,InternSet:()=>j.H,ascending:()=>e,bin:()=>ct,bisect:()=>d,bisectCenter:()=>h,bisectLeft:()=>s,bisectRight:()=>a,bisector:()=>f,blur:()=>p,blur2:()=>y,blurImage:()=>m,count:()=>b,cross:()=>E,cumsum:()=>_,descending:()=>o,deviation:()=>S,difference:()=>Qt,disjoint:()=>Vt,every:()=>zt,extent:()=>F,fcumsum:()=>q,filter:()=>Gt,flatGroup:()=>C,flatRollup:()=>U,fsum:()=>T,greatest:()=>mt,greatestIndex:()=>jt,group:()=>R,groupSort:()=>X,groups:()=>O,histogram:()=>ct,index:()=>D,indexes:()=>G,intersection:()=>Wt,least:()=>Tt,leastIndex:()=>qt,map:()=>Bt,max:()=>at,maxIndex:()=>st,mean:()=>At,median:()=>xt,medianIndex:()=>Nt,merge:()=>Et,min:()=>ht,minIndex:()=>dt,mode:()=>_t,nice:()=>ut,pairs:()=>kt,permute:()=>K,quantile:()=>gt,quantileIndex:()=>Mt,quantileSorted:()=>vt,quickselect:()=>pt,range:()=>Ft,rank:()=>It,reduce:()=>Jt,reverse:()=>Kt,rollup:()=>P,rollups:()=>z,scan:()=>Ht,shuffle:()=>Rt,shuffler:()=>Ot,some:()=>Dt,sort:()=>Q,subset:()=>$t,sum:()=>Lt,superset:()=>Yt,thresholdFreedmanDiaconis:()=>wt,thresholdScott:()=>bt,thresholdSturges:()=>lt,tickIncrement:()=>ft,tickStep:()=>it,ticks:()=>ot,transpose:()=>Ct,union:()=>tn,variance:()=>k,zip:()=>Pt});const c=f(e),a=c.right,s=c.left,h=f(u).center,d=a;function p(t,n){if(!((n=+n)>=0))throw new RangeError("invalid r");let r=t.length;if(!((r=Math.floor(r))>=0))throw new RangeError("invalid length");if(!r||!n)return t;const e=w(n),o=t.slice();return e(t,o,0,r,1),e(o,t,0,r,1),e(t,o,0,r,1),t}const y=g(w),m=g((function(t){const n=w(t);return(t,r,e,o,f)=>{n(t,r,0+(e<<=2),0+(o<<=2),f<<=2),n(t,r,e+1,o+1,f),n(t,r,e+2,o+2,f),n(t,r,e+3,o+3,f)}}));function g(t){return function(n,r,e=r){if(!((r=+r)>=0))throw new RangeError("invalid rx");if(!((e=+e)>=0))throw new RangeError("invalid ry");let{data:o,width:f,height:i}=n;if(!((f=Math.floor(f))>=0))throw new RangeError("invalid width");if(!((i=Math.floor(void 0!==i?i:o.length/f))>=0))throw new RangeError("invalid height");if(!f||!i||!r&&!e)return n;const u=r&&t(r),l=e&&t(e),c=o.slice();return u&&l?(v(u,c,o,f,i),v(u,o,c,f,i),v(u,c,o,f,i),M(l,o,c,f,i),M(l,c,o,f,i),M(l,o,c,f,i)):u?(v(u,o,c,f,i),v(u,c,o,f,i),v(u,o,c,f,i)):l&&(M(l,o,c,f,i),M(l,c,o,f,i),M(l,o,c,f,i)),n}}function v(t,n,r,e,o){for(let f=0,i=e*o;f<i;)t(n,r,f,f+=e,1)}function M(t,n,r,e,o){for(let f=0,i=e*o;f<e;++f)t(n,r,f,f+i,e)}function w(t){const n=Math.floor(t);if(n===t)return function(t){const n=2*t+1;return(r,e,o,f,i)=>{if(!((f-=i)>=o))return;let u=t*e[o];const l=i*t;for(let t=o,n=o+l;t<n;t+=i)u+=e[Math.min(f,t)];for(let t=o,c=f;t<=c;t+=i)u+=e[Math.min(f,t+l)],r[t]=u/n,u-=e[Math.max(o,t-l)]}}(t);const r=t-n,e=2*t+1;return(t,o,f,i,u)=>{if(!((i-=u)>=f))return;let l=n*o[f];const c=u*n,a=c+u;for(let t=f,n=f+c;t<n;t+=u)l+=o[Math.min(i,t)];for(let n=f,s=i;n<=s;n+=u)l+=o[Math.min(i,n+c)],t[n]=(l+r*(o[Math.max(f,n-a)]+o[Math.min(i,n+a)]))/e,l-=o[Math.max(f,n-c)]}}function b(t,n){let r=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&++r;else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(o=+o)>=o&&++r}return r}function A(t){return 0|t.length}function x(t){return!(t>0)}function N(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function E(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),r=(t=t.map(N)).map(A),e=t.length-1,o=new Array(e+1).fill(0),f=[];if(e<0||r.some(x))return f;for(;;){f.push(o.map(((n,r)=>t[r][n])));let i=e;for(;++o[i]===r[i];){if(0===i)return n?f.map(n):f;o[i--]=0}}}function _(t,n){var r=0,e=0;return Float64Array.from(t,void 0===n?t=>r+=+t||0:o=>r+=+n(o,e++,t)||0)}function k(t,n){let r,e=0,o=0,f=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(r=n-o,o+=r/++e,f+=r*(n-o));else{let i=-1;for(let u of t)null!=(u=n(u,++i,t))&&(u=+u)>=u&&(r=u-o,o+=r/++e,f+=r*(u-o))}if(e>1)return f/(e-1)}function S(t,n){const r=k(t,n);return r?Math.sqrt(r):r}function F(t,n){let r,e;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=e=n):(r>n&&(r=n),e<n&&(e=n)));else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(void 0===r?f>=f&&(r=e=f):(r>f&&(r=f),e<f&&(e=f)))}return[r,e]}class I{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let e=0;e<this._n&&e<32;e++){const o=n[e],f=t+o,i=Math.abs(t)<Math.abs(o)?t-(f-o):o-(f-t);i&&(n[r++]=i),t=f}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n,r,e,o=this._n,f=0;if(o>0){for(f=t[--o];o>0&&(n=f,r=t[--o],f=n+r,e=r-(f-n),!e););o>0&&(e<0&&t[o-1]<0||e>0&&t[o-1]>0)&&(r=2*e,n=f+r,r==n-f&&(f=n))}return f}}function T(t,n){const r=new I;if(void 0===n)for(let n of t)(n=+n)&&r.add(n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&r.add(o)}return+r}function q(t,n){const r=new I;let e=-1;return Float64Array.from(t,void 0===n?t=>r.add(+t||0):o=>r.add(+n(o,++e,t)||0))}var j=r(8419);function H(t){return t}function R(t,...n){return J(t,H,H,n)}function O(t,...n){return J(t,Array.from,H,n)}function L(t,n){for(let r=1,e=n.length;r<e;++r)t=t.flatMap((t=>t.pop().map((([n,r])=>[...t,n,r]))));return t}function C(t,...n){return L(O(t,...n),n)}function U(t,n,...r){return L(z(t,n,...r),r)}function P(t,n,...r){return J(t,H,n,r)}function z(t,n,...r){return J(t,Array.from,n,r)}function D(t,...n){return J(t,H,B,n)}function G(t,...n){return J(t,Array.from,B,n)}function B(t){if(1!==t.length)throw new Error("duplicate key");return t[0]}function J(t,n,r,e){return function t(o,f){if(f>=e.length)return r(o);const i=new j.L,u=e[f++];let l=-1;for(const t of o){const n=u(t,++l,o),r=i.get(n);r?r.push(t):i.set(n,[t])}for(const[n,r]of i)i.set(n,t(r,f));return n(i)}(t,0)}function K(t,n){return Array.from(n,(n=>t[n]))}function Q(t,...n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[r]=n;if(r&&2!==r.length||n.length>1){const e=Uint32Array.from(t,((t,n)=>n));return n.length>1?(n=n.map((n=>t.map(n))),e.sort(((t,r)=>{for(const e of n){const n=W(e[t],e[r]);if(n)return n}}))):(r=t.map(r),e.sort(((t,n)=>W(r[t],r[n])))),K(t,e)}return t.sort(V(r))}function V(t=e){if(t===e)return W;if("function"!=typeof t)throw new TypeError("compare is not a function");return(n,r)=>{const e=t(n,r);return e||0===e?e:(0===t(r,r))-(0===t(n,n))}}function W(t,n){return(null==t||!(t>=t))-(null==n||!(n>=n))||(t<n?-1:t>n?1:0)}function X(t,n,r){return(2!==n.length?Q(P(t,n,r),(([t,n],[r,o])=>e(n,o)||e(t,r))):Q(R(t,r),(([t,r],[o,f])=>n(r,f)||e(t,o)))).map((([t])=>t))}var Y=Array.prototype,Z=Y.slice;function $(t){return()=>t}Y.map;const tt=Math.sqrt(50),nt=Math.sqrt(10),rt=Math.sqrt(2);function et(t,n,r){const e=(n-t)/Math.max(0,r),o=Math.floor(Math.log10(e)),f=e/Math.pow(10,o),i=f>=tt?10:f>=nt?5:f>=rt?2:1;let u,l,c;return o<0?(c=Math.pow(10,-o)/i,u=Math.round(t*c),l=Math.round(n*c),u/c<t&&++u,l/c>n&&--l,c=-c):(c=Math.pow(10,o)*i,u=Math.round(t/c),l=Math.round(n/c),u*c<t&&++u,l*c>n&&--l),l<u&&.5<=r&&r<2?et(t,n,2*r):[u,l,c]}function ot(t,n,r){if(!((r=+r)>0))return[];if((t=+t)==(n=+n))return[t];const e=n<t,[o,f,i]=e?et(n,t,r):et(t,n,r);if(!(f>=o))return[];const u=f-o+1,l=new Array(u);if(e)if(i<0)for(let t=0;t<u;++t)l[t]=(f-t)/-i;else for(let t=0;t<u;++t)l[t]=(f-t)*i;else if(i<0)for(let t=0;t<u;++t)l[t]=(o+t)/-i;else for(let t=0;t<u;++t)l[t]=(o+t)*i;return l}function ft(t,n,r){return et(t=+t,n=+n,r=+r)[2]}function it(t,n,r){r=+r;const e=(n=+n)<(t=+t),o=e?ft(n,t,r):ft(t,n,r);return(e?-1:1)*(o<0?1/-o:o)}function ut(t,n,r){let e;for(;;){const o=ft(t,n,r);if(o===e||0===o||!isFinite(o))return[t,n];o>0?(t=Math.floor(t/o)*o,n=Math.ceil(n/o)*o):o<0&&(t=Math.ceil(t*o)/o,n=Math.floor(n*o)/o),e=o}}function lt(t){return Math.max(1,Math.ceil(Math.log(b(t))/Math.LN2)+1)}function ct(){var t=H,n=F,r=lt;function e(e){Array.isArray(e)||(e=Array.from(e));var o,f,i,u=e.length,l=new Array(u);for(o=0;o<u;++o)l[o]=t(e[o],o,e);var c=n(l),a=c[0],s=c[1],h=r(l,a,s);if(!Array.isArray(h)){const t=s,r=+h;if(n===F&&([a,s]=ut(a,s,r)),(h=ot(a,s,r))[0]<=a&&(i=ft(a,s,r)),h[h.length-1]>=s)if(t>=s&&n===F){const t=ft(a,s,r);isFinite(t)&&(t>0?s=(Math.floor(s/t)+1)*t:t<0&&(s=(Math.ceil(s*-t)+1)/-t))}else h.pop()}for(var p=h.length,y=0,m=p;h[y]<=a;)++y;for(;h[m-1]>s;)--m;(y||m<p)&&(h=h.slice(y,m),p=m-y);var g,v=new Array(p+1);for(o=0;o<=p;++o)(g=v[o]=[]).x0=o>0?h[o-1]:a,g.x1=o<p?h[o]:s;if(isFinite(i)){if(i>0)for(o=0;o<u;++o)null!=(f=l[o])&&a<=f&&f<=s&&v[Math.min(p,Math.floor((f-a)/i))].push(e[o]);else if(i<0)for(o=0;o<u;++o)if(null!=(f=l[o])&&a<=f&&f<=s){const t=Math.floor((a-f)*i);v[Math.min(p,t+(h[t]<=f))].push(e[o])}}else for(o=0;o<u;++o)null!=(f=l[o])&&a<=f&&f<=s&&v[d(h,f,0,p)].push(e[o]);return v}return e.value=function(n){return arguments.length?(t="function"==typeof n?n:$(n),e):t},e.domain=function(t){return arguments.length?(n="function"==typeof t?t:$([t[0],t[1]]),e):n},e.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:$(Array.isArray(t)?Z.call(t):t),e):r},e}function at(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r<o||void 0===r&&o>=o)&&(r=o)}return r}function st(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r<n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r<f||void 0===r&&f>=f)&&(r=f,e=o);return e}function ht(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r>n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r>o||void 0===r&&o>=o)&&(r=o)}return r}function dt(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r>n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r>f||void 0===r&&f>=f)&&(r=f,e=o);return e}function pt(t,n,r=0,e=1/0,o){if(n=Math.floor(n),r=Math.floor(Math.max(0,r)),e=Math.floor(Math.min(t.length-1,e)),!(r<=n&&n<=e))return t;for(o=void 0===o?W:V(o);e>r;){if(e-r>600){const f=e-r+1,i=n-r+1,u=Math.log(f),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(f-l)/f)*(i-f/2<0?-1:1);pt(t,n,Math.max(r,Math.floor(n-i*l/f+c)),Math.min(e,Math.floor(n+(f-i)*l/f+c)),o)}const f=t[n];let i=r,u=e;for(yt(t,r,n),o(t[e],f)>0&&yt(t,r,e);i<u;){for(yt(t,i,u),++i,--u;o(t[i],f)<0;)++i;for(;o(t[u],f)>0;)--u}0===o(t[r],f)?yt(t,r,u):(++u,yt(t,u,e)),u<=n&&(r=u+1),n<=u&&(e=u-1)}return t}function yt(t,n,r){const e=t[n];t[n]=t[r],t[r]=e}function mt(t,n=e){let r,o=!1;if(1===n.length){let f;for(const i of t){const t=n(i);(o?e(t,f)>0:0===e(t,t))&&(r=i,f=t,o=!0)}}else for(const e of t)(o?n(e,r)>0:0===n(e,e))&&(r=e,o=!0);return r}function gt(t,n,r){if((e=(t=Float64Array.from(l(t,r))).length)&&!isNaN(n=+n)){if(n<=0||e<2)return ht(t);if(n>=1)return at(t);var e,o=(e-1)*n,f=Math.floor(o),i=at(pt(t,f).subarray(0,f+1));return i+(ht(t.subarray(f+1))-i)*(o-f)}}function vt(t,n,r=u){if((e=t.length)&&!isNaN(n=+n)){if(n<=0||e<2)return+r(t[0],0,t);if(n>=1)return+r(t[e-1],e-1,t);var e,o=(e-1)*n,f=Math.floor(o),i=+r(t[f],f,t);return i+(+r(t[f+1],f+1,t)-i)*(o-f)}}function Mt(t,n,r){if((e=(t=Float64Array.from(l(t,r))).length)&&!isNaN(n=+n)){if(n<=0||e<2)return dt(t);if(n>=1)return st(t);var e,o=Math.floor((e-1)*n),f=pt(Uint32Array.from(t,((t,n)=>n)),o,0,e-1,((n,r)=>W(t[n],t[r])));return mt(f.subarray(0,o+1),(n=>t[n]))}}function wt(t,n,r){const e=b(t),o=gt(t,.75)-gt(t,.25);return e&&o?Math.ceil((r-n)/(2*o*Math.pow(e,-1/3))):1}function bt(t,n,r){const e=b(t),o=S(t);return e&&o?Math.ceil((r-n)*Math.cbrt(e)/(3.49*o)):1}function At(t,n){let r=0,e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,e+=n);else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(f=+f)>=f&&(++r,e+=f)}if(r)return e/r}function xt(t,n){return gt(t,.5,n)}function Nt(t,n){return Mt(t,.5,n)}function Et(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function _t(t,n){const r=new j.L;if(void 0===n)for(let n of t)null!=n&&n>=n&&r.set(n,(r.get(n)||0)+1);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&o>=o&&r.set(o,(r.get(o)||0)+1)}let e,o=0;for(const[t,n]of r)n>o&&(o=n,e=t);return e}function kt(t,n=St){const r=[];let e,o=!1;for(const f of t)o&&r.push(n(e,f)),e=f,o=!0;return r}function St(t,n){return[t,n]}function Ft(t,n,r){t=+t,n=+n,r=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+r;for(var e=-1,o=0|Math.max(0,Math.ceil((n-t)/r)),f=new Array(o);++e<o;)f[e]=t+e*r;return f}function It(t,n=e){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");let r=Array.from(t);const o=new Float64Array(r.length);2!==n.length&&(r=r.map(n),n=e);const f=(t,e)=>n(r[t],r[e]);let i,u;return(t=Uint32Array.from(r,((t,n)=>n))).sort(n===e?(t,n)=>W(r[t],r[n]):V(f)),t.forEach(((t,n)=>{const r=f(t,void 0===i?t:i);r>=0?((void 0===i||r>0)&&(i=t,u=n),o[t]=u):o[t]=NaN})),o}function Tt(t,n=e){let r,o=!1;if(1===n.length){let f;for(const i of t){const t=n(i);(o?e(t,f)<0:0===e(t,t))&&(r=i,f=t,o=!0)}}else for(const e of t)(o?n(e,r)<0:0===n(e,e))&&(r=e,o=!0);return r}function qt(t,n=e){if(1===n.length)return dt(t,n);let r,o=-1,f=-1;for(const e of t)++f,(o<0?0===n(e,e):n(e,r)<0)&&(r=e,o=f);return o}function jt(t,n=e){if(1===n.length)return st(t,n);let r,o=-1,f=-1;for(const e of t)++f,(o<0?0===n(e,e):n(e,r)>0)&&(r=e,o=f);return o}function Ht(t,n){const r=qt(t,n);return r<0?void 0:r}const Rt=Ot(Math.random);function Ot(t){return function(n,r=0,e=n.length){let o=e-(r=+r);for(;o;){const e=t()*o--|0,f=n[o+r];n[o+r]=n[e+r],n[e+r]=f}return n}}function Lt(t,n){let r=0;if(void 0===n)for(let n of t)(n=+n)&&(r+=n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&(r+=o)}return r}function Ct(t){if(!(o=t.length))return[];for(var n=-1,r=ht(t,Ut),e=new Array(r);++n<r;)for(var o,f=-1,i=e[n]=new Array(o);++f<o;)i[f]=t[f][n];return e}function Ut(t){return t.length}function Pt(){return Ct(arguments)}function zt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(!n(e,++r,t))return!1;return!0}function Dt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(n(e,++r,t))return!0;return!1}function Gt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");const r=[];let e=-1;for(const o of t)n(o,++e,t)&&r.push(o);return r}function Bt(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");if("function"!=typeof n)throw new TypeError("mapper is not a function");return Array.from(t,((r,e)=>n(r,e,t)))}function Jt(t,n,r){if("function"!=typeof n)throw new TypeError("reducer is not a function");const e=t[Symbol.iterator]();let o,f,i=-1;if(arguments.length<3){if(({done:o,value:r}=e.next()),o)return;++i}for(;({done:o,value:f}=e.next()),!o;)r=n(r,f,++i,t);return r}function Kt(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()}function Qt(t,...n){t=new j.H(t);for(const r of n)for(const n of r)t.delete(n);return t}function Vt(t,n){const r=n[Symbol.iterator](),e=new j.H;for(const n of t){if(e.has(n))return!1;let t,o;for(;({value:t,done:o}=r.next())&&!o;){if(Object.is(n,t))return!1;e.add(t)}}return!0}function Wt(t,...n){t=new j.H(t),n=n.map(Xt);t:for(const r of t)for(const e of n)if(!e.has(r)){t.delete(r);continue t}return t}function Xt(t){return t instanceof j.H?t:new j.H(t)}function Yt(t,n){const r=t[Symbol.iterator](),e=new Set;for(const t of n){const n=Zt(t);if(e.has(n))continue;let o,f;for(;({value:o,done:f}=r.next());){if(f)return!1;const t=Zt(o);if(e.add(t),Object.is(n,t))break}}return!0}function Zt(t){return null!==t&&"object"==typeof t?t.valueOf():t}function $t(t,n){return Yt(n,t)}function tn(...t){const n=new j.H;for(const r of t)for(const t of r)n.add(t);return n}}}]);