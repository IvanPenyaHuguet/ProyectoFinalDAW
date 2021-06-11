(self["webpackChunkdaw"] = self["webpackChunkdaw"] || []).push([["src_main_js_pages_admin_Index_js"],{

/***/ "./src/main/js/components/admin/AddUser.js":
/*!*************************************************!*\
  !*** ./src/main/js/components/admin/AddUser.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyles": () => (/* binding */ useStyles),
/* harmony export */   "default": () => (/* binding */ AddUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/Form */ "./src/main/js/components/form/Form.js");
/* harmony import */ var _form_MUIFormInputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/MUIFormInputText */ "./src/main/js/components/form/MUIFormInputText.js");
/* harmony import */ var _lib_entities_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/entities/User */ "./src/main/js/lib/entities/User.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _popups_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popups/Alert */ "./src/main/js/components/popups/Alert.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    formadd: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 15px 20px'
    },
    buttonContainer: {
      margin: '0 20px',
      alignSelf: 'center'
    }
  };
});
function AddUser(_ref) {
  var reload = _ref.reload,
      setReload = _ref.setReload;
  var user = new _lib_entities_User__WEBPACK_IMPORTED_MODULE_5__.default();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      alert = _useState2[0],
      setAlert = _useState2[1];

  user.getInitialValue();

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)(),
      t = _useTranslation.t;

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, alert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_popups_Alert__WEBPACK_IMPORTED_MODULE_6__.default, {
    open: alert ? true : false,
    setOpen: setAlert,
    type: alert.type
  }, alert.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: user.getValues(),
    validationSchema: user.getValidationSchema(t),
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting,
          resetForm = _ref2.resetForm;
      user.save(values, setSubmitting, setAlert).then(function () {
        setReload(reload + 1);
        resetForm(user.getValues());
      });
    }
  }, function (_ref3) {
    var submitForm = _ref3.submitForm,
        isSubmitting = _ref3.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_Form__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.formadd,
      elevation: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_MUIFormInputText__WEBPACK_IMPORTED_MODULE_4__.default, {
      label: t('form.user.add.name'),
      name: "name"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_MUIFormInputText__WEBPACK_IMPORTED_MODULE_4__.default, {
      label: t('form.user.add.surname'),
      name: "surname"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_MUIFormInputText__WEBPACK_IMPORTED_MODULE_4__.default, {
      label: t('form.user.add.username'),
      name: "username"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_MUIFormInputText__WEBPACK_IMPORTED_MODULE_4__.default, {
      label: t('form.user.add.password'),
      name: "pass",
      type: "password"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
      variant: "contained",
      color: "primary",
      disabled: isSubmitting,
      onClick: submitForm,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__.default, null),
      className: classes.buttonContainer
    }, t('general.add'))));
  }));
}

/***/ }),

/***/ "./src/main/js/components/admin/AdminUser.js":
/*!***************************************************!*\
  !*** ./src/main/js/components/admin/AdminUser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUser */ "./src/main/js/components/admin/AddUser.js");
/* harmony import */ var _UserTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserTable */ "./src/main/js/components/admin/UserTable.js");




function AdminUser() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      reload = _useState2[0],
      setReload = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_AddUser__WEBPACK_IMPORTED_MODULE_2__.default, {
    reload: reload,
    setReload: setReload
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserTable__WEBPACK_IMPORTED_MODULE_3__.default, {
    reload: reload
  }));
}

/***/ }),

/***/ "./src/main/js/components/admin/Funciones.js":
/*!***************************************************!*\
  !*** ./src/main/js/components/admin/Funciones.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Funciones)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _funciones_SelectUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funciones/SelectUser */ "./src/main/js/components/admin/funciones/SelectUser.js");
/* harmony import */ var _funciones_SelectFunciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funciones/SelectFunciones */ "./src/main/js/components/admin/funciones/SelectFunciones.js");
/* harmony import */ var _service_backend_Services_RoleService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/backend/Services/RoleService */ "./src/main/js/service/backend/Services/RoleService.js");





