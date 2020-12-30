import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let modules = {}

const files = require.context('./modules', true, /\.js$/i)

files.keys().map(file => {
    Object.assign(modules, {
        [file.split('/').pop().replace('.js', '')]: files(file).default
    })
})

export default new Vuex.Store({
    // strict: true,
    state: {
        userAuthenticated: {}
    },
    getters: {
        userAuthenticated: (state) => state.userAuthenticated,
    },
    mutations: {
        setUserAuthenticated(state, user) {
            state.userAuthenticated = user
        },
    },
    actions: {
        getUserAuthenticated(context) {
            axios.get('/users/authenticated')
                .then(response => {
                    context.commit('setUserAuthenticated', response.data.data)
                })
                .catch(error => {
                    alert('No estas logueado')
                    window.location = '/login'
                })
        }
    },
    modules,
})