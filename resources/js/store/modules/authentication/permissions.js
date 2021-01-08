export default {
    namespaced: true,
    state: {
        permissions: [],
        permission: {
            name: '',
            description: '',
        },
        openPermissionsForm: false,
    },
    getters: {
        getPermissions: state => state.permissions,
        getPermission: state => state.permission,
        getOpenPermissionsForm: state => state.openPermissionsForm,
    },
    mutations: {
        setOpenPermissionsForm(state, value) {
            state.openPermissionsForm = value
        },
        addPermissionToList(state, permission) {
            state.permissions.unshift(permission)
        },
    },
}