function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function h(){return d(" ")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let p;function g(e){p=e}const v=[],b=[],y=[],$=[],w=Promise.resolve();let x=!1;function C(e){y.push(e)}let T=!1;const _=new Set;function k(){if(!T){T=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];g(t),A(t.$$)}for(v.length=0;b.length;)b.pop()();for(let e=0;e<y.length;e+=1){const t=y[e];_.has(t)||(_.add(t),t())}y.length=0}while(v.length);for(;$.length;)$.pop()();x=!1,T=!1,_.clear()}}function A(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const E=new Set;function M(e,t){e&&e.i&&(E.delete(e),e.i(t))}function j(e,n,r){const{fragment:i,on_mount:a,on_destroy:c,after_update:l}=e.$$;i&&i.m(n,r),C(()=>{const n=a.map(t).filter(o);c?c.push(...n):s(n),e.$$.on_mount=[]}),l.forEach(C)}function B(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function S(e,t){-1===e.$$.dirty[0]&&(v.push(e),x||(x=!0,w.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,o,r,i,a,c,u=[-1]){const f=p;g(t);const d=o.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let m=!1;if(h.ctx=r?r(t,d,(e,n,...s)=>{const o=s.length?s[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=o)&&(h.bound[e]&&h.bound[e](o),m&&S(t,e)),n}):[],h.update(),m=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&M(t.$$.fragment),j(t,o.target,o.anchor),k()}g(f)}class L{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(e,t,n){const s=e.slice();return s[2]=t[n],s}function K(e,t,n){const s=e.slice();return s[2]=t[n],s}function N(t){let n,s,o,r,u,p,g,v=t[2].title+"",b=t[2].text+"";return{c(){n=f("div"),s=f("h2"),o=d(v),r=h(),u=f("p"),p=d(b),m(u,"contenteditable","true"),m(u,"class","svelte-1bn3a5c"),m(n,"class",g=i(t[2].class)+" svelte-1bn3a5c")},m(e,t){c(e,n,t),a(n,s),a(s,o),a(n,r),a(n,u),a(u,p)},p:e,d(e){e&&l(n)}}}function O(t){let n,s,o,r,u,p,g,v,b=t[2].title+"",y=t[2].text+"";return{c(){n=f("div"),s=f("h2"),o=d(b),r=h(),u=f("p"),p=d(y),g=h(),m(u,"contenteditable","true"),m(u,"class","svelte-1bn3a5c"),m(n,"class",v=i(t[2].class)+" svelte-1bn3a5c")},m(e,t){c(e,n,t),a(n,s),a(s,o),a(n,r),a(n,u),a(u,p),a(n,g)},p:e,d(e){e&&l(n)}}}function P(t){let n,s,o,r=t[0],i=[];for(let e=0;e<r.length;e+=1)i[e]=N(K(t,r,e));let d=t[1],p=[];for(let e=0;e<d.length;e+=1)p[e]=O(H(t,d,e));return{c(){n=f("div");for(let e=0;e<i.length;e+=1)i[e].c();s=h(),o=f("div");for(let e=0;e<p.length;e+=1)p[e].c();m(o,"class","bottom svelte-1bn3a5c"),m(n,"class","canvas svelte-1bn3a5c")},m(e,t){c(e,n,t);for(let e=0;e<i.length;e+=1)i[e].m(n,null);a(n,s),a(n,o);for(let e=0;e<p.length;e+=1)p[e].m(o,null)},p(e,[t]){if(1&t){let o;for(r=e[0],o=0;o<r.length;o+=1){const a=K(e,r,o);i[o]?i[o].p(a,t):(i[o]=N(a),i[o].c(),i[o].m(n,s))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}if(2&t){let n;for(d=e[1],n=0;n<d.length;n+=1){const s=H(e,d,n);p[n]?p[n].p(s,t):(p[n]=O(s),p[n].c(),p[n].m(o,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}},i:e,o:e,d(e){e&&l(n),u(i,e),u(p,e)}}}function R(e){return[[{title:"🤝 Key Partners",text:"In order to optimize operations and reduce risks of a business model,\n        organizations usually cultivate buyer-supplier relationships so they can\n        focus on their core activity. Complementary business alliances also can\n        be considered through joint ventures or strategic alliances between\n        competitors or non-competitors.",class:"key-partners"},{title:"🏃‍♀️ Key Activities",text:" The most important activities in executing a company's value\n        proposition. An example for Bic, the pen manufacturer, would be creating\n        an efficient supply chain to drive down costs.",class:"key-activities"},{title:"🛒 Key Resources",text:"The resources that are necessary to create value for the customer. They\n        are considered assets to a company that are needed to sustain and\n        support the business. These resources could be human, financial,\n        physical and intellectual.",class:"key-resources"},{title:"🎁 Value Propositions",text:'The collection of products and services a business offers to meet the\n        needs of its customers. According to Osterwalder (2004), a company\'s\n        value proposition is what distinguishes it from its competitors. The\n        value proposition provides value through various elements such as\n        newness, performance, customization, "getting the job done", design,\n        brand/status, price, cost reduction, risk reduction, accessibility, and\n        convenience/usability.',class:"value-proposition"},{title:"💕 Customer Relations",text:"To ensure the survival and success of any businesses, companies must\n        identify the type of relationship they want to create with their\n        customer segments. That element should address three critical steps on a\n        customers relationship: How the business will get new customers, how the\n        business will keep customers purchasing or using its services and how\n        the business will grow its revenue from its current customers.",class:"customer-relations"},{title:"🚚 Channels",text:"A company can deliver its value proposition to its targeted customers\n        through different channels. Effective channels will distribute a\n        company's value proposition in ways that are fast, efficient and\n        cost-effective. An organization can reach its clients through its own\n        channels (store front), partner channels (major distributors), or a\n        combination of both.",class:"channels"},{title:"🙋‍♂️ Customer Segments",text:"To build an effective business model, a company must identify which\n        customers it tries to serve. Various sets of customers can be segmented\n        based on their different needs and attributes to ensure appropriate\n        implementation of corporate strategy to meet the characteristics of\n        selected groups of clients.",class:"customer-segments"}],[{title:"💸 Cost Structure",text:"This describes the most important monetary consequences while operating\n            under different business models.",class:"cost-structure"},{title:"💰 Revenue Streams",text:"The way a company makes income from each customer segment.",class:"revenue-streams"}]]}class q extends L{constructor(e){super(),z(this,e,R,P,r,{})}}function V(e){let t,n,s,o,r,i,u,d,p,g;document.title=t=e[0]||"Business Model Canvas Creator";const v=new q({});return{c(){var e;n=h(),s=f("header"),o=f("h1"),o.textContent="Business Model Canvas Creator",r=h(),i=f("p"),i.innerHTML="\n    Just edit the texts and print when you&#39;re done. You can also edit the\n    heading.\n    <br>\n    For printing, set scaling to 55% and format to landscape in your printer\n    settings.\n  ",u=h(),d=f("main"),(e=v.$$.fragment)&&e.c(),m(o,"contenteditable","true"),m(o,"class","svelte-p7w9rt"),m(i,"class","svelte-p7w9rt"),m(s,"class","svelte-p7w9rt")},m(t,l,f){var h,m,b,y;c(t,n,l),c(t,s,l),a(s,o),a(s,r),a(s,i),c(t,u,l),c(t,d,l),j(v,d,null),p=!0,f&&g(),h=o,m="input",b=e[1],h.addEventListener(m,b,y),g=()=>h.removeEventListener(m,b,y)},p(e,[n]){(!p||1&n)&&t!==(t=e[0]||"Business Model Canvas Creator")&&(document.title=t)},i(e){p||(M(v.$$.fragment,e),p=!0)},o(e){!function(e,t,n,s){if(e&&e.o){if(E.has(e))return;E.add(e),(void 0).c.push(()=>{E.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}(v.$$.fragment,e),p=!1},d(e){e&&l(n),e&&l(s),e&&l(u),e&&l(d),B(v),g()}}}function F(e,t,n){let s="";return[s,e=>{n(0,s=e.target.innerHTML)}]}new class extends L{constructor(e){super(),z(this,e,F,V,r,{})}}({target:document.body});
