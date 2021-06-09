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
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    noline: {
      textDecoration: 'none'
    },
    item: {
      backgroundColor: 'var(--var-grey-color)'
    }
  };
});
/**
 * Main reusable buttons for the index page
 * @param {children, title, url, description} props
 * @returns
 */

function IndexButton(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      url = _ref.url,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "" : _ref$description,
      _ref$avatar = _ref.avatar,
      avatar = _ref$avatar === void 0 ? "" : _ref$avatar,
      props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["title", "url", "description", "avatar"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: true,
    lg: 4,
    xl: 3,
    md: 6,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: url,
    className: classes.noline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    className: classes.item
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__.default, {
    avatar: avatar,
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, null, description))));
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
/* harmony import */ var _components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/button/IndexButton */ "./src/main/js/components/button/IndexButton.js");
/* harmony import */ var _components_periodictable_PeriodicTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/periodictable/PeriodicTable */ "./src/main/js/components/periodictable/PeriodicTable.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    container: {
      margin: '10px 0',
      padding: '20px'
    },
    solvegrid: {
      width: '100%',
      margin: 0
    }
  };
});
function Index() {
  var classes = useStyles();

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    direction: "row",
    spacing: 4,
    className: classes.solvegrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    url: "/reagent/all",
    title: t('index.title.reagentall'),
    description: t('index.description.reagentall')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    url: "/reagent/organic",
    title: t('index.title.reagentorganic'),
    description: t('index.description.reagentorganic')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    url: "/reagent/inorganic",
    title: t('index.title.reagentinorganic'),
    description: t('index.description.reagentinorganic')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    url: "/solution/water",
    title: t('index.title.solacuosas'),
    description: t('index.description.solacuosas')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button_IndexButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    url: "/solution/organic",
    title: t('index.title.solorganic'),
    description: t('index.description.solorganic')
  })));
}

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_Index_js.bundle.js.map