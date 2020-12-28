let listRoutes = [{ 
    path: '/',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue') 
}]


const modules = require.context('./modules', true, /\.js$/i)

modules.keys().map(module => {
    listRoutes = listRoutes.concat(modules(module).default)
})


const routes = listRoutes

export default routes;