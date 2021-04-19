(self["webpackChunkdaw"] = self["webpackChunkdaw"] || []).push([["src_main_js_pages_reagent_AllReagents_js"],{

/***/ "./src/main/js/components/table/ReagentTable.js":
/*!******************************************************!*\
  !*** ./src/main/js/components/table/ReagentTable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/backend/AllReagentService */ "./src/main/js/service/backend/AllReagentService.js");
/* harmony import */ var _basecomponents_TableBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basecomponents/TableBase */ "./src/main/js/components/table/basecomponents/TableBase.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _context_SearchFieldContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/SearchFieldContext */ "./src/main/js/context/SearchFieldContext.js");
/* harmony import */ var _context_SearchElementsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/SearchElementsContext */ "./src/main/js/context/SearchElementsContext.js");
/* harmony import */ var _service_backend_SearchService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/backend/SearchService */ "./src/main/js/service/backend/SearchService.js");
/* harmony import */ var _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/error/ErrorController */ "./src/main/js/service/error/ErrorController.js");
/* harmony import */ var _filter_SelectColumnFilterLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter/SelectColumnFilterLocation */ "./src/main/js/components/table/filter/SelectColumnFilterLocation.js");
/* harmony import */ var _hooks_useHasChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useHasChanged */ "./src/main/js/hooks/useHasChanged.js");



















