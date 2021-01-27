export default {
    namespaced: true,
    state: {
        permissions: [],
        datatable  : null,
        datatableSettings: {
            id: 'table-permissions-list',
            mount: false,
            ajax: {},
            columns: [
                { data: 'id', },
                { data: 'id', render: function(permissionId){
                    return `
                        <div class="w-100 text-center">
                            <div class="btn-group">
                                <button class="btn btn-sm btn-primary btn-permission-update" data-id="${permissionId}">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn btn-sm btn-danger btn-permission-delete" data-id="${permissionId}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `
                } },
                { data: 'name', },
                { data: 'description', },
                { data: 'created_at', render: function(data){
                    return moment(data).format('YYYY-MM-DD hh:mm:ss A')
                } },
            ],
        },
    },
    getters: {
        getPermissions      : state => state.permissions,
        getDatatable        : state => state.datatable,
        getDatatableSettings: state => state.datatableSettings,
    },
    mutations: {
        setPermissions      : (state, permissions) => state.permissions       = permissions,
        setDatatable        : (state, datatable)   => state.datatable         = datatable,
        setDatatableSettings: (state, settings)    => state.datatableSettings = Object.assign(state.datatableSettings, settings),
    },
    actions: {
        ajaxReloadDatatable: ({state}, resetPaging=false) => state.datatable.ajax.reload(null, resetPaging),
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
                setPermission: (state, permission) => state.permission = permission,
            },
            actions: {
                submitPermissionForm({state, commit, dispatch}) {
                    let updateMode = state.updateMode

                    let interceptor = mixins.axios.methods.setInterceptorAxios(
                        updateMode ? 'Actulizando datos del permiso' : 'Registrando datos del permiso'
                    )

                    let method = updateMode ? 'put' : 'post'
                    let route = updateMode ? `/permissions/${state.permission.id}` : '/permissions'

                    axios[method](route, state.permission)
                        .then(() => {
                            dispatch('permissions/ajaxReloadDatatable', !updateMode, {root: true})

                            let message = updateMode ? 'El permiso se actualizo correctamente.' : 'El permiso se registro correctamente.'
                            
                            Swal.fire({icon: 'success', title: message, timer: 2000})
                                .then(() => {
                                    mixins.modals.methods.closeModal('div#modal-permission-form')
                                    commit('setPermission', {name: '', description: ''})
                                })
                        })
                        .catch(error => mixins.axios.methods.showErrorHttpAxios(error))

                    mixins.axios.methods.ejectInterceptorAxios(interceptor)
                },
            }
        }
    }
}