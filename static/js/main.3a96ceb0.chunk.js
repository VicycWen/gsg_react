(this.webpackJsonpgreek_snake_game=this.webpackJsonpgreek_snake_game||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),o=n(7),i=n.n(o),r=(n(13),n(2)),c=n(3),u=n(5),l=n(4),h=(n(14),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"scoreWrap",children:["Score: ",this.props.score]})}}]),n}(a.a.Component),d=n(6),f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).createInnerStyle=function(){return{position:"absolute",width:t.props.sw+"px",height:t.props.sh+"px",left:t.props.x*t.props.sw+"px",top:t.props.y*t.props.sh+"px",transform:"rotate("+t.props.rotateDeg+"deg)"}},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:this.props.class,style:this.createInnerStyle()})}}]),n}(a.a.Component);function m(){this.clickMode=null,this.keyboardMode=null,this.pauseClick=null}m.keyboardMode=function(t){"d"==t.key&&this.direction!=this.directionNum.left?this.direction=this.directionNum.right:"s"==t.key&&this.direction!=this.directionNum.up?this.direction=this.directionNum.down:"a"==t.key&&this.direction!=this.directionNum.right?this.direction=this.directionNum.left:"w"==t.key&&this.direction!=this.directionNum.down?this.direction=this.directionNum.up:t.key},m.clickMode=function(t){var e=t,n=e.pageX,s=e.pageY,a=document.getElementsByClassName("snakeHead")[0];if(a){var o=function(t){var e=t.offsetLeft,n=t.offsetParent;for(;null!==n;)e+=n.offsetLeft,n=n.offsetParent;var s=t.offsetTop;n=t.offsetParent;for(;null!==n;)s+=n.offsetTop+n.clientTop,n=n.offsetParent;return{x:e,y:s}}(a),i=function(t,e,n,s){if(t==n)return s>=e?"down":"up";var a=n-t,o=s-e,i=o/a,r=180*Math.atan(i)/Math.PI;return a>0&&o<0?r+=360:(a<0&&o<0||a<0&&o>=0)&&(r+=180),r>=315||r<45?"right":r<315&&r>=225?"up":r<225&&r>=135?"left":"down"}(o.x,o.y,n,s);"right"==i&&this.direction!=this.directionNum.left?this.direction=this.directionNum.right:"down"==i&&this.direction!=this.directionNum.up?this.direction=this.directionNum.down:"left"==i&&this.direction!=this.directionNum.right?this.direction=this.directionNum.left:"up"==i&&this.direction!=this.directionNum.down&&(this.direction=this.directionNum.up)}return{x:e.pageX,y:e.pageY}},m.doubleClickPause=function(t){var e=this.props.gameStatus;"pause"===e?this.props.changeGameStatus("playing"):"playing"===e&&this.props.changeGameStatus("pause")};var g=m;function v(){this.game=null}v.gameStartOrContinue=function(){var t=this;null!==this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.getNextPos(),t.forceUpdate()}),100),document.addEventListener("keydown",this.keydownFn),document.addEventListener("click",this.clickFn),document.addEventListener("dblclick",this.doubleClickPauseFn)},v.gamePause=function(){clearInterval(this.timer),document.removeEventListener("keydown",this.keydownFn),document.removeEventListener("click",this.clickFn)},v.gameEnd=function(){clearInterval(this.timer),this.linkList=[],this.props.changeGameStatus("init"),document.removeEventListener("keydown",this.keydownFn),document.removeEventListener("click",this.clickFn),document.removeEventListener("dblclick",this.doubleClickPauseFn),this.props.alertGameScore()};var k=v;var b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).createSquare=function(t,e,n){var a=s.props.sw,o=s.props.sh,i=t.toString()+e.toString(),r="snakeHead"===n?s.direction.rotate:0;return Object(h.jsx)(f,{x:t,y:e,class:n,sw:a,sh:o,rotateDeg:r},i)},s.initialize=function(){s.pos=[],s.direction=s.directionNum.right;var t=s.createSquare(2,0,"snakeHead");s.pos.push([2,0]);var e=s.createSquare(1,0,"snakeBody");s.pos.push([1,0]);var n=s.createSquare(0,0,"snakeBody");return s.pos.push([0,0]),s.linkList=[n,e,t],s.linkList},s.getNextPos=function(){var t=s.linkList.length,e=[s.linkList[t-1].props.x+s.direction.x,s.linkList[t-1].props.y+s.direction.y];if(s.props.foodPos[0]===e[0]&&s.props.foodPos[1]===e[1])return document.getElementsByClassName("food")[0].style.display="none",s.props.eatFood(s.pos),s.strategies.eat(),null;var n=!1;return s.pos.forEach((function(t){t[0]==e[0]&&t[1]===e[1]&&(console.log("\u649e\u5230\u81ea\u5df1\u4e86"),s.strategies.die(),n=!0)})),n?null:e[0]<0||e[1]<0||e[0]>29||e[1]>29?(console.log("\u649e\u5230\u5899\u4e0a\u4e86"),s.strategies.die(),null):(s.strategies.move(),s.props.getSnakePos(s.pos),null)},s.strategies={move:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=s.linkList.length,n=s.linkList[e-1].props.x,a=s.linkList[e-1].props.y,o=n+s.direction.x,i=a+s.direction.y,r=s.createSquare(n,a,"snakeBody"),c=s.createSquare(o,i,"snakeHead");s.linkList.pop(),s.linkList.push(r),s.linkList.push(c),s.pos.push([o,i]),t||(s.linkList.shift(),s.pos.shift())},eat:function(){return s.strategies.move(!0),null},die:function(){return k.gameEnd.call(Object(d.a)(s)),""}},s.pos=[],s.linkList=[],s.timer=null,s.keydownFn=function(t){return g.keyboardMode.call(Object(d.a)(s),t)},s.clickFn=function(t){return g.clickMode.call(Object(d.a)(s),t)},s.doubleClickPauseFn=function(t){return g.doubleClickPause.call(Object(d.a)(s),t)},s.directionNum={left:{x:-1,y:0,rotate:180},right:{x:1,y:0,rotate:0},up:{x:0,y:-1,rotate:-90},down:{x:0,y:1,rotate:90}},s.direction=s.directionNum.right,s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.initialize(),this.props.getSnakePos(this.pos)}},{key:"componentDidUpdate",value:function(){var t=this.props.gameStatus;null===t||void 0===t||"init"===t?this.initialize():"start"===t?this.props.changeGameStatus("playing"):"playing"===t?k.gameStartOrContinue.call(this):"pause"===t&&k.gamePause.call(this)}},{key:"componentWillUnmount",value:function(){null!==this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){return this.linkList}}]),n}(a.a.Component),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={startBtnDisabled:!1,pauseBtnDisabled:!0,pauseBtnName:"\u6682\u505c\u6e38\u620f",startBtnHover:"",pauseBtnHover:"",helpBtnHover:""},t.handleClick=function(e){"start"===e?(t.props.changeGameStatus("start"),t.setState((function(){return{startBtnDisabled:!0,pauseBtnDisabled:!1,startBtnHover:"",helpBtnHover:""}}))):"pause"===e?"pause"===t.props.gameStatus?(t.props.changeGameStatus("playing"),t.setState((function(){return{pauseBtnName:"\u6682\u505c\u6e38\u620f"}}))):(t.props.changeGameStatus("pause"),t.setState((function(){return{pauseBtnName:"\u7ee7\u7eed\u6e38\u620f"}}))):"help"===e&&t.props.changeHelpWrap()},t.handleHover=function(e){"startBtn"===e?"init"!==t.props.gameStatus&&t.props.gameStatus||(t.setState((function(){return{startBtnHover:"btn-hover"}})),t.forceUpdate()):"startBtn-leave"===e?(t.setState((function(){return{startBtnHover:""}})),t.forceUpdate()):"helpBtn"===e?"init"!==t.props.gameStatus&&t.props.gameStatus||(t.setState((function(){return{helpBtnHover:"btn-hover"}})),t.forceUpdate()):"helpBtn-leave"===e?(t.setState((function(){return{helpBtnHover:""}})),t.forceUpdate()):"pauseBtn"===e?(t.setState((function(){return{pauseBtnHover:"btn-hover"}})),t.forceUpdate()):"pauseBtn-leave"===e&&(t.setState((function(){return{pauseBtnHover:""}})),t.forceUpdate())},t}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return t.gameStatus!==this.props.gameStatus}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"btn startBtn",children:Object(h.jsx)("button",{className:this.state.startBtnHover,disabled:this.state.startBtnDisabled&&"init"!==this.props.gameStatus,onClick:function(){return t.handleClick("start")},onMouseOver:function(){return t.handleHover("startBtn")},onMouseLeave:function(){return t.handleHover("startBtn-leave")},children:"\u5f00\u59cb\u6e38\u620f"})}),Object(h.jsx)("div",{className:"btn pauseBtn",children:Object(h.jsx)("button",{className:this.state.pauseBtnHover,disabled:this.state.pauseBtnDisabled||"init"===this.props.gameStatus,onClick:function(){return t.handleClick("pause")},onMouseOver:function(){return t.handleHover("pauseBtn")},onMouseLeave:function(){return t.handleHover("pauseBtn-leave")},children:this.state.pauseBtnName})}),Object(h.jsx)("div",{className:"btn helpBtn",children:Object(h.jsx)("button",{className:this.state.helpBtnHover,disabled:this.state.startBtnDisabled&&"init"!==this.props.gameStatus,onClick:function(){return t.handleClick("help")},onMouseOver:function(){return t.handleHover("helpBtn")},onMouseLeave:function(){return t.handleHover("helpBtn-leave")},children:"\u64cd\u4f5c\u8bf4\u660e"})})]})}}]),n}(a.a.Component),S=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).createFood=function(){if(null!==s.x&&null!==s.y&&(void 0===s.props.foodChangePos||void 0===s.props.snakePos||!s.props.foodChangePos))return null;for(var t=!0;t;)s.x=Math.round(29*Math.random()),s.y=Math.round(29*Math.random()),t=!1,s.props.snakePos.forEach((function(e){s.x===e[0]&&s.y===e[1]&&(t=!0)}));s.props.getFoodPos([s.x,s.y])},s.x=null,s.y=null,s}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(t){return this.props.foodChangePos}},{key:"render",value:function(){this.createFood();var t=this.props.sw,e=this.props.sh,n=this.x.toString()+this.y.toString();return Object(h.jsx)(f,{x:this.x,y:this.y,sw:t,sh:e,class:"food"},n)}}]),n}(a.a.Component),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleClose=function(){console.log("\u70b9\u51fbclose"),t.props.changeHelpWrap()},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{display:"none",className:"helpWrap",children:Object(h.jsxs)("div",{className:"help",children:[Object(h.jsx)("span",{className:"close",onClick:this.handleClose,children:"X"}),Object(h.jsx)("p",{children:"\u64cd\u4f5c\u8bf4\u660e\uff1a"}),Object(h.jsx)("p",{children:"\uff08\u9f20\u6807/\u89e6\u5c4f\uff09\u70b9\u51fb\u201c\u5f00\u59cb\u6e38\u620f\u201d\u6309\u94ae\u5f00\u59cb\u6e38\u620f,\u5355\u51fb\u63a7\u5236\u86c7\u5934\u8f6c\u5411\uff0c\u53cc\u51fb\u6682\u505c/\u7ee7\u7eed\u6e38\u620f"}),Object(h.jsx)("p",{children:"\uff08\u6309\u952e\uff09W-S-A-D\uff1a\u4e0a-\u4e0b-\u5de6-\u53f3\uff0cQ\uff1a\u6682\u505c/\u5f00\u59cb"})]})})}}]),n}(a.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"mask",children:Object(h.jsx)("p",{children:"\u6e38\u620f\u6682\u505c\u4e2d..."})})}}]),n}(a.a.Component),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={score:0,gameStatus:"",foodChangePos:!1,snakePos:[],foodPos:[],helpWrap:!0},t.alertGameScore=function(){alert("\u4f60\u7684\u6e38\u620f\u5f97\u5206\u4e3a\uff1a".concat(t.state.score)),t.setState((function(){return{score:0,foodChangePos:!1,snakePos:[],foodPos:[],helpWrap:!1}}))},t.changeGameStatus=function(e){t.setState((function(){return{gameStatus:e}}))},t.gameInit=function(e){console.log("snakeInit pos: ",e),t.setState((function(t){return{score:0,snakePos:t,gameStatus:"init",helpWrap:!1}}))},t.eatFood=function(e){console.log("\u86c7\u5403\u98df\u7269",e),t.setState((function(){return{snakePos:e,foodChangePos:!0,score:this.state.score+1}}))},t.getSnakePos=function(e){t.setState((function(){return{snakePos:e}}))},t.getFoodPos=function(e){t.setState((function(){return{foodPos:e,foodChangePos:!1}}))},t.foodCompenent=function(){return""!==t.state.gameStatus&&"init"!==t.state.gameStatus&&Object(h.jsx)(S,{foodChangePos:t.state.foodChangePos,snakePos:t.state.snakePos,getFoodPos:t.getFoodPos,sw:t.sw,sh:t.sh})},t.changeHelpWrap=function(){t.setState((function(){return{helpWrap:!this.state.helpWrap}}))},t.sw=20,t.sh=20,t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"content",children:[this.state.helpWrap&&(""===this.state.gameStatus||"init"===this.state.gameStatus)&&Object(h.jsx)(y,{changeHelpWrap:this.changeHelpWrap}),"pause"===this.state.gameStatus&&Object(h.jsx)(O,{}),Object(h.jsx)(p,{score:this.state.score,getScore:this.getScore}),Object(h.jsx)(j,{gameStatus:this.state.gameStatus,changeGameStatus:this.changeGameStatus,changeHelpWrap:this.changeHelpWrap}),Object(h.jsxs)("div",{id:"snakeWrap",children:["end"!==this.state.gameStatus&&Object(h.jsx)(b,{sw:this.sw,sh:this.sh,gameStatus:this.state.gameStatus,changeGameStatus:this.changeGameStatus,gameInit:this.gameInit,foodPos:this.state.foodPos,getSnakePos:this.getSnakePos,eatFood:this.eatFood,alertGameScore:this.alertGameScore}),this.foodCompenent()]})]})}}]),n}(a.a.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a96ceb0.chunk.js.map