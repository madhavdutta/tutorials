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

/***/ "./components/todoInput.tsx":
/*!**********************************!*\
  !*** ./components/todoInput.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _components_todo_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/todo.style */ \"./components/todo.style.tsx\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/hooks */ \"./node_modules/@mantine/hooks/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TodoInput(param) {\n    let { setTodoHandler , listData  } = param;\n    _s();\n    const { classes  } = (0,_components_todo_style__WEBPACK_IMPORTED_MODULE_1__.useStyle)();\n    const addInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const uuid = (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)();\n    const addTodo = ()=>{\n        if (addInput.current) {\n            setTodoHandler.append({\n                id: uuid,\n                task: addInput.current.value,\n                isDone: true\n            });\n            addInput.current.value = \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        fluid: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                    span: 3\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                    span: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n                            shadow: \"xl\",\n                            w: \"100%\",\n                            p: \"xl\",\n                            m: \"xl\",\n                            className: classes.Paper,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                                noWrap: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        color: \"default\",\n                                        className: classes.todoButton,\n                                        onClick: ()=>addTodo(),\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.TextInput, {\n                                        placeholder: \"Add Todo\",\n                                        variant: \"unstyled\",\n                                        size: \"lg\",\n                                        className: classes.todoinput,\n                                        ref: addInput,\n                                        rightSection: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Kbd, {\n                                                children: \"Enter\"\n                                            }, void 0, false, void 0, void 0)\n                                        }, void 0, false),\n                                        style: {\n                                            paddingRight: \"10px\"\n                                        },\n                                        onKeyDown: (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.getHotkeyHandler)([\n                                            [\n                                                \"enter\",\n                                                addTodo\n                                            ]\n                                        ])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                    span: 3,\n                    children: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/imur/Documents/Documents-Rumi/work/tutorials/tutorials/components/todoInput.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(TodoInput, \"xu13JRAEp2PLGVImMeQr6KYxGJA=\", false, function() {\n    return [\n        _components_todo_style__WEBPACK_IMPORTED_MODULE_1__.useStyle\n    ];\n});\n_c = TodoInput;\nvar _c;\n$RefreshReg$(_c, \"TodoInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9JbnB1dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThGO0FBQzNDO0FBQ2lDO0FBQ3JEO0FBQ0E7QUFPaEIsU0FBU1ksVUFBVSxLQUE0QyxFQUFFO1FBQTlDLEVBQUVDLGVBQWMsRUFBRUMsU0FBUSxFQUFrQixHQUE1Qzs7SUFDOUIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR1AsZ0VBQVFBO0lBQzVCLE1BQU1RLFdBQVdOLDZDQUFNQSxDQUFtQixJQUFJO0lBQzlDLE1BQU1PLE9BQU9OLDhDQUFNQTtJQUVuQixNQUFNTyxVQUFVLElBQU07UUFDbEIsSUFBSUYsU0FBU0csT0FBTyxFQUFFO1lBRWxCTixlQUFlTyxNQUFNLENBQUM7Z0JBQUVDLElBQUlKO2dCQUFNSyxNQUFNTixTQUFTRyxPQUFPLENBQUNJLEtBQUs7Z0JBQUVDLFFBQVEsSUFBSTtZQUFDO1lBQzdFUixTQUFTRyxPQUFPLENBQUNJLEtBQUssR0FBRztRQUM3QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ3JCLG9EQUFTQTtRQUFDdUIsS0FBSztrQkFDWiw0RUFBQ3RCLCtDQUFJQTs7OEJBQ0QsOERBQUNBLG1EQUFRO29CQUFDd0IsTUFBTTs7Ozs7OzhCQUNoQiw4REFBQ3hCLG1EQUFRO29CQUFDd0IsTUFBTTs4QkFDWiw0RUFBQzFCLGlEQUFNQTtrQ0FDSCw0RUFBQ0ksZ0RBQUtBOzRCQUFDdUIsUUFBUTs0QkFBTUMsR0FBRzs0QkFBUUMsR0FBRzs0QkFBTUMsR0FBRzs0QkFBTUMsV0FBV2pCLFFBQVFWLEtBQUs7c0NBRXRFLDRFQUFDRCxnREFBS0E7Z0NBQUM2QixNQUFNOztrREFDVCw4REFBQ2pDLGlEQUFNQTt3Q0FBQ2tDLE9BQU07d0NBQVVGLFdBQVdqQixRQUFRb0IsVUFBVTt3Q0FBRUMsU0FBUyxJQUFNbEI7a0RBQVc7Ozs7OztrREFDakYsOERBQUNaLG9EQUFTQTt3Q0FDTitCLGFBQVk7d0NBQ1pDLFNBQVE7d0NBQ1JDLE1BQU07d0NBQ05QLFdBQVdqQixRQUFReUIsU0FBUzt3Q0FDNUJDLEtBQUt6Qjt3Q0FDTDBCLDRCQUFjO3NEQUFFLDRFQUFDbkMsOENBQUdBOzBEQUFDOzs7d0NBQ3JCb0MsT0FBTzs0Q0FBRUMsY0FBYzt3Q0FBTzt3Q0FDOUJDLFdBQVdwQyxnRUFBZ0JBLENBQUM7NENBQ3hCO2dEQUFDO2dEQUFTUzs2Q0FBUTt5Q0FDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPckIsOERBQUNmLG1EQUFRO29CQUFDd0IsTUFBTTs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkMsQ0FBQztHQTVDdUJmOztRQUNBSiw0REFBUUE7OztLQURSSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZG9JbnB1dC50c3g/NTcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENlbnRlciwgQ29udGFpbmVyLCBHcmlkLCBHcm91cCwgUGFwZXIsIFRleHRJbnB1dCwgS2JkIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90b2RvLnN0eWxlXCI7XG5pbXBvcnQgeyBVc2VMaXN0U3RhdGVIYW5kbGVycywgZ2V0SG90a2V5SGFuZGxlciwgdXNlSG90a2V5cyB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJ1xuXG5pbnRlcmZhY2UgVG9kb0lucHV0UHJvcHMge1xuICAgIHNldFRvZG9IYW5kbGVyOiBVc2VMaXN0U3RhdGVIYW5kbGVyczxhbnk+O1xuICAgIGxpc3REYXRhOiB7IGlkOiBzdHJpbmc7IHRhc2s6IHN0cmluZzsgaXNEb25lOiBib29sZWFuOyB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JbnB1dCh7IHNldFRvZG9IYW5kbGVyLCBsaXN0RGF0YSB9OiBUb2RvSW5wdXRQcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGUoKTtcbiAgICBjb25zdCBhZGRJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB1dWlkID0gbmFub2lkKCk7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWRkSW5wdXQuY3VycmVudCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUb2RvSGFuZGxlci5hcHBlbmQoeyBpZDogdXVpZCwgdGFzazogYWRkSW5wdXQuY3VycmVudC52YWx1ZSwgaXNEb25lOiB0cnVlIH0pO1xuICAgICAgICAgICAgYWRkSW5wdXQuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbCBzcGFuPXszfT48L0dyaWQuQ29sPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbCBzcGFuPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzaGFkb3c9eyd4bCd9IHc9eycxMDAlJ30gcD17J3hsJ30gbT17J3hsJ30gY2xhc3NOYW1lPXtjbGFzc2VzLlBhcGVyfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cCBub1dyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZG9CdXR0b259IG9uQ2xpY2s9eygpID0+IGFkZFRvZG8oKX0+KzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnbGcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZG9pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17YWRkSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlY3Rpb249ezw+PEtiZD5FbnRlcjwvS2JkPjwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzEwcHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2dldEhvdGtleUhhbmRsZXIoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZW50ZXInLCBhZGRUb2RvXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sIHNwYW49ezN9PiA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2VudGVyIiwiQ29udGFpbmVyIiwiR3JpZCIsIkdyb3VwIiwiUGFwZXIiLCJUZXh0SW5wdXQiLCJLYmQiLCJ1c2VTdHlsZSIsImdldEhvdGtleUhhbmRsZXIiLCJ1c2VSZWYiLCJuYW5vaWQiLCJUb2RvSW5wdXQiLCJzZXRUb2RvSGFuZGxlciIsImxpc3REYXRhIiwiY2xhc3NlcyIsImFkZElucHV0IiwidXVpZCIsImFkZFRvZG8iLCJjdXJyZW50IiwiYXBwZW5kIiwiaWQiLCJ0YXNrIiwidmFsdWUiLCJpc0RvbmUiLCJmbHVpZCIsIkNvbCIsInNwYW4iLCJzaGFkb3ciLCJ3IiwicCIsIm0iLCJjbGFzc05hbWUiLCJub1dyYXAiLCJjb2xvciIsInRvZG9CdXR0b24iLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50Iiwic2l6ZSIsInRvZG9pbnB1dCIsInJlZiIsInJpZ2h0U2VjdGlvbiIsInN0eWxlIiwicGFkZGluZ1JpZ2h0Iiwib25LZXlEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todoInput.tsx\n"));

/***/ })

});