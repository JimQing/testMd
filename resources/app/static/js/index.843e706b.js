(function (e) {
  function o(o) {
    for (
      var n, a, c = o[0], l = o[1], s = o[2], d = 0, p = [];
      d < c.length;
      d++
    )
      (a = c[d]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]),
        (r[a] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    u && u(o);
    while (p.length) p.shift()();
    return i.push.apply(i, s || []), t();
  }
  function t() {
    for (var e, o = 0; o < i.length; o++) {
      for (var t = i[o], n = !0, a = 1; a < t.length; a++) {
        var l = t[a];
        0 !== r[l] && (n = !1);
      }
      n && (i.splice(o--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var n = {},
    r = { index: 0 },
    i = [];
  function a(e) {
    return (
      c.p +
      "static/js/" +
      ({ "pages-index-index": "pages-index-index" }[e] || e) +
      "." +
      { "pages-index-index": "86130dd6" }[e] +
      ".js"
    );
  }
  function c(o) {
    if (n[o]) return n[o].exports;
    var t = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.e = function (e) {
    var o = [],
      t = r[e];
    if (0 !== t)
      if (t) o.push(t[2]);
      else {
        var n = new Promise(function (o, n) {
          t = r[e] = [o, n];
        });
        o.push((t[2] = n));
        var i,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          c.nc && l.setAttribute("nonce", c.nc),
          (l.src = a(e));
        var s = new Error();
        i = function (o) {
          (l.onerror = l.onload = null), clearTimeout(d);
          var t = r[e];
          if (0 !== t) {
            if (t) {
              var n = o && ("load" === o.type ? "missing" : o.type),
                i = o && o.target && o.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = n),
                (s.request = i),
                t[1](s);
            }
            r[e] = void 0;
          }
        };
        var d = setTimeout(function () {
          i({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = i), document.head.appendChild(l);
      }
    return Promise.all(o);
  }),
    (c.m = e),
    (c.c = n),
    (c.d = function (e, o, t) {
      c.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: t });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, o) {
      if ((1 & o && (e = c(e)), 8 & o)) return e;
      if (4 & o && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & o && "string" != typeof e)
      )
        for (var n in e)
          c.d(
            t,
            n,
            function (o) {
              return e[o];
            }.bind(null, n)
          );
      return t;
    }),
    (c.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(o, "a", o), o;
    }),
    (c.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (c.p = "./"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = o), (l = l.slice());
  for (var d = 0; d < l.length; d++) o(l[d]);
  var u = s;
  i.push([0, "chunk-vendors"]), t();
})({
  0: function (e, o, t) {
    e.exports = t("56d7");
  },
  "07af": function (e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var n = {
      builtinFonts: [
        {
          label: "无衬线",
          value:
            "-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif",
        },
        {
          label: "衬线",
          value:
            "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        },
      ],
      sizeOption: [
        { label: "12px", value: "12px", desc: "更小" },
        { label: "13px", value: "13px", desc: "稍小" },
        { label: "14px", value: "14px", desc: "推荐" },
        { label: "15px", value: "15px", desc: "稍大" },
        { label: "16px", value: "16px", desc: "更大" },
      ],
      colorOption: [
        { label: "经典蓝", value: "rgba(15, 76, 129, 1)", desc: "最新流行" },
        { label: "翡翠绿", value: "rgba(0, 152, 116, 1)", desc: "优雅清新" },
        { label: "活力橘", value: "rgba(250, 81, 81, 1)", desc: "热情活泼" },
      ],
      codeThemeOption: [
        { label: "微信", value: "wechat", desc: "默认样式" },
        { label: "GitHub", value: "github", desc: "精简风格" },
      ],
      form: { rows: 1, cols: 1 },
    };
    o.default = n;
  },
  1616: function (e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var n =
        "/*\n  按Ctrl+F可格式化\n*/\n/* 一级标题样式 */\nh1 {\n}\n/* 二级标题样式 */\nh2 {\n}\n/* 三级标题样式 */\nh3 {\n}\n/* 四级标题样式 */\nh4 {\n}\n/* 图片样式 */\nimage {\n}\n/* 引用样式 */\nblockquote {\n}\n/* 引用段落样式 */\nblockquote_p {\n}\n/* 段落样式 */\np {\n}\n/* 行内代码样式 */\ncodespan {\n}\n/* 粗体样式 */\nstrong {\n}\n/* 链接样式 */\nlink {\n}\n/* 微信链接样式 */\nwx_link {\n}\n",
      r = n;
    o.default = r;
  },
  "23be": function (e, o, t) {
    "use strict";
    t.r(o);
    var n = t("3b4e"),
      r = t.n(n);
    for (var i in n)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          t.d(o, e, function () {
            return n[e];
          });
        })(i);
    o["default"] = r.a;
  },
  "394f": function (e, o, t) {
    var n = t("4bad");
    (o = n(!1)),
      o.push([
        e.i,
        "/* 每个页面公共css */\r\n/*\r\n\r\n    Name:       Base16 Default Light\r\n    Author:     Chris Kempson (http://chriskempson.com)\r\n\r\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\r\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\r\n\r\n*/.cm-s-style-mirror.CodeMirror{color:#444;font-size:16px;line-height:25px}.cm-s-style-mirror .CodeMirror-scroll{padding:20px;width:100%;box-sizing:border-box;overflow-x:hidden!important;overflow-y:scroll!important}.cm-s-style-mirror div.CodeMirror-selected{background:#e0e0e0}.cm-s-style-mirror .CodeMirror-line::selection,\r\n.cm-s-style-mirror .CodeMirror-line > span::selection,\r\n.cm-s-style-mirror .CodeMirror-line > span > span::selection{background:#e0e0e0}.cm-s-style-mirror .CodeMirror-line::-moz-selection,\r\n.cm-s-style-mirror .CodeMirror-line > span::-moz-selection,\r\n.cm-s-style-mirror .CodeMirror-line > span > span::-moz-selection{background:#e0e0e0}.cm-s-style-mirror .CodeMirror-gutters{background:#f5f5f5;border-right:0}.cm-s-style-mirror .CodeMirror-guttermarker{color:#ac4142}.cm-s-style-mirror .CodeMirror-guttermarker-subtle{color:#b0b0b0}.cm-s-style-mirror .CodeMirror-linenumber{color:#b0b0b0}.cm-s-style-mirror .CodeMirror-cursor{border-left:1px solid #505050}.cm-s-style-mirror span.cm-comment{color:green}.cm-s-style-mirror span.cm-atom{color:#aa759f}.cm-s-style-mirror span.cm-number{color:#aa759f}.cm-s-style-mirror span.cm-property,\r\n.cm-s-style-mirror span.cm-attribute{color:#90a959}.cm-s-style-mirror span.cm-keyword{color:#023a52}.cm-s-style-mirror span.cm-string{color:#e46918}.cm-s-style-mirror span.cm-variable{color:#90a959}.cm-s-style-mirror span.cm-variable-2{color:#00695f}.cm-s-style-mirror span.cm-variable-3{color:#2e6e8a}.cm-s-style-mirror span.cm-def{color:#d28445}.cm-s-style-mirror span.cm-bracket{color:#202020}.cm-s-style-mirror span.cm-tag{color:#000}.cm-s-style-mirror span.cm-link{color:#b26a00}.cm-s-style-mirror span.cm-error{\r\n  /* background: #ac4142;\r\n    color: #f5f5f5; */text-decoration:underline;-webkit-text-decoration-style:wavy;text-decoration-style:wavy;-webkit-text-decoration-color:#df8d8e;text-decoration-color:#df8d8e}.cm-s-style-mirror .CodeMirror-activeline-background{background:#dddcdc}.cm-s-style-mirror .CodeMirror-matchingbracket{color:#202020!important;background-color:rgba(0,0,0,.1)!important}\r\n/*! Color themes for Google Code Prettify | MIT License | github.com/jmblog/color-themes-for-google-code-prettify */.prettyprint{font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#333}ol.linenums{margin-top:0;margin-bottom:0;color:#ccc}li.L0,\r\nli.L1,\r\nli.L2,\r\nli.L3,\r\nli.L4,\r\nli.L5,\r\nli.L6,\r\nli.L7,\r\nli.L8,\r\nli.L9{padding-left:1em;background-color:#fff;list-style-type:decimal}@media screen{.str{color:#183691}.kwd{color:#a71d5d}.com{color:#969896}.typ{color:#0086b3}.lit{color:#0086b3}.pun{color:#333}.opn{color:#333}.clo{color:#333}.tag{color:navy}.atn{color:#795da3}.atv{color:#183691}.dec{color:#333}.var{color:teal}.fun{color:#900}}.container_night{background-color:#333}.container_night .el-main{background-color:#333}.container_night .CodeMirror{caret-color:grey;color:grey;background-color:#1e1e1e;box-shadow:inset 0 0 0 1px rgba(100,37,37,.102)}.container_night .output_night .preview{background-color:#1e1e1e;box-shadow:0 0 70px rgba(0,0,0,.3)}.container_night .output_night .preview-wrapper{background-color:#1e1e1e;box-shadow:inset 0 0 0 1px hsla(0,4.3%,91%,.102)}.container_night .output_night .code-snippet__fix{background-color:#eee}.container_night .cm-s-style-mirror .CodeMirror-matchingbracket{color:#f0f0f0!important;background:#1e1e1e!important}.container_night .cm-s-xq-light span.cm-variable-2,\r\n.container_night .cm-s-style-mirror span.cm-tag{color:grey}.container_night .cm-s-xq-light .CodeMirror-activeline-background{background-color:initial}.container_night .cm-s-xq-light span.cm-string{color:#8e9eb9}.container_night .cm-s-xq-light span.cm-link{color:#84868b}.container_night .editor__header{background-color:#3c3c3c}.container_night .el-button{color:#f0f0f0;background-color:#1e1e1e;border:1px solid transparent}.container_night .el-button.is-plain:focus,\r\n.container_night .el-button.is-plain:hover{background:#1e1e1e;color:#f0f0f0;border:1px solid #f0f0f0}.container_night .el-button.is-plain:focus i,\r\n.container_night .el-button.is-plain:hover i{color:#f0f0f0}.container_night .insert__dialog .el-dialog,\r\n.container_night .about__dialog .el-dialog,\r\n.container_night .reset__dialog .el-dialog,\r\n.container_night .upload__dialog .el-dialog{background-color:#333}.container_night .insert__dialog .el-dialog__body,\r\n.container_night .about__dialog .el-dialog__body,\r\n.container_night .reset__dialog .el-dialog__body,\r\n.container_night .upload__dialog .el-dialog__body{color:#f0f0f0}.container_night .insert__dialog .el-dialog__title,\r\n.container_night .about__dialog .el-dialog__title,\r\n.container_night .reset__dialog .el-dialog__title,\r\n.container_night .upload__dialog .el-dialog__title,\r\n.container_night .insert__dialog .el-form-item__label,\r\n.container_night .about__dialog .el-form-item__label,\r\n.container_night .reset__dialog .el-form-item__label,\r\n.container_night .upload__dialog .el-form-item__label{color:#f0f0f0}.container_night .insert__dialog .el-tabs__item,\r\n.container_night .about__dialog .el-tabs__item,\r\n.container_night .reset__dialog .el-tabs__item,\r\n.container_night .upload__dialog .el-tabs__item{color:grey}.container_night .insert__dialog .el-tabs__nav-wrap::after,\r\n.container_night .about__dialog .el-tabs__nav-wrap::after,\r\n.container_night .reset__dialog .el-tabs__nav-wrap::after,\r\n.container_night .upload__dialog .el-tabs__nav-wrap::after{background-color:#84868b}.container_night .insert__dialog .is-active,\r\n.container_night .about__dialog .is-active,\r\n.container_night .reset__dialog .is-active,\r\n.container_night .upload__dialog .is-active{color:#f0f0f0}.container_night .insert__dialog .el-upload-dragger,\r\n.container_night .about__dialog .el-upload-dragger,\r\n.container_night .reset__dialog .el-upload-dragger,\r\n.container_night .upload__dialog .el-upload-dragger{background-color:#1e1e1e}.container_night  .el-icon-upload,\r\n.container_night .el-icon-download,\r\n.container_night .el-icon-refresh,\r\n.container_night .el-icon-s-grid{color:#f0f0f0}.container_night ::-webkit-scrollbar{background-color:#1e1e1e}.CodeMirror{padding-bottom:0;height:100%!important;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);font-size:14px;font-family:PingFang SC,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif!important}.CodeMirror-vscrollbar:focus{outline:none}.CodeMirror-scroll{padding:20px;padding-bottom:0;overflow-x:hidden!important;overflow-y:scroll!important}.CodeMirror-vscrollbar{width:0;height:0}.codeMirror-wrapper{height:100%!important}\r\n/*wechat code block*/.rich_media_content .code-snippet *,\r\n.rich_media_content .code-snippet__wechat *{max-width:1000%!important}.code-snippet__wechat{word-wrap:break-word!important;font-size:14px;margin:10px 8px;color:#333;position:relative;background-color:rgba(27,31,35,.05);border:1px solid #f0f0f0;border-radius:2px;display:-webkit-box;display:-webkit-flex;display:flex;line-height:24px}.code-snippet__wechat .code-snippet__line-index{counter-reset:line;-webkit-flex-shrink:0;flex-shrink:0;height:100%;padding:1em;list-style-type:none}.code-snippet__wechat .code-snippet__line-index li{list-style-type:none;text-align:right}.code-snippet__wechat .code-snippet__line-index li::before{min-width:1.5em;text-align:right;left:-2.5em;counter-increment:line;content:counter(line);display:inline;color:rgba(0,0,0,.15)}.code-snippet__wechat pre{overflow-x:auto;padding:1em 1em 1em 1em;white-space:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-overflow-scrolling:touch}.code-snippet__wechat code{text-align:left;font-size:14px;white-space:pre;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.code-snippet__wechat ul li{list-style:none}\r\n/*github code block*/.code-snippet__github{display:-webkit-box;display:-webkit-flex;display:flex;font-size:12px;margin:10px 8px;position:relative;height:auto;background-color:#f7f7f7}.code-snippet__github .code-snippet__line-index{display:none}.code-snippet__github .code__pre{display:grid;position:relative;counter-reset:line;overflow-x:auto;padding:1em;white-space:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:20px;font-family:Operator Mono,Consolas,Monaco,Menlo,monospace;-webkit-overflow-scrolling:touch}.code-snippet__github pre{display:inline-block;font-size:12px}.code-snippet__github code{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;padding-right:8px;text-align:left;white-space:pre;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.code-snippet__github code::before{display:none}.code-snippet__github ul li{list-style:none}::-webkit-scrollbar{width:6px;height:6px;background-color:#fff}::-webkit-scrollbar-track{border-radius:6px;background-color:hsla(0,0%,78.4%,.3)}::-webkit-scrollbar-thumb{border-radius:6px;background-color:rgba(144,146,152,.5);-webkit-transition:background-color .3s;transition:background-color .3s}::-webkit-scrollbar-thumb:hover{background-color:rgba(144,146,152,.5)}\r\n/* CSS-hints */.CodeMirror-hints{position:absolute;z-index:10;overflow:hidden;list-style:none;margin:0;padding:2px;border-radius:4px;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);min-width:200px;font-size:12px;font-family:monospace;max-height:20em;overflow-y:auto;color:#333}.CodeMirror-hint{margin:0;margin-top:10px;padding:4px 6px;border-radius:2px;white-space:pre;color:#000;cursor:pointer}.CodeMirror-hint:first-of-type{margin-top:0}.CodeMirror-hint:hover{background:#f0f0f0}",
        "",
      ]),
      (e.exports = o);
  },
  "3b4e": function (e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var n = {
      onLaunch: function () {
        console.log("App Launch");
      },
      onShow: function () {
        console.log("App Show");
      },
      onHide: function () {
        console.log("App Hide");
      },
    };
    o.default = n;
  },
  "3bec": function (e, o, t) {
    "use strict";
    var n = t("4ea4"),
      r = n(t("e143")),
      i = t("5c96");
    r.default.use(i.Container),
      r.default.use(i.Header),
      r.default.use(i.Upload),
      r.default.use(i.Tooltip),
      r.default.use(i.Form),
      r.default.use(i.FormItem),
      r.default.use(i.Select),
      r.default.use(i.Option),
      r.default.use(i.ColorPicker),
      r.default.use(i.Switch),
      r.default.use(i.Button),
      r.default.use(i.Main),
      r.default.use(i.Col),
      r.default.use(i.Row),
      r.default.use(i.Dialog),
      r.default.use(i.Loading),
      r.default.component(i.Message.name, i.Message),
      (r.default.prototype.$loading = i.Loading.service),
      (r.default.prototype.$message = i.Message);
  },
  "3dfd": function (e, o, t) {
    "use strict";
    t.r(o);
    var n = t("6806"),
      r = t("23be");
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          t.d(o, e, function () {
            return r[e];
          });
        })(i);
    t("7c55");
    var a,
      c = t("f0c5"),
      l = Object(c["a"])(
        r["default"],
        n["b"],
        n["c"],
        !1,
        null,
        null,
        null,
        !1,
        n["a"],
        a
      );
    o["default"] = l.exports;
  },
  4360: function (e, o, t) {
    "use strict";
    var n = t("4ea4");
    t("ac1f"),
      t("5319"),
      Object.defineProperty(o, "__esModule", { value: !0 }),
      (o.default = void 0);
    var r = n(t("e143")),
      i = n(t("2f62")),
      a = n(t("07af")),
      c = n(t("b8b4")),
      l = n(t("0e54")),
      s = n(t("56b3")),
      d = n(t("47da")),
      u = n(t("1616")),
      p = t("dea5");
    r.default.use(i.default);
    var g = {
        wxRenderer: null,
        output: "",
        html: "",
        editor: null,
        cssEditor: null,
        currentFont: "",
        currentSize: "",
        currentColor: "",
        citeStatus: 0,
        nightMode: !1,
        codeTheme: "github",
        rightClickMenuVisible: !1,
      },
      f = {
        setEditorValue: function (e, o) {
          e.editor.setValue(o);
        },
        setCssEditorValue: function (e, o) {
          e.cssEditor.setValue(o);
        },
        setWxRendererOptions: function (e, o) {
          e.wxRenderer.setOptions(o);
        },
        setCiteStatus: function (e, o) {
          (e.citeStatus = o), localStorage.setItem("citeStatus", o);
        },
        setCurrentFont: function (e, o) {
          (e.currentFont = o), localStorage.setItem("fonts", o);
        },
        setCurrentSize: function (e, o) {
          (e.currentSize = o), localStorage.setItem("size", o);
        },
        setCurrentColor: function (e, o) {
          (e.currentColor = o), localStorage.setItem("color", o);
        },
        setCurrentCodeTheme: function (e, o) {
          (e.codeTheme = o), localStorage.setItem("codeTheme", o);
        },
        setRightClickMenuVisible: function (e, o) {
          e.rightClickMenuVisible = o;
        },
        themeChanged: function (e) {
          (e.nightMode = !e.nightMode),
            localStorage.setItem("nightMode", e.nightMode);
        },
        initEditorState: function (e) {
          (e.currentFont =
            localStorage.getItem("fonts") || a.default.builtinFonts[0].value),
            (e.currentColor =
              localStorage.getItem("color") || a.default.colorOption[0].value),
            (e.currentSize =
              localStorage.getItem("size") || a.default.sizeOption[2].value),
            (e.codeTheme =
              localStorage.getItem("codeTheme") ||
              a.default.codeThemeOption[0].value),
            (e.citeStatus = "true" === localStorage.getItem("citeStatus")),
            (e.nightMode = "true" === localStorage.getItem("nightMode")),
            (e.wxRenderer = new c.default({
              theme: (0, p.setColor)(e.currentColor),
              fonts: e.currentFont,
              size: e.currentSize,
              status: e.citeStatus,
            }));
        },
        initEditorEntity: function (e) {
          var o = document.getElementById("editor");
          o.value ||
            (o.value =
              localStorage.getItem("__editor_content") ||
              (0, p.formatDoc)(d.default)),
            (e.editor = s.default.fromTextArea(o, {
              mode: "text/x-markdown",
              theme: "xq-light",
              lineNumbers: !1,
              lineWrapping: !0,
              styleActiveLine: !0,
              autoCloseBrackets: !0,
              extraKeys: {
                "Ctrl-F": function (e) {
                  var o = (0, p.formatDoc)(e.getValue(0));
                  localStorage.setItem("__editor_content", o), e.setValue(o);
                },
                "Ctrl-S": function (e) {},
              },
            }));
        },
        initCssEditorEntity: function (e) {
          var o = document.getElementById("cssEditor");
          o.value ||
            (o.value = localStorage.getItem("__css_content") || u.default),
            (e.cssEditor = s.default.fromTextArea(o, {
              mode: "css",
              theme: "style-mirror",
              lineNumbers: !1,
              lineWrapping: !0,
              matchBrackets: !0,
              autofocus: !0,
              extraKeys: {
                "Ctrl-F": function (e) {
                  var o = (0, p.formatCss)(e.getValue(0));
                  localStorage.setItem("__css_content", o), e.setValue(o);
                },
                "Ctrl-S": function (e) {},
              },
            }));
        },
        editorRefresh: function (e) {
          var o = (0, l.default)(e.editor.getValue(0), {
            renderer: e.wxRenderer.getRenderer(e.citeStatus),
          });
          (o = o.replace(/(style=".*?)"/, '$1;margin-top: 0"')),
            e.citeStatus &&
              ((o += e.wxRenderer.buildFootnotes()),
              (o += e.wxRenderer.buildAddition())),
            (e.output = o);
        },
        clearEditorToDefault: function (e) {
          var o = (0, p.formatDoc)(d.default);
          e.editor.setValue(o), e.cssEditor.setValue(u.default);
        },
      },
      m = new i.default.Store({ state: g, mutations: f, actions: {} });
    o.default = m;
  },
  "47da": function (e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var n =
        '# 示例文章：Google 搜索的即时自动补全功能究竟是如何“工作”的？\n> Google 搜索**自动补全功能**的强大，相信不少朋友都能感受到，它帮助我们更快地“补全”我们所要输入的搜索关键字。那么，它怎么知道我们要输入什么内容？它又是如何工作的？在这篇文章里，我们一起来看看。\n\n## 使用自动补全\nGoogle 搜索的自动补全功能可以在 Google 搜索应用的大多数位置使用，包括 [Google](https://www.google.com/) 主页、适用于 IOS 和 Android 的 Google 应用，我们只需要在 Google 搜索框上开始键入关键字，就可以看到联想词了。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/juejin.gif)\n\n在上图示例中，我们可以看到，输入关键字 `juej`，Google 搜索会联想到“掘金”、“掘金小册”、“绝句”等等，好处就是，我们无须输入完整的关键字即可轻松完成针对这些 topics 的搜索。\n\n谷歌搜索的自动补全功能对于使用移动设备的用户来说特别有用，用户可以轻松在难以键入的小屏幕上完成搜索。当然，对于移动设备用户和台式机用户而言，这都节省了大量的时间。根据 Google 官方报告，自动补全功能可以减少大约 25% 的打字，累积起来，预计每天可以节省 200 多年的打字时间。是的，每天！\n\n> 注意，本文所提到的“**联想词**”与“**预测**”，是同一个意思。\n\n## 基于“预测”而非“建议”\nGoogle 官方将自动补全功能称之为“预测”，而不是“建议”，为什么呢？其实是有充分理由的。自动补全功能是为了**帮助用户完成他们打算进行的搜索**，而不是建议用户要执行什么搜索。\n\n那么，Google 是如何确定这些“预测”的？其实，Google 会根据趋势搜索 [trends](https://trends.google.com/trends/?geo=US) 给到我们这些“预测”。简单来说，哪个热门、哪个搜索频率高，就更可能推给我们。当然，这也与我们当前所处的位置以及我们的搜索历史相关。\n\n另外，这些“预测”也会随着我们键入的关键字的变更而更改。例如，当我们把键入的关键字从 `juej` 更改为 `juex` 时，与“掘金”相关的预测会“消失”，同时，与“觉醒”、“决心”相关联的词会出现。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/juex.gif)\n\n## 为什么看不到某些联想词？\n如果我们在输入某个关键字时看不到联想词，那么表明 Google 的算法可能检测到：\n\n- 这个关键字不是热门字词；\n- 搜索的字词太新了，我们可能需要等待几天或几周才能看到联想词；\n- 这是一个侮辱性或敏感字词，这个搜索字词违反了 Google 的相关政策。更加详细的情况，可以了解 [Google 搜索自动补全政策](https://support.google.com/websearch/answer/7368877)。\n\n## 为什么会看到某些不当的联想词？\nGoogle 拥有专门设计的系统，可以自动捕获不适当的预测结果而不显示出来。然而，Google 每天需要处理数十亿次搜索，这意味着 Google 每天会显示数十亿甚至上百亿条预测。再好的系统，也可能存在缺陷，不正确的预测也可能随时会出现。\n\n我们作为 Google 搜索的用户，如果认定某条预测违反了相关的搜索自动补全政策，可以进行举报反馈，点击右下角“**举报不当的联想查询**”并勾选相关选项即可。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/report.gif)\n\n## 如何实现自动补全算法？\n目前，Google 官方似乎并没有公开搜索自动补全的算法实现，但是业界在这方面已经有了不少研究。\n\n一个好的自动补全器必须是快速的，并且在用户键入下一个字符后立即更新联想词列表。**自动补全器的核心是一个函数，它接受输入的前缀，并搜索以给定前缀开头的词汇或语句列表**。通常来说，只需要返回少量的数目即可。\n\n接下来，我们先从一个简单且低效的实现开始，并在此基础上逐步构建更高效的方法。\n\n### 词汇表实现\n一个**简单粗暴的实现方式**是：顺序查找词汇表，依次检查每个词汇，看它是否以给定的前缀开头。\n\n但是，此方法需要将前缀与每个词汇进行匹配检查，若词汇量较少，这种方式可能勉强行得通。但是，如果词汇量规模较大，效率就太低了。\n\n一个**更好的实现方式是**：让词汇按字典顺序排序。借助二分搜索算法，可以快速搜索有序词汇表中的前缀。由于二分搜索的每一步都会将搜索的范围减半，因此，总的搜索时间与词汇表中单词数量的对数成正比，即时间复杂度是 `O(log N)`。二分搜索的性能很好，但有没有更好的实现呢？当然有，往下看。\n\n### 前缀树实现\n通常来说，许多词汇都以相同的前缀开头，比如 `need`、`nested` 都以 `ne` 开头，`seed`、`speed` 都以 `s` 开头。要是为每个单词分别存储公共前缀似乎很浪费。\n\n![](https://gitee.com/yanglbme/resource/raw/master/doocs-md/pretree.png)\n\n前缀树是一种利用公共前缀来加速补全速度的数据结构。前缀树在节点树中排列一组单词，单词沿着从根节点到叶子节点的路径存储，树的层次对应于前缀的字母位置。\n\n前缀的补全是顺着前缀定义的路径来查找的。例如，在上图的前缀树中，前缀 `ne` 对应于从子节点取左边缘 `N` 和唯一边缘 `E` 的路径。然后可以通过继续遍历从 `E` 节点可以达到的所有叶节点来生成补全列表。在图中，`ne` 的补全可以是两个分支：`-ed` 和 `-sted`。如果在数中找不到由前缀定义的路径，则说明词汇表中不包含以该前缀开头的单词。\n\n### 有限状态自动机(DFA)实现\n前缀树可以有效处理公共前缀，但是，对于其他共享词部分，仍会分别存储在每个分支中。比如，后缀 `ed`、`ing`、`tion` 在英文单词中特别常见。在上一个例子中，`e`、`d` 分别存放在了每一个分支上。\n\n有没有一种方法可以更加节省存储空间呢？有的，那就是 DFA。\n\n<center>\n<img src="https://gitee.com/yanglbme/resource/raw/master/doocs-md/dfa.gif" style="width: 50%;"></center>\n\n在上面的例子中，单词 `need`、`nested`、`seed` 和 `speed` 仅由 9 个节点组成，而上一张图中的前缀树包含了 17 个节点。\n\n可以看出，最小化前缀树 DFA 可以在很大程度上减少数据结构的大小。即使词汇量很大，最小化 DFA 通常也适合在内存中存储，避免昂贵的磁盘访问是实现快速自动补全的关键。\n\n### 一些扩展\n上面介绍了如何利用合理的数据结构实现基本的自动补全功能。这些数据结构可以通过多种方式进行扩展，从而改善用户体验。\n\n通常，满足特定前缀的词汇可能很多，而用户界面上能够显示的却不多，我们更希望能显示最常搜索或者最有价值的词汇。这通常可以通过为词汇表中的每个单词增加一个代表单词值的**权重** `weight`，并且按照权重高低来排序自动补全列表。\n\n- 对于排序后的词汇表来说，在词汇表每个元素上增加 `weight` 属性并不难；\n- 对于前缀树来说，将 `weight` 存储在叶子节点中，也是很简单的一个实现；\n- 对于 `DFA` 来说，则较为复杂。因为一个叶子节点可以通过多条路径到达。一种解决方案是将权重关联到路径而不是叶子节点。\n\n目前有不少开源库都提供了这个功能，比如主流的搜索引擎框架 [Elasticsearch](https://www.elastic.co/products/elasticsearch)、[Solr](https://lucene.apache.org/solr/) 等，基于此，我们可以实现高效而强大的自动补全功能。\n\n#### 推荐阅读\n- [阿里又一个 20k+ stars 开源项目诞生，恭喜 fastjson！](https://mp.weixin.qq.com/s/RNKDCK2KoyeuMeEs6GUrow)\n- [刷掉 90% 候选人的互联网大厂海量数据面试题（附题解 + 方法总结）](https://mp.weixin.qq.com/s/rjGqxUvrEqJNlo09GrT1Dw)\n- [好用！期待已久的文本块功能究竟如何在 Java 13 中发挥作用？](https://mp.weixin.qq.com/s/kalGv5T8AZGxTnLHr2wDsA)\n- [2019 GitHub 开源贡献排行榜新鲜出炉！微软谷歌领头，阿里跻身前 12！](https://mp.weixin.qq.com/s/_q812aGD1b9QvZ2WFI0Qgw)\n\n---\n\n欢迎关注我的公众号“**Doocs开源社区**”，原创技术文章第一时间推送。\n\n<center>\n    <img src="https://gitee.com/yanglbme/resource/raw/master/doocs-md/qrcode.png" style="width: 100px;">\n</center>\n\n',
      r = n;
    o.default = r;
  },
  5466: function (e, o, t) {
    var n = t("394f");
    "string" === typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    var r = t("4f06").default;
    r("57700a78", n, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "56d7": function (e, o, t) {
    "use strict";
    var n = t("4ea4"),
      r = n(t("5530"));
    t("e260"), t("e6cf"), t("cca6"), t("a79d"), t("6cdc"), t("1c31");
    var i = n(t("e143")),
      a = n(t("3dfd")),
      c = n(t("4360")),
      l = n(t("5c96"));
    t("0fae"),
      t("3bec"),
      t("a7be"),
      t("8d7e"),
      t("7b00"),
      t("959b"),
      t("10b2"),
      t("8c33"),
      t("31c5"),
      t("9b74"),
      t("111b"),
      i.default.use(l.default),
      (i.default.config.productionTip = !1),
      (a.default.mpType = "app");
    var s = new i.default((0, r.default)({ store: c.default }, a.default));
    s.$mount();
  },
  6806: function (e, o, t) {
    "use strict";
    var n;
    t.d(o, "b", function () {
      return r;
    }),
      t.d(o, "c", function () {
        return i;
      }),
      t.d(o, "a", function () {
        return n;
      });
    var r = function () {
        var e = this,
          o = e.$createElement,
          t = e._self._c || o;
        return t("App", { attrs: { keepAliveInclude: e.keepAliveInclude } });
      },
      i = [];
  },
  "6cdc": function (e, o, t) {
    "use strict";
    (function (e) {
      var o = t("4ea4"),
        n = o(t("e143"));
      (e["________"] = !0),
        delete e["________"],
        (e.__uniConfig = {
          globalStyle: {
            navigationStyle: "custom",
            navigationBarTextStyle: "black",
            navigationBarTitleText: "uni-app",
            navigationBarBackgroundColor: "#F8F8F8",
            backgroundColor: "#F8F8F8",
          },
        }),
        (e.__uniConfig.compilerVersion = "3.0.7"),
        (e.__uniConfig.router = { mode: "hash", base: "/" }),
        (e.__uniConfig.publicPath = "./"),
        (e.__uniConfig["async"] = {
          loading: "AsyncLoading",
          error: "AsyncError",
          delay: 200,
          timeout: 6e4,
        }),
        (e.__uniConfig.debug = !1),
        (e.__uniConfig.networkTimeout = {
          request: 6e4,
          connectSocket: 6e4,
          uploadFile: 6e4,
          downloadFile: 6e4,
        }),
        (e.__uniConfig.sdkConfigs = {}),
        (e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2"),
        (e.__uniConfig.nvue = { "flex-direction": "column" }),
        (e.__uniConfig.__webpack_chunk_load__ = t.e),
        n.default.component("pages-index-index", function (e) {
          var o = {
            component: t
              .e("pages-index-index")
              .then(
                function () {
                  return e(t("f75a"));
                }.bind(null, t)
              )
              .catch(t.oe),
            delay: __uniConfig["async"].delay,
            timeout: __uniConfig["async"].timeout,
          };
          return (
            __uniConfig["async"]["loading"] &&
              (o.loading = {
                name: "SystemAsyncLoading",
                render: function (e) {
                  return e(__uniConfig["async"]["loading"]);
                },
              }),
            __uniConfig["async"]["error"] &&
              (o.error = {
                name: "SystemAsyncError",
                render: function (e) {
                  return e(__uniConfig["async"]["error"]);
                },
              }),
            o
          );
        }),
        (e.__uniRoutes = [
          {
            path: "/",
            alias: "/pages/index/index",
            component: {
              render: function (e) {
                return e(
                  "Page",
                  {
                    props: Object.assign(
                      { isQuit: !0, isEntry: !0 },
                      __uniConfig.globalStyle,
                      { navigationBarTitleText: "" }
                    ),
                  },
                  [e("pages-index-index", { slot: "page" })]
                );
              },
            },
            meta: {
              id: 1,
              name: "pages-index-index",
              isNVue: !1,
              maxWidth: 0,
              pagePath: "pages/index/index",
              isQuit: !0,
              isEntry: !0,
              windowTop: 0,
            },
          },
          {
            path: "/preview-image",
            component: {
              render: function (e) {
                return e("Page", { props: { navigationStyle: "custom" } }, [
                  e("system-preview-image", { slot: "page" }),
                ]);
              },
            },
            meta: { name: "preview-image", pagePath: "/preview-image" },
          },
          {
            path: "/choose-location",
            component: {
              render: function (e) {
                return e("Page", { props: { navigationStyle: "custom" } }, [
                  e("system-choose-location", { slot: "page" }),
                ]);
              },
            },
            meta: { name: "choose-location", pagePath: "/choose-location" },
          },
          {
            path: "/open-location",
            component: {
              render: function (e) {
                return e("Page", { props: { navigationStyle: "custom" } }, [
                  e("system-open-location", { slot: "page" }),
                ]);
              },
            },
            meta: { name: "open-location", pagePath: "/open-location" },
          },
        ]),
        e.UniApp && new e.UniApp();
    }.call(this, t("c8ba")));
  },
  "7c55": function (e, o, t) {
    "use strict";
    var n = t("5466"),
      r = t.n(n);
    r.a;
  },
  b8b4: function (e, o, t) {
    "use strict";
    var n = t("4ea4");
    t("99af"),
      t("c975"),
      t("a15b"),
      t("d81d"),
      t("ac1f"),
      t("5319"),
      t("1276"),
      t("2ca0"),
      Object.defineProperty(o, "__esModule", { value: !0 }),
      (o.default = void 0);
    var r = n(t("d4ec")),
      i = n(t("0e54")),
      a = function e(o) {
        var t = this;
        (0, r.default)(this, e), (this.opts = o);
        var n = !0,
          a = [],
          c = 0,
          l = null,
          s = "Menlo, Operator Mono, Consolas, Monaco, monospace",
          d = function (e, o) {
            return Object.assign({}, e, o);
          };
        this.buildTheme = function (e) {
          var o = {},
            n = d(e.BASE, {
              "font-family": t.opts.fonts,
              "font-size": t.opts.size,
            }),
            r = d(n, {});
          for (var i in e.inline)
            if (e.inline.hasOwnProperty(i)) {
              var a = e.inline[i];
              o[i] = d(n, a);
            }
          for (var c in e.block)
            if (e.block.hasOwnProperty(c)) {
              var l = e.block[c];
              "code" === c && (l["font-family"] = s), (o[c] = d(r, l));
            }
          return o;
        };
        var u = function (e, o) {
            var t = [],
              n = l[e];
            if (!n) return "";
            for (var r in n) t.push(r + ":" + n[r]);
            return 'style="'.concat(t.join(";") + (o || ""), '"');
          },
          p = function (e, o) {
            return a.push([++c, e, o]), c;
          };
        (this.buildFootnotes = function () {
          var e = a.map(function (e) {
            return e[1] === e[2]
              ? '<code style="font-size: 90%; opacity: 0.6;">['
                  .concat(e[0], "]</code>: <i>")
                  .concat(e[1], "</i><br/>")
              : '<code style="font-size: 90%; opacity: 0.6;">['
                  .concat(e[0], "]</code> ")
                  .concat(e[1], ": <i>")
                  .concat(e[2], "</i><br/>");
          });
          return "<h4 "
            .concat(u("h4"), ">引用链接</h4><p ")
            .concat(u("footnotes"), ">")
            .concat(e.join("\n"), "</p>");
        }),
          (this.buildAddition = function () {
            return "\n            <style>\n            .preview-wrapper pre::before {\n                position: absolute;\n                top: 0;\n                right: 0;\n                color: #ccc;\n                text-align: center;\n                font-size: 0.8em;\n                padding: 5px 10px 0;\n                line-height: 15px;\n                height: 15px;\n                font-weight: 600;\n            }\n            </style>\n        ";
          }),
          (this.setOptions = function (e) {
            t.opts = d(t.opts, e);
          }),
          (this.hasFootnotes = function () {
            return 0 !== a.length;
          }),
          (this.getRenderer = function (e) {
            (a = []), (c = 0), (l = t.buildTheme(t.opts.theme));
            var o = new i.default.Renderer();
            return (
              (o.heading = function (e, o) {
                switch (o) {
                  case 1:
                    return "<h1 ".concat(u("h1"), ">").concat(e, "</h1>");
                  case 2:
                    return "<h2 ".concat(u("h2"), ">").concat(e, "</h2>");
                  case 3:
                    return "<h3 ".concat(u("h3"), ">").concat(e, "</h3>");
                  default:
                    return "<h4 ".concat(u("h4"), ">").concat(e, "</h4>");
                }
              }),
              (o.paragraph = function (e) {
                return -1 != e.indexOf("<figure") && -1 != e.indexOf("<img")
                  ? e
                  : "" === e.replace(/ /g, "")
                  ? ""
                  : "<p ".concat(u("p"), ">").concat(e, "</p>");
              }),
              (o.blockquote = function (e) {
                return (
                  (e = e.replace(
                    /<p.*?>/g,
                    "<p ".concat(u("blockquote_p"), ">")
                  )),
                  "<blockquote "
                    .concat(u("blockquote"), ">")
                    .concat(e, "</blockquote>")
                );
              }),
              (o.code = function (e, o) {
                e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                var t = e.split("\n").map(function (e) {
                    return '<code class="prettyprint"><span class="code-snippet_outer">'.concat(
                      e || "<br>",
                      "</span></code>"
                    );
                  }),
                  n = "github";
                return '\n                <section class="code-snippet__'
                  .concat(
                    n,
                    '">\n                    <pre class="code__pre" data-lang="'
                  )
                  .concat(o, '">\n                        ')
                  .concat(
                    t.join(""),
                    "\n                    </pre>\n                </section>\n            "
                  );
              }),
              (o.codespan = function (e, o) {
                return "<code ".concat(u("codespan"), ">").concat(e, "</code>");
              }),
              (o.listitem = function (e) {
                return "<span "
                  .concat(
                    u("listitem"),
                    '><span style="margin-right: 10px;"><%s/></span>'
                  )
                  .concat(e, "</span>");
              }),
              (o.list = function (e, o, t) {
                e = e.replace(/<\/*p.*?>/g, "");
                var n = e.split("<%s/>");
                if (!o)
                  return (
                    (e = n.join("•")),
                    "<p ".concat(u("ul"), ">").concat(e, "</p>")
                  );
                e = n[0];
                for (var r = 1; r < n.length; r++) e = e + r + "." + n[r];
                return "<p ".concat(u("ol"), ">").concat(e, "</p>");
              }),
              (o.image = function (e, o, t) {
                var r = "";
                t &&
                  (r = "<figcaption "
                    .concat(u("figcaption"), ">")
                    .concat(t, "</figcaption>"));
                var i = u("figure"),
                  a = u(n ? "image" : "image_org");
                return "<figure "
                  .concat(i, "><img ")
                  .concat(a, ' src="')
                  .concat(e, '" title="')
                  .concat(o, '" alt="')
                  .concat(t, '"/>')
                  .concat(r, "</figure>");
              }),
              (o.link = function (o, t, n) {
                if (o.startsWith("https://mp.weixin.qq.com"))
                  return '<a href="'
                    .concat(o, '" title="')
                    .concat(t || n, '" ')
                    .concat(u("wx_link"), ">")
                    .concat(n, "</a>");
                if (o === n || !e) return n;
                var r = p(t || n, o);
                return "<span "
                  .concat(u("link"), ">")
                  .concat(n, "<sup>[")
                  .concat(r, "]</sup></span>");
              }),
              (o.strong = function (e) {
                return "<strong "
                  .concat(u("strong"), ">")
                  .concat(e, "</strong>");
              }),
              (o.em = function (e) {
                return '<span style="font-style: italic;">'.concat(
                  e,
                  "</span>"
                );
              }),
              (o.table = function (e, o) {
                return '<section style="padding:0 8px;"><table class="preview-table"><thead '
                  .concat(u("thead"), ">")
                  .concat(e, "</thead><tbody>")
                  .concat(o, "</tbody></table></section>");
              }),
              (o.tablecell = function (e, o) {
                return "<td ".concat(u("td"), ">").concat(e, "</td>");
              }),
              (o.hr = function () {
                return '<hr style="border-style: solid;border-width: 1px 0 0;border-color: rgba(0,0,0,0.1);-webkit-transform-origin: 0 0;-webkit-transform: scale(1, 0.5);transform-origin: 0 0;transform: scale(1, 0.5);">';
              }),
              o
            );
          });
      },
      c = a;
    o.default = c;
  },
  bcaf: function (e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var n = {
      BASE: { "text-align": "left", color: "#3f3f3f", "line-height": "1.75" },
      BASE_BLOCK: { margin: "1em 8px" },
      block: {
        h1: {
          "font-size": "1.2em",
          "text-align": "center",
          "font-weight": "bold",
          display: "table",
          margin: "2em auto 1em",
          padding: "0 1em",
          "border-bottom": "2px solid rgba(0, 152, 116, 0.9)",
        },
        h2: {
          "font-size": "1.2em",
          "text-align": "center",
          "font-weight": "bold",
          display: "table",
          margin: "4em auto 2em",
          padding: "0 0.2em",
          background: "rgba(0, 152, 116, 0.9)",
          color: "#fff",
        },
        h3: {
          "font-weight": "bold",
          "font-size": "1.1em",
          margin: "2em 8px 0.75em 0",
          "line-height": "1.2",
          "padding-left": "8px",
          "border-left": "3px solid rgba(0, 152, 116, 0.9)",
        },
        h4: {
          "font-weight": "bold",
          "font-size": "1em",
          margin: "2em 8px 0.5em",
          color: "rgba(66, 185, 131, 0.9)",
        },
        p: { margin: "1.5em 8px", "letter-spacing": "0.1em" },
        blockquote: {
          "font-style": "normal",
          "border-left": "none",
          padding: "1em",
          "border-radius": "8px",
          color: "rgba(0,0,0,0.5)",
          background: "#f7f7f7",
          margin: "2em 8px",
        },
        blockquote_p: {
          "letter-spacing": "0.1em",
          color: "rgb(80, 80, 80)",
          "font-size": "1em",
          display: "block",
        },
        code: {
          "font-size": "80%",
          overflow: "auto",
          color: "#333",
          "white-space": "pre",
          background: "rgb(247, 247, 247)",
          "border-radius": "2px",
          padding: "10px",
          "line-height": "1.5",
          border: "1px solid rgb(236,236,236)",
          margin: "20px 0",
        },
        image: {
          "border-radius": "4px",
          display: "block",
          margin: "0.1em auto 0.5em",
          width: "100% !important",
        },
        image_org: { "border-radius": "4px", display: "block" },
        ol: { "margin-left": "0", "padding-left": "1em" },
        ul: {
          "margin-left": "0",
          "padding-left": "1em",
          "list-style": "circle",
        },
        footnotes: { margin: "0.5em 8px", "font-size": "80%" },
        figure: { margin: "1.5em 8px" },
      },
      inline: {
        listitem: {
          "text-indent": "-1em",
          display: "block",
          margin: "0.2em 8px",
        },
        codespan: {
          "font-size": "90%",
          "white-space": "pre",
          color: "#d14",
          background: "rgba(27,31,35,.05)",
          padding: "3px 5px",
          "border-radius": "4px",
        },
        link: { color: "#576b95" },
        wx_link: { color: "#576b95", "text-decoration": "none" },
        strong: { color: "rgba(15, 76, 129, 0.9)", "font-weight": "bold" },
        table: {
          "border-collapse": "collapse",
          "text-align": "center",
          margin: "1em 8px",
        },
        thead: { background: "rgba(0, 0, 0, 0.05)", "font-weight": "bold" },
        td: { border: "1px solid #dfdfdf", padding: "0.25em 0.5em" },
        footnote: { "font-size": "12px" },
        figcaption: {
          "text-align": "center",
          color: "#888",
          "font-size": "0.8em",
        },
      },
    };
    o.default = n;
  },
  dea5: function (e, o, t) {
    "use strict";
    var n = t("4ea4");
    t("99af"),
      t("4de4"),
      t("4160"),
      t("c975"),
      t("a15b"),
      t("d81d"),
      t("fb6a"),
      t("b64b"),
      t("d3b7"),
      t("ac1f"),
      t("3ca3"),
      t("1276"),
      t("498a"),
      t("159b"),
      t("ddb0"),
      t("2b3d"),
      Object.defineProperty(o, "__esModule", { value: !0 }),
      (o.setColorWithTemplate = l),
      (o.setFontSizeWithTemplate = d),
      (o.customCssWithTemplate = g),
      (o.css2json = f),
      (o.saveEditorContent = m),
      (o.formatDoc = b),
      (o.formatCss = h),
      (o.fixCodeWhiteSpace = _),
      (o.downloadMD = x),
      (o.createTable = v),
      (o.checkImage = k),
      (o.toBase64 = o.setFontSize = o.setColor = o.setColorWithCustomTemplate = void 0);
    var r = n(t("bcaf")),
      i = n(t("325b")),
      a = n(t("4fc3")),
      c = n(t("d238"));
    function l(e) {
      return function (o) {
        var t = JSON.parse(JSON.stringify(e));
        return (
          (t.block.h1["border-bottom"] = "2px solid ".concat(o)),
          (t.block.h2["background"] = o),
          (t.block.h3["border-left"] = "3px solid ".concat(o)),
          (t.block.h4["color"] = o),
          (t.inline.strong["color"] = o),
          t
        );
      };
    }
    var s = function (e, o) {
      var t = JSON.parse(JSON.stringify(e));
      return (
        (t.block.h1["border-bottom"] = "2px solid ".concat(o)),
        (t.block.h2["background"] = o),
        (t.block.h3["border-left"] = "3px solid ".concat(o)),
        (t.block.h4["color"] = o),
        (t.inline.strong["color"] = o),
        t
      );
    };
    function d(e) {
      return function (o) {
        var t = JSON.parse(JSON.stringify(e));
        return (
          (t.block.h1["font-size"] = "".concat(1.14 * o, "px")),
          (t.block.h2["font-size"] = "".concat(1.1 * o, "px")),
          (t.block.h3["font-size"] = "".concat(o, "px")),
          (t.block.h4["font-size"] = "".concat(o, "px")),
          t
        );
      };
    }
    o.setColorWithCustomTemplate = s;
    var u = l(r.default);
    o.setColor = u;
    var p = d(r.default);
    function g(e, o, t) {
      var n = JSON.parse(JSON.stringify(t));
      return (
        (n.block.h1["border-bottom"] = "2px solid ".concat(o)),
        (n.block.h2["background"] = o),
        (n.block.h3["border-left"] = "3px solid ".concat(o)),
        (n.block.h4["color"] = o),
        (n.inline.strong["color"] = o),
        (n.block.h1 = Object.assign(n.block.h1, e.h1)),
        (n.block.h2 = Object.assign(n.block.h2, e.h2)),
        (n.block.h3 = Object.assign(n.block.h3, e.h3)),
        (n.block.h4 = Object.assign(n.block.h4, e.h4)),
        (n.block.p = Object.assign(n.block.p, e.p)),
        (n.block.blockquote = Object.assign(n.block.blockquote, e.blockquote)),
        (n.block.blockquote_p = Object.assign(
          n.block.blockquote_p,
          e.blockquote_p
        )),
        (n.block.image = Object.assign(n.block.image, e.image)),
        (n.inline.strong = Object.assign(n.inline.strong, e.strong)),
        (n.inline.codespan = Object.assign(n.inline.codespan, e.codespan)),
        (n.inline.link = Object.assign(n.inline.link, e.link)),
        (n.inline.wx_link = Object.assign(n.inline.wx_link, e.wx_link)),
        n
      );
    }
    function f(e) {
      var o, t;
      while (-1 !== (o = e.indexOf("/*")) && -1 !== (t = e.indexOf("*/")))
        e = e.substring(0, o) + e.substring(t + 2);
      var n = {},
        r = function () {
          var o = e.indexOf("{"),
            t = e.indexOf("}");
          function r(e) {
            var o = {};
            return (
              e.forEach(function (e) {
                var t = e.indexOf(":"),
                  n = e.substring(0, t).trim(),
                  r = e.substring(t + 1).trim();
                o[n] = r;
              }),
              o
            );
          }
          var i = e
            .substring(o + 1, t)
            .split(";")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e.length > 0;
            });
          i = r(i);
          var a = e
            .substring(0, o)
            .split(",")
            .map(function (e) {
              return e.trim();
            });
          a.forEach(function (e) {
            n[e] || (n[e] = {}),
              Object.keys(i).forEach(function (o) {
                n[e][o] = i[o];
              });
          }),
            (e = e.slice(t + 1).trim());
        };
      while (e.length > 0 && -1 !== e.indexOf("{") && -1 !== e.indexOf("}"))
        r();
      return n;
    }
    function m(e, o) {
      var t = e.getValue(0);
      t ? localStorage.setItem(o, t) : localStorage.removeItem(o);
    }
    function b(e) {
      var o = i.default.format(e, { parser: "markdown", plugins: [a.default] });
      return o;
    }
    function h(e) {
      var o = i.default.format(e, { parser: "css", plugins: [c.default] });
      return o;
    }
    function _() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "pre",
        o = document.getElementsByClassName("code__pre");
      o.length > 0 &&
        o.forEach(function (o) {
          o.style.whiteSpace = e;
        });
    }
    function x(e) {
      var o = document.createElement("a");
      (o.download = "content.md"), (o.style.display = "none");
      var t = new Blob([e]);
      (o.href = URL.createObjectURL(t)),
        document.body.appendChild(o),
        o.click(),
        document.body.removeChild(o);
    }
    function v(e) {
      for (
        var o = e.data, t = e.rows, n = e.cols, r = "", i = [], a = 0;
        a < t + 2;
        ++a
      ) {
        (r += "|\t"), (i = []);
        for (var c = 0; c < n; ++c) {
          var l = a > 1 ? a - 1 : a;
          1 === a
            ? i.push("---\t")
            : i.push(o["k_".concat(l, "_").concat(c)] || "");
        }
        (r += i.join("\t|\t")), (r += "\t|\n");
      }
      return r;
    }
    o.setFontSize = p;
    var y = function (e) {
      return new Promise(function (o, t) {
        var n = new FileReader();
        n.readAsDataURL(e),
          (n.onload = function () {
            return o(n.result.split(",").pop());
          }),
          (n.onerror = function (e) {
            return t(e);
          });
      });
    };
    function k(e) {
      var o = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e.name);
      if (!o) return { ok: !1, msg: "请上传 JPG/PNG/GIF 格式的图片" };
      var t = 5,
        n = e.size / 1024 / 1024 <= t;
      return n
        ? { ok: !0 }
        : { ok: !1, msg: "由于公众号限制，图片大小不能超过 ".concat(t, "M") };
    }
    o.toBase64 = y;
  },
});
