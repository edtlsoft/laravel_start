<template>
    <table class="table table-bordered table-hover" :id="id">
        <thead>
            <slot name="header"></slot>
        </thead>
        <tfoot>
            <slot name="footer"></slot>
        </tfoot>
    </table>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            settings: {
                type: Object,
                required: true,
            },
        },
        data() {
            return ({
                defaultSettings: {
                    mount: false,
                    fixedHeader: true,
                    processing: true,
                    serverSide: true,
                    ajax: {},
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
                },
            })
        },
        watch: {
            'settings.mount': function(newVal) {
                this.defaultSettings.mount = newVal
                
                if( newVal ) {
                    this.mountComponent()
                };
            }
        },
        methods: {
            mountComponent: function() {
                const settings = Object.assign(this.defaultSettings, this.settings)

                const datatable = $(`table#${this.id}`).DataTable(settings);

                this.$emit('datatableMounted', datatable)
            },
        },
    }
</script>
