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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ToDoList(param) {\n    let { listData  } = param;\n    _s();\n    const [ListTaskData, SetListTaskData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {}\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (listData.task != \"\") {\n            SetListTaskData([\n                ...ListTaskData,\n                listData\n            ]);\n        }\n    }, [\n        listData\n    ]);\n    const removeItem = (indexV)=>{\n        const arrVal = [\n            ...ListTaskData\n        ];\n        arrVal.splice(index, indexV);\n        SetListTaskData(arrVal);\n    };\n    let DataOutput = ListTaskData.map((task, index1)=>{\n        // return task\n        if (task != undefined && listData.task != \"\" && index1 != 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        onChange: ()=>removeItem(index1),\n                        checked: task.isDone ? true : false\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 45\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                        p: 10,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            size: \"xl\",\n                            children: task.task\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 146\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 128\n                    }, this)\n                ]\n            }, index1, true, {\n                fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                lineNumber: 30,\n                columnNumber: 26\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        fluid: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Center, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"ToDo List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List, {\n                        spacing: \"xs\",\n                        size: \"sm\",\n                        center: true,\n                        style: {\n                            listStyle: \"none\"\n                        },\n                        children: DataOutput\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(ToDoList, \"jbWCuvm7Z96AYkAG9oGIjHAs5Yw=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBc0Y7QUFFMUM7QUFVN0IsU0FBU1MsU0FBUyxLQUE4QixFQUFFO1FBQWhDLEVBQUVDLFNBQVEsRUFBb0IsR0FBOUI7O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUMsQ0FBQztLQUFFO0lBRXJERCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBR0csU0FBU0csSUFBSSxJQUFFLElBQUc7WUFDakJELGdCQUFnQjttQkFBSUQ7Z0JBQWNEO2FBQVM7UUFDL0MsQ0FBQztJQUNMLEdBQUU7UUFBQ0E7S0FBUztJQUVaLE1BQU1JLGFBQWEsQ0FBQ0MsU0FBZ0I7UUFDaEMsTUFBTUMsU0FBUztlQUFJTDtTQUFhO1FBQ2hDSyxPQUFPQyxNQUFNLENBQUNDLE9BQU9IO1FBQ3JCSCxnQkFBZ0JJO0lBQ3BCO0lBQ0csSUFBSUcsYUFBY1IsYUFBYVMsR0FBRyxDQUFDLENBQUNQLE1BQVNLLFNBQVk7UUFDaEQsY0FBYztRQUNmLElBQUdMLFFBQU1RLGFBQWFYLFNBQVNHLElBQUksSUFBRSxNQUFNSyxVQUFPLEdBQUc7WUFDbEQscUJBQU8sOERBQUNaLGdEQUFLQTs7a0NBQWEsOERBQUNELG1EQUFRQTt3QkFBQ2lCLFVBQVUsSUFBSVIsV0FBV0k7d0JBQVFLLFNBQVNWLEtBQUtXLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSzs7Ozs7O29CQUFJO2tDQUFDLDhEQUFDckIsb0RBQVM7d0JBQUN1QixHQUFHO2tDQUFJLDRFQUFDdEIsK0NBQUlBOzRCQUFDdUIsTUFBTTtzQ0FBT2QsS0FBS0EsSUFBSTs7Ozs7Ozs7Ozs7O2VBQXhJSzs7Ozs7UUFDdEIsQ0FBQztJQUNSO0lBRUoscUJBQ0ksOERBQUNqQixvREFBU0E7UUFBQzJCLEtBQUs7a0JBQ1osNEVBQUM1QixpREFBTUE7c0JBQ0gsNEVBQUNFLGdEQUFLQTs7a0NBQ0YsOERBQUMyQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDMUIsK0NBQUlBO3dCQUNEMkIsU0FBUTt3QkFDUkgsTUFBSzt3QkFDTEksTUFBTTt3QkFDTkMsT0FBTzs0QkFBRUMsV0FBVzt3QkFBTztrQ0FHMUJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCLENBQUM7R0F6Q3VCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZG9MaXN0LnRzeD8zN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbnRlciwgQ29udGFpbmVyLCBQYXBlciwgTGlzdCwgVGV4dCwgQ2hlY2tib3gsIEdyb3VwIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IEljb25YLCBJY29uQ2hlY2sgfSBmcm9tICdAdGFibGVyL2ljb25zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFRvZG9MaXN0RGF0YVR5cGUge1xuICAgIGxpc3REYXRhOiB7XG4gICAgICAgIHRhc2tJZDogc3RyaW5nLFxuICAgICAgICB0YXNrOiBzdHJpbmcsXG4gICAgICAgIGlzRG9uZTogQm9vbGVhbixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9MaXN0KHsgbGlzdERhdGEgfTogVG9kb0xpc3REYXRhVHlwZSkge1xuICAgIGNvbnN0IFtMaXN0VGFza0RhdGEsIFNldExpc3RUYXNrRGF0YV0gPSB1c2VTdGF0ZShbe31dKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihsaXN0RGF0YS50YXNrIT1cIlwiKXtcbiAgICAgICAgICAgIFNldExpc3RUYXNrRGF0YShbLi4uTGlzdFRhc2tEYXRhLCBsaXN0RGF0YV0pO1xuICAgICAgICB9XG4gICAgfSxbbGlzdERhdGFdKVxuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpbmRleFY6bnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBhcnJWYWwgPSBbLi4uTGlzdFRhc2tEYXRhXTtcbiAgICAgICAgYXJyVmFsLnNwbGljZShpbmRleCwgaW5kZXhWKVxuICAgICAgICBTZXRMaXN0VGFza0RhdGEoYXJyVmFsKVxuICAgIH1cbiAgICAgICBsZXQgRGF0YU91dHB1dCA9ICBMaXN0VGFza0RhdGEubWFwKCh0YXNrOmFueSxpbmRleDphbnkpPT57XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRhc2tcbiAgICAgICAgICAgICAgIGlmKHRhc2shPXVuZGVmaW5lZCAmJiBsaXN0RGF0YS50YXNrIT1cIlwiICYmIGluZGV4IT0wKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEdyb3VwIGtleT17aW5kZXh9PjxDaGVja2JveCBvbkNoYW5nZT17KCk9PnJlbW92ZUl0ZW0oaW5kZXgpfSBjaGVja2VkPXt0YXNrLmlzRG9uZSA/IHRydWUgOiBmYWxzZX0gLz4gPExpc3QuSXRlbSBwPXsxMH0+PFRleHQgc2l6ZT17J3hsJ30+e3Rhc2sudGFza308L1RleHQ+PC9MaXN0Lkl0ZW0+PC9Hcm91cD5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlRvRG8gTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPVwieHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEYXRhT3V0cHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxufVxuXG4iXSwibmFtZXMiOlsiQ2VudGVyIiwiQ29udGFpbmVyIiwiUGFwZXIiLCJMaXN0IiwiVGV4dCIsIkNoZWNrYm94IiwiR3JvdXAiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvRG9MaXN0IiwibGlzdERhdGEiLCJMaXN0VGFza0RhdGEiLCJTZXRMaXN0VGFza0RhdGEiLCJ0YXNrIiwicmVtb3ZlSXRlbSIsImluZGV4ViIsImFyclZhbCIsInNwbGljZSIsImluZGV4IiwiRGF0YU91dHB1dCIsIm1hcCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImlzRG9uZSIsIkl0ZW0iLCJwIiwic2l6ZSIsImZsdWlkIiwiaDEiLCJzcGFjaW5nIiwiY2VudGVyIiwic3R5bGUiLCJsaXN0U3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todoList.tsx\n"));

/***/ })

});