export default [{ 
    path: '/authentication/permissions',
    component: () => {
        return import(/* webpackChunkName: "Autentication.Permissions" */ '@/views/authentication/permissions/PermissionsList.vue')
    },
    beforeEnter: requireAuthentication,
    meta: {
        permissions: 'permissions_index',
    }
}]