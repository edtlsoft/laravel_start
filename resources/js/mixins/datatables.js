export default {
    data() {
        return({
            settings: {
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
                    decimal:        ",",
                    emptyTable:     "Ningún dato disponible en esta tabla",
                    info:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    infoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
                    infoFiltered:   "(filtrado de un total de _MAX_ registros)",
                    infoPostFix:    "",
                    thousands:      ".",
                    lengthMenu:     "Mostrar _MENU_ registros",
                    loadingRecords: "Cargando...",
                    processing:     "Procesando...",
                    search:         "Buscar:",
                    zeroRecords:    "No se encontraron resultados",
                    paginate: {
                        first:      "Primero",
                        last:       "Último",
                        next:       "Siguiente",
                        previous:   "Anterior"
                    },
                    aria: {
                        sortAscending:  ": Activar para ordenar la columna de manera ascendente",
                        sortDescending: ": Activar para ordenar la columna de manera descendente"
                    }
                }
            }
        })
    },
    methods: {
        loadDatatable(tableId, settings) {
            settings = Object.assign(this.settings, settings)

            return $(tableId).DataTable(settings);
        },
        filterArrayDataForId(arrayData, id) {
            return arrayData.find(data => data.id === id)
        },
    }
}