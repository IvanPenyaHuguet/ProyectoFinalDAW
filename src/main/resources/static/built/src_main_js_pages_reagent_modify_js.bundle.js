(self["webpackChunkdaw"] = self["webpackChunkdaw"] || []).push([["src_main_js_pages_reagent_modify_js"],{

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

/***/ "./src/main/js/components/modify/ModifyRowTable.js":
/*!*********************************************************!*\
  !*** ./src/main/js/components/modify/ModifyRowTable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModifyRowTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ReagentModify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReagentModify */ "./src/main/js/components/modify/ReagentModify.js");


function ModifyRowTable(_ref) {
  var row = _ref.row;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReagentModify__WEBPACK_IMPORTED_MODULE_1__.default, {
    row: row
  });
}

/***/ }),

/***/ "./src/main/js/components/modify/ReagentModify.js":
/*!********************************************************!*\
  !*** ./src/main/js/components/modify/ReagentModify.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReagentModify)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _button_ButtonPrincipal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/ButtonPrincipal */ "./src/main/js/components/button/ButtonPrincipal.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    container: {},
    title: {
      textAlign: 'center'
    },
    containertitle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    fab: {
      margin: '0 20px',
      width: '36px',
      maxWidth: '36px',
      height: '36px',
      maxHeight: '36px'
    },
    icon: {
      height: '25px'
    }
  };
});
function ReagentModify(_ref) {
  var row = _ref.row;
  console.log(row);

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      titleEditable = _useState4[0],
      setTitleEditable = _useState4[1];

  var classes = useStyles();

  var onTitleEditClick = function onTitleEditClick(e) {
    setTitleEditable(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.containertitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.title,
    variant: "h3",
    component: "h3"
  }, row.name ? row.name.toUpperCase() : row.spanishName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
    title: t('general.edit'),
    "aria-label": t('general.edit')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__.default, {
    size: "small",
    color: "secondary",
    "aria-label": t('general.edit'),
    className: classes.fab,
    onClick: onTitleEditClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.icon
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_ButtonPrincipal__WEBPACK_IMPORTED_MODULE_2__.default, {
    color: "primary"
  }, t('general.save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_ButtonPrincipal__WEBPACK_IMPORTED_MODULE_2__.default, {
    color: "secondary",
    onClick: handleClose
  }, t('general.close')))));
}

/***/ }),

/***/ "./src/main/js/pages/reagent/modify.js":
/*!*********************************************!*\
  !*** ./src/main/js/pages/reagent/modify.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Add)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_modify_ModifyRowTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modify/ModifyRowTable */ "./src/main/js/components/modify/ModifyRowTable.js");


function Add(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_modify_ModifyRowTable__WEBPACK_IMPORTED_MODULE_1__.default, props);
}

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_reagent_modify_js.bundle.js.map