require('./bootstrap');

window.Vue = require('vue');

// Vue Router
import router from './routes'

// Vuex
import store from './store'

// Mixins
require('./mixins')

const app = new Vue({
    el: '#app',
    router,
    store,
    created(){
        this.$store.dispatch('loadUserAuthenticated')
    }
});
