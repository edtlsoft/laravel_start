
window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// SweetAlert2
window.Swal = require('sweetalert2');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    { path: '/', component: require('./views/auth/Login.vue').default },
    // { path: '/PasswordReset', component: require('./components/auth/PasswordReset.vue').default },
    // { path: '/password/reset/:token/email/:email', component: require('./components/auth/PasswordResetForgot.vue').default },
]

const router = new VueRouter({ routes });

const app = new Vue({
    el: '#app',
    router,
    mounted() {
        let height = window.innerHeight >= 700 ? window.innerHeight : 700;

        document.getElementById('app').style.height =  height + 'px';

        console.log('mounted');
    },
});
