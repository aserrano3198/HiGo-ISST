(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,n){},35:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),i=(n(35),n(13)),o=n(14),j=n(15),h=n(16),l=(n(24),n(9)),u=n(45),d=n(46),b=n(12),m=n(2),O=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={isOpen:!1},a.toggle=a.toggle.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(m.jsx)(u.a,{color:"dark",dark:!0,expand:"md",children:Object(m.jsx)(d.a,{tag:b.b,to:"/",children:"Home"})})}}]),n}(a.Component),p=n(47),f=n(48),x=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsx)(p.a,{fluid:!0,children:Object(m.jsx)(f.a,{color:"link",children:Object(m.jsx)(b.b,{to:"/tfgs",children:"TFGs"})})})]})}}]),n}(a.Component),v=x,g=n(6),y=n(29),C=n(18),k=n(17),w=n.n(k),S=n(49),T=n(50),E=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={tfgs:[]},a.remove=a.remove.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/tfgs").then((function(t){return t.json()})).then((function(e){return t.setState({tfgs:e})}))}},{key:"remove",value:function(){var t=Object(C.a)(w.a.mark((function t(e){var n=this;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tfgs/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){var t=Object(y.a)(n.state.tfgs).filter((function(t){return t.email!==e}));n.setState({tfgs:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.tfgs.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.nombre}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.titulo}),Object(m.jsx)("td",{children:e.tutor}),Object(m.jsx)("td",{children:e.status}),Object(m.jsx)("td",{children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{size:"sm",color:"primary",tag:b.b,to:"/tfgs/"+e.email,children:"Edit"}),Object(m.jsx)(f.a,{size:"sm",color:"danger",onClick:function(){return t.remove(e.email)},children:"Delete"})]})})]},e.email)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(p.a,{fluid:!0,children:[Object(m.jsx)("div",{className:"float-right",children:Object(m.jsx)(f.a,{color:"success",tag:b.b,to:"/tfgs/new",children:"Add TFG"})}),Object(m.jsx)("h3",{children:"TFGs"}),Object(m.jsxs)(T.a,{className:"mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"15%",children:"Nombre"}),Object(m.jsx)("th",{width:"15%",children:"Email"}),Object(m.jsx)("th",{width:"15%",children:"Titulo"}),Object(m.jsx)("th",{width:"15%",children:"Tutor"}),Object(m.jsx)("th",{width:"10%",children:"Estado"}),Object(m.jsx)("th",{width:"30%",children:"Actions"})]})}),Object(m.jsx)("tbody",{children:e})]})]})]})}}]),n}(a.Component),F=E,D=n(30),A=n(51),G=n(52),N=n(53),I=n(54),P=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).emptyItem={nombre:"",email:"",titulo:"",tutor:"",pass:"",status:1,memoria:null,nota:0},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(C.a)(w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"===this.props.match.params.email){t.next=7;break}return t.next=3,fetch("/tfgs/".concat(this.props.match.params.email));case 3:return t.next=5,t.sent.json();case 5:e=t.sent,this.setState({item:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){var e=t.target,n=e.value,a=e.name,c=Object(D.a)({},this.state.item);c[a]=n,this.setState({item:c})}},{key:"handleSubmit",value:function(){var t=Object(C.a)(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=this.state.item,t.next=4,fetch("/tfgs"+("new"!==this.props.match.params.email?"/"+n.email:""),{method:"new"!==this.props.match.params.email?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.props.history.push("/tfgs");case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.item,e=Object(m.jsx)("h2",{children:t.email?"Edit TFG":"Add TFG"});return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(p.a,{children:[e,Object(m.jsxs)(A.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(G.a,{children:[Object(m.jsx)(N.a,{for:"nombre",children:"Nombre"}),Object(m.jsx)(I.a,{type:"text",name:"nombre",id:"nombre",value:t.nombre||"",onChange:this.handleChange,autoComplete:"nombre"})]}),Object(m.jsxs)(G.a,{children:[Object(m.jsx)(N.a,{for:"email",children:"Email"}),Object(m.jsx)(I.a,{type:"text",name:"email",id:"email",value:t.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(m.jsxs)(G.a,{children:[Object(m.jsx)(N.a,{for:"titulo",children:"Titulo"}),Object(m.jsx)(I.a,{type:"text",name:"titulo",id:"titulo",value:t.titulo||"",onChange:this.handleChange,autoComplete:"titulo"})]}),Object(m.jsxs)(G.a,{children:[Object(m.jsx)(N.a,{for:"tutor",children:"Tutor"}),Object(m.jsx)(I.a,{type:"text",name:"tutor",id:"tutor",value:t.tutor||"",onChange:this.handleChange,autoComplete:"tutor"})]}),Object(m.jsxs)(G.a,{children:[Object(m.jsx)(N.a,{for:"status",children:"Status"}),Object(m.jsx)(I.a,{type:"number",name:"status",id:"status",value:t.status||"",onChange:this.handleChange,autoComplete:"status"})]}),Object(m.jsxs)(G.a,{children:[Object(m.jsx)(f.a,{color:"primary",type:"submit",children:"Save"})," ",Object(m.jsx)(f.a,{color:"secondary",tag:b.b,to:"/tfgs",children:"Cancel"})]})]})]})]})}}]),n}(a.Component),J=Object(g.f)(P),L=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(b.a,{children:Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.a,{path:"/",exact:!0,component:v}),Object(m.jsx)(g.a,{path:"/tfgs",exact:!0,component:F}),Object(m.jsx)(g.a,{path:"/tfgs/:email",component:J})]})})}}]),n}(a.Component),M=L,z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};n(43);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),z()}},[[44,1,2]]]);
//# sourceMappingURL=main.d88436b5.chunk.js.map