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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ToDoList(param) {\n    let { listData  } = param;\n    _s();\n    const [ListTaskData, SetListTaskData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {}\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (listData.task != \"\") {\n            // console.log(listData)\n            SetListTaskData([\n                ...ListTaskData,\n                listData\n            ]);\n        }\n    }, [\n        listData\n    ]);\n    const removeItem = (indexV)=>{\n        const finalIst = lodash__WEBPACK_IMPORTED_MODULE_2___default().remove([\n            ...ListTaskData\n        ], (tId)=>{\n            return {\n                \"taskId\": indexV\n            };\n        // ListTaskData.map((t)=> {console.log(t)} )\n        // ListTaskData.map((t)=> {return (t ==indexV) ? t : ''} )\n        });\n        SetListTaskData(ListTaskData);\n    };\n    let DataOutput = ListTaskData.map((task, index)=>{\n        // return task\n        if (task != undefined && listData.task != \"\" && index != 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                        onChange: ()=>removeItem(task.taskId),\n                        checked: task.isDone ? true : false\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 45\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                        p: 10,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            size: \"xl\",\n                            children: task.task\n                        }, void 0, false, {\n                            fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 152\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 134\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                lineNumber: 37,\n                columnNumber: 26\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        fluid: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Center, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"ToDo List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.List, {\n                        spacing: \"xs\",\n                        size: \"sm\",\n                        center: true,\n                        style: {\n                            listStyle: \"none\"\n                        },\n                        children: DataOutput\n                    }, void 0, false, {\n                        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/imur/Documents/Documents-Rumi/adac/my-app/components/todoList.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(ToDoList, \"jbWCuvm7Z96AYkAG9oGIjHAs5Yw=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFzRjtBQUUxQztBQUNyQjtBQVVSLFNBQVNVLFNBQVMsS0FBOEIsRUFBRTtRQUFoQyxFQUFFQyxTQUFRLEVBQW9CLEdBQTlCOztJQUM3QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDLENBQUM7S0FBRTtJQUVyREQsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUdJLFNBQVNHLElBQUksSUFBRSxJQUFHO1lBQ2pCLHdCQUF3QjtZQUN4QkQsZ0JBQWdCO21CQUFJRDtnQkFBY0Q7YUFBUztRQUMvQyxDQUFDO0lBQ0wsR0FBRTtRQUFDQTtLQUFTO0lBRVosTUFBTUksYUFBYSxDQUFDQyxTQUFnQjtRQUNoQyxNQUFNQyxXQUFXUixvREFBUSxDQUFDO2VBQUlHO1NBQWEsRUFBRSxDQUFDTyxNQUFNO1lBRWhELE9BQVE7Z0JBQUMsVUFBVUg7WUFBTTtRQUN6Qiw0Q0FBNEM7UUFDNUMsMERBQTBEO1FBQzlEO1FBRUFILGdCQUFnQkQ7SUFDcEI7SUFDRyxJQUFJUSxhQUFjUixhQUFhUyxHQUFHLENBQUMsQ0FBQ1AsTUFBU1EsUUFBWTtRQUNoRCxjQUFjO1FBQ2YsSUFBR1IsUUFBTVMsYUFBYVosU0FBU0csSUFBSSxJQUFFLE1BQU1RLFNBQU8sR0FBRztZQUNsRCxxQkFBTyw4REFBQ2hCLGdEQUFLQTs7a0NBQWEsOERBQUNELG1EQUFRQTt3QkFBQ21CLFVBQVUsSUFBSVQsV0FBV0QsS0FBS1csTUFBTTt3QkFBR0MsU0FBU1osS0FBS2EsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLOzs7Ozs7b0JBQUk7a0NBQUMsOERBQUN4QixvREFBUzt3QkFBQzBCLEdBQUc7a0NBQUksNEVBQUN6QiwrQ0FBSUE7NEJBQUMwQixNQUFNO3NDQUFPaEIsS0FBS0EsSUFBSTs7Ozs7Ozs7Ozs7O2VBQTlJUTs7Ozs7UUFDdEIsQ0FBQztJQUNSO0lBRUoscUJBQ0ksOERBQUNyQixvREFBU0E7UUFBQzhCLEtBQUs7a0JBQ1osNEVBQUMvQixpREFBTUE7c0JBQ0gsNEVBQUNFLGdEQUFLQTs7a0NBQ0YsOERBQUM4QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDN0IsK0NBQUlBO3dCQUNEOEIsU0FBUTt3QkFDUkgsTUFBSzt3QkFDTEksTUFBTTt3QkFDTkMsT0FBTzs0QkFBRUMsV0FBVzt3QkFBTztrQ0FHMUJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QixDQUFDO0dBL0N1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2RvTGlzdC50c3g/MzdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIENvbnRhaW5lciwgUGFwZXIsIExpc3QsIFRleHQsIENoZWNrYm94LCBHcm91cCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBJY29uWCwgSWNvbkNoZWNrIH0gZnJvbSAnQHRhYmxlci9pY29ucyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgVG9kb0xpc3REYXRhVHlwZSB7XG4gICAgbGlzdERhdGE6IHtcbiAgICAgICAgdGFza0lkOiBzdHJpbmcsXG4gICAgICAgIHRhc2s6IHN0cmluZyxcbiAgICAgICAgaXNEb25lOiBCb29sZWFuLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0xpc3QoeyBsaXN0RGF0YSB9OiBUb2RvTGlzdERhdGFUeXBlKSB7XG4gICAgY29uc3QgW0xpc3RUYXNrRGF0YSwgU2V0TGlzdFRhc2tEYXRhXSA9IHVzZVN0YXRlKFt7fV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKGxpc3REYXRhLnRhc2shPVwiXCIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdERhdGEpXG4gICAgICAgICAgICBTZXRMaXN0VGFza0RhdGEoWy4uLkxpc3RUYXNrRGF0YSwgbGlzdERhdGFdKTtcbiAgICAgICAgfVxuICAgIH0sW2xpc3REYXRhXSlcblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaW5kZXhWOnN0cmluZyk9PntcbiAgICAgICAgY29uc3QgZmluYWxJc3QgPSBfLnJlbW92ZShbLi4uTGlzdFRhc2tEYXRhXSwgKHRJZCk9PntcblxuICAgICAgICAgICAgcmV0dXJuICh7J3Rhc2tJZCc6IGluZGV4Vn0pXG4gICAgICAgICAgICAvLyBMaXN0VGFza0RhdGEubWFwKCh0KT0+IHtjb25zb2xlLmxvZyh0KX0gKVxuICAgICAgICAgICAgLy8gTGlzdFRhc2tEYXRhLm1hcCgodCk9PiB7cmV0dXJuICh0ID09aW5kZXhWKSA/IHQgOiAnJ30gKVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXRMaXN0VGFza0RhdGEoTGlzdFRhc2tEYXRhKVxuICAgIH1cbiAgICAgICBsZXQgRGF0YU91dHB1dCA9ICBMaXN0VGFza0RhdGEubWFwKCh0YXNrOmFueSxpbmRleDphbnkpPT57XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRhc2tcbiAgICAgICAgICAgICAgIGlmKHRhc2shPXVuZGVmaW5lZCAmJiBsaXN0RGF0YS50YXNrIT1cIlwiICYmIGluZGV4IT0wKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEdyb3VwIGtleT17aW5kZXh9PjxDaGVja2JveCBvbkNoYW5nZT17KCk9PnJlbW92ZUl0ZW0odGFzay50YXNrSWQpfSBjaGVja2VkPXt0YXNrLmlzRG9uZSA/IHRydWUgOiBmYWxzZX0gLz4gPExpc3QuSXRlbSBwPXsxMH0+PFRleHQgc2l6ZT17J3hsJ30+e3Rhc2sudGFza308L1RleHQ+PC9MaXN0Lkl0ZW0+PC9Hcm91cD5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlRvRG8gTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPVwieHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEYXRhT3V0cHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxufVxuXG4iXSwibmFtZXMiOlsiQ2VudGVyIiwiQ29udGFpbmVyIiwiUGFwZXIiLCJMaXN0IiwiVGV4dCIsIkNoZWNrYm94IiwiR3JvdXAiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIl8iLCJUb0RvTGlzdCIsImxpc3REYXRhIiwiTGlzdFRhc2tEYXRhIiwiU2V0TGlzdFRhc2tEYXRhIiwidGFzayIsInJlbW92ZUl0ZW0iLCJpbmRleFYiLCJmaW5hbElzdCIsInJlbW92ZSIsInRJZCIsIkRhdGFPdXRwdXQiLCJtYXAiLCJpbmRleCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwidGFza0lkIiwiY2hlY2tlZCIsImlzRG9uZSIsIkl0ZW0iLCJwIiwic2l6ZSIsImZsdWlkIiwiaDEiLCJzcGFjaW5nIiwiY2VudGVyIiwic3R5bGUiLCJsaXN0U3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todoList.tsx\n"));

/***/ })

});