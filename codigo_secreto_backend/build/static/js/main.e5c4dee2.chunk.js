(this.webpackJsonpcodigo_secreto=this.webpackJsonpcodigo_secreto||[]).push([[0],{110:function(e,a){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(53),o=t.n(r),l=(t(62),t(10)),i=t.n(l),u=t(15),d=(t(64),t(16)),s=t.n(d),f=function(e){return s.a.get("".concat("/api/rooms","/").concat(e))},m=function(){return s.a.post("".concat("/api/rooms"))},p=t(1),E=t(27),v=t(56),b=function(e){var a=e.card,t=e.flipCard,n="card",r="card__face card__face--back";return a.flipped&&(n="card is-flipped",console.log("team: ",a.team),r=!1===a.team?"card__face card__face--back--blue":"card__face card__face--back--red"),c.a.createElement("div",{className:"scene scene--card"},c.a.createElement("div",{className:n,onClick:t},c.a.createElement("div",{className:"card__face card__face--front"},a.word),c.a.createElement("div",{className:r},a.word)))},_=function(e){var a=e.cards,t=e.flipCard,n=a.map((function(e,a){return c.a.createElement(b,{key:a,card:e,flipCard:function(){return t(e.id)}})}));return c.a.createElement("div",{className:"board"},n)},O=t(54),g=t.n(O);console.log("endpoint:","/");var h=g.a.connect("/"),C=function(){var e=Object(p.g)("/rooms/:id").params.id,a=Array(25).fill({}),t=Object(n.useState)(a),r=Object(v.a)(t,2),o=r[0],l=r[1];Object(n.useEffect)((function(){console.log("effect"),f(e).then((function(e){console.log("promise fulfilled"),l(e.data.cards.map((function(e){return{word:e.word,flipped:e.visible,team:e.team,id:e._id}})))}))}),[]);var d=function(e){l(o.map((function(a){return a.id!==e?a:Object(E.a)({},a,{flipped:!0})})))};Object(n.useEffect)((function(){h.on("flippedCard",d),h.off(d)}),[]);var s=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(o.map((function(e){return e.id!==a?e:Object(E.a)({},e,{flipped:!0})}))),h.emit("flippedCard",a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"C\xf3digo Secreto")),c.a.createElement("div",{className:"game-board"},c.a.createElement(_,{cards:o,flipCard:s})))},N=function(){var e=Object(p.f)(),a=function(){var a=Object(u.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("button pressed to create room"),a.next=3,m();case 3:t=a.sent,console.log(t.data.id),e.push("/rooms/".concat(t.data.id));case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",null," ",c.a.createElement("h2",null,"CODIGO SECRETO ONLINE")," "),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return a()}},"NEW ROOM"))))},j=function(){return c.a.createElement("div",null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/rooms/:id"},c.a.createElement(C,null)),c.a.createElement(p.a,{path:"/"}," ",c.a.createElement(N,null)," ")))},k=t(14);o.a.render(c.a.createElement(k.a,null,c.a.createElement(j,null)),document.getElementById("root"))},57:function(e,a,t){e.exports=t(117)},62:function(e,a,t){},64:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.e5c4dee2.chunk.js.map