export default {
    methods: {
        listenButtonWithinDatatable(selector, getCollection, callback) {
            $(document).on('click', selector, function () {
                let collection = getCollection()
                let dataId     = $(this).data('id')
                let data       = collection.find(data => data.id === dataId)

                callback(data)
            })
        }
    }
}