let mixins = []

const files = require.context('./', true, /(?<!index)\.js$/i)

files.keys().map(mixin => {
    mixins.push(files(mixin).default)
})

export default mixins