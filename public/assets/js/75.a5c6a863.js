(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{522:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js中symbol对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js中symbol对象"}},[t._v("#")]),t._v(" Js中Symbol对象")]),t._v(" "),s("p",[s("code",[t._v("ES6")]),t._v("引入了一种新的基本数据类型"),s("code",[t._v("Symbol")]),t._v("，表示独一无二的值，最大的用法是用来定义对象的唯一属性名，"),s("code",[t._v("Symbol()")]),t._v("函数会返回"),s("code",[t._v("symbol")]),t._v("类型的值，该类型具有静态属性和静态方法，其静态属性会暴露几个内建的成员对象，它的静态方法会暴露全局的"),s("code",[t._v("symbol")]),t._v("注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法"),s("code",[t._v("new Symbol()")]),t._v("。每个从"),s("code",[t._v("Symbol()")]),t._v("返回的"),s("code",[t._v("symbol")]),t._v("值都是唯一的，一个"),s("code",[t._v("symbol")]),t._v("值能作为对象属性的标识符。")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("对于每一个"),s("code",[t._v("Symbol")]),t._v("的值都是不相等的，所以"),s("code",[t._v("Symbol")]),t._v("作为对象的属性名，可以保证属性不重名。该数据类型通常被用作一个对象属性的键值，例如当想使对象属性的键为私有值时。"),s("code",[t._v("symbol")]),t._v("类型的键存在于各种内置的"),s("code",[t._v("JavaScript")]),t._v("对象中，同样自定义类也可以这样创建私有成员。"),s("code",[t._v("symbol")]),t._v("数据类型具有非常明确的目的，并且因为其功能性单一的优点而突出，一个"),s("code",[t._v("symbol")]),t._v("实例可以被赋值到一个左值变量，还可以通过标识符检查类型，这就是其全部特性。一个具有数据类型"),s("code",[t._v("symbol")]),t._v("的值可以被称为符号类型值，在"),s("code",[t._v("JavaScript")]),t._v("运行时环境中，一个符号类型值可以通过调用函数"),s("code",[t._v("Symbol()")]),t._v("创建，这个函数动态地生成了一个匿名，唯一的值。"),s("code",[t._v("Symbol")]),t._v("类型唯一合理的用法是用变量存储"),s("code",[t._v("symbol")]),t._v("的值，然后使用存储的值创建对象属性。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// []")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertySymbols")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Symbol()]")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Reflect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ownKeys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Symbol()]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Symbol.length")]),t._v(": 长度属性，值为"),s("code",[t._v("0")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.prototype")]),t._v(": "),s("code",[t._v("symbol")]),t._v("构造函数的原型。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.iterator")]),t._v(": 返回一个对象默认迭代器的方法，被"),s("code",[t._v("for...of")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.match")]),t._v(": 用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用，被"),s("code",[t._v("String.prototype.match()")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.replace")]),t._v(": 替换匹配字符串的子串的方法，被"),s("code",[t._v("String.prototype.replace()")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.search")]),t._v(": 返回一个字符串中与正则表达式相匹配的索引的方法，被"),s("code",[t._v("String.prototype.search()")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.split")]),t._v(": 在匹配正则表达式的索引处拆分一个字符串的方法，被"),s("code",[t._v("String.prototype.split()")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.hasInstance")]),t._v(": 确定一个构造器对象识别的对象是否为它的实例的方法，被"),s("code",[t._v("instanceof")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.isConcatSpreadable")]),t._v(": 布尔值，表明一个对象是否应该"),s("code",[t._v("flattened")]),t._v("为它的数组元素，被"),s("code",[t._v("Array.prototype.concat()")]),t._v("使用。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.unscopables")]),t._v(": 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.species")]),t._v(": 一个用于创建派生对象的构造器函数。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.toPrimitive")]),t._v(": 一个将对象转化为基本数据类型的方法。")]),t._v(" "),s("li",[s("code",[t._v("Symbol.toStringTag")]),t._v(": 用于对象的默认描述的字符串值，被"),s("code",[t._v("Object.prototype.toString()")]),t._v("使用。")])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"symbol-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-for"}},[t._v("#")]),t._v(" Symbol.for()")]),t._v(" "),s("p",[s("code",[t._v("Symbol.for(key)")]),s("br"),t._v(" "),s("code",[t._v("Symbol.for(key)")]),t._v("方法会根据给定的键"),s("code",[t._v("key")]),t._v("，来从运行时的"),s("code",[t._v("symbol")]),t._v("注册表中找到对应的"),s("code",[t._v("symbol")]),t._v("，如果找到了就返回它，否则就新建一个与该键关联的"),s("code",[t._v("symbol")]),t._v("，并放入全局"),s("code",[t._v("symbol")]),t._v("注册表中。和"),s("code",[t._v("Symbol()")]),t._v("不同的是，用"),s("code",[t._v("Symbol.for()")]),t._v("方法创建的的"),s("code",[t._v("symbol")]),t._v("会被放入一个全局"),s("code",[t._v("symbol")]),t._v("注册表中。当然"),s("code",[t._v("Symbol.for()")]),t._v("并不是每次都会创建一个新的"),s("code",[t._v("symbol")]),t._v("，它会首先检查给定的"),s("code",[t._v("key")]),t._v("是否已经在注册表中了。假如是则会直接返回上次存储的那个，否则它会再新建一个。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("key")]),t._v(": 一个字符串，作为"),s("code",[t._v("symbol")]),t._v("注册表中与某"),s("code",[t._v("symbol")]),t._v("关联的键，同时也会作为该"),s("code",[t._v("symbol")]),t._v("的描述。")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"symbol-keyfor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-keyfor"}},[t._v("#")]),t._v(" Symbol.keyFor()")]),t._v(" "),s("p",[s("code",[t._v("Symbol.keyFor(sym)")]),s("br"),t._v(" "),s("code",[t._v("Symbol.keyFor(sym)")]),t._v("方法用来获取全局"),s("code",[t._v("symbol")]),t._v("注册表中与某个"),s("code",[t._v("symbol")]),t._v("关联的键，如果全局注册表中查找到该"),s("code",[t._v("symbol")]),t._v("，则返回该"),s("code",[t._v("symbol")]),t._v("的"),s("code",[t._v("key")]),t._v("值，返回值为字符串类型，否则返回"),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("sym")]),t._v(": 必选参数，需要查找键值的某个"),s("code",[t._v("Symbol")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// s")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"symbol-prototype-tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-prototype-tostring"}},[t._v("#")]),t._v(" Symbol.prototype.toString()")]),t._v(" "),s("p",[s("code",[t._v("symbol.toString()")]),s("br"),t._v(" "),s("code",[t._v("toString()")]),t._v("方法返回当前"),s("code",[t._v("symbol")]),t._v("对象的字符串表示，"),s("code",[t._v("Symbol")]),t._v("对象拥有自己的"),s("code",[t._v("toString")]),t._v("方法，因而遮蔽了原型链上的"),s("code",[t._v("Object.prototype.toString()")]),t._v("，"),s("code",[t._v("symbol")]),t._v("原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用"),s("code",[t._v("toString()")]),t._v("方法。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol(s)")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol(s)")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"symbol-prototype-valueof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-prototype-valueof"}},[t._v("#")]),t._v(" Symbol.prototype.valueOf()")]),t._v(" "),s("p",[s("code",[t._v("symbol.valueOf()")]),s("br"),t._v(" "),s("code",[t._v("valueOf()")]),t._v("方法返回当前"),s("code",[t._v("symbol")]),t._v("对象所包含的"),s("code",[t._v("symbol")]),t._v("原始值。在"),s("code",[t._v("JavaScript")]),t._v("中，虽然大多数类型的对象在某些操作下都会自动的隐式调用自身的"),s("code",[t._v("valueOf()")]),t._v("方法或者"),s("code",[t._v("toString()")]),t._v("方法来将自己转换成一个原始值，但"),s("code",[t._v("symbol")]),t._v("对象不会这么干，"),s("code",[t._v("symbol")]),t._v("对象无法隐式转换成对应的原始值。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol(s)")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"symbol-prototype-toprimitive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-prototype-toprimitive"}},[t._v("#")]),t._v(" Symbol.prototype[@@toPrimitive]")]),t._v(" "),s("p",[s("code",[t._v("Symbol()[Symbol.toPrimitive](hint)")]),s("br"),t._v(" "),s("code",[t._v("[@@toPrimitive]()")]),t._v("方法可将"),s("code",[t._v("Symbol")]),t._v("对象转换为原始值，"),s("code",[t._v("hint")]),t._v("参数未被使用。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toPrimitive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol(s)")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/WindrunnerMax/EveryDay\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://www.runoob.com/w3cnote/es6-symbol.html\nhttps://developer.mozilla.org/zh-CN/docs/Glossary/Symbol\nhttps://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);