module.exports = [
"[project]/Desktop/dharwin_boilerplate/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/dharwin_boilerplate/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/dharwin_boilerplate/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/dharwin_boilerplate/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/dharwin_boilerplate/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_MODULES",
    ()=>ALL_MODULES,
    "MOCK_CATEGORIES",
    ()=>MOCK_CATEGORIES,
    "getCurriculumForModule",
    ()=>getCurriculumForModule,
    "getModuleById",
    ()=>getModuleById
]);
const MOCK_CATEGORIES = [
    {
        id: 'cat-1',
        name: 'Technical Skills',
        modules: [
            {
                id: 'mod-1',
                categoryId: 'cat-1',
                name: 'React & Next.js Fundamentals',
                coverImage: '/assets/images/media/team-covers/1.jpg',
                shortDescription: 'Master React hooks, Next.js App Router, and server components for modern web apps.',
                summary: {
                    videos: 24,
                    pdfs: 6,
                    blogs: 8,
                    quiz: 3,
                    tests: 2
                },
                studentsEnrolled: 142,
                mentors: [
                    {
                        id: 'm1',
                        name: 'Alex',
                        avatar: '/assets/images/faces/2.jpg'
                    },
                    {
                        id: 'm2',
                        name: 'Sam',
                        avatar: '/assets/images/faces/8.jpg'
                    }
                ],
                durationHours: 12,
                level: 'Beginner',
                language: 'English'
            },
            {
                id: 'mod-2',
                categoryId: 'cat-1',
                name: 'Node.js & API Design',
                coverImage: '/assets/images/media/team-covers/2.jpg',
                shortDescription: 'Build scalable REST and GraphQL APIs with Node.js, Express, and best practices.',
                summary: {
                    videos: 18,
                    pdfs: 4,
                    blogs: 5,
                    quiz: 2,
                    tests: 1
                },
                studentsEnrolled: 98,
                mentors: [
                    {
                        id: 'm3',
                        name: 'Jordan',
                        avatar: '/assets/images/faces/12.jpg'
                    }
                ],
                durationHours: 8,
                level: 'Intermediate',
                language: 'English'
            },
            {
                id: 'mod-3',
                categoryId: 'cat-1',
                name: 'Database Design & SQL',
                coverImage: '/assets/images/media/team-covers/3.jpg',
                shortDescription: 'Relational modeling, indexing, and writing efficient SQL queries.',
                summary: {
                    videos: 20,
                    pdfs: 10,
                    blogs: 4,
                    quiz: 4,
                    tests: 2
                },
                studentsEnrolled: 76,
                mentors: [
                    {
                        id: 'm4',
                        name: 'Casey',
                        avatar: '/assets/images/faces/10.jpg'
                    },
                    {
                        id: 'm5',
                        name: 'Morgan',
                        avatar: '/assets/images/faces/5.jpg'
                    }
                ],
                durationHours: 10,
                level: 'Beginner',
                language: 'English'
            }
        ]
    },
    {
        id: 'cat-2',
        name: 'Leadership & Soft Skills',
        modules: [
            {
                id: 'mod-4',
                categoryId: 'cat-2',
                name: 'Leading Remote Teams',
                coverImage: '/assets/images/media/team-covers/4.jpg',
                shortDescription: 'Communication, async workflows, and building trust in distributed teams.',
                summary: {
                    videos: 12,
                    pdfs: 3,
                    blogs: 6,
                    quiz: 2,
                    tests: 0
                },
                studentsEnrolled: 210,
                mentors: [
                    {
                        id: 'm6',
                        name: 'Riley',
                        avatar: '/assets/images/faces/9.jpg'
                    },
                    {
                        id: 'm7',
                        name: 'Quinn',
                        avatar: '/assets/images/faces/11.jpg'
                    }
                ],
                durationHours: 6,
                level: 'All levels',
                language: 'English'
            },
            {
                id: 'mod-5',
                categoryId: 'cat-2',
                name: 'Feedback & Performance Reviews',
                coverImage: '/assets/images/media/team-covers/5.jpg',
                shortDescription: 'Give and receive constructive feedback and run effective 1:1s.',
                summary: {
                    videos: 8,
                    pdfs: 5,
                    blogs: 4,
                    quiz: 1,
                    tests: 1
                },
                studentsEnrolled: 165,
                mentors: [
                    {
                        id: 'm8',
                        name: 'Taylor',
                        avatar: '/assets/images/faces/3.jpg'
                    }
                ],
                durationHours: 4,
                level: 'All levels',
                language: 'English'
            }
        ]
    },
    {
        id: 'cat-3',
        name: 'Product & Design',
        modules: [
            {
                id: 'mod-6',
                categoryId: 'cat-3',
                name: 'UX Research Basics',
                coverImage: '/assets/images/media/team-covers/6.jpg',
                shortDescription: 'User interviews, usability testing, and turning insights into decisions.',
                summary: {
                    videos: 14,
                    pdfs: 2,
                    blogs: 10,
                    quiz: 2,
                    tests: 0
                },
                studentsEnrolled: 88,
                mentors: [
                    {
                        id: 'm9',
                        name: 'Jamie',
                        avatar: '/assets/images/faces/13.jpg'
                    },
                    {
                        id: 'm10',
                        name: 'Drew',
                        avatar: '/assets/images/faces/6.jpg'
                    }
                ],
                durationHours: 7,
                level: 'Beginner',
                language: 'English'
            }
        ]
    }
];
const ALL_MODULES = MOCK_CATEGORIES.flatMap((cat)=>cat.modules.map((m)=>({
            ...m,
            categoryName: cat.name
        })));
