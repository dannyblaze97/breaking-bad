(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(16),s=c.n(a),i=c(7),j=c.n(i),d=c(17),o=c(3),b=(c(24),c.p+"static/media/logo.e6ecab44.png"),u=c(0),l=function(){return Object(u.jsx)("header",{className:"center",children:Object(u.jsx)("img",{src:b,alt:""})})},O=c(18),h=c.n(O),x=function(e){var t=e.item;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-inner",children:[Object(u.jsx)("div",{className:"card-front",children:Object(u.jsx)("img",{src:t.img,alt:" not found"})}),Object(u.jsxs)("div",{className:"card-back",children:[Object(u.jsx)("h1",{children:t.name}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},m=c.p+"static/media/spinner.11d9cde8.gif",f=function(){return Object(u.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},p=function(e){var t=e.items;return e.isLoading?Object(u.jsx)(f,{}):Object(u.jsx)("section",{className:"cards",children:t.map((function(e){return Object(u.jsx)(x,{item:e},e.char_id)}))})},g=function(e){var t=e.getQuery,c=Object(n.useState)(""),r=Object(o.a)(c,2),a=r[0],s=r[1];return Object(u.jsx)("section",{className:"search",children:Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Search charcters",value:a,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})},v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(o.a)(a,2),i=s[0],b=s[1],O=Object(n.useState)(""),x=Object(o.a)(O,2),m=x[0],f=x[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,r(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(l,{}),Object(u.jsx)(g,{getQuery:function(e){return f(e)}}),Object(u.jsx)(p,{isLoading:i,items:c})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4bad556a.chunk.js.map