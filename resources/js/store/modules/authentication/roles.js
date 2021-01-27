export default {
    namespaced: true,
    state: {
        roles: [],
        datatable  : null,
        datatableSettings: {
            mount: false,
            ajax: {},
            columns: [
                { data: 'id', },
                { data: 'id', render: function(permissionId){
                    return `
                        <div class="w-100 text-center">
                            <div class="btn-group">
                                <button class="btn btn-sm btn-primary btn-roles-update" data-id="${permissionId}">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn btn-sm btn-danger btn-roles-delete" data-id="${permissionId}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `
                } },
                { data: 'name', },
                { data: 'description', },
                { data: 'permissions', name: 'permissions.name', render: function(data) {
                    return `<a>${data?.length ?? 0} Permisos</a>`
                } },
                { data: 'created_at', render: function(data){
                    return moment(data).format('DD/MM/YYYY hh:mm:ss A')
                } },
            ],
        },
    },
    getters: {
        getRoles            : state => state.roles,
        getDatatable        : state => state.datatable,
        getDatatableSettings: state => state.datatableSettings,
    },
    mutations: {
        setRoles             : (state, roles)     => state.roles = roles,
        setDatatable         : (state, datatable) => state.datatable = datatable,
        addRoleToList        : (state, role)      => state.roles.unshift(role),
        setDatatableSettings : (state, settings)  => {
            state.datatableSettings = Object.assign(state.datatableSettings, settings)
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
                            
                            Swal.fire({icon: 'success', title: message, timer: 2000})
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