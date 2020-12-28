export default [{ 
    path: '/authentication/permissions',
    component: () => import(/* webpackChunkName: "Autentication.Permissions" */ '@/views/auth/permissions/PermissionsList.vue') 
}]