(this["webpackJsonphugglink-v3-frontend"]=this["webpackJsonphugglink-v3-frontend"]||[]).push([[0],{115:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c,a,r,s,o,i=n(0),j=n.n(i),u=n(41),l=n.n(u),p=(n(115),n(14)),b=n.n(p),d=n(19),h=n(13),x=n(16),O=n(20),f=n.n(O),m=n(17),g=n(194),v=n(191),w=n(195),y=n(196),k=n(182),F=n(183),S=n.p+"static/media/logo.3e84a8ee.svg",E=n(28),C=n(175),D=n(192),I=n(99),B=Object(I.a)({palette:{primary:{main:"#0d6efd"},secondary:{main:"#363636"},error:{main:"#dc3545"},warning:{main:"#ffc107"},info:{main:"#f8f9fa"},success:{main:"#28a745"}}}),P=Object(C.a)(D.a)(c||(c=Object(E.a)(["\n  box-shadow: none;\n  position: static;\n  color: ",";\n"])),B.palette.secondary.main),T=n(25),_=Object(C.a)(T.c)(a||(a=Object(E.a)(["\n  font-weight: 400;\n  background: rgb(243, 246, 249);\n  border: 1px solid ",";\n  border-radius: 10px;\n  padding: 6px 10px;\n  &:hover {\n    background: #eaeef3;\n    border-color: #e5e8ec;\n  }\n"])),B.palette.info.dark),L=n(1),J=function(){return Object(L.jsx)(P,{color:"info",children:Object(L.jsx)(g.a,{children:Object(L.jsxs)(v.a,{display:"flex",py:1,children:[Object(L.jsxs)(v.a,{flexGrow:1,children:[Object(L.jsx)(w.a,{component:m.b,to:"/",children:Object(L.jsx)("img",{src:S,alt:"hugg.link logo"})}),Object(L.jsx)(w.a,{color:"secondary",component:m.b,to:"/list/1",children:"\ubaa9\ub85d"}),Object(L.jsx)(w.a,{color:"secondary",component:m.b,to:"/create",children:"\uc0dd\uc131"})]}),Object(L.jsxs)(v.a,{children:[Object(L.jsx)(_,{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694."}),Object(L.jsx)(y.a,{type:"submit","aria-label":"search",children:Object(L.jsx)(k.a,{})}),Object(L.jsx)(y.a,{component:m.b,to:"/users",children:Object(L.jsx)(F.a,{})})]})]})})})},M=n(197),U=n(198),W=function(){var e=Object(i.useState)(null),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("http://3.37.179.184:3030","/pages/list/1"));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsx)(g.a,{children:Object(L.jsx)(M.a,{children:n&&n.map((function(e){return Object(L.jsx)(U.a,{component:m.b,to:"/pages/".concat(e.title),children:e.title},e._id)}))})})},A=n(184),G=n(185),H=n(186),V=n(199),q=Object(C.a)(V.a)(r||(r=Object(E.a)([""]))),z=Object(C.a)(w.a)(s||(s=Object(E.a)(["\n  border: none;\n  color: ",";\n  &:hover {\n    border: none;\n  }\n"])),B.palette.secondary.main),K=function(e){var t=e.title;return Object(L.jsx)(g.a,{children:Object(L.jsx)(v.a,{fullWidth:!0,pt:2,display:"flex",justifyContent:"flex-end",children:Object(L.jsxs)(q,{children:[Object(L.jsxs)(z,{component:m.b,to:"/pages/".concat(t),children:[Object(L.jsx)(A.a,{})," \ub313\uae00"]}),Object(L.jsxs)(z,{component:m.b,to:"/pages/".concat(t,"/history"),children:[Object(L.jsx)(G.a,{})," \uc5ed\uc0ac"]}),Object(L.jsxs)(z,{component:m.b,to:"/pages/".concat(t,"/edit"),children:[Object(L.jsx)(H.a,{})," \ud3b8\uc9d1"]})]})})})},N=n(98),Q=n.n(N),R=function(e){var t=e.match,n=Object(i.useState)(null),c=Object(h.a)(n,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("http://3.37.179.184:3030","/pages/").concat(t.params.title));case 3:n=e.sent,r(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsxs)(g.a,{children:[Object(L.jsx)("img",{src:a&&a.logoUrl,width:200}),Object(L.jsx)("h1",{children:a&&a.title}),Object(L.jsx)("div",{dangerouslySetInnerHTML:{__html:Q()("".concat(a&&a.content))}})]})},X=n(187),Y=function(e){var t=e.match,n=t.params.title,c=Object(i.useState)({}),a=Object(h.a)(c,2),r=a[0],s=a[1],o=Object(i.useState)(null),j=Object(h.a)(o,2),u=j[0],l=j[1],p=Object(x.f)(),O=function(){var e=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),c=new FormData(document.getElementById("editForm")),e.next=5,f.a.patch("".concat("http://3.37.179.184:3030","/pages/").concat(r._id),c,{headers:{"Content-Type":"multipart/form-data"}});case 5:p.push("/pages/".concat(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("http://3.37.179.184:3030","/pages/").concat(t.params.title));case 3:n=e.sent,s(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsxs)(g.a,{children:[Object(L.jsxs)("h1",{children:[n,"\ud3b8\uc9d1"]}),Object(L.jsxs)("form",{onSubmit:O,id:"editForm",children:[Object(L.jsx)("img",{src:r&&r.logoUrl,alt:"logo"}),Object(L.jsx)("img",{src:u,alt:"logoAfter"}),Object(L.jsx)("input",{type:"file",accept:"image/*",name:"file",onChange:function(e){l(e.target.files[0])}}),Object(L.jsx)(X.a,{name:"content",fullWidth:!0,multiline:!0,rows:20,defaultValue:r&&r.content}),Object(L.jsx)(w.a,{type:"submit",variant:"contained",children:"\uc218\uc815 \uc644\ub8cc"})]})]})},Z=function(e){var t=e.match.params.title;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(K,{title:t}),Object(L.jsx)(x.a,{path:"/pages/:title",exact:!0,component:R}),Object(L.jsx)(x.a,{path:"/pages/:title/edit",component:Y}),Object(L.jsx)(x.a,{path:"/pages/:title/history",children:"aaa"})]})},$=Object(C.a)(T.c)(o||(o=Object(E.a)(["\n  border-radius: 10px;\n  padding: 5px 10px 5px 10px;\n  background-color: ",";\n"])),B.palette.info.main),ee=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=(Object(x.f)(),function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=new FormData(document.getElementById("loginForm")),e.next=5,f.a.post("".concat("http://3.37.179.184:3030","/users/login"),n,{withCredentials:!0});case 5:window.location.replace("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(e.t0.response.data.error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());return Object(L.jsxs)(g.a,{children:[n,Object(L.jsx)("h1",{children:"\ub85c\uadf8\uc778"}),Object(L.jsxs)("form",{onSubmit:a,id:"loginForm",children:["\uc774\uba54\uc77c : ",Object(L.jsx)($,{name:"email"}),"\ube44\ubc00\ubc88\ud638 : ",Object(L.jsx)($,{name:"password",type:"password"}),Object(L.jsx)(w.a,{type:"submit",variant:"contained",children:"\ub85c\uadf8\uc778"})]}),Object(L.jsx)(m.b,{to:"/users/signup",children:"\ud68c\uc6d0\uac00\uc785"})]})},te=function(e){Object(x.f)();var t=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat("http://3.37.179.184:3030","/users/logout"),{},{withCredentials:!0});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(g.a,{children:["\ubc18\uac11\uc2b5\ub2c8\ub2e4. ",e.userEmail,"\ub2d8",Object(L.jsx)(m.b,{to:"/users/login",onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]})})},ne=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=new FormData(document.getElementById("signupForm")),e.next=5,f.a.post("".concat("http://3.37.179.184:3030","/users/signup"),n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(g.a,{children:[n,Object(L.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(L.jsxs)("form",{onSubmit:a,id:"signupForm",children:["\uc774\uba54\uc77c : ",Object(L.jsx)($,{name:"email"}),"\ube44\ubc00\ubc88\ud638 :",Object(L.jsx)($,{name:"password",type:"password"}),"\ube44\ubc00\ubc88\ud638 \ud655\uc778 :",Object(L.jsx)($,{name:"passwordCheck",type:"password"}),Object(L.jsx)(w.a,{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})]})]})},ce=function(e){var t=e.userEmail;return t?Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(x.a,{path:"/users",component:function(){return Object(L.jsx)(te,{userEmail:t})}})}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(x.a,{path:"/users",exact:!0,component:ee}),Object(L.jsx)(x.a,{path:"/users/signup",component:ne})]})},ae=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=new FormData(document.getElementById("createPageForm")),e.next=5,f.a.post("".concat("http://3.37.179.184:3030","/pages"),n);case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(e.t0.response.data.error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(g.a,{children:[n,Object(L.jsx)("h1",{children:"\ud398\uc774\uc9c0 \uc0dd\uc131"}),Object(L.jsxs)("form",{onSubmit:a,id:"createPageForm",children:["\ud398\uc774\uc9c0\uba85 : ",Object(L.jsx)($,{name:"title"}),Object(L.jsx)(w.a,{type:"submit",children:"\uc0dd\uc131\uc694\uccad"})]})]})},re=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("http://3.37.179.184:3030","/users"),{withCredentials:!0});case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(J,{}),Object(L.jsxs)(x.c,{children:[Object(L.jsx)(x.a,{path:"/",exact:!0,children:"\ub79c\ub529\ud398\uc774\uc9c0"}),Object(L.jsx)(x.a,{path:"/list",component:W}),Object(L.jsx)(x.a,{path:"/pages/:title",component:Z}),Object(L.jsx)(x.a,{path:"/create",component:ae}),Object(L.jsx)(x.a,{path:"/users",component:function(){return Object(L.jsx)(ce,{userEmail:n&&n})}})]})]})};var se=function(){return Object(L.jsx)(m.a,{children:Object(L.jsx)(re,{})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},ie=n(190);l.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(ie.a,{theme:B,children:Object(L.jsx)(se,{})})}),document.getElementById("root")),oe()}},[[147,1,2]]]);
//# sourceMappingURL=main.c47a226e.chunk.js.map