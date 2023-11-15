(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),r=c(8),a=(c(36),c(37),c(3)),s=c(9),l=c(16),i=c(5),o=c(0),j=c(10),d=c.n(j),u=c(27);function b(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];null===r?c.delete(n):Array.isArray(r)?(c.delete(n),r.forEach((function(e){c.append(n,e)}))):c.set(n,r)})),c.toString()}var h=c(1),O=["children","params"],m=function(e){var t=e.children,c=e.params,n=Object(u.a)(e,O),a=Object(r.d)(),s=Object(i.a)(a,1)[0];return Object(h.jsx)(r.b,Object(l.a)(Object(l.a)({to:{search:b(s,c)}},n),{},{children:t}))},p=["16","17","18","19","20"],x={sex:null,query:null,centuries:null},f=function(){var e=Object(r.d)(),t=Object(i.a)(e,2),c=t[0],n=t[1],a=c.get("query")||"",l=c.getAll("centuries")||[],o=function(e){return l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(s.a)(l),[e])};return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(m,{className:d()({"is-active":!c.get("sex")}),params:{sex:null},children:"All"}),Object(h.jsx)(m,{className:d()({"is-active":"m"===c.get("sex")}),params:{sex:"m"},children:"Male"}),Object(h.jsx)(m,{className:d()({"is-active":"f"===c.get("sex")}),params:{sex:"f"},children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:a,onChange:function(e){return function(e){var t=new URLSearchParams(c);e.trim()?t.set("query",e.trim()):t.delete("query"),n(t.toString())}(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:p.map((function(e){return Object(h.jsx)(m,{"data-cy":"century",className:d()("button","mr-1",{"is-info":l.includes(e)}),params:{centuries:o(e)},children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(m,{"data-cy":"centuryALL",className:d()("button","is-success",{"is-outlined":l.length}),params:{centuries:null},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(m,{className:d()("button","is-link","is-outlined","is-fullwidth"),params:x,children:"Reset all filters"})})]})},v=(c(39),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),g=function(e){return e.NAME="name",e.SEX="sex",e.BORN="born",e.DIED="died",e}({}),N=function(e){var t=e.param,c=Object(r.d)(),n=Object(i.a)(c,1)[0],a=n.get("sort")||null,s=n.get("order")||null,l=t.charAt(0).toUpperCase()+t.slice(1);return Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[l,Object(h.jsx)(m,{params:function(e){var t={sort:null,order:null};return a!==e?(t.sort=e,t):(a!==e||s||(t.sort=e,t.order="desc"),t)}(t),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas",{"fa-sort":a!==t,"fa-sort-up":a===t&&!s,"fa-sort-down":a===t&&s})})})})]})},t)},y=function(e){var t=e.person,c=Object(a.q)().personSlug,n=Object(r.d)(),s=Object(i.a)(n,1)[0],l=t.name,o=t.sex,j=t.born,u=t.died,b=t.fatherName,O=t.motherName,m=t.mother,p=t.father,x=t.slug;return Object(h.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":c===x}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(r.b,{to:"/people/".concat(x,"?").concat(s.toString()),className:d()({"has-text-danger":"f"===o}),children:l})}),Object(h.jsx)("td",{children:o}),Object(h.jsx)("td",{children:j}),Object(h.jsx)("td",{children:u}),Object(h.jsx)("td",{children:m?Object(h.jsx)(r.b,{to:"/people/".concat(m.slug,"?").concat(s.toString()),className:"has-text-danger",children:O}):O||"-"}),Object(h.jsx)("td",{children:p?Object(h.jsx)(r.b,{to:"/people/".concat(p.slug,"?").concat(s.toString()),children:b}):b||"-"})]},t.slug)},w=function(e){var t=e.filteredPeople,c=[g.NAME,g.SEX,g.BORN,g.DIED];return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[c.map((function(e){return Object(h.jsx)(N,{param:e},e)})),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(y,{person:e},e.slug)}))})]})},S=c(4),k=c(7),E="https://mate-academy.github.io/react_people-table/api/people.json";function A(e){return new Promise((function(t){return setTimeout(t,e)}))}function L(){return(L=Object(k.a)(Object(S.a)().mark((function e(){return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(500).then((function(){return fetch(E)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e,t=Object(o.useState)([]),c=Object(i.a)(t,2),n=c[0],a=c[1],j=Object(o.useState)(!1),d=Object(i.a)(j,2),u=d[0],b=d[1],O=Object(o.useState)(!1),m=Object(i.a)(O,2),p=m[0],x=m[1],g=Object(r.d)(),N=Object(i.a)(g,1)[0];Object(o.useEffect)((function(){x(!0),function(){return L.apply(this,arguments)}().then((function(e){var t=e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName})),r=Object(l.a)({},t);return c&&(r.mother=c),n&&(r.father=n),r}));a(t)})).catch((function(){b(!0)})).finally((function(){x(!1)}))}),[]);var y=N.get("sex")||null,S=(null===(e=N.get("query"))||void 0===e?void 0:e.toLowerCase())||null,k=N.get("sort")||null,E=N.get("order")||null,A=N.getAll("centuries").join(",")||"",P=Object(o.useState)([]),q=Object(i.a)(P,2),C=q[0],F=q[1];return Object(o.useEffect)((function(){var e=!1,t=Object(s.a)(n);(y||S||A)&&(t=function(e){var t=e.filtered,c=e.filter,n=e.query,r=e.centuries,a=t;return c&&(a=a.filter((function(e){return e.sex===c}))),n&&(a=a.filter((function(e){var t,c;return e.name.toLowerCase().includes(n)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(n))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(n))}))),r.length>0&&(a=a.filter((function(e){var t=Math.ceil(e.born/100);return r.includes(t.toString())}))),a}({filtered:t,filter:y,query:S,centuries:A}),e=!0),k&&(t=function(e){var t=e.filtered,c=e.sortType,n=e.order,r=Object(s.a)(t);return r.sort((function(e,t){return"born"===c||"died"===c?e[c]-t[c]:"sex"===c||"name"===c?e[c].localeCompare(t[c]):0})),n&&r.reverse(),r}({filtered:t,sortType:k,order:E}),e=!0),F(e?t:n)}),[n,y,S,k,A,E]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!p&&Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(f,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[p&&Object(h.jsx)(v,{}),!p&&u&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!p&&!u&&!n.length&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),C.length||p?!p&&Object(h.jsx)(w,{filteredPeople:C}):Object(h.jsx)("p",{children:"There are no people matching the current search criteria"})]})})]})})]})},q=function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},C=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(r.c,{className:q,to:"/",children:"Home"}),Object(h.jsx)(r.c,{"aria-current":"page",className:q,to:"/people",children:"People"})]})})})},F=(c(40),function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})}),M=function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})},R=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(C,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"/",element:Object(h.jsx)(M,{})}),Object(h.jsx)(a.b,{path:"home",element:Object(h.jsx)(a.a,{to:"..",replace:!0})}),Object(h.jsx)(a.b,{path:"people",element:Object(h.jsx)(P,{}),children:Object(h.jsx)(a.b,{path:":personSlug",element:Object(h.jsx)(P,{})})}),Object(h.jsx)(a.b,{path:"*",element:Object(h.jsx)(F,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(r.a,{children:Object(h.jsx)(R,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ecf7dad4.chunk.js.map