export default {
    methods: {
        openModal(selector) {
            $(selector).modal()
        },
        closeModal(selector) {
            $(selector).modal('hide')
        },
    }
}