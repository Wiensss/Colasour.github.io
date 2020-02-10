(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{315:function(t,v,_){"use strict";_.r(v);var e=_(35),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("p",[t._v("点击页面链接时的跳转是怎样的？浏览器首先要解析链接里的 URI：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//nginx.org/en/download.html\n")])])]),e("p",[t._v("再用这个 URI 发起一个新的 HTTP 请求，获取响应报文后就会切换显示内容，渲染出新 URI 指向的页面。")]),t._v(" "),e("p",[t._v("这样的跳转动作是由浏览器的使用者主动发起的"),e("strong",[t._v("主动跳转")]),t._v("，但还有一类跳转是由服务器发起的"),e("strong",[t._v("被动跳转")]),t._v("，浏览器使用者无法控制，这在 HTTP 协议里有个专门的名词叫做"),e("strong",[t._v("重定向 (Redirection)")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"重定向过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向过程"}},[t._v("#")]),t._v(" 重定向过程")]),t._v(" "),e("p",[e("code",[t._v("301 Moved Permanently")]),t._v(" 是永久性跳转，"),e("code",[t._v("302 Found")]),t._v(" 是临时性跳转，浏览器收到这两个状态码就会跳转到新的 URI。")]),t._v(" "),e("p",[t._v("以实验环境为例，用 Chrome 访问 URI "),e("code",[t._v("/18-1")]),t._v("，它会使用 "),e("code",[t._v("302 Found")]),t._v(" 立即跳转到 "),e("code",[t._v("/index.html")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:_(545),alt:"302 Found-1"}})]),t._v(" "),e("p",[t._v("可以看到，这一次重定向实际上发送了两次 HTTP 请求，第一个请求返回 "),e("code",[t._v("302 Found")]),t._v("，第二个请求返回 "),e("code",[t._v("200 OK")]),t._v(" 重定向到 "),e("code",[t._v("/index.html")]),t._v("。")]),t._v(" "),e("p",[t._v("再看看第一个请求返回的响应报文：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(546),alt:"302 Found-2"}})]),t._v(" "),e("p",[t._v("头字段 "),e("code",[t._v("Location: /index.html")]),t._v("，它就是 "),e("code",[t._v("301 / 302")]),t._v(" 重定向跳转的秘密所在。")]),t._v(" "),e("h3",{attrs:{id:"location-头字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-头字段"}},[t._v("#")]),t._v(" Location 头字段")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(" "),e("code",[t._v("Location")]),t._v(" 首部指定的是需要将页面重定向至的地址。一般在响应码为 "),e("code",[t._v("3xx")]),t._v(" 的响应中才会有意义。")])]),t._v(" "),e("p",[t._v("发送新请求，获取 "),e("code",[t._v("Location")]),t._v(" 指定的新页面所采用的方法与初始请求使用的方法以及重定向的类型相关：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("303 See Other")]),t._v(" 始终引致请求使用 "),e("code",[t._v("GET")]),t._v(" 方法，而 "),e("code",[t._v("307 Temporary Redirect")]),t._v(" 和 "),e("code",[t._v("308 Permanent Redirect")]),t._v(" 则不转变初始请求中所使用的方法")]),t._v(" "),e("li",[e("code",[t._v("301 Permanent Redirect")]),t._v(" 和 "),e("code",[t._v("302 Found")]),t._v(" 在大多数情况下不会转变初始请求中的方法，不过一些比较早的用户代理可能会引发方法的变更")])]),t._v(" "),e("p",[t._v("状态码为上述之一的所有响应都会带有一个 "),e("code",[t._v("Location")]),t._v(" 首部。")]),t._v(" "),e("p",[t._v("除了重定向响应之外，状态码为 "),e("code",[t._v("201 Created")]),t._v(" 的消息也会带有 "),e("code",[t._v("Location")]),t._v(" 首部，它指向的是新创建的资源的地址。")]),t._v(" "),e("p",[e("code",[t._v("Location")]),t._v(" 与 "),e("code",[t._v("Content-Location")]),t._v(" 是不同的，前者指定的是一个重定向请求的目的地址（或者新创建的文件的 URL），而后者指向的是经过内容协商后的资源的直接地址，不需要进行进一步的内容协商。"),e("code",[t._v("Location")]),t._v(" 对应的是响应，而 "),e("code",[t._v("Content-Location")]),t._v(" 对应的是要返回的实体。")]),t._v(" "),e("h2",{attrs:{id:"重定向应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向应用场景"}},[t._v("#")]),t._v(" 重定向应用场景")]),t._v(" "),e("p",[t._v("理解了重定向的工作原理和状态码的含义，就可以"),e("strong",[t._v("在服务器端拥有主动权")]),t._v("，控制浏览器的行为。使用重定向跳转，核心是要理解"),e("strong",[t._v("重定向")]),t._v("和"),e("strong",[t._v("永久 / 临时")]),t._v("这两个关键词。")]),t._v(" "),e("h3",{attrs:{id:"重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),e("p",[t._v("首先看什么时候需要重定向？一个最常见的原因就是"),e("strong",[t._v("资源不可用")]),t._v("，需要另一个新的 URI 来代替。至于资源不可用的原因，例如域名变更、服务器变更、网站改版、系统维护，这些都会导致原 URI 指向的资源无法访问。为了避免出现 "),e("code",[t._v("404")]),t._v("，就需要用重定向跳转到新的 URI。")]),t._v(" "),e("p",[t._v("另一个原因就是"),e("strong",[t._v("避免重复")]),t._v("，让多个网址都跳转到一个 URI，增加访问入口的同时还不会增加额外的工作量。例如有的网站都会申请多个名称类似的域名，然后把它们重定向到主站上。")]),t._v(" "),e("h3",{attrs:{id:"永久性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#永久性"}},[t._v("#")]),t._v(" 永久性")]),t._v(" "),e("p",[e("code",[t._v("301 Permanent Redirect")]),t._v(" 的含义是"),e("strong",[t._v("永久")]),t._v("的。如果域名、服务器、网站架构发生了大幅度的改变，比如启用新域名、服务器切换到了新机房、网站目录层次重构，这些都算是"),e("strong",[t._v("永久性")]),t._v("的改变。原来的 URI 已经不能用了，必须用 "),e("code",[t._v("301 Permanent Redirect")]),t._v(" 永久重定向，通知浏览器和搜索引擎更新到新地址，这也是"),e("strong",[t._v("搜索引擎优化 (SEO)")]),t._v(" 要考虑的因素之一。")]),t._v(" "),e("h3",{attrs:{id:"临时性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时性"}},[t._v("#")]),t._v(" 临时性")]),t._v(" "),e("p",[e("code",[t._v("302 Found")]),t._v(" 的含义是"),e("strong",[t._v("临时")]),t._v("的。原来的 URI 在将来的某个时间点还会恢复正常。常见的应用常见就是系统维护，把网站重定向到一个通知页面，告诉用户过一会儿再来访问。另一种用法就是“"),e("strong",[t._v("服务降级")]),t._v("”，比如在双十一促销的时候，把订单查询、领积分等不重要的功能入口暂时关闭，保证核心服务器能够正常运行。")]),t._v(" "),e("h2",{attrs:{id:"重定向相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向相关问题"}},[t._v("#")]),t._v(" 重定向相关问题")]),t._v(" "),e("h3",{attrs:{id:"性能损耗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能损耗"}},[t._v("#")]),t._v(" 性能损耗")]),t._v(" "),e("p",[t._v("重定向的机制决定了一个跳转会有两次请求 - 应答，比正常的访问多了一次。虽然 "),e("code",[t._v("301 / 302")]),t._v(" 报文很小，但大量的跳转对服务器的影响也是不可忽视的。站内重定向还好说，可以长连接复用，站外重定向就要开两个链接，如果网络质量差，会严重影响用户的体验。")]),t._v(" "),e("h3",{attrs:{id:"循环跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环跳转"}},[t._v("#")]),t._v(" 循环跳转")]),t._v(" "),e("p",[t._v("如果重定向的策略设置欠考虑，可能会出现 "),e("code",[t._v("A->B->C->A")]),t._v(" 的无限循环，不停地在这个链路里转圈圈。所以 HTTP 协议特别规定，浏览器必须具有检测“循环跳转”的能力，在发现这种情况时应当停止发送请求并给出错误提示。")]),t._v(" "),e("p",[t._v("以实验环境为例，URI "),e("code",[t._v("/18-2")]),t._v(" 模拟了一个“循环跳转”，它跳转到 "),e("code",[t._v("/18-1")]),t._v("，并用参数 "),e("code",[t._v("dst=/18-2")]),t._v(" 再跳回自己，实现了两个 URI 的无限循环。使用 Chrome 访问这个地址，会得到“该网页无法正常运行”的结果：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(547),alt:"循环条状"}})])])}),[],!1,null,null,null);v.default=a.exports},545:function(t,v,_){t.exports=_.p+"assets/img/302-Found-1.ad5eb754.png"},546:function(t,v,_){t.exports=_.p+"assets/img/302-Found-2.a4276db7.png"},547:function(t,v,_){t.exports=_.p+"assets/img/loop.4b91aeea.png"}}]);