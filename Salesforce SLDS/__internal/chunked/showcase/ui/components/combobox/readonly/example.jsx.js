var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/combobox/readonly/example.jsx.js"]=function(e){function t(t){for(var l,a,d=t[0],r=t[1],c=t[2],u=0,m=[];u<d.length;u++)a=d[u],o[a]&&m.push(o[a][0]),o[a]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);for(s&&s(t);m.length;)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],l=!0,d=1;d<n.length;d++){var r=n[d];0!==o[r]&&(l=!1)}l&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},o={79:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},i=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var s=r;return i.push([147,0]),n()}({0:function(e,t){e.exports=React},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(15),i=n(19);var a=function(e){return l.default.createElement(o.Listbox,{className:"slds-dropdown slds-dropdown_fluid",vertical:!0},l.default.createElement(o.ListboxItem,null,l.default.createElement(o.Option,{id:"listbox-option-unique-id-01",title:"Option A",focused:e.focused,selected:e.optionOneSelected})),l.default.createElement(o.ListboxItem,null,l.default.createElement(o.Option,{id:"listbox-option-unique-id-02",title:"Option B",selected:e.optionTwoSelected})))};t.default=l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",listbox:l.default.createElement(a,null),readonly:!0}));t.states=[{id:"focused",label:"Focused",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:l.default.createElement(a,null),readonly:!0})),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{id:"open-item-focused",label:"Open - Item Focused",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:l.default.createElement(a,{focused:!0}),"aria-activedescendant":"listbox-option-unique-id-01",readonly:!0}))},{id:"open-option-selected",label:"Open - Option Selected",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:l.default.createElement(a,{optionOneSelected:!0}),readonly:!0}))},{id:"open-options-selected",label:"Open - Option(s) Selected",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:l.default.createElement(a,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0}))},{id:"closed-option-selected",label:"Option Selected",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:l.default.createElement(a,{focused:!0,optionOneSelected:!0}),readonly:!0}))},{id:"closed-options-selected",label:"Option(s) Selected",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:l.default.createElement(a,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0},l.default.createElement(i.ListboxPills,{className:"slds-p-top_xxx-small"},l.default.createElement(i.ListboxPillsItem,null,l.default.createElement(i.ListboxPill,{label:"Option A",tabIndex:"0"})),l.default.createElement(i.ListboxPillsItem,null,l.default.createElement(i.ListboxPill,{label:"Option B"})))))}]}});