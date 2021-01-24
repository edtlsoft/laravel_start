(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Autentication.Roles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Select2Component.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Select2Component.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      settingsDefault: {
        mount: false,
        id: 'select2-component',
        multiple: false,
        theme: 'bootstrap',
        language: "es",
        closeOnSelect: true,
        ajax: null,
        minimumInputLength: 0,
        templateResult: null,
        templateSelection: null
      }
    };
  },
  watch: {
    'settings.mount': function settingsMount(newVal) {
      this.settingsDefault.mount = newVal;

      if (newVal) {
        console.log('settings.mount', newVal);
        this.mountComponent();
      }

      ;
    }
  },
  methods: {
    mountComponent: function mountComponent() {
      var settings = Object.assign(this.settingsDefault, this.settings);
      console.log(settings);
      $("select#".concat(this.id)).select2(settings);
      $("select#".concat(this.id)).on('select2:unselect', this.settings.unselect);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Select2Component_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Select2Component.vue */ "./resources/js/components/Select2Component.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2Component: _components_Select2Component_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    updateMode: 'roles/form/getUpdateMode',
    role: 'roles/form/getRole',
    select2Settings: 'roles/form/getSelect2Settings'
  })), {}, {
    title: function title() {
      return this.updateMode ? 'ACTUALIZAR ROLE' : 'REGISTRAR ROLE';
    },
    classButton: function classButton() {
      return this.updateMode ? 'btn btn-success' : 'btn btn-primary';
    },
    textButton: function textButton() {
      return this.updateMode ? 'Actualizar' : 'Guardar';
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setSelect2Settings: 'roles/form/setSelect2Settings'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    submitRoleForm: 'roles/form/submitRoleForm'
  })), {}, {
    mountSelect2: function mountSelect2() {
      var self = this;
      var settings = {};

      settings.templateSelection = function (data) {
        if (typeof data.id !== 'undefined' && data.id !== '') {
          if (!self.role.permissions.includes(data.id)) {
            self.role.permissions.push(data.id);
          }

          return data.name;
        }

        return 'Seleccione los permisos para el rol';
      };

      settings.unselect = function (e) {
        self.role.permissions.splice(self.role.permissions.indexOf(e.params.data.id), 1);
      };

      settings.mount = true;
      this.setSelect2Settings(settings);
    }
  }),
  mounted: function mounted() {
    this.mountSelect2();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _RoleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleForm */ "./resources/js/views/authentication/roles/RoleForm.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RoleForm: _RoleForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    roles: 'roles/getRoles',
    datatable: 'roles/getDatatable',
    datatableSettings: 'roles/getDatatableSettings'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setRoles: 'roles/setRoles',
    setDatatable: 'roles/setDatatable',
    setDatatableSettings: 'roles/setDatatableSettings',
    setUpdateMode: 'roles/form/setUpdateMode',
    setPermission: 'roles/form/setPermission'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    ajaxReloadDatatable: 'roles/ajaxReloadDatatable'
  })), {}, {
    getUpdatedListOfRoles: function getUpdatedListOfRoles() {
      return this.roles;
    },
    openRoleForm: function openRoleForm() {
      var updateMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var permission = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.setUpdateMode(updateMode);
      permission ? this.setPermission(permission) : false;
      this.openModal('div#modal-role-form');
    },
    loadDatatableSettings: function loadDatatableSettings() {
      var self = this;
      return {
        ajax: {
          url: '/roles',
          dataSrc: function dataSrc(json) {
            var data = json.data;
            self.setRoles(data);
            return data;
          }
        },
        columns: [{
          data: 'id'
        }, {
          data: 'id',
          render: function render(permissionId) {
            return "\n                            <div class=\"w-100 text-center\">\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-sm btn-primary btn-roles-update\" data-id=\"".concat(permissionId, "\">\n                                        <i class=\"fas fa-edit\"></i>\n                                    </button>\n                                    <button class=\"btn btn-sm btn-danger btn-roles-delete\" data-id=\"").concat(permissionId, "\">\n                                        <i class=\"fas fa-trash\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        ");
          }
        }, {
          data: 'name'
        }, {
          data: 'description'
        }, {
          data: 'permissions',
          name: 'permissions.name',
          render: function render(data) {
            var _data$length;

            return "<a>".concat((_data$length = data === null || data === void 0 ? void 0 : data.length) !== null && _data$length !== void 0 ? _data$length : 0, " Permisos</a>");
          }
        }, {
          data: 'created_at',
          render: function render(data) {
            return moment(data).format('DD/MM/YYYY hh:mm:ss A');
          }
        }]
      };
    },
    openPermissionUpdateForm: function openPermissionUpdateForm(permission) {
      this.openRoleForm(true, permission);
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

        axios["delete"]("/roles/".concat(permission.id)).then(function (response) {
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
    }
  }),
  mounted: function mounted() {
    var datatableSettings = this.loadDatatableSettings();
    this.setDatatableSettings(datatableSettings);
    var datatable = this.loadDatatable('table#table-roles-list', this.datatableSettings);
    this.setDatatable(datatable);
    this.listenButtonWithinDatatable('.btn-roles-update', this.getUpdatedListOfRoles, this.openPermissionUpdateForm);
    this.listenButtonWithinDatatable('.btn-roles-delete', this.getUpdatedListOfRoles, this.openSwalWindowDeletePermission);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("select", {
    attrs: { id: _vm.id, multiple: _vm.settingsDefault.multiple }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "modal-role-form", "aria-modal": "true", role: "dialog" }
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
                attrs: { id: "role-form" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitRoleForm()
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
                        value: _vm.role.name,
                        expression: "role.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "modulo_permiso",
                      dusk: "role-name",
                      pattern: "[\\w\\s]{5,}",
                      title: "El nombre debe contener al menos 5 caracteres",
                      required: ""
                    },
                    domProps: { value: _vm.role.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.role, "name", $event.target.value)
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
                        value: _vm.role.description,
                        expression: "role.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      rows: "5",
                      placeholder: "Descripcion...",
                      pattern: "[\\w\\s]{5,}",
                      title:
                        "La descripcion debe contener al menos 5 caracteres",
                      dusk: "role-description"
                    },
                    domProps: { value: _vm.role.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.role, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Permisos")]),
                    _vm._v(" "),
                    _c("Select2Component", {
                      attrs: {
                        id: _vm.select2Settings.id,
                        settings: _vm.select2Settings
                      }
                    })
                  ],
                  1
                )
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
                  form: "role-form",
                  dusk: "btn-manage-role"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                      _vm._v("Listado de Roles")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { dusk: "btn-role-form" },
                          on: {
                            click: function($event) {
                              return _vm.openRoleForm()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus" }),
                          _vm._v(" Role\n                                    ")
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("RoleForm")
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
            _c("h1", { staticClass: "m-0" }, [_vm._v("Roles")])
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
                _vm._v("Roles")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered table-hover",
          attrs: { id: "table-roles-list" }
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Id")]),
              _vm._v(" "),
              _c("th", [_vm._v("Opciones")]),
              _vm._v(" "),
              _c("th", [_vm._v("Nombre")]),
              _vm._v(" "),
              _c("th", [_vm._v("Description")]),
              _vm._v(" "),
              _c("th", [_vm._v("Permisos")]),
              _vm._v(" "),
              _c("th", [_vm._v("Fecha de creación")])
            ])
          ]),
          _vm._v(" "),
          _c("tfoot", [
            _c("tr", [
              _c("th", [_vm._v("Id")]),
              _vm._v(" "),
              _c("th", [_vm._v("Opciones")]),
              _vm._v(" "),
              _c("th", [_vm._v("Nombre")]),
              _vm._v(" "),
              _c("th", [_vm._v("Description")]),
              _vm._v(" "),
              _c("th", [_vm._v("Permisos")]),
              _vm._v(" "),
              _c("th", [_vm._v("Fecha de creación")])
            ])
          ])
        ]
      )
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

/***/ "./resources/js/components/Select2Component.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Select2Component.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select2Component.vue?vue&type=template&id=4de7745c& */ "./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c&");
/* harmony import */ var _Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select2Component.vue?vue&type=script&lang=js& */ "./resources/js/components/Select2Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Select2Component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Select2Component.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Select2Component.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Select2Component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Select2Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Select2Component.vue?vue&type=template&id=4de7745c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Select2Component.vue?vue&type=template&id=4de7745c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_4de7745c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/authentication/roles/RoleForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RoleForm.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleForm.vue?vue&type=template&id=465237d8& */ "./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8&");
/* harmony import */ var _RoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleForm.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/roles/RoleForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleForm.vue?vue&type=template&id=465237d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RoleForm.vue?vue&type=template&id=465237d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleForm_vue_vue_type_template_id_465237d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/authentication/roles/RolesList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RolesList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesList.vue?vue&type=template&id=67ba939e& */ "./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e&");
/* harmony import */ var _RolesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesList.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RolesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/roles/RolesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RolesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RolesList.vue?vue&type=template&id=67ba939e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RolesList.vue?vue&type=template&id=67ba939e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesList_vue_vue_type_template_id_67ba939e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);