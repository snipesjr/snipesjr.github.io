(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2879)}])},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},2879:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return w}});var d=c(5893),e=c(9008),f=c.n(e),g=function(a){var b=a.children;return(0,d.jsx)("div",{className:"container mx-auto px-5 dark:text-white",children:b})},h=g,i=function(){return(0,d.jsx)("footer",{className:"bg-neutral-50",children:(0,d.jsx)("small",{className:"text-xs px-4",children:"\xa9 Copyright 2022, Jake Snipes"})})},j=i,k=function(){return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Jake Snipes"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.ico"}),(0,d.jsx)("meta",{name:"description",content:"Jake Snipes Personal Website"})]})},l=k,m=c(1664),n=c.n(m),o=c(3750),p=function(a){var b=a.text,c=a.url;return(0,d.jsx)("a",{href:c,className:"cursor-pointer rounded-md px-4 py-[0.10.rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800",children:b})},q=function(){return(0,d.jsx)(h,{children:(0,d.jsxs)("header",{className:"font-jost py-8 pr-4 sm:flex sm:flex-row sm:items-center sm:justify-between",children:[(0,d.jsxs)("p",{className:"hidden sm:flex sm:flex-row sm:gap-x-4",children:[(0,d.jsx)(p,{text:"Home",url:"#"}),(0,d.jsx)(p,{text:"About",url:"#about"}),(0,d.jsx)(p,{text:"Skills",url:"#skills"})]}),(0,d.jsxs)("div",{className:"flex items-center justify center",children:[(0,d.jsx)(n(),{href:"https://github.com/snipesjr",passHref:!0,children:(0,d.jsx)("a",{className:"float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0",target:"_blank",rel:"noopener noreferrer","aria-label":"github-repo",children:(0,d.jsx)(o.rFR,{})})}),(0,d.jsx)(n(),{href:"https://www.linkedin.com/in/jake-snipes-93256737/",passHref:!0,children:(0,d.jsx)("a",{className:"float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0",target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin-profile",children:(0,d.jsx)(o.NQh,{})})})]})]})})},r=q,s=function(a){a.preview;var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{}),(0,d.jsx)(r,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})},t=s,u=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{id:"about",className:"bg-grey-50",children:(0,d.jsx)("div",{className:"container flex flex-col items-center py-16 md:py-20 lg:flex-row",children:(0,d.jsxs)("div",{className:"w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left",children:[(0,d.jsx)("h2",{className:"font-header text-4xl font-semibold text-primary sm:text-5xl lg:text-6xl",children:"Hi, I'm Jake Snipes!"}),(0,d.jsx)("h4",{className:"pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl",children:"I am on the job hunt."}),(0,d.jsx)("p",{className:"pt-6 font-body leading-relaxed text-grey-20",children:"I am searching for a leadership role in Data & Analytics."}),(0,d.jsx)("div",{className:"flex flex-col justify-center pt-6 sm:flex-row lg:justify-start",children:(0,d.jsxs)("div",{className:"flex items-center justify-center sm:justify-start",children:[(0,d.jsx)("p",{className:"font-body text-lg font-semibold text-grey-20 pr-2",children:"Connect with me."}),(0,d.jsx)("div",{className:"hidden sm:block",children:(0,d.jsx)("i",{className:"bx bx-chevron-right text-2xl text-primary",children:(0,d.jsx)(o.ZC5,{})})}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0",children:[(0,d.jsx)("a",{href:"https://www.linkedin.com/in/jake-snipes-93256737/","aria-label":"LinkedIn Profile Link",title:"LinkedIn Profile Link",target:"_blank",rel:"noreferrer noopener",className:"text-2xl text-white hover:text-yellow",children:(0,d.jsx)(o.NQh,{})}),(0,d.jsx)("a",{href:"https://github.com/snipesjr","aria-label":"Github Profile Link",title:"Github Profile",target:"_blank",rel:"noreferrer noopener",className:"pl-4 text-2xl text-white hover:text-yellow",children:(0,d.jsx)(o.rFR,{})})]})]})}),(0,d.jsx)("div",{className:"w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0"})]})})})})},v=u;function w(a){var a=null!==a?a:function(a){throw a}(TypeError("Cannot destructure undefined"));return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(t,{children:[(0,d.jsx)(f(),{children:(0,d.jsx)("title",{children:"Jake Snipes Personal Website Homepage"})}),(0,d.jsx)(h,{children:(0,d.jsx)(v,{})})]})})}},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},8357:function(a,b,c){"use strict";c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}}},function(a){a.O(0,[13,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])