function Funciones() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      allRoles = _useState4[0],
      setAllRoles = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _service_backend_Services_RoleService__WEBPACK_IMPORTED_MODULE_4__.default.getAll().then(function (res) {
      setAllRoles(res.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_funciones_SelectUser__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    setUser: setUser
  }), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_funciones_SelectFunciones__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    setUser: setUser,
    allRoles: allRoles
  }));
}

/***/ }),

/***/ "./src/main/js/components/admin/MainWindow.js":
/*!****************************************************!*\
  !*** ./src/main/js/components/admin/MainWindow.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainWindow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBar */ "./src/main/js/components/admin/TabBar.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanel */ "./src/main/js/components/admin/TabPanel.js");
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddUser */ "./src/main/js/components/admin/AddUser.js");
/* harmony import */ var _AdminUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminUser */ "./src/main/js/components/admin/AdminUser.js");
/* harmony import */ var _Funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Funciones */ "./src/main/js/components/admin/Funciones.js");







function MainWindow() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var handleTabChange = function handleTabChange(e, newValue) {
    setTab(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_TabBar__WEBPACK_IMPORTED_MODULE_2__.default, {
    value: tab,
    handleChange: handleTabChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_TabPanel__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_AdminUser__WEBPACK_IMPORTED_MODULE_5__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_TabPanel__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Funciones__WEBPACK_IMPORTED_MODULE_6__.default, null)));
}

/***/ }),

/***/ "./src/main/js/components/admin/TabBar.js":
/*!************************************************!*\
  !*** ./src/main/js/components/admin/TabBar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AuthContextProvider */ "./src/main/js/context/AuthContextProvider.js");









function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}

function TabBar(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_4__.AuthContext),
      user = _useContext.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(user.role),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      userRole = _useState2[0],
      setUserRole = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (user != null) {
      setUserRole(user.role);
    } else {
      setUserRole(null);
    }
  }, [user]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__.default, {
    position: "static",
    color: "default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__.default, {
    value: value,
    onChange: handleChange,
    variant: "scrollable",
    scrollButtons: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: "Usuarios"
  }, a11yProps(0), {
    disabled: !_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2___default()(userRole).call(userRole, "ROLE_MODIFY_USERS")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: "Funciones"
  }, a11yProps(1), {
    disabled: !_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2___default()(userRole).call(userRole, "ROLE_ADD_ROLES")
  }))));
}

/***/ }),

/***/ "./src/main/js/components/admin/TabPanel.js":
/*!**************************************************!*\
  !*** ./src/main/js/components/admin/TabPanel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");


var _excluded = ["children", "value", "index"];


function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    p: 3
  }, children));
}

/***/ }),

/***/ "./src/main/js/components/admin/UserTable.js":
/*!***************************************************!*\
  !*** ./src/main/js/components/admin/UserTable.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyles": () => (/* binding */ useStyles),
/* harmony export */   "default": () => (/* binding */ UserTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _lib_entities_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/entities/User */ "./src/main/js/lib/entities/User.js");
/* harmony import */ var _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/error/ErrorController */ "./src/main/js/service/error/ErrorController.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");












function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_9___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_5___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } } return target; }









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.default)(function (theme) {
  return {
    tablecontainer: {
      margin: '20px 0',
      display: 'flex',
      height: '100%'
    },
    root: {
      '& .MuiDataGrid-cellEditing': {
        backgroundColor: 'rgb(255,215,115, 0.19)',
        color: '#1a3e72'
      },
      '& .Mui-error': {
        backgroundColor: "rgb(126,10,15, 0.2)",
        color: '#750f0f',
        fontStyle: 'italic'
      }
    }
  };
});

