(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1698:function(e,t,n){__NEXT_REGISTER_PAGE("/command/kelleguides/add-admin",function(){return e.exports=n(1699),{page:e.exports.default}})},1699:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),u=n(25),c=n(8),s=n(21),l=n.n(s),p=n(13),f=n(23),m=n(15),d=n(27);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=[{header:"New User Creation",image:i.a.createElement("img",{src:"https://kw-sites.s3-us-west-2.amazonaws.com/kw-images-prod/s3fs-public/marketingprofile.svg",alt:"Marketing Profile"}),content:"Complete the data fields on the follwoing screen to create a new administrative user account"},{header:"Review and Confirm",image:i.a.createElement("img",{src:"https://kw-sites.s3-us-west-2.amazonaws.com/kw-images-prod/s3fs-public/review-confirm.svg",alt:"Review and confirm"}),content:"Confirm the information you've entered and manage any existing administrative account"}],O=function(e){function t(){var e,n,r,a,i,u,c,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,f=new Array(p),m=0;m<p;m++)f[m]=arguments[m];return r=this,a=(e=h(t)).call.apply(e,[this].concat(f)),n=!a||"object"!==b(a)&&"function"!=typeof a?v(r):a,u=v(n),c="componentDidMount",i=o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.router.pathname,e.next=3,n.props.findCurrentKelleGuideStep(t);case 3:n.props.setCurrentStepInProgress(n.props.currentStep);case 4:case"end":return e.stop()}},e)}),s=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function a(e){w(o,n,r,a,u,"next",e)}function u(e){w(o,n,r,a,u,"throw",e)}a(void 0)})},c in u?Object.defineProperty(u,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):u[c]=s,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.steps,n=e.currentStep,r=t.length?t[0].url:null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.x,{title:f.d,subtitle:f.c}),i.a.createElement(p.D,{items:t,currentStep:n,isValid:!0,validateStep:function(){return!0}}),i.a.createElement(p.w,{url:r,buttonMessage:"Get Started!",title:"What should I expect to get out of this guide?",subtitle:"Learn how to Add Admin, for your ease",steps:S}))}}])&&y(n.prototype,r),a&&y(n,a),t}(),j=Object(c.b)({currentStep:Object(d.a)(),steps:Object(d.c)(),isValid:Object(d.b)()});t.default=Object(u.b)(j,{setCurrentStep:m.d,setCurrentKelleGuide:m.c,setCurrentStepInProgress:m.e,findCurrentKelleGuideStep:m.a,validateEmailMarketing:m.f})(Object(s.withRouter)(O))}},[[1698,1,0,2]]]);