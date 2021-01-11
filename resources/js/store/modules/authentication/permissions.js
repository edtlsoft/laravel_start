export default {
    namespaced: true,
    state: {
        permissions: [],
        datatable: null,
        datatableSettings: {
            ajax: {
                url: '/permissions',
            },
            columns: [
                { data: 'id', },
                { data: 'name', },
                { data: 'description', },
                { data: 'created_at', render: function(data){
                    return `Fecha: ${data}`
                } },
            ],
        }
    },
    getters: {
        getPermissions: state => state.permissions,
        getDatatable: state => state.datatable,
        getDatatableSettings: state => state.datatableSettings,
    },
    mutations: {
        addPermissionToList(state, permission) {
            state.permissions.unshift(permission)
        },
        setPermissions(state, permissions) {
            state.permissions = permissions
        },
        setDatatable(state, datatable){
            state.datatable = datatable
        },
    },
    modules: {
        form: {
            namespaced: true,
            state: {
                updateMode: false,
                permission: {
                    name: '',
                    description: '',
                },
            },
            getters: {
                getUpdateMode: state => state.updateMode,
                getPermission: state => state.permission,
            },
            mutations: {
                setUpdateMode: (state, value) => state.updateMode = value,
                setPermission: (state, permission) => state.updateMode = permission,
            },
            actions: {
                submitPermissionForm({getters, commit}) {
                    let interceptor = mixins.axios.methods.setInterceptorAxios(
                        getters.updateMode ? 'Actulizando datos del permiso' : 'Registrando datos del permiso'
                    )

                    axios.post('/permissions', getters.getPermission)
                        .then(response => {
                            commit('permissions/addPermissionToList', response.data, {root: true})
                            
                            Swal.fire({icon: 'success', title: 'El permiso se registro correctamente.'})
                                .then(() => mixins.modals.methods.closeModal('div#modal-permission-form'))
                        })
                        .catch(error => mixins.axios.methods.showErrorHttpAxios(error))

                    mixins.axios.methods.ejectInterceptorAxios(interceptor)
                },
            }
        }
    }
}