var columns = function columns(t) {
  return [{
    field: 'name',
    headerName: t('table.user.name'),
    type: 'string',
    flex: 1,
    editable: true
  }, {
    field: 'surname',
    headerName: t('table.user.surname'),
    type: 'string',
    flex: 1,
    editable: true
  }, {
    field: 'username',
    headerName: t('table.user.username'),
    type: 'string',
    flex: 1,
    editable: true
  }, {
    field: 'pass',
    headerName: t('table.user.pass'),
    type: 'string',
    flex: 1,
    editable: true
  }, {
    field: 'creationDate',
    headerName: t('table.user.creationDate'),
    type: 'dateTime',
    flex: 0.7,
    editable: false
  }];
};

function validateText(text) {
  var re = /^[a-zA-Z ]{3,50}/;
  return re.test(String(text).toLowerCase());
}

var getData = function getData(setLoading, setData, setTotalElements, fetchIdRef) {
  var user = new _lib_entities_User__WEBPACK_IMPORTED_MODULE_12__.default();
  var fetchId = ++fetchIdRef.current;

  if (fetchId === fetchIdRef.current) {
    setLoading(true);
    user.getAll().then(function (result) {
      setLoading(false);
      setData(result.data.data);
      setTotalElements(result.data.totalElements);
    })["catch"](function (err) {
      _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_13__.default.checkError(err);
    });
  }
};

function UserTable(_ref) {
  var reload = _ref.reload;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)(),
      t = _useTranslation.t;

  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.default)(_useState5, 2),
      totalElements = _useState6[0],
      setTotalElements = _useState6[1];

  var fetchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(0);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({}),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.default)(_useState7, 2),
      editRowsModel = _useState8[0],
      setEditRowsModel = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    getData(setLoading, setData, setTotalElements, fetchIdRef);
  }, [reload]);
  var handleEditCellChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(function (_ref2) {
    var id = _ref2.id,
        field = _ref2.field,
        props = _ref2.props;
    var values = props;

    if (field === 'name') {
      var isValid = validateText(values.value);
      var newState = {};
      newState[id] = _objectSpread(_objectSpread({}, editRowsModel[id]), {}, {
        name: _objectSpread(_objectSpread({}, props), {}, {
          error: !isValid
        })
      });
      setEditRowsModel(function (state) {
        return _objectSpread(_objectSpread({}, state), newState);
      });
    } else if (field === 'surname') {
      var _isValid = validateText(values.value);

      var _newState = {};
      _newState[id] = _objectSpread(_objectSpread({}, editRowsModel[id]), {}, {
        surname: _objectSpread(_objectSpread({}, props), {}, {
          error: !_isValid
        })
      });
      setEditRowsModel(function (state) {
        return _objectSpread(_objectSpread({}, state), _newState);
      });
    } else if (field === 'pass') {
      var _isValid2 = validateText(values.value);

      var _newState2 = {};
      _newState2[id] = _objectSpread(_objectSpread({}, editRowsModel[id]), {}, {
        pass: _objectSpread(_objectSpread({}, props), {}, {
          error: !_isValid2
        })
      });
      setEditRowsModel(function (state) {
        return _objectSpread(_objectSpread({}, state), _newState2);
      });
    } else if (field === 'username') {
      var _isValid3 = validateText(values.value);

      var _newState3 = {};
      _newState3[id] = _objectSpread(_objectSpread({}, editRowsModel[id]), {}, {
        username: _objectSpread(_objectSpread({}, props), {}, {
          error: !_isValid3
        })
      });
      setEditRowsModel(function (state) {
        return _objectSpread(_objectSpread({}, state), _newState3);
      });
    }
  }, [editRowsModel]);
  var handleEditCellChangeCommitted = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(function (_ref3) {
    var id = _ref3.id,
        field = _ref3.field,
        props = _ref3.props;
    var user = new _lib_entities_User__WEBPACK_IMPORTED_MODULE_12__.default();
    var values = props;

    var rowToSave = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_9___default()(data).call(data, function (row) {
      if (row.id === id) {
        row[field] = values.value;
        return _objectSpread({}, row);
      }
    });

    user.save(rowToSave[0], setLoading).then(function (res) {
      console.log(res);

      var updatedRows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(data).call(data, function (row) {
        if (row.id === id) {
          return res.data;
        }

        return row;
      });

      setData(updatedRows);
    })["catch"](function (err) {
      _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_13__.default.checkError(err);
    });
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__.default, {
    elevation: 3,
    className: classes.tablecontainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_17__.DataGrid, {
    className: classes.root,
    components: {
      Toolbar: _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_17__.GridToolbar,
      LoadingOverlay: CustomLoadingOverlay
    },
    columns: columns(t),
    rows: data,
    loading: loading,
    hideFooter: true,
    autoHeight: true,
    editRowsModel: editRowsModel,
    onEditCellChange: handleEditCellChange,
    onEditCellChangeCommitted: handleEditCellChangeCommitted
  }));
}

