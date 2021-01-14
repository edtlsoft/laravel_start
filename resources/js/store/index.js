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
        userAuthenticated: null,
        userPermissions: null,
    },
    getters: {
        getUserAuthenticated: (state) => state.userAuthenticated,
        getUserPermissions: (state) => state.userPermissions,
    },
    mutations: {
        setUserAuthenticated(state, user) {
            state.userAuthenticated = user
        },
        setUserPermissions(state, permissions) {
            state.userPermissions = permissions
        },
    },
    actions: {
        async loadUserAuthenticated(context) {
            try {
                let response = await axios.get('/users/authenticated')
                context.commit('setUserAuthenticated', response.data.data)
                context.dispatch('loadUserPermissions')
            } catch (error) {
                window.location = '/login?loadUserAuthenticated=false'
            }
        },
        loadUserPermissions(context) {
            let permissions = []

            for(let role of context.getters.getUserAuthenticated.roles ) {
                permissions = permissions.concat(
                    role.permissions.map(permission => permission.name)
                )
            }

            context.commit('setUserPermissions', permissions)
        }
    },
    modules,
})