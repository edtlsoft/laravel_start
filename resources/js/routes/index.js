import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [{ 
    path: '/',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue') 
}]

const modules = require.context('./modules', true, /\.js$/i)

modules.keys().map(module => {
    routes = routes.concat(modules(module).default)
})

const router = new VueRouter({ 
    mode: 'history', 
    routes 
})

export default router