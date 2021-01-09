let mixinsGlobals = {}

const mixinFiles = require.context('./', true, /(?<!index)\.js$/i)

mixinFiles.keys().map(mixin => {
    let mixinObject = mixinFiles(mixin).default

    Object.assign(mixinsGlobals, {
        [mixin.split('/').pop().replace('.js', '')]: mixinObject
    })

    Vue.mixin(mixinObject)
})

window.mixins = mixinsGlobals