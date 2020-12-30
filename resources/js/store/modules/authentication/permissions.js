export default {
    namespaced: true,
    state: {
        permissionsList: [],
        permission: {
            name: '',
            description: '',
        }
    },
    getters: {
        getPermission: state => state.permission,
    }
}