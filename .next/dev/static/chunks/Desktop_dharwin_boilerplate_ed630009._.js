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
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/shared/layout-components/seo/seo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/react-table/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CATEGORIES_DATA = [
    {
        id: '1',
        categoryName: 'Technical Skills',
        dateCreated: '2024-01-15',
        courses: 12
    },
    {
        id: '2',
        categoryName: 'Leadership & Management',
        dateCreated: '2024-01-18',
        courses: 8
    },
    {
        id: '3',
        categoryName: 'Compliance & Safety',
        dateCreated: '2024-01-20',
        courses: 5
    },
    {
        id: '4',
        categoryName: 'Soft Skills',
        dateCreated: '2024-01-22',
        courses: 15
    },
    {
        id: '5',
        categoryName: 'Product Knowledge',
        dateCreated: '2024-01-25',
        courses: 6
    },
    {
        id: '6',
        categoryName: 'Sales & Marketing',
        dateCreated: '2024-02-01',
        courses: 9
    },
    {
        id: '7',
        categoryName: 'Customer Service',
        dateCreated: '2024-02-05',
        courses: 7
    },
    {
        id: '8',
        categoryName: 'Onboarding',
        dateCreated: '2024-02-10',
        courses: 4
    }
];
const TrainingCategories = ()=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CATEGORIES_DATA);
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showCategoryModal, setShowCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCategory, setEditingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categoryName, setCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleRowSelect = (id)=>{
        const next = new Set(selectedRows);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setSelectedRows(next);
    };
    const handleSelectAll = (e)=>{
        if (e.target.checked) setSelectedRows(new Set(categories.map((c)=>c.id)));
        else setSelectedRows(new Set());
    };
    const isAllSelected = categories.length > 0 && selectedRows.size === categories.length;
    const isIndeterminate = selectedRows.size > 0 && selectedRows.size < categories.length;
    const handleDelete = (id)=>{
        if (confirm('Are you sure you want to delete this category?')) {
            setCategories((prev)=>prev.filter((c)=>c.id !== id));
            setSelectedRows((prev)=>{
                const next = new Set(prev);
                next.delete(id);
                return next;
            });
        }
    };
    const handleDeleteSelected = ()=>{
        if (selectedRows.size === 0) return;
        if (confirm(`Are you sure you want to delete ${selectedRows.size} category(ies)?`)) {
            setCategories((prev)=>prev.filter((c)=>!selectedRows.has(c.id)));
            setSelectedRows(new Set());
        }
    };
    const openCreateModal = ()=>{
        setEditingCategory(null);
        setCategoryName('');
        setShowCategoryModal(true);
    };
    const openEditModal = (cat)=>{
        setEditingCategory(cat);
        setCategoryName(cat.categoryName);
        setShowCategoryModal(true);
    };
    const handleSaveCategory = ()=>{
        const name = categoryName.trim();
        if (!name) return;
        if (editingCategory) {
            setCategories((prev)=>prev.map((c)=>c.id === editingCategory.id ? {
                        ...c,
                        categoryName: name
                    } : c));
        } else {
            setCategories((prev)=>[
                    ...prev,
                    {
                        id: String(Date.now()),
                        categoryName: name,
                        dateCreated: new Date().toISOString().split('T')[0],
                        courses: 0
                    }
                ]);
        }
        setShowCategoryModal(false);
        setCategoryName('');
        setEditingCategory(null);
    };
    const handleImportExcel = ()=>{
        // Placeholder: trigger file input or open import modal
        console.log('Import Excel');
    };
    const handleExportExcel = ()=>{
        // Placeholder: export current data as CSV/Excel
        console.log('Export Excel');
    };
    const handleDownloadTemplate = ()=>{
        // Placeholder: download template file
        console.log('Download Template');
    };
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TrainingCategories.useMemo[columns]": ()=>[
                {
                    Header: 'All',
                    accessor: 'checkbox',
                    disableSortBy: true,
                    Cell: {
                        "TrainingCategories.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-check-input",
                                type: "checkbox",
                                checked: selectedRows.has(row.original.id),
                                onChange: {
                                    "TrainingCategories.useMemo[columns]": ()=>handleRowSelect(row.original.id)
                                }["TrainingCategories.useMemo[columns]"],
                                "aria-label": `Select ${row.original.categoryName}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                    }["TrainingCategories.useMemo[columns]"]
                },
                {
                    Header: 'S.no.',
                    accessor: 'sno',
                    disableSortBy: true,
                    Cell: {
                        "TrainingCategories.useMemo[columns]": ({ row, state })=>{
                            const { pageIndex, pageSize } = state;
                            return pageIndex * pageSize + row.index + 1;
                        }
                    }["TrainingCategories.useMemo[columns]"]
                },
                {
                    Header: 'Category Name',
                    accessor: 'categoryName'
                },
                {
                    Header: 'Date Created',
                    accessor: 'dateCreated'
                },
                {
                    Header: 'Courses',
                    accessor: 'courses',
                    Cell: {
                        "TrainingCategories.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge bg-primary/10 text-primary border border-primary/30 px-2 py-0.5 rounded-full text-xs font-medium",
                                children: row.original.courses
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                    }["TrainingCategories.useMemo[columns]"]
                },
                {
                    Header: 'Actions',
                    accessor: 'id',
                    disableSortBy: true,
                    Cell: {
                        "TrainingCategories.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hs-tooltip ti-main-tooltip",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "TrainingCategories.useMemo[columns]": ()=>openEditModal(row.original)
                                            }["TrainingCategories.useMemo[columns]"],
                                            className: "hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm ti-btn-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-pencil-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700",
                                                    role: "tooltip",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hs-tooltip ti-main-tooltip",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "TrainingCategories.useMemo[columns]": ()=>handleDelete(row.original.id)
                                            }["TrainingCategories.useMemo[columns]"],
                                            className: "hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm ti-btn-danger",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-delete-bin-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700",
                                                    role: "tooltip",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                    }["TrainingCategories.useMemo[columns]"]
                }
            ]
    }["TrainingCategories.useMemo[columns]"], [
        selectedRows
    ]);
    const tableInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTable"])({
        columns,
        data: categories,
        initialState: {
            pageIndex: 0,
            pageSize: 10
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortBy"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePagination"]);
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, state, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize } = tableInstance;
    const { pageIndex, pageSize } = state;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$shared$2f$layout$2d$components$2f$seo$2f$seo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Training Categories"
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "xl:col-span-12 col-span-12 h-full flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "box custom-box h-full flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "box-header flex items-center justify-between flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "box-title",
                                        children: [
                                            "Categories",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge bg-light text-default rounded-full ms-1 text-[0.75rem] align-middle",
                                                children: categories.length
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "form-control !w-auto !py-1 !px-4 !text-[0.75rem] me-2",
                                                value: pageSize,
                                                onChange: (e)=>setPageSize(Number(e.target.value)),
                                                children: [
                                                    10,
                                                    25,
                                                    50,
                                                    100
                                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: size,
                                                        children: [
                                                            "Show ",
                                                            size
                                                        ]
                                                    }, size, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] me-2",
                                                onClick: openCreateModal,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-add-line font-semibold align-middle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Create Category"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hs-dropdown ti-dropdown me-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] ti-dropdown-toggle",
                                                        id: "excel-dropdown-button",
                                                        "aria-expanded": "false",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ri-file-excel-2-line font-semibold align-middle me-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Excel",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ri-arrow-down-s-line align-middle ms-1 inline-block"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "hs-dropdown-menu ti-dropdown-menu hidden",
                                                        "aria-labelledby": "excel-dropdown-button",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium w-full text-left",
                                                                    onClick: handleImportExcel,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "ri-upload-2-line me-2 align-middle inline-block"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Import"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium w-full text-left",
                                                                    onClick: handleExportExcel,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "ri-file-excel-2-line me-2 align-middle inline-block"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Export"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium w-full text-left",
                                                                    onClick: handleDownloadTemplate,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "ri-download-line me-2 align-middle inline-block"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Template"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedRows.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ti-btn ti-btn-danger !py-1 !px-2 !text-[0.75rem]",
                                                onClick: handleDeleteSelected,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-delete-bin-line font-semibold align-middle me-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Delete (",
                                                    selectedRows.size,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "box-body !p-0 flex-1 flex flex-col overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "table-responsive flex-1 overflow-y-auto",
                                    style: {
                                        minHeight: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        ...getTableProps(),
                                        className: "table whitespace-nowrap min-w-full table-striped table-hover table-bordered border-gray-300 dark:border-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: headerGroups.map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("tr", {
                                                        ...headerGroup.getHeaderGroupProps(),
                                                        className: "bg-primary/10 dark:bg-primary/20 border-b border-gray-300 dark:border-gray-600",
                                                        key: headerGroup.getHeaderGroupProps().key,
                                                        __source: {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        },
                                                        __self: ("TURBOPACK compile-time value", void 0)
                                                    }, headerGroup.headers.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("th", {
                                                            ...column.getHeaderProps(column.getSortByToggleProps?.() || column.getHeaderProps()),
                                                            scope: "col",
                                                            className: "text-start sticky top-0 z-10 bg-gray-50 dark:bg-black/20",
                                                            key: column.getHeaderProps().key,
                                                            style: {
                                                                position: 'sticky',
                                                                top: 0,
                                                                zIndex: 10
                                                            },
                                                            __source: {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 27
                                                            },
                                                            __self: ("TURBOPACK compile-time value", void 0)
                                                        }, column.id === 'checkbox' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "form-check-input",
                                                            type: "checkbox",
                                                            checked: isAllSelected,
                                                            ref: (input)=>{
                                                                if (input) input.indeterminate = isIndeterminate;
                                                            },
                                                            onChange: handleSelectAll,
                                                            "aria-label": "Select all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "tabletitle",
                                                                    children: column.render('Header')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                column.isSorted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: column.isSortedDesc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ri-arrow-down-s-line text-[0.875rem]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 60
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ri-arrow-up-s-line text-[0.875rem]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 119
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0))))))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                ...getTableBodyProps(),
                                                children: page.map((row)=>{
                                                    prepareRow(row);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("tr", {
                                                        ...row.getRowProps(),
                                                        className: "border-b border-gray-300 dark:border-gray-600",
                                                        key: row.getRowProps().key,
                                                        __source: {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 25
                                                        },
                                                        __self: ("TURBOPACK compile-time value", void 0)
                                                    }, row.cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("td", {
                                                            ...cell.getCellProps(),
                                                            key: cell.getCellProps().key,
                                                            __source: {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 29
                                                            },
                                                            __self: ("TURBOPACK compile-time value", void 0)
                                                        }, cell.render('Cell'))));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "box-footer !border-t-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Showing ",
                                                pageIndex * pageSize + 1,
                                                " to ",
                                                Math.min((pageIndex + 1) * pageSize, categories.length),
                                                " of ",
                                                categories.length,
                                                " entries",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-arrow-right ms-2 font-semibold"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ms-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                "aria-label": "Page navigation",
                                                className: "pagination-style-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "ti-pagination mb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `page-item ${!canPreviousPage ? 'disabled' : ''}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "page-link px-3 py-[0.375rem]",
                                                                onClick: ()=>previousPage(),
                                                                disabled: !canPreviousPage,
                                                                children: "Prev"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        pageOptions.length <= 7 ? pageOptions.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `page-item ${pageIndex === p ? 'active' : ''}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "page-link px-3 py-[0.375rem]",
                                                                    onClick: ()=>gotoPage(p),
                                                                    children: p + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, p, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                pageIndex > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "page-item",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "page-link px-3 py-[0.375rem]",
                                                                                onClick: ()=>gotoPage(0),
                                                                                children: "1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                                lineNumber: 381,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 380,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        pageIndex > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "page-item disabled",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "page-link px-3 py-[0.375rem]",
                                                                                children: "..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                                lineNumber: 385,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true),
                                                                Array.from({
                                                                    length: Math.min(5, pageCount)
                                                                }, (_, i)=>{
                                                                    let pageNum = pageIndex < 3 ? i : pageIndex > pageCount - 4 ? pageCount - 5 + i : pageIndex - 2 + i;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `page-item ${pageIndex === pageNum ? 'active' : ''}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "page-link px-3 py-[0.375rem]",
                                                                            onClick: ()=>gotoPage(pageNum),
                                                                            children: pageNum + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 394,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, pageNum, false, {
                                                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                }),
                                                                pageIndex < pageCount - 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        pageIndex < pageCount - 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "page-item disabled",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "page-link px-3 py-[0.375rem]",
                                                                                children: "..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                                lineNumber: 404,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 403,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "page-item",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "page-link px-3 py-[0.375rem]",
                                                                                onClick: ()=>gotoPage(pageCount - 1),
                                                                                children: pageCount
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                                lineNumber: 408,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `page-item ${!canNextPage ? 'disabled' : ''}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "page-link px-3 py-[0.375rem] text-primary",
                                                                onClick: ()=>nextPage(),
                                                                disabled: !canNextPage,
                                                                children: "Next"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showCategoryModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 dark:bg-black/70",
                        onClick: ()=>setShowCategoryModal(false),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ti-modal-content bg-white dark:bg-bodybg rounded-lg shadow-xl max-w-md w-full mx-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ti-modal-header flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "ti-modal-title text-lg font-semibold",
                                        children: editingCategory ? 'Edit Category' : 'Create Category'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ti-modal-close-btn p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
                                        onClick: ()=>setShowCategoryModal(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-close-line text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ti-modal-body px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "category-name",
                                        className: "form-label",
                                        children: "Category Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "category-name",
                                        type: "text",
                                        className: "form-control",
                                        placeholder: "Enter category name",
                                        value: categoryName,
                                        onChange: (e)=>setCategoryName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ti-modal-footer px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ti-btn ti-btn-light",
                                        onClick: ()=>setShowCategoryModal(false),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ti-btn ti-btn-primary-full",
                                        onClick: handleSaveCategory,
                                        children: editingCategory ? 'Update' : 'Create'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
                lineNumber: 432,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/categories/page.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrainingCategories, "ycbpVX/mp0mGUS6Xh4jPTL3zBNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$react$2d$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTable"]
    ];
});
_c = TrainingCategories;
const __TURBOPACK__default__export__ = TrainingCategories;
var _c;
__turbopack_context__.k.register(_c, "TrainingCategories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_dharwin_boilerplate_ed630009._.js.map