function getModuleById(id) {
    return ALL_MODULES.find((m)=>m.id === id);
}
function getCurriculumForModule(moduleId) {
    const m = getModuleById(moduleId);
    if (!m) return [];
    const s = m.summary;
    const sections = [];
    if (s.videos) {
        sections.push({
            id: 'videos',
            title: 'Videos',
            lessons: Array.from({
                length: Math.min(s.videos, 6)
            }, (_, i)=>({
                    id: `v-${i + 1}`,
                    type: 'video',
                    title: `Video lesson ${i + 1}`,
                    duration: `${5 + i * 2} min`
                }))
        });
    }
    if (s.pdfs) {
        sections.push({
            id: 'pdfs',
            title: 'Reading materials (PDFs)',
            lessons: Array.from({
                length: Math.min(s.pdfs, 4)
            }, (_, i)=>({
                    id: `p-${i + 1}`,
                    type: 'pdf',
                    title: `Resource ${i + 1}`
                }))
        });
    }
    if (s.blogs) {
        sections.push({
            id: 'blogs',
            title: 'Articles & blogs',
            lessons: Array.from({
                length: Math.min(s.blogs, 4)
            }, (_, i)=>({
                    id: `b-${i + 1}`,
                    type: 'blog',
                    title: `Article ${i + 1}`
                }))
        });
    }
    if (s.quiz) {
        sections.push({
            id: 'quizzes',
            title: 'Quizzes',
            lessons: Array.from({
                length: Math.min(s.quiz, 3)
            }, (_, i)=>({
                    id: `q-${i + 1}`,
                    type: 'quiz',
                    title: `Quiz ${i + 1}`,
                    duration: '5 min'
                }))
        });
    }
    if (s.tests) {
        sections.push({
            id: 'tests',
            title: 'Tests',
            lessons: Array.from({
                length: Math.min(s.tests, 2)
            }, (_, i)=>({
                    id: `t-${i + 1}`,
                    type: 'test',
                    title: `Test ${i + 1}`,
                    duration: '15 min'
                }))
        });
    }
    return sections;
}
;
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx <module evaluation>", "default");
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx", "default");
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f5b$id$5d2f$course$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f5b$id$5d2f$course$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f5b$id$5d2f$course$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f5b$id$5d2f$course$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/course-detail-view.tsx [app-rsc] (ecmascript)");
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_MODULES"].map((m)=>({
            id: m.id
        }));
}
function CourseDetailPage({ params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$dharwin_boilerplate$2f$app$2f28$components$292f28$contentlayout$292f$training$2f$curriculum$2f$modules$2f5b$id$5d2f$course$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        id: params.id
    }, void 0, false, {
        fileName: "[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/dharwin_boilerplate/app/(components)/(contentlayout)/training/curriculum/modules/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7848faa8._.js.map