export default [{ 
    path: '/authentication/permissions',
    component: () => import(/* webpackChunkName: "Autentication.Permissions" */ '@/views/authentication/permissions/PermissionsList.vue') 
}]