function CustomLoadingOverlay() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_17__.GridOverlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_18__.default, null)));
}

/***/ }),

/***/ "./src/main/js/components/admin/funciones/ListFunciones.js":
/*!*****************************************************************!*\
  !*** ./src/main/js/components/admin/funciones/ListFunciones.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Funciones)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");













var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    tablecontainer: (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
      width: 400,
      height: 450,
      overflow: 'auto'
    }, theme.breakpoints.down('md'), {
      width: '250px',
      height: '300px'
    })
  };
});
function Funciones(_ref) {
  var roles = _ref.roles,
      checked = _ref.checked,
      setChecked = _ref.setChecked;
  var classes = useStyles();

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2___default()(checked).call(checked, value);

      var newChecked = (0,_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(newChecked).call(newChecked, currentIndex, 1);
      }

      setChecked(newChecked);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecontainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__.default, {
    dense: true,
    component: "div",
    role: "list"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(roles).call(roles, function (value) {
    var labelId = "transfer-list-item-".concat(value, "-label");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
      key: value.id,
      role: "listitem",
      button: true,
      onClick: handleToggle(value)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
      checked: _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_2___default()(checked).call(checked, value) !== -1,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__.default, {
      id: labelId,
      primary: value.description
    }));
  })));
}

/***/ }),

/***/ "./src/main/js/components/admin/funciones/SelectFunciones.js":
/*!*******************************************************************!*\
  !*** ./src/main/js/components/admin/funciones/SelectFunciones.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Funciones)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../service/backend/Services/UserService */ "./src/main/js/service/backend/Services/UserService.js");
/* harmony import */ var _ListFunciones_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ListFunciones.js */ "./src/main/js/components/admin/funciones/ListFunciones.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");



function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_6___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_9___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(source, key)); }); } } return target; }





















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__.default)(function (theme) {
  return {
    root: {
      margin: 'auto'
    },
    tablecontainer: {
      margin: '20px 0',
      display: 'flex',
      height: '100%'
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  };
});

function intersection(a, b) {
  var bId = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(b).call(b, function (val) {
    return val.id;
  });

  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(a).call(a, function (value) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_11___default()(bId).call(bId, value.id) !== -1;
  });
}

function not(a, b) {
  var bId = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(b).call(b, function (val) {
    return val.id;
  });

  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(a).call(a, function (value) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_11___default()(bId).call(bId, value.id) === -1;
  });
}

