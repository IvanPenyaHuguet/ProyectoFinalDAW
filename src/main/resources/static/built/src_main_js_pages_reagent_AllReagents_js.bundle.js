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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/backend/AllReagentService */ "./src/main/js/service/backend/AllReagentService.js");
/* harmony import */ var _basecomponents_TableBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basecomponents/TableBase */ "./src/main/js/components/table/basecomponents/TableBase.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Print */ "./node_modules/@material-ui/icons/Print.js");
/* harmony import */ var _icons_ExcelIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../icons/ExcelIcon */ "./src/main/js/components/icons/ExcelIcon.js");
/* harmony import */ var _icons_CSVIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../icons/CSVIcon */ "./src/main/js/components/icons/CSVIcon.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _context_SearchFieldContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../context/SearchFieldContext */ "./src/main/js/context/SearchFieldContext.js");
/* harmony import */ var _context_SearchElementsContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../context/SearchElementsContext */ "./src/main/js/context/SearchElementsContext.js");
/* harmony import */ var _service_backend_Search_SearchService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../service/backend/Search/SearchService */ "./src/main/js/service/backend/Search/SearchService.js");
/* harmony import */ var _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../service/error/ErrorController */ "./src/main/js/service/error/ErrorController.js");
/* harmony import */ var _context_utils_FilterLocationContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../context/utils/FilterLocationContext */ "./src/main/js/context/utils/FilterLocationContext.js");
/* harmony import */ var _context_utils_FilterUtilizationContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../context/utils/FilterUtilizationContext */ "./src/main/js/context/utils/FilterUtilizationContext.js");
/* harmony import */ var _context_utils_SpeedDialContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../context/utils/SpeedDialContext */ "./src/main/js/context/utils/SpeedDialContext.js");
/* harmony import */ var _context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../context/AuthContextProvider */ "./src/main/js/context/AuthContextProvider.js");
/* harmony import */ var _lib_export_ReagentPdf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../lib/export/ReagentPdf */ "./src/main/js/lib/export/ReagentPdf.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _lib_tabledata_ReagentTableConf__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../lib/tabledata/ReagentTableConf */ "./src/main/js/lib/tabledata/ReagentTableConf.js");
/* harmony import */ var _context_utils_TableContext_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../context/utils/TableContext.js */ "./src/main/js/context/utils/TableContext.js");













function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)); } else { var _context4; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, key)); }); } } return target; }























