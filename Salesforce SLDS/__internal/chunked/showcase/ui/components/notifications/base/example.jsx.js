var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/notifications/base/example.jsx.js"]=function(e){function t(t){for(var n,s,o=t[0],r=t[1],d=t[2],m=0,u=[];m<o.length;m++)s=o[m],i[s]&&u.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(c&&c(t);u.length;)u.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={51:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=r;return l.push([118,0]),a()}({0:function(e,t){e.exports=React},118:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var n=r(a(0)),i=r(a(5)),l=r(a(2)),s=a(11),o=r(a(1));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return n.default.createElement("div",{className:"slds-notification-container"},e.children)},c=function(e){var t=i.default.uniqueId("dialog-body-id-");return n.default.createElement("section",{className:"slds-notification",role:"dialog","aria-labelledby":e.headingID,"aria-describedby":t},n.default.createElement("div",{className:"slds-notification__body",id:t},n.default.createElement("a",{className:"slds-notification__target slds-media",href:"javascript:void(0);"},n.default.createElement(s.StandardIcon,{containerClassName:"slds-media__figure",className:"slds-icon_small",assistiveText:!1,symbol:e.type,title:e.type}),n.default.createElement("div",{className:"slds-media__body"},n.default.createElement("h2",{className:"slds-text-heading_small slds-m-bottom_xx-small",id:e.headingID},n.default.createElement("span",{className:"slds-assistive-text"},e.type+" notification:"),e.title),n.default.createElement("p",null,e.description))),n.default.createElement(l.default,{className:"slds-button_icon-container slds-notification__close",symbol:"close",assistiveText:"Dismiss "+e.title+" notification",title:"Dismiss "+e.title+" notification"})),e.footer?n.default.createElement("footer",{className:(0,o.default)("slds-notification__footer",e.footerClassName)},e.footer):null)};t.default=n.default.createElement("div",{className:"demo-only slds-is-relative",style:{height:"4.5rem"}},n.default.createElement(d,null,n.default.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"event notification: Tesla - Renewal meeting"),n.default.createElement(c,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"})));t.examples=[{id:"task-notification",label:"Task Notification",element:n.default.createElement("div",{className:"demo-only slds-is-relative",style:{height:"4.5rem"}},n.default.createElement(d,null,n.default.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),n.default.createElement(c,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"})))},{id:"stacked-2",label:"Stacked Notifications",element:n.default.createElement("div",{className:"demo-only slds-is-relative",style:{height:"15rem"}},n.default.createElement(d,null,n.default.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),n.default.createElement(c,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),n.default.createElement(c,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"})))},{id:"stacked-3",label:"Three Stacked Notifications",element:n.default.createElement("div",{className:"demo-only slds-is-relative",style:{height:"15rem"}},n.default.createElement(d,null,n.default.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),n.default.createElement(c,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),n.default.createElement(c,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),n.default.createElement(c,{headingID:"noti66",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"})))},{id:"overflow-six",label:"Six Stacked Notifications",element:n.default.createElement("div",{className:"demo-only slds-is-relative",style:{height:"17rem"}},n.default.createElement(d,null,n.default.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),n.default.createElement(c,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),n.default.createElement(c,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),n.default.createElement(c,{headingID:"noti66",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"}),n.default.createElement(c,{headingID:"noti48",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),n.default.createElement(c,{headingID:"noti59",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),n.default.createElement(c,{headingID:"noti86",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"})))}]}});