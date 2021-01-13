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

// Mixins
let mixins = {}

const mixinsFiles = require.context('../mixins', true, /(?<!index)\.js$/i)

mixinsFiles.keys().map(mixin => {
    Object.assign(mixins, mixinsFiles(mixin).default)
})


export default new Vuex.Store({
    // strict: true,
    state: {
        userAuthenticated: null,
    },
    getters: {
        getUserAuthenticated: (state) => state.userAuthenticated,
    },
    mutations: {
        setUserAuthenticated(state, user) {
            state.userAuthenticated = user
        },
    },
    actions: {
        async loadUserAuthenticated(context) {
            try {
                let response = await axios.get('/users/authenticated')
                context.commit('setUserAuthenticated', response.data.data)
            } catch (error) {
                window.location = '/login'
            }
        }
    },
    modules,
    mixins,
})