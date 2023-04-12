(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{578:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mobx与redux的异同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mobx与redux的异同"}},[s._v("#")]),s._v(" Mobx与Redux的异同")]),s._v(" "),e("p",[e("code",[s._v("Mobx")]),s._v("与"),e("code",[s._v("Redux")]),s._v("都是用来管理"),e("code",[s._v("JavaScript")]),s._v("应用的状态的解决方案，用以提供在某个地方保存状态、修改状态和更新状态，使我们的应用在状态与组件上解耦，我们可以从一个地方获得状态，在另一个地方修改，在其他地方得到他们更新后的状态。他们都遵循单一数据源的原则，这让我们更容易推断状态的值和状态的修改。当然他们并不一定要跟"),e("code",[s._v("React")]),s._v("绑定在一起，它们也可以在"),e("code",[s._v("AngularJs")]),s._v("和"),e("code",[s._v("VueJs")]),s._v("这些框架库里使用。")]),s._v(" "),e("h2",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),e("p",[e("code",[s._v("Redux")]),s._v("作者说过，如果你不知道是否需要"),e("code",[s._v("Redux")]),s._v("，那就是不需要。在判断是否需要使用"),e("code",[s._v("Mobx")]),s._v("与"),e("code",[s._v("Redux")]),s._v("之前，我们首先需要知道他们究竟是要解决什么问题，以及当前是否遇到了这个问题。如今前端通常是要用组件"),e("code",[s._v("components")]),s._v("来构建一个应用，而组件中通常有自己的内部状态即"),e("code",[s._v("state")]),s._v("，但是随着应用越来越膨胀，组件自己内部维护的状态在膨胀的应用中很快会变得混乱。随着应用功能的不断拓展，通常会出现一些问题:")]),s._v(" "),e("ul",[e("li",[s._v("一个组件通常需要和另一个组件共享状态。")]),s._v(" "),e("li",[s._v("一个组件需要改变另一个组件的状态。")]),s._v(" "),e("li",[s._v("组件层级太深，需要共享状态时状态要层层传递。")]),s._v(" "),e("li",[s._v("子组件更新一个状态，可能有多个父组件，兄弟组件共用，实现困难。")])]),s._v(" "),e("p",[s._v("这种情况下继续使用提取状态到父组件的方法你会发现很复杂，而且随着组件增多，嵌套层级加深，这个复杂度也越来越高。因为关联的状态多，传递复杂，很容易出现像某个组件莫名其妙的更新或者不更新的情况，异常排查也会困难重重。也就是说当应用膨胀到一定程度时，推算应用的状态将会变得越来越困难，此时整个应用就会变成一个有很多状态对象并且在组件层级上互相修改状态的混乱应用。在很多情况下，状态对象和状态的修改并没有必要绑定在一些组件上，我们可以尝试将其提升，通过组件树来得到与修改状态。"),e("br"),s._v("\n目前通常的解决方案是引入状态管理库，比如"),e("code",[s._v("Mobx")]),s._v("或"),e("code",[s._v("Redux")]),s._v("，"),e("code",[s._v("Mobx")]),s._v("与"),e("code",[s._v("Redux")]),s._v("都是用来管理"),e("code",[s._v("JavaScript")]),s._v("应用的状态的解决方案，用以提供在某个地方保存状态、修改状态和更新状态，使我们的应用在状态与组件上解耦，我们可以从一个地方获得状态，在另一个地方修改，在其他地方得到他们更新后的状态。他们都遵循单一数据源的原则，这让我们更容易推断状态的值和状态的修改。当然他们并不一定要跟"),e("code",[s._v("React")]),s._v("绑定在一起，它们也可以在"),e("code",[s._v("AngularJs")]),s._v("和"),e("code",[s._v("VueJs")]),s._v("这些框架库里使用。"),e("br"),s._v("\n像"),e("code",[s._v("Redux")]),s._v("和"),e("code",[s._v("Mobx")]),s._v("这类状态管理库一般都有附带的工具，例如在"),e("code",[s._v("React")]),s._v("中使用的有"),e("code",[s._v("react-redux")]),s._v("和"),e("code",[s._v("mobx-react")]),s._v("，他们使你的组件能够获得状态，一般情况下，这些组件被叫做容器组件"),e("code",[s._v("container components")]),s._v("，或者说的更加确切的话，就是连接组件"),e("code",[s._v("connected components")]),s._v("。通常只要将组件作为连接组件，就可以在组件层级的任何地方得到和更改状态。"),e("br"),s._v("\n对于"),e("code",[s._v("Mobx")]),s._v("与"),e("code",[s._v("Redux")]),s._v("的异同这个问题，是我最近在找实习的时候遇到的，分别为"),e("code",[s._v("react mobx")]),s._v("与"),e("code",[s._v("react redux")]),s._v("作简单的示例，文中的示例代码都在"),e("code",[s._v("https://codesandbox.io/s/react-ts-template-forked-88t6in")]),s._v("中。")]),s._v(" "),e("h3",{attrs:{id:"mobx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mobx"}},[s._v("#")]),s._v(" Mobx")]),s._v(" "),e("p",[e("code",[s._v("MobX")]),s._v("是一个经过战火洗礼的库，他通过透明的函数响应式编程"),e("code",[s._v("transparently applying functional reactive programming - TFRP")]),s._v("使得状态管理变得简单和可扩展。"),e("code",[s._v("MobX")]),s._v("背后的哲学很简单: 任何源自应用状态的东西都应该自动地获得，其中包括"),e("code",[s._v("UI")]),s._v("、数据序列化等等，核心重点就是: "),e("code",[s._v("MobX")]),s._v("通过响应式编程实现简单高效，可扩展的状态管理。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// src/mobx-store/store.ts\nimport { observable, action, makeAutoObservable } from "mobx";\n\nclass Store {\n  constructor() {\n    makeAutoObservable(this);\n  }\n\n  @observable\n  state = {\n    count: 1\n  };\n\n  @action\n  setCount = (value: number) => {\n    this.state.count = value;\n  };\n\n  @action\n  setCountIncrement = () => {\n    this.state.count++;\n  };\n}\n\nexport default new Store();\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// src/counter-mobx.tsx\nimport React from "react";\nimport { observer } from "mobx-react";\nimport store from "./mobx-store/store";\n\nconst CountMobx: React.FC = () => {\n  return (\n    <div>\n      <div>{store.state.count}</div>\n      <button onClick={() => store.setCount(1)}>Set Count value 1</button>\n      <button onClick={store.setCountIncrement}>Set Count Increment</button>\n    </div>\n  );\n};\n\nexport default observer(CountMobx);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[s._v("#")]),s._v(" Redux")]),s._v(" "),e("p",[e("code",[s._v("Redux")]),s._v("用一个单独的常量状态树或者叫作对象保存这一整个应用的状态，这个对象不能直接被改变，当一些数据变化了，一个新的对象就会被创建，严格的单向数据流是"),e("code",[s._v("Redux")]),s._v("架构的设计核心。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// src/redux-store/store.ts\nimport { createStore } from "redux";\n\nconst defaultState: State = {\n  count: 1\n};\n\nexport const actions = {\n  SET_COUNT: "SET_COUNT" as const,\n  SET_COUNT_INCREMENT: "SET_COUNT_INCREMENT" as const\n};\n\nconst reducer = (state: State = defaultState, action: Actions): State => {\n  const { type } = action;\n  switch (type) {\n    case actions.SET_COUNT: {\n      return { ...state, count: action.payload };\n    }\n    case actions.SET_COUNT_INCREMENT: {\n      return { ...state, count: state.count + 1 };\n    }\n    default:\n      return state;\n  }\n};\nexport const store = createStore(reducer, defaultState);\n\nexport interface State {\n  count: number;\n}\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n\ntype SET_COUNT_INCREMENT = {\n  type: typeof actions.SET_COUNT_INCREMENT;\n  payload: void;\n};\ntype SET_COUNT = {\n  type: typeof actions.SET_COUNT;\n  payload: number;\n};\nexport type Actions = SET_COUNT_INCREMENT | SET_COUNT;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// src/counter-redux.tsx\nimport React from "react";\nimport { AppDispatch, actions, State } from "./redux-store/store";\nimport { useSelector, useDispatch } from "react-redux";\n\nconst CountRedux: React.FC = () => {\n  const count = useSelector((state: State) => state.count);\n  const dispatch = useDispatch() as AppDispatch;\n  return (\n    <div>\n      <div>{count}</div>\n      <button onClick={() => dispatch({ type: actions.SET_COUNT, payload: 1 })}>\n        Set Count value 1\n      </button>\n      <button\n        onClick={() =>\n          dispatch({ type: actions.SET_COUNT_INCREMENT, payload: void 0 })\n        }\n      >\n        Set Count Increment\n      </button>\n    </div>\n  );\n};\n\nexport default CountRedux;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// src/App.tsx\nimport React from "react";\nimport "./styles.css";\nimport CountMobx from "./counter-mobx";\nimport CountRedux from "./counter-redux";\nimport { Provider as ReduxProvider } from "react-redux";\nimport { store } from "./redux-store/store";\n\nconst App: React.FC = () => {\n  return (\n    <div>\n      <div>======Mobx======</div>\n      <CountMobx />\n      <br />\n      <div>======Redux======</div>\n      <ReduxProvider store={store}>\n        <CountRedux />\n      </ReduxProvider>\n    </div>\n  );\n};\n\nexport default App;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h2",{attrs:{id:"相同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[s._v("#")]),s._v(" 相同点")]),s._v(" "),e("ul",[e("li",[s._v("为了解决状态管理混乱，无法有效的同步的问题，统一管理应用状态。")]),s._v(" "),e("li",[s._v("一个状态只有一个可信的数据源，通常是以"),e("code",[s._v("action")]),s._v("的方式提供更新状态的途径。")]),s._v(" "),e("li",[s._v("都带有状态与组件的链接管理库，例如"),e("code",[s._v("react-redux")]),s._v("、"),e("code",[s._v("mobx-react")]),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"不同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[s._v("#")]),s._v(" 不同点")]),s._v(" "),e("h3",{attrs:{id:"函数式和面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数式和面向对象"}},[s._v("#")]),s._v(" 函数式和面向对象")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Redux")]),s._v("更多的是遵循函数式编程"),e("code",[s._v("Functional Programming, FP")]),s._v("思想，从数据上来说"),e("code",[s._v("Redux")]),s._v("理想的是"),e("code",[s._v("immutable")]),s._v("，"),e("code",[s._v("immutable")]),s._v("对象是不可直接赋值的对象,它可以有效的避免错误赋值的问题，例如"),e("code",[s._v("reducer")]),s._v("就是一个纯函数，对于相同的输入总是输出相同的结果。")]),s._v(" "),e("li",[e("code",[s._v("Mobx")]),s._v("则更多从面相对象"),e("code",[s._v("Object Oriented Programming, OOP")]),s._v("与响应式编程"),e("code",[s._v("Reactive Programming")]),s._v("角度考虑问题，从数据上说"),e("code",[s._v("Mobx")]),s._v("从始至终都是一份引用，这样可以使的"),e("code",[s._v("Mobx")]),s._v("的组件可以做到精准更新，将状态包装成可观察对象，一旦状态对象变更，就能自动获得更新。")])]),s._v(" "),e("h3",{attrs:{id:"store管理方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store管理方式"}},[s._v("#")]),s._v(" store管理方式")]),s._v(" "),e("ul",[e("li",[s._v("在"),e("code",[s._v("Redux")]),s._v("应用中通常将整个应用的"),e("code",[s._v("state")]),s._v("被储存在一棵"),e("code",[s._v("object tree")]),s._v("中，并且这个"),e("code",[s._v("object tree")]),s._v("只存在于唯一一个"),e("code",[s._v("store")]),s._v("中。")]),s._v(" "),e("li",[s._v("在"),e("code",[s._v("Mobx")]),s._v("则通常按模块将应用状态划分，在多个独立的"),e("code",[s._v("store")]),s._v("中管理。")])]),s._v(" "),e("h3",{attrs:{id:"储存数据形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#储存数据形式"}},[s._v("#")]),s._v(" 储存数据形式")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Redux")]),s._v("默认以"),e("code",[s._v("JavaScript")]),s._v("原生对象形式存储数据，这也就使得"),e("code",[s._v("Redux")]),s._v("需要手动追踪所有状态对象的变更。")]),s._v(" "),e("li",[s._v("在"),e("code",[s._v("Mobx")]),s._v("使用可观察对象，通常是使用"),e("code",[s._v("observable")]),s._v("让数据的变化可以被观察，通过把属性转化成"),e("code",[s._v("getter/setter")]),s._v("来实现，当数据变更时将自动触发监听响应。")])]),s._v(" "),e("h3",{attrs:{id:"不可变和可变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不可变和可变"}},[s._v("#")]),s._v(" 不可变和可变")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Redux")]),s._v("状态对象通常是不可变的"),e("code",[s._v("Immutable")]),s._v("，复制代码我们不能直接操作状态对象，而总是在原来状态对象基础上返回一个新的状态对象。")]),s._v(" "),e("li",[e("code",[s._v("Mobx")]),s._v("状态对象通常是可变的"),e("code",[s._v("Mutable")]),s._v("，可以直接使用新值更新状态对象。")])]),s._v(" "),e("h3",{attrs:{id:"状态调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态调试"}},[s._v("#")]),s._v(" 状态调试")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Redux")]),s._v("提供进行时间回溯的开发工具，同时纯函数以及更少的抽象，让调试变得更加容易。")]),s._v(" "),e("li",[e("code",[s._v("Mobx")]),s._v("中有更多的抽象和封装，调试会相对比较困难，同时结果也相对难以预测。")])]),s._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),e("p",[e("code",[s._v("Mobx")]),s._v("与"),e("code",[s._v("Redux")]),s._v("都是非常棒的两个库，使用上没有对错，只有合适不合适，只是可能需要在使用之前做好调研工作。或许有人需要减少编写的代码行数，那么就可能会提到"),e("code",[s._v("Redux")]),s._v("有太多的样板代码，而应该使用"),e("code",[s._v("Mobx")]),s._v("，可以减少"),e("code",[s._v("xxx")]),s._v("行代码。又或许有人需要更加明确的处理对象的变更，那么就可能感觉放弃"),e("code",[s._v("Mobx")]),s._v("的响应式魔法，而使用"),e("code",[s._v("Redux")]),s._v("去通过纯 "),e("code",[s._v("JavaScript")]),s._v("来推断与调试。又或许两个状态管理库并不冲突，可以同时存在，分别管理不同的模块的状态。")]),s._v(" "),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://cn.mobx.js.org/\nhttps://www.redux.org.cn/docs/react-redux/\nhttps://juejin.cn/post/6844903977553756168\nhttps://juejin.cn/post/6924572729886638088\nhttps://segmentfault.com/a/1190000011148981\nhttps://www.cnblogs.com/tommymarc/p/15768138.html\nhttps://blog.csdn.net/leelxp/article/details/108450518\nhttps://blog.csdn.net/Ed7zgeE9X/article/details/121896197\nhttps://yangleiup.github.io/accumulate/redux%E4%B8%8Emobx%E5%8C%BA%E5%88%AB.html\nhttps://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);