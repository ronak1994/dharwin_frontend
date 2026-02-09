(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/seo/seo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Seo = ({ title })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Seo.useEffect": ()=>{
            document.title = `Dharwin Business Solutions - ${title}`;
        }
    }["Seo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
_s(Seo, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Seo;
const __TURBOPACK__default__export__ = Seo;
var _c;
__turbopack_context__.k.register(_c, "Seo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TiptapEditor = ({ content = '', placeholder = 'Start typing...', onChange, editable = true, className = '' })=>{
    _s();
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        immediatelyRender: false,
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        1,
                        2,
                        3
                    ]
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-primary'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].configure({
                placeholder
            })
        ],
        content,
        editable,
        onUpdate: {
            "TiptapEditor.useEditor[editor]": ({ editor })=>{
                if (onChange) {
                    onChange(editor.getHTML());
                }
            }
        }["TiptapEditor.useEditor[editor]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TiptapEditor.useEffect": ()=>{
            if (editor && content !== editor.getHTML()) {
                editor.commands.setContent(content);
            }
        }
    }["TiptapEditor.useEffect"], [
        content,
        editor
    ]);
    if (!editor) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4012803d2c47f44f" + " " + `tiptap-editor ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4012803d2c47f44f" + " " + "tiptap-toolbar border-b dark:border-defaultborder/10 p-2 flex flex-wrap gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        disabled: !editor.can().chain().focus().toggleBold().run(),
                        title: "Bold",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('bold') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-bold"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        disabled: !editor.can().chain().focus().toggleItalic().run(),
                        title: "Italic",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('italic') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-italic"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                        title: "Underline",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('underline') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-underline"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleStrike().run(),
                        disabled: !editor.can().chain().focus().toggleStrike().run(),
                        title: "Strikethrough",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('strike') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-strikethrough"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4012803d2c47f44f" + " " + "border-l dark:border-defaultborder/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 1
                            }).run(),
                        title: "Heading 1",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('heading', {
                            level: 1
                        }) ? '!bg-primary !text-white' : ''}`,
                        children: "H1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        title: "Heading 2",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('heading', {
                            level: 2
                        }) ? '!bg-primary !text-white' : ''}`,
                        children: "H2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4012803d2c47f44f" + " " + "border-l dark:border-defaultborder/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                        title: "Bullet List",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('bulletList') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-list-unordered"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleOrderedList().run(),
                        title: "Numbered List",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('orderedList') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-list-ordered"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBlockquote().run(),
                        title: "Blockquote",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('blockquote') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-double-quotes-l"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4012803d2c47f44f" + " " + "border-l dark:border-defaultborder/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            const url = window.prompt('Enter URL:');
                            if (url) {
                                editor.chain().focus().setLink({
                                    href: url
                                }).run();
                            }
                        },
                        title: "Link",
                        className: "jsx-4012803d2c47f44f" + " " + `ti-btn ti-btn-sm ti-btn-light ${editor.isActive('link') ? '!bg-primary !text-white' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-links-line"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            const url = window.prompt('Enter image URL:');
                            if (url) {
                                editor.chain().focus().setImage({
                                    src: url
                                }).run();
                            }
                        },
                        title: "Image",
                        className: "jsx-4012803d2c47f44f" + " " + "ti-btn ti-btn-sm ti-btn-light",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-image-line"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4012803d2c47f44f" + " " + "border-l dark:border-defaultborder/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().undo().run(),
                        disabled: !editor.can().chain().focus().undo().run(),
                        title: "Undo",
                        className: "jsx-4012803d2c47f44f" + " " + "ti-btn ti-btn-sm ti-btn-light",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-arrow-go-back-line"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().redo().run(),
                        disabled: !editor.can().chain().focus().redo().run(),
                        title: "Redo",
                        className: "jsx-4012803d2c47f44f" + " " + "ti-btn ti-btn-sm ti-btn-light",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-4012803d2c47f44f" + " " + "ri-arrow-go-forward-line"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4012803d2c47f44f" + " " + "tiptap-content border dark:border-defaultborder/10 rounded-b-md p-4 min-h-[200px] prose dark:prose-invert max-w-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                    editor: editor
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4012803d2c47f44f",
                children: ".tiptap-editor .ProseMirror{outline:none;min-height:200px}.tiptap-editor .ProseMirror p{margin:.5rem 0}.tiptap-editor .ProseMirror p.is-editor-empty:first-child:before{content:attr(data-placeholder);float:left;color:#8c9097;pointer-events:none;height:0}.tiptap-editor .ProseMirror h1{margin:1rem 0;font-size:2rem;font-weight:700}.tiptap-editor .ProseMirror h2{margin:.75rem 0;font-size:1.5rem;font-weight:600}.tiptap-editor .ProseMirror ul,.tiptap-editor .ProseMirror ol{margin:.5rem 0;padding-left:1.5rem}.tiptap-editor .ProseMirror blockquote{border-left:3px solid #e5e7eb;margin:.5rem 0;padding-left:1rem;font-style:italic}.tiptap-editor .ProseMirror a{color:#3b82f6;text-decoration:underline}.tiptap-editor .ProseMirror img{max-width:100%;height:auto;margin:1rem 0}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TiptapEditor, "WZCukF8Lohz+YFud2L+u9c9a75g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = TiptapEditor;
const __TURBOPACK__default__export__ = TiptapEditor;
var _c;
__turbopack_context__.k.register(_c, "TiptapEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/seo/seo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$forms$2f$form$2d$editors$2f$tiptapeditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/data/forms/form-editors/tiptapeditor.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Desktop/dharwin_boilerplate/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/dharwin_boilerplate/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Select;
const CATEGORY_OPTIONS = [
    {
        value: 'cat-1',
        label: 'Technical Skills'
    },
    {
        value: 'cat-2',
        label: 'Leadership & Soft Skills'
    },
    {
        value: 'cat-3',
        label: 'Product & Design'
    }
];
const STUDENT_OPTIONS = [
    {
        value: 's1',
        label: 'Emma Wilson',
        avatar: '/assets/images/faces/1.jpg'
    },
    {
        value: 's2',
        label: 'James Brown',
        avatar: '/assets/images/faces/2.jpg'
    },
    {
        value: 's3',
        label: 'Olivia Davis',
        avatar: '/assets/images/faces/4.jpg'
    },
    {
        value: 's4',
        label: 'Liam Miller',
        avatar: '/assets/images/faces/5.jpg'
    },
    {
        value: 's5',
        label: 'Ava Garcia',
        avatar: '/assets/images/faces/6.jpg'
    },
    {
        value: 's6',
        label: 'Noah Martinez',
        avatar: '/assets/images/faces/7.jpg'
    },
    {
        value: 's7',
        label: 'Sophia Anderson',
        avatar: '/assets/images/faces/8.jpg'
    },
    {
        value: 's8',
        label: 'Ethan Thomas',
        avatar: '/assets/images/faces/9.jpg'
    },
    {
        value: 's9',
        label: 'Isabella Jackson',
        avatar: '/assets/images/faces/10.jpg'
    },
    {
        value: 's10',
        label: 'Mason White',
        avatar: '/assets/images/faces/11.jpg'
    }
];
const MENTOR_OPTIONS = [
    {
        value: 'm1',
        label: 'Alex',
        avatar: '/assets/images/faces/2.jpg'
    },
    {
        value: 'm2',
        label: 'Sam',
        avatar: '/assets/images/faces/8.jpg'
    },
    {
        value: 'm3',
        label: 'Jordan',
        avatar: '/assets/images/faces/12.jpg'
    },
    {
        value: 'm4',
        label: 'Casey',
        avatar: '/assets/images/faces/10.jpg'
    },
    {
        value: 'm5',
        label: 'Morgan',
        avatar: '/assets/images/faces/5.jpg'
    },
    {
        value: 'm6',
        label: 'Riley',
        avatar: '/assets/images/faces/9.jpg'
    },
    {
        value: 'm7',
        label: 'Quinn',
        avatar: '/assets/images/faces/11.jpg'
    },
    {
        value: 'm8',
        label: 'Taylor',
        avatar: '/assets/images/faces/3.jpg'
    },
    {
        value: 'm9',
        label: 'Jamie',
        avatar: '/assets/images/faces/13.jpg'
    },
    {
        value: 'm10',
        label: 'Drew',
        avatar: '/assets/images/faces/6.jpg'
    }
];
function CheckboxDropdown({ options, selectedIds, onChange, label, placeholder }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckboxDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "CheckboxDropdown.useEffect.handleClickOutside": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["CheckboxDropdown.useEffect.handleClickOutside"];
            if (open) {
                document.addEventListener('mousedown', handleClickOutside);
                return ({
                    "CheckboxDropdown.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
                })["CheckboxDropdown.useEffect"];
            }
        }
    }["CheckboxDropdown.useEffect"], [
        open
    ]);
    const toggle = (value)=>{
        if (selectedIds.includes(value)) {
            onChange(selectedIds.filter((id)=>id !== value));
        } else {
            onChange([
                ...selectedIds,
                value
            ]);
        }
    };
    const selected = options.filter((o)=>selectedIds.includes(o.value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label block mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(!open),
                className: "ti-form-control form-control flex items-center justify-between text-start w-full",
                "aria-expanded": open,
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: selectedIds.length === 0 ? 'text-[#8c9097] dark:text-white/50' : '',
                        children: selectedIds.length === 0 ? placeholder : `${selectedIds.length} selected`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `ri-arrow-down-s-line text-lg transition-transform ${open ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 mt-1 w-full rounded-md border border-defaultborder bg-bodybg shadow-lg max-h-60 overflow-auto",
                role: "listbox",
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-3 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer border-b border-defaultborder/50 last:border-b-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "form-check-input",
                                checked: selectedIds.includes(opt.value),
                                onChange: ()=>toggle(opt.value)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: opt.avatar,
                                alt: "",
                                className: "w-8 h-8 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[0.875rem]",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        ]
                    }, opt.value, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 p-3 rounded-md border border-defaultborder bg-black/5 dark:bg-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[0.75rem] font-semibold text-[#8c9097] dark:text-white/50 mb-2",
                        children: "Selected for this course"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: selected.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-[0.8125rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: person.avatar,
                                        alt: "",
                                        className: "w-5 h-5 rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    person.label
                                ]
                            }, person.value, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(CheckboxDropdown, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c1 = CheckboxDropdown;
const CreateModule = ()=>{
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('info');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        categoryId: '',
        name: '',
        coverImage: '',
        shortDescription: '',
        studentIds: [],
        mentorIds: [],
        playlist: []
    });
    const [coverImageFile, setCoverImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [coverImagePreview, setCoverImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [coverImageDragOver, setCoverImageDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const coverImageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const processCoverImageFile = (file)=>{
        if (!file || !file.type.startsWith('image/')) return;
        setCoverImageFile(file);
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setCoverImagePreview(reader.result);
            handleInputChange('coverImage', reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleCoverImageChange = (e)=>{
        processCoverImageFile(e.target.files?.[0] ?? null);
        e.target.value = '';
    };
    const handleCoverImageDrop = (e)=>{
        e.preventDefault();
        setCoverImageDragOver(false);
        processCoverImageFile(e.dataTransfer.files?.[0] ?? null);
    };
    const handleCoverImageDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setCoverImageDragOver(true);
    };
    const handleCoverImageDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setCoverImageDragOver(false);
    };
    const handleCoverImageRemove = ()=>{
        setCoverImageFile(null);
        setCoverImagePreview('');
        handleInputChange('coverImage', '');
        if (coverImageInputRef.current) coverImageInputRef.current.value = '';
    };
    const handleCategoryChange = (option)=>{
        handleInputChange('categoryId', option?.value || '');
    };
    const [quizModalItemId, setQuizModalItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoDragOverId, setVideoDragOverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfDragOverId, setPdfDragOverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pdfFilesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const getYoutubeVideoId = (url)=>{
        if (!url?.trim()) return null;
        const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
        return m ? m[1] : null;
    };
    const handleAddPlaylistItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            type: 'video',
            title: '',
            source: '',
            duration: '',
            blogContent: '',
            videoPreview: '',
            quizData: []
        };
        handleInputChange('playlist', [
            ...formData.playlist,
            newItem
        ]);
    };
    const handlePlaylistItemChange = (id, field, value)=>{
        handleInputChange('playlist', formData.playlist.map((item)=>item.id === id ? {
                ...item,
                [field]: value
            } : item));
    };
    const handleRemovePlaylistItem = (id)=>{
        handleInputChange('playlist', formData.playlist.filter((item)=>item.id !== id));
    };
    const quizModalItem = quizModalItemId ? formData.playlist.find((i)=>i.id === quizModalItemId) : null;
    const updateQuizData = (itemId, quizData)=>{
        handlePlaylistItemChange(itemId, 'quizData', quizData);
    };
    const addQuizQuestion = (itemId)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        const prev = item?.quizData ?? [];
        updateQuizData(itemId, [
            ...prev,
            {
                id: Date.now().toString(),
                question: '',
                options: [
                    {
                        id: 'o1',
                        text: '',
                        correct: false
                    },
                    {
                        id: 'o2',
                        text: '',
                        correct: false
                    }
                ],
                multipleCorrect: false
            }
        ]);
    };
    const removeQuizQuestion = (itemId, qId)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        if (!item?.quizData) return;
        updateQuizData(itemId, item.quizData.filter((q)=>q.id !== qId));
    };
    const updateQuizQuestion = (itemId, qId, field, value)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        if (!item?.quizData) return;
        updateQuizData(itemId, item.quizData.map((q)=>q.id === qId ? {
                ...q,
                [field]: value
            } : q));
    };
    const addQuizOption = (itemId, qId)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        if (!item?.quizData) return;
        updateQuizData(itemId, item.quizData.map((q)=>q.id === qId ? {
                ...q,
                options: [
                    ...q.options,
                    {
                        id: `o-${Date.now()}`,
                        text: '',
                        correct: false
                    }
                ]
            } : q));
    };
    const removeQuizOption = (itemId, qId, optId)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        if (!item?.quizData) return;
        updateQuizData(itemId, item.quizData.map((q)=>q.id === qId ? {
                ...q,
                options: q.options.filter((o)=>o.id !== optId)
            } : q));
    };
    const updateQuizOption = (itemId, qId, optId, field, value)=>{
        const item = formData.playlist.find((i)=>i.id === itemId);
        if (!item?.quizData) return;
        const updateCorrect = (q)=>{
            if (q.id !== qId) return q;
            const opts = q.options.map((o)=>o.id === optId ? {
                    ...o,
                    [field]: value
                } : o);
            if (field === 'correct' && value === true && !q.multipleCorrect) {
                return {
                    ...q,
                    options: opts.map((o)=>({
                            ...o,
                            correct: o.id === optId
                        }))
                };
            }
            return {
                ...q,
                options: opts
            };
        };
        updateQuizData(itemId, item.quizData.map(updateCorrect));
    };
    const processPlaylistVideoFile = (itemId, file)=>{
        if (!file || !file.type.startsWith('video/')) return;
        const url = URL.createObjectURL(file);
        handlePlaylistItemChange(itemId, 'videoPreview', url);
        handlePlaylistItemChange(itemId, 'source', file.name);
    };
    const processPlaylistPdfFile = (itemId, file)=>{
        if (!file) return;
        const isPdf = file.type === 'application/pdf';
        if (!isPdf) return;
        pdfFilesRef.current[itemId] = file;
        handlePlaylistItemChange(itemId, 'source', file.name);
    };
    const removePlaylistPdfFile = (itemId)=>{
        delete pdfFilesRef.current[itemId];
        handlePlaylistItemChange(itemId, 'source', '');
    };
    const downloadQuizTemplate = ()=>{
        const headers = [
            'Question',
            'Option1',
            'Option2',
            'Option3',
            'Option4',
            'CorrectAnswer'
        ];
        const exampleRows = [
            [
                'What is 2 + 2?',
                '3',
                '4',
                '5',
                '6',
                '2'
            ],
            [
                'Select all prime numbers',
                '2',
                '4',
                '5',
                '9',
                '1,3'
            ]
        ];
        const csvContent = [
            headers.join(','),
            ...exampleRows.map((row)=>row.map((cell)=>`"${String(cell).replace(/"/g, '""')}"`).join(','))
        ].join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quiz_template.csv';
        a.click();
        URL.revokeObjectURL(url);
    };
    const parseCsvLine = (line)=>{
        const result = [];
        let current = '';
        let inQuotes = false;
        for(let i = 0; i < line.length; i++){
            const c = line[i];
            if (c === '"') {
                if (inQuotes && line[i + 1] === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (c === ',' && !inQuotes || c === '\n' || c === '\r') {
                result.push(current.trim());
                current = '';
                if (c !== ',') break;
            } else {
                current += c;
            }
        }
        result.push(current.trim());
        return result;
    };
    const handleQuizFileUpload = (itemId, file)=>{
        if (!file || !quizModalItemId) return;
        const reader = new FileReader();
        reader.onload = ()=>{
            const text = String(reader.result);
            const lines = text.split(/\r?\n/).filter((l)=>l.trim());
            if (lines.length < 2) return;
            const header = parseCsvLine(lines[0]);
            const questionIdx = header.findIndex((h)=>/question/i.test(h));
            const optionIndices = [];
            for(let n = 1; n <= 6; n++){
                const i = header.findIndex((h)=>new RegExp(`option\\s*${n}|option${n}`, 'i').test(h));
                if (i >= 0) optionIndices.push(i);
            }
            const correctIdx = header.findIndex((h)=>/correct/i.test(h));
            if (questionIdx < 0 || optionIndices.length < 2 || correctIdx < 0) return;
            const questions = [];
            for(let i = 1; i < lines.length; i++){
                const cells = parseCsvLine(lines[i]);
                const questionText = cells[questionIdx] ?? '';
                const correctVal = (cells[correctIdx] ?? '').trim();
                const correctNums = new Set(correctVal.split(/[,;]/).map((s)=>parseInt(s.trim(), 10)).filter((n)=>!Number.isNaN(n) && n >= 1));
                const options = optionIndices.map((_, idx)=>({
                        id: `o-${Date.now()}-${i}-${idx}`,
                        text: (cells[optionIndices[idx]] ?? '').trim(),
                        correct: correctNums.has(idx + 1)
                    })).filter((o)=>o.text !== '');
                if (questionText && options.length >= 2) {
                    questions.push({
                        id: `q-${Date.now()}-${i}`,
                        question: questionText,
                        options,
                        multipleCorrect: correctNums.size > 1
                    });
                }
            }
            if (questions.length > 0) {
                updateQuizData(itemId, [
                    ...formData.playlist.find((p)=>p.id === itemId)?.quizData ?? [],
                    ...questions
                ]);
            }
        };
        reader.readAsText(file);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Here you would typically send the data to your API
        // For now, we'll just navigate back to the modules list
        console.log('Module data:', formData);
        router.push('/training/curriculum/modules');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Create Training Module"
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "xl:col-span-12 col-span-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "box custom-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "box-header flex items-center justify-between flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-title",
                                        children: "Create New Training Module"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/training/curriculum/modules",
                                        className: "ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-arrow-left-line me-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Back to Modules"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-gray-200 dark:border-defaultborder/10 mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                    className: "flex space-x-2 rtl:space-x-reverse",
                                                    "aria-label": "Tabs",
                                                    role: "tablist",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveTab('info'),
                                                            className: `hs-tab-active:bg-primary/10 hs-tab-active:text-primary hs-tab-active:border-primary -mb-px py-2 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border-b-2 transition-colors ${activeTab === 'info' ? 'bg-primary/10 text-primary border-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent'}`,
                                                            id: "info-tab",
                                                            "aria-controls": "info-panel",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-file-text-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Course Info"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveTab('playlist'),
                                                            className: `hs-tab-active:bg-primary/10 hs-tab-active:text-primary hs-tab-active:border-primary -mb-px py-2 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border-b-2 transition-colors ${activeTab === 'playlist' ? 'bg-primary/10 text-primary border-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent'}`,
                                                            id: "playlist-tab",
                                                            "aria-controls": "playlist-panel",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-play-list-2-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Playlist"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            activeTab === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "info-panel",
                                                role: "tabpanel",
                                                "aria-labelledby": "info-tab",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-12 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-6 col-span-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "category",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Category ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 564,
                                                                            columnNumber: 36
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    id: "category",
                                                                    value: CATEGORY_OPTIONS.find((opt)=>opt.value === formData.categoryId) || null,
                                                                    onChange: handleCategoryChange,
                                                                    options: CATEGORY_OPTIONS,
                                                                    classNamePrefix: "Select2",
                                                                    placeholder: "Select Category",
                                                                    menuPlacement: "auto"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-6 col-span-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "module-name",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Module Name ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 39
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "module-name",
                                                                    type: "text",
                                                                    className: "form-control",
                                                                    placeholder: "Enter module name",
                                                                    value: formData.name,
                                                                    onChange: (e)=>handleInputChange('name', e.target.value),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-12 col-span-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Cover Image ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 39
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: coverImageInputRef,
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    className: "hidden",
                                                                    onChange: handleCoverImageChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                coverImagePreview || formData.coverImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative rounded-lg border border-defaultborder overflow-hidden bg-black/5 dark:bg-white/5 group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: coverImagePreview || formData.coverImage,
                                                                            alt: "Cover preview",
                                                                            className: "w-full h-56 object-cover block"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 607,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>coverImageInputRef.current?.click(),
                                                                                    className: "ti-btn ti-btn-light !mb-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ri-upload-cloud-line me-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 618,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        "Change"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                    lineNumber: 613,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: handleCoverImageRemove,
                                                                                    className: "ti-btn ti-btn-danger !mb-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ri-delete-bin-line me-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 626,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        "Remove"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                    lineNumber: 621,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 606,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>coverImageInputRef.current?.click(),
                                                                    onDrop: handleCoverImageDrop,
                                                                    onDragOver: handleCoverImageDragOver,
                                                                    onDragLeave: handleCoverImageDragLeave,
                                                                    onDragEnter: handleCoverImageDragOver,
                                                                    className: `relative rounded-lg border-2 border-dashed min-h-[200px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${coverImageDragOver ? 'border-primary bg-primary/5' : 'border-defaultborder hover:border-primary/50 hover:bg-black/5 dark:hover:bg-white/5'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "ri-image-add-line text-2xl"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 645,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-defaulttextcolor",
                                                                            children: "Drag and drop your cover image here"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.8125rem] text-[#8c9097] dark:text-white/50",
                                                                            children: "or click to browse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-12 col-span-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "short-description",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Short Description ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    id: "short-description",
                                                                    className: "form-control",
                                                                    rows: 4,
                                                                    placeholder: "Enter a brief description of the training module",
                                                                    value: formData.shortDescription,
                                                                    onChange: (e)=>handleInputChange('shortDescription', e.target.value),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-6 col-span-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                                                label: "Students",
                                                                placeholder: "Select students",
                                                                options: STUDENT_OPTIONS,
                                                                selectedIds: formData.studentIds,
                                                                onChange: (ids)=>handleInputChange('studentIds', ids)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 674,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-6 col-span-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                                                label: "Mentors Assigned",
                                                                placeholder: "Select mentors",
                                                                options: MENTOR_OPTIONS,
                                                                selectedIds: formData.mentorIds,
                                                                onChange: (ids)=>handleInputChange('mentorIds', ids)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            activeTab === 'playlist' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "playlist-panel",
                                                role: "tabpanel",
                                                "aria-labelledby": "playlist-tab",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-semibold mb-1",
                                                                        children: "Course Playlist"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#8c9097] dark:text-white/50 text-[0.8125rem] mb-0",
                                                                        children: "Add items like uploaded videos, YouTube links, quizzes, PDFs, etc. The order here will be used as the course flow."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "ti-btn ti-btn-primary-full !mb-0",
                                                                onClick: handleAddPlaylistItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ri-add-line me-1 align-middle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Add Item"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 708,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    formData.playlist.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-dashed border-defaultborder rounded-md p-4 text-center text-[#8c9097] dark:text-white/50 text-[0.8125rem]",
                                                        children: [
                                                            "No playlist items yet. Click",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: "Add Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " to start building the course."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: formData.playlist.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border border-defaultborder rounded-md p-4 bg-white/60 dark:bg-black/20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-[0.75rem]",
                                                                                        children: index + 1
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 734,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-semibold text-[0.875rem]",
                                                                                        children: item.title || `Playlist item ${index + 1}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 737,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 733,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]",
                                                                                onClick: ()=>handleRemovePlaylistItem(item.id),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "ri-delete-bin-line me-1 align-middle"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 746,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    "Remove"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 741,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 732,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-12 gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "xl:col-span-3 md:col-span-4 col-span-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-label",
                                                                                        htmlFor: `playlist-type-${item.id}`,
                                                                                        children: "Content Type"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 753,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                        id: `playlist-type-${item.id}`,
                                                                                        className: "form-control",
                                                                                        value: item.type,
                                                                                        onChange: (e)=>handlePlaylistItemChange(item.id, 'type', e.target.value),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "video",
                                                                                                children: "Upload Video"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 768,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "youtube",
                                                                                                children: "YouTube Link"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 769,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "pdf",
                                                                                                children: "PDF / Document"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 770,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "blog",
                                                                                                children: "Blog"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 771,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "quiz",
                                                                                                children: "Quiz"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 772,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "test",
                                                                                                children: "Test"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 773,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 756,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 752,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "xl:col-span-4 md:col-span-6 col-span-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-label",
                                                                                        htmlFor: `playlist-title-${item.id}`,
                                                                                        children: "Title"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 777,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        id: `playlist-title-${item.id}`,
                                                                                        type: "text",
                                                                                        className: "form-control",
                                                                                        placeholder: "Lesson title",
                                                                                        value: item.title,
                                                                                        onChange: (e)=>handlePlaylistItemChange(item.id, 'title', e.target.value)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 780,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 776,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "xl:col-span-2 md:col-span-4 col-span-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-label",
                                                                                        htmlFor: `playlist-duration-${item.id}`,
                                                                                        children: "Duration (min)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 792,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        id: `playlist-duration-${item.id}`,
                                                                                        type: "text",
                                                                                        className: "form-control",
                                                                                        placeholder: "e.g. 10",
                                                                                        value: item.duration || '',
                                                                                        onChange: (e)=>handlePlaylistItemChange(item.id, 'duration', e.target.value)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 795,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 791,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Video file"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 811,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            item.videoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative rounded-lg border border-defaultborder overflow-hidden bg-black/5 dark:bg-white/5 group max-w-md",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                        src: item.videoPreview,
                                                                                        controls: true,
                                                                                        className: "w-full max-h-48 object-contain block"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 814,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] !mb-0 cursor-pointer",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                        className: "ri-upload-cloud-line me-1"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                        lineNumber: 821,
                                                                                                        columnNumber: 39
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    "Change",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        type: "file",
                                                                                                        accept: "video/*",
                                                                                                        className: "hidden",
                                                                                                        onChange: (e)=>{
                                                                                                            const f = e.target.files?.[0];
                                                                                                            if (f) processPlaylistVideoFile(item.id, f);
                                                                                                            e.target.value = '';
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                        lineNumber: 823,
                                                                                                        columnNumber: 39
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 820,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "ti-btn ti-btn-danger !py-1 !px-2 !text-[0.75rem] !mb-0",
                                                                                                onClick: ()=>{
                                                                                                    if (item.videoPreview) URL.revokeObjectURL(item.videoPreview);
                                                                                                    handlePlaylistItemChange(item.id, 'videoPreview', '');
                                                                                                    handlePlaylistItemChange(item.id, 'source', '');
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "ri-delete-bin-line"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                    lineNumber: 843,
                                                                                                    columnNumber: 39
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 834,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 819,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 813,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onDrop: (e)=>{
                                                                                    e.preventDefault();
                                                                                    setVideoDragOverId(null);
                                                                                    processPlaylistVideoFile(item.id, e.dataTransfer.files?.[0] ?? null);
                                                                                },
                                                                                onDragOver: (e)=>{
                                                                                    e.preventDefault();
                                                                                    setVideoDragOverId(item.id);
                                                                                },
                                                                                onDragLeave: ()=>setVideoDragOverId(null),
                                                                                onClick: ()=>document.getElementById(`playlist-video-input-${item.id}`)?.click(),
                                                                                className: `rounded-lg border-2 border-dashed min-h-[140px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${videoDragOverId === item.id ? 'border-primary bg-primary/5' : 'border-defaultborder hover:border-primary/50'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        id: `playlist-video-input-${item.id}`,
                                                                                        type: "file",
                                                                                        accept: "video/*",
                                                                                        className: "hidden",
                                                                                        onChange: (e)=>{
                                                                                            const f = e.target.files?.[0];
                                                                                            if (f) processPlaylistVideoFile(item.id, f);
                                                                                            e.target.value = '';
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 866,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-primary text-2xl",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ri-video-add-line"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 878,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 877,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[0.8125rem] text-[#8c9097] dark:text-white/50",
                                                                                        children: "Drag and drop video or click to upload"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 880,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 848,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 810,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4 grid grid-cols-12 gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "xl:col-span-6 col-span-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-label",
                                                                                        children: "YouTube URL"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 891,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "url",
                                                                                        className: "form-control",
                                                                                        placeholder: "https://www.youtube.com/watch?v=...",
                                                                                        value: item.source,
                                                                                        onChange: (e)=>handlePlaylistItemChange(item.id, 'source', e.target.value)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 892,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 890,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "xl:col-span-6 col-span-12",
                                                                                children: getYoutubeVideoId(item.source) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "rounded-lg overflow-hidden border border-defaultborder",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: `https://img.youtube.com/vi/${getYoutubeVideoId(item.source)}/mqdefault.jpg`,
                                                                                            alt: "YouTube thumbnail",
                                                                                            className: "w-full aspect-video object-cover"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 905,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "p-2 bg-black/5 dark:bg-white/5 text-[0.75rem] text-[#8c9097] dark:text-white/50",
                                                                                            children: [
                                                                                                "Preview for: ",
                                                                                                getYoutubeVideoId(item.source)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 910,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                    lineNumber: 904,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "rounded-lg border border-dashed border-defaultborder min-h-[120px] flex items-center justify-center text-[#8c9097] dark:text-white/50 text-[0.8125rem]",
                                                                                    children: "Enter a YouTube URL to see preview"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                    lineNumber: 915,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 902,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "PDF document"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 925,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            item.source && pdfFilesRef.current[item.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative rounded-lg border border-defaultborder p-4 bg-black/5 dark:bg-white/5 flex items-center gap-4 max-w-md",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex items-center justify-center w-12 h-12 rounded-lg bg-danger/10 text-danger text-2xl",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ri-file-pdf-line"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 929,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 928,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "font-semibold text-[0.875rem] truncate",
                                                                                                children: item.source
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 932,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[0.75rem] text-[#8c9097] dark:text-white/50",
                                                                                                children: [
                                                                                                    (pdfFilesRef.current[item.id].size / 1024).toFixed(1),
                                                                                                    " KB"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 935,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 931,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex gap-1 shrink-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] !mb-0 cursor-pointer",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                        className: "ri-upload-cloud-line me-1"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                        lineNumber: 941,
                                                                                                        columnNumber: 39
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    "Change",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        type: "file",
                                                                                                        accept: "application/pdf",
                                                                                                        className: "hidden",
                                                                                                        onChange: (e)=>{
                                                                                                            const f = e.target.files?.[0];
                                                                                                            if (f) processPlaylistPdfFile(item.id, f);
                                                                                                            e.target.value = '';
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                        lineNumber: 943,
                                                                                                        columnNumber: 39
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 940,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "ti-btn ti-btn-danger !py-1 !px-2 !text-[0.75rem] !mb-0",
                                                                                                onClick: ()=>removePlaylistPdfFile(item.id),
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "ri-delete-bin-line"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                    lineNumber: 959,
                                                                                                    columnNumber: 39
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 954,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 939,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 927,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onDrop: (e)=>{
                                                                                    e.preventDefault();
                                                                                    setPdfDragOverId(null);
                                                                                    processPlaylistPdfFile(item.id, e.dataTransfer.files?.[0] ?? null);
                                                                                },
                                                                                onDragOver: (e)=>{
                                                                                    e.preventDefault();
                                                                                    setPdfDragOverId(item.id);
                                                                                },
                                                                                onDragLeave: ()=>setPdfDragOverId(null),
                                                                                onClick: ()=>document.getElementById(`playlist-pdf-input-${item.id}`)?.click(),
                                                                                className: `rounded-lg border-2 border-dashed min-h-[120px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${pdfDragOverId === item.id ? 'border-primary bg-primary/5' : 'border-defaultborder hover:border-primary/50'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        id: `playlist-pdf-input-${item.id}`,
                                                                                        type: "file",
                                                                                        accept: "application/pdf",
                                                                                        className: "hidden",
                                                                                        onChange: (e)=>{
                                                                                            const f = e.target.files?.[0];
                                                                                            if (f) processPlaylistPdfFile(item.id, f);
                                                                                            e.target.value = '';
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 982,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-danger text-2xl",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ri-file-pdf-line"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                            lineNumber: 994,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 993,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[0.8125rem] text-[#8c9097] dark:text-white/50",
                                                                                        children: "Drag and drop PDF or click to upload"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 996,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 924,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'blog' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Blog content"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1006,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "border border-defaultborder rounded-md overflow-hidden",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$forms$2f$form$2d$editors$2f$tiptapeditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    content: item.blogContent ?? '',
                                                                                    placeholder: "Write your blog post...",
                                                                                    onChange: (html)=>handlePlaylistItemChange(item.id, 'blogContent', html)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                    lineNumber: 1008,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1007,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1005,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'quiz' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-label mb-0",
                                                                                        children: "Quiz (MCQ – single or multiple correct answers)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 1022,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        className: "ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem]",
                                                                                        onClick: ()=>setQuizModalItemId(item.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ri-add-line me-1"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                                lineNumber: 1030,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            (item.quizData?.length ?? 0) === 0 ? 'Create Quiz' : `Edit Quiz (${item.quizData?.length ?? 0} questions)`
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 1025,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1021,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            (item.quizData?.length ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-md border border-defaultborder p-3 bg-black/5 dark:bg-white/5 text-[0.8125rem]",
                                                                                children: (item.quizData ?? []).map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            i + 1,
                                                                                            ". ",
                                                                                            q.question || '(No question text)',
                                                                                            " –",
                                                                                            ' ',
                                                                                            q.options.length,
                                                                                            " options",
                                                                                            q.multipleCorrect ? ' (multiple correct)' : ''
                                                                                        ]
                                                                                    }, q.id, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                        lineNumber: 1039,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1037,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1020,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.type === 'test' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Test link or description"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1052,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                placeholder: "Test URL or reference",
                                                                                value: item.source,
                                                                                onChange: (e)=>handlePlaylistItemChange(item.id, 'source', e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                                lineNumber: 1053,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1051,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 699,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-footer flex justify-end gap-2 pt-4 border-t border-defaultborder",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/training/curriculum/modules",
                                                className: "ti-btn ti-btn-light",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "ti-btn ti-btn-primary-full",
                                                children: "Create Module"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            quizModalItemId && quizModalItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50",
                onClick: ()=>setQuizModalItemId(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-bodybg border border-defaultborder rounded-lg shadow-xl w-[95vw] max-w-5xl max-h-[92vh] flex flex-col",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b border-defaultborder",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-semibold mb-0",
                                    children: "Create / Edit Quiz (MCQ)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ti-btn ti-btn-light !py-1 !px-2",
                                    onClick: ()=>setQuizModalItemId(null),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ri-close-line text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                            lineNumber: 1099,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 overflow-y-auto flex-1 min-h-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 rounded-lg border border-defaultborder bg-black/5 dark:bg-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-[0.9375rem] mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-file-excel-2-line text-success text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Import from Excel / CSV"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[0.8125rem] text-[#8c9097] dark:text-white/50 mb-3",
                                            children: 'Download the CSV template (open in Excel), fill in Question, Option1–Option4, and CorrectAnswer (e.g. "2" for option 2, or "1,3" for multiple). Save as CSV and upload.'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "ti-btn ti-btn-success !mb-0",
                                                    onClick: downloadQuizTemplate,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-download-line me-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1125,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Download template (CSV)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "ti-btn ti-btn-primary !mb-0 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-upload-cloud-line me-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1129,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Upload CSV",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: ".csv",
                                                            className: "hidden",
                                                            onChange: (e)=>{
                                                                const file = e.target.files?.[0];
                                                                if (file && quizModalItemId) handleQuizFileUpload(quizModalItemId, file);
                                                                e.target.value = '';
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1131,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.8125rem] font-semibold text-[#8c9097] dark:text-white/50",
                                            children: "Or add manually:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1146,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ti-btn ti-btn-primary-full !mb-0",
                                            onClick: ()=>addQuizQuestion(quizModalItemId),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-add-line me-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Add Question"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1145,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: (quizModalItem.quizData ?? []).map((q, qIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-defaultborder rounded-lg p-4 bg-white/60 dark:bg-black/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-primary",
                                                            children: [
                                                                "Question ",
                                                                qIndex + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1165,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "ti-btn ti-btn-light !py-0.5 !px-1.5 !text-[0.75rem]",
                                                            onClick: ()=>removeQuizQuestion(quizModalItemId, q.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ri-delete-bin-line"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1166,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "form-control mb-3",
                                                    placeholder: "Question text",
                                                    value: q.question,
                                                    onChange: (e)=>updateQuizQuestion(quizModalItemId, q.id, 'question', e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1174,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: `quiz-multi-${q.id}`,
                                                            className: "form-check-input",
                                                            checked: q.multipleCorrect,
                                                            onChange: (e)=>updateQuizQuestion(quizModalItemId, q.id, 'multipleCorrect', e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: `quiz-multi-${q.id}`,
                                                            className: "form-check-label text-[0.8125rem]",
                                                            children: "Allow multiple correct answers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[0.75rem] font-semibold text-[#8c9097] dark:text-white/50 mb-2",
                                                    children: "Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        q.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        className: "form-check-input shrink-0",
                                                                        checked: opt.correct,
                                                                        onChange: (e)=>updateQuizOption(quizModalItemId, q.id, opt.id, 'correct', e.target.checked),
                                                                        title: "Correct answer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        className: "form-control flex-1 !py-1.5 !text-[0.8125rem]",
                                                                        placeholder: "Option text",
                                                                        value: opt.text,
                                                                        onChange: (e)=>updateQuizOption(quizModalItemId, q.id, opt.id, 'text', e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "ti-btn ti-btn-light !py-0.5 !px-1.5 shrink-0",
                                                                        onClick: ()=>removeQuizOption(quizModalItemId, q.id, opt.id),
                                                                        disabled: q.options.length <= 2,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "ri-subtract-line"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                            lineNumber: 1247,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                        lineNumber: 1241,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, opt.id, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                lineNumber: 1207,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "ti-btn ti-btn-light !py-0.5 !px-2 !text-[0.75rem]",
                                                            onClick: ()=>addQuizOption(quizModalItemId, q.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-add-line me-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                                    lineNumber: 1256,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Add option"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, q.id, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                            lineNumber: 1160,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                (quizModalItem.quizData?.length ?? 0) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#8c9097] dark:text-white/50 text-[0.8125rem] mt-2",
                                    children: 'Click "Add Question" to create your first MCQ question.'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                            lineNumber: 1109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-defaultborder flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ti-btn ti-btn-primary-full",
                                onClick: ()=>setQuizModalItemId(null),
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                                lineNumber: 1270,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                            lineNumber: 1269,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                    lineNumber: 1095,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
                lineNumber: 1091,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/create/page.tsx",
        lineNumber: 509,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CreateModule, "dmPsS1vwFjXvfwhVblJJT3I/dYI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = CreateModule;
const __TURBOPACK__default__export__ = CreateModule;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "CheckboxDropdown");
__turbopack_context__.k.register(_c2, "CreateModule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_dharwin_boilerplate_a387c5b9._.js.map