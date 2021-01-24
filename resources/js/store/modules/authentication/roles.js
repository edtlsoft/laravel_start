export default {
    namespaced: true,
    state: {
        roles: [],
        datatable  : null,
        datatableSettings: {},
    },
    getters: {
        getRoles            : state => state.roles,
        getDatatable        : state => state.datatable,
        getDatatableSettings: state => state.datatableSettings,
    },
    mutations: {
        setRoles            : (state, roles)     => state.roles             = roles,
        setDatatable        : (state, datatable) => state.datatable         = datatable,
        setDatatableSettings: (state, settings)  => state.datatableSettings = settings,
        addRoleToList(state, role) {
            state.roles.unshift(role)
        },
    },
    actions: {
        ajaxReloadDatatable: ({state}, resetPaging=false) => state.datatable.ajax.reload(null, resetPaging),
    },
    modules: {
        form: {
            namespaced: true,
            state: {
                updateMode: false,
                role: {
                    name: '',
                    description: '',
                    permissions: [],
                },
                select2Settings: {
                    mount: false,
                    id: 'role-permissions',
                    multiple: true,
                    closeOnSelect: false,
                    ajax: {
                        url: '/permissions/select2',
                        dataType: 'JSON',
                        delay: 50,
                        data: function (params) {
                            return {
                                search: params.term,
                            };
                        },
                        processResults: function (response) {
                            return { results: response.permissions };
                        },
                        cache: true
                    },
                    templateResult: function (data){
                        return (typeof data.id !== 'undefined' && data.id !== '') ? data.name : 'Buscando...'
                    },
                    templateSelection: null,
                    unselect: null,
                }
            },
            getters: {
                getUpdateMode: state => state.updateMode,
                getRole: state => state.role,
                getSelect2Settings: state => state.select2Settings,
            },
            mutations: {
                setUpdateMode: (state, value) => state.updateMode = value,
                setRole: (state, role) => state.role = role,
                setSelect2Settings: (state, settings) => {
                    state.select2Settings = Object.assign(state.select2Settings, settings)
                },
            },
            actions: {
                submitRoleForm({state, commit, dispatch}) {
                    let updateMode = state.updateMode

                    let interceptor = mixins.axios.methods.setInterceptorAxios(
                        updateMode ? 'Actulizando datos del role' : 'Registrando datos del role'
                    )

                    let method = updateMode ? 'put' : 'post'
                    let route  = updateMode ? `/roles/${state.role.id}` : '/roles'

                    axios[method](route, state.role)
                        .then((response) => {
                            dispatch('roles/ajaxReloadDatatable', !updateMode, {root: true})

                            let message = updateMode ? 'El role se actualizo correctamente.' : 'El role se registro correctamente.'
                            
                            Swal.fire({icon: 'success', title: message})
                                .then(() => {
                                    mixins.modals.methods.closeModal('div#modal-role-form')
                                    commit('setRole', {name: '', description: '', permissions: []})
                                })
                        })
                        .catch(error => mixins.axios.methods.showErrorHttpAxios(error))

                    mixins.axios.methods.ejectInterceptorAxios(interceptor)
                },
            }
        }
    }
}