var ReagentTable = function ReagentTable() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)(),
      t = _useTranslation.t;

  var TITLE = t('table.title.reagents');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var skipPageResetRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var oldData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      controlledPageCount = _useState6[0],
      setControlledPageCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),
      totalElements = _useState8[0],
      setTotalElements = _useState8[1];

  var fetchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);
  var columns = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return [{
      Header: t('table.column.id'),
      accessor: "id",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.reference'),
      accessor: "internalReference",
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.spanishName'),
      accessor: "spanishName",
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.englishName'),
      accessor: "englishName",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.elements'),
      accesor: "elements",
      id: "elements",
      show: true,
      Cell: function Cell(row) {
        var _context;

        var elements = row.row.original.elements;
        var counts = {};

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(elements).call(elements, function (element) {
          counts[element.atomicNumber] = {
            total: counts[element.atomicNumber] ? counts[element.atomicNumber].total + 1 : 1,
            element: element
          };
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(counts)).call(_context, function (item, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__.default, {
            avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__.default, null, counts[item].element.element),
            label: counts[item].total,
            variant: "outlined",
            key: i
          });
        }));
      },
      disableSortBy: true,
      disableFilters: true
    }, {
      Header: t('table.column.formula'),
      accesor: "formula",
      id: "formula",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.type'),
      accessor: "reagentType",
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.quantity'),
      accessor: "quantity",
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.location'),
      accessor: "location.name",
      disableSortBy: false,
      disableFilters: false,
      Filter: _filter_SelectColumnFilterLocation__WEBPACK_IMPORTED_MODULE_12__.default
    }, {
      Header: t('table.column.utilization'),
      accessor: "utilization",
      disableSortBy: true,
      disableFilters: true
    }, {
      Header: t('table.column.cas'),
      accessor: "cas",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.receptionDate'),
      accessor: "entryDate",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.boughtBy'),
      accessor: "user.name",
      show: false,
      disableSortBy: true,
      disableFilters: true
    }, {
      Header: t('table.column.molecularWeight'),
      accessor: "molecularWeight",
      show: false,
      disableSortBy: false,
      disableFilters: true
    }, {
      Header: t('table.column.supplier'),
      accesor: "suppliers",
      id: "suppliers",
      show: false,
      Cell: function Cell(row) {
        var _context2;

        var suppliers = row.row.original.suppliers;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(suppliers)).call(_context2, function (item, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
            key: suppliers[item].supplier.id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
            className: ""
          }, suppliers[item].supplier.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__.default, {
            orientation: "vertical",
            flexItem: true
          }));
        }));
      },
      disableSortBy: true,
      disableFilters: true
    }];
  }, []);
  var searchFields = [{
    value: "spanishName",
    name: t('table.column.spanishName'),
    selected: true
  }, {
    value: "englishName",
    name: t('table.column.englishName'),
    selected: true
  }, {
    value: "cas",
    name: t('table.column.cas'),
    selected: false
  }, {
    value: "internalReference",
    name: t('table.column.reference'),
    selected: true
  }, {
    value: "utilization",
    name: t('table.column.utilization'),
    selected: false
  }, {
    value: "elements.englishName",
    name: t('table.column.elements'),
    selected: false
  }, {
    value: "secondaryIntReference",
    name: t('table.column.secondaryintreference'),
    selected: true
  }];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(searchFields),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),
      fieldsToSearch = _useState10[0],
      setFieldsToSearch = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState11, 2),
      elementsToSearch = _useState12[0],
      setElementsToSearch = _useState12[1];

  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (pageindex, pagesize, textToSearch, elementsToSearch, sortBy, filterLocation) {
    var fetchId = ++fetchIdRef.current;
    var filterLocationChanged = filterLocation !== '' && filterLocation !== '0';
    var elementsChanged = elementsToSearch && _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(elementsToSearch).length > 0;
    var textChanged = textToSearch !== '';

    if (fetchId === fetchIdRef.current) {
      setLoading(true);

      if (elementsChanged) {
        _service_backend_SearchService__WEBPACK_IMPORTED_MODULE_10__.default.searchReagentByElements(pageindex, pagesize, elementsToSearch).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_11__.default.checkError(err);
        });
        console.log("elements");
      } else if (filterLocationChanged) {
        _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_6__.default.getPageLocation(filterLocation, pageindex, pagesize, sortBy).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_11__.default.checkError(err);
        });
      } else if (textChanged) {
        var _context3;

        _service_backend_SearchService__WEBPACK_IMPORTED_MODULE_10__.default.searchReagentPage(pageindex, pagesize, textToSearch, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(fieldsToSearch).call(fieldsToSearch, function (_ref) {
          var selected = _ref.selected;
          return selected === true;
        })).call(_context3, function (_ref2) {
          var value = _ref2.value;
          return value;
        })).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_11__.default.checkError(err);
        });
        console.log("text");
      } else {
        _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_6__.default.getPage(pageindex, pagesize, sortBy).then(function (res) {
          return processResult(res);
        })["catch"](function (e) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_11__.default.checkError(e);
        });
      }

      var processResult = function processResult(result) {
        setLoading(false);
        setControlledPageCount(result.data.numPages);
        setTotalElements(result.data.totalElements);
        setData(result.data.data);
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_context_SearchFieldContext__WEBPACK_IMPORTED_MODULE_8__.SearchFieldContext.Provider, {
    value: {
      fieldsToSearch: fieldsToSearch,
      setFieldsToSearch: setFieldsToSearch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_context_SearchElementsContext__WEBPACK_IMPORTED_MODULE_9__.SearchElementsContext.Provider, {
    value: {
      elementsToSearch: elementsToSearch,
      setElementsToSearch: setElementsToSearch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_basecomponents_TableBase__WEBPACK_IMPORTED_MODULE_7__.default, {
    columns: columns,
    backendService: _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_6__.default,
    loading: loading,
    data: data,
    controlledPageCount: controlledPageCount,
    totalElements: totalElements,
    title: TITLE,
    fetchData: fetchData,
    searchFields: searchFields
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReagentTable);

/***/ }),

/***/ "./src/main/js/components/table/filter/SelectColumnFilter.js":
/*!*******************************************************************!*\
  !*** ./src/main/js/components/table/filter/SelectColumnFilter.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectColumnFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/Container */ "./src/main/js/components/container/Container.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _css_components_table_filter_SelectColumn_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../css/components/table/filter/SelectColumn.module.css */ "./src/main/js/css/components/table/filter/SelectColumn.module.css");

















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  };
});
function SelectColumnFilter(_ref) {
  var filter = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_ref),
      setFilter = _ref.setFilter,
      labelname = _ref.labelname,
      store = _ref.store;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var classes = useStyles();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var onSelectChange = function onSelectChange(e) {
    setFilter(e.target.value || undefined);
  };

  var onClick = function onClick(e) {
    setAnchorEl(e.currentTarget);
  };

  var onCloseClick = function onCloseClick() {
    setAnchorEl(null);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (store) {
      setItems(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(store).call(store, function (col) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__.default, {
          key: col.id,
          value: col.id
        }, col.name);
      }));
    }
  }, [store]);
  var open = Boolean(anchorEl);
  var idn = open ? 'pertableele' : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_container_Container__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: _css_components_table_filter_SelectColumn_module_css__WEBPACK_IMPORTED_MODULE_5__.default.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__.default, {
    title: t('table.filter')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
    "aria-label": t('table.filter'),
    onClick: onClick,
    "aria-describedby": idn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__.default, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    open: open,
    anchorEl: anchorEl,
    onClose: onCloseClick,
    id: idn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__.default, {
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15__.default, {
    id: "label".concat(labelname)
  }, labelname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__.default, {
    labelId: "label".concat(labelname),
    id: "select".concat(labelname),
    value: filter,
    onChange: onSelectChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__.default, {
    value: "0"
  }, t("all")), items)))));
}

