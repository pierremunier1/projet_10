(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1078:function(e,r,n){(function(e){function n(e,r){for(var n=0,t=e.length-1;t>=0;t--){var o=e[t];"."===o?e.splice(t,1):".."===o?(e.splice(t,1),n++):n&&(e.splice(t,1),n--)}if(r)for(;n--;n)e.unshift("..");return e}function t(e,r){if(e.filter)return e.filter(r);for(var n=[],t=0;t<e.length;t++)r(e[t],t,e)&&n.push(e[t]);return n}r.resolve=function(){for(var r="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var s=a>=0?arguments[a]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,o="/"===s.charAt(0))}return(o?"/":"")+(r=n(t(r.split("/"),function(e){return!!e}),!o).join("/"))||"."},r.normalize=function(e){var a=r.isAbsolute(e),s="/"===o(e,-1);return(e=n(t(e.split("/"),function(e){return!!e}),!a).join("/"))||a||(e="."),e&&s&&(e+="/"),(a?"/":"")+e},r.isAbsolute=function(e){return"/"===e.charAt(0)},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(t(e,function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},r.relative=function(e,n){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var n=e.length-1;n>=0&&""===e[n];n--);return r>n?[]:e.slice(r,n-r+1)}e=r.resolve(e).substr(1),n=r.resolve(n).substr(1);for(var o=t(e.split("/")),a=t(n.split("/")),s=Math.min(o.length,a.length),i=s,l=0;l<s;l++)if(o[l]!==a[l]){i=l;break}var c=[];for(l=i;l<o.length;l++)c.push("..");return(c=c.concat(a.slice(i))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,t=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!o){t=a;break}}else o=!1;return-1===t?n?"/":".":n&&1===t?"/":e.slice(0,t)},r.basename=function(e,r){var n=function(e){"string"!=typeof e&&(e+="");var r,n=0,t=-1,o=!0;for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){n=r+1;break}}else-1===t&&(o=!1,t=r+1);return-1===t?"":e.slice(n,t)}(e);return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n},r.extname=function(e){"string"!=typeof e&&(e+="");for(var r=-1,n=0,t=-1,o=!0,a=0,s=e.length-1;s>=0;--s){var i=e.charCodeAt(s);if(47!==i)-1===t&&(o=!1,t=s+1),46===i?-1===r?r=s:1!==a&&(a=1):-1!==r&&(a=-1);else if(!o){n=s+1;break}}return-1===r||-1===t||0===a||1===a&&r===t-1&&r===n+1?"":e.slice(r,t)};var o="b"==="ab".substr(-1)?function(e,r,n){return e.substr(r,n)}:function(e,r,n){return r<0&&(r=e.length+r),e.substr(r,n)}}).call(this,n(103))},2252:function(e,r,n){(function(r){const t=n(1078);e.exports={root:!0,globals:{preval:!1},env:{es6:!0,browser:!0,node:!0,mocha:!0},extends:["plugin:import/recommended","airbnb"],parser:"babel-eslint",parserOptions:{ecmaVersion:7,sourceType:"module"},plugins:["babel","import","jsx-a11y","mocha","prettier"],settings:{"import/resolver":{webpack:{config:t.join(r,"./docs/webpackBaseConfig.js")}}},rules:{"linebreak-style":"off","arrow-body-style":"off","arrow-parens":"off","object-curly-newline":"off","function-paren-newline":"off",indent:"off","implicit-arrow-linebreak":"off","space-before-function-paren":"off","no-confusing-arrow":"off","no-mixed-operators":"off","consistent-this":["error","self"],"max-len":["error",100,2,{ignoreUrls:!0}],"no-console":"error","prefer-destructuring":"off","no-alert":"error","no-param-reassign":"off","no-prototype-builtins":"off","operator-linebreak":"off","import/no-extraneous-dependencies":"off","import/namespace":["error",{allowComputed:!0}],"import/order":["error",{groups:[["index","sibling","parent","internal","external","builtin"]],"newlines-between":"never"}],"import/no-unresolved":"off","react/jsx-indent":"off","react/jsx-closing-bracket-location":"off","react/jsx-wrap-multilines":"off","react/jsx-indent-props":"off","react/jsx-one-expression-per-line":"off","react/jsx-handler-names":["error",{eventHandlerPrefix:"handle",eventHandlerPropPrefix:"on"}],"react/jsx-curly-brace-presence":"off","react/forbid-prop-types":"off","react/require-default-props":"off","react/destructuring-assignment":"off","react/jsx-filename-extension":["error",{extensions:[".js"]}],"react/no-danger":"error","react/no-direct-mutation-state":"error","react/no-find-dom-node":"off","react/sort-prop-types":"error","mocha/handle-done-callback":"error","mocha/no-exclusive-tests":"error","mocha/no-global-tests":"error","mocha/no-pending-tests":"error","mocha/no-skipped-tests":"error","jsx-a11y/label-has-associated-control":"off","jsx-a11y/label-has-for":"off","jsx-a11y/no-autofocus":"off","prettier/prettier":["error"],camelcase:["error",{allow:["^UNSAFE_"]}]}}}).call(this,"/")},3268:function(e,r,n){"use strict";var t=n(486),o=n.n(t),a=n(483),s=n.n(a),i=n(497),l=n.n(i),c=n(498),f=n.n(c),u=n(553),d=n.n(u),p=n(499),h=n.n(p),b=n(445),m=n.n(b),g=n(2),v=n.n(g),x=n(6),y=n.n(x),w=n(2252),j=n.n(w),T=n(3165),C=n(3160),k=n(3251),I=n(456),S={children:y.a.node,classes:y.a.objectOf(y.a.string)};function A(e){var r=e.children,n=e.classes;return v.a.createElement("div",{className:n.content},r)}A.propTypes=S,A.defaultProps={children:null,classes:{}};var O=Object(I.a)(function(){return{content:{position:"relative",zIndex:1}}})(A),E=n(457),z=n.n(E),P=n(459),q=n.n(P),W=n(3280),H=n(3207),N={classes:y.a.objectOf(y.a.string),icon:y.a.string,selected:y.a.bool,title:y.a.oneOfType([y.a.node,y.a.string])};function R(e){var r=e.classes,n=e.icon,t=e.selected,o=e.title,a=q()(e,["classes","icon","selected","title"]),s=n?v.a.createElement(W.a,{name:n}):null;return v.a.createElement(H.a,z()({classes:r,label:o,icon:s,selected:t,textColor:"primary"},a))}R.propTypes=N,R.defaultProps={classes:{},icon:null,selected:null,title:""};var V=Object(I.a)(function(e){return{textColorInherit:{opacity:1},root:m()({minWidth:40,fontSize:16,fontWeight:400},e.breakpoints.down("sm"),{fontSize:14}),selected:{fontWeight:"bold"}}})(R),B=function(e){function r(e){var n;return o()(this,r),n=l()(this,f()(r).call(this,e)),m()(d()(n),"handleTabChange",function(e,r){return n.updateSelectedTab(r)}),m()(d()(n),"handleViewChange",function(e){return n.updateSelectedTab(e)}),n.state={selectedTabIndex:e.defaultSelectedTabIndex},n}return h()(r,e),s()(r,[{key:"getSelectedTabIndex",value:function(){var e=this.props.selectedTabIndex,r=this.state.selectedTabIndex;return null===e?r:e}},{key:"updateSelectedTab",value:function(e){var r=this.props.onChange;this.setState(function(){return{selectedTabIndex:e}}),r(e)}},{key:"render",value:function(){var e=this.props,r=e.children,n=e.theme,t=e.isScrollable,o=e.width,a=e.classes,s=n.direction,i=g.Children.toArray(r),l=i.filter(function(e){return e.type===V}),c=i.filter(function(e){return e.type===O}),f=Object(T.b)("sm",o)?"off":"on";return v.a.createElement("div",null,!!l.length&&v.a.createElement(C.a,{className:a.tabs},v.a.createElement(k.a,{variant:t?"scrollable":"fullWidth",centered:!t,indicatorColor:"primary",textColor:"primary",value:this.getSelectedTabIndex(),onChange:this.handleTabChange,scrollButtons:f},l)),!!c.length&&v.a.createElement(j.a,{animateHeight:!0,axis:"rtl"===s?"x-reverse":"x",index:this.getSelectedTabIndex(),onChangeIndex:this.handleViewChange},c))}}]),r}(g.Component);m()(B,"propTypes",{children:y.a.node.isRequired,theme:y.a.shape({direction:y.a.string}).isRequired,width:y.a.oneOf(["xs","sm","md","lg","xl"]).isRequired,defaultSelectedTabIndex:y.a.number,selectedTabIndex:y.a.number,isScrollable:y.a.bool,onChange:y.a.func,classes:y.a.objectOf(y.a.string)}),m()(B,"defaultProps",{defaultSelectedTabIndex:0,selectedTabIndex:null,isScrollable:!1,onChange:function(){},classes:{}});var J=Object(T.a)({withTheme:!0})(B);J.Content=O,J.Item=V;r.a=Object(I.a)(function(){return{tabs:{position:"relative",zIndex:2}}})(J)}}]);
//# sourceMappingURL=default~policies~projects~projectsAdmin~userProfile.4f016c7c0532da642631.js.map