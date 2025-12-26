module.exports = [
"[project]/Desktop/dharwin_boilerplate/shared/data/pages/mail/mailsettingdata.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accountoptions",
    ()=>Accountoptions,
    "Countryoptions",
    ()=>Countryoptions,
    "Languageoptions",
    ()=>Languageoptions,
    "Mailsettingslist",
    ()=>Mailsettingslist,
    "MaxLimitoptions",
    ()=>MaxLimitoptions,
    "Maximumoptions",
    ()=>Maximumoptions,
    "ProfileService",
    ()=>ProfileService
]);
"use client";
const Mailsettingslist = [
    {
        id: 1,
        class: 'bi bi-phone me-2 fs-16 align-middle text-base',
        text1: 'Mobile-LG-1023',
        text2: 'Manchester, UK-Nov 30, 04:45PM'
    },
    {
        id: 2,
        class: 'bi bi-laptop me-2 fs-16 align-middle text-base',
        text1: 'Lenovo-1291203',
        text2: 'England, UK-Aug 12, 12:25PM'
    },
    {
        id: 3,
        class: 'bi bi-laptop me-2 fs-16 align-middle text-base',
        text1: 'Macbook-Suzika',
        text2: 'Brightoon, UK-Jul 18, 8:34AM'
    },
    {
        id: 4,
        class: 'bi bi-pc-display-horizontal me-2 fs-16 align-middle text-base',
        text1: 'Apple-Desktop',
        text2: 'Darlington, UK-Jan 14, 11:14AM'
    }
];
const Languageoptions = [
    {
        value: 'English',
        label: 'English'
    },
    {
        value: 'French',
        label: 'French'
    },
    {
        value: 'Arabic',
        label: 'Arabic'
    },
    {
        value: 'Hindi',
        label: 'Hindi'
    }
];
const Countryoptions = [
    {
        value: 'Usa',
        label: 'Usa'
    },
    {
        value: 'Australia',
        label: 'Australia'
    },
    {
        value: 'Dubai',
        label: 'Dubai'
    }
];
const Maximumoptions = [
    {
        value: '10',
        label: '10'
    },
    {
        value: '50',
        label: '50'
    },
    {
        value: '100',
        label: '100'
    },
    {
        value: '200',
        label: '200'
    }
];
const MaxLimitoptions = [
    {
        value: '3 Attemps',
        label: '3 Attemps'
    },
    {
        value: '5 Attemps',
        label: '5 Attemps'
    },
    {
        value: '10 Attemps',
        label: '10 Attemps'
    },
    {
        value: '20 Attemps',
        label: '20 Attemps'
    }
];
const Accountoptions = [
    {
        value: '1 Day',
        label: '1 Day'
    },
    {
        value: '1 Hour',
        label: '1 Hour'
    },
    {
        value: '1 Month',
        label: '1 Month'
    },
    {
        value: '1 Year',
        label: '1 Year'
    }
];
class ProfileService {
    image = "../../assets/img/png-images/2.png";
    static image = null;
    static handleChange(ele) {
        const [file] = ele.target.files;
        if (file) {
            this.image = URL.createObjectURL(file);
            this.returnImage();
        }
    }
    static returnImage() {
        return this.image;
    }
    static handleChangeUrl(link) {
        this.image = link;
        this.returnImage();
    }
}
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Pageheader = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block justify-between page-header md:flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold",
                        children: props.currentpage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                        lineNumber: 9,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                    lineNumber: 8,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex items-center whitespace-nowrap min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-[0.813rem] ps-[0.5rem]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "flex items-center text-primary hover:text-primary dark:text-primary truncate",
                                href: "#!",
                                children: [
                                    props.activepage,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                                        lineNumber: 15,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                                lineNumber: 13,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 ",
                            "aria-current": "page",
                            children: props.mainpage
                        }, void 0, false, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
                    lineNumber: 11,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
            lineNumber: 7,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Pageheader;
}),
"[project]/Desktop/dharwin_boilerplate/shared/layout-components/seo/seo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Seo = ({ title })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.title = `Dharwin Business Solutions - ${title}`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
const __TURBOPACK__default__export__ = Seo;
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/data/pages/mail/mailsettingdata.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$page$2d$header$2f$pageheader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/page-header/pageheader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/seo/seo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
const Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/dharwin_boilerplate/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Mailsettings = ()=>{
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("../../../assets/images/faces/9.jpg"); // Set the default image URL here
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleImageChange = (e)=>{
        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            // Read the selected image and set it in state
            const reader = new FileReader();
            reader.onload = (event)=>{
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const openFileInput = ()=>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Mail Settings"
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$page$2d$header$2f$pageheader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentpage: "Mail Settings",
                activepage: "Email",
                mainpage: "Mail Settings"
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-12 gap-6 mb-[3rem]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-12 col-span-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "box-header sm:flex block !justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-label": "Tabs",
                                        className: "md:flex block !justify-start whitespace-nowrap",
                                        role: "tablist",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 flex-grow  text-[0.75rem] font-medium rounded-md hover:text-primary active",
                                                id: "Personal-item",
                                                "data-hs-tab": "#personal-info",
                                                "aria-controls": "#personal-info",
                                                children: "Personal Information"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary ",
                                                id: "account-item",
                                                "data-hs-tab": "#account-settings",
                                                "aria-controls": "account-settings",
                                                children: "Account Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary ",
                                                id: "email-item",
                                                "data-hs-tab": "#email-settings",
                                                "aria-controls": "email-settings",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary ",
                                                id: "labels-item",
                                                "data-hs-tab": "#labels",
                                                "aria-controls": "labels",
                                                children: "Labels"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary ",
                                                id: "notifications-item",
                                                "data-hs-tab": "#notification-settings",
                                                "aria-controls": "notification-settings",
                                                children: "Notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#!",
                                                scroll: false,
                                                className: "m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary ",
                                                id: "security-item",
                                                "data-hs-tab": "#security",
                                                "aria-controls": "security",
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "box-body",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tab-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane show active dark:border-defaultborder/10",
                                                id: "personal-info",
                                                "aria-labelledby": "Personal-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sm:p-4 p-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "font-semibold mb-4 text-[1rem]",
                                                            children: "Photo :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-0 me-[3rem]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "avatar avatar-xxl avatar-rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: selectedImage || '',
                                                                                alt: "",
                                                                                id: "profile-img"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 77,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                "aria-label": "anchor",
                                                                                className: "badge rounded-full bg-primary avatar-badge",
                                                                                onClick: openFileInput,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "file",
                                                                                        name: "photo",
                                                                                        "data-hs-overlay": "#hs-small-modal",
                                                                                        ref: fileInputRef,
                                                                                        onChange: handleImageChange,
                                                                                        style: {
                                                                                            display: 'none'
                                                                                        },
                                                                                        className: "absolute w-full h-full opacity-0",
                                                                                        id: "profile-image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 79,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "fe fe-camera !text-[0.65rem] !text-white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 82,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 78,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "ti-btn bg-primary text-white !rounded-e-none !font-medium",
                                                                            children: "Change"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 87,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "ti-btn ti-btn-light !font-medium !rounded-s-none",
                                                                            children: "Remove"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "font-semibold mb-4 text-[1rem]",
                                                            children: "Profile :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sm:grid grid-cols-12 gap-6 mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "first-name",
                                                                            className: "form-label",
                                                                            children: "First Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 96,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            className: "form-control w-full !rounded-md",
                                                                            id: "first-name",
                                                                            placeholder: "First Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 97,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "last-name",
                                                                            className: "form-label",
                                                                            children: "Last Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            className: "form-control w-full !rounded-md",
                                                                            id: "last-name",
                                                                            placeholder: "Last Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 101,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-12 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "form-label",
                                                                            children: "User Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 104,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "input-group !flex-nowrap mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "input-group-text",
                                                                                    id: "basic-addon3",
                                                                                    children: "user2413@gmail.com"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 106,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    className: "form-control w-full rounded-md",
                                                                                    id: "basic-url",
                                                                                    "aria-describedby": "basic-addon3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 107,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 103,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "font-semibold mb-4 text-[1rem]",
                                                            children: "Personal information :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sm:grid grid-cols-12 gap-6 mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "email-address",
                                                                            className: "form-label",
                                                                            children: "Email Address :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            className: "form-control w-full !rounded-md",
                                                                            id: "email-address",
                                                                            placeholder: "xyz@gmail.com"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 117,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "Contact-Details",
                                                                            className: "form-label",
                                                                            children: "Contact Details :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 120,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            className: "form-control w-full !rounded-md",
                                                                            id: "Contact-Details",
                                                                            placeholder: "contact details"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "form-label",
                                                                            children: "Language :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                            isMulti: true,
                                                                            name: "colors",
                                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Languageoptions"],
                                                                            className: "",
                                                                            menuPlacement: "auto",
                                                                            classNamePrefix: "Select2",
                                                                            defaultValue: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Languageoptions"][0]
                                                                            ]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-6 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "form-label",
                                                                            children: "Country :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 130,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                            name: "colors",
                                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Countryoptions"],
                                                                            className: "w-full !rounded-md",
                                                                            menuPlacement: "auto",
                                                                            classNamePrefix: "Select2",
                                                                            defaultValue: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Countryoptions"][0]
                                                                            ]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 131,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "xl:col-span-12 col-span-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "bio",
                                                                            className: "form-label",
                                                                            children: "Bio :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            className: "form-control w-full !rounded-md dark:!text-defaulttextcolor/70",
                                                                            id: "bio",
                                                                            rows: 5,
                                                                            defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 137,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane dark:border-defaultborder/10 hidden",
                                                id: "account-settings",
                                                "aria-labelledby": "account-item",
                                                role: "tabpanel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-12 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-7 col-span-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "box  shadow-none mb-0 border dark:border-defaultborder/10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box-body",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "sm:flex block items-center mb-6 justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.875rem] mb-1 font-semibold",
                                                                                            children: "Two Step Verification"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 154,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0",
                                                                                            children: "Two step verificatoin is very secured and restricts in happening faulty practices."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 155,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 153,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "custom-toggle-switch sm:ms-2 ms-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            id: "two-step",
                                                                                            name: "toggleswitchsize",
                                                                                            type: "checkbox",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 158,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            htmlFor: "two-step",
                                                                                            className: "label-primary mb-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 159,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 157,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 152,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "sm:flex block items-center mb-6 justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "sm:mb-0 mb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.875rem] mb-2 font-semibold",
                                                                                            children: "Authentication"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 164,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "mb-0",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "inline-flex",
                                                                                                role: "group",
                                                                                                "aria-label": "Basic radio toggle button group",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        type: "radio",
                                                                                                        className: "btn-check ",
                                                                                                        name: "btnradio",
                                                                                                        id: "btnradio1",
                                                                                                        defaultChecked: true
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 167,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                        className: "ti-btn  bg-primary text-white !border-e-0 !rounded-e-none",
                                                                                                        htmlFor: "btnradio1",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ri-lock-unlock-line me-1 align-middle inline-block"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 168,
                                                                                                                columnNumber: 170
                                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                                            "Pin"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 168,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        type: "radio",
                                                                                                        className: "btn-check ",
                                                                                                        name: "btnradio",
                                                                                                        id: "btnradio2"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 169,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                        className: "ti-btn ti-btn-outline-primary !rounded-none !border-e-0",
                                                                                                        htmlFor: "btnradio2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ri-lock-password-line me-1 align-middle inline-block"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 170,
                                                                                                                columnNumber: 168
                                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                                            "Password"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 170,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        type: "radio",
                                                                                                        className: "btn-check",
                                                                                                        name: "btnradio",
                                                                                                        id: "btnradio3"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 171,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                        className: "ti-btn ti-btn-outline-primary !rounded-s-none",
                                                                                                        htmlFor: "btnradio3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ri-fingerprint-line me-1 align-middle inline-block"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 172,
                                                                                                                columnNumber: 158
                                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                                            "Finger Print"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 172,
                                                                                                        columnNumber: 73
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 166,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 165,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 163,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "custom-toggle-switch sm:ms-2 ms-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            id: "authentication",
                                                                                            name: "toggleswitchsize1",
                                                                                            type: "checkbox",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 177,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            htmlFor: "authentication",
                                                                                            className: "label-primary mb-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 178,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 176,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "sm:flex block items-center mb-6 justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.875rem] mb-1 font-semibold",
                                                                                            children: "Recovery Mail"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 183,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0",
                                                                                            children: "Incase of forgetting password mails are sent to  heifo@gmail.com"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 184,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 182,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "custom-toggle-switch sm:ms-2 ms-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            id: "recovery-mail",
                                                                                            name: "toggleswitchsize2",
                                                                                            type: "checkbox",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 187,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            htmlFor: "recovery-mail",
                                                                                            className: "label-primary mb-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 188,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 181,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "sm:flex block items-center mb-6 justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.875rem] mb-1 font-semibold",
                                                                                            children: "SMS Recovery"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 193,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0",
                                                                                            children: "SMS are sent to 9102312xx in case of recovery"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 194,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 192,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "custom-toggle-switch sm:ms-2 ms-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            id: "sms-recovery",
                                                                                            name: "toggleswitchsize3",
                                                                                            type: "checkbox",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 197,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            htmlFor: "sms-recovery",
                                                                                            className: "label-primary mb-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 198,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 196,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[0.875rem] mb-1 font-semibold",
                                                                                        children: "Reset Password"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 203,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[0.75rem] text-[#8c9097] dark:text-white/50",
                                                                                        children: [
                                                                                            "Password should be min of ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                className: "text-success",
                                                                                                children: [
                                                                                                    "8 digits",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                                                        children: "*"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 204,
                                                                                                        columnNumber: 191
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 204,
                                                                                                columnNumber: 155
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            ",atleast ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                className: "text-success",
                                                                                                children: [
                                                                                                    "One Capital letter",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                                                        children: "*"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 204,
                                                                                                        columnNumber: 262
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 204,
                                                                                                columnNumber: 216
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            " and ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                className: "text-success",
                                                                                                children: [
                                                                                                    "One Special Character",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                                                        children: "*"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 204,
                                                                                                        columnNumber: 332
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 204,
                                                                                                columnNumber: 283
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            " included."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "current-password",
                                                                                                className: "form-label",
                                                                                                children: "Current Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 206,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                className: "form-control w-full !rounded-md",
                                                                                                id: "current-password",
                                                                                                placeholder: "Current Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 207,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 205,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "new-password",
                                                                                                className: "form-label",
                                                                                                children: "New Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 210,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                className: "form-control w-full !rounded-md",
                                                                                                id: "new-password",
                                                                                                placeholder: "New Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 211,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 209,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "confirm-password",
                                                                                                className: "form-label",
                                                                                                children: "Confirm Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 214,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                className: "form-control w-full !rounded-md",
                                                                                                id: "confirm-password",
                                                                                                placeholder: "Confirm Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 215,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 213,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-1 col-span-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-4 col-span-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "box shadow-none mb-0 border dark:border-defaultborder/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-header justify-between items-center sm:flex block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "box-title",
                                                                                children: "Registered Devices"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:mt-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "ti-btn !py-1 !px-2 bg-primary text-white !text-[0.75rem] !font-medium",
                                                                                    children: "Signout from all devices"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 228,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 227,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-group",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mailsettingslist"].map((idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "list-group-item",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "sm:flex block items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "lh-1 sm:mb-0 mb-2",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: `${idx.class} text-[#8c9097] dark:text-white/50`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 237,
                                                                                                    columnNumber: 108
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 237,
                                                                                                columnNumber: 73
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "lh-1 flex-grow",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "mb-0",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-semibold",
                                                                                                            children: idx.text1
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                            lineNumber: 240,
                                                                                                            columnNumber: 81
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 239,
                                                                                                        columnNumber: 77
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "mb-0",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-[#8c9097] dark:text-white/50 text-[0.6875rem]",
                                                                                                            children: idx.text2
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                            lineNumber: 243,
                                                                                                            columnNumber: 81
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 242,
                                                                                                        columnNumber: 77
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 238,
                                                                                                columnNumber: 73
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "hs-dropdown ti-dropdown",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        "aria-label": "anchor",
                                                                                                        href: "#!",
                                                                                                        className: "flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium",
                                                                                                        "aria-expanded": "false",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "fe fe-more-vertical text-[0.8rem]"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                            lineNumber: 248,
                                                                                                            columnNumber: 81
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 247,
                                                                                                        columnNumber: 77
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                        className: "hs-dropdown-menu ti-dropdown-menu hidden",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block",
                                                                                                                    href: "#!",
                                                                                                                    children: "Action"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                    lineNumber: 251,
                                                                                                                    columnNumber: 85
                                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 251,
                                                                                                                columnNumber: 81
                                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block",
                                                                                                                    href: "#!",
                                                                                                                    children: "Another action"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                    lineNumber: 252,
                                                                                                                    columnNumber: 85
                                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 252,
                                                                                                                columnNumber: 81
                                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block",
                                                                                                                    href: "#!",
                                                                                                                    children: "Something else here"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                    lineNumber: 253,
                                                                                                                    columnNumber: 85
                                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                                lineNumber: 253,
                                                                                                                columnNumber: 81
                                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                        lineNumber: 250,
                                                                                                        columnNumber: 77
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 246,
                                                                                                columnNumber: 73
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 236,
                                                                                        columnNumber: 69
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, Math.random(), false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 235,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane dark:border-defaultborder/10 !p-0 hidden",
                                                id: "email-settings",
                                                "aria-labelledby": "email-item",
                                                role: "tabpanel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-group list-group-flush",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-t-0 !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Menu View :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 270,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "flexRadioDefault",
                                                                                        id: "flexRadioDefault1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 274,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "flexRadioDefault1",
                                                                                        children: "Default View"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 275,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 273,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "flexRadioDefault",
                                                                                        id: "flexRadioDefault2",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 280,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "flexRadioDefault2",
                                                                                        children: "Advanced View"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 281,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "menu-view",
                                                                                    name: "toggleswitchsize4",
                                                                                    type: "checkbox",
                                                                                    defaultChecked: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 288,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "menu-view",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 289,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Language :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Languages :"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                                isMulti: true,
                                                                                name: "colors",
                                                                                options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Languageoptions"],
                                                                                className: "basic-multi-select",
                                                                                menuPlacement: "auto",
                                                                                classNamePrefix: "Select2",
                                                                                defaultValue: [
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Languageoptions"][0],
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Languageoptions"][1]
                                                                                ]
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 301,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "mail-languages",
                                                                                    name: "toggleswitchsize5",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 307,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "mail-languages",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 308,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Images :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "images-open",
                                                                                        id: "images-open1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 320,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "images-open1",
                                                                                        children: "Always Open Images"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 321,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "images-open",
                                                                                        id: "images-hide2",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 326,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "images-hide2",
                                                                                        children: "Ask For Permission"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 327,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 325,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "mails-images",
                                                                                    name: "toggleswitchsize6",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 334,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "mails-images",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 335,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 333,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Keyboard Shortcuts :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "keyboard-enable",
                                                                                        id: "keyboard-enable1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 347,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "keyboard-enable1",
                                                                                        children: "Keyboard Shortcuts Enable"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 348,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 346,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "keyboard-enable",
                                                                                        id: "keyboard-disable2",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 353,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "keyboard-disable2",
                                                                                        children: "Keyboard Shortcuts Disable"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 354,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 352,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "keyboard-shortcuts",
                                                                                    name: "toggleswitchsize7",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 361,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "keyboard-shortcuts",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 362,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Notifications :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 370,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "checkbox",
                                                                                        defaultValue: "",
                                                                                        id: "desktop-notifications",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 374,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "desktop-notifications",
                                                                                        children: "Desktop Notifications"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 375,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 373,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "checkbox",
                                                                                        defaultValue: "",
                                                                                        id: "mobile-notifications"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 380,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "mobile-notifications",
                                                                                        children: "Mobile Notifications"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 381,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 379,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ltr:sm:float-right rtl:sm:float-left",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#!",
                                                                                scroll: false,
                                                                                className: "ti-btn ti-btn-outline-success !py-1 !px-2 !text-[0.75rem]",
                                                                                children: "Learn-more"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 388,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Maximum Mails Per Page :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 396,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                            name: "colors",
                                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Maximumoptions"],
                                                                            className: "w-full !rounded-md",
                                                                            menuPlacement: "auto",
                                                                            classNamePrefix: "Select2",
                                                                            defaultValue: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Maximumoptions"][0]
                                                                            ]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 399,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "mails-per-page",
                                                                                    name: "toggleswitchsize8",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 405,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "mails-per-page",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 406,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Mail Composer :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 414,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "mail-composeron",
                                                                                        id: "mail-composeron1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 418,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "mail-composeron1",
                                                                                        children: "Mail Composer On"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 419,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 417,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "mail-composeron",
                                                                                        id: "mail-composeroff2",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 424,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "mail-composeroff2",
                                                                                        children: "Mail Composer Off"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 425,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "mail-composer",
                                                                                    name: "toggleswitchsize9",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 432,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "mail-composer",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 433,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Auto Correct :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "auto-correcton",
                                                                                        id: "auto-correcton1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 445,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "auto-correcton1",
                                                                                        children: "Auto Correct On"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 446,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 444,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "radio",
                                                                                        name: "auto-correcton",
                                                                                        id: "auto-correctoff2",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 451,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "auto-correctoff2",
                                                                                        children: "Auto Correct Off"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 452,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 450,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    id: "auto-correct",
                                                                                    name: "toggleswitchsize10",
                                                                                    type: "checkbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 459,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: "auto-correct",
                                                                                    className: "label-danger mb-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 458,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 457,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-e-0 !border-s-0 !border-b-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-3 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[0.875rem] font-semibold mb-0",
                                                                            children: "Mail Send Action :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 467,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "checkbox",
                                                                                        defaultValue: "",
                                                                                        id: "on-keyboard",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 472,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "on-keyboard",
                                                                                        children: "On Keyboard Action"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 473,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 471,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "form-check !ps-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        className: "form-check-input",
                                                                                        type: "checkbox",
                                                                                        defaultValue: "",
                                                                                        id: "on-buttonclick"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 478,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "form-check-label",
                                                                                        htmlFor: "on-buttonclick",
                                                                                        children: "On Button Click"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 479,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 477,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ltr:sm:float-right rtl:sm:float-left",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#!",
                                                                                scroll: false,
                                                                                className: "ti-btn ti-btn-outline-success !py-1 !px-2 !text-[0.75rem]",
                                                                                children: "Learn-more"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 486,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane dark:border-defaultborder/10 hidden",
                                                id: "labels",
                                                "aria-labelledby": "labels-item",
                                                role: "tabpanel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.875rem] font-semibold mb-3",
                                                        children: "Mail Labels :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-12 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "All Mails"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 500,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 499,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            className: "btn-check",
                                                                                            type: "radio",
                                                                                            name: "label-allmails",
                                                                                            id: "all-mails-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 504,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "all-mails-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 505,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            className: "btn-check",
                                                                                            type: "radio",
                                                                                            name: "label-allmails",
                                                                                            id: "all-mails-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 506,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium btn-sm ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "all-mails-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 507,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 503,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 502,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Inbox"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 517,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 516,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-inbox",
                                                                                            id: "inbox-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "inbox-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 522,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-inbox",
                                                                                            id: "inbox-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 523,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "inbox-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 524,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 520,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 519,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 515,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Sent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 534,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 533,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-sent",
                                                                                            id: "sent-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "sent-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 539,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-sent",
                                                                                            id: "sent-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 540,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "sent-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 541,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 537,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 536,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Drafts"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 551,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-drafts",
                                                                                            id: "drafts-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 555,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "drafts-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 556,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-drafts",
                                                                                            id: "drafts-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 557,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "drafts-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 558,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 554,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 553,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Spam"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 568,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 567,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-spam",
                                                                                            id: "spam-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 572,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "spam-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 573,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-spam",
                                                                                            id: "spam-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 574,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "spam-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 575,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 571,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 570,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 566,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Important"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 585,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 584,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-important",
                                                                                            id: "important-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 589,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "important-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 590,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-important",
                                                                                            id: "important-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 591,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "important-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 592,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 588,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 587,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Trash"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 602,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 601,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-trash",
                                                                                            id: "trash-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 606,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "trash-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 607,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-trash",
                                                                                            id: "trash-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 608,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "trash-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 609,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 605,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 604,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 600,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Archive"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 619,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 618,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-archive",
                                                                                            id: "archive-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 623,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "archive-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 624,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-archive",
                                                                                            id: "archive-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 625,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "archive-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 626,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 622,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 621,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Starred"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 636,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 635,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-starred",
                                                                                            id: "starred-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 640,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "starred-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 641,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-starred",
                                                                                            id: "starred-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 642,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "starred-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 643,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 639,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.875rem] font-semibold mb-3",
                                                        children: "Settings :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-12 gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "xl:col-span-3 col-span-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "box !shadow-none border dark:border-defaultborder/10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Settings"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 656,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 655,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "inline-flex",
                                                                                role: "group",
                                                                                "aria-label": "Basic radio toggle button group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        className: "btn-check",
                                                                                        name: "label-settings",
                                                                                        id: "settings-enable",
                                                                                        defaultChecked: true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 660,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                        htmlFor: "settings-enable",
                                                                                        children: "Enable"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 661,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        className: "btn-check",
                                                                                        name: "label-settings",
                                                                                        id: "settings-disable"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 662,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                        htmlFor: "settings-disable",
                                                                                        children: "Disable"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 663,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 658,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.875rem] font-semibold mb-3",
                                                        children: "Custom Labels :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-12 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Mail"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 676,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 675,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-custom-mail",
                                                                                            id: "custom-mail-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 680,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "custom-mail-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 681,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-custom-mail",
                                                                                            id: "custom-mail-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 682,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "custom-mail-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 683,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 679,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 678,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 674,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 672,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Home"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 693,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 692,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-home",
                                                                                            id: "home-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 697,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "home-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 698,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-home",
                                                                                            id: "home-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 699,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "home-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 700,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 696,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 695,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 691,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Work"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 710,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 709,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-work",
                                                                                            id: "work-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 714,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "work-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 715,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-work",
                                                                                            id: "work-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 716,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "work-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 717,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 713,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 712,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 708,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xl:col-span-3 col-span-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "box !shadow-none border dark:border-defaultborder/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "box-body flex items-center justify-between flex-wrap gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Friends"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 727,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 726,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "inline-flex",
                                                                                    role: "group",
                                                                                    "aria-label": "Basic radio toggle button group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-friends",
                                                                                            id: "friends-enable",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 731,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium  ti-btn-outline-primary text-white !rounded-e-none !border-e-0",
                                                                                            htmlFor: "friends-enable",
                                                                                            children: "Enable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 732,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            className: "btn-check",
                                                                                            name: "label-friends",
                                                                                            id: "friends-disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 733,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none",
                                                                                            htmlFor: "friends-disable",
                                                                                            children: "Disable"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 734,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 730,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 729,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane !p-0 !border-0 dark:border-defaultborder/10 hidden",
                                                id: "notification-settings",
                                                "aria-labelledby": "notifications-item",
                                                role: "tabpanel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-group list-group-flush list-none !rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 xl:gap-x-[3rem] gap-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[1rem] mb-1 font-semibold",
                                                                                children: "Email Notifications"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 747,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                children: "Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 748,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 746,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-7 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between sm:mt-0 mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Updates & Features"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 753,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Notifications about new updates and their features."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 754,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 752,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "update-features",
                                                                                                    name: "toggleswitchsize11",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 758,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "update-features",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 759,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 757,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 756,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 751,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Early Access"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 765,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 766,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 764,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "early-access",
                                                                                                    name: "toggleswitchsize12",
                                                                                                    type: "checkbox"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 770,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "early-access",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 771,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 769,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 768,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 763,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Email Shortcuts"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 777,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Shortcut notifications for email."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 778,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 776,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "email-shortcut",
                                                                                                    name: "toggleswitchsize13",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 782,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "email-shortcut",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 783,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 781,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 780,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 775,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "New Mails"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 789,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Notifications related to new mails received."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 790,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 788,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "new-mails",
                                                                                                    name: "toggleswitchsize14",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 794,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "new-mails",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 795,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 793,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 792,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 787,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Mail Chat Messages"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 801,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Any of new messages are received will be updated through notifications."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 802,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 800,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "mail-chat-messages",
                                                                                                    name: "toggleswitchsize15",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 806,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "mail-chat-messages",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 807,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 805,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 804,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 799,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 745,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 xl:gap-x-[3rem] gap-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-5 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[1rem] mb-1 font-semibold",
                                                                                children: "Push Notifications"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 817,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                children: "Push notifications are recieved when you are online, you can customize them by enabling or disabling them."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 818,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-7 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between sm:mt-0 mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "New Mails"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 823,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Notifications related to new mails received."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 824,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 822,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "push-new-mails",
                                                                                                    name: "toggleswitchsize16",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 828,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "push-new-mails",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 829,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 827,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 826,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 821,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Mail Chat Messages"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 835,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Any of new messages are received will be updated through notifications."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 836,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 834,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "push-mail-chat-messages",
                                                                                                    name: "toggleswitchsize17",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 840,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "push-mail-chat-messages",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 841,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 839,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 838,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 833,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-notification-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Mail Extensions"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 847,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Notifications related to the extensions received by new emails and thier propertied also been displayed."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 848,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 846,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "mail-extensions",
                                                                                                    name: "toggleswitchsize18",
                                                                                                    type: "checkbox"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 852,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "mail-extensions",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 853,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 851,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 850,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 845,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 820,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-pane  dark:border-defaultborder/10 !p-0 hidden",
                                                id: "security",
                                                "aria-labelledby": "security-item",
                                                role: "tabpanel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-group !border-0 list-group-flush list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border !border-defaultborder dark:!border-defaultborder/10 !border-t-0 !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 xl:gap-x-[3rem] gap-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[1rem] mb-1 font-semibold",
                                                                                children: "Logging In"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 867,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                children: "Security settings related to logging into our email account and taking down account if any mischevious action happended."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 868,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-8 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between sm:mt-0 mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-security-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Max Limit for login attempts"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 873,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 874,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 872,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                                            name: "colors",
                                                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxLimitoptions"],
                                                                                            className: "w-full !rounded-md",
                                                                                            menuPlacement: "auto",
                                                                                            classNamePrefix: "Select2",
                                                                                            defaultValue: [
                                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxLimitoptions"][0]
                                                                                            ]
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 877,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 876,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 871,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-security-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Account Freeze time management"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 884,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "You can change the time for the account freeze when attempts for "
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 885,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 883,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                                            name: "colors",
                                                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accountoptions"],
                                                                                            className: "w-full !rounded-md",
                                                                                            menuPlacement: "auto",
                                                                                            classNamePrefix: "Select2",
                                                                                            defaultValue: [
                                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$data$2f$pages$2f$mail$2f$mailsettingdata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accountoptions"][0]
                                                                                            ]
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 888,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 887,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 882,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 870,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border !border-defaultborder dark:!border-defaultborder/10 !border-t-0 !border-e-0 !border-s-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 xl:gap-x-[3rem] gap-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-base mb-1 font-semibold",
                                                                                children: "Password Requirements"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 899,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                children: "Security settings related to password strength."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 900,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 898,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-8 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between sm:mt-0 mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mail-security-settings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Minimun number of characters in the password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 905,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "There should be a minimum number of characters for a password to be validated that shouls be set here."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 906,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 904,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            className: "form-control !rounded-md",
                                                                                            defaultValue: "8"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 909,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 908,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 903,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Contain A Number"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 914,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Password should contain a number."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 915,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 913,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "password-number",
                                                                                                    name: "toggleswitchsize19",
                                                                                                    type: "checkbox"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 919,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "password-number",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 920,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 918,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 917,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 912,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Contain A Special Character"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 926,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Password should contain a special Character."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 927,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 925,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "password-special-character",
                                                                                                    name: "toggleswitchsize20",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 931,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "password-special-character",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 932,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 930,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 929,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 924,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Atleast One Capital Letter"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 938,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Password should contain atleast one capital letter."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 939,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 937,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "custom-toggle-switch ltr:sm:float-right rtl:sm:float-left",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    id: "password-capital",
                                                                                                    name: "toggleswitchsize21",
                                                                                                    type: "checkbox",
                                                                                                    defaultChecked: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 943,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    htmlFor: "password-capital",
                                                                                                    className: "label-success mb-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                    lineNumber: 944,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 942,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 941,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 936,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "sm:flex block items-center justify-between mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.875rem] mb-1 font-semibold",
                                                                                                children: "Maximun Password Length"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 950,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                                children: "Maximum password lenth should be selected here."
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                                lineNumber: 951,
                                                                                                columnNumber: 65
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 949,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            className: "form-control !rounded-md",
                                                                                            defaultValue: "16"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 954,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                        lineNumber: 953,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 948,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 902,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "list-group-item !border-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-12 xl:gap-x-[3rem] gap-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-4 col-span-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[1rem] mb-1 font-semibold",
                                                                                children: "Unknown Chats"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 963,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50",
                                                                                children: "Security settings related to unknown chats."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "xl:col-span-8 col-span-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "form-check !ps-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            className: "form-check-input",
                                                                                            type: "radio",
                                                                                            name: "unknown-messages-show",
                                                                                            id: "unknown-messages-show1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 969,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "form-check-label",
                                                                                            htmlFor: "unknown-messages-show1",
                                                                                            children: "Show"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 970,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 968,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "form-check !ps-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            className: "form-check-input",
                                                                                            type: "radio",
                                                                                            name: "unknown-messages-show",
                                                                                            id: "unknown-messages-hide2",
                                                                                            defaultChecked: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 975,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "form-check-label",
                                                                                            htmlFor: "unknown-messages-hide2",
                                                                                            children: "Hide"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                            lineNumber: 976,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                                    lineNumber: 974,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                            lineNumber: 967,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                        lineNumber: 966,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                                lineNumber: 961,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "box-footer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ltr:float-right rtl:float-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ti-btn ti-btn-light m-1",
                                                children: "Restore Defaults"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 990,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ti-btn bg-primary text-white m-1",
                                                children: "Save Changes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                        lineNumber: 989,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                                    lineNumber: 988,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/pages/email/mail-settings/page.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Mailsettings;
}),
];

//# sourceMappingURL=Desktop_dharwin_boilerplate_aca47db0._.js.map