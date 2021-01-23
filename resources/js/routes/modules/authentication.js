export default [{
    path: '/authentication',
    redirect: '/authentication/roles'
},{ 
    path: '/authentication/permissions',
    component: () => {
        return import(/* webpackChunkName: "Autentication.Permissions" */ '@/views/authentication/permissions/PermissionsList.vue')
    },
    beforeEnter: requireAuthentication,
    meta: {
        permissions: 'permissions_index',
    }
}, { 
    path: '/authentication/roles',
    component: () => {
        return import(/* webpackChunkName: "Autentication.Roles" */ '@/views/authentication/roles/RolesList.vue')
    },
    beforeEnter: requireAuthentication,
    meta: {
        permissions: 'roles_index',
    }
}]