var ReagentTable = function ReagentTable() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_28__.useTranslation)(),
      t = _useTranslation.t;

  var TITLE = t('table.title.reagents.reagents');

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_12__.useContext)(_context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_24__.AuthContext),
      user = _useContext.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(0),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState5, 2),
      controlledPageCount = _useState6[0],
      setControlledPageCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(0),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState7, 2),
      totalElements = _useState8[0],
      setTotalElements = _useState8[1];

  var fetchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(0);

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState9, 2),
      filterLocation = _useState10[0],
      setFilterLocation = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState11, 2),
      filterUtilization = _useState12[0],
      setFilterUtilization = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState13, 2),
      filter = _useState14[0],
      setFilter = _useState14[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_29__.useHistory)();
  var columns = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(function () {
    return (0,_lib_tabledata_ReagentTableConf__WEBPACK_IMPORTED_MODULE_26__.RTCColumns)(t);
  }, []);
  var searchFields = (0,_lib_tabledata_ReagentTableConf__WEBPACK_IMPORTED_MODULE_26__.RTCSearchFields)(t);

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(searchFields),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState15, 2),
      fieldsToSearch = _useState16[0],
      setFieldsToSearch = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({}),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_useState17, 2),
      elementsToSearch = _useState18[0],
      setElementsToSearch = _useState18[1];

  var previousStates = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)({
    elements: [],
    text: '',
    pageIndex: 0,
    pageSize: 10,
    location: '',
    utilization: '',
    sortBy: {},
    previous: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    if (filterLocation != undefined && filterLocation != '' && filterLocation !== previousStates.current.location) {
      setFilter(_objectSpread(_objectSpread({}, filter), {}, {
        location: filterLocation
      }));
    } else if (filterUtilization != undefined && filterUtilization != '' && filterUtilization !== previousStates.current.utilization) {
      setFilter(_objectSpread(_objectSpread({}, filter), {}, {
        utilization: filterUtilization
      }));
    } else {
      setFilter(null);
    }
  }, [filterLocation, filterUtilization]);
  var speedDial = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(function () {
    var _context;

    var actions = [, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_30__.default, null),
      name: t('table.tooltip.save'),
      click: function click() {
        return _lib_export_ReagentPdf__WEBPACK_IMPORTED_MODULE_25__.default.generatePdf({
          columns: columns
        }, false);
      }
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_31__.default, null),
      name: t('table.tooltip.print'),
      click: function click() {
        return _lib_export_ReagentPdf__WEBPACK_IMPORTED_MODULE_25__.default.generatePdf({
          columns: columns
        }, true);
      }
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_icons_ExcelIcon__WEBPACK_IMPORTED_MODULE_15__.default, null),
      name: t('table.tooltip.excel'),
      click: function click() {
        return _lib_export_ReagentPdf__WEBPACK_IMPORTED_MODULE_25__.default.generateExcel("Reagents");
      }
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_icons_CSVIcon__WEBPACK_IMPORTED_MODULE_16__.default, null),
      name: t('table.tooltip.csv'),
      click: function click() {
        return _lib_export_ReagentPdf__WEBPACK_IMPORTED_MODULE_25__.default.generateCSV({
          columns: columns
        });
      }
    }];

    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_8___default()(_context = user.role).call(_context, "ROLE_ADD_ALL")) {
      actions.unshift({
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_32__.default, null),
        name: t('table.tooltip.add'),
        click: function click() {
          return history.push("/reagent/add");
        }
      });
    }

    return actions;
  }, []);
  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(function (pageindex, pagesize, textToSearch, elementsToSearch, sortBy, filter) {
    var fetchId = ++fetchIdRef.current;
    var filterLocationChanged = filter ? filter.location !== previousStates.current.location && filter.location !== '0' && filter.location != null : false;
    var filterUtilizationChanged = filter ? filter.utilization !== previousStates.current.utilization && filter.utilization !== '0' && filter.utilization != null && filter.utilization !== 'All' : false;
    var elementsChanged = elementsToSearch && _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(elementsToSearch).length > 0 && elementsToSearch != previousStates.current.elements;
    var textChanged = textToSearch !== previousStates.current.text;
    var sortByChanged = sortBy !== previousStates.current.sortBy;
    var pageChanged = pageindex !== previousStates.current.pageIndex || pagesize !== previousStates.current.pageSize;

    if (fetchId === fetchIdRef.current) {
      setLoading(true);

      if (elementsChanged || pageChanged && previousStates.current.previous == 'E') {
        previousStates.current.elements = elementsToSearch;
        previousStates.current.previous = 'E';
        _service_backend_Search_SearchService__WEBPACK_IMPORTED_MODULE_19__.default.searchReagentByElements(pageindex, pagesize, elementsToSearch).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__.default.checkError(err);
        });
      } else if (filterLocationChanged || (sortByChanged || pageChanged) && previousStates.current.previous == 'L') {
        previousStates.current.location = filter.location;
        previousStates.current.previous = 'L';
        _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_13__.default.getPageLocation(filter.location, pageindex, pagesize, sortBy).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__.default.checkError(err);
        });
      } else if (filterUtilizationChanged || (sortByChanged || pageChanged) && previousStates.current.previous == 'U') {
        previousStates.current.utilization = filter.utilization;
        previousStates.current.previous = 'U';
        _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_13__.default.getPageUtilization(filter.utilization, pageindex, pagesize, sortBy).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__.default.checkError(err);
        });
      } else if (textChanged || pageChanged && previousStates.current.previous == 'T') {
        var _context2;

        previousStates.current.text = textToSearch;
        previousStates.current.previous = 'T';
        _service_backend_Search_SearchService__WEBPACK_IMPORTED_MODULE_19__.default.searchReagentPage(pageindex, pagesize, textToSearch, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_11___default()(fieldsToSearch).call(fieldsToSearch, function (_ref) {
          var selected = _ref.selected;
          return selected === true;
        })).call(_context2, function (_ref2) {
          var value = _ref2.value;
          return value;
        })).then(function (res) {
          return processResult(res);
        })["catch"](function (err) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__.default.checkError(err);
        });
      } else {
        previousStates.current.previous = 'G';
        _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_13__.default.getPage(pageindex, pagesize, sortBy).then(function (res) {
          return processResult(res);
        })["catch"](function (e) {
          return _service_error_ErrorController__WEBPACK_IMPORTED_MODULE_20__.default.checkError(e);
        });
      }

      var processResult = function processResult(result) {
        setLoading(false);
        setControlledPageCount(result.data.numPages);
        setTotalElements(result.data.totalElements);
        setData(result.data.data);
        previousStates.current.sortBy = sortBy;
        previousStates.current.pageIndex = pageindex;
        previousStates.current.pageSize = pagesize;
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_utils_TableContext_js__WEBPACK_IMPORTED_MODULE_27__.TableContext.Provider, {
    value: "InorganicReagent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_utils_SpeedDialContext__WEBPACK_IMPORTED_MODULE_23__.SpeedDialContext.Provider, {
    value: speedDial
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_SearchFieldContext__WEBPACK_IMPORTED_MODULE_17__.SearchFieldContext.Provider, {
    value: {
      fieldsToSearch: fieldsToSearch,
      setFieldsToSearch: setFieldsToSearch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_SearchElementsContext__WEBPACK_IMPORTED_MODULE_18__.SearchElementsContext.Provider, {
    value: {
      elementsToSearch: elementsToSearch,
      setElementsToSearch: setElementsToSearch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_utils_FilterLocationContext__WEBPACK_IMPORTED_MODULE_21__.FilterLocationContext.Provider, {
    value: {
      filterLocation: filterLocation,
      setFilterLocation: setFilterLocation
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_context_utils_FilterUtilizationContext__WEBPACK_IMPORTED_MODULE_22__.FilterUtilizationContext.Provider, {
    value: {
      filterUtilization: filterUtilization,
      setFilterUtilization: setFilterUtilization
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_basecomponents_TableBase__WEBPACK_IMPORTED_MODULE_14__.default, {
    columns: columns,
    backendService: _service_backend_AllReagentService__WEBPACK_IMPORTED_MODULE_13__.default,
    loading: loading,
    setLoading: setLoading,
    data: data,
    controlledPageCount: controlledPageCount,
    totalElements: totalElements,
    title: TITLE,
    fetchData: fetchData,
    searchFields: searchFields,
    filter: filter
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReagentTable);

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

/***/ })

}]);
//# sourceMappingURL=src_main_js_pages_reagent_AllReagents_js.bundle.js.map