function Funciones(_ref) {
  var user = _ref.user,
      setUser = _ref.setUser,
      allRoles = _ref.allRoles;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      left = _useState2[0],
      setLeft = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
      right = _useState4[0],
      setRight = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState5, 2),
      checked = _useState6[0],
      setChecked = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState7, 2),
      submitting = _useState8[0],
      setSubmitting = _useState8[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)(),
      t = _useTranslation.t;

  var leftChecked = intersection(checked, left);
  var rightChecked = intersection(checked, right);

  var handleAllRight = function handleAllRight() {
    setRight(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(right).call(right, left));
    setLeft([]);
  };

  var handleCheckedRight = function handleCheckedRight() {
    setRight(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(right).call(right, leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  var handleCheckedLeft = function handleCheckedLeft() {
    setLeft(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(left).call(left, rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  var handleAllLeft = function handleAllLeft() {
    setLeft(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(left).call(left, right));
    setRight([]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    setRight(user.role);
    setLeft(not(allRoles, user.role));
  }, [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (user.role.length != right.length && right.length != 0) {
      setSubmitting(true);

      var newUser = _objectSpread({}, user);

      newUser.role = right;
      _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_14__.default.save(newUser).then(function (res) {
        setUser(res.data);
        setSubmitting(false);
      });
    }
  }, [right]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__.default, {
    className: classes.tablecontainer,
    elevation: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__.default, {
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center",
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__.default, {
    variant: "h5",
    gutterBottom: true
  }, t('admin.funciones.selectfunciones.rolestoassign')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_ListFunciones_js__WEBPACK_IMPORTED_MODULE_15__.default, {
    roles: left,
    checked: checked,
    setChecked: setChecked
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__.default, {
    container: true,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default, (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: handleAllRight,
    disabled: left.length === 0,
    "aria-label": "move all right"
  }, "disabled", submitting), "\u226B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default, (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: handleCheckedRight,
    disabled: leftChecked.length === 0,
    "aria-label": "move selected right"
  }, "disabled", submitting), ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default, (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: handleCheckedLeft,
    disabled: rightChecked.length === 0,
    "aria-label": "move selected left"
  }, "disabled", submitting), "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default, (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: handleAllLeft,
    disabled: right.length === 0,
    "aria-label": "move all left"
  }, "disabled", submitting), "\u226A"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__.default, {
    variant: "h5",
    gutterBottom: true
  }, t('admin.funciones.selectfunciones.userroles')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_ListFunciones_js__WEBPACK_IMPORTED_MODULE_15__.default, {
    roles: right,
    checked: checked,
    setChecked: setChecked
  }))));
}

/***/ }),

/***/ "./src/main/js/components/admin/funciones/SelectUser.js":
/*!**************************************************************!*\
  !*** ./src/main/js/components/admin/funciones/SelectUser.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _popups_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../popups/Alert */ "./src/main/js/components/popups/Alert.js");
/* harmony import */ var _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../service/backend/Services/UserService */ "./src/main/js/service/backend/Services/UserService.js");
/* harmony import */ var _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../service/error/ErrorController */ "./src/main/js/service/error/ErrorController.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");













function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context4; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__.default)(function (theme) {
  return {
    formadd: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 15px 20px'
    },
    buttonContainer: {
      margin: '0 20px',
      alignSelf: 'center'
    }
  };
});

var renderOption = function renderOption(option, _ref) {
  var inputValue = _ref.inputValue;
  var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16___default()(option, inputValue);
  var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_15___default()(option, matches);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_13___default()(parts).call(parts, function (part, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("span", {
      key: index,
      style: {
        fontWeight: part.highlight ? 700 : 400
      }
    }, part.text);
  }));
};

