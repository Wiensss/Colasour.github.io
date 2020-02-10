(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{301:function(_,v,t){"use strict";t.r(v);var e=t(35),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[_._v("#")]),_._v(" "+_._s(_.$frontmatter.title))]),_._v(" "),e("h2",{attrs:{id:"标准请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准请求方法"}},[_._v("#")]),_._v(" 标准请求方法")]),_._v(" "),e("p",[_._v("目前 HTTP/1.1 规定了八种方法，单词都"),e("strong",[_._v("必须是大写的形式")]),_._v("。")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("GET")]),_._v("：获取资源，可以理解为读取或者下载资源")]),_._v(" "),e("li",[e("code",[_._v("HEAD")]),_._v("：获取资源的元信息")]),_._v(" "),e("li",[e("code",[_._v("POST")]),_._v("：向资源提交数据，相当于写入或上传数据")]),_._v(" "),e("li",[e("code",[_._v("PUT")]),_._v("：类似 "),e("code",[_._v("POST")])]),_._v(" "),e("li",[e("code",[_._v("DELETE")]),_._v("：删除资源")]),_._v(" "),e("li",[e("code",[_._v("CONNECT")]),_._v("：建立特殊的连接隧道")]),_._v(" "),e("li",[e("code",[_._v("OPTIONS")]),_._v("：列出可对资源实行的方法")]),_._v(" "),e("li",[e("code",[_._v("TRACE")]),_._v("：追钟请求 - 响应的传输路径")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(509),alt:"HTTP请求方法"}})]),_._v(" "),e("h2",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[_._v("#")]),_._v(" GET")]),_._v(" "),e("p",[e("code",[_._v("GET")]),_._v(" 方法含义是"),e("strong",[_._v("从服务器获取资源")]),_._v("，这个资源既可以是静态的文本、页面、图片、视频，也可以是由 PHP、Java 动态生成的页面或者其他格式的数据。")]),_._v(" "),e("p",[e("code",[_._v("GET")]),_._v(" 方法虽然基本动作比较简单，但搭配 URI 和其他头字段就能实现对资源更精细的操作：")]),_._v(" "),e("ul",[e("li",[_._v("在 URI 后使用 "),e("code",[_._v("#")]),_._v("，可以在获取页面后直接定位到某个标签所在的位置")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("if-Modified-Since")]),_._v(" 字段变成了“"),e("strong",[_._v("有条件的请求")]),_._v("”，仅当资源被修改时才会执行获取动作")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("Range")]),_._v(" 字段就是“"),e("strong",[_._v("范围请求")]),_._v("”，只获取资源的一部分数据")])]),_._v(" "),e("h2",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[_._v("#")]),_._v(" HEAD")]),_._v(" "),e("p",[e("code",[_._v("HEAD")]),_._v(" 方法与 "),e("code",[_._v("GET")]),_._v(" 方法类似，也是请求从服务器获取资源，服务器的处理机制也是语义的。但"),e("strong",[_._v("服务器不会返回请求的实体数据")]),_._v("，只会传回响应头，也就是资源的“元信息”。")]),_._v(" "),e("p",[e("code",[_._v("HEAD")]),_._v(" 方法可以看作是 "),e("code",[_._v("GET")]),_._v(" 方法的一个“简化版”或者“轻量版”，因为它的响应头与 "),e("code",[_._v("GET")]),_._v(" 完全相同，所以可以用在很多并不真正需要资源的场合，避免传输 "),e("code",[_._v("body")]),_._v(" 数据的浪费：")]),_._v(" "),e("ul",[e("li",[_._v("检查一个文件是否存在，只要发个 "),e("code",[_._v("HEAD")]),_._v(" 请求即可，没有必要用 "),e("code",[_._v("GET")]),_._v(" 把整个文件都取下来")]),_._v(" "),e("li",[_._v("检查文件是否有最新版本，同样也应该用 "),e("code",[_._v("HEAD")]),_._v(" 请求，服务器会在响应头里把文件的修改时间传回来")])]),_._v(" "),e("h2",{attrs:{id:"post-put"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-put"}},[_._v("#")]),_._v(" POST / PUT")]),_._v(" "),e("p",[e("code",[_._v("POST")]),_._v(" 和 "),e("code",[_._v("PUT")]),_._v(" 方法是"),e("strong",[_._v("向 URI 指定的资源提交数据")]),_._v("，数据就放在报文的 "),e("code",[_._v("body")]),_._v(" 里。")]),_._v(" "),e("p",[e("code",[_._v("POST")]),_._v(" 也是一个经常用到的请求方法，使用频率应该是仅次于 "),e("code",[_._v("GET")]),_._v(" 方法，应用的场景非常多，只要向服务器发送数据，用的大多数都是 "),e("code",[_._v("POST")]),_._v("。")]),_._v(" "),e("p",[e("code",[_._v("PUT")]),_._v(" 的作用与 "),e("code",[_._v("POST")]),_._v(" 类似，也可以向服务器提交数据，但与 "),e("code",[_._v("POST")]),_._v(" 存在微妙的不同，通常 "),e("code",[_._v("POST")]),_._v(' 表示的是“新建” "create" 的含义，而 '),e("code",[_._v("PUT")]),_._v(' 则是“修改” "update" 的含义。')]),_._v(" "),e("p",[_._v("在实际应用中，"),e("code",[_._v("PUT")]),_._v(" 用到的比较少。而且因为它与 "),e("code",[_._v("POST")]),_._v(" 的语义、功能太过近似，有的服务器甚至就直接禁止使用 "),e("code",[_._v("PUT")]),_._v(" 方法，只用 "),e("code",[_._v("POST")]),_._v(" 方法上传数据。")]),_._v(" "),e("h2",{attrs:{id:"其他方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[_._v("#")]),_._v(" 其他方法")]),_._v(" "),e("h3",{attrs:{id:"delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[_._v("#")]),_._v(" DELETE")]),_._v(" "),e("p",[e("code",[_._v("DELETE")]),_._v(" 方法"),e("strong",[_._v("指示服务器删除资源")]),_._v("，因为这个动作危险性太大，所以通常服务器不会执行真正的删除操作，而是对资源做一个删除标记。当然，更多的时候服务器就直接不处理 "),e("code",[_._v("DELETE")]),_._v(" 请求。")]),_._v(" "),e("h3",{attrs:{id:"connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[_._v("#")]),_._v(" CONNECT")]),_._v(" "),e("p",[e("code",[_._v("CONNECT")]),_._v(" 方法是一个比较特殊的方法，要求服务器"),e("strong",[_._v("为客户端和另一台远程服务器建立一条特殊的连接隧道")]),_._v("，这时 Web 服务器在中间充当了代理的角色。")]),_._v(" "),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[_._v("#")]),_._v(" OPTIONS")]),_._v(" "),e("p",[e("code",[_._v("OPTIONS")]),_._v(" 方法要求服务器"),e("strong",[_._v("列出可对资源实行的操作方法")]),_._v("，在响应头的 "),e("code",[_._v("Allow")]),_._v(" 字段里返回。")]),_._v(" "),e("h3",{attrs:{id:"trace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trace"}},[_._v("#")]),_._v(" TRACE")]),_._v(" "),e("p",[e("code",[_._v("TRACE")]),_._v(" 方法多用于对 HTTP 链路的测试或诊断，可以"),e("strong",[_._v("显示出请求 - 响应的传输路径")]),_._v("。它的本意是好的，但存在漏洞，会泄露网站的信息，所以 Web 服务器通常也是禁止使用。")]),_._v(" "),e("h2",{attrs:{id:"安全与幂等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全与幂等"}},[_._v("#")]),_._v(" 安全与幂等")]),_._v(" "),e("h3",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[_._v("#")]),_._v(" 安全")]),_._v(" "),e("p",[_._v("在 HTTP 协议里，所谓的“"),e("strong",[_._v("安全")]),_._v("”是指请求方法不会“破坏”服务器上的资源，即不会对服务器上的资源造成实质的修改。")]),_._v(" "),e("p",[_._v("按照这个定义，只有 "),e("code",[_._v("GET")]),_._v(" 和 "),e("code",[_._v("HEAD")]),_._v(" 方法是“安全”的，因为它们是"),e("strong",[_._v("只读")]),_._v("操作。只要服务器不故意曲解请求方法的处理方式，无论 "),e("code",[_._v("GET")]),_._v(" 和 "),e("code",[_._v("HEAD")]),_._v(" 操作多少次，服务器上的数据都是“安全的”。")]),_._v(" "),e("p",[_._v("而 "),e("code",[_._v("POST")]),_._v("、"),e("code",[_._v("PUT")]),_._v("、"),e("code",[_._v("DELETE")]),_._v(" 操作会修改服务器上的资源，增加或删除数据，所以是“不安全”的。")]),_._v(" "),e("h3",{attrs:{id:"幂等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#幂等"}},[_._v("#")]),_._v(" 幂等")]),_._v(" "),e("p",[_._v("所谓的“"),e("strong",[_._v("幂等")]),_._v("”实际上是一个数学用语，被借用到了 HTTP 协议里，意思是多次执行相同的操作，结果也是相同的，即多次“幂”后结果“相等”。")]),_._v(" "),e("p",[_._v("显然，"),e("code",[_._v("GET")]),_._v(" 和 "),e("code",[_._v("HEAD")]),_._v(" 即使安全也是幂等的，"),e("code",[_._v("DELETE")]),_._v(" 可以多次删除同一个资源，效果都是“资源不存在”，所以也是幂等的。")]),_._v(" "),e("p",[_._v("按照 RFC 里的语义，"),e("code",[_._v("POST")]),_._v(" 是“新增或提交数据”，多次提交数据会创建多个资源，所以不是幂等的；而 "),e("code",[_._v("PUT")]),_._v(" 是“替换或更新数据”，多次更新一个资源，资源还会是第一次更新的状态，所以是幂等的。")])])}),[],!1,null,null,null);v.default=a.exports},509:function(_,v,t){_.exports=t.p+"assets/img/request_method.3cdc8ac7.jpg"}}]);