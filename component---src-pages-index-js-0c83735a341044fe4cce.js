(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));var a=n(0),r=n.n(a),l=n(45),o=n(206),u=n(205),c="323221317";t.default=function(e){var t=e.data,n=Object(a.useContext)(l.b),c=n.state,m=(n.setState,Object(a.useState)("en")),s=m[0],i=m[1];return Object(a.useEffect)((function(){i(c.language)}),[c]),r.a.createElement(o.a,null,r.a.createElement(u.a,{title:"Home"}),r.a.createElement("article",{className:"gospel"},t.allMarkdownRemark.edges.filter((function(e){return"home"===e.node.frontmatter.type&&e.node.frontmatter.language===s})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.html}}))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0c83735a341044fe4cce.js.map