/***/ }),

/***/ "./src/main/js/components/table/filter/SelectColumnFilterLocation.js":
/*!***************************************************************************!*\
  !*** ./src/main/js/components/table/filter/SelectColumnFilterLocation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectColumnFilterLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SelectColumnFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectColumnFilter */ "./src/main/js/components/table/filter/SelectColumnFilter.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _context_store_LocationStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/store/LocationStore */ "./src/main/js/context/store/LocationStore.js");
/* harmony import */ var _context_utils_FilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/utils/FilterContext */ "./src/main/js/context/utils/FilterContext.js");





function SelectColumnFilterLocation() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t;

  var locations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_store_LocationStore__WEBPACK_IMPORTED_MODULE_2__.LocationStore);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_utils_FilterContext__WEBPACK_IMPORTED_MODULE_3__.FilterContext),
      filterLocation = _useContext.filterLocation,
      setFilterLocation = _useContext.setFilterLocation;

  var memoLocations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return locations;
  }, [locations]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectColumnFilter__WEBPACK_IMPORTED_MODULE_1__.default, {
    setFilter: setFilterLocation,
    filter: filterLocation,
    labelname: t('table.column.location'),
    store: memoLocations
  });
}

/***/ }),

/***/ "./src/main/js/hooks/useHasChanged.js":
/*!********************************************!*\
  !*** ./src/main/js/hooks/useHasChanged.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHasChanged)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function useHasChanged(val) {
  var prevVal = usePrevious(val);
  return prevVal !== val;
}

var usePrevious = function usePrevious(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

/***/ }),

/***/ "./src/main/js/pages/reagent/AllReagents.js":
/*!**************************************************!*\
  !*** ./src/main/js/pages/reagent/AllReagents.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllReagents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_table_ReagentTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/table/ReagentTable */ "./src/main/js/components/table/ReagentTable.js");


function AllReagents() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_table_ReagentTable__WEBPACK_IMPORTED_MODULE_1__.default, null));
}

/***/ }),

/***/ "./src/main/js/service/backend/SearchService.js":
/*!******************************************************!*\
  !*** ./src/main/js/service/backend/SearchService.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BackendServiceConf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackendServiceConf */ "./src/main/js/service/BackendServiceConf.js");







var SearchService = /*#__PURE__*/function () {
  function SearchService() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SearchService);

    _BackendServiceConf__WEBPACK_IMPORTED_MODULE_5__.default.config((axios__WEBPACK_IMPORTED_MODULE_4___default()));
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SearchService, [{
    key: "searchReagentPage",
    value: function () {
      var _searchReagentPage = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(page, size, search, fields) {
        var URL;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                URL = "/search/reagent";
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api" + URL, {
                  page: page,
                  size: size,
                  search: search,
                  fields: fields
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchReagentPage(_x, _x2, _x3, _x4) {
        return _searchReagentPage.apply(this, arguments);
      }

      return searchReagentPage;
    }()
  }, {
    key: "searchReagentByElements",
    value: function () {
      var _searchReagentByElements = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(page, size, search) {
        var URL;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                URL = "/search/elements/reagent";
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api" + URL, {
                  page: page,
                  size: size,
                  search: search
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function searchReagentByElements(_x5, _x6, _x7) {
        return _searchReagentByElements.apply(this, arguments);
      }

      return searchReagentByElements;
    }()
  }]);

  return SearchService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchService());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/table/filter/SelectColumn.module.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/table/filter/SelectColumn.module.css ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._32x9AJaXFN3LCG5lPJH9Ys {\r\n    margin: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/main/js/css/components/table/filter/SelectColumn.module.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb","sourcesContent":[".container {\r\n    margin: 0;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "_32x9AJaXFN3LCG5lPJH9Ys"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main/js/css/components/table/filter/SelectColumn.module.css":
/*!*************************************************************************!*\
  !*** ./src/main/js/css/components/table/filter/SelectColumn.module.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectColumn_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!./SelectColumn.module.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main/js/css/components/table/filter/SelectColumn.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectColumn_module_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectColumn_module_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_reagent_AllReagents_js.bundle.js.map