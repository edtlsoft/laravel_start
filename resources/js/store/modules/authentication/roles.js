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
            },
            getters: {
                getUpdateMode: state => state.updateMode,
                getRole: state => state.role,
            },
            mutations: {
                setUpdateMode: (state, value) => state.updateMode = value,
                setRole: (state, role) => state.role = role,
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
                            //dispatch('roles/ajaxReloadDatatable', !updateMode, {root: true})
                            commit('roles/addRoleToList', response.data.data, {root: true})

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