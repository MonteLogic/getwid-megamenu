(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,n){}}]),function(e){function t(t){for(var o,l,c=t[0],a=t[1],s=t[2],m=0,d=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;i.push([17,2]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){var o=n(9),r=n(10),i=n(11),l=n(13);e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||l()}},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/menu-item","category":"layout","parent":["getwid-megamenu/menu"],"attributes":{"url":{"type":"string","default":""},"id":{"type":"string"},"kind":{"type":"string"},"text":{"type":"string"},"linkTarget":{"type":"string"},"rel":{"type":"string"},"textColor":{"type":"string"},"customTextColor":{"type":"string"},"fontSize":{"type":"string"},"customFontSize":{"type":"string"}},"supports":{"anchor":false,"align":false,"alignWide":false,"reusable":false,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/plain-menu-item","category":"layout","parent":["getwid-megamenu/plain-menu"],"attributes":{"url":{"type":"string","default":""},"id":{"type":"string"},"kind":{"type":"string"},"text":{"type":"string"},"linkTarget":{"type":"string"},"rel":{"type":"string"},"textColor":{"type":"string"},"customTextColor":{"type":"string"},"fontSize":{"type":"string"},"customFontSize":{"type":"string"}},"supports":{"anchor":false,"align":false,"alignWide":false,"reusable":false,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/menu","category":"layout","attributes":{"itemsJustification":{"type":"string"},"expandDropdown":{"type":"boolean","default":false},"menuMaxWidth":{"type":"number"},"dropdownMaxWidth":{"type":"number"},"dropdownContentMaxWidth":{"type":"number"},"collapseOnMobile":{"type":"boolean","default":true},"responsiveBreakpoint":{"type":"number","default":600},"menuItemFontSize":{"type":"string"},"customMenuItemFontSize":{"type":"number"},"menuItemColor":{"type":"string"},"customMenuItemColor":{"type":"string"},"toggleButtonAlignment":{"type":"string"}},"supports":{"anchor":false,"align":["wide","full"],"reusable":false,"customClassName":true,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/plain-menu","category":"layout","attributes":{"itemsJustification":{"type":"string"},"orientation":{"type":"string","default":"horizontal"},"menuItemFontSize":{"type":"string"},"customMenuItemFontSize":{"type":"number"},"menuItemColor":{"type":"string"},"customMenuItemColor":{"type":"string"}},"supports":{"anchor":false,"align":false,"reusable":false,"customClassName":true,"lightBlockWrapper":false}}')},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}},function(e,t,n){var o=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(0),i=wp.blockEditor.InnerBlocks;var l=n(1),c=n.n(l),a=n(2),s=n.n(a),u=wp.components,m=u.BaseControl,d=u.ColorIndicator,p=wp.blockEditor.ColorPalette;var b=function(e){var t=e.label,n=e.color,o=e.disableCustomColors,i=e.clearable,l=e.onChange;return Object(r.createElement)(m,null,Object(r.createElement)(m.VisualLabel,null,t,n&&Object(r.createElement)(d,{colorValue:n,style:{verticalAlign:"text-bottom",background:n}})),Object(r.createElement)(p,{value:n,onChange:l,disableCustomColors:o,clearable:i}))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var f=wp.i18n.__,w=wp.element.useEffect,k=wp.blockEditor,h=k.BlockControls,v=k.InspectorControls,O=k.FontSizePicker,y=k.withFontSizes,C=k.withColors,j=wp.components,E=j.PanelBody,x=j.Toolbar,I=j.ToolbarButton,B=j.ToolbarGroup,S=j.RangeControl,_=j.BaseControl,M=j.ButtonGroup,P=j.Button,z=j.ToggleControl,A=wp.data.withDispatch;var D=(0,wp.compose.compose)([C({menuItemColor:"color"}),y("menuItemFontSize"),A((function(e,t,n){return{updateChildBlocksAttributes:function(o){var r=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlocksByClientId)(t.clientId)[0].innerBlocks.forEach((function(e){r(e.clientId,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))}))}}}))])((function(e){var t=e.setAttributes,n=e.attributes,o=e.menuItemFontSize,i=e.setMenuItemFontSize,l=e.menuItemColor,c=e.setMenuItemColor,a=e.updateChildBlocksAttributes;function s(e){return function(){var o=n.itemsJustification===e?void 0:e;t({itemsJustification:o})}}function u(){t({expandDropdown:!n.expandDropdown})}return w((function(){a({fontSize:o.slug,customFontSize:o.slug?void 0:o.size})}),[o.size]),w((function(){a({textColor:l.slug,customTextColor:l.slug?void 0:l.color})}),[l.color]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(h,null,Object(r.createElement)(x,{icon:n.itemsJustification?"editor-align".concat(n.itemsJustification):"editor-alignleft",label:f("Change items justification"),isCollapsed:!0,controls:[{icon:"editor-alignleft",title:f("Justify items left"),isActive:"left"===n.itemsJustification,onClick:s("left")},{icon:"editor-aligncenter",title:f("Justify items center"),isActive:"center"===n.itemsJustification,onClick:s("center")},{icon:"editor-alignright",title:f("Justify items right"),isActive:"right"===n.itemsJustification,onClick:s("right")}]}),Object(r.createElement)(B,null,Object(r.createElement)(I,{name:"expand",icon:n.expandDropdown?"editor-contract":"editor-expand",title:f("Expand dropdown"),onClick:u}))),Object(r.createElement)(v,null,Object(r.createElement)(E,{title:f("Styles"),initialOpen:!0},Object(r.createElement)(O,{value:o.size,onChange:i}),Object(r.createElement)(b,{label:f("Menu Item Color"),disableCustomColors:!1,color:l.color,onChange:c,clearable:!0}),Object(r.createElement)(z,{label:f("Expand dropdown"),help:n.expandDropdown?f("Dropdown width same as window width."):f("Dropdown width same as menu width."),checked:n.expandDropdown,onChange:u})),Object(r.createElement)(E,{title:f("Width Settings"),initialOpen:!1},Object(r.createElement)(S,{label:f("Maximum width of top-level menu in pixels"),value:n.menuMaxWidth,onChange:function(e){return t({menuMaxWidth:e})},min:0,max:2e3}),Object(r.createElement)(S,{label:f("Maximum width of dropdown in pixels"),value:n.dropdownMaxWidth,onChange:function(e){return t({dropdownMaxWidth:e})},min:0,max:2e3}),Object(r.createElement)(S,{label:f("Maximum width of dropdown content in pixels"),value:n.dropdownContentMaxWidth,onChange:function(e){return t({dropdownContentMaxWidth:e})},min:0,max:2e3})),Object(r.createElement)(E,{title:f("Responsive Settings"),initialOpen:!1},Object(r.createElement)(S,{label:f("Mobile device breakpoint in pixels"),value:n.responsiveBreakpoint,onChange:function(e){return t({responsiveBreakpoint:e})},min:0,max:2e3}),Object(r.createElement)(z,{label:f("Collapse on mobile?"),help:n.collapseOnMobile?f("Menu will be transformed to burger."):f("Menu will be as it is."),checked:n.collapseOnMobile,onChange:function(e){return t({collapseOnMobile:e})}}),Object(r.createElement)(_,{label:f("Toggle button alignment")},Object(r.createElement)(M,null,Object(r.createElement)(P,{icon:"editor-alignleft",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"left"})},isPrimary:"left"===n.toggleButtonAlignment}),Object(r.createElement)(P,{icon:"editor-aligncenter",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"center"})},isPrimary:"center"===n.toggleButtonAlignment}),Object(r.createElement)(P,{icon:"editor-alignright",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"right"})},isPrimary:"right"===n.toggleButtonAlignment}))))))})),T=(wp.i18n.__,wp.element.useRef),F=wp.blockEditor.InnerBlocks,J=wp.data.withSelect,N=wp.compose.compose,W=[["getwid-megamenu/menu-item",{}]],L=["getwid-megamenu/menu-item"];var R=N([J((function(e,t){var n,o=t.clientId,r=e("core/block-editor"),i=r.getClientIdsOfDescendants,l=r.hasSelectedInnerBlock,c=r.getSelectedBlockClientId,a=r.getBlocksByClientId;return{isImmediateParentOfSelectedBlock:l(o,!1),selectedBlockHasDescendants:!!(null===(n=i([c()]))||void 0===n?void 0:n.length),menuItems:a(o)[0].innerBlocks}}))])((function(e){var t,n=e.selectedBlockHasDescendants,o=e.isImmediateParentOfSelectedBlock,i=e.isSelected,l=e.attributes,a=T(),u=s()("wp-block-getwid-megamenu","gw-mm",(t={},c()(t,"justify-items-".concat(l.itemsJustification),l.itemsJustification),c()(t,"has-full-width-dropdown",l.expandDropdown),t)),m={maxWidth:l.menuMaxWidth};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(D,e),Object(r.createElement)("div",{className:u},Object(r.createElement)("div",{className:"gw-mm__wrapper",style:m},Object(r.createElement)("div",{className:"gw-mm__content-wrapper"},Object(r.createElement)("div",{className:"gw-mm__content"},Object(r.createElement)(F,{ref:a,template:W,templateLock:!1,allowedBlocks:L,templateInsertUpdatesSelection:!1,renderAppender:!!(o&&!n||i)&&F.DefaultAppender,__experimentalMoverDirection:"horizontal",orientation:"horizontal"}))))))})),H=wp.blocks.registerBlockType,G=wp.i18n.__;H(o.name,{title:G("Mega Menu","getwid-megamenu"),keywords:[G("navigation","getwid-megamenu"),G("links","getwid-megamenu")],icon:"menu",category:o.category,attributes:o.attributes,supports:o.supports,edit:R,save:function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.Content,null))}});var U=n(4),q=wp.blockEditor.InnerBlocks;var V=n(8),$=n.n(V),K=n(3),Q=n.n(K),X=lodash.escape,Y=wp.i18n.__,Z=wp.element,ee=Z.useCallback,te=Z.useState,ne=Z.useEffect,oe=wp.components,re=oe.PanelBody,ie=oe.TextControl,le=oe.ToggleControl,ce=oe.ToolbarButton,ae=oe.ToolbarGroup,se=oe.Popover,ue=wp.blockEditor,me=ue.BlockControls,de=ue.InspectorControls,pe=ue.__experimentalLinkControl;var be=function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes,i=e.toggleItemDropdown,l=n.linkTarget,c=n.rel,a=n.text,s=n.url,u=te(!1),m=Q()(u,2),d=m[0],p=m[1],b=!(void 0===s||0===s.trim().length),g=ee((function(e){var t=e?"_blank":void 0,n=c;t&&!c?n="noreferrer noopener":t||"noreferrer noopener"!==c||(n=void 0),o({linkTarget:t,rel:n})}),[c,o]),f=ee((function(e){o({rel:e})}),[o]);return ne((function(){t&&!s&&p(!0)}),[t]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(me,null,Object(r.createElement)(ae,null,Object(r.createElement)(ce,{name:"link",icon:"admin-links",title:Y("Edit Link"),onClick:function(){return p(!0),!1},isActive:b}),Object(r.createElement)(ce,{name:"unlink",icon:"editor-unlink",title:Y("Unlink"),onClick:function(){o({url:void 0,linkTarget:void 0,rel:void 0}),p(!1)},isDisabled:!b})),Object(r.createElement)(ae,null,Object(r.createElement)(ce,{name:"submenu",icon:"download",title:Y("Add submenu"),onClick:i}))),d&&Object(r.createElement)(se,{position:"top center",onClose:function(){return p(!1)}},Object(r.createElement)(pe,{value:{url:s,opensInNewTab:"_blank"===l},onChange:function(e){var t=e.title,n=void 0===t?"":t,r=e.url,i=void 0===r?"":r,c=e.opensInNewTab,s=e.id,u=void 0===s?"":s,m=e.kind;o({id:u,kind:void 0===m?"":m,url:i,text:a||(""!==n&&a!==n?X(n):void 0)}),"_blank"===l!==c&&g(c),p(!1)}})),Object(r.createElement)(de,null,Object(r.createElement)(re,{title:Y("Link settings")},Object(r.createElement)(le,{label:Y("Open in new tab"),onChange:g,checked:"_blank"===l}),Object(r.createElement)(ie,{label:Y("Link rel"),value:c||"",onChange:f}))))},ge=lodash,fe=ge.head,we=ge.isEqual,ke=wp.i18n.__,he=wp.element,ve=he.useState,Oe=he.useEffect,ye=wp.compose.compose,Ce=wp.data,je=Ce.withSelect,Ee=Ce.withDispatch,xe=wp.blockEditor,Ie=xe.RichText,Be=xe.InnerBlocks;var Se=ye([je((function(e,t){var n=e("core/block-editor"),o=n.hasSelectedInnerBlock,r=n.getClientIdsOfDescendants,i=n.getBlockParentsByBlockName,l=n.getBlock,c=t.clientId,a=o(c,!0),s=!!r([c]).length,u=fe(i(c,"getwid-megamenu/menu"));return{isParentOfSelectedBlock:a,hasDescendants:s,rootBlockClientId:u,clientId:c,parentAttributes:l(u).attributes}})),Ee((function(e,t){var n=t.clientId;return{updateInnerBlocks:function(t){e("core/block-editor").replaceInnerBlocks(n,[],!1)}}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,i=e.isSelected,l=e.onReplace,a=e.mergeBlocks,u=e.isParentOfSelectedBlock,m=e.hasDescendants,d=e.updateInnerBlocks,p=e.rootBlockClientId,b=e.clientId,g=e.parentAttributes,f=n.text,w=ke("Add link…"),k=ve(m),h=Q()(k,2),v=h[0],O=h[1],y=v||m,C=(i||u)&&y,j=ve({left:0,width:"auto"}),E=Q()(j,2),x=E[0],I=E[1],B=function(){var e,t=document.querySelector('[data-block="'+b+'"]').getBoundingClientRect(),n=(g.expandDropdown?document.querySelector(".editor-styles-wrapper"):document.querySelector('[data-block="'+p+'"] .wp-block-getwid-megamenu')).getBoundingClientRect(),o=-(t.x-n.x);g.dropdownMaxWidth&&n.width>g.dropdownMaxWidth&&(o+=(n.width-g.dropdownMaxWidth)/2),e={left:o,width:n.width},we(e,x)||I(e)};Oe((function(){B()}),[i]),Oe((function(){window.addEventListener("resize",B)}),[]),Oe((function(){o({fontSize:g.menuItemFontSize,customFontSize:g.customMenuItemFontSize,textColor:g.menuItemColor,customTextColor:g.customMenuItemColor})}),[]);var S={left:x.left,width:x.width,maxWidth:g.dropdownMaxWidth},_={backgroundColor:n.customDropdownBackgroundColor},M={maxWidth:g.dropdownContentMaxWidth},P=s()("gw-mm-item__dropdown",c()({"has-background":n.dropdownBackgroundColor||n.customDropdownBackgroundColor},"has-".concat(n.dropdownBackgroundColor,"-background-color"),!!n.dropdownBackgroundColor)),z=s()("wp-block-getwid-megamenu-item","gw-mm-item",{"has-child":m,"is-opened":C}),A=s()("gw-mm-item__link",(t={"has-text-color":n.textColor||n.customTextColor},c()(t,"has-".concat(n.textColor,"-color"),!!n.textColor),c()(t,"has-".concat(n.fontSize,"-font-size"),!!n.fontSize),t)),D={color:n.customTextColor,fontSize:n.customFontSize};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:z},Object(r.createElement)("div",{className:A,style:D},Object(r.createElement)("a",{href:"#",onClick:function(){return!1}},Object(r.createElement)(Ie,{placeholder:w,value:f,onChange:function(e){return o({text:e})},withoutInteractiveFormatting:!0,onReplace:l,onMerge:a,identifier:"text"}),y&&Object(r.createElement)("span",{className:"gw-mm-item__dropdown-icon"},Object(r.createElement)("span",{className:"dashicons dashicons-arrow-down"})))),C&&Object(r.createElement)("div",{className:"gw-mm-item__dropdown-wrapper",style:S},Object(r.createElement)("div",{className:P,style:_},Object(r.createElement)("div",{className:"gw-mm-item__dropdown-content",style:M},Object(r.createElement)(Be,null))))),Object(r.createElement)(be,$()({},e,{toggleItemDropdown:function(){return O(!v),m&&d(),!1},isItemDropdownOpened:v})))})),_e=wp.blocks.registerBlockType,Me=wp.i18n.__;_e(U.name,{title:Me("Menu Item","getwid-megamenu"),icon:"admin-links",category:U.category,parent:U.parent,attributes:U.attributes,supports:U.supports,edit:Se,save:function(){return Object(r.createElement)(q.Content,null)}});var Pe=n(7),ze=wp.blockEditor.InnerBlocks;function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var De=wp.i18n.__,Te=wp.element.useEffect,Fe=wp.blockEditor,Je=Fe.BlockControls,Ne=Fe.InspectorControls,We=Fe.FontSizePicker,Le=Fe.withFontSizes,Re=Fe.withColors,He=wp.components,Ge=He.PanelBody,Ue=He.Toolbar,qe=He.ToolbarButton,Ve=He.ToolbarGroup,$e=wp.data.withDispatch;var Ke=(0,wp.compose.compose)([Re({menuItemColor:"color"}),Le("menuItemFontSize"),$e((function(e,t,n){return{updateChildBlocksAttributes:function(o){var r=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlocksByClientId)(t.clientId)[0].innerBlocks.forEach((function(e){r(e.clientId,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))}))}}}))])((function(e){var t=e.setAttributes,n=e.attributes,o=e.menuItemFontSize,i=e.setMenuItemFontSize,l=e.menuItemColor,c=e.setMenuItemColor,a=e.updateChildBlocksAttributes;function s(e){return function(){var o=n.itemsJustification===e?void 0:e;t({itemsJustification:o})}}return Te((function(){a({fontSize:o.slug,customFontSize:o.slug?void 0:o.size})}),[o.size]),Te((function(){a({textColor:l.slug,customTextColor:l.slug?void 0:l.color})}),[l.color]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Je,null,Object(r.createElement)(Ue,{icon:n.itemsJustification?"editor-align".concat(n.itemsJustification):"editor-alignleft",label:De("Change items justification"),isCollapsed:!0,controls:[{icon:"editor-alignleft",title:De("Justify items left"),isActive:"left"===n.itemsJustification,onClick:s("left")},{icon:"editor-aligncenter",title:De("Justify items center"),isActive:"center"===n.itemsJustification,onClick:s("center")},{icon:"editor-alignright",title:De("Justify items right"),isActive:"right"===n.itemsJustification,onClick:s("right")}]}),Object(r.createElement)(Ve,null,Object(r.createElement)(qe,{name:"orientation",icon:"image-rotate-right",title:"vertical"===n.orientation?De("Make horizontal"):De("Make vertical"),isActive:"vertical"===n.orientation,onClick:function(){t({orientation:"vertical"===n.orientation?"horizontal":"vertical"})}}))),Object(r.createElement)(Ne,null,Object(r.createElement)(Ge,{title:De("Settings"),initialOpen:!0},Object(r.createElement)(We,{value:o.size,onChange:i}),Object(r.createElement)(b,{label:De("Color"),disableCustomColors:!1,color:l.color,onChange:c,clearable:!0}))))})),Qe=wp.element.useRef,Xe=wp.blockEditor.InnerBlocks,Ye=wp.data.withSelect,Ze=wp.compose.compose,et=[["getwid-megamenu/plain-menu-item",{}]],tt=["getwid-megamenu/plain-menu-item"];var nt=Ze([Ye((function(e,t){var n,o=t.clientId,r=e("core/block-editor"),i=r.getClientIdsOfDescendants,l=r.hasSelectedInnerBlock,c=r.getSelectedBlockClientId;return{isImmediateParentOfSelectedBlock:l(o,!1),selectedBlockHasDescendants:!!(null===(n=i([c()]))||void 0===n?void 0:n.length)}}))])((function(e){var t,n=e.selectedBlockHasDescendants,o=e.isImmediateParentOfSelectedBlock,i=e.isSelected,l=e.attributes,a=Qe(),u=s()("wp-block-getwid-plain-menu","gw-pm",(t={},c()(t,"justify-items-".concat(l.itemsJustification),l.itemsJustification),c()(t,"is-orientation-".concat(l.orientation),l.orientation),t));return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Ke,e),Object(r.createElement)("div",{className:u},Object(r.createElement)("div",{className:"gw-pm__content"},Object(r.createElement)(Xe,{ref:a,template:et,templateLock:!1,allowedBlocks:tt,templateInsertUpdatesSelection:!1,renderAppender:!!(o&&!n||i)&&Xe.DefaultAppender,__experimentalMoverDirection:l.orientation,orientation:l.orientation}))))})),ot=wp.blocks.registerBlockType,rt=wp.i18n.__;ot(Pe.name,{title:rt("Plain Menu","getwid-megamenu"),icon:"menu",category:Pe.category,attributes:Pe.attributes,supports:Pe.supports,edit:nt,save:function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(ze.Content,null))}});var it=n(5),lt=wp.blockEditor.InnerBlocks;var ct=lodash.escape,at=wp.i18n.__,st=wp.element,ut=st.useCallback,mt=st.useState,dt=st.useEffect,pt=wp.components,bt=pt.PanelBody,gt=pt.TextControl,ft=pt.ToggleControl,wt=pt.ToolbarButton,kt=pt.ToolbarGroup,ht=pt.Popover,vt=wp.blockEditor,Ot=vt.BlockControls,yt=vt.InspectorControls,Ct=vt.__experimentalLinkControl;var jt=function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes,i=e.insertPlainMenuItem,l=n.linkTarget,c=n.rel,a=n.text,s=n.url,u=mt(!1),m=Q()(u,2),d=m[0],p=m[1],b=!(void 0===s||0===s.trim().length),g=ut((function(e){o({rel:e})}),[o]),f=ut((function(e){var t=e?"_blank":void 0,n=c;t&&!c?n="noreferrer noopener":t||"noreferrer noopener"!==c||(n=void 0),o({linkTarget:t,rel:n})}),[c,o]);return dt((function(){t&&!s&&p(!0)}),[t]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Ot,null,Object(r.createElement)(kt,null,Object(r.createElement)(wt,{name:"link",icon:"admin-links",title:at("Edit Link"),onClick:function(){return p(!0),!1},isActive:b}),Object(r.createElement)(wt,{name:"unlink",icon:"editor-unlink",title:at("Unlink"),onClick:function(){o({url:void 0,linkTarget:void 0,rel:void 0}),p(!1)},isDisabled:!b})),Object(r.createElement)(kt,null,Object(r.createElement)(wt,{name:"submenu",icon:"download",title:at("Add submenu"),onClick:i}))),d&&Object(r.createElement)(ht,{position:"bottom center",onClose:function(){return p(!1)}},Object(r.createElement)(Ct,{value:{url:s,opensInNewTab:"_blank"===l},onChange:function(e){var t=e.title,n=void 0===t?"":t,r=e.url,i=void 0===r?"":r,c=e.opensInNewTab,s=e.id,u=void 0===s?"":s,m=e.kind;o({id:u,kind:void 0===m?"":m,url:i,text:a||(""!==n&&a!==n?ct(n):void 0)}),"_blank"===l!==c&&f(c)}})),Object(r.createElement)(yt,null,Object(r.createElement)(bt,{title:at("Link settings")},Object(r.createElement)(ft,{label:at("Open in new tab"),onChange:f,checked:"_blank"===l}),Object(r.createElement)(gt,{label:at("Link rel"),value:c||"",onChange:g}))))},Et=lodash.head,xt=wp.i18n.__,It=wp.element,Bt=It.useState,St=It.useEffect,_t=wp.compose.compose,Mt=wp.data,Pt=Mt.withSelect,zt=Mt.withDispatch,At=wp.blockEditor,Dt=At.RichText,Tt=At.InnerBlocks,Ft=wp.blocks.createBlock;var Jt=_t([Pt((function(e,t){var n,o=e("core/block-editor"),r=o.hasSelectedInnerBlock,i=o.getClientIdsOfDescendants,l=o.getBlockParentsByBlockName,c=o.getSelectedBlockClientId,a=o.getBlock,s=t.clientId,u=r(s,!0),m=r(s,!1),d=!!i([s]).length,p=!!(null===(n=i([c()]))||void 0===n?void 0:n.length),b=Et(l(s,"getwid-megamenu/plain-menu")),g=Et(l(s,"getwid-megamenu/plain-menu-item"));return{isParentOfSelectedBlock:u,isImmediateParentOfSelectedBlock:m,selectedBlockHasDescendants:p,hasDescendants:d,rootBlockClientId:b,clientId:s,parentAttributes:a(b).attributes,parentItemClientId:g}})),zt((function(e,t,n){return{clearInnerBlocks:function(n){e("core/block-editor").replaceInnerBlocks(t.clientId,[],!1)},insertPlainMenuItem:function(){var o=e("core/block-editor").insertBlock,r=(0,n.select("core/block-editor").getClientIdsOfDescendants)([t.clientId]),i=r.length?r.length:0;o(Ft("getwid-megamenu/plain-menu-item"),i,t.clientId)}}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,i=e.isSelected,l=e.onReplace,a=e.mergeBlocks,u=e.isParentOfSelectedBlock,m=e.isImmediateParentOfSelectedBlock,d=e.hasDescendants,p=e.insertPlainMenuItem,b=e.selectedBlockHasDescendants,g=e.parentAttributes,f=e.parentItemClientId,w=n.text,k=xt("Add link…"),h=Bt(d),v=Q()(h,2),O=v[0],y=(v[1],i||u),C=O||d,j=y&&C,E=s()("wp-block-getwid-plain-menu-item","gw-pm-item",{"has-child":d,"has-child-selected":u,"is-opened":j});St((function(){o({fontSize:f?void 0:g.menuItemFontSize,customFontSize:f?void 0:g.customMenuItemFontSize,textColor:f?void 0:g.menuItemColor,customTextColor:f?void 0:g.customMenuItemColor})}),[]);var x=s()("gw-pm-item__link",(t={"has-text-color":n.textColor||n.customTextColor},c()(t,"has-".concat(n.textColor,"-color"),!!n.textColor),c()(t,"has-".concat(n.fontSize,"-font-size"),!!n.fontSize),t)),I={color:n.customTextColor,fontSize:n.customFontSize};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:E},Object(r.createElement)("div",{className:x,style:I},Object(r.createElement)("a",{href:"#",onClick:function(){return!1}},Object(r.createElement)(Dt,{placeholder:k,value:w,onChange:function(e){return o({text:e})},withoutInteractiveFormatting:!0,onReplace:l,onMerge:a,identifier:"text"}),C&&Object(r.createElement)("span",{className:"gw-pm-item__dropdown-icon"},Object(r.createElement)("span",{className:"dashicons dashicons-arrow-down"})))),y&&Object(r.createElement)("div",{className:"gw-pm-item__dropdown"},Object(r.createElement)("div",{className:"gw-pm-item__dropdown-content"},Object(r.createElement)(Tt,{allowedBlocks:["getwid-megamenu/plain-menu-item"],renderAppender:!!(i&&d||m&&!b)&&Tt.DefaultAppender})))),Object(r.createElement)(jt,$()({},e,{insertPlainMenuItem:p})))})),Nt=wp.blocks.registerBlockType,Wt=wp.i18n.__;Nt(it.name,{title:Wt("Plain Menu Item","getwid-megamenu"),icon:"admin-links",category:it.category,parent:it.parent,attributes:it.attributes,supports:it.supports,edit:Jt,save:function(){return Object(r.createElement)(lt.Content,null)}});n(14),n(15)}]);