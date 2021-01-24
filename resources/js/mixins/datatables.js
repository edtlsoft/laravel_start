export default {
    data() {
        return ({
            settingsDatatable: {
                fixedHeader: true,
                processing: true,
                serverSide: true,
                ajax: {
                    url: '/permissions'
                },
                columns: [],
                responsive: {
                    orthogonal: 'responsive'
                },
                language: {
                    decimal: ",",
                    emptyTable: "Ningún dato disponible en esta tabla",
                    info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                    infoFiltered: "(filtrado de un total de _MAX_ registros)",
                    infoPostFix: "",
                    thousands: ".",
                    lengthMenu: "Mostrar _MENU_ registros",
                    loadingRecords: "Cargando...",
                    processing: "Procesando...",
                    search: "Buscar:",
                    zeroRecords: "No se encontraron resultados",
                    paginate: {
                        first: "Primero",
                        last: "Último",
                        next: "Siguiente",
                        previous: "Anterior"
                    },
                    aria: {
                        sortAscending: ": Activar para ordenar la columna de manera ascendente",
                        sortDescending: ": Activar para ordenar la columna de manera descendente"
                    }
                }
            }
        })
    },
    methods: {
        loadDatatable(tableId, settingsDatatable) {
            settingsDatatable = Object.assign(this.settingsDatatable, settingsDatatable)

            return $(tableId).DataTable(settingsDatatable);
        },
        filterArrayDataForId(arrayData, id) {
            return arrayData.find(data => {
                console.log(data.id, id, data.id === id)
                return data.id === id
            })
        },
        listenButtonWithinDatatable(selector, getCollection, callback) {
            let self = this

            $(document).on('click', selector, function () {
                let collection = getCollection()
                let dataId     = $(this).data('id')
                let data       = self.filterArrayDataForId(collection, dataId)

                callback(data)
            })
        }
    }
}