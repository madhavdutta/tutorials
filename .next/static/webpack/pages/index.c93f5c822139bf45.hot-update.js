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

/***/ "./components/todo.style.tsx":
/*!***********************************!*\
  !*** ./components/todo.style.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStyle\": function() { return /* binding */ useStyle; }\n/* harmony export */ });\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nconst useStyle = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme)=>({\n        Paper: {\n            width: \"100%\",\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0],\n            color: theme.colorScheme === \"dark\" ? theme.colors.gray[6] : theme.black,\n            borderRadius: theme.radius.lg,\n            fontSize: theme.fontSizes.lg,\n            paddingLeft: 6,\n            paddingRight: theme.spacing.md,\n            margin: theme.spacing.md\n        },\n        todoinput: {\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0],\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black,\n            borderBottom: \"1px solid\",\n            borderColor: theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.gray[0],\n            width: \"85%\",\n            height: \"50px\"\n        },\n        todoButton: {\n            width: \"50px\",\n            height: \"50px\",\n            borderRadius: \"50%\",\n            borderColor: theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.gray[0],\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.dark[5],\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[3] : theme.colors.gray[5],\n            fontSize: \"20px\",\n            \"&:hover\": {\n                backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[3],\n                color: theme.colorScheme === \"dark\" ? theme.colors.gray[1] : theme.black\n            }\n        },\n        checkButton: {\n            width: \"50px\",\n            height: \"50px\",\n            borderRadius: \"50%\",\n            borderColor: theme.colorScheme === \"dark\" ? theme.colors.dark[2] : theme.colors.gray[0],\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.dark[5],\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[3] : theme.colors.gray[5]\n        },\n        item: {\n            display: \"flex\",\n            alignItems: \"left\",\n            borderRadius: theme.radius.md,\n            border: \"1px solid \".concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[2]),\n            padding: \"\".concat(theme.spacing.sm, \"px \").concat(theme.spacing.xl, \"px\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.white,\n            marginBottom: theme.spacing.sm,\n            width: \"100%\"\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ1RDLFlBQVk7WUFDWm5CLGNBQWNWLE1BQU1XLE1BQU0sQ0FBQ08sRUFBRTtZQUM3QlksUUFBUSxhQUVQLE9BREM5QixNQUFNSSxXQUFXLEtBQUssU0FBU0osTUFBTUssTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHTixNQUFNSyxNQUFNLENBQUNFLElBQUksQ0FBQyxFQUFFO1lBRTVFd0IsU0FBUyxHQUF5Qi9CLE9BQXRCQSxNQUFNaUIsT0FBTyxDQUFDZSxFQUFFLEVBQUMsT0FBc0IsT0FBakJoQyxNQUFNaUIsT0FBTyxDQUFDZ0IsRUFBRSxFQUFDO1lBQ25EOUIsaUJBQWlCSCxNQUFNSSxXQUFXLEtBQUssU0FBU0osTUFBTUssTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHTixNQUFNcUIsS0FBSztZQUNsRmEsY0FBY2xDLE1BQU1pQixPQUFPLENBQUNlLEVBQUU7WUFDOUI5QixPQUFPO1FBQ1Q7SUFFTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9kby5zdHlsZS50c3g/ZmFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG4gICAgZXhwb3J0IGNvbnN0IHVzZVN0eWxlID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICAgICAgUGFwZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s2XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZ3JheVs2XSA6IHRoZW1lLmJsYWNrLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMubGcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLmxnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcubWQsXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubWQsXG5cbiAgICAgICAgfSxcbiAgICAgICAgdG9kb2lucHV0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s2XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbNF0gOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgICAgICAgICAgIHdpZHRoOiAnODUlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgICB9LFxuICAgICAgICB0b2RvQnV0dG9uOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s0XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbNl0gOiB0aGVtZS5jb2xvcnMuZGFya1s1XSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbM10gOiB0aGVtZS5jb2xvcnMuZ3JheVs1XSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG5cbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUuY29sb3JzLmdyYXlbM10sXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5ncmF5WzFdIDogdGhlbWUuYmxhY2ssXG4gICAgICAgICAgfSxcblxuICAgICAgICB9LFxuICAgICAgICBjaGVja0J1dHRvbjoge1xuICAgICAgICAgICAgd2lkdGg6ICc1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbMl0gOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzRdIDogdGhlbWUuY29sb3JzLmRhcmtbNV0sXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzNdIDogdGhlbWUuY29sb3JzLmdyYXlbNV0sXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdsZWZ0JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLm1kLFxuICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s1XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcuc219cHggJHt0aGVtZS5zcGFjaW5nLnhsfXB4YCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdIDogdGhlbWUud2hpdGUsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG5cbiAgICB9KSk7Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsInVzZVN0eWxlIiwidGhlbWUiLCJQYXBlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwiZ3JheSIsImNvbG9yIiwiYmxhY2siLCJib3JkZXJSYWRpdXMiLCJyYWRpdXMiLCJsZyIsImZvbnRTaXplIiwiZm9udFNpemVzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzcGFjaW5nIiwibWQiLCJtYXJnaW4iLCJ0b2RvaW5wdXQiLCJ3aGl0ZSIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwiaGVpZ2h0IiwidG9kb0J1dHRvbiIsImNoZWNrQnV0dG9uIiwiaXRlbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyIiwicGFkZGluZyIsInNtIiwieGwiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todo.style.tsx\n"));

/***/ })

});