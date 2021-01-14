import store from "../store";

export default {
    methods: {
        async isAuthorized(permissions) {
            permissions = this.addPermissionsForDefault(permissions)

            return await this.hasAnyPermission(permissions)
        },
        addPermissionsForDefault(permissions) {
            if( Array.isArray(permissions) ){
                permissions.concat('super_administrator')
            } else {
                permissions = ['super_administrator', permissions];
            }
    
            return permissions;
        },
        async hasAnyPermission(permissions){
            for(let permission of permissions){
                let response = await this.hasPermission(permission)

                if( response ){
                    return true;
                }
            }
    
            return false;
        },
        async hasPermission(permission){
            await this.validateUserDataExists();

            return store.getters.getUserPermissions.includes(permission)
        },
        async validateUserDataExists() {
            if( store.getters.getUserAuthenticated ){
                return true
            }

            return await store.dispatch('loadUserAuthenticated')
        }
    }
}