function AdminUser(_ref2) {
  var user = _ref2.user,
      setUser = _ref2.setUser;
  var classes = useStyles();

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState, 2),
      alert = _useState2[0],
      setAlert = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState9, 2),
      autocomplete = _useState10[0],
      setAutocomplete = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(user ? user : ''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.default)(_useState11, 2),
      inputValue = _useState12[0],
      setInputValue = _useState12[1];

  var loading = open && options.length === 0;

  var onDeleteClick = function onDeleteClick() {
    setSelected(false);
    _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_18__.default.delete(user).then(function (res) {
      if (res.status == 200) {
        setAlert({
          type: 'success',
          message: t('admin.funciones.selectuser.deletesuccess')
        });
      } else {
        setAlert({
          type: 'error',
          message: t('admin.funciones.selectuser.deleteerror')
        });
      }

      setUser(undefined);
      setInputValue('');
    })["catch"](function (err) {
      _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_19__.default.checkError(err, setAlert);
      setSelected(true);
    });
  };

  var onAutoCompleteChange = function onAutoCompleteChange(e, newValue) {
    setAutocomplete(newValue || undefined);
  };

  var onInputChange = function onInputChange(event, newInputValue) {
    setInputValue(newInputValue);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    setSelected(false);

    if (autocomplete != null) {
      _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_18__.default.getById({
        id: autocomplete === null || autocomplete === void 0 ? void 0 : autocomplete.split(":")[0]
      }).then(function (res) {
        if (res.status != 200) {
          setAlert({
            type: 'error',
            message: t('admin.funciones.selectuser.deleteerror')
          });
        } else {
          setUser(res.data);
          setSelected(true);
        }
      })["catch"](function (err) {
        _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_19__.default.checkError(err, setAlert);
        setSelected(true);
      });
    }
  }, [autocomplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    var active = true;

    if (!loading) {
      return undefined;
    }

    try {
      (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default().mark(function _callee() {
        var _context;

        var response, objects;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default().wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_18__.default.getAll();

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_13___default()(_context = response.data.data).call(_context, function (n) {
                  return n.id + ": " + n.name + " " + n.surname + " --- " + n.username;
                });

              case 5:
                objects = _context2.sent;

                if (active) {
                  setOptions(objects);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }))();
    } catch (e) {
      errorService.checkError(e);
    }

    return function () {
      active = false;
    };
  }, [loading]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__.default, {
    className: classes.formadd,
    elevation: 3
  }, alert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_popups_Alert__WEBPACK_IMPORTED_MODULE_17__.default, {
    open: alert ? true : false,
    setOpen: setAlert,
    type: alert.type
  }, alert.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_23__.default, {
    id: "id-autocomplete-users",
    options: options,
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    autoHighlight: true,
    clearOnEscape: true,
    autoComplete: true,
    openOnFocus: true,
    blurOnSelect: true,
    value: autocomplete,
    onChange: onAutoCompleteChange,
    inputValue: inputValue,
    style: {
      width: '300px'
    },
    onInputChange: onInputChange,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__.default, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8__.default)({}, params, {
        label: t('admin.funciones.selectuser.user'),
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react__WEBPACK_IMPORTED_MODULE_14__.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_25__.default, {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return option === value;
    },
    renderOption: renderOption,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: function onClose() {
      return setOpen(false);
    },
    loading: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__.default, {
    variant: "contained",
    color: "primary",
    disabled: !selected,
    onClick: onDeleteClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_27__.default, null),
    className: classes.buttonContainer
  }, t('general.delete')));
}

/***/ }),

/***/ "./src/main/js/lib/entities/User.js":
/*!******************************************!*\
  !*** ./src/main/js/lib/entities/User.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/backend/Services/UserService */ "./src/main/js/service/backend/Services/UserService.js");
/* harmony import */ var _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/error/ErrorController */ "./src/main/js/service/error/ErrorController.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);












