(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),i=n(3),s=n(4),l=n(6),d=n(5),u=function(e){var t=e.todos,n=e.deleteTodo,o=t.length?t.map((function(e){return a.a.createElement("div",{className:"collection-item",key:e.id},a.a.createElement("span",{className:"center",onClick:function(){n(e.id)}},e.content))})):a.a.createElement("p",{className:"center"},"You haven't got any tasks, hooray!");return a.a.createElement("div",{className:"todos collection"},o)},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:1,content:"Do first thing"},{id:2,content:"Do second thing"},{id:3,content:"Do third thing"}]},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"todos container"},a.a.createElement("h1",{className:"center blue-text"},"Todo's"),a.a.createElement(u,{todos:this.state.todos,deleteTodo:this.deleteTodo}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.52cb37dd.chunk.js.map