require('./bootstrap');

window.Vue = require('vue');

// Vue Router
import router from './routes'

// Vuex
import store from './store'

// Mixins
import mixins from './mixins'

const app = new Vue({
    el: '#app',
    router,
    store,
    mixins,
});
