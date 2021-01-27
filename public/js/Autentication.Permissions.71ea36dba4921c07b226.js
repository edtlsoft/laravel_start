(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Autentication.Permissions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      defaultSettings: {
        mount: false,
        fixedHeader: true,
        processing: true,
        serverSide: true,
        ajax: {},
        columns: [],
        responsive: {
          orthogonal: 'responsive'
        },
        language: {
          decimal: ",",
          emptyTable: "Ningún dato disponible en esta tabla",
          info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
          infoFiltered: "(filtrado de un total de _MAX_ registros)",
          infoPostFix: "",
          thousands: ".",
          lengthMenu: "Mostrar _MENU_ registros",
          loadingRecords: "Cargando...",
          processing: "Procesando...",
          search: "Buscar:",
          zeroRecords: "No se encontraron resultados",
          paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
          },
          aria: {
            sortAscending: ": Activar para ordenar la columna de manera ascendente",
            sortDescending: ": Activar para ordenar la columna de manera descendente"
          }
        }
      }
    };
  },
  watch: {
    'settings.mount': function settingsMount(newVal) {
      this.defaultSettings.mount = newVal;

      if (newVal) {
        this.mountComponent();
      }

      ;
    }
  },
  methods: {
    mountComponent: function mountComponent() {
      var settings = Object.assign(this.defaultSettings, this.settings);
      var datatable = $("table#".concat(this.id)).DataTable(settings);
      this.$emit('datatableMounted', datatable);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    updateMode: 'permissions/form/getUpdateMode',
    permission: 'permissions/form/getPermission'
  })), {}, {
    title: function title() {
      return this.updateMode ? 'ACTUALIZAR PERMISO' : 'REGISTRAR PERMISO';
    },
    classButton: function classButton() {
      return this.updateMode ? 'btn btn-success' : 'btn btn-primary';
    },
    textButton: function textButton() {
      return this.updateMode ? 'Actualizar' : 'Guardar';
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    submitPermissionForm: 'permissions/form/submitPermissionForm'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _PermissionForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionForm */ "./resources/js/views/authentication/permissions/PermissionForm.vue");
/* harmony import */ var _components_DatatableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DatatableComponent */ "./resources/js/components/DatatableComponent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PermissionForm: _PermissionForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    DatatableComponent: _components_DatatableComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    permissions: 'permissions/getPermissions',
    datatable: 'permissions/getDatatable',
    datatableSettings: 'permissions/getDatatableSettings'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setPermissions: 'permissions/setPermissions',
    setDatatable: 'permissions/setDatatable',
    setDatatableSettings: 'permissions/setDatatableSettings',
    setUpdateMode: 'permissions/form/setUpdateMode',
    setPermission: 'permissions/form/setPermission'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    ajaxReloadDatatable: 'permissions/ajaxReloadDatatable'
  })), {}, {
    getUpdatedListOfPermissions: function getUpdatedListOfPermissions() {
      return this.permissions;
    },
    openPermissionForm: function openPermissionForm() {
      var updateMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var permission = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.setUpdateMode(updateMode);
      permission ? this.setPermission(permission) : false;
      this.openModal('div#modal-permission-form');
    },
    openPermissionUpdateForm: function openPermissionUpdateForm(permission) {
      this.openPermissionForm(true, permission);
    },
    openSwalWindowDeletePermission: function openSwalWindowDeletePermission(permission) {
      var _this = this;

      console.log(permission);
      Swal.fire({
        text: "\xBFEst\xE1 realmente seguro de eliminar el permiso ".concat(permission.name, "?"),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminarlo!',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        var interceptor = _this.setInterceptorAxios('Eliminando el permiso, espere un momento');

        axios["delete"]("/permissions/".concat(permission.id)).then(function (response) {
          _this.ajaxReloadDatatable();

          Swal.fire({
            title: 'El permiso se elimino correctamente de la base de datos.',
            icon: 'success'
          });
        })["catch"](function (error) {
          return _this.showErrorHttpAxios(error);
        });

        _this.ejectInterceptorAxios(interceptor);
      });
    },
    mountDatatable: function mountDatatable() {
      var self = this;
      var settings = {
        mount: true,
        ajax: {
          url: '/permissions',
          dataSrc: function dataSrc(json) {
            self.setPermissions(json.data);
            return json.data;
          }
        }
      };
      this.setDatatableSettings(settings);
    },
    datatableMounted: function datatableMounted(datatable) {
      this.setDatatable(datatable);
      this.listenButtonWithinDatatable('.btn-permissions-update', this.getUpdatedListOfPermissions, this.openPermissionUpdateForm);
      this.listenButtonWithinDatatable('.btn-permissions-delete', this.getUpdatedListOfPermissions, this.openSwalWindowDeletePermission);
    }
  }),
  mounted: function mounted() {
    this.mountDatatable();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table table-bordered table-hover", attrs: { id: _vm.id } },
    [
      _c("thead", [_vm._t("header")], 2),
      _vm._v(" "),
      _c("tfoot", [_vm._t("footer")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade show",
      attrs: {
        id: "modal-permission-form",
        "aria-modal": "true",
        role: "dialog"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("h4", { staticClass: "modal-title" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "form",
              {
                attrs: { id: "permission-form" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitPermissionForm()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission.name,
                        expression: "permission.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "modulo_permiso",
                      dusk: "permission-name",
                      pattern: "\\w{5,}",
                      title: "El nombre debe contener al menos 3 caracteres",
                      required: ""
                    },
                    domProps: { value: _vm.permission.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.permission, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Descripcion")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission.description,
                        expression: "permission.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      rows: "5",
                      placeholder: "Descripcion...",
                      pattern: "\\w{5,}",
                      dusk: "permission-description"
                    },
                    domProps: { value: _vm.permission.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.permission,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer justify-content-between" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("Cerrar")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                class: _vm.classButton,
                attrs: {
                  type: "submit",
                  form: "permission-form",
                  dusk: "btn-manage-permission"
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.textButton) +
                    "\n                "
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content-wrapper" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card card-primary card-outline" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("h5", { staticClass: "m-0" }, [
                      _vm._v("Listado de Permisos")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { dusk: "btn-permissions-form" },
                          on: {
                            click: function($event) {
                              return _vm.openPermissionForm()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus" }),
                          _vm._v(
                            " Permiso\n                                    "
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("DatatableComponent", {
                      attrs: {
                        id: "table-permissions-list",
                        settings: _vm.datatableSettings
                      },
                      on: {
                        datatableMounted: function($event) {
                          return _vm.datatableMounted($event)
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "header",
                          fn: function() {
                            return [
                              _c("tr", [
                                _c("th", [_vm._v("Id")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Opciones")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Nombre")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Description")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Fecha de creación")])
                              ])
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c("tr", [
                                _c("th", [_vm._v("Id")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Opciones")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Nombre")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Description")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Fecha de creación")])
                              ])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("PermissionForm")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Permisos")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "/authentication" } }, [
                  _vm._v("Autenticacion")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Permisos")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/DatatableComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/DatatableComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableComponent.vue?vue&type=template&id=5ae76c24& */ "./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24&");
/* harmony import */ var _DatatableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatatableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DatatableComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DatatableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableComponent.vue?vue&type=template&id=5ae76c24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DatatableComponent.vue?vue&type=template&id=5ae76c24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableComponent_vue_vue_type_template_id_5ae76c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionForm.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionForm.vue?vue&type=template&id=69fe89c6& */ "./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6&");
/* harmony import */ var _PermissionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionForm.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/permissions/PermissionForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionForm.vue?vue&type=template&id=69fe89c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionForm.vue?vue&type=template&id=69fe89c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionForm_vue_vue_type_template_id_69fe89c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionsList.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionsList.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionsList.vue?vue&type=template&id=38207282& */ "./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282&");
/* harmony import */ var _PermissionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionsList.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/permissions/PermissionsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionsList.vue?vue&type=template&id=38207282& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/permissions/PermissionsList.vue?vue&type=template&id=38207282&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsList_vue_vue_type_template_id_38207282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);