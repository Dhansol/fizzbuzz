(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),u=a.n(c),i=a(2),s=a(3),o=a(6),l=a(5),m=a(4),f=(a(25),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"brand-logo"},"FizzBuzz")))}}]),a}(n.Component)),p=a(7),h=a.n(p),b=a(18),v=a(19),d=a.n(v),z=(a(44),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={count:[],error:""},e.inputChange=e.inputChange.bind(Object(o.a)(e)),e.submitForm=e.submitForm.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"formSubmit",value:function(e){e.preventDefault()}},{key:"submitForm",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.get("https://fathomless-citadel-61453.herokuapp.com/count?count=".concat(this.state.count)).then((function(e){a.props.updateFun(e.data)}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("some erro occured",e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){var t=Number(e.target.value);if(""===e.target.value)this.setState({error:""});else if(isNaN(t))return void this.setState({error:"Please enter a valid Number"});this.setState({count:e.target.value}),this.setState({error:""})}},{key:"render",value:function(){var e=0==this.state.count.length?"disabled":"";return r.a.createElement("form",{action:"#",onSubmit:this.formSubmit},r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("a",{className:"waves-effect waves-light btn ".concat(e),name:"submit",onClick:this.submitForm},"button"),r.a.createElement("input",{placeholder:"Placeholder",id:"first_name",type:"text",className:"validate",onChange:this.inputChange}),""!=this.state.error?r.a.createElement("small",{className:"danger"},this.state.error):""))}}]),a}(n.Component)),j=(a(45),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){Object(i.a)(this,a);return t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return this.fizzbuzz=this.props.displayValue,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-container"},this.fizzbuzz?this.fizzbuzz.map((function(e,t){return r.a.createElement("p",{className:"fizbuz",key:t},"".concat(t+1,": ").concat(e))})):""))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={fizzbuzz:[]},e.updateCount=e.updateCount.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"updateCount",value:function(e){this.setState({fizzbuzz:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(z,{updateFun:this.updateCount}),r.a.createElement(j,{displayValue:this.state.fizzbuzz}))}}]),a}(n.Component);u.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.85078700.chunk.js.map