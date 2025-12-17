(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/backtotop/backtotop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Backtotop = ()=>{
    _s();
    const screenUp = ()=>{
        window.scrollTo(0, 0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Backtotop.useEffect": ()=>{
            const handleScroll = {
                "Backtotop.useEffect.handleScroll": ()=>{
                    const color = document.getElementsByClassName("scrollToTop")[0];
                    if (color) {
                        window.scrollY > 100 ? color.style.display = "flex" : color.style.display = "none";
                    }
                }
            }["Backtotop.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Backtotop.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Backtotop.useEffect"];
        }
    }["Backtotop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scrollToTop",
        onClick: screenUp,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "arrow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-arrow-up-s-fill text-xl"
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/backtotop/backtotop.tsx",
                lineNumber: 24,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/backtotop/backtotop.tsx",
            lineNumber: 24,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/backtotop/backtotop.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Backtotop, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Backtotop;
const __TURBOPACK__default__export__ = Backtotop;
var _c;
__turbopack_context__.k.register(_c, "Backtotop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray dark:text-defaulttextcolor/50",
                    children: [
                        " Copyright © ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            id: "year",
                            children: "2024"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                            lineNumber: 9,
                            columnNumber: 92
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#!",
                            scroll: false,
                            className: "text-defaulttextcolor font-semibold dark:text-defaulttextcolor",
                            children: "Ynex"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                            lineNumber: 9,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0)),
                        ". Designed with ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bi bi-heart-fill text-danger"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                            lineNumber: 9,
                            columnNumber: 253
                        }, ("TURBOPACK compile-time value", void 0)),
                        " by ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#!",
                            scroll: false,
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-primary underline",
                                    children: "Spruko"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                                    lineNumber: 9,
                                    columnNumber: 343
                                }, ("TURBOPACK compile-time value", void 0)),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                            lineNumber: 9,
                            columnNumber: 311
                        }, ("TURBOPACK compile-time value", void 0)),
                        " All rights reserved "
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
                lineNumber: 8,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/nav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Modalsearch = ()=>{
    _s();
    //Search functionality
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("false");
    const handleClose = ()=>setShow("false");
    const handleShow = ()=>setShow("false");
    const [show1, setShow1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("false");
    const [InputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [show2, setShow2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("false");
    const [searchcolor, setsearchcolor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("text-dark");
    const [searchval, setsearchval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Type something");
    const [NavData, setNavData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modalsearch.useEffect": ()=>{
            const clickHandler = {
                "Modalsearch.useEffect.clickHandler": (_event)=>{
                    const searchResult = document.querySelector(".search-result");
                    if (searchResult) {
                        searchResult.classList.add("hidden");
                    }
                }
            }["Modalsearch.useEffect.clickHandler"];
            document.addEventListener("click", clickHandler);
            return ({
                "Modalsearch.useEffect": ()=>{
                    // Clean up the event listener when the component unmounts
                    document.removeEventListener("click", clickHandler);
                }
            })["Modalsearch.useEffect"];
        }
    }["Modalsearch.useEffect"], []);
    const myfunction = (inputvalue)=>{
        document.querySelector(".search-result")?.classList.remove("hidden");
        const i = [];
        const allElement2 = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"].forEach((mainLevel)=>{
            if (mainLevel.children) {
                setShow1(true);
                mainLevel.children.forEach((subLevel)=>{
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1)=>{
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2)=>{
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });
        for (const allElement of i){
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
                    setShow2(true);
                    // Check if the element has a path and doesn't already exist in allElement2 before pushing
                    if (allElement.path && !allElement2.some((el)=>el.title === allElement.title)) {
                        allElement2.push(allElement);
                    }
                }
            }
        }
        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor("text-dark");
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor("text-danger");
                setsearchval("There is no component with this name");
            }
        }
        setNavData(allElement2);
    };
    const tabsData = [
        {
            id: 1,
            class: "People",
            icon: "user"
        },
        {
            id: 2,
            class: "Pages",
            icon: "file-text"
        },
        {
            id: 3,
            class: "Articales",
            icon: "align-left"
        },
        {
            id: 4,
            class: "Tags",
            icon: "server"
        }
    ];
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabsData);
    function handleRemove(id) {
        const newList = allData.filter((idx)=>idx.id !== id);
        setAllData(newList);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "search-modal",
        className: "hs-overlay ti-modal hidden mt-[1.75rem]",
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ti-modal-box",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ti-modal-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-group border-[2px] border-primary rounded-[0.25rem] w-full flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "aria-label": "anchor",
                                        href: "#!",
                                        className: "input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]",
                                        id: "Search-Grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fe fe-search header-link-icon text-[0.875rem]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                            lineNumber: 112,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        className: "form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent",
                                        placeholder: "Search",
                                        "aria-label": "Username",
                                        defaultValue: InputValue,
                                        autoComplete: "off",
                                        onChange: (ele)=>{
                                            myfunction(ele.target.value);
                                            setInputValue(ele.target.value);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "aria-label": "anchor",
                                        href: "#!",
                                        className: "!border-e-0 flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]",
                                        id: "voice-search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fe fe-mic header-link-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                            lineNumber: 124,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hs-dropdown ti-dropdown",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                "aria-label": "anchor",
                                                href: "#!",
                                                className: "flex items-center hs-dropdown-toggle ti-dropdown-toggle btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fe fe-more-vertical"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "absolute hs-dropdown-menu ti-dropdown-menu !-mt-2 !p-0 hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",
                                                            href: "#!",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",
                                                            href: "#!",
                                                            children: "Another action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",
                                                            href: "#!",
                                                            children: "Something else here"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                            className: "dropdown-divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",
                                                            href: "#!",
                                                            children: "Separated link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            show1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "box search-result relative z-[9] search-fix  border border-gray-200 dark:border-white/10 mt-1 w-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-header",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "box-title me-2 text-break",
                                            children: [
                                                "Search result of ",
                                                InputValue
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-body p-2 flex flex-col max-h-[250px] overflow-auto",
                                        children: show2 ? NavData.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ti-list-group gap-x-3.5 text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `${e.path}/`,
                                                    className: "search-result-item",
                                                    onClick: ()=>{
                                                        setShow1("false"), setInputValue("");
                                                    },
                                                    children: e.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, Math.random(), false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 159,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: `${searchcolor} `,
                                            children: searchval
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : "",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2",
                                        children: "Are You Looking For..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    allData.map((idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10 me-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fe fe-${idx.icon} me-2`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 140
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                idx.class,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#!",
                                                    onClick: ()=>handleRemove(idx.id),
                                                    className: "tag-addon header-remove-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: "Remove badge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 101
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fe fe-x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 146
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 195
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, Math.random(), true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                            lineNumber: 186,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-[1.5rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2",
                                        children: "Recent Search :"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "dismiss-alert",
                                        role: "alert",
                                        className: "!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pages/notifications/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Notifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 50
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                "aria-label": "anchor",
                                                className: "ms-auto leading-none",
                                                href: "#!",
                                                scroll: false,
                                                "data-hs-remove-element": "#dismiss-alert",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 139
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "dismiss-alert1",
                                        role: "alert",
                                        className: "!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/ui-elements/alerts/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                "aria-label": "anchor",
                                                className: "ms-auto leading-none",
                                                href: "#!",
                                                scroll: false,
                                                "data-hs-remove-element": "#dismiss-alert1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 140
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "dismiss-alert2",
                                        role: "alert",
                                        className: "!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pages/email/mail-app/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 51
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                "aria-label": "anchor",
                                                className: "ms-auto lh-1",
                                                href: "#!",
                                                scroll: false,
                                                "data-hs-remove-element": "#dismiss-alert2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 132
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ti-modal-footer !py-[1rem] !px-[1.25rem]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex rounded-md  shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ti-btn-group !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ti-btn-group  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]",
                                    children: "Clear Recents"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
            lineNumber: 105,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Modalsearch, "pUiSzmVlZoUUfvK5+2Sgyxku4WI=");
_c = Modalsearch;
const __TURBOPACK__default__export__ = Modalsearch;
var _c;
__turbopack_context__.k.register(_c, "Modalsearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/next.config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**@type {import('next').NextConfig} */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const isProd = ("TURBOPACK compile-time value", "development") === "production";
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
    basePath: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined,
    assetPrefix: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined,
    images: {
        loader: "imgix",
        path: "/"
    },
    typescript: {
        ignoreBuildErrors: true
    }
};
module.exports = nextConfig;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/action.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$modal$2d$search$2f$modalsearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/modal-search/modalsearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$next$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/next.config.js [app-client] (ecmascript)");
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
const Header = ({ local_varaiable, ThemeChanger })=>{
    _s();
    const data = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pinkmain/10 text-pinkmain text-[0.625rem]",
        children: "Free shipping"
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
        lineNumber: 13,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0));
    const cartProduct = [
        {
            id: 1,
            src: "/assets/images/ecommerce/jpg/1.jpg",
            name: 'SomeThing Phone',
            price: '$1,299.00',
            color: 'Metallic Blue',
            text: '6gb Ram',
            class: ''
        },
        {
            id: 2,
            src: "/assets/images/ecommerce/jpg/3.jpg",
            name: 'Stop Watch',
            price: '$179.29',
            color: 'Analog',
            text: data,
            class: ''
        },
        {
            id: 3,
            src: "/assets/images/ecommerce/jpg/5.jpg",
            name: 'Photo Frame',
            price: '$29.00',
            color: 'Decorative',
            text: '',
            class: ''
        },
        {
            id: 4,
            src: "/assets/images/ecommerce/jpg/4.jpg",
            name: 'Kikon Camera',
            price: '$4,999.00',
            color: 'Black',
            text: '50MM',
            class: ''
        },
        {
            id: 5,
            src: "/assets/images/ecommerce/jpg/6.jpg",
            name: 'Canvas Shoes',
            price: '$129.00',
            color: 'Gray',
            text: 'Sports',
            class: 'border-b-0'
        }
    ];
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...cartProduct
    ]);
    const [cartItemCount, setCartItemCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cartProduct.length);
    const handleRemove = (itemId, event)=>{
        event.stopPropagation();
        const updatedCart = cartItems.filter((item)=>item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };
    //Notifications
    const span1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-warning",
        children: "ID: #1116773"
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
        lineNumber: 74,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0));
    const span2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-success",
        children: "ID: 7731116"
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
        lineNumber: 75,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0));
    const span3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pinkmain/10 text-pinkmain text-[0.625rem]",
        children: "Free shipping"
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
        lineNumber: 77,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0));
    const notifydata = [
        {
            id: 1,
            class: "Your Order Has Been Shipped",
            data: "Order No: 123456 Has Shipped To Your Delivery Address",
            icon: "gift",
            class2: "",
            color: "!bg-primary/10",
            color2: "primary"
        },
        {
            id: 2,
            class: "Discount Available",
            data: "Discount Available On Selected Products",
            icon: "discount-2",
            class2: "",
            color: "!bg-secondary/10",
            color2: "secondary"
        },
        {
            id: 3,
            class: "Account Has Been Verified",
            data: "Your Account Has Been Verified Sucessfully",
            icon: "user-check",
            class2: "",
            color: "!bg-pinkmain/10",
            color2: "pink"
        },
        {
            id: 4,
            class: "Order Placed",
            data: "Order Placed Successfully",
            icon: "circle-check",
            class2: span1,
            color: "!bg-warning/10",
            color2: "warning"
        },
        {
            id: 5,
            class: "Order Delayed",
            data: "Order Delayed Unfortunately",
            icon: "clock",
            class2: span2,
            color: "!bg-success/10",
            color2: "success"
        }
    ];
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...notifydata
    ]);
    const handleNotificationClose = (index, event)=>{
        if (event) {
            event.stopPropagation();
        }
        const updatedNotifications = [
            ...notifications
        ];
        updatedNotifications.splice(index, 1);
        setNotifications(updatedNotifications);
    };
    //full screen
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleFullscreen = ()=>{
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fullscreenChangeHandler = {
                "Header.useEffect.fullscreenChangeHandler": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["Header.useEffect.fullscreenChangeHandler"];
            document.addEventListener("fullscreenchange", fullscreenChangeHandler);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleResize = {
                "Header.useEffect.handleResize": ()=>{
                    const windowObject = window;
                    if (windowObject.innerWidth <= 991) {} else {}
                }
            }["Header.useEffect.handleResize"];
            handleResize(); // Check on component mount
            window.addEventListener("resize", handleResize);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    function menuClose() {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if (window.innerWidth <= 992) {
            ThemeChanger({
                ...theme,
                dataToggled: "close"
            });
        }
        if (window.innerWidth >= 992) {
            ThemeChanger({
                ...theme,
                dataToggled: local_varaiable.dataToggled ? local_varaiable.dataToggled : ''
            });
        }
    }
    const toggleSidebar = ()=>{
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        let sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === "vertical") {
                let verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch(verticalStyle){
                    // closed
                    case "closed":
                        ThemeChanger({
                            ...theme,
                            "dataNavStyle": ""
                        });
                        if (theme.dataToggled === "close-menu-close") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "close-menu-close"
                            });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({
                            ...theme,
                            "dataNavStyle": ""
                        });
                        if (theme.dataToggled === "icon-overlay-close") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "",
                                "iconOverlay": ''
                            });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({
                                    ...theme,
                                    "dataToggled": "icon-overlay-close",
                                    "iconOverlay": ''
                                });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({
                            ...theme,
                            "dataNavStyle": ""
                        });
                        if (theme.dataToggled === "icon-text-close") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "icon-text-close"
                            });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({
                            ...theme,
                            "dataNavStyle": ""
                        });
                        ThemeChanger({
                            ...theme,
                            "dataNavStyle": ""
                        });
                        if (theme.dataToggled === "double-menu-open") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "double-menu-close"
                            });
                        } else {
                            let sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                ThemeChanger({
                                    ...theme,
                                    "dataToggled": "double-menu-open"
                                });
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                } else {
                                    ThemeChanger({
                                        ...theme,
                                        "dataToggled": "double-menu-close"
                                    });
                                }
                            }
                        }
                        break;
                    // detached
                    case "detached":
                        if (theme.dataToggled === "detached-close") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "",
                                "iconOverlay": ''
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "detached-close",
                                "iconOverlay": ''
                            });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({
                            ...theme,
                            "dataToggled": ""
                        });
                }
                switch(navStyle){
                    case "menu-click":
                        if (theme.dataToggled === "menu-click-closed") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "menu-click-closed"
                            });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.dataToggled === "menu-hover-closed") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "menu-hover-closed"
                            });
                        }
                        break;
                    case "icon-click":
                        if (theme.dataToggled === "icon-click-closed") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "icon-click-closed"
                            });
                        }
                        break;
                    case "icon-hover":
                        if (theme.dataToggled === "icon-hover-closed") {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": ""
                            });
                        } else {
                            ThemeChanger({
                                ...theme,
                                "dataToggled": "icon-hover-closed"
                            });
                        }
                        break;
                }
            }
        } else {
            if (theme.dataToggled === "close") {
                ThemeChanger({
                    ...theme,
                    "dataToggled": "open"
                });
                setTimeout(()=>{
                    if (theme.dataToggled == "open") {
                        const overlay = document.querySelector("#responsive-overlay");
                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", ()=>{
                                const overlay = document.querySelector("#responsive-overlay");
                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }
                    window.addEventListener("resize", ()=>{
                        if (window.screen.width >= 992) {
                            const overlay = document.querySelector("#responsive-overlay");
                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({
                    ...theme,
                    "dataToggled": "close"
                });
            }
        }
    };
    //Dark Model
    const ToggleDark = ()=>{
        ThemeChanger({
            ...local_varaiable,
            "class": local_varaiable.class == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.class == 'dark' ? 'light' : 'dark',
            "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ? local_varaiable.class == 'dark' ? 'light' : 'dark' : "dark"
        });
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if (theme.class != 'dark') {
            ThemeChanger({
                ...theme,
                "bodyBg": '',
                "Light": '',
                "darkBg": '',
                "inputBorder": ''
            });
            localStorage.setItem("ynexlighttheme", "light");
            localStorage.removeItem("ynexdarktheme");
            localStorage.removeItem("ynexMenu");
            localStorage.removeItem("ynexHeader");
        } else {
            localStorage.setItem("ynexdarktheme", "dark");
            localStorage.removeItem("ynexlighttheme");
            localStorage.removeItem("ynexMenu");
            localStorage.removeItem("ynexHeader");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const navbar = document?.querySelector(".header");
            const navbar1 = document?.querySelector(".app-sidebar");
            const sticky = navbar?.clientHeight;
            // const sticky1 = navbar1.clientHeight;
            function stickyFn() {
                if (window.pageYOffset >= sticky) {
                    navbar?.classList.add("sticky-pin");
                    navbar1?.classList.add("sticky-pin");
                } else {
                    navbar?.classList.remove("sticky-pin");
                    navbar1?.classList.remove("sticky-pin");
                }
            }
            window.addEventListener("scroll", stickyFn);
            window.addEventListener("DOMContentLoaded", stickyFn);
            // Cleanup event listeners when the component unmounts
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", stickyFn);
                    window.removeEventListener("DOMContentLoaded", stickyFn);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "main-header !h-[3.75rem]",
                    "aria-label": "Global",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "main-header-container ps-[0.725rem] pe-[1rem] ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-content-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "horizontal-logo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboards/crm/",
                                                className: "header-logo",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-logo.png`,
                                                        alt: "logo",
                                                        className: "desktop-logo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-logo.png`,
                                                        alt: "logo",
                                                        className: "toggle-logo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-dark.png`,
                                                        alt: "logo",
                                                        className: "desktop-dark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-dark.png`,
                                                        alt: "logo",
                                                        className: "toggle-dark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-white.png`,
                                                        alt: "logo",
                                                        className: "desktop-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-white.png`,
                                                        alt: "logo",
                                                        className: "toggle-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element md:px-[0.325rem] !items-center",
                                        onClick: ()=>toggleSidebar(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            "aria-label": "Hide Sidebar",
                                            className: "sidemenu-toggle animated-arrow  hor-toggle horizontal-navtoggle inline-flex items-center",
                                            href: "#!",
                                            scroll: false,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 379,
                                                columnNumber: 145
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-content-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element py-[1rem] md:px-[0.65rem] px-2 header-search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "button",
                                            type: "button",
                                            "data-hs-overlay": "#search-modal",
                                            className: "inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-search-alt-2 header-link-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element py-[1rem] md:px-[0.65rem] px-2  header-country hs-dropdown ti-dropdown  hidden sm:block [--placement:bottom-left]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "dropdown-flag",
                                                type: "button",
                                                className: "hs-dropdown-toggle ti-dropdown-toggle !p-0 flex-shrink-0  !border-0 !rounded-full !shadow-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/us_flag.jpg`,
                                                    alt: "flag-img",
                                                    className: "h-[1.25rem] w-[1.25rem] rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hs-dropdown-menu ti-dropdown-menu min-w-[10rem] hidden !-mt-3",
                                                "aria-labelledby": "dropdown-flag",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2 first:pt-0 last:pb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem] ",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] flex items-center w-[1.375rem] rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/us_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "English"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 406,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] w-[1.375rem] flex items-center rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/spain_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 415,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 414,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "Spanish"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] w-[1.375rem] flex items-center rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/french_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 428,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 427,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "French"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 432,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] w-[1.375rem] flex items-center rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/germany_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 441,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "German"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 445,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] w-[1.375rem] flex items-center rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/italy_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 454,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "Italian"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 458,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 457,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ti-dropdown-item !p-[0.65rem]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 rtl:space-x-reverse w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-[1.375rem] w-[1.375rem] flex items-center  rounded-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/flags/russia_flag.jpg`,
                                                                                alt: "flag-img",
                                                                                className: "h-[1rem] w-[1rem] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 467,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 466,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "!text-[0.8125rem] font-medium",
                                                                                children: "Russian"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 471,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element header-theme-mode hidden !items-center sm:block !py-[1rem] md:!px-[0.65rem] px-2",
                                        onClick: ()=>ToggleDark(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "anchor",
                                                className: "hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                                                "data-hs-theme-click-value": "dark",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bx bx-moon header-link-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 482,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "anchor",
                                                className: "hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs  dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                                                "data-hs-theme-click-value": "light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bx bx-sun header-link-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element cart-dropdown hs-dropdown ti-dropdown md:!block !hidden py-[1rem] md:px-[0.65rem] px-2 [--placement:bottom-right] rtl:[--placement:bottom-left]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "dropdown-cart",
                                                type: "button",
                                                className: "hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bx bx-cart header-link-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex absolute h-5 w-5 -top-[0.25rem] end-0 -me-[0.6rem]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative inline-flex rounded-full h-[14.7px] w-[14px] text-[0.625rem] bg-primary text-white justify-center items-center",
                                                            id: "cart-icon-badge",
                                                            children: cartItemCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "main-header-dropdown bg-white !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu w-[22rem] border-0 border-defaultborder hidden",
                                                "aria-labelledby": "dropdown-cart",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ti-dropdown-header !bg-transparent flex justify-between items-center !m-0 !p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-defaulttextcolor  !text-[1.0625rem] font-semibold",
                                                                children: "Cart Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#!",
                                                                scroll: false,
                                                                className: "font-[600] py-[0.25/2rem] px-[0.45rem] rounded-[0.25rem] bg-success/10 text-success text-[0.75em] ",
                                                                id: "cart-data",
                                                                children: [
                                                                    cartItemCount,
                                                                    " Item",
                                                                    cartItemCount !== 1 ? 's' : ''
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                            className: "dropdown-divider dark:border-white/10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-none mb-0",
                                                        id: "header-cart-items-scroll",
                                                        children: cartItems.map((idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `ti-dropdown-item border-b dark:border-defaultborder/10 border-defaultborder ${idx.class}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start cart-dropdown-item",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}${idx.src}`,
                                                                            alt: "img",
                                                                            className: "!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem] rounded-[50%] br-5 me-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 520,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grow",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-start justify-between mb-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "mb-0 !text-[0.8125rem] text-defaulttextcolor dark:text-white font-semibold ",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                href: "/pages/ecommerce/cart/",
                                                                                                children: idx.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                            lineNumber: 525,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "inline-flex",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-black mb-1 dark:text-white !font-medium",
                                                                                                    children: idx.price
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                    lineNumber: 530,
                                                                                                    columnNumber: 33
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    "aria-label": "anchor",
                                                                                                    href: "#!",
                                                                                                    scroll: false,
                                                                                                    className: "header-cart-remove ltr:float-right rtl:float-left dropdown-item-close",
                                                                                                    onClick: (event)=>handleRemove(idx.id, event),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                        className: "ti ti-trash"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                        lineNumber: 531,
                                                                                                        columnNumber: 216
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                    lineNumber: 531,
                                                                                                    columnNumber: 33
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                            lineNumber: 529,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 524,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "min-w-fit flex  items-start justify-between",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                        className: "header-product-item dark:text-white/50 flex",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: idx.color
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                lineNumber: 537,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: idx.text
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                lineNumber: 538,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                        lineNumber: 536,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 535,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 523,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, Math.random(), false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-3 empty-header-item border-t ${cartItemCount === 0 ? 'hidden' : 'block'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/pages/ecommerce/checkout/",
                                                                className: "w-full ti-btn ti-btn-primary-full p-2",
                                                                children: "Proceed to checkout"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-[3rem] empty-item ${cartItemCount === 0 ? 'block' : 'hidden'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "!w-[4rem] !h-[4rem] !leading-[4rem] rounded-[50%] avatar bg-warning/10 !text-warning",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ri-shopping-cart-2-line text-[2rem]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 554,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: "font-bold mb-1 mt-3 text-[1rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50",
                                                                    children: "Your Cart is Empty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mb-3 !font-normal text-[0.8125rem] block text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50",
                                                                    children: "Add some items to make me happy :)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/pages/ecommerce/products/",
                                                                    className: "ti-btn ti-btn-primary btn-wave ti-btn-wave btn-sm m-1 !text-[0.75rem] !py-[0.25rem] !px-[0.5rem]",
                                                                    "data-abc": "true",
                                                                    children: [
                                                                        "continue shopping ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "bi bi-arrow-right ms-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 560,
                                                                            columnNumber: 59
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!block [--placement:bottom-right]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "dropdown-notification",
                                                type: "button",
                                                className: "hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bx bx-bell header-link-icon  text-[1.125rem]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex absolute h-5 w-5 -top-[0.25rem] end-0  -me-[0.6rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-slow-ping absolute inline-flex -top-[2px] -start-[2px] h-full w-full rounded-full bg-secondary/40 opacity-75"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative inline-flex justify-center items-center rounded-full  h-[14.7px] w-[14px] bg-secondary text-[0.625rem] text-white",
                                                                id: "notification-icon-badge",
                                                                children: notifications.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0",
                                                "aria-labelledby": "dropdown-notification",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold ",
                                                                children: "Notifications"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[0.75em] py-[0.25rem/2] px-[0.45rem] font-[600] rounded-sm bg-secondary/10 text-secondary",
                                                                id: "notifiation-data",
                                                                children: `${notifications.length} Unread`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dropdown-divider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-none !m-0 !p-0 end-0",
                                                        id: "header-notification-scroll",
                                                        children: notifications.map((idx, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "ti-dropdown-item dropdown-item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pe-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-flex text-${idx.color2} justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem] ${idx.color} !rounded-[50%]`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `ti ti-${idx.icon} text-[1.125rem]`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 593,
                                                                                    columnNumber: 189
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 592,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grow flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mb-0 text-defaulttextcolor dark:text-white text-[0.8125rem] font-semibold",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                href: "/pages/notifications/",
                                                                                                children: [
                                                                                                    idx.class,
                                                                                                    " ",
                                                                                                    idx.class2
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                                lineNumber: 598,
                                                                                                columnNumber: 120
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                            lineNumber: 598,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text",
                                                                                            children: idx.data
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                            lineNumber: 600,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 597,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        "aria-label": "anchor",
                                                                                        href: "#!",
                                                                                        scroll: false,
                                                                                        className: "min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1",
                                                                                        onClick: (event)=>handleNotificationClose(index, event),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ti ti-x text-[1rem]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                            lineNumber: 603,
                                                                                            columnNumber: 223
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                        lineNumber: 603,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 602,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, Math.random(), false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 empty-header-item1 border-t mt-2 ${notifications.length === 0 ? 'hidden' : 'block'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/pages/notifications/",
                                                                className: "ti-btn ti-btn-primary-full !m-0 w-full p-2",
                                                                children: "View All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-[3rem] empty-item1 ${notifications.length === 0 ? 'block' : 'hidden'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "!h-[4rem]  !w-[4rem] avatar !leading-[4rem] !rounded-full !bg-secondary/10 !text-secondary",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ri-notification-off-line text-[2rem]  "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: "font-semibold mt-3 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[1rem]",
                                                                    children: "No New Notifications"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element header-apps dark:text-[#8c9097] dark:text-white/50 py-[1rem] md:px-[0.65rem] px-2 hs-dropdown ti-dropdown md:!block !hidden [--placement:bottom-left]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "button",
                                                id: "dropdown-apps",
                                                type: "button",
                                                className: "hs-dropdown-toggle ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bx bx-grid-alt header-link-icon text-[1.125rem]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 629,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "main-header-dropdown !-mt-3 hs-dropdown-menu ti-dropdown-menu !w-[22rem] border-0 border-defaultborder   hidden",
                                                "aria-labelledby": "dropdown-apps",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-0 text-defaulttextcolor text-[1.0625rem]  font-semibold",
                                                                children: "Related Apps"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dropdown-divider mb-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10 main-header-shortcuts p-2",
                                                        id: "header-shortcut-scroll",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/figma.png`,
                                                                                    alt: "figma",
                                                                                    className: "!h-[1.75rem] !w-[1.75rem] text-2xl avatar text-primary flex justify-center items-center mx-auto"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 649,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                    children: "Figma"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                            lineNumber: 648,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/microsoft-powerpoint.png`,
                                                                                alt: "miscrosoft",
                                                                                className: "leading-[1.75] text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 657,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Power Point"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 656,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/microsoft-word.png`,
                                                                                alt: "miscrodoftword",
                                                                                className: "leading-none   text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "MS Word"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 667,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/calender.png`,
                                                                                alt: "calander",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 672,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Calendar"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 674,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 671,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/sketch.png`,
                                                                                alt: "apps",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 679,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Sketch"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 681,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 677,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/google-docs.png`,
                                                                                alt: "docs",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 686,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Docs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 688,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/google.png`,
                                                                                alt: "google",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 693,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Google"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 695,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 691,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/translate.png`,
                                                                                alt: "translate",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 700,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Translate"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 699,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#!",
                                                                        scroll: false,
                                                                        className: "p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/apps/google-sheets.png`,
                                                                                alt: "sheets",
                                                                                className: "leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 707,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[0.75rem] text-defaulttextcolor dark:text-white",
                                                                                children: "Sheets"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                                lineNumber: 709,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                    lineNumber: 705,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 first:pt-0 border-t",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "w-full ti-btn ti-btn-primary-full p-2 !m-0",
                                                            href: "#!",
                                                            scroll: false,
                                                            children: "View All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element header-fullscreen py-[1rem] md:px-[0.65rem] px-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "anchor",
                                            onClick: ()=>toggleFullscreen(),
                                            className: "inline-flex flex-shrink-0 justify-center items-center gap-2  !rounded-full font-medium dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                                            children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-exit-fullscreen full-screen-close header-link-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 729,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-fullscreen full-screen-open header-link-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 731,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                            lineNumber: 723,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "dropdown-profile",
                                                type: "button",
                                                className: "hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: "inline-block rounded-full ",
                                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/faces/9.jpg`,
                                                    width: "32",
                                                    height: "32",
                                                    alt: "Image Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 737,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:block hidden dropdown-profile",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ",
                                                        children: "Json Taylor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ",
                                                        children: "Web Designer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 741,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end",
                                                "aria-labelledby": "dropdown-profile",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem]",
                                                                href: "/pages/profile/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 752,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Profile"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] ",
                                                                href: "/pages/email/mail-app/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-inbox text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 756,
                                                                        columnNumber: 137
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Inbox ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "!py-1 !px-[0.45rem] !font-semibold !rounded-sm text-success text-[0.75em] bg-success/10 ms-auto",
                                                                        children: "25"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 757,
                                                                        columnNumber: 107
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 756,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem]",
                                                                href: "/pages/todo-list/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-clipboard-check text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 761,
                                                                        columnNumber: 132
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Task Manager"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem]",
                                                                href: "/pages/email/mail-settings/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 142
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Settings"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 763,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] ",
                                                                href: "#!",
                                                                scroll: false,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-wallet text-[1.125rem] me-2 opacity-[0.7 !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 765,
                                                                        columnNumber: 133
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Bal: $7,12,950"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex",
                                                                href: "/pages/chat/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-headset text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 767,
                                                                        columnNumber: 140
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Support"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 767,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex",
                                                                href: "/authentication/sign-in/signin-cover/",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ti ti-logout text-[1.125rem] me-2 opacity-[0.7] !inline-flex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 165
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Log Out"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-element md:px-[0.48rem]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "button",
                                            type: "button",
                                            className: "hs-dropdown-toggle switcher-icon inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium  align-middle transition-all text-xs dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                                            "data-hs-overlay": "#hs-overlay-switcher",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-cog header-link-icon animate-spin-slow"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                                lineNumber: 778,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                            lineNumber: 775,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                        lineNumber: 774,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$modal$2d$search$2f$modalsearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
                lineNumber: 785,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx",
        lineNumber: 359,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "aGIZ50FgcHfiTUWEaQoZbfZ+K50=");
_c = Header;
const mapStateToProps = (state)=>({
        local_varaiable: state
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, {
    ThemeChanger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"]
})(Header);
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/action.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/exports.js [app-client] (ecmascript)");
;
;
;
;
;
function Menuloop({ local_varaiable, MenuItems, toggleSidemenu, level, HoverToggleInnerMenuFn }) {
    const handleClick = (event)=>{
        // Your logic here
        event.preventDefault(); // Prevents the default anchor behavior (navigation)
    // ... other logic you want to perform on click
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "#!",
                scroll: false,
                className: `side-menu__item ${MenuItems?.selected ? "active" : ""}`,
                onClick: (event)=>{
                    event.preventDefault();
                    toggleSidemenu(event, MenuItems);
                },
                onMouseEnter: (event)=>HoverToggleInnerMenuFn(event, MenuItems),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `hs-tooltip inline-block [--placement:right] leading-none ${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'hidden'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "hs-tooltip-toggle  inline-flex justify-center items-center",
                            children: [
                                MenuItems.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-black text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700",
                                    role: "tooltip",
                                    children: MenuItems.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                            lineNumber: 20,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    local_varaiable?.dataVerticalStyle != "doublemenu" ? MenuItems.icon : "",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${level == 1 ? "side-menu__label" : ""}`,
                        children: [
                            " ",
                            MenuItems.title,
                            " ",
                            MenuItems.badgetxt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: MenuItems.class,
                                children: [
                                    " ",
                                    MenuItems.badgetxt,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                lineNumber: 29,
                                columnNumber: 113
                            }, this) : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fe fe-chevron-right side-menu__angle"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `slide-menu child${level}  ${MenuItems.active ? 'double-menu-active' : ''} ${MenuItems?.dirchange ? "force-left" : ""} `,
                style: MenuItems.active ? {
                    display: "block"
                } : {
                    display: "none"
                },
                children: [
                    level <= 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "slide side-menu__label1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#!",
                            scroll: false,
                            children: MenuItems.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                        lineNumber: 37,
                        columnNumber: 23
                    }, this) : "",
                    MenuItems.children.map((firstlevel, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${firstlevel.menutitle ? 'slide__category' : ''} ${firstlevel?.type == 'empty' ? 'slide' : ''} ${firstlevel?.type == 'link' ? 'slide' : ''} ${firstlevel?.type == 'sub' ? 'slide has-sub' : ''} ${firstlevel?.active ? 'open' : ''} ${firstlevel?.selected ? 'active' : ''}`,
                            children: [
                                firstlevel.type === "link" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: firstlevel.path,
                                    className: `side-menu__item ${firstlevel.selected ? 'active' : ''}`,
                                    children: [
                                        firstlevel.icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "",
                                            children: [
                                                " ",
                                                firstlevel.title,
                                                " ",
                                                firstlevel.badgetxt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: firstlevel.class,
                                                    children: [
                                                        " ",
                                                        firstlevel.badgetxt
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 80
                                                }, this) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this) : "",
                                firstlevel.type === "empty" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#!",
                                    className: "side-menu__item",
                                    onClick: handleClick,
                                    children: [
                                        " ",
                                        firstlevel.icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "",
                                            children: [
                                                " ",
                                                firstlevel.title,
                                                " ",
                                                firstlevel.badgetxt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: firstlevel.class,
                                                    children: [
                                                        " ",
                                                        firstlevel.badgetxt,
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 162
                                                }, this) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                            lineNumber: 52,
                                            columnNumber: 99
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this) : "",
                                firstlevel.type === "sub" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menuloop, {
                                    MenuItems: firstlevel,
                                    toggleSidemenu: toggleSidemenu,
                                    HoverToggleInnerMenuFn: HoverToggleInnerMenuFn,
                                    level: level + 1
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this) : ''
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Menuloop;
const mapStateToProps = (state)=>({
        local_varaiable: state
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, {
    ThemeChanger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"]
})(Menuloop);
var _c;
__turbopack_context__.k.register(_c, "Menuloop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/action.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$next$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/next.config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$simplebar$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/simplebar-react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$menuloop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/menuloop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/nav.tsx [app-client] (ecmascript)");
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
;
;
const Sidebar = ({ local_varaiable, ThemeChanger })=>{
    _s();
    const [menuitems, setMenuitems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"]);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    function closeMenu() {
        const closeMenudata = (items)=>{
            items?.forEach((item)=>{
                item.active = false;
                closeMenudata(item.children);
            });
        };
        closeMenudata(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"]);
        setMenuitems((arr)=>[
                ...arr
            ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            window.addEventListener('resize', menuResizeFn);
            window.addEventListener('resize', checkHoriMenu);
            const mainContent = document.querySelector(".main-content");
            if (window.innerWidth <= 992) {
                if (mainContent) {
                    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
                    ThemeChanger({
                        ...theme,
                        dataToggled: "close"
                    });
                } else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
                    closeMenu();
                }
            }
            mainContent.addEventListener('click', menuClose);
            return ({
                "Sidebar.useEffect": ()=>{
                    window.removeEventListener("resize", menuResizeFn);
                    window.removeEventListener('resize', checkHoriMenu);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    function Onhover() {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay != 'open') {
            ThemeChanger({
                ...theme,
                "iconOverlay": "open"
            });
        }
    }
    function Outhover() {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay == 'open') {
            ThemeChanger({
                ...theme,
                "iconOverlay": ""
            });
        }
    }
    function menuClose() {
        ;
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if (window.innerWidth <= 992) {
            ThemeChanger({
                ...theme,
                dataToggled: "close"
            });
        }
        const overlayElement = document.querySelector("#responsive-overlay");
        if (overlayElement) {
            overlayElement.classList.remove("active");
        }
        if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
            closeMenu();
        }
    }
    const WindowPreSize = ("TURBOPACK compile-time truthy", 1) ? [
        window.innerWidth
    ] : "TURBOPACK unreachable";
    function menuResizeFn() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        WindowPreSize.push(window.innerWidth);
        if (WindowPreSize.length > 2) {
            WindowPreSize.shift();
        }
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        const currentWidth = WindowPreSize[WindowPreSize.length - 1];
        const prevWidth = WindowPreSize[WindowPreSize.length - 2];
        if (WindowPreSize.length > 1) {
            if (currentWidth < 992 && prevWidth >= 992) {
                // less than 992;
                ThemeChanger({
                    ...theme,
                    dataToggled: "close"
                });
            }
            if (currentWidth >= 992 && prevWidth < 992) {
                // greater than 992
                ThemeChanger({
                    ...theme,
                    dataToggled: theme.dataVerticalStyle === "doublemenu" ? "double-menu-open" : ""
                });
            }
        }
    }
    function switcherArrowFn() {
        // Used to remove is-expanded class and remove class on clicking arrow buttons
        function slideClick() {
            const slide = document.querySelectorAll(".slide");
            const slideMenu = document.querySelectorAll(".slide-menu");
            slide.forEach((element)=>{
                if (element.classList.contains("is-expanded")) {
                    element.classList.remove("is-expanded");
                }
            });
            slideMenu.forEach((element)=>{
                if (element.classList.contains("open")) {
                    element.classList.remove("open");
                    element.style.display = "none";
                }
            });
        }
        slideClick();
    }
    const checkHoriMenu = ()=>{
        const menuNav = document.querySelector(".main-menu");
        const mainContainer1 = document.querySelector(".main-sidebar");
        const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0]));
        const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split("px")[0]));
        const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
        // Show/Hide the arrows
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {} else {
            menuNav.style.marginLeft = "0px";
            menuNav.style.marginRight = "0px";
            menuNav.style.marginInlineStart = "0px";
        }
        if (!(document.querySelector("html")?.getAttribute("dir") === "rtl")) {
            // LTR check the width and adjust the menu in screen
            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (Math.abs(check) < Math.abs(marginLeftValue)) {
                    menuNav.style.marginLeft = -check + "px";
                }
            }
        } else {
            // RTL check the width and adjust the menu in screen
            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (Math.abs(check) < Math.abs(marginRightValue)) {
                    menuNav.style.marginRight = -check + "px";
                }
            }
        }
    };
    function slideRight() {
        const menuNav = document.querySelector(".main-menu");
        const mainContainer1 = document.querySelector(".main-sidebar");
        if (menuNav && mainContainer1) {
            const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
            const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0]));
            const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
            let mainContainer1Width = mainContainer1.offsetWidth;
            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
                    if (Math.abs(check) > Math.abs(marginLeftValue)) {
                        menuNav.style.marginInlineEnd = "0";
                        if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
                            mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
                            const slideRightButton = document.querySelector("#slide-right");
                            if (slideRightButton) {
                                slideRightButton.classList.add("hidden");
                            }
                        }
                        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
                        const slideRightButton = document.querySelector("#slide-right");
                        if (slideRightButton) {
                            slideRightButton.classList.remove("hidden");
                        }
                    }
                } else {
                    if (Math.abs(check) > Math.abs(marginRightValue)) {
                        menuNav.style.marginInlineEnd = "0";
                        if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
                            mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
                            const slideRightButton = document.querySelector("#slide-right");
                            if (slideRightButton) {
                                slideRightButton.classList.add("hidden");
                            }
                        }
                        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
                        const slideLeftButton = document.querySelector("#slide-left");
                        if (slideLeftButton) {
                            slideLeftButton.classList.remove("hidden");
                        }
                    }
                }
            }
            const element = document.querySelector(".main-menu > .slide.open");
            const element1 = document.querySelector(".main-menu > .slide.open > ul");
            if (element) {
                element.classList.remove("active");
            }
            if (element1) {
                element1.style.display = "none";
            }
        }
        switcherArrowFn();
        checkHoriMenu();
    }
    function slideLeft() {
        const menuNav = document.querySelector(".main-menu");
        const mainContainer1 = document.querySelector(".main-sidebar");
        if (menuNav && mainContainer1) {
            const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
            const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0]));
            const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
            let mainContainer1Width = mainContainer1.offsetWidth;
            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
                    if (Math.abs(check) <= Math.abs(marginLeftValue)) {
                        menuNav.style.marginInlineStart = "0px";
                    }
                } else {
                    if (Math.abs(check) > Math.abs(marginRightValue)) {
                        menuNav.style.marginInlineStart = "0";
                        if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
                            mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
                            const slideRightButton = document.querySelector("#slide-right");
                            if (slideRightButton) {
                                slideRightButton.classList.add("hidden");
                            }
                        }
                        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
                        const slideLeftButton = document.querySelector("#slide-left");
                        if (slideLeftButton) {
                            slideLeftButton.classList.remove("hidden");
                        }
                    }
                }
            }
            const element = document.querySelector(".main-menu > .slide.open");
            const element1 = document.querySelector(".main-menu > .slide.open > ul");
            if (element) {
                element.classList.remove("active");
            }
            if (element1) {
                element1.style.display = "none";
            }
        }
        switcherArrowFn();
    }
    const Topup = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
                const Scolls = document.querySelectorAll(".app-sidebar");
                Scolls.forEach((e)=>{
                    e.classList.add("sticky-pin");
                });
            } else {
                const Scolls = document.querySelectorAll(".app-sidebar");
                Scolls.forEach((e)=>{
                    e.classList.remove("sticky-pin");
                });
            }
        }
    };
    if ("TURBOPACK compile-time truthy", 1) {
        window.addEventListener("scroll", Topup);
    }
    const level = 0;
    let hasParent = false;
    let hasParentLevel = 0;
    function setSubmenu(event, targetObject, MenuItems = menuitems) {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
            if (!event?.ctrlKey) {
                for (const item of MenuItems){
                    if (item === targetObject) {
                        item.active = true;
                        item.selected = true;
                        setMenuAncestorsActive(item);
                    } else if (!item.active && !item.selected) {
                        item.active = false; // Set active to false for items not matching the target
                        item.selected = false; // Set active to false for items not matching the target
                    } else {
                        removeActiveOtherMenus(item);
                    }
                    if (item.children && item.children.length > 0) {
                        setSubmenu(event, targetObject, item.children);
                    }
                }
            }
        }
        setMenuitems((arr)=>[
                ...arr
            ]);
    }
    function getParentObject(obj, childObject) {
        for(const key in obj){
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
                    return obj; // Return the parent object
                }
                if (typeof obj[key] === 'object') {
                    const parentObject = getParentObject(obj[key], childObject);
                    if (parentObject !== null) {
                        return parentObject;
                    }
                }
            }
        }
        return null; // Object not found
    }
    function setMenuAncestorsActive(targetObject) {
        const parent = getParentObject(menuitems, targetObject);
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if (parent) {
            if (hasParentLevel > 2) {
                hasParent = true;
            }
            parent.active = true;
            parent.selected = true;
            hasParentLevel += 1;
            setMenuAncestorsActive(parent);
        } else if (!hasParent) {
            if (theme.dataVerticalStyle == 'doublemenu') {
                ThemeChanger({
                    ...theme,
                    dataToggled: "double-menu-close"
                });
            }
        }
    }
    function removeActiveOtherMenus(item) {
        if (item) {
            if (Array.isArray(item)) {
                for (const val of item){
                    val.active = false;
                    val.selected = false;
                }
            }
            item.active = false;
            item.selected = false;
            if (item.children && item.children.length > 0) {
                removeActiveOtherMenus(item.children);
            }
        } else {}
    }
    function setMenuUsingUrl(currentPath) {
        hasParent = false;
        hasParentLevel = 1;
        // Check current url and trigger the setSidemenu method to active the menu.
        const setSubmenuRecursively = (items)=>{
            items?.forEach((item)=>{
                if (item.path == '') {} else if (item.path === currentPath) {
                    setSubmenu(null, item);
                }
                setSubmenuRecursively(item.children);
            });
        };
        setSubmenuRecursively(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"]);
    }
    const [previousUrl, setPreviousUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            // Select the target element
            const targetElement = document.documentElement;
            // Create a MutationObserver instance
            const observer = new MutationObserver(handleAttributeChange);
            // Configure the observer to watch for attribute changes
            const config = {
                attributes: true
            };
            // Start observing the target element
            observer.observe(targetElement, config);
            let currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
            if (currentPath !== previousUrl) {
                setMenuUsingUrl(currentPath);
                setPreviousUrl(currentPath);
            }
        }
    }["Sidebar.useEffect"], [
        pathname
    ]);
    function toggleSidemenu(event, targetObject, MenuItems = menuitems) {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        let element = event.target;
        if (theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover" || window.innerWidth < 992 || theme.dataNavLayout != "horizontal" && theme.dataToggled != "icon-hover-closed" && theme.dataToggled != "menu-hover-closed") {
            // {
            for (const item of MenuItems){
                if (item === targetObject) {
                    if (theme.dataVerticalStyle == 'doublemenu' && item.active) {
                        return;
                    }
                    item.active = !item.active;
                    if (item.active) {
                        closeOtherMenus(MenuItems, item);
                    } else {
                        if (theme.dataVerticalStyle == 'doublemenu') {
                            ThemeChanger({
                                ...theme,
                                dataToggled: "double-menu-close"
                            });
                        }
                    }
                    setAncestorsActive(MenuItems, item);
                } else if (!item.active) {
                    if (theme.dataVerticalStyle != 'doublemenu') {
                        item.active = false; // Set active to false for items not matching the target
                    }
                }
                if (item.children && item.children.length > 0) {
                    toggleSidemenu(event, targetObject, item.children);
                }
            }
            if (targetObject?.children && targetObject.active) {
                if (theme.dataVerticalStyle == 'doublemenu' && theme.dataToggled != 'double-menu-open') {
                    ThemeChanger({
                        ...theme,
                        dataToggled: "double-menu-open"
                    });
                }
            }
            if (element && theme.dataNavLayout == 'horizontal' && (theme.dataNavStyle == 'menu-click' || theme.dataNavStyle == 'icon-click')) {
                const listItem = element.closest("li");
                if (listItem) {
                    // Find the first sibling <ul> element
                    const siblingUL = listItem.querySelector("ul");
                    let outterUlWidth = 0;
                    let listItemUL = listItem.closest('ul:not(.main-menu)');
                    while(listItemUL){
                        listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
                        if (listItemUL) {
                            outterUlWidth += listItemUL.clientWidth;
                        }
                    }
                    if (siblingUL) {
                        // You've found the sibling <ul> element
                        let siblingULRect = listItem.getBoundingClientRect();
                        if (theme.dir == 'rtl') {
                            if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                                targetObject.dirchange = true;
                            } else {
                                targetObject.dirchange = false;
                            }
                        } else {
                            if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                                targetObject.dirchange = true;
                            } else {
                                targetObject.dirchange = false;
                            }
                        }
                    }
                }
            }
        }
        setMenuitems((arr)=>[
                ...arr
            ]);
    }
    function setAncestorsActive(MenuItems, targetObject) {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        const parent = findParent(MenuItems, targetObject);
        if (parent) {
            parent.active = true;
            if (parent.active) {
                ThemeChanger({
                    ...theme,
                    dataToggled: "double-menu-open"
                });
            }
            setAncestorsActive(MenuItems, parent);
        } else {
            if (theme.dataVerticalStyle == "doublemenu") {
                ThemeChanger({
                    ...theme,
                    dataToggled: "double-menu-close"
                });
            }
        }
    }
    function closeOtherMenus(MenuItems, targetObject) {
        for (const item of MenuItems){
            if (item !== targetObject) {
                item.active = false;
                if (item.children && item.children.length > 0) {
                    closeOtherMenus(item.children, targetObject);
                }
            }
        }
    }
    function findParent(MenuItems, targetObject) {
        for (const item of MenuItems){
            if (item.children && item.children.includes(targetObject)) {
                return item;
            }
            if (item.children && item.children.length > 0) {
                const parent = findParent(MenuItems = item.children, targetObject);
                if (parent) {
                    return parent;
                }
            }
        }
        return null;
    }
    const Sideclick = ()=>{
        if (window.innerWidth > 992) {
            const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
            if (theme.iconOverlay != "open") {
                ThemeChanger({
                    ...theme,
                    iconOverlay: "open"
                });
            }
        }
    };
    function HoverToggleInnerMenuFn(event, item) {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        let element = event.target;
        if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
            const listItem = element.closest("li");
            if (listItem) {
                // Find the first sibling <ul> element
                const siblingUL = listItem.querySelector("ul");
                let outterUlWidth = 0;
                let listItemUL = listItem.closest("ul:not(.main-menu)");
                while(listItemUL){
                    listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
                    if (listItemUL) {
                        outterUlWidth += listItemUL.clientWidth;
                    }
                }
                if (siblingUL) {
                    // You've found the sibling <ul> element
                    let siblingULRect = listItem.getBoundingClientRect();
                    if (theme.dir == "rtl") {
                        if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                            item.dirchange = true;
                        } else {
                            item.dirchange = false;
                        }
                    } else {
                        if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                            item.dirchange = true;
                        } else {
                            item.dirchange = false;
                        }
                    }
                }
            }
        }
    }
    function handleAttributeChange(mutationsList) {
        for (const mutation of mutationsList){
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
                const newValue = mutation.target.getAttribute('data-nav-layout');
                if (newValue == 'vertical') {
                    let currentPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
                    currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
                    setMenuUsingUrl(currentPath);
                } else {
                    closeMenu();
                }
            }
        }
    }
    const handleClick = (event)=>{
        // Your logic here
        event.preventDefault(); // Prevents the default anchor behavior (navigation)
    // ... other logic you want to perform on click
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "responsive-overlay",
                onClick: ()=>{
                    menuClose();
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                lineNumber: 633,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "app-sidebar",
                id: "sidebar",
                onMouseOver: ()=>Onhover(),
                onMouseLeave: ()=>Outhover(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "main-sidebar-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboards/crm/",
                            className: "header-logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-logo.png`,
                                    alt: "logo",
                                    className: "main-logo desktop-logo"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 639,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-logo.png`,
                                    alt: "logo",
                                    className: "main-logo toggle-logo"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 640,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-dark.png`,
                                    alt: "logo",
                                    className: "main-logo desktop-dark"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 641,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-dark.png`,
                                    alt: "logo",
                                    className: "main-logo toggle-dark"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 642,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/desktop-white.png`,
                                    alt: "logo",
                                    className: "main-logo desktop-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 643,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/assets/images/brand-logos/toggle-white.png`,
                                    alt: "logo",
                                    className: "main-logo toggle-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 644,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                            lineNumber: 638,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                        lineNumber: 637,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$simplebar$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "main-sidebar ",
                        id: "sidebar-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "main-menu-container nav nav-pills flex-column sub-open",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slide-left",
                                    id: "slide-left",
                                    onClick: ()=>{
                                        slideLeft();
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#7b8191",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                            lineNumber: 653,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                        lineNumber: 651,
                                        columnNumber: 85
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 651,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "main-menu",
                                    onClick: ()=>Sideclick(),
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"].map((levelone, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `${levelone.menutitle ? 'slide__category' : ''} ${levelone.type === 'link' ? 'slide' : ''}
                                               ${levelone.type === 'sub' ? 'slide has-sub' : ''} ${levelone?.active ? 'open' : ''} ${levelone?.selected ? 'active' : ''}`,
                                                children: [
                                                    levelone.menutitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "category-name",
                                                        children: levelone.menutitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)) : "",
                                                    levelone.type === "link" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: levelone.path,
                                                        className: `side-menu__item ${levelone.selected ? 'active' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `hs-tooltip inline-block [--placement:right] leading-none ${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'hidden'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "hs-tooltip-toggle  inline-flex justify-center items-center                  ",
                                                                    children: [
                                                                        levelone.icon,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-black text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700",
                                                                            role: "tooltip",
                                                                            children: levelone.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 15
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 14
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            local_varaiable.dataVerticalStyle != "doublemenu" ? levelone.icon : "",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "side-menu__label",
                                                                children: [
                                                                    levelone.title,
                                                                    " ",
                                                                    levelone.badgetxt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: levelone.class,
                                                                        children: [
                                                                            " ",
                                                                            levelone.badgetxt
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                        lineNumber: 681,
                                                                        columnNumber: 87
                                                                    }, ("TURBOPACK compile-time value", void 0)) : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)) : "",
                                                    levelone.type === "empty" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#!",
                                                        className: "side-menu__item",
                                                        onClick: handleClick,
                                                        children: [
                                                            levelone.icon,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "",
                                                                children: [
                                                                    " ",
                                                                    levelone.title,
                                                                    " ",
                                                                    levelone.badgetxt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: levelone.class,
                                                                        children: [
                                                                            levelone.badgetxt,
                                                                            " "
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)) : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)) : "",
                                                    levelone.type === "sub" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$menuloop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        MenuItems: levelone,
                                                        level: level + 1,
                                                        toggleSidemenu: toggleSidemenu,
                                                        HoverToggleInnerMenuFn: HoverToggleInnerMenuFn
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)) : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                                lineNumber: 659,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                            lineNumber: 658,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 656,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slide-right",
                                    onClick: ()=>{
                                        slideRight();
                                    },
                                    id: "slide-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#7b8191",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                            lineNumber: 708,
                                            columnNumber: 107
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                        lineNumber: 708,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                                    lineNumber: 707,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                            lineNumber: 650,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                        lineNumber: 649,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
                lineNumber: 635,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx",
        lineNumber: 631,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "AdzE9VlFt30zrdrDzeoU16AyL8I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const mapStateToProps = (state)=>({
        local_varaiable: state
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, {
    ThemeChanger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"]
})(Sidebar);
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/action.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/data/switcherdata/switcherdata.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Switcher = ({ local_varaiable, ThemeChanger })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "hs-overlay-switcher",
            className: "hs-overlay hidden ti-offcanvas ti-offcanvas-right",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ti-offcanvas-header z-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "ti-offcanvas-title !text-[1.25rem]",
                            children: "Switcher"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ti-btn flex-shrink-0 p-0  transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10",
                            "data-hs-overlay": "#hs-overlay-switcher",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close modal"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-close-circle-line leading-none text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ti-offcanvas-body !p-0 !border-b dark:border-white/10 z-10 relative !h-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex rtl:space-x-reverse",
                        "aria-label": "Tabs",
                        role: "tablist",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  active",
                                id: "switcher-item-1",
                                "data-hs-tab": "#switcher-1",
                                "aria-controls": "switcher-1",
                                role: "tab",
                                children: "Theme Style"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px  bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  dark:hover:text-gray-300",
                                id: "switcher-item-2",
                                "data-hs-tab": "#switcher-2",
                                "aria-controls": "switcher-2",
                                role: "tab",
                                children: "Theme Colors"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ti-offcanvas-body !px-0",
                    id: "switcher-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "switcher-1",
                            role: "tabpanel",
                            "aria-labelledby": "switcher-item-1",
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Theme Color Mode:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "theme-style",
                                                            className: "ti-form-radio",
                                                            id: "switcher-light-theme",
                                                            checked: local_varaiable.class != "dark",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-light-theme",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Light"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "theme-style",
                                                            className: "ti-form-radio",
                                                            id: "switcher-dark-theme",
                                                            checked: local_varaiable.class == "dark",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dark"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-dark-theme",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Dark"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Directions:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3  switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "direction",
                                                            className: "ti-form-radio",
                                                            id: "switcher-ltr",
                                                            checked: local_varaiable.dir == "ltr",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ltr"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-ltr",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "LTR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "direction",
                                                            className: "ti-form-radio",
                                                            id: "switcher-rtl",
                                                            checked: local_varaiable.dir == "rtl",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rtl"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-rtl",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "RTL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Navigation Styles:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3  switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-style",
                                                            className: "ti-form-radio",
                                                            id: "switcher-vertical",
                                                            checked: local_varaiable.dataNavLayout == "vertical",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vertical"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-vertical",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Vertical"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-style",
                                                            className: "ti-form-radio",
                                                            id: "switcher-horizontal",
                                                            checked: local_varaiable.dataNavLayout == "horizontal",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalClick"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-horizontal",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Horizontal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Navigation Menu Style:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-data-menu-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-menu-click",
                                                            checked: local_varaiable.dataNavStyle == "menu-click",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menuclick"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-menu-click",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Menu Click"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-data-menu-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-menu-hover",
                                                            checked: local_varaiable.dataNavStyle == "menu-hover",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuHover"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-menu-hover",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Menu Hover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-data-menu-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-icon-click",
                                                            checked: local_varaiable.dataNavStyle == "icon-click",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClick"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-icon-click",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Icon Click"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "navigation-data-menu-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-icon-hover",
                                                            checked: local_varaiable.dataNavStyle == "icon-hover",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHover"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-icon-hover",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Icon Hover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 text-secondary text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "me-2",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 62
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Works same for both Vertical and Horizontal"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " sidemenu-layout-styles",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Sidemenu Layout Syles:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-default-menu",
                                                            defaultChecked: true,
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Defaultmenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-default-menu",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ",
                                                            children: "Default Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-closed-menu",
                                                            checked: local_varaiable.dataToggled == "close-menu-close",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Closedmenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-closed-menu",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ",
                                                            children: "Closed Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-icontext-menu",
                                                            checked: local_varaiable.dataToggled == "icon-text-close",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconText"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-icontext-menu",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ",
                                                            children: "Icon Text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-icon-overlay",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconOverayFn"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-icon-overlay",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ",
                                                            children: "Icon Overlay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-detached",
                                                            checked: local_varaiable.dataToggled == "detached-close",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetachedFn"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-detached",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ",
                                                            children: "Detached"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "sidemenu-layout-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-double-menu",
                                                            checked: local_varaiable.dataVerticalStyle == "doublemenu",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubletFn"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-double-menu",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Double Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 text-secondary text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "me-2",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 62
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Navigation menu styles won't work here."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Page Styles:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3  switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-page-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-regular",
                                                            checked: local_varaiable.dataPageStyle == "regular",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Regular"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-regular",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Regular"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-page-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-classic",
                                                            checked: local_varaiable.dataPageStyle == "classic",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Classic"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-classic",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Classic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-page-styles",
                                                            className: "ti-form-radio",
                                                            id: "switcher-modern",
                                                            checked: local_varaiable.dataPageStyle == "modern",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modern"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-modern",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: " Modern"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Layout Width Styles:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "layout-width",
                                                            className: "ti-form-radio",
                                                            id: "switcher-full-width",
                                                            checked: local_varaiable.dataWidth == "fullwidth",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fullwidth"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-full-width",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "FullWidth"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "layout-width",
                                                            className: "ti-form-radio",
                                                            id: "switcher-boxed",
                                                            checked: local_varaiable.dataWidth == "boxed",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Boxed"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-boxed",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Boxed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Menu Positions:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3  switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-menu-positions",
                                                            className: "ti-form-radio",
                                                            id: "switcher-menu-fixed",
                                                            checked: local_varaiable.dataMenuPosition == "fixed",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixedMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-menu-fixed",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Fixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-menu-positions",
                                                            className: "ti-form-radio",
                                                            id: "switcher-menu-scroll",
                                                            checked: local_varaiable.dataMenuPosition == "scrollable",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-menu-scroll",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Scrollable "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Header Positions:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 switcher-style",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-header-positions",
                                                            className: "ti-form-radio",
                                                            id: "switcher-header-fixed",
                                                            checked: local_varaiable.dataHeaderPosition == "fixed",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headerpostionfixed"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-header-fixed",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Fixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "data-header-positions",
                                                            className: "ti-form-radio",
                                                            id: "switcher-header-scroll",
                                                            checked: local_varaiable.dataHeaderPosition == "scrollable",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headerpostionscroll"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "switcher-header-scroll",
                                                            className: "text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold",
                                                            children: "Scrollable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "switcher-2",
                            className: "hidden",
                            role: "tabpanel",
                            "aria-labelledby": "switcher-item-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "theme-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Menu Colors:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex switcher-style space-x-3 rtl:space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-white",
                                                            type: "radio",
                                                            name: "menu-colors",
                                                            checked: local_varaiable.dataMenuStyles == "light",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-menu-light",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Light Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-dark",
                                                            type: "radio",
                                                            name: "menu-colors",
                                                            checked: local_varaiable.dataMenuStyles == "dark",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-menu-dark",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Dark Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-primary",
                                                            type: "radio",
                                                            name: "menu-colors",
                                                            checked: local_varaiable.dataMenuStyles == "color",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-menu-primary",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Color Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-gradient",
                                                            type: "radio",
                                                            name: "menu-colors",
                                                            checked: local_varaiable.dataMenuStyles == "gradient",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-menu-gradient",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradientMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Gradient Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-transparent",
                                                            type: "radio",
                                                            name: "menu-colors",
                                                            checked: local_varaiable.dataMenuStyles == "transparent",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-menu-transparent",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transparentMenu"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Transparent Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "me-2",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 89
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "If you want to change color Menu dynamically change from below Theme Primary color picker."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "theme-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Header Colors:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex switcher-style space-x-3 rtl:space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-white !border",
                                                            type: "radio",
                                                            name: "header-colors",
                                                            checked: local_varaiable.dataHeaderStyles == "light",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-header-light",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightHeader"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Light Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-dark",
                                                            type: "radio",
                                                            name: "header-colors",
                                                            checked: local_varaiable.dataHeaderStyles == "dark",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-header-dark",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkHeader"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Dark Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-primary",
                                                            type: "radio",
                                                            name: "header-colors",
                                                            checked: local_varaiable.dataHeaderStyles == "color",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-header-primary",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorHeader"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Color Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-gradient",
                                                            type: "radio",
                                                            name: "header-colors",
                                                            checked: local_varaiable.dataHeaderStyles == "gradient",
                                                            onChange: (_e)=>{},
                                                            id: "switcher-header-gradient",
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradientHeader"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Gradient Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hs-tooltip ti-main-tooltip ti-form-radio switch-select ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "hs-tooltip-toggle ti-form-radio color-input color-transparent",
                                                            type: "radio",
                                                            name: "header-colors",
                                                            id: "switcher-header-transparent",
                                                            checked: local_varaiable.dataHeaderStyles == "transparent",
                                                            onChange: (_e)=>{},
                                                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transparentHeader"](ThemeChanger)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black",
                                                            role: "tooltip",
                                                            children: "Transparent Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "me-2",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 89
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "If you want to change color Header dynamically change from below Theme Primary color picker."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "theme-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Theme Primary:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap switcher-style gap-y-2 gap-x-5 rtl:gap-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-primary-1",
                                                        type: "radio",
                                                        name: "theme-primary",
                                                        checked: local_varaiable.colorPrimaryRgb == '58, 88, 146',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-primary",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor1"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-primary-2",
                                                        type: "radio",
                                                        name: "theme-primary",
                                                        checked: local_varaiable.colorPrimaryRgb == '92, 144 ,163',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-primary1",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor2"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-primary-3",
                                                        type: "radio",
                                                        name: "theme-primary",
                                                        checked: local_varaiable.colorPrimaryRgb == '161, 90 ,223',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-primary2",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor3"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-primary-4",
                                                        type: "radio",
                                                        name: "theme-primary",
                                                        checked: local_varaiable.colorPrimaryRgb == '78, 172, 76',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-primary3",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor4"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-primary-5",
                                                        type: "radio",
                                                        name: "theme-primary",
                                                        checked: local_varaiable.colorPrimaryRgb == '223, 90, 90',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-primary4",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor5"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select ps-0 mt-1 color-primary-light",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "theme-container-primary",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "",
                                                                children: "nano"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pickr-container-primary",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pickr",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "pcr-button",
                                                                    onClick: (ele)=>{
                                                                        if (ele.target.querySelector("input")) {
                                                                            ele.target.querySelector("input").click();
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        theme: local_varaiable,
                                                                        actionfunction: ThemeChanger
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "theme-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Theme Background:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap switcher-style gap-y-2 gap-x-5 rtl:gap-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-bg-1",
                                                        type: "radio",
                                                        name: "theme-background",
                                                        checked: local_varaiable.bodyBg == '34 44 110',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-background",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundColor1"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-bg-2",
                                                        type: "radio",
                                                        name: "theme-background",
                                                        checked: local_varaiable.bodyBg == '22 92 129',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-background1",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundColor2"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-bg-3",
                                                        type: "radio",
                                                        name: "theme-background",
                                                        checked: local_varaiable.bodyBg == '104 51 149',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-background2",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundColor3"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-bg-4",
                                                        type: "radio",
                                                        name: "theme-background",
                                                        checked: local_varaiable.bodyBg == '29 106 56',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-background3",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundColor4"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio color-input color-bg-5",
                                                        type: "radio",
                                                        name: "theme-background",
                                                        checked: local_varaiable.bodyBg == '134 80 34',
                                                        onChange: (_e)=>{},
                                                        id: "switcher-background4",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundColor5"](ThemeChanger)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select ps-0 mt-1 color-bg-transparent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "theme-container-background",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "",
                                                                children: "nano"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pickr-container-background",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pickr",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "pcr-button",
                                                                    onClick: (ele)=>{
                                                                        if (ele.target.querySelector("input")) {
                                                                            ele.target.querySelector("input").click();
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Themebackgroundcolor"], {
                                                                        theme: local_varaiable,
                                                                        actionfunction: ThemeChanger
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "menu-image theme-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "switcher-style-head",
                                            children: "Menu With Background Image:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex switcher-style space-x-3 rtl:space-x-reverse flex-wrap gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio bgimage-input bg-img1",
                                                        type: "radio",
                                                        name: "theme-images",
                                                        id: "switcher-bg-img",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgImage1"](ThemeChanger),
                                                        checked: local_varaiable.colorPrimaryRgb == 'bg-img',
                                                        onChange: (_e)=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio bgimage-input bg-img2",
                                                        type: "radio",
                                                        name: "theme-images",
                                                        id: "switcher-bg-img1",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgImage2"](ThemeChanger),
                                                        checked: local_varaiable.colorPrimaryRgb == 'bg-img1',
                                                        onChange: (_e)=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio bgimage-input bg-img3",
                                                        type: "radio",
                                                        name: "theme-images",
                                                        id: "switcher-bg-img2",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgImage3"](ThemeChanger),
                                                        checked: local_varaiable.colorPrimaryRgb == 'bg-img2',
                                                        onChange: (_e)=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio bgimage-input bg-img4",
                                                        type: "radio",
                                                        name: "theme-images",
                                                        id: "switcher-bg-img3",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgImage4"](ThemeChanger),
                                                        checked: local_varaiable.colorPrimaryRgb == 'bg-img3',
                                                        onChange: (_e)=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ti-form-radio switch-select",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "ti-form-radio bgimage-input bg-img5",
                                                        type: "radio",
                                                        name: "theme-images",
                                                        id: "switcher-bg-img4",
                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgImage5"](ThemeChanger),
                                                        checked: local_varaiable.colorPrimaryRgb == 'bg-img4',
                                                        onChange: (_e)=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ti-offcanvas-footer sm:flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#!",
                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$switcherdata$2f$switcherdata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reset"](ThemeChanger),
                            id: "reset-all",
                            className: "w-full ti-btn ti-btn-danger-full m-1",
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Switcher;
const mapStateToProps = (state)=>({
        local_varaiable: state
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, {
    ThemeChanger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"]
})(Switcher);
var _c;
__turbopack_context__.k.register(_c, "Switcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f$PrelineScript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/PrelineScript.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$backtotop$2f$backtotop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/backtotop/backtotop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/footer/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/header/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/sidebar/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$switcher$2f$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/switcher/switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/action.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/redux/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-redux/es/exports.js [app-client] (ecmascript)");
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
;
;
const Layout = ({ children })=>{
    _s();
    const [MyclassName, setMyClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const Bodyclickk = ()=>{
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
        if (localStorage.getItem("ynexverticalstyles") == "icontext") {
            setMyClass("");
        }
        if (window.innerWidth > 992) {
            if (theme.iconOverlay === 'open') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"])({
                    ...theme,
                    iconOverlay: ""
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$switcher$2f$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                            lineNumber: 36,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main-content",
                                onClick: Bodyclickk,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                            lineNumber: 38,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$backtotop$2f$backtotop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f$PrelineScript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(Layout, "nqP7w454oFp6edMnC7BaJ6FV3ks=");
_c = Layout;
const mapStateToProps = (state)=>({
        local_varaiable: state
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(mapStateToProps, {
    ThemeChanger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$redux$2f$action$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeChanger"]
})(Layout);
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_dharwin_boilerplate_cffcabe2._.js.map