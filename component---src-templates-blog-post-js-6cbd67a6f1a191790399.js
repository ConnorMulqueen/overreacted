(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"53h3":function(e,t,n){e.exports=n.p+"static/profile_pic-73f228e9ed9081714880444543014e65.jpg"},EYWl:function(e,t,n){"use strict";n("91GP");var r=n("c/e4"),a=n("q1tI"),l=n.n(a),o=n("TJpk"),i=n.n(o),c=n("Wbzz"),s="3236765318";function u(e){var t=e.meta,n=e.image,a=e.title,o=e.description,u=e.slug,p=e.lang,m=void 0===p?"en":p;return l.a.createElement(c.StaticQuery,{query:s,render:function(e){var r=e.site.siteMetadata,c=o||r.description,s=n?r.siteUrl+"/"+n:null,p=""+r.siteUrl+u;return l.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+r.title,title:a}:{title:r.title+" — A blog by Dan Abramov"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:a||r.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:a||r.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:r})}u.defaultProps={meta:[],title:"",slug:""},t.a=u},JLKy:function(e,t,n){"use strict";n("91GP");var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.children,n=e.style,r=void 0===n?{}:n;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},r)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr");function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,r(a))}},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),l=n("ne8i");e.exports=function(e){for(var t=r(this),n=l(t.length),o=arguments.length,i=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>i;)t[i++]=e;return t}},SbOt:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("53h3"),o=n.n(l),i=n("p3AD");var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},a.a.createElement("img",{src:o.a,alt:"Connor Mulqueen",style:{marginRight:Object(i.a)(.5),marginBottom:0,width:Object(i.a)(2),height:Object(i.a)(2),borderRadius:"50%"}}),a.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",a.a.createElement("a",{href:"https://www.connormulqueen.com/"},"Connor Mulqueen"),"."," ","Some guy who liked Halo enough to become a software engineer."))},r}(a.a.Component);t.a=c},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Connor Mulqueen","author":"Connor Mulqueen","description":"Personal blog by Connor Mulqueen. Some guy who liked Halo enough to become a software engineer.","siteUrl":"https://wwww.connormulqueen.com/blog","social":{"twitter":"@connormulqueen"}}}}}')},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},yZlL:function(e,t,n){"use strict";n.r(t);n("91GP"),n("Vd3H"),n("Oyvg"),n("pIFo");var r=n("q1tI"),a=n.n(r),l=n("Wbzz"),o=n("mwIZ"),i=n.n(o),c=(n("vPK/"),n("SbOt")),s=n("7oih"),u=n("EYWl"),p=n("JLKy"),m=n("L6NH"),d=n("p3AD"),g=(n("SRfc"),n("k7Sn")),f={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},h=function(e){return g.supportedLanguages[e].replace(/ /g," ")};function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"pageQuery",(function(){return w}));var y='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',E=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,r=e.languageLink,o=e.editUrl,i=t.filter((function(e){return"ru"!==e})),c=-1!==t.indexOf("ru");return a.a.createElement("div",{className:"translations"},a.a.createElement(p.a,{style:{fontFamily:y}},t.length>0&&a.a.createElement("span",null,c&&a.a.createElement("span",null,"Originally written in:"," ","en"===n?a.a.createElement("b",null,h("en")):a.a.createElement(l.Link,{to:r("en")},"English")," • ","ru"===n?a.a.createElement("b",null,"Русский (авторский перевод)"):a.a.createElement(l.Link,{to:r("ru")},"Русский (авторский перевод)"),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement("span",null,"Translated by readers into: "),i.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:e},e===n?a.a.createElement("b",null,h(e)):a.a.createElement(l.Link,{to:r(e)},h(e)),t===i.length-1?"":" • ")}))),"en"!==n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("br",null),a.a.createElement("br",null),"ru"!==n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Link,{to:r("en")},"Read the original")," • ",a.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),a.a.createElement(l.Link,{to:"/"+n},"View all translated posts")," ")))},t}(a.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=i()(this.props,"data.site.siteMetadata.title"),r=this.props.pageContext,o=r.previous,p=r.next,b=r.slug,v=r.translations,w=r.translatedLinks,k=e.fields.langKey,j=e.html;j=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&g.supportedLanguages[t]?(n.forEach((function(n){f[n]&&f[n][t]&&(e=e.replace(n,f[n][t]))})),e):e}(j,k),w.forEach((function(e){var t="/"+k+e;j=j.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(v=v.slice()).sort((function(e,t){return h(e)<h(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7));break;case"uk":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7)),n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"vi":n.e(0).then(n.t.bind(null,"Vjog",7)),n.e(0).then(n.t.bind(null,"Pf5Y",7));break;case"fa":n.e(0).then(n.t.bind(null,"BiVN",7));break;case"ar":n.e(0).then(n.t.bind(null,"xpFW",7))}}(k);var O=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(b,k),S=O("en"),L="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+S.slice(1,S.length-1)+"/index"+("en"===k?"":"."+k)+".md",x="https://mobile.twitter.com/search?q="+encodeURIComponent("https://www.connormulqueen.com/blog"+S);return a.a.createElement(s.a,{location:this.props.location,title:t},a.a.createElement(u.a,{lang:k,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),a.a.createElement("main",null,a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),a.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})},Object(m.a)(e.frontmatter.date,k)," • "+Object(m.b)(e.timeToRead)),v.length>0&&a.a.createElement(E,{translations:v,editUrl:L,languageLink:O,lang:k})),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:j}}),a.a.createElement("footer",null,a.a.createElement("p",null,a.a.createElement("a",{href:x,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",a.a.createElement("a",{href:L,target:"_blank",rel:"noopener noreferrer"},"Edit this post on GitHub"))))),a.a.createElement("aside",null,a.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:y}}),a.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(d.a)(.25)}},a.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"Connor Mulqueen")),a.a.createElement(c.a,null),a.a.createElement("nav",null,a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,o&&a.a.createElement(l.Link,{to:o.fields.slug,rel:"prev",style:{marginRight:20}},"← ",o.frontmatter.title)),a.a.createElement("li",null,p&&a.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(a.a.Component),w=(t.default=v,"1123297852")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6cbd67a6f1a191790399.js.map