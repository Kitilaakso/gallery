(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),s=n.n(c),a=n(3),o=n(6),i=(n(23),n(1)),l=function(e){var t=e.name,n=e.email,r=e.id;return Object(i.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow=5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("p",{children:n})]})]})},h=n(8),b=n(9),d=n(12),j=n(11),u=function(e){var t=e.robots;return Object(i.jsx)("div",{className:"p2",children:t.map((function(e,n){return Object(i.jsx)(l,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},p=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=(n(25),"CHANGE_SEARCH_FIELD"),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={robots:[]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,r=t.onSearchChange,c=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return e.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)(p,{searchChange:r}),Object(i.jsx)(O,{children:Object(i.jsx)(u,{robots:c})})]}):Object(i.jsx)("h1",{children:"Loading"})}}]),n}(r.Component),m=Object(a.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(f),v=(n(26),n.p,{searchField:""}),x=n(10),y=Object(x.createLogger)(),C=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===g?Object.assign({},e,{searchField:t.payload}):e}),Object(o.a)(y));s.a.render(Object(i.jsx)(a.a,{store:C,children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.12fc977f.chunk.js.map