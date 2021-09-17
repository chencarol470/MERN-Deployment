(this.webpackJsonppets=this.webpackJsonppets||[]).push([[0],{19:function(e,t,n){},36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(29),s=n.n(l),j=(n(36),n(19),n(2)),o=n(4),a=n(10),d=n.n(a),r=n(7),b=n(0),h=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],l=n[1];return Object(c.useEffect)((function(){d.a.get("http://localhost:8000/api/pets").then((function(e){l(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Pet Shelter"})}),Object(b.jsx)("div",{children:Object(b.jsx)(r.b,{to:"/pets/new",children:"Add a pet to the shelter"})})]}),Object(b.jsx)("p",{children:"These pets are looking for a good home "}),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{style:{color:"purple",marginLeft:"600px",display:"center",boxShadow:"initial",padding:"10px",boxborder:"solid, black"},children:[Object(b.jsx)("thead",{style:{backgroundColor:"yellow"},children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:i.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.type}),Object(b.jsx)("td",{children:Object(b.jsxs)("nav",{children:[Object(b.jsx)(r.b,{to:"/pets/".concat(e._id),className:"btn btn-sm btn-outline-warning mx-1",children:"details"})," "," | "," ",Object(b.jsx)(r.b,{to:"/pets/".concat(e._id,"/edit"),className:"btn btn-sm btn-outline-warning mx-1",children:"edit"})]})})]},e._id)}))})]})})]})},O=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],l=Object(j.g)().id,s=Object(j.f)();Object(c.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/"+l).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){return console.error(e)}))}),[l]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(r.b,{to:"/",children:"back to home"})]})}),Object(b.jsxs)("nav",{children:[Object(b.jsxs)("h2",{children:["Details about: ",n.name]}),Object(b.jsxs)("button",{onClick:function(e){var t;t=n._id,d.a.delete("http://localhost:8000/api/pets/".concat(t)).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),s.push("")},children:["Adopt ",n.name]})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Name: ",n.name]}),Object(b.jsxs)("p",{children:["Type: ",n.type]}),Object(b.jsxs)("p",{children:["Description: ",n.description]}),Object(b.jsx)("p",{children:"Skills : "}),Object(b.jsx)("p",{children:n.skill1}),Object(b.jsx)("p",{children:n.skill2}),Object(b.jsx)("p",{children:n.skill3})]}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{onClick:function(e){!function(e){var t={likeCount:e.likeCount+1};d.a.put("http://localhost:8000/api/pets/"+e._id,t).then((function(e){var t=e.data;i(t)})).catch((function(e){console.log(e.response)}))}(n)},style:{cursor:"pointer"},children:["\ud83d\udc4d",n.likeCount]})})]})},u=function(e){var t,n,i,l=Object(c.useState)(""),s=Object(o.a)(l,2),a=s[0],h=s[1],O=Object(c.useState)(""),u=Object(o.a)(O,2),x=u[0],p=u[1],v=Object(c.useState)(""),f=Object(o.a)(v,2),g=f[0],m=f[1],y=Object(c.useState)(""),k=Object(o.a)(y,2),S=k[0],C=k[1],P=Object(c.useState)(""),w=Object(o.a)(P,2),D=w[0],N=w[1],T=Object(c.useState)(""),E=Object(o.a)(T,2),_=E[0],A=E[1],F=Object(j.f)(),L=Object(c.useState)(null),B=Object(o.a)(L,2),I=B[0],J=B[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(r.b,{to:"/",children:"back to home"})]}),Object(b.jsx)("h3",{children:"Know a pet needing a home?"}),Object(b.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault();var t={name:a,type:x,description:g,skill1:S,skill2:D,skill3:_};d.a.post("http://localhost:8000/api/pets",t).then((function(e){console.log(e.data),F.push("")})).catch((function(e){J(e.response.data.errors)}))}(e)},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Name: "}),Object(b.jsx)("br",{}),(null===I||void 0===I?void 0:I.name)&&Object(b.jsx)("span",{style:{color:"red"},children:null===I||void 0===I||null===(t=I.name)||void 0===t?void 0:t.message}),Object(b.jsx)("input",{onChange:function(e){h(e.target.value)},type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Type: "}),Object(b.jsx)("br",{}),(null===I||void 0===I?void 0:I.type)&&Object(b.jsx)("span",{style:{color:"red"},children:null===I||void 0===I||null===(n=I.type)||void 0===n?void 0:n.message}),Object(b.jsx)("input",{onChange:function(e){p(e.target.value)},type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Description: "}),Object(b.jsx)("br",{}),(null===I||void 0===I?void 0:I.description)&&Object(b.jsx)("span",{style:{color:"red"},children:null===I||void 0===I||null===(i=I.description)||void 0===i?void 0:i.message}),Object(b.jsx)("input",{onChange:function(e){m(e.target.value)},type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Skill1: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:function(e){C(e.target.value)},type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Skill2: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:function(e){N(e.target.value)},type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" Skill3: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:function(e){A(e.target.value)},type:"text"})]}),Object(b.jsx)("button",{type:"submit",children:"\u21eaAdd Pet"})]})]})},x=n(13),p=n(18),v=function(e){var t,n,i,l=Object(c.useState)(null),s=Object(o.a)(l,2),a=s[0],h=s[1],O=Object(c.useState)(null),u=Object(o.a)(O,2),v=u[0],f=u[1],g=Object(j.f)(),m=Object(j.g)().id;Object(c.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/".concat(m)).then((function(e){h(e.data)})).catch((function(e){console.log(e.response)}))}),[m]);var y=function e(t){h(Object(p.a)(Object(p.a)({},a),{},Object(x.a)({},t.target.name,t.target.value))),console.log(e)};return null===a?"Loading...":Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("h2",{children:"Pet Shelter"}),Object(b.jsx)(r.b,{to:"/",children:"back to home"})]}),Object(b.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),d.a.put("http://localhost:8000/api/pets/".concat(a._id),a).then((function(e){console.log(e.data),g.push("")})).catch((function(e){f(e.response.data.errors)}))}(e)},children:[Object(b.jsxs)("h2",{children:["Edit ",a.name]}),Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Pet Name:"}),(null===v||void 0===v?void 0:v.name)&&Object(b.jsx)("span",{style:{color:"red"},children:null===v||void 0===v||null===(t=v.name)||void 0===t?void 0:t.message}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.name,name:"name"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Pet Type:"}),(null===v||void 0===v?void 0:v.type)&&Object(b.jsx)("span",{style:{color:"red"},children:null===v||void 0===v||null===(n=v.type)||void 0===n?void 0:n.message}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.type,name:"type"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Description: "}),(null===v||void 0===v?void 0:v.description)&&Object(b.jsx)("span",{style:{color:"red"},children:null===v||void 0===v||null===(i=v.description)||void 0===i?void 0:i.message}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.description,name:"description"})]}),Object(b.jsx)("button",{children:"Edit Pet"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{children:"Skills (Optional) : "})}),Object(b.jsx)("label",{children:"Skill 1: "}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.skill1,name:"skill1"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Skill 2: "}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.skill2,name:"skill2"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Skill 3: "}),Object(b.jsx)("input",{onChange:function(e){y(e)},type:"text",value:a.skill3,name:"skill3"})]})]})]})]})]})};var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/pets/new",children:Object(b.jsx)(u,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/pets/:id",children:Object(b.jsx)(O,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/pets/:id/edit",children:Object(b.jsx)(v,{})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),l(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(f,{})})}),document.getElementById("root")),g()}},[[62,1,2]]]);
//# sourceMappingURL=main.6e319edb.chunk.js.map