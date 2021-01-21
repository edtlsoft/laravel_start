(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Autentication.Roles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/roles/RolesList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
 // import PermissionForm from './PermissionForm';

/* harmony default export */ __webpack_exports__["default"] = ({
  // components: {
  //     PermissionForm,
  // },
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
    loadDatatableSettings: function loadDatatableSettings() {
      var self = this;
      return {
        ajax: {
          url: '/permissions',
          dataSrc: function dataSrc(json) {
            var data = json.data;
            self.setPermissions(data);
            return data;
          }
        },
        columns: [{
          data: 'id'
        }, {
          data: 'id',
          render: function render(permissionId) {
            return "\n                            <div class=\"w-100 text-center\">\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-sm btn-primary btn-permissions-update\" data-id=\"".concat(permissionId, "\">\n                                        <i class=\"fas fa-edit\"></i>\n                                    </button>\n                                    <button class=\"btn btn-sm btn-danger btn-permissions-delete\" data-id=\"").concat(permissionId, "\">\n                                        <i class=\"fas fa-trash\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        ");
          }
        }, {
          data: 'name'
        }, {
          data: 'description'
        }, {
          data: 'created_at',
          render: function render(data) {
            return moment(data).format('YYYY-MM-DD hh:mm:ss A');
          }
        }]
      };
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
    }
  }),
  mounted: function mounted() {
    var datatableSettings = this.loadDatatableSettings();
    this.setDatatableSettings(datatableSettings);
    var datatable = this.loadDatatable('table#table-permissions-list', this.datatableSettings);
    this.setDatatable(datatable);
    console.log(this.permissions, this.permissions.length);
    this.listenButtonWithinDatatable('.btn-permissions-update', this.getUpdatedListOfPermissions, this.openPermissionUpdateForm);
    this.listenButtonWithinDatatable('.btn-permissions-delete', this.getUpdatedListOfPermissions, this.openSwalWindowDeletePermission);
  }
});

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
  return _c("div", { staticClass: "content-wrapper" }, [
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
                        attrs: { dusk: "btn-permissions-form" },
                        on: {
                          click: function($event) {
                            return _vm.openPermissionForm()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-plus" }),
                        _vm._v(" Permiso\n                                    ")
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
    ])
  ])
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
          attrs: { id: "table-permissions-list" }
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