
export const GRID_EN_LOCALE_TEXT= {
    // Root
    noRowsLabel: 'No rows',
    noResultsOverlayLabel: 'No results found.',
    errorOverlayDefaultLabel: 'An error occurred.',
  
    // Density selector toolbar button text
    toolbarDensity: 'Density',
    toolbarDensityLabel: 'Density',
    toolbarDensityCompact: 'Compact',
    toolbarDensityStandard: 'Standard',
    toolbarDensityComfortable: 'Comfortable',
  
    // Columns selector toolbar button text
    toolbarColumns: 'Columns',
    toolbarColumnsLabel: 'Select columns',
  
    // Filters toolbar button text
    toolbarFilters: 'Filters',
    toolbarFiltersLabel: 'Show filters',
    toolbarFiltersTooltipHide: 'Hide filters',
    toolbarFiltersTooltipShow: 'Show filters',
    toolbarFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} active filters` : `${count} active filter`,
  
    // Export selector toolbar button text
    toolbarExport: 'Export',
    toolbarExportLabel: 'Export',
    toolbarExportCSV: 'Download as CSV',
  
    // Columns panel text
    columnsPanelTextFieldLabel: 'Find column',
    columnsPanelTextFieldPlaceholder: 'Column title',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Show all',
    columnsPanelHideAllButton: 'Hide all',
  
    // Filter panel text
    filterPanelAddFilter: 'Add filter',
    filterPanelDeleteIconLabel: 'Delete',
    filterPanelOperators: 'Operators',
    filterPanelOperatorAnd: 'And',
    filterPanelOperatorOr: 'Or',
    filterPanelColumns: 'Columns',
    filterPanelInputLabel: 'Value',
    filterPanelInputPlaceholder: 'Filter value',
  
    // Filter operators text
    filterOperatorContains: 'contains',
    filterOperatorEquals: 'equals',
    filterOperatorStartsWith: 'starts with',
    filterOperatorEndsWith: 'ends with',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
  
    // Filter values text
    filterValueAny: 'any',
    filterValueTrue: 'true',
    filterValueFalse: 'false',
  
    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Show columns',
    columnMenuFilter: 'Filter',
    columnMenuHideColumn: 'Hide',
    columnMenuUnsort: 'Unsort',
    columnMenuSortAsc: 'Sort by ASC',
    columnMenuSortDesc: 'Sort by DESC',
  
    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} active filters` : `${count} active filter`,
    columnHeaderFiltersLabel: 'Show filters',
    columnHeaderSortIconLabel: 'Sort',
  
    // Rows selected footer text
    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} rows selected`
        : `${count.toLocaleString()} row selected`,
  
    // Total rows footer text
    footerTotalRows: 'Total Rows:',
  
    // Total visible rows footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
      `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,
  
    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox selection',
  
    // Boolean cell text
    booleanCellTrueLabel: 'true',
    booleanCellFalseLabel: 'false',
};

export const GRID_ES_LOCALE_TEXT = {
  // Root
  noRowsLabel: 'Sin filas',
  noResultsOverlayLabel: 'No se han encontrado resultados.',
  errorOverlayDefaultLabel: 'Ha ocurrido un error.',

  // Density selector toolbar button text
  toolbarDensity: 'Densidad',
  toolbarDensityLabel: 'Densidad',
  toolbarDensityCompact: 'Compacta',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comoda',

  // Columns selector toolbar button text
  toolbarColumns: 'Columnas',
  toolbarColumnsLabel: 'Seleccionar columnas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Ocultar filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Descargar como CSV',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Columna de búsqueda',
  columnsPanelTextFieldPlaceholder: 'Título de columna',
  columnsPanelDragIconLabel: 'Reorder columna',
  columnsPanelShowAllButton: 'Mostrar todo',
  columnsPanelHideAllButton: 'Ocultar todo',

  // Filter panel text
  filterPanelAddFilter: 'Agregar filtro',
  filterPanelDeleteIconLabel: 'Borrar',
  filterPanelOperators: 'Operadores',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  filterPanelColumns: 'Columnas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor de filtro',

  // Filter operators text
  filterOperatorContains: 'contiene',
  filterOperatorEquals: 'es igual',
  filterOperatorStartsWith: 'comienza con',
  filterOperatorEndsWith: 'termina con',
  filterOperatorIs: 'es',
  filterOperatorNot: 'no es',
  filterOperatorAfter: 'es posterior',
  filterOperatorOnOrAfter: 'es en o posterior',
  filterOperatorBefore: 'es anterior',
  filterOperatorOnOrBefore: 'es en o anterior',

  // Column menu text
  columnMenuLabel: 'Menú',
  columnMenuShowColumns: 'Mostrar columnas',
  columnMenuFilter: 'Filtro',
  columnMenuHideColumn: 'Ocultar',
  columnMenuUnsort: 'Desordenar',
  columnMenuSortAsc: 'Ordenar ASC',
  columnMenuSortDesc: 'Ordenar DESC',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: 'Mostrar filtros',
  columnHeaderSortIconLabel: 'Ordenar',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count > 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,

  // Total rows footer text
  footerTotalRows: 'Filas Totales:',

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
};