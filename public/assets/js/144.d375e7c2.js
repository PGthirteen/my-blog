(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{587:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"react组件的state和props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react组件的state和props"}},[s._v("#")]),s._v(" React组件的state和props")]),s._v(" "),t("p",[t("code",[s._v("React")]),s._v("的数据是自顶向下单向流动的，即从父组件到子组件中，组件的数据存储在"),t("code",[s._v("props")]),s._v("和"),t("code",[s._v("state")]),s._v("中。实际上在任何应用中，数据都是必不可少的，我们需要直接的改变页面上一块的区域来使得视图的刷新，或者间接地改变其他地方的数据，在"),t("code",[s._v("React")]),s._v("中就使用"),t("code",[s._v("props")]),s._v("和"),t("code",[s._v("state")]),s._v("两个属性存储数据。")]),s._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[t("code",[s._v("state")]),s._v("的主要作用是用于组件保存、控制、修改自己的可变状态。"),t("code",[s._v("state")]),s._v("在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改，可以认为"),t("code",[s._v("state")]),s._v("是一个局部的、只能被组件自身控制的数据源，"),t("code",[s._v("state")]),s._v("中状态可以通过"),t("code",[s._v("this.setState")]),s._v("方法进行更新，"),t("code",[s._v("setState")]),s._v("会导致组件的重新渲染。"),t("br"),s._v(" "),t("code",[s._v("props")]),s._v("的主要作用是让使用该组件的父组件可以传入参数来配置该组件，它是外部传进来的配置参数，组件内部无法控制也无法修改，除非外部组件主动传入新的"),t("code",[s._v("props")]),s._v("，否则组件的"),t("code",[s._v("props")]),s._v("永远保持不变。"),t("br"),s._v(" "),t("code",[s._v("state")]),s._v("和"),t("code",[s._v("props")]),s._v("都可以决定组件的行为和显示形态，一个组件的"),t("code",[s._v("state")]),s._v("中的数据可以通过"),t("code",[s._v("props")]),s._v("传给子组件，一个组件可以使用外部传入的"),t("code",[s._v("props")]),s._v("来初始化自己的"),t("code",[s._v("state")]),s._v("，但是它们的职责其实非常明晰分明，"),t("code",[s._v("state")]),s._v("是让组件控制自己的状态，"),t("code",[s._v("props")]),s._v("是让外部对组件自己进行配置。简单来说"),t("code",[s._v("props")]),s._v("是传递给组件的(类似于函数的形参)，而"),t("code",[s._v("state")]),s._v("是在组件内被组件自己管理的(类似于在一个函数内声明的变量)。"),t("br"),s._v("\n一个清晰的原则是尽量少地用"),t("code",[s._v("state")]),s._v("，尽量多地用"),t("code",[s._v("props")]),s._v("，没有"),t("code",[s._v("state")]),s._v("的组件叫无状态组件"),t("code",[s._v("stateless component")]),s._v("，设置了"),t("code",[s._v("state")]),s._v("的叫做有状态组件"),t("code",[s._v("stateful component")]),s._v("。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件，这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。")]),s._v(" "),t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[s._v("#")]),s._v(" props")]),s._v(" "),t("p",[t("code",[s._v("React")]),s._v("的核心思想就是组件化思想，页面会被切分成一些独立的、可复用的组件。组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是"),t("code",[s._v("props")]),s._v("，所以可以把"),t("code",[s._v("props")]),s._v("理解为从外部传入组件内部的数据，由于"),t("code",[s._v("React")]),s._v("是单向数据流，所以"),t("code",[s._v("props")]),s._v("基本上也就是从服父级组件向子组件传递的数据。"),t("br"),s._v("\n假设我们现在需要实现一个列表，我们把列表中的行当做一个组件，也就是有这样两个组件"),t("code",[s._v("<ItemList/>")]),s._v("和"),t("code",[s._v("<Item/>")]),s._v("。列表"),t("code",[s._v("ItemList")]),s._v("组件的数据我们就暂时先假设是放在一个"),t("code",[s._v("data")]),s._v("变量中，然后通过"),t("code",[s._v("map")]),s._v("函数返回一个每一项都是"),t("code",[s._v("<Item item={数据}/>")]),s._v("的数组，也就是说这里其实包含了"),t("code",[s._v("data.length")]),s._v("个"),t("code",[s._v("<Item/>")]),s._v("组件，数据通过在组件上自定义一个参数传递。之后在"),t("code",[s._v("Item")]),s._v("组件内部是使用"),t("code",[s._v("this.props")]),s._v("来获取传递到该组件的所有数据，它是一个对象其中包含了所有对这个组件的配置，现在只包含了一个"),t("code",[s._v("item")]),s._v("属性，所以通过"),t("code",[s._v("this.props.item")]),s._v("来获取即可。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// Item组件\nclass Item extends React.Component{\n  render(){\n    return (\n      <li>{this.props.item}</li>\n    )\n  }\n}\n\n// ItemList组件\nclass ItemList extends React.Component{\n  render(){\n    const data = [1, 2, 3, 4, 5, 6];\n    const itemList = data.map((v, i) => <Item item={v} key={i}/>);\n    return (\n      <ul>{itemList}</ul>\n    )\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("code",[s._v("props")]),s._v("经常被用作渲染组件和初始化状态，当一个组件被实例化之后，它的"),t("code",[s._v("props")]),s._v("是只读的，不可改变的。如果"),t("code",[s._v("props")]),s._v("在渲染过程中可以被改变，会导致这个组件显示的形态变得不可预测，只有通过父组件重新渲染的方式才可以把新的"),t("code",[s._v("props")]),s._v("传入组件中。也就是说"),t("code",[s._v("props")]),s._v("是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的"),t("code",[s._v("props")]),s._v("来重新渲染子组件，否则子组件的"),t("code",[s._v("props")]),s._v("以及展现形式不会改变。"),t("br"),s._v("\n在组件中，我们也可以为"),t("code",[s._v("props")]),s._v("中的参数设置一个"),t("code",[s._v("defaultProps")]),s._v("，并且制定它的类型。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import PropTypes from "prop-types";\n\nclass Hello extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  render() {\n    return (\n      <div>{this.props.tips}</div>\n    );\n  }\n}\n\nHello.propTypes = {\n  tips: PropTypes.string\n};\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("不同的验证器类型如下。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PropTypes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prop-types"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nMyComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("propTypes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JS原始类型，这些全部默认是可选的")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalArray")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalBool")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalFunc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalNumber")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalObject")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalString")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalSymbol")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以直接渲染的任何东西，可以是数字、字符串、元素或数组")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalNode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// React元素")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalElement")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定是某个类的实例")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalMessage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("instanceOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以是多个值中的一个")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalEnum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("oneOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"News"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Photos"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以是多种类型中的一个")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalUnion")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("oneOfType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("instanceOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只能是某种类型的数组")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalArrayOf")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("arrayOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 具有特定类型属性值的对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalObjectOf")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("objectOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 具有相同属性值的对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionalObjectWithShape")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shape")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("fontSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必选条件，可以配合其他验证器，以确保在没有提供属性的情况下发出警告")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("requiredFunc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isRequired"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必选条件，提供的属性可以为任意类型")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("requiredAny")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("any"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isRequired"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义 oneOfType 验证器。如果提供的属性值不匹配的它应该抛出一个异常")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意：不能使用 console.warn 和 throw")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("customProp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" componentName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("matcher")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("propName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Not Match"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义 arrayOf 或者 objectOf 验证器。")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 它会调用每个数组或者对象的key，参数前两个是对象它本身和当前key")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意：不能使用 console.warn  和 throw")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("customArrayProp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PropTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("arrayOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("propValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" componentName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" location"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propFullName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("matcher")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("propValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Not Match"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br")])]),t("h2",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[s._v("#")]),s._v(" state")]),s._v(" "),t("p",[s._v("一个组件的显示形态可以由数据状态和外部参数所决定，外部参数也就是"),t("code",[s._v("props")]),s._v("，而数据状态就是"),t("code",[s._v("state")]),s._v("。"),t("code",[s._v("state")]),s._v("的主要作用是用于组件保存、控制以及修改自己的状态，它只能在"),t("code",[s._v("constructor")]),s._v("中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的"),t("code",[s._v("this.setState")]),s._v("来修改，修改"),t("code",[s._v("state")]),s._v("属性会导致组件的重新渲染。简单来说就是在组件初始化的时候，通过"),t("code",[s._v("this.state")]),s._v("给组件设定一个初始的"),t("code",[s._v("state")]),s._v("，在第一次"),t("code",[s._v("render")]),s._v("的时候就会用这个数据来渲染组件。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('class Hello extends React.Component{\n  constructor(props){\n    super(props);\n    this.state = { \n      tips: "Hello World!"\n    }\n  }\n  render() {\n    return (\n      <div>{this.state.tips}</div>\n    );\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("code",[s._v("state")]),s._v("不同于"),t("code",[s._v("props")]),s._v("的一点是，"),t("code",[s._v("state")]),s._v("是可以被改变的。不过不可以直接通过"),t("code",[s._v("this.state= values;")]),s._v("的方式来修改，而需要通过"),t("code",[s._v("this.setState()")]),s._v("方法来修改"),t("code",[s._v("state")]),s._v("。例如我们经常会通过异步操作来获取数据，我们需要在"),t("code",[s._v("didMount")]),s._v("生命周期阶段来执行异步操作。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('componentDidMount(){\n  fetch("url")\n    .then(response => response.json())\n    .then((data) => {\n      this.setState({itemList:item});  \n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("当我们调用"),t("code",[s._v("this.setState")]),s._v("方法时，"),t("code",[s._v("React")]),s._v("会更新组件的数据状态"),t("code",[s._v("state")]),s._v("，并且重新调用"),t("code",[s._v("render")]),s._v("方法，也就是会对组件进行重新渲染。"),t("code",[s._v("setState")]),s._v("接受一个对象或者函数作为第一个参数，只需要传入需要更新的部分即可，"),t("code",[s._v("setState")]),s._v("还可以接受第二个参数，它是一个函数，会在"),t("code",[s._v("setState")]),s._v("调用完成并且组件开始重新渲染时被调用，可以用来监听渲染完成。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('this.setState({ tips: "data update" });\nthis.setState({ tips: "data update" }, () => console.log("finished"));\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="UTF-8" />\n    <title>React</title>\n</head>\n\n<body>\n    <div id="root"></div>\n</body>\n<script src="https://unpkg.com/react@17/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"><\/script>\n<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n<script type="text/babel">\n  class Item extends React.Component{\n    render(){\n      return (\n        <li>{this.props.item}</li>\n      )\n    }\n  }\n\n  class ItemList extends React.Component{\n      render(){\n        const data = [1, 2, 3, 4, 5, 6];\n        const itemList = data.map((v, i) => <Item item={v} key={i}/>);\n        return (\n          <ul>{itemList}</ul>\n      )\n    }\n  }\n\n  class Hello extends React.Component{\n    constructor(props){\n      super(props);\n      this.state = { \n        tips: "Hello World!"\n      }\n    }\n    render() {\n      return (\n        <div>{this.state.tips}</div>\n      );\n    }\n  }\n\n  class App extends React.Component{\n    render() {\n      return (\n        <div>\n            <Hello />\n            <ItemList />\n        </div>\n      );\n    }\n  }\n\n  var vm = ReactDOM.render(\n    <App />,\n    document.getElementById("root")\n  );\n<\/script>\n\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/axuebin/react-blog/issues/8\nhttps://zh-hans.reactjs.org/docs/faq-state.html\nhttp://huziketang.mangojuice.top/books/react/lesson12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);