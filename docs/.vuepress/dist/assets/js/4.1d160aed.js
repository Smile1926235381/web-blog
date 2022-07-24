(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(s,t,a){s.exports=a.p+"assets/img/line.dc081f42.jpg"},171:function(s,t,a){s.exports=a.p+"assets/img/peizhi.7a3c498c.jpg"},190:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"后端知识总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端知识总结"}},[s._v("#")]),s._v(" 后端知识总结")]),s._v(" "),n("h2",{attrs:{id:"学习路线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习路线"}},[s._v("#")]),s._v(" 学习路线")]),s._v(" "),n("p",[n("img",{attrs:{src:a(170),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"java-jdk-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-jdk-配置"}},[s._v("#")]),s._v(" java jdk 配置")]),s._v(" "),n("ul",[n("li",[s._v("jdk 下载 https://www.oracle.com/java/technologies/downloads/")]),s._v(" "),n("li",[s._v("jdk 安装目录 D:\\Program")]),s._v(" "),n("li",[s._v("jre 安装路径 D:\\Program\\Jre(新建空文件夹)")]),s._v(" "),n("li",[s._v("配置环境变量（用户变量）")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("新建 JAVA_HOME  目录D:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Program"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("jdk1.8.0_321\n\nPath编辑 新建 %JAVA_HOME%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"idea-破解方法-2021-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#idea-破解方法-2021-3"}},[s._v("#")]),s._v(" idea 破解方法(2021.3)")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("ja-netfilter-v2.2.2 文件解压到 D 盘根目录 （在我百度网盘中）")])]),s._v(" "),n("li",[n("p",[s._v("打开 idea 点击帮助中的倒数第四项，修改配置文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(171),alt:""}})])]),s._v(" "),n("li",[n("p",[s._v("在文件中追加 -javaagent:D:\\ja-netfilter-v2.2.2\\ja-netfilter.jar 关闭重启后，"),n("strong",[s._v("点击注册即可看到破解成功的到期时间")])])])]),s._v(" "),n("h2",{attrs:{id:"方法重载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法重载"}},[s._v("#")]),s._v(" 方法重载")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("概念：重载就是在一个类中，有相同的函数名称，但形参不同的函数")])]),s._v(" "),n("li",[n("p",[s._v("规则：")]),s._v(" "),n("ul",[n("li",[s._v("方法名称必须相同")]),s._v(" "),n("li",[s._v("参数列表必须不同(个数不同或者类型不同，参数排列顺序不同等)")]),s._v(" "),n("li",[s._v("方法的返回类型可以相同也可以不相同")]),s._v(" "),n("li",[s._v("仅仅返回类型不同不足以成为方法的重载")])])]),s._v(" "),n("li",[n("p",[s._v("理论：方法名称相同时，编译器会根据调用方法的参数个数,参数类型等去逐个匹配，以选择对应的方法，如果匹配失败，则编译器报错")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" demo1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加法方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法重载")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])])])}],e=a(0),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,null,null);t.default=r.exports}}]);