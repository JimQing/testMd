(function(e){function n(n){for(var o,a,c=n[0],l=n[1],s=n[2],u=0,g=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&g.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(n);while(g.length)g.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var l=t[a];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={index:0},i=[];function a(e){return c.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"5260abb7"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var s=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,t[1](s)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/testMd/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var d=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("3c24"),r=t.n(o);r.a},"07af":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={builtinFonts:[{label:"无衬线",value:"-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif"},{label:"衬线",value:"Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}],sizeOption:[{label:"12px",value:"12px",desc:"更小"},{label:"13px",value:"13px",desc:"稍小"},{label:"14px",value:"14px",desc:"推荐"},{label:"15px",value:"15px",desc:"稍大"},{label:"16px",value:"16px",desc:"更大"}],colorOption:[{label:"经典蓝",value:"rgba(15, 76, 129, 1)",desc:"最新流行"},{label:"翡翠绿",value:"rgba(0, 152, 116, 1)",desc:"优雅清新"},{label:"活力橘",value:"rgba(250, 81, 81, 1)",desc:"热情活泼"}],codeThemeOption:[{label:"微信",value:"wechat",desc:"默认样式"},{label:"GitHub",value:"github",desc:"精简风格"}],form:{rows:1,cols:1}};n.default=o},1616:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o="/*\n  按Ctrl+F可格式化\n*/\n/* 一级标题样式 */\nh1 {\n}\n/* 二级标题样式 */\nh2 {\n}\n/* 三级标题样式 */\nh3 {\n}\n/* 四级标题样式 */\nh4 {\n}\n/* 图片样式 */\nimage {\n}\n/* 引用样式 */\nblockquote {\n}\n/* 引用段落样式 */\nblockquote_p {\n}\n/* 段落样式 */\np {\n}\n/* 行内代码样式 */\ncodespan {\n}\n/* 粗体样式 */\nstrong {\n}\n/* 链接样式 */\nlink {\n}\n/* 微信链接样式 */\nwx_link {\n}\n",r=o;n.default=r},"1abd":function(e,n,t){var o=t("4bad");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */::-webkit-scrollbar{width:6px;height:6px;background-color:#fff}::-webkit-scrollbar-track{border-radius:6px;background-color:hsla(0,0%,78.4%,.3)}::-webkit-scrollbar-thumb{border-radius:6px;background-color:rgba(144,146,152,.5);-webkit-transition:background-color .3s;transition:background-color .3s}::-webkit-scrollbar-thumb:hover{background-color:rgba(144,146,152,.5)}\n\n/* CSS-hints */.CodeMirror-hints{position:absolute;z-index:10;overflow:hidden;list-style:none;margin:0;padding:2px;border-radius:4px;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);min-width:200px;font-size:12px;font-family:monospace;max-height:20em;overflow-y:auto;color:#333}.CodeMirror-hint{margin:0;margin-top:10px;padding:4px 6px;border-radius:2px;white-space:pre;color:#000;cursor:pointer}.CodeMirror-hint:first-of-type{margin-top:0}.CodeMirror-hint:hover{background:#f0f0f0}",""]),e.exports=n},"23be":function(e,n,t){"use strict";t.r(n);var o=t("3b4e"),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},"3b4e":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"3bec":function(e,n,t){"use strict";var o=t("4ea4"),r=o(t("e143")),i=t("5c96");r.default.use(i.Container),r.default.use(i.Header),r.default.use(i.Upload),r.default.use(i.Tooltip),r.default.use(i.Form),r.default.use(i.FormItem),r.default.use(i.Select),r.default.use(i.Option),r.default.use(i.ColorPicker),r.default.use(i.Switch),r.default.use(i.Button),r.default.use(i.Main),r.default.use(i.Col),r.default.use(i.Row),r.default.use(i.Dialog),r.default.use(i.Loading),r.default.component(i.Message.name,i.Message),r.default.prototype.$loading=i.Loading.service,r.default.prototype.$message=i.Message},"3c24":function(e,n,t){var o=t("1abd");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("17e3bda8",o,!0,{sourceMap:!1,shadowMode:!1})},"3dfd":function(e,n,t){"use strict";t.r(n);var o=t("78a1"),r=t("23be");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("034f");var a,c=t("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=l.exports},4360:function(e,n,t){"use strict";var o=t("4ea4");t("ac1f"),t("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("e143")),i=o(t("2f62")),a=o(t("07af")),c=o(t("b8b4")),l=o(t("0e54")),s=o(t("56b3")),u=o(t("47da")),d=o(t("1616")),g=t("dea5");r.default.use(i.default);var f={wxRenderer:null,output:"",html:"",editor:null,cssEditor:null,currentFont:"",currentSize:"",currentColor:"",citeStatus:0,nightMode:!1,codeTheme:"github",rightClickMenuVisible:!1},p={setEditorValue:function(e,n){e.editor.setValue(n)},setCssEditorValue:function(e,n){e.cssEditor.setValue(n)},setWxRendererOptions:function(e,n){e.wxRenderer.setOptions(n)},setCiteStatus:function(e,n){e.citeStatus=n,localStorage.setItem("citeStatus",n)},setCurrentFont:function(e,n){e.currentFont=n,localStorage.setItem("fonts",n)},setCurrentSize:function(e,n){e.currentSize=n,localStorage.setItem("size",n)},setCurrentColor:function(e,n){e.currentColor=n,localStorage.setItem("color",n)},setCurrentCodeTheme:function(e,n){e.codeTheme=n,localStorage.setItem("codeTheme",n)},setRightClickMenuVisible:function(e,n){e.rightClickMenuVisible=n},themeChanged:function(e){e.nightMode=!e.nightMode,localStorage.setItem("nightMode",e.nightMode)},initEditorState:function(e){e.currentFont=localStorage.getItem("fonts")||a.default.builtinFonts[0].value,e.currentColor=localStorage.getItem("color")||a.default.colorOption[0].value,e.currentSize=localStorage.getItem("size")||a.default.sizeOption[2].value,e.codeTheme=localStorage.getItem("codeTheme")||a.default.codeThemeOption[0].value,e.citeStatus="true"===localStorage.getItem("citeStatus"),e.nightMode="true"===localStorage.getItem("nightMode"),e.wxRenderer=new c.default({theme:(0,g.setColor)(e.currentColor),fonts:e.currentFont,size:e.currentSize,status:e.citeStatus})},initEditorEntity:function(e){var n=document.getElementById("editor");n.value||(n.value=localStorage.getItem("__editor_content")||(0,g.formatDoc)(u.default)),e.editor=s.default.fromTextArea(n,{mode:"text/x-markdown",theme:"xq-light",lineNumbers:!1,lineWrapping:!0,styleActiveLine:!0,autoCloseBrackets:!0,extraKeys:{"Ctrl-F":function(e){var n=(0,g.formatDoc)(e.getValue(0));localStorage.setItem("__editor_content",n),e.setValue(n)},"Ctrl-S":function(e){}}})},initCssEditorEntity:function(e){var n=document.getElementById("cssEditor");n.value||(n.value=localStorage.getItem("__css_content")||d.default),e.cssEditor=s.default.fromTextArea(n,{mode:"css",theme:"style-mirror",lineNumbers:!1,lineWrapping:!0,matchBrackets:!0,autofocus:!0,extraKeys:{"Ctrl-F":function(e){var n=(0,g.formatCss)(e.getValue(0));localStorage.setItem("__css_content",n),e.setValue(n)},"Ctrl-S":function(e){}}})},editorRefresh:function(e){var n=(0,l.default)(e.editor.getValue(0),{renderer:e.wxRenderer.getRenderer(e.citeStatus)});n=n.replace(/(style=".*?)"/,'$1;margin-top: 0"'),e.citeStatus&&(n+=e.wxRenderer.buildFootnotes(),n+=e.wxRenderer.buildAddition()),e.output=n},clearEditorToDefault:function(e){var n=(0,g.formatDoc)(u.default);e.editor.setValue(n),e.cssEditor.setValue(d.default)}},b=new i.default.Store({state:f,mutations:p,actions:{}});n.default=b},"47da":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o='# 示例文章：Google 搜索的即时自动补全功能究竟是如何“工作”的？\n> Google 搜索**自动补全功能**的强大，相信不少朋友都能感受到，它帮助我们更快地“补全”我们所要输入的搜索关键字。那么，它怎么知道我们要输入什么内容？它又是如何工作的？在这篇文章里，我们一起来看看。\n\n## 使用自动补全\nGoogle 搜索的自动补全功能可以在 Google 搜索应用的大多数位置使用，包括 [Google](https://www.google.com/) 主页、适用于 IOS 和 Android 的 Google 应用，我们只需要在 Google 搜索框上开始键入关键字，就可以看到联想词了。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/juejin.gif)\n\n在上图示例中，我们可以看到，输入关键字 `juej`，Google 搜索会联想到“掘金”、“掘金小册”、“绝句”等等，好处就是，我们无须输入完整的关键字即可轻松完成针对这些 topics 的搜索。\n\n谷歌搜索的自动补全功能对于使用移动设备的用户来说特别有用，用户可以轻松在难以键入的小屏幕上完成搜索。当然，对于移动设备用户和台式机用户而言，这都节省了大量的时间。根据 Google 官方报告，自动补全功能可以减少大约 25% 的打字，累积起来，预计每天可以节省 200 多年的打字时间。是的，每天！\n\n> 注意，本文所提到的“**联想词**”与“**预测**”，是同一个意思。\n\n## 基于“预测”而非“建议”\nGoogle 官方将自动补全功能称之为“预测”，而不是“建议”，为什么呢？其实是有充分理由的。自动补全功能是为了**帮助用户完成他们打算进行的搜索**，而不是建议用户要执行什么搜索。\n\n那么，Google 是如何确定这些“预测”的？其实，Google 会根据趋势搜索 [trends](https://trends.google.com/trends/?geo=US) 给到我们这些“预测”。简单来说，哪个热门、哪个搜索频率高，就更可能推给我们。当然，这也与我们当前所处的位置以及我们的搜索历史相关。\n\n另外，这些“预测”也会随着我们键入的关键字的变更而更改。例如，当我们把键入的关键字从 `juej` 更改为 `juex` 时，与“掘金”相关的预测会“消失”，同时，与“觉醒”、“决心”相关联的词会出现。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/juex.gif)\n\n## 为什么看不到某些联想词？\n如果我们在输入某个关键字时看不到联想词，那么表明 Google 的算法可能检测到：\n\n- 这个关键字不是热门字词；\n- 搜索的字词太新了，我们可能需要等待几天或几周才能看到联想词；\n- 这是一个侮辱性或敏感字词，这个搜索字词违反了 Google 的相关政策。更加详细的情况，可以了解 [Google 搜索自动补全政策](https://support.google.com/websearch/answer/7368877)。\n\n## 为什么会看到某些不当的联想词？\nGoogle 拥有专门设计的系统，可以自动捕获不适当的预测结果而不显示出来。然而，Google 每天需要处理数十亿次搜索，这意味着 Google 每天会显示数十亿甚至上百亿条预测。再好的系统，也可能存在缺陷，不正确的预测也可能随时会出现。\n\n我们作为 Google 搜索的用户，如果认定某条预测违反了相关的搜索自动补全政策，可以进行举报反馈，点击右下角“**举报不当的联想查询**”并勾选相关选项即可。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/report.gif)\n\n## 如何实现自动补全算法？\n目前，Google 官方似乎并没有公开搜索自动补全的算法实现，但是业界在这方面已经有了不少研究。\n\n一个好的自动补全器必须是快速的，并且在用户键入下一个字符后立即更新联想词列表。**自动补全器的核心是一个函数，它接受输入的前缀，并搜索以给定前缀开头的词汇或语句列表**。通常来说，只需要返回少量的数目即可。\n\n接下来，我们先从一个简单且低效的实现开始，并在此基础上逐步构建更高效的方法。\n\n### 词汇表实现\n一个**简单粗暴的实现方式**是：顺序查找词汇表，依次检查每个词汇，看它是否以给定的前缀开头。\n\n但是，此方法需要将前缀与每个词汇进行匹配检查，若词汇量较少，这种方式可能勉强行得通。但是，如果词汇量规模较大，效率就太低了。\n\n一个**更好的实现方式是**：让词汇按字典顺序排序。借助二分搜索算法，可以快速搜索有序词汇表中的前缀。由于二分搜索的每一步都会将搜索的范围减半，因此，总的搜索时间与词汇表中单词数量的对数成正比，即时间复杂度是 `O(log N)`。二分搜索的性能很好，但有没有更好的实现呢？当然有，往下看。\n\n### 前缀树实现\n通常来说，许多词汇都以相同的前缀开头，比如 `need`、`nested` 都以 `ne` 开头，`seed`、`speed` 都以 `s` 开头。要是为每个单词分别存储公共前缀似乎很浪费。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/pretree.png)\n\n前缀树是一种利用公共前缀来加速补全速度的数据结构。前缀树在节点树中排列一组单词，单词沿着从根节点到叶子节点的路径存储，树的层次对应于前缀的字母位置。\n\n前缀的补全是顺着前缀定义的路径来查找的。例如，在上图的前缀树中，前缀 `ne` 对应于从子节点取左边缘 `N` 和唯一边缘 `E` 的路径。然后可以通过继续遍历从 `E` 节点可以达到的所有叶节点来生成补全列表。在图中，`ne` 的补全可以是两个分支：`-ed` 和 `-sted`。如果在数中找不到由前缀定义的路径，则说明词汇表中不包含以该前缀开头的单词。\n\n### 有限状态自动机(DFA)实现\n前缀树可以有效处理公共前缀，但是，对于其他共享词部分，仍会分别存储在每个分支中。比如，后缀 `ed`、`ing`、`tion` 在英文单词中特别常见。在上一个例子中，`e`、`d` 分别存放在了每一个分支上。\n\n有没有一种方法可以更加节省存储空间呢？有的，那就是 DFA。\n\n<center>\n<img src="https://gitee.com/yanglbme/resource/raw/master/doocs-md/dfa.gif" style="width: 50%;"></center>\n\n在上面的例子中，单词 `need`、`nested`、`seed` 和 `speed` 仅由 9 个节点组成，而上一张图中的前缀树包含了 17 个节点。\n\n可以看出，最小化前缀树 DFA 可以在很大程度上减少数据结构的大小。即使词汇量很大，最小化 DFA 通常也适合在内存中存储，避免昂贵的磁盘访问是实现快速自动补全的关键。\n\n### 一些扩展\n上面介绍了如何利用合理的数据结构实现基本的自动补全功能。这些数据结构可以通过多种方式进行扩展，从而改善用户体验。\n\n通常，满足特定前缀的词汇可能很多，而用户界面上能够显示的却不多，我们更希望能显示最常搜索或者最有价值的词汇。这通常可以通过为词汇表中的每个单词增加一个代表单词值的**权重** `weight`，并且按照权重高低来排序自动补全列表。\n\n- 对于排序后的词汇表来说，在词汇表每个元素上增加 `weight` 属性并不难；\n- 对于前缀树来说，将 `weight` 存储在叶子节点中，也是很简单的一个实现；\n- 对于 `DFA` 来说，则较为复杂。因为一个叶子节点可以通过多条路径到达。一种解决方案是将权重关联到路径而不是叶子节点。\n\n目前有不少开源库都提供了这个功能，比如主流的搜索引擎框架 [Elasticsearch](https://www.elastic.co/products/elasticsearch)、[Solr](https://lucene.apache.org/solr/) 等，基于此，我们可以实现高效而强大的自动补全功能。\n\n#### 推荐阅读\n- [阿里又一个 20k+ stars 开源项目诞生，恭喜 fastjson！](https://mp.weixin.qq.com/s/RNKDCK2KoyeuMeEs6GUrow)\n- [刷掉 90% 候选人的互联网大厂海量数据面试题（附题解 + 方法总结）](https://mp.weixin.qq.com/s/rjGqxUvrEqJNlo09GrT1Dw)\n- [好用！期待已久的文本块功能究竟如何在 Java 13 中发挥作用？](https://mp.weixin.qq.com/s/kalGv5T8AZGxTnLHr2wDsA)\n- [2019 GitHub 开源贡献排行榜新鲜出炉！微软谷歌领头，阿里跻身前 12！](https://mp.weixin.qq.com/s/_q812aGD1b9QvZ2WFI0Qgw)\n\n---\n\n欢迎关注我的公众号“**Doocs开源社区**”，原创技术文章第一时间推送。\n\n<center>\n    <img src="https://gitee.com/yanglbme/resource/raw/master/doocs-md/qrcode.png" style="width: 100px;">\n</center>\n\n',r=o;n.default=r},"56d7":function(e,n,t){"use strict";var o=t("4ea4"),r=o(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("6cdc"),t("1c31");var i=o(t("e143")),a=o(t("3dfd")),c=o(t("4360")),l=o(t("5c96"));t("0fae"),t("3bec"),t("a7be"),t("8d7e"),t("7b00"),t("959b"),t("10b2"),t("8c33"),t("31c5"),t("9b74"),t("111b"),t("90ba"),i.default.use(l.default),i.default.config.productionTip=!1,a.default.mpType="app";var s=new i.default((0,r.default)({store:c.default},a.default));s.$mount()},"6cdc":function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationStyle:"custom",navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.0.7",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/testMd/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("f75a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:""})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},"78a1":function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[]},"90ba":function(e,n,t){var o=t("cfd7");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("52042e15",o,!0,{sourceMap:!1,shadowMode:!1})},b8b4:function(e,n,t){"use strict";var o=t("4ea4");t("99af"),t("c975"),t("a15b"),t("d81d"),t("ac1f"),t("5319"),t("1276"),t("2ca0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("d4ec")),i=o(t("0e54")),a=function e(n){var t=this;(0,r.default)(this,e),this.opts=n;var o=!0,a=[],c=0,l=null,s="Menlo, Operator Mono, Consolas, Monaco, monospace",u=function(e,n){return Object.assign({},e,n)};this.buildTheme=function(e){var n={},o=u(e.BASE,{"font-family":t.opts.fonts,"font-size":t.opts.size}),r=u(o,{});for(var i in e.inline)if(e.inline.hasOwnProperty(i)){var a=e.inline[i];n[i]=u(o,a)}for(var c in e.block)if(e.block.hasOwnProperty(c)){var l=e.block[c];"code"===c&&(l["font-family"]=s),n[c]=u(r,l)}return n};var d=function(e,n){var t=[],o=l[e];if(!o)return"";for(var r in o)t.push(r+":"+o[r]);return'style="'.concat(t.join(";")+(n||""),'"')},g=function(e,n){return a.push([++c,e,n]),c};this.buildFootnotes=function(){var e=a.map((function(e){return e[1]===e[2]?'<code style="font-size: 90%; opacity: 0.6;">['.concat(e[0],"]</code>: <i>").concat(e[1],"</i><br/>"):'<code style="font-size: 90%; opacity: 0.6;">['.concat(e[0],"]</code> ").concat(e[1],": <i>").concat(e[2],"</i><br/>")}));return"<h4 ".concat(d("h4"),">引用链接</h4><p ").concat(d("footnotes"),">").concat(e.join("\n"),"</p>")},this.buildAddition=function(){return"\n            <style>\n            .preview-wrapper pre::before {\n                position: absolute;\n                top: 0;\n                right: 0;\n                color: #ccc;\n                text-align: center;\n                font-size: 0.8em;\n                padding: 5px 10px 0;\n                line-height: 15px;\n                height: 15px;\n                font-weight: 600;\n            }\n            </style>\n        "},this.setOptions=function(e){t.opts=u(t.opts,e)},this.hasFootnotes=function(){return 0!==a.length},this.getRenderer=function(e){a=[],c=0,l=t.buildTheme(t.opts.theme);var n=new i.default.Renderer;return n.heading=function(e,n){switch(n){case 1:return"<h1 ".concat(d("h1"),">").concat(e,"</h1>");case 2:return"<h2 ".concat(d("h2"),">").concat(e,"</h2>");case 3:return"<h3 ".concat(d("h3"),">").concat(e,"</h3>");default:return"<h4 ".concat(d("h4"),">").concat(e,"</h4>")}},n.paragraph=function(e){return-1!=e.indexOf("<figure")&&-1!=e.indexOf("<img")?e:""===e.replace(/ /g,"")?"":"<p ".concat(d("p"),">").concat(e,"</p>")},n.blockquote=function(e){return e=e.replace(/<p.*?>/g,"<p ".concat(d("blockquote_p"),">")),"<blockquote ".concat(d("blockquote"),">").concat(e,"</blockquote>")},n.code=function(e,n){e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;");var t=e.split("\n").map((function(e){return'<code class="prettyprint"><span class="code-snippet_outer">'.concat(e||"<br>","</span></code>")})),o="github";return'\n                <section class="code-snippet__'.concat(o,'">\n                    <pre class="code__pre" data-lang="').concat(n,'">\n                        ').concat(t.join(""),"\n                    </pre>\n                </section>\n            ")},n.codespan=function(e,n){return"<code ".concat(d("codespan"),">").concat(e,"</code>")},n.listitem=function(e){return"<span ".concat(d("listitem"),'><span style="margin-right: 10px;"><%s/></span>').concat(e,"</span>")},n.list=function(e,n,t){e=e.replace(/<\/*p.*?>/g,"");var o=e.split("<%s/>");if(!n)return e=o.join("•"),"<p ".concat(d("ul"),">").concat(e,"</p>");e=o[0];for(var r=1;r<o.length;r++)e=e+r+"."+o[r];return"<p ".concat(d("ol"),">").concat(e,"</p>")},n.image=function(e,n,t){var r="";t&&(r="<figcaption ".concat(d("figcaption"),">").concat(t,"</figcaption>"));var i=d("figure"),a=d(o?"image":"image_org");return"<figure ".concat(i,"><img ").concat(a,' src="').concat(e,'" title="').concat(n,'" alt="').concat(t,'"/>').concat(r,"</figure>")},n.link=function(n,t,o){if(n.startsWith("https://mp.weixin.qq.com"))return'<a href="'.concat(n,'" title="').concat(t||o,'" ').concat(d("wx_link"),">").concat(o,"</a>");if(n===o||!e)return o;var r=g(t||o,n);return"<span ".concat(d("link"),">").concat(o,"<sup>[").concat(r,"]</sup></span>")},n.strong=function(e){return"<strong ".concat(d("strong"),">").concat(e,"</strong>")},n.em=function(e){return'<span style="font-style: italic;">'.concat(e,"</span>")},n.table=function(e,n){return'<section style="padding:0 8px;"><table class="preview-table"><thead '.concat(d("thead"),">").concat(e,"</thead><tbody>").concat(n,"</tbody></table></section>")},n.tablecell=function(e,n){return"<td ".concat(d("td"),">").concat(e,"</td>")},n.hr=function(){return'<hr style="border-style: solid;border-width: 1px 0 0;border-color: rgba(0,0,0,0.1);-webkit-transform-origin: 0 0;-webkit-transform: scale(1, 0.5);transform-origin: 0 0;transform: scale(1, 0.5);">'},n}},c=a;n.default=c},bcaf:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={BASE:{"text-align":"left",color:"#3f3f3f","line-height":"1.75"},BASE_BLOCK:{margin:"1em 8px"},block:{h1:{"font-size":"1.2em","text-align":"center","font-weight":"bold",display:"table",margin:"2em auto 1em",padding:"0 1em","border-bottom":"2px solid rgba(0, 152, 116, 0.9)"},h2:{"font-size":"1.2em","text-align":"center","font-weight":"bold",display:"table",margin:"4em auto 2em",padding:"0 0.2em",background:"rgba(0, 152, 116, 0.9)",color:"#fff"},h3:{"font-weight":"bold","font-size":"1.1em",margin:"2em 8px 0.75em 0","line-height":"1.2","padding-left":"8px","border-left":"3px solid rgba(0, 152, 116, 0.9)"},h4:{"font-weight":"bold","font-size":"1em",margin:"2em 8px 0.5em",color:"rgba(66, 185, 131, 0.9)"},p:{margin:"1.5em 8px","letter-spacing":"0.1em"},blockquote:{"font-style":"normal","border-left":"none",padding:"1em","border-radius":"4px",color:"#FEEEED",background:"rgba(27,31,35,.05)",margin:"2em 8px"},blockquote_p:{"letter-spacing":"0.1em",color:"rgb(80, 80, 80)","font-size":"1em",display:"block"},code:{"font-size":"80%",overflow:"auto",color:"#333","white-space":"pre",background:"rgb(247, 247, 247)","border-radius":"2px",padding:"10px","line-height":"1.5",border:"1px solid rgb(236,236,236)",margin:"20px 0"},image:{"border-radius":"4px",display:"block",margin:"0.1em auto 0.5em",width:"100% !important"},image_org:{"border-radius":"4px",display:"block"},ol:{"margin-left":"0","padding-left":"1em"},ul:{"margin-left":"0","padding-left":"1em","list-style":"circle"},footnotes:{margin:"0.5em 8px","font-size":"80%"},figure:{margin:"1.5em 8px"}},inline:{listitem:{"text-indent":"-1em",display:"block",margin:"0.2em 8px"},codespan:{"font-size":"90%","white-space":"pre",color:"#d14",background:"rgba(27,31,35,.05)",padding:"3px 5px","border-radius":"4px"},link:{color:"#576b95"},wx_link:{color:"#576b95","text-decoration":"none"},strong:{color:"rgba(15, 76, 129, 0.9)","font-weight":"bold"},table:{"border-collapse":"collapse","text-align":"center",margin:"1em 8px"},thead:{background:"rgba(0, 0, 0, 0.05)","font-weight":"bold"},td:{border:"1px solid #dfdfdf",padding:"0.25em 0.5em"},footnote:{"font-size":"12px"},figcaption:{"text-align":"center",color:"#888","font-size":"0.8em"}}};n.default=o},cfd7:function(e,n,t){var o=t("4bad");n=o(!1),n.push([e.i,".container_night{background-color:#333}.container_night .el-main{background-color:#333}.container_night .CodeMirror{caret-color:grey;color:grey;background-color:#1e1e1e;box-shadow:inset 0 0 0 1px rgba(100,37,37,.102)}.container_night .output_night .preview{background-color:#1e1e1e;box-shadow:0 0 70px rgba(0,0,0,.3)}.container_night .output_night .preview-wrapper{background-color:#1e1e1e;box-shadow:inset 0 0 0 1px hsla(0,4.3%,91%,.102)}.container_night .output_night .code-snippet__fix{background-color:#eee}.container_night .cm-s-style-mirror .CodeMirror-matchingbracket{color:#f0f0f0!important;background:#1e1e1e!important}.container_night .cm-s-xq-light span.cm-variable-2,\n.container_night .cm-s-style-mirror span.cm-tag{color:grey}.container_night .cm-s-xq-light .CodeMirror-activeline-background{background-color:initial}.container_night .cm-s-xq-light span.cm-string{color:#8e9eb9}.container_night .cm-s-xq-light span.cm-link{color:#84868b}.container_night .editor__header{background-color:#3c3c3c}.container_night .el-button{color:#f0f0f0;background-color:#1e1e1e;border:1px solid transparent}.container_night .el-button.is-plain:focus,\n.container_night .el-button.is-plain:hover{background:#1e1e1e;color:#f0f0f0;border:1px solid #f0f0f0}.container_night .el-button.is-plain:focus i,\n.container_night .el-button.is-plain:hover i{color:#f0f0f0}.container_night .insert__dialog .el-dialog,\n.container_night .about__dialog .el-dialog,\n.container_night .reset__dialog .el-dialog,\n.container_night .upload__dialog .el-dialog{background-color:#333}.container_night .insert__dialog .el-dialog__body,\n.container_night .about__dialog .el-dialog__body,\n.container_night .reset__dialog .el-dialog__body,\n.container_night .upload__dialog .el-dialog__body{color:#f0f0f0}.container_night .insert__dialog .el-dialog__title,\n.container_night .about__dialog .el-dialog__title,\n.container_night .reset__dialog .el-dialog__title,\n.container_night .upload__dialog .el-dialog__title,\n.container_night .insert__dialog .el-form-item__label,\n.container_night .about__dialog .el-form-item__label,\n.container_night .reset__dialog .el-form-item__label,\n.container_night .upload__dialog .el-form-item__label{color:#f0f0f0}.container_night .insert__dialog .el-tabs__item,\n.container_night .about__dialog .el-tabs__item,\n.container_night .reset__dialog .el-tabs__item,\n.container_night .upload__dialog .el-tabs__item{color:grey}.container_night .insert__dialog .el-tabs__nav-wrap::after,\n.container_night .about__dialog .el-tabs__nav-wrap::after,\n.container_night .reset__dialog .el-tabs__nav-wrap::after,\n.container_night .upload__dialog .el-tabs__nav-wrap::after{background-color:#84868b}.container_night .insert__dialog .is-active,\n.container_night .about__dialog .is-active,\n.container_night .reset__dialog .is-active,\n.container_night .upload__dialog .is-active{color:#f0f0f0}.container_night .insert__dialog .el-upload-dragger,\n.container_night .about__dialog .el-upload-dragger,\n.container_night .reset__dialog .el-upload-dragger,\n.container_night .upload__dialog .el-upload-dragger{background-color:#1e1e1e}.container_night ::v-deep .el-icon-upload,\n.container_night .el-icon-download,\n.container_night .el-icon-refresh,\n.container_night .el-icon-s-grid{color:#f0f0f0}.container_night ::-webkit-scrollbar{background-color:#1e1e1e}.CodeMirror{padding-bottom:0;height:100%!important;width:100%!important;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);font-size:14px;font-family:PingFang SC,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif!important}.CodeMirror-vscrollbar:focus{outline:none}.CodeMirror-scroll{padding:20px;padding-bottom:0;overflow-x:hidden!important;overflow-y:scroll!important}.CodeMirror-vscrollbar{width:0;height:0}.codeMirror-wrapper{height:100%!important}",""]),e.exports=n},dea5:function(e,n,t){"use strict";var o=t("4ea4");t("99af"),t("4de4"),t("4160"),t("c975"),t("a15b"),t("d81d"),t("fb6a"),t("b64b"),t("d3b7"),t("ac1f"),t("3ca3"),t("1276"),t("498a"),t("159b"),t("ddb0"),t("2b3d"),Object.defineProperty(n,"__esModule",{value:!0}),n.setColorWithTemplate=l,n.setFontSizeWithTemplate=u,n.customCssWithTemplate=f,n.css2json=p,n.saveEditorContent=b,n.formatDoc=h,n.formatCss=m,n.fixCodeWhiteSpace=_,n.downloadMD=v,n.createTable=x,n.checkImage=y,n.toBase64=n.setFontSize=n.setColor=n.setColorWithCustomTemplate=void 0;var r=o(t("bcaf")),i=o(t("325b")),a=o(t("4fc3")),c=o(t("d238"));function l(e){return function(n){var t=JSON.parse(JSON.stringify(e));return t.block.h1["border-bottom"]="2px solid ".concat(n),t.block.h2["background"]=n,t.block.h3["border-left"]="3px solid ".concat(n),t.block.h4["color"]=n,t.inline.strong["color"]=n,t}}var s=function(e,n){var t=JSON.parse(JSON.stringify(e));return t.block.h1["border-bottom"]="2px solid ".concat(n),t.block.h2["background"]=n,t.block.h3["border-left"]="3px solid ".concat(n),t.block.h4["color"]=n,t.inline.strong["color"]=n,t};function u(e){return function(n){var t=JSON.parse(JSON.stringify(e));return t.block.h1["font-size"]="".concat(1.14*n,"px"),t.block.h2["font-size"]="".concat(1.1*n,"px"),t.block.h3["font-size"]="".concat(n,"px"),t.block.h4["font-size"]="".concat(n,"px"),t}}n.setColorWithCustomTemplate=s;var d=l(r.default);n.setColor=d;var g=u(r.default);function f(e,n,t){var o=JSON.parse(JSON.stringify(t));return o.block.h1["border-bottom"]="2px solid ".concat(n),o.block.h2["background"]=n,o.block.h3["border-left"]="3px solid ".concat(n),o.block.h4["color"]=n,o.inline.strong["color"]=n,o.block.h1=Object.assign(o.block.h1,e.h1),o.block.h2=Object.assign(o.block.h2,e.h2),o.block.h3=Object.assign(o.block.h3,e.h3),o.block.h4=Object.assign(o.block.h4,e.h4),o.block.p=Object.assign(o.block.p,e.p),o.block.blockquote=Object.assign(o.block.blockquote,e.blockquote),o.block.blockquote_p=Object.assign(o.block.blockquote_p,e.blockquote_p),o.block.image=Object.assign(o.block.image,e.image),o.inline.strong=Object.assign(o.inline.strong,e.strong),o.inline.codespan=Object.assign(o.inline.codespan,e.codespan),o.inline.link=Object.assign(o.inline.link,e.link),o.inline.wx_link=Object.assign(o.inline.wx_link,e.wx_link),o}function p(e){var n,t;while(-1!==(n=e.indexOf("/*"))&&-1!==(t=e.indexOf("*/")))e=e.substring(0,n)+e.substring(t+2);var o={},r=function(){var n=e.indexOf("{"),t=e.indexOf("}");function r(e){var n={};return e.forEach((function(e){var t=e.indexOf(":"),o=e.substring(0,t).trim(),r=e.substring(t+1).trim();n[o]=r})),n}var i=e.substring(n+1,t).split(";").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));i=r(i);var a=e.substring(0,n).split(",").map((function(e){return e.trim()}));a.forEach((function(e){o[e]||(o[e]={}),Object.keys(i).forEach((function(n){o[e][n]=i[n]}))})),e=e.slice(t+1).trim()};while(e.length>0&&-1!==e.indexOf("{")&&-1!==e.indexOf("}"))r();return o}function b(e,n){var t=e.getValue(0);t?localStorage.setItem(n,t):localStorage.removeItem(n)}function h(e){var n=i.default.format(e,{parser:"markdown",plugins:[a.default]});return n}function m(e){var n=i.default.format(e,{parser:"css",plugins:[c.default]});return n}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pre",n=document.getElementsByClassName("code__pre");n.length>0&&n.forEach((function(n){n.style.whiteSpace=e}))}function v(e){var n=document.createElement("a");n.download="content.md",n.style.display="none";var t=new Blob([e]);n.href=URL.createObjectURL(t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function x(e){for(var n=e.data,t=e.rows,o=e.cols,r="",i=[],a=0;a<t+2;++a){r+="|\t",i=[];for(var c=0;c<o;++c){var l=a>1?a-1:a;1===a?i.push("---\t"):i.push(n["k_".concat(l,"_").concat(c)]||"")}r+=i.join("\t|\t"),r+="\t|\n"}return r}n.setFontSize=g;var k=function(e){return new Promise((function(n,t){var o=new FileReader;o.readAsDataURL(e),o.onload=function(){return n(o.result.split(",").pop())},o.onerror=function(e){return t(e)}}))};function y(e){var n=/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e.name);if(!n)return{ok:!1,msg:"请上传 JPG/PNG/GIF 格式的图片"};var t=5,o=e.size/1024/1024<=t;return o?{ok:!0}:{ok:!1,msg:"由于公众号限制，图片大小不能超过 ".concat(t,"M")}}n.toBase64=k}});