"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/todoList.tsx":
/*!*********************************!*\
  !*** ./components/todoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _components_todo_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/todo.style */ \"./components/todo.style.tsx\");\n/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons */ \"./node_modules/@tabler/icons/icons-react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoList(param) {\n    let { setTodoHandler , listData  } = param;\n    var _viewport_current;\n    _s();\n    const { classes , theme  } = (0,_components_todo_style__WEBPACK_IMPORTED_MODULE_1__.useStyle)();\n    const viewport = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const scrollableTo = Number(viewport === null || viewport === void 0 ? void 0 : (_viewport_current = viewport.current) === null || _viewport_current === void 0 ? void 0 : _viewport_current.scrollHeight);\n    const RemoveTask = (e)=>{\n        console.log(e);\n        const index = e.getAttribute(\"data-index\");\n        setTodoHandler.remove(index);\n    };\n    const scrollToBottom = ()=>{\n        var _viewport_current;\n        return viewport === null || viewport === void 0 ? void 0 : (_viewport_current = viewport.current) === null || _viewport_current === void 0 ? void 0 : _viewport_current.scrollTo({\n            top: scrollableTo,\n            behavior: \"smooth\"\n        });\n    };\n    let taskListData = listData.length > 0 ? listData.map((item, index)=>{\n        if (item.task != \"\") {\n            scrollToBottom();\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                className: classes.item,\n                shadow: \"xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                    noWrap: true,\n                    left: 0,\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                            checked: item.isDone,\n                            onChange: (e)=>RemoveTask(e.target),\n                            color: \"gray\",\n                            size: \"xl\",\n                            radius: \"xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 61\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Code, {\n                            style: {\n                                fontSize: \"16px\",\n                                padding: \"5px 20px\"\n                            },\n                            children: item.isDone ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"s\", {\n                                children: \"item.task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 239\n                            }, this) : item.task\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 171\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                lineNumber: 28,\n                columnNumber: 25\n            }, this);\n        }\n    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n        className: classes.item,\n        shadow: \"xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    className: classes.checkButton,\n                    p: 9,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons__WEBPACK_IMPORTED_MODULE_4__.IconX, {\n                        size: 30,\n                        color: \"gray\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 62\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Code, {\n                    style: {\n                        fontSize: \"16px\",\n                        padding: \"5px 20px\"\n                    },\n                    children: \"No Tasks Found!\"\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        fluid: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                    span: 3\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                    span: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ScrollArea, {\n                        h: \"500px\",\n                        viewportRef: viewport,\n                        offsetScrollbars: true,\n                        scrollbarSize: 20,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                                w: \"100%\",\n                                style: {\n                                    paddingLeft: 25,\n                                    paddingRight: 5\n                                },\n                                spacing: \"xs\",\n                                align: \"flex-start\",\n                                justify: \"flex-start\",\n                                children: taskListData\n                            }, void 0, false, {\n                                fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                    span: 3\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoList.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(TodoList, \"YT6x5emiLoisIfc7DMh/CSKNgXQ=\", false, function() {\n    return [\n        _components_todo_style__WEBPACK_IMPORTED_MODULE_1__.useStyle\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsU0FBUTswQ0FDaEdsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtqQiw4REFBQzdCLG1EQUFRO29CQUFDc0QsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQXREdUI5Qzs7UUFDT0gsNERBQVFBOzs7S0FEZkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2RvTGlzdC50c3g/MzdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENlbnRlciwgQ2hlY2tib3gsIENoZWNrYm94SWNvbiwgQ29kZSwgQ29udGFpbmVyLCBHcmlkLCBHcm91cCwgUGFwZXIsIFNjcm9sbEFyZWEsIFN0YWNrLCBUZXh0LCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlU3R5bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3RvZG8uc3R5bGVcIjtcbmltcG9ydCB7IEljb25YLCB9IGZyb20gJ0B0YWJsZXIvaWNvbnMnO1xuaW1wb3J0IHsgVXNlTGlzdFN0YXRlSGFuZGxlcnMsIHVzZUxpc3RTdGF0ZSwgdXNlU2Nyb2xsSW50b1ZpZXcgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVG9kb0lucHV0UHJvcHMge1xuICAgIHNldFRvZG9IYW5kbGVyOiBVc2VMaXN0U3RhdGVIYW5kbGVyczxhbnk+O1xuICAgIGxpc3REYXRhOiB7IGlkOiBzdHJpbmc7IHRhc2s6IHN0cmluZzsgaXNEb25lOiBib29sZWFuOyB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9MaXN0KHsgc2V0VG9kb0hhbmRsZXIsIGxpc3REYXRhIH06IFRvZG9JbnB1dFByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSB9ID0gdXNlU3R5bGUoKTtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3Qgc2Nyb2xsYWJsZVRvID0gTnVtYmVyKHZpZXdwb3J0Py5jdXJyZW50Py5zY3JvbGxIZWlnaHQpO1xuXG4gICAgY29uc3QgUmVtb3ZlVGFzayA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgc2V0VG9kb0hhbmRsZXIucmVtb3ZlKGluZGV4KTtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB2aWV3cG9ydD8uY3VycmVudD8uc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbGFibGVUbywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXG4gICAgbGV0IHRhc2tMaXN0RGF0YSA9IChsaXN0RGF0YS5sZW5ndGggPiAwKSA/IChcbiAgICAgICAgbGlzdERhdGEubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRhc2sgIT0gJycpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFBhcGVyIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBzaGFkb3c9eyd4bCd9PlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXAgbm9XcmFwIGxlZnQ9ezB9IGFsaWduPXsnY2VudGVyJ30+PENoZWNrYm94IGNoZWNrZWQ9e2l0ZW0uaXNEb25lfSBvbkNoYW5nZT17KGUpPT5SZW1vdmVUYXNrKGUudGFyZ2V0KX0gY29sb3I9eydncmF5J30gc2l6ZT1cInhsXCIgcmFkaXVzPXsneGwnfSAvPjxDb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIHBhZGRpbmc6ICc1cHggMjBweCd9fT57aXRlbS5pc0RvbmU/PHM+aXRlbS50YXNrPC9zPjppdGVtLnRhc2t9PC9Db2RlPjwvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICApKSA6IChcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBzaGFkb3c9eyd4bCd9PlxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tCdXR0b259IHA9ezl9PjxJY29uWCBzaXplPXszMH0gY29sb3I9XCJncmF5XCIgLz48L1BhcGVyPlxuICAgICAgICAgICAgICAgIDxDb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIHBhZGRpbmc6ICc1cHggMjBweCcgfX0+Tm8gVGFza3MgRm91bmQhPC9Db2RlPlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sIHNwYW49ezN9PlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBcmVhIGg9eyc1MDBweCd9IHZpZXdwb3J0UmVmPXt2aWV3cG9ydH0gb2Zmc2V0U2Nyb2xsYmFycyBzY3JvbGxiYXJTaXplPXsyMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayB3PVwiMTAwJVwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAyNSwgcGFkZGluZ1JpZ2h0OiA1IH19IHNwYWNpbmc9XCJ4c1wiIGFsaWduPVwiZmxleC1zdGFydFwiIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrTGlzdERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFyZWE+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17M30+XG5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQ2VudGVyIiwiQ2hlY2tib3giLCJDb2RlIiwiQ29udGFpbmVyIiwiR3JpZCIsIkdyb3VwIiwiUGFwZXIiLCJTY3JvbGxBcmVhIiwiU3RhY2siLCJ1c2VTdHlsZSIsIkljb25YIiwidXNlUmVmIiwiVG9kb0xpc3QiLCJzZXRUb2RvSGFuZGxlciIsImxpc3REYXRhIiwidmlld3BvcnQiLCJjbGFzc2VzIiwidGhlbWUiLCJzY3JvbGxhYmxlVG8iLCJOdW1iZXIiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiUmVtb3ZlVGFzayIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJzY3JvbGxUb0JvdHRvbSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0YXNrTGlzdERhdGEiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidGFzayIsImNsYXNzTmFtZSIsInNoYWRvdyIsIm5vV3JhcCIsImxlZnQiLCJhbGlnbiIsImNoZWNrZWQiLCJpc0RvbmUiLCJvbkNoYW5nZSIsInRhcmdldCIsImNvbG9yIiwic2l6ZSIsInJhZGl1cyIsInN0eWxlIiwiZm9udFNpemUiLCJwYWRkaW5nIiwicyIsImNoZWNrQnV0dG9uIiwicCIsImZsdWlkIiwiQ29sIiwic3BhbiIsImgiLCJ2aWV3cG9ydFJlZiIsIm9mZnNldFNjcm9sbGJhcnMiLCJzY3JvbGxiYXJTaXplIiwidyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic3BhY2luZyIsImp1c3RpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todoList.tsx\n"));

/***/ })

});