function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__.default)(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var User = /*#__PURE__*/function () {
  function User() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__.default)(this, User);

    this.id;
    this.name;
    this.surname;
    this.roles;
    this.username;
    this.pass;
    this.creationDate;
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.default)(User, [{
    key: "getInitialValue",
    value: function getInitialValue() {
      this.id = null;
      this.name = '';
      this.surname = '';
      this.roles = [];
      this.username = '';
      this.pass = '';
      this.creationDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()();
    }
  }, {
    key: "getValidationSchema",
    value: function getValidationSchema(t) {
      return yup__WEBPACK_IMPORTED_MODULE_12__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_12__.string().min(2, t('form.add.errors.tooshort')).max(50, t('form.add.errors.toolong')).required(t('form.add.errors.required')),
        surname: yup__WEBPACK_IMPORTED_MODULE_12__.string().min(2, t('form.add.errors.tooshort')).max(50, t('form.add.errors.toolong')).required(t('form.add.errors.required')),
        username: yup__WEBPACK_IMPORTED_MODULE_12__.string().min(3, t('form.add.errors.tooshort')).max(50, t('form.add.errors.toolong')).required(t('form.add.errors.required')),
        pass: yup__WEBPACK_IMPORTED_MODULE_12__.string().min(3, t('form.add.errors.tooshort')).max(50, t('form.add.errors.toolong')).required(t('form.add.errors.required'))
      });
    }
  }, {
    key: "save",
    value: function save(values, setSubmitting, setAlert) {
      return _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_13__.default.save(values).then(function (res) {
        if (res.status != 200 && res.status != 412) {
          setAlert ? setAlert({
            type: 'error',
            message: i18next__WEBPACK_IMPORTED_MODULE_11__.default.t('form.add.errors.unsuccesful')
          }) : null;
        }

        if (res.status == 412) {
          setAlert ? setAlert({
            type: 'error',
            message: i18next__WEBPACK_IMPORTED_MODULE_11__.default.t('form.add.errors.usernameexists')
          }) : null;
        }

        if (res.status == 200) {
          setAlert ? setAlert({
            type: 'success',
            message: i18next__WEBPACK_IMPORTED_MODULE_11__.default.t('form.message.add.success')
          }) : null;
        }

        setSubmitting(false);
        return res;
      })["catch"](function (e) {
        _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_14__.default.checkError(e, setAlert);
        setSubmitting(false);
      });
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return {
        id: this.id,
        name: this.name,
        surname: this.surname,
        roles: this.roles,
        username: this.username,
        pass: this.pass,
        creationDate: this.creationDate
      };
    }
  }, {
    key: "delete",
    value: function _delete(user, setAlert) {
      _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_13__.default.delete(_objectSpread({}, user)).then(function (res) {
        if (res.status != 200) {
          setAlert ? setAlert({
            type: 'error',
            message: i18next__WEBPACK_IMPORTED_MODULE_11__.default.t('form.modify.delete.unsuccesful')
          }) : null;
        } else {
          setAlert ? setAlert({
            type: 'success',
            message: i18next__WEBPACK_IMPORTED_MODULE_11__.default.t('form.modify.delete.user.succesful')
          }) : null;
        }
      })["catch"](function (e) {
        _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_14__.default.checkError(e, setAlert);
        setSubmitting(false);
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return _service_backend_Services_UserService__WEBPACK_IMPORTED_MODULE_13__.default.getAll();
    }
  }]);

  return User;
}();



/***/ }),

/***/ "./src/main/js/pages/admin/Index.js":
/*!******************************************!*\
  !*** ./src/main/js/pages/admin/Index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_admin_MainWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin/MainWindow */ "./src/main/js/components/admin/MainWindow.js");


function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_admin_MainWindow__WEBPACK_IMPORTED_MODULE_1__.default, null);
}

/***/ }),

/***/ "./src/main/js/service/backend/Services/RoleService.js":
/*!*************************************************************!*\
  !*** ./src/main/js/service/backend/Services/RoleService.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseService */ "./src/main/js/service/backend/BaseService.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _BaseService__WEBPACK_IMPORTED_MODULE_0__.default("/auth/role"));

/***/ }),

/***/ "./src/main/js/service/backend/Services/UserService.js":
/*!*************************************************************!*\
  !*** ./src/main/js/service/backend/Services/UserService.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseService */ "./src/main/js/service/backend/BaseService.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _BaseService__WEBPACK_IMPORTED_MODULE_0__.default("/auth/user"));

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_admin_Index_js.bundle.js.map