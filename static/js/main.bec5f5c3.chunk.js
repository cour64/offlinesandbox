(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,n,t){(function(n){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var t=a.util.type(e);switch(n=n||{},t){case"Object":if(n[a.util.objId(e)])return n[a.util.objId(e)];var r={};for(var o in n[a.util.objId(e)]=r,e)e.hasOwnProperty(o)&&(r[o]=a.util.clone(e[o],n));return r;case"Array":if(n[a.util.objId(e)])return n[a.util.objId(e)];r=[];return n[a.util.objId(e)]=r,e.forEach(function(e,t){r[t]=a.util.clone(e,n)}),r}return e}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var o=(r=r||a.languages)[e],i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==n)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(s)||(i[s]=o[s])}var c=r[e];return r[e]=i,a.languages.DFS(a.languages,function(n,t){t===c&&n!=e&&(this[n]=i)}),i},DFS:function(e,n,t,r){for(var o in r=r||{},e)e.hasOwnProperty(o)&&(n.call(e,o,e[o],t||o),"Object"!==a.util.type(e[o])||r[a.util.objId(e[o])]?"Array"!==a.util.type(e[o])||r[a.util.objId(e[o])]||(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],n,o,r)):(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],n,null,r)))}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var o,i=r.elements||e.querySelectorAll(r.selector),s=0;o=i[s++];)a.highlightElement(o,!0===n,r.callback)},highlightElement:function(n,r,o){for(var i,s,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[i]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var c={element:n,language:i,grammar:s,code:n.textContent},u=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),o&&o.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(r&&t.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,n,t){var o={code:e,grammar:n,language:t};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),r.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(e,n,t,r,o,i,s){var l=a.Token;for(var c in t)if(t.hasOwnProperty(c)&&t[c]){if(c==s)return;var u=t[c];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],p=g.inside,m=!!g.lookbehind,f=!!g.greedy,h=0,b=g.alias;if(f&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var w=r,v=o;w<n.length;v+=n[w].length,++w){var k=n[w];if(n.length>e.length)return;if(!(k instanceof l)){if(f&&w!=n.length-1){if(g.lastIndex=v,!(E=g.exec(e)))break;for(var F=E.index+(m?E[1].length:0),x=E.index+E[0].length,A=w,S=v,j=n.length;j>A&&(x>S||!n[A].type&&!n[A-1].greedy);++A)F>=(S+=n[A].length)&&(++w,v=S);if(n[w]instanceof l)continue;O=A-w,k=e.slice(v,S),E.index-=v}else{g.lastIndex=0;var E=g.exec(k),O=1}if(E){m&&(h=E[1]?E[1].length:0);x=(F=E.index+h)+(E=E[0].slice(h)).length;var C=k.slice(0,F),N=k.slice(x),T=[w,O];C&&(++w,v+=C.length,T.push(C));var $=new l(c,p?a.tokenize(E,p):E,b,E,f);if(T.push($),N&&T.push(N),Array.prototype.splice.apply(n,T),1!=O&&a.matchGrammar(e,n,t,w,v,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,n){var t=[e],r=n.rest;if(r){for(var o in r)n[o]=r[o];delete n.rest}return a.matchGrammar(e,t,n,0,0,!1),t},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,o=0;r=t[o++];)r(n)}}},r=a.Token=function(e,n,t,a,r){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(t){return r.stringify(t,n,e)}).join("");var o={type:e.type,content:r.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if(e.alias){var i="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,i)}a.hooks.run("wrap",o);var s=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(s?" "+s:"")+">"+o.content+"</"+o.tag+">"},!t.document)return t.addEventListener?(a.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,o=n.code,i=n.immediateClose;t.postMessage(a.highlight(o,a.languages[r],r)),i&&t.close()},!1),t.Prism):t.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),t.Prism}();e.exports&&(e.exports=a),"undefined"!=typeof n&&(n.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",n=/\n(?!$)/g,t=function(e){var t=r(e),a=t["white-space"];if("pre-wrap"===a||"pre-line"===a){var o=e.querySelector("code"),i=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),l=o.textContent.split(n);s||((s=document.createElement("span")).className="line-numbers-sizer",o.appendChild(s)),s.style.display="block",l.forEach(function(e,n){s.textContent=e||"\n";var t=s.getBoundingClientRect().height;i.children[n].style.height=t+"px"}),s.textContent="",s.style.display="none"}},r=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),t)}),a.hooks.add("complete",function(e){if(e.code){var r=e.element.parentNode,o=/\s*\bline-numbers\b\s*/;if(r&&/pre/i.test(r.nodeName)&&(o.test(r.className)||o.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){o.test(e.element.className)&&(e.element.className=e.element.className.replace(o," ")),o.test(r.className)||(r.className+=" line-numbers");var i,s=e.code.match(n),l=s?s.length+1:1,c=new Array(l+1);c=c.join("<span></span>"),(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),e.element.appendChild(i),t(r),a.hooks.run("line-numbers",e)}}}),a.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),a.plugins.lineNumbers={getLine:function(n,t){if("PRE"===n.tagName&&n.classList.contains(e)){var a=n.querySelector(".line-numbers-rows"),r=parseInt(n.getAttribute("data-start"),10)||1,o=r+(a.children.length-1);r>t&&(t=r),t>o&&(t=o);var i=t-r;return a.children[i]}}}}}()}).call(this,t(4))},,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),s=t(7),l=t(2),c=t(1),u=t(6),d=t.n(u);t(13),t(14);var g=function(e){var n=e.language,t=e.code,o=Object(a.useRef)(null),i=Object(a.useContext)(h);function s(e){i({type:"SET_CODE",code:e.target.value})}return Object(a.useLayoutEffect)(function(){return d.a.highlightElement(o.current)}),r.a.createElement("pre",{className:"Editor line-numbers language-".concat(n)},r.a.createElement("code",{ref:o,className:"language-".concat(n)},t),r.a.createElement("textarea",{onKeyDown:function(e){if(222===e.key){e.preventDefault();var n=e.target.selectionStart;e.target.value=e.target.slice(0,n)+"'"+e.target.slice(n),s(e)}},onChange:s,value:t,spellCheck:"false",autoCorrect:"off",autoComplete:"off",autoCapitalize:"none",dir:"ltr"}))},p=(t(15),Object(a.memo)(function(e){var n=e.html,t=e.css,o=e.js,i=Object(a.useRef)(null);return Object(a.useEffect)(function(){i.current.contentWindow.document.open(),i.current.contentWindow.document.write('\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8"/>\n        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n        <title>Document</title>\n        <style>\n          html,body {\n            box-sizing: border-box;\n            position:relative;\n            height: 100%;\n            width: 100%;\n            font-family:Helvetica, sans-serif;\n            font-size:1rem;\n          }\n          *, *:before, *:after { box-sizing: inherit; }\n\n          body {\n            position:absolute;\n            top:0;\n            left:0;\n            margin:0;\n            padding:0;\n          }\n\n          #root, #console {\n            position: absolute;\n            top: 0;\n            left: 0;\n            bottom:30%;\n            width: 100%;\n            max-width: 100%;\n            overflow:auto;\n          }\n\n          #console {\n            color:#222222;\n            background-color:#FFF;\n            top: 70%;\n            bottom:0;\n            border-top:1px solid #444;\n          }\n\n          .console-line {\n            margin:2px 0;\n          }\n\n          .console-timestamp {\n            font-size:0.8em;\n            color:#888;\n          }\n\n          /* On screens that are 992px wide or less, go from four columns to two columns */\n          @media screen and (max-width: 1024px) {\n            body,html {\n              font-size:15px;\n            }\n          }\n\n          /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */\n          @media screen and (max-width: 768px) {\n            body,html {\n              font-size:14px;\n            }\n          }\n        </style>\n      </head>\n      <body>\n        <style>'.concat(t,'</style>\n        <div id="root">').concat(n,"</div>\n        <div id=\"console\"></div>\n        <script>\n          function isFunction(functionToCheck) {\n            return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';\n          }\n\n          const consoleOutput = document.getElementById('console');\n          console.log = function(str) {\n            const timestamp = (new Date()).toLocaleTimeString('en-GB');\n            const newLine = document.createElement('p');\n            newLine.className = 'console-line';\n\n            if(typeof str === \"object\")\n              str = JSON.stringify(str);\n              \n            newLine.innerHTML = `<span class=\"console-timestamp\">(${timestamp})</span> >> ${str}`;\n            consoleOutput.appendChild(newLine);\n          }\n        <\/script>\n        <script>").concat(o,"<\/script>\n      </body>\n      </html>\n    ")),i.current.contentWindow.document.close()}),r.a.createElement("iframe",{id:"IFrame",ref:i,title:"Output"},r.a.createElement("p",null,"Your browser does not support iframes."))}));t(16);function m(){var e=Object(a.useContext)(h),n=Object(a.useRef)(null);function t(n){e({type:"SET_LANG",lang:n.target.value})}return window.addEventListener("appinstalled",function(e){n.style.display="none"}),r.a.createElement("div",{id:"Toolbar"},r.a.createElement("button",{onClick:t,value:"html"},"html"),r.a.createElement("button",{onClick:t,value:"css"},"css"),r.a.createElement("button",{onClick:t,value:"js"},"js"),r.a.createElement("button",{onClick:function(){e({type:"SET_EDIT_MODE",editMode:!1})}},"Run"),r.a.createElement("button",{ref:n,onClick:function(e){window.addToHomeScreen.prompt(),window.addToHomeScreen.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),window.addToHomeScreen=null})}},"A2HS"))}var f={code:{html:"<p>Hello!</p>",css:"body{color:blue;}",js:"console.log('test');"},lang:"js",editMode:!0,fullscreen:!1},h=r.a.createContext(null);function b(e,n){switch(n.type){case"SET_CODE":return Object(c.a)({},e,{code:Object(c.a)({},e.code,Object(l.a)({},e.lang,n.code))});case"SET_LANG":return Object(c.a)({},e,{lang:n.lang,editMode:!0});case"SET_EDIT_MODE":return Object(c.a)({},e,{editMode:n.editMode});default:throw new Error("Not a valid action")}}var y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(17),t(18);i.a.render(r.a.createElement(function(){var e=Object(a.useReducer)(b,f),n=Object(s.a)(e,2),t=n[0],o=n[1];return r.a.createElement(h.Provider,{value:o},t.editMode?r.a.createElement(g,{language:t.lang,code:t.code[t.lang]}):r.a.createElement(p,t.code),r.a.createElement(m,null))},null),document.getElementById("root")),window.addToHomeScreen=void 0,window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),window.addToHomeScreen=e}),function(e){if("serviceWorker"in navigator){if(new URL("/offlinesandbox",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/offlinesandbox","/service-worker.js");y?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.bec5f5c3.chunk.js.map