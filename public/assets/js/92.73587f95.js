(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{536:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js的gc机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的gc机制"}},[s._v("#")]),s._v(" Js的GC机制")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Js")]),s._v("七种基本类型中的引用类型"),a("code",[s._v("Object")]),s._v("的变量其占据内存空间大且大小不固定，在堆内存中实际存储对象，在栈内存中存储对象的指针，对于对象的访问是按引用访问的。在栈区中执行的变量等是通过值访问，当其作用域销毁后变量也就随之销毁，而使用引用访问的堆区变量，在一个作用域消失后还可能在外层作用域或者其他作用域仍然存在引用，不能直接销毁，此时就需要通过算法计算该堆区变量是否属于不再需要的变量，从而决定是否需要进行内存回收，在"),a("code",[s._v("Js")]),s._v("中主要有引用计数与标记清除两种垃圾回收算法。")]),s._v(" "),a("h2",{attrs:{id:"引用计数算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[s._v("#")]),s._v(" 引用计数算法")]),s._v(" "),a("p",[s._v("对于引用计数垃圾回收算法，把对象是否不再需要简化定义为该对象有没有其他变量或对象引用到它，如果没有引用指向该对象，该对象将被垃圾回收机制回收。在这里，对象的概念不仅特指"),a("code",[s._v("JavaScript")]),s._v("对象，还包括函数作用域或者全局词法作用域。引用计数垃圾回收算法使用比较少，主要是在"),a("code",[s._v("IE6")]),s._v("与"),a("code",[s._v("IE7")]),s._v("等低版本"),a("code",[s._v("IE")]),s._v("浏览器中使用。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时两个对象被创建，一个作为另一个的a属性被引用称为对象1，另一个被obj变量引用称为对象2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时两个对象都有被引用的变量，都不能回收内存")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时对于obj所引用的对象2，已经有obj与Obj2两个变量的引用")]),s._v("\n\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将obj对于对象2的引用解除，此时对象2还存在obj2一个引用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引用对象1，此时对象1有a与a2两个引用")]),s._v("\n\nobj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解除对象2的一个引用，此时对象2的引用数量为0，可以被垃圾回收")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象2的a属性引用被解除，此时对象1只有a2一个引用")]),s._v("\n\na2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解除a2对于对象1的引用，此时对象1可以被垃圾回收")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("但是对于引用计数垃圾回收算法有个限制，当对象循环引用时，就会造成内存泄漏，也就是引用计数垃圾回收算法无法处理循环引用的对象。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("funct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 命名为对象1，此时引用数量为1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 命名为对象2，此时引用数量为1")]),s._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// obj的a属性引用obj2，此时对象2的引用数量为2")]),s._v("\n    obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// obj2的a属性引用obj，此时对象1的引用数量为2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时执行栈的obj变量与obj2变量被销毁，对象1与对象2的引用数量减1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象1的引用数量为1，对象2的引用数量为1，两个对象都不会被引用计数算法垃圾回收")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("funct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 两个对象被创建，并互相引用，形成了一个循环，它们被调用之后会离开函数作用域，所以它们已经不再需要了，可以被回收了，然而引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"标记清除算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法"}},[s._v("#")]),s._v(" 标记清除算法")]),s._v(" "),a("p",[s._v("对于引用计数垃圾回收算法，把对象是否不再需要简化定义为该对象是否可以获得，该算法设置一个叫做根"),a("code",[s._v("root")]),s._v("的对象，在"),a("code",[s._v("Javascript")]),s._v("里根是全局对象，垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象，以此不断向下查找。从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象，这样便解决了循环引用的问题。所有现代浏览器都使用了标记清除垃圾回收算法，所有对"),a("code",[s._v("JavaScript")]),s._v("垃圾回收算法的改进都是基于标记清除算法的改进。")]),s._v(" "),a("ul",[a("li",[s._v("垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。")]),s._v(" "),a("li",[s._v("然后，它会去掉运行环境中的变量以及被环境中变量所引用的变量的标记。")]),s._v(" "),a("li",[s._v("此后，依然有标记的变量就被视为准备删除的变量，原因是在运行环境中已经无法访问到这些变量了。")]),s._v(" "),a("li",[s._v("最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。")])]),s._v(" "),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.jianshu.com/p/18532079bc2a\nhttps://segmentfault.com/a/1190000014383214\nhttps://www.cnblogs.com/libin-1/p/6013490.html\nhttps://www.oschina.net/question/253614_2216515\nhttp://www.ruanyifeng.com/blog/2017/04/memory-leak.html\nhttps://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);