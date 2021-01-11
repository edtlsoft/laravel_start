export default {
    data() {
        return({
            settings: {
                processing: true,
                serverSide: true,
                ajax: {
                    url: '/permissions'
                },
                columns: [],
                responsive: {
                    orthogonal: 'responsive'
                }
            }
        })
    },
    methods: {
        loadDatatable(tableId, settings) {
            settings = Object.assign(this.settings, settings)

            return $(tableId).DataTable(settings);
        },
    }
}