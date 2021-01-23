<template>
    <div class="modal fade show" id="modal-role-form" aria-modal="true" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ title }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="role-form" @submit.prevent="submitRoleForm()">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" 
                                class="form-control" 
                                placeholder="modulo_permiso"
                                dusk="role-name" 
                                v-model="role.name"
                                pattern="[\w\s]{5,}"
                                title="El nombre debe contener al menos 5 caracteres"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Descripcion</label>
                            <textarea class="form-control" rows="5" 
                                placeholder="Descripcion..."
                                pattern="[\w\s]{5,}"
                                title="La descripcion debe contener al menos 5 caracteres"
                                dusk="role-description"
                                v-model="role.description"
                            >
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Permisos</label>
                            <select id="role-permissions" :multiple="select2.multiple">

                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="submit" 
                        form="role-form"
                        :class="classButton" 
                        dusk="btn-manage-role"
                    >
                        {{ textButton }}
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
    window.select2 = require('select2');
    require('select2/dist/js/i18n/es.js');

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        data: () => {
            return({
                select2: {
                    multiple: true,
                }
            })
        },
        computed: {
            ...mapGetters({
                updateMode: 'roles/form/getUpdateMode',
                role: 'roles/form/getRole',
            }),
            title() {
                return this.updateMode ? 'ACTUALIZAR ROLE' : 'REGISTRAR ROLE'
            },
            classButton(){
                return this.updateMode ? 'btn btn-success' : 'btn btn-primary'
            },
            textButton(){
                return this.updateMode ? 'Actualizar' : 'Guardar'
            },
        },
        methods: {
            ...mapActions({
                submitRoleForm: 'roles/form/submitRoleForm'
            }),
            cargarSelect2MultiplePermisos: function() {
                let me = this;
                setTimeout(() => {
                    $('select#role-permissions').select2({
                        theme: 'bootstrap',
                        language: "es",
                        multiple: true,
                        closeOnSelect: false,
                        ajax: {
                            url: '/permissions/select2',
                            dataType: 'JSON',
                            delay: 50,
                            data: function (params) {
                                return {
                                    search: params.term, // search term
                                };
                            },
                            processResults: function (response) {  //console.log(response.codigos);
                                return {
                                    results: response.permissions
                                };
                            },
                            cache: true
                        },
                        minimumInputLength: 0,
                        templateResult: function (data){
                            if( typeof data.id !== 'undefined' && data.id !== '' ) {
                                return data.name;
                            }
                            else{
                                return 'Buscando...';
                            }
                        }, // omitted for brevity, see the source of this page
                        templateSelection: function (data){
                            if( typeof data.id !== 'undefined' && data.id !== '' ) {
                                if( ! me.role.permissions.includes(data.id) ) {
                                    me.role.permissions.push(data.id); 
                                }

                                return data.name;
                            }
                            else{
                                return 'Seleccione los permisos para el rol';
                            }
                        } // omitted for brevity, see the source of this page
                    });

                    $('select#role-permissions').on('select2:unselect', function (e) {
                        var id = e.params.data.id;
                        me.role.permissions.splice(me.role.permissions.indexOf(id), 1);
                    });
                }, 500);
            },
        },
        mounted() {
            this.cargarSelect2MultiplePermisos()
        }
    }
</script>

<style lang="scss">

    // // Select2
    @import "~select2/dist/css/select2.min.css";


    // // Select2 Bootstrap Theme
    @import "~select2-bootstrap-theme/dist/select2-bootstrap.min.css";

</style>