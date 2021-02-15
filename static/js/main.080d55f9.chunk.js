(this["webpackJsonpweek04-budget-calculator"]=this["webpackJsonpweek04-budget-calculator"]||[]).push([[0],{16:function(e,c,t){},19:function(e,c,t){"use strict";t.r(c);var a=t(0),r=t.n(a),n=t(9),s=t.n(n),o=(t(16),t(1));var i=function(){return Object(o.jsx)("h1",{className:"Title",children:"Budget Calculator"})},d=t(2),l=t(4),j=t(10),h=t(11),b=[{id:1,type:"expense",category:"food"},{id:2,type:"expense",category:"clothes"},{id:3,type:"expense",category:"hobby"},{id:4,type:"expense",category:"alcohol"},{id:5,type:"income",category:"work"},{id:6,type:"income",category:"gifts"},{id:7,type:"income",category:"sales"},{id:8,type:"expense",category:"rent"}];var u=function(e){var c=e.id,t=e.category,a=e.value;return Object(o.jsx)("option",{value:a,children:t},c)};var m=function(e){var c=e.addHandle,t=Object(h.a)(),r=t.register,n=t.handleSubmit,s=t.errors,i=Object(a.useState)({radioType:"",name:"",cash:0,category:""}),d=Object(l.a)(i,2),m=d[0],p=d[1],y=function(e){m.radioType=e.target.value,p(Object(j.a)({},m))};return Object(o.jsxs)("form",{className:"form",onSubmit:n((function(e,t){e.id=Math.random(),e.cash=Math.abs(parseFloat(e.cash)),c(e),t.target.reset()})),noValidate:!0,children:[Object(o.jsxs)("div",{className:"form__radio",children:[Object(o.jsx)("label",{htmlFor:"radioType",children:"Expense"}),Object(o.jsx)("input",{type:"radio",name:"radioType",value:"expense",onChange:y,ref:r({required:!0})})]}),Object(o.jsxs)("div",{className:"form__radio",children:[Object(o.jsx)("label",{htmlFor:"radioType",children:"Income"}),Object(o.jsx)("input",{type:"radio",name:"radioType",value:"income",onChange:y,ref:r({required:!0})})]}),s.radioType&&Object(o.jsx)("p",{className:"error",children:"Choose expense or income"}),Object(o.jsxs)("div",{className:"form__group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",ref:r({required:!0})})]}),s.name&&Object(o.jsx)("p",{className:"error",children:"Describe your expense or income"}),Object(o.jsxs)("div",{className:"form__group",children:[Object(o.jsx)("label",{htmlFor:"cash",children:"Cash:"}),Object(o.jsx)("input",{type:"number",name:"cash",ref:r({required:!0})})]}),s.cash&&Object(o.jsx)("p",{className:"error",children:"Enter the amount"}),Object(o.jsxs)("select",{className:"form__select__categories",name:"category",ref:r({required:!0}),children:[Object(o.jsx)("option",{value:"",children:"Choose a category..."}),b.map((function(e){return e.type===m.radioType&&Object(o.jsx)(u,{value:e.category,category:e.category},"category-".concat(e.id))}))]}),s.category&&Object(o.jsx)("p",{className:"error",children:"Choose a category"}),Object(o.jsx)("button",{type:"submit",children:"ADD"})]})};var p=function(e){var c=e.category,t=e.name,a=e.cash,r=e.onClick;return Object(o.jsxs)("div",{className:"Item",children:[Object(o.jsxs)("div",{className:"Item__container",children:[Object(o.jsx)("section",{className:"Item__header",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Category: "}),c]})}),Object(o.jsxs)("section",{className:"Item__info",children:[Object(o.jsx)("p",{children:t}),Object(o.jsxs)("p",{children:[a," z\u0142"]})]})]}),Object(o.jsx)("button",{onClick:r,children:"DELETE"})]})},y=[{id:1,radioType:"expense",name:"Trek X-caliber 9",cash:5899,category:"hobby"},{id:2,radioType:"income",name:"salary",cash:15e3,category:"work"},{id:3,radioType:"expense",name:"food",cash:700,category:"food"},{id:4,radioType:"expense",name:"whisky",cash:180,category:"alcohol"}];var x=function(){var e=function(e){return e.reduce((function(e,c){return"income"===c.radioType?e+c.cash:e-c.cash}),0)},c=Object(a.useState)([].concat(y)),t=Object(l.a)(c,2),r=t[0],n=t[1],s=Object(a.useState)(e(y)),i=Object(l.a)(s,2),j=i[0],h=i[1],b={color:j>=0?"rgb(12, 173, 12)":"red"};Object(a.useEffect)((function(){null===JSON.parse(localStorage.getItem("dataStorage"))?n([].concat(y)):n(JSON.parse(localStorage.getItem("dataStorage")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("dataStorage",JSON.stringify(r))}),[r]),Object(a.useEffect)((function(){h(e(r))}),[j,r]);var u=function(c){var t=r.filter((function(e){return e.id!==c}));n(t),h(e(t))};return Object(o.jsxs)("div",{className:"Calculator",children:[Object(o.jsx)("div",{className:"total",children:Object(o.jsxs)("h2",{style:b,children:[j," z\u0142"]})}),Object(o.jsx)(m,{addHandle:function(e){n([].concat(Object(d.a)(r),[e])),"expense"===e.radioType?h(j-e.cash):h(j+e.cash)}}),Object(o.jsxs)("div",{className:"expenses-container",children:[Object(o.jsx)("h3",{children:"EXPANSES"}),r.map((function(e){return"expense"===e.radioType&&Object(o.jsx)(p,{category:e.category,name:e.name,cash:e.cash,onClick:function(){return u(e.id)}},"expense-".concat(e.id))}))]}),Object(o.jsxs)("div",{className:"incomes-container",children:[Object(o.jsx)("h3",{children:"INCOMES"}),r.map((function(e){return"income"===e.radioType&&Object(o.jsx)(p,{category:e.category,name:e.name,cash:e.cash,onClick:function(){return u(e.id)}},"income-".concat(e.id))}))]})]})};var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(x,{})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.080d55f9.chunk.js.map