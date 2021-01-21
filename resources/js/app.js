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
    },
    methods: {
        logout: function(){
            let interceptor = this.setInterceptorAxios('Cerrando sesión')

            axios.post('/logout')
                .then(response => window.location = '/login')
                .catch(error => this.mostrarErrorHttpAxios(error))
            
            this.ejectInterceptorAxios(interceptor)
        }
    },
});
