(self["webpackChunkdaw"] = self["webpackChunkdaw"] || []).push([["src_main_js_pages_Index_js"],{

/***/ "./src/main/js/components/button/IndexButton.js":
/*!******************************************************!*\
  !*** ./src/main/js/components/button/IndexButton.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/Container */ "./src/main/js/components/container/Container.js");
/* harmony import */ var _css_components_button_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/components/button/IndexButton.module.css */ "./src/main/js/css/components/button/IndexButton.module.css");




/**
 * Main reusable buttons for the index page
 * @param {children, title, url, description} props 
 * @returns 
 */

function IndexButton(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      url = _ref.url,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "" : _ref$description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: _css_components_button_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_2__.default.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _css_components_button_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_2__.default.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _css_components_button_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_2__.default.description
  }, description), children));
}

/***/ }),

/***/ "./src/main/js/pages/Index.js":
/*!************************************!*\
  !*** ./src/main/js/pages/Index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _css_pages_Index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pages/Index.module.css */ "./src/main/js/css/pages/Index.module.css");
/* harmony import */ var _components_container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container/Container */ "./src/main/js/components/container/Container.js");
/* harmony import */ var _components_button_IndexButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button/IndexButton */ "./src/main/js/components/button/IndexButton.js");
/* harmony import */ var _components_periodictable_PeriodicTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/periodictable/PeriodicTable */ "./src/main/js/components/periodictable/PeriodicTable.js");






function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_container_Container__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: _css_pages_Index_module_css__WEBPACK_IMPORTED_MODULE_1__.default.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    url: "/reagent/all",
    title: "Todos los reactivos",
    description: "Muestra todos los reactivos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    url: "/reagent/organic",
    title: "Reactivos Org\xE1nicos",
    description: "Muestra los reactivos org\xE1nicos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    url: "/reagent/inorganic",
    title: "Reactivos Inorg\xE1nicos",
    description: "Muestra los reactivos inorg\xE1nicos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_container_Container__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_periodictable_PeriodicTable__WEBPACK_IMPORTED_MODULE_4__.default, null)));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/button/IndexButton.module.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/button/IndexButton.module.css ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._9Mpetld5gp1hV89FPVoaW {\r\n    border: 2px solid var(--var-primary-color);\r\n}\r\n.C4cIk1S7dcvU-vy_OR-w9 {\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/main/js/css/components/button/IndexButton.module.css"],"names":[],"mappings":"AAAA;IACI,0CAA0C;AAC9C;AACA;;AAEA","sourcesContent":[".section {\r\n    border: 2px solid var(--var-primary-color);\r\n}\r\n.title {\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": "_9Mpetld5gp1hV89FPVoaW",
	"title": "C4cIk1S7dcvU-vy_OR-w9"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/pages/Index.module.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/pages/Index.module.css ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1i6TKAn9HU_tY1jkz2oBr6 {\r\n    margin: 20px 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/main/js/css/pages/Index.module.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB","sourcesContent":[".main {\r\n    margin: 20px 40px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "_1i6TKAn9HU_tY1jkz2oBr6"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main/js/css/components/button/IndexButton.module.css":
/*!******************************************************************!*\
  !*** ./src/main/js/css/components/button/IndexButton.module.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./IndexButton.module.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/button/IndexButton.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IndexButton_module_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/main/js/css/pages/Index.module.css":
/*!************************************************!*\
  !*** ./src/main/js/css/pages/Index.module.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./Index.module.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/pages/Index.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Index_module_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Index_module_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_Index_js.bundle.js.map