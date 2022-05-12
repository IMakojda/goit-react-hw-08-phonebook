"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871,278,274],{4278:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a=t(885),i=t(4942),o=(t(2791),t(8825)),c=t(1393),s=t(8745),u=t(618),d=t(5855),l=t(2977),h=t(7247),f=t(168),x=t(3400),m=(0,c.ZP)(x.Z)(r||(r=(0,f.Z)(["\nmargin-left: auto;\n &:hover{\n    color:#db1a5e;\n  } \n}\n"]))),p=t(184);function Z(n){var e=n.func;return(0,p.jsx)(l.Z,{direction:"row",spacing:1,children:(0,p.jsx)(m,{"aria-label":"delete",onClick:e,size:"large",children:(0,p.jsx)(h.Z,{fontSize:"inherit"})})})}var b,g,j=t(7939),v=t(5545),w=(0,j.ZP)(v.Z)(b||(b=(0,f.Z)(["\nmargin-right:10px;\n"]))),y=t(3229),k=(0,j.ZP)(y.Z)(g||(g=(0,f.Z)(["\nmargin-right:10px;\n"]))),C=(0,c.ZP)(s.Z)((function(n){var e,t=n.theme;return e={},(0,i.Z)(e,"&.".concat(u.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),(0,i.Z)(e,"&.".concat(u.Z.body),{fontSize:30}),e})),P=(0,c.ZP)(d.Z)((function(n){return{"&:nth-of-type(odd)":{backgroundColor:n.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),z=function(n){var e=n.nameItem,t=n.numberItem,r=n.id,i=(0,o.Nt)(),c=(0,a.Z)(i,1)[0];return(0,p.jsxs)(P,{children:[(0,p.jsxs)(C,{component:"th",scope:"row",children:[(0,p.jsx)(w,{sx:{fontSize:25}}),e]}),(0,p.jsxs)(C,{align:"right",children:[(0,p.jsx)(k,{sx:{fontSize:25}}),t]}),(0,p.jsx)(C,{align:"right",children:(0,p.jsx)(Z,{func:function(){return c(r)}})})]},r)}},1028:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(4942),a=t(1393),i=t(9836),o=t(3382),c=t(8745),s=t(618),u=t(6890),d=t(5855),l=t(703),h=t(4278),f=t(184),x=(0,a.ZP)(c.Z)((function(n){var e,t=n.theme;return e={},(0,r.Z)(e,"&.".concat(s.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),(0,r.Z)(e,"&.".concat(s.Z.body),{fontSize:25}),e}));function m(n){var e=n.contactsList;return e.length>0?(0,f.jsx)("div",{component:l.Z,children:(0,f.jsxs)(i.Z,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,f.jsx)(u.Z,{children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(x,{children:"Name"}),(0,f.jsx)(x,{align:"right",children:"Phone Number"}),(0,f.jsx)(x,{align:"right",children:"Action"})]})}),(0,f.jsx)(o.Z,{children:e.map((function(n){return(0,f.jsx)(h.default,{nameItem:n.name,numberItem:n.number,id:n.id},n.id)}))})]})}):(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"Please add your contacts to phoneBook"})})}},2871:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a,i,o=t(5861),c=t(885),s=t(7757),u=t.n(s),d=t(2791),l=t(8825),h=t(5562),f=t.n(h),x=t(168),m=t(7939),p=m.ZP.form(r||(r=(0,x.Z)(["\ndisplay: grid;\nwidth: 450px;\npadding:5px;\nmargin:15px 0;\n"]))),Z=m.ZP.label(a||(a=(0,x.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom:10px;\nheight: 35px;\nfont-size:20px;\n"]))),b=m.ZP.input(i||(i=(0,x.Z)(["\nfont-size:20px;\nborder-radius:5px;\nborder:1 px solid;\n"]))),g=t(6430),j=t(184);function v(){var n=(0,d.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,d.useState)("+380"),i=(0,c.Z)(a,2),s=i[0],h=i[1],x=(0,l.Jx)().data,m=(0,l.Tn)(),v=(0,c.Z)(m,2),w=v[0],y=v[1].isLoading,k=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":h(a);break;default:return}},C=function(){var n=(0,o.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!x.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))&&!x.find((function(n){return n.number===s}))){n.next=3;break}return n.abrupt("return",f().Notify.failure("".concat(t," is already in contacts")));case 3:return n.next=5,w({name:t,number:s});case 5:P();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),P=function(){r(""),h("+380")};return(0,j.jsxs)(p,{onSubmit:C,children:[(0,j.jsxs)(Z,{children:["Name",(0,j.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:k})]}),(0,j.jsxs)(Z,{children:["Phone Number",(0,j.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:k})]}),(0,j.jsx)(g.Z,{text:y?"ADD...":"add contacts",type:"submit"})]})}var w,y,k=t(5048),C=t(5274),P=m.ZP.label(w||(w=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 500;\n"]))),z=m.ZP.input(y||(y=(0,x.Z)(["\n  height: 40px;\n  width: 250px;\n  border: 1px solid rgba(109, 44, 32, 0.705);\n  border-radius: 5px;\n  margin-top: 5px;\n  font-size: 24px;\n"]))),S=t(1371),A=function(){var n=(0,k.I0)(),e=(0,k.v9)((function(n){return n.filter.filter}));return(0,j.jsxs)(P,{children:["Find contacts by name",(0,j.jsx)(z,{type:"text",value:e,onChange:function(e){return n((0,S.C)(e.target.value))}})]})},L=t(1028),N=function(){var n=(0,l.Jx)().data,e=(0,k.v9)((function(n){return n.filter.filter})),t=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,j.jsxs)("main",{children:[(0,j.jsxs)(C.Div,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(A,{})]}),t&&(0,j.jsx)(L.default,{contactsList:t})]})}},5274:function(n,e,t){t.r(e),t.d(e,{Div:function(){return i}});var r,a=t(168),i=t(7939).ZP.div(r||(r=(0,a.Z)(["\ndisplay: flex;\njustify-content: space-between;\n"])))}}]);
//# sourceMappingURL=871.aa8d3abc.chunk.js.map