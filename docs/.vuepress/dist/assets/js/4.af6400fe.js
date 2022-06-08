(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(s,t,a){s.exports=a.p+"assets/img/less1.e2a420cf.jpg"},187:function(s,t,a){"use strict";a.r(t);var r=[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"cms后台系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cms后台系统"}},[s._v("#")]),s._v(" CMS后台系统")]),s._v(" "),r("h2",{attrs:{id:"一、-项目起步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、-项目起步"}},[s._v("#")]),s._v(" 一、 项目起步")]),s._v(" "),r("ul",[r("li",[r("ol",[r("li",[s._v("创建项目")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("npx create-react-app cms-manage\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[s._v("安装依赖")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("npm i antd redux react-redux react-router-dom@6 axios less less-loader@6.0.0 --save\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])])]),s._v(" "),r("h2",{attrs:{id:"二、配置less"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、配置less"}},[s._v("#")]),s._v(" 二、配置less")]),s._v(" "),r("ul",[r("li",[r("ol",[r("li",[s._v("暴漏出webpack.config配置文件 "),r("code",[s._v("npm run eject")])])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[s._v("修改webpack.config.js文件")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(168),alt:""}})]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" lessRegex "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.less$")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" lessModuleRegex "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.module\\.less$")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("p",[s._v("全局搜索oneOf，在oneOf数组中添加以下代码")]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lessRegex"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lessModuleRegex"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStyleLoaders")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("importLoaders")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sourceMap")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" isEnvProduction\n            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" shouldUseSourceMap\n            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" isEnvDevelopment"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"less-loader"')]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sideEffects")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lessModuleRegex"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStyleLoaders")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("importLoaders")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sourceMap")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" isEnvProduction\n          "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" shouldUseSourceMap\n          "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" isEnvDevelopment"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("modules")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("getLocalIdent")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getCSSModuleLocalIdent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"less-loader"')]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br")])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"3"}},[r("li",[s._v("src下创建 assets>base.less")])]),s._v(" "),r("div",{staticClass:"language-less line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-less"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@import")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~antd/dist/antd.css'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@bgcolor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" #efefef"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-family")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'微软雅黑'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 14px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@bgcolor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"4"}},[r("li",[s._v("index.js中引入 import './assets/base.less'")])])])]),s._v(" "),r("h2",{attrs:{id:"三、-配置路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、-配置路由"}},[s._v("#")]),s._v(" 三、 配置路由")]),s._v(" "),r("ul",[r("li",[r("ol",[r("li",[s._v("src 下创建 router>index.js")])]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" App "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../App'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" List "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../pages/List'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Edit "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../pages/Edit'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Means "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../pages/Means'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Login "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../pages/Login'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Register "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../pages/Register'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BrowserRouter "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Routes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Route "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-router-dom'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("BaseRouter")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Router"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Routes"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("App "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/list"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/edit"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Edit "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/means"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Means "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Login "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/register"')]),s._v(" element"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Register "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Routes"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Router"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" BaseRouter\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br")])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[s._v("入口文件  index.js 引入、")])]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Router "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./router'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("App "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 替换 "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Router "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])]),s._v(" "),r("li",[r("ol",{attrs:{start:"3"}},[r("li",[s._v("app.js 增加位置")])]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Outlet "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-router-dom'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Outlet "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])])])])}],e=a(0),n=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,null,null);t.default=n.exports}}]);