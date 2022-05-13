"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[28,278,438],{4278:function(e,n,o){o.r(n),o.d(n,{default:function(){return S}});var t,r=o(885),a=o(4942),i=(o(2791),o(8825)),l=o(1393),c=o(8745),d=o(618),s=o(5855),u=o(2977),v=o(7247),p=o(168),Z=o(3400),m=(0,l.ZP)(Z.Z)(t||(t=(0,p.Z)(["\nmargin-left: auto;\n &:hover{\n    color:#db1a5e;\n  } \n}\n"]))),f=o(184);function h(e){var n=e.func;return(0,f.jsx)(u.Z,{direction:"row",spacing:1,children:(0,f.jsx)(m,{"aria-label":"delete",onClick:n,size:"large",children:(0,f.jsx)(v.Z,{fontSize:"inherit"})})})}var b,x,g=o(7939),y=o(5545),j=(0,g.ZP)(y.Z)(b||(b=(0,p.Z)(["\nmargin-right:10px;\n"]))),w=o(3229),k=(0,g.ZP)(w.Z)(x||(x=(0,p.Z)(["\nmargin-right:10px;\n"]))),P=(0,l.ZP)(c.Z)((function(e){var n,o=e.theme;return n={},(0,a.Z)(n,"&.".concat(d.Z.head),{backgroundColor:o.palette.common.black,color:o.palette.common.white}),(0,a.Z)(n,"&.".concat(d.Z.body),{fontSize:30}),n})),M=(0,l.ZP)(s.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),S=function(e){var n=e.nameItem,o=e.numberItem,t=e.id,a=(0,i.Nt)(),l=(0,r.Z)(a,1)[0];return(0,f.jsxs)(M,{children:[(0,f.jsxs)(P,{component:"th",scope:"row",children:[(0,f.jsx)(j,{sx:{fontSize:25}}),n]}),(0,f.jsxs)(P,{align:"right",children:[(0,f.jsx)(k,{sx:{fontSize:25}}),o]}),(0,f.jsx)(P,{align:"right",children:(0,f.jsx)(h,{func:function(){return l(t)}})})]},t)}},1028:function(e,n,o){o.r(n),o.d(n,{default:function(){return f}});var t=o(4942),r=o(1393),a=o(9836),i=o(3382),l=o(8745),c=o(618),d=o(6890),s=o(5855),u=o(703),v=o(4278),p=o(3438),Z=o(184),m=(0,r.ZP)(l.Z)((function(e){var n,o=e.theme;return n={},(0,t.Z)(n,"&.".concat(c.Z.head),{backgroundColor:o.palette.common.black,color:o.palette.common.white}),(0,t.Z)(n,"&.".concat(c.Z.body),{fontSize:25}),n}));function f(e){var n=e.contactsList;return n.length>0?(0,Z.jsx)("div",{component:u.Z,children:(0,Z.jsxs)(a.Z,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(m,{children:"Name"}),(0,Z.jsx)(m,{align:"right",children:"Phone Number"}),(0,Z.jsx)(m,{align:"right",children:"Action"})]})}),(0,Z.jsx)(i.Z,{children:n.map((function(e){return(0,Z.jsx)(v.default,{nameItem:e.name,numberItem:e.number,id:e.id},e.id)}))})]})}):(0,Z.jsx)("div",{children:(0,Z.jsx)(p.TitleContact,{children:"Please add your contacts to phoneBook"})})}},3438:function(e,n,o){o.r(n),o.d(n,{TitleContact:function(){return a}});var t,r=o(168),a=o(7939).ZP.p(t||(t=(0,r.Z)(["\n  font-size: 45px;\n  text-align: center;\n  margin-top: 100px;\n"])))},703:function(e,n,o){o.d(n,{Z:function(){return h}});var t=o(3366),r=o(7462),a=o(2791),i=o(8182),l=o(767),c=o(2065),d=o(1393),s=o(2507),u=o(5159);function v(e){return(0,u.Z)("MuiPaper",e)}(0,o(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=o(184),Z=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},f=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n[o.variant],!o.square&&n.rounded,"elevation"===o.variant&&n["elevation".concat(o.elevation)]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,r.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===o.variant&&(0,r.Z)({boxShadow:n.shadows[o.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",m(o.elevation)),", ").concat((0,c.Fq)("#fff",m(o.elevation)),")")}))})),h=a.forwardRef((function(e,n){var o=(0,s.Z)({props:e,name:"MuiPaper"}),a=o.className,c=o.component,d=void 0===c?"div":c,u=o.elevation,m=void 0===u?1:u,h=o.square,b=void 0!==h&&h,x=o.variant,g=void 0===x?"elevation":x,y=(0,t.Z)(o,Z),j=(0,r.Z)({},o,{component:d,elevation:m,square:b,variant:g}),w=function(e){var n=e.square,o=e.elevation,t=e.variant,r=e.classes,a={root:["root",t,!n&&"rounded","elevation"===t&&"elevation".concat(o)]};return(0,l.Z)(a,v,r)}(j);return(0,p.jsx)(f,(0,r.Z)({as:d,ownerState:j,className:(0,i.Z)(w.root,a),ref:n},y))}))},9836:function(e,n,o){o.d(n,{Z:function(){return h}});var t=o(3366),r=o(7462),a=o(2791),i=o(8182),l=o(767),c=o(6646),d=o(2507),s=o(1393),u=o(5159);function v(e){return(0,u.Z)("MuiTable",e)}(0,o(208).Z)("MuiTable",["root","stickyHeader"]);var p=o(184),Z=["className","component","padding","size","stickyHeader"],m=(0,s.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.stickyHeader&&n.stickyHeader]}})((function(e){var n=e.theme,o=e.ownerState;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},n.typography.body2,{padding:n.spacing(2),color:n.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})})),f="table",h=a.forwardRef((function(e,n){var o=(0,d.Z)({props:e,name:"MuiTable"}),s=o.className,u=o.component,h=void 0===u?f:u,b=o.padding,x=void 0===b?"normal":b,g=o.size,y=void 0===g?"medium":g,j=o.stickyHeader,w=void 0!==j&&j,k=(0,t.Z)(o,Z),P=(0,r.Z)({},o,{component:h,padding:x,size:y,stickyHeader:w}),M=function(e){var n=e.classes,o={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,l.Z)(o,v,n)}(P),S=a.useMemo((function(){return{padding:x,size:y,stickyHeader:w}}),[x,y,w]);return(0,p.jsx)(c.Z.Provider,{value:S,children:(0,p.jsx)(m,(0,r.Z)({as:h,role:h===f?null:"table",ref:n,className:(0,i.Z)(M.root,s),ownerState:P},k))})}))},3382:function(e,n,o){o.d(n,{Z:function(){return b}});var t=o(7462),r=o(3366),a=o(2791),i=o(8182),l=o(767),c=o(829),d=o(2507),s=o(1393),u=o(5159);function v(e){return(0,u.Z)("MuiTableBody",e)}(0,o(208).Z)("MuiTableBody",["root"]);var p=o(184),Z=["className","component"],m=(0,s.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-row-group"}),f={variant:"body"},h="tbody",b=a.forwardRef((function(e,n){var o=(0,d.Z)({props:e,name:"MuiTableBody"}),a=o.className,s=o.component,u=void 0===s?h:s,b=(0,r.Z)(o,Z),x=(0,t.Z)({},o,{component:u}),g=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},v,n)}(x);return(0,p.jsx)(c.Z.Provider,{value:f,children:(0,p.jsx)(m,(0,t.Z)({className:(0,i.Z)(g.root,a),as:u,ref:n,role:u===h?null:"rowgroup",ownerState:x},b))})}))},6890:function(e,n,o){o.d(n,{Z:function(){return b}});var t=o(7462),r=o(3366),a=o(2791),i=o(8182),l=o(767),c=o(829),d=o(2507),s=o(1393),u=o(5159);function v(e){return(0,u.Z)("MuiTableHead",e)}(0,o(208).Z)("MuiTableHead",["root"]);var p=o(184),Z=["className","component"],m=(0,s.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-header-group"}),f={variant:"head"},h="thead",b=a.forwardRef((function(e,n){var o=(0,d.Z)({props:e,name:"MuiTableHead"}),a=o.className,s=o.component,u=void 0===s?h:s,b=(0,r.Z)(o,Z),x=(0,t.Z)({},o,{component:u}),g=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},v,n)}(x);return(0,p.jsx)(c.Z.Provider,{value:f,children:(0,p.jsx)(m,(0,t.Z)({as:u,className:(0,i.Z)(g.root,a),ref:n,role:u===h?null:"rowgroup",ownerState:x},b))})}))}}]);
//# sourceMappingURL=28.379385d0.chunk.js.map