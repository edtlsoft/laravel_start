import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [{ 
    path: '/',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue') 
}]

window.requireAuthentication = async function(to, from, next) {
    let response = await mixins.authentication.methods.isAuthorized(to.meta.permissions)

    return response ? next() : next('/')
}

const modules = require.context('./modules', true, /\.js$/i)

modules.keys().map(module => {
    routes = routes.concat(modules(module).default)
})

const router = new VueRouter({ 
    mode: 'history', 
    routes 
})

export default router