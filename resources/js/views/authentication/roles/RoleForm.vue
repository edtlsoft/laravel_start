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
                            <Select2Component 
                                id="role-permissions" 
                                :multiple="true" 
                                :settings="settingsSelect2"
                            />
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
    import Select2Component from '@/components/Select2Component'

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        components: {
            Select2Component,
        },
        data: () => {
            return({
                settingsSelect2: {
                    mount: false,
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
                            return { results: response.permissions };
                        },
                        cache: true
                    },
                    templateResult: function (data){
                        return (typeof data.id !== 'undefined' && data.id !== '') ? data.name : 'Buscando...'
                    },
                    templateSelection: null,
                    unselect: null,
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
            mountSelect2() {
                const self = this

                const select2TemplateSelection = function (data){
                    if( typeof data.id !== 'undefined' && data.id !== '' ) {
                        if( ! self.role.permissions.includes(data.id) ) {
                            self.role.permissions.push(data.id); 
                        }
                        return data.name;
                    }
                    return 'Seleccione los permisos para el rol';
                }

                const select2Unselect = function (e) {
                    self.role.permissions.splice(self.role.permissions.indexOf(e.params.data.id), 1);
                }

                this.settingsSelect2.templateSelection = select2TemplateSelection
                this.settingsSelect2.unselect = select2Unselect
                this.settingsSelect2.mount = true
            }
        },
        mounted() {
            this.mountSelect2()
        }
    }
</script>

<style lang="scss">
    // Select2
    @import "~select2/dist/css/select2.min.css";

    // Select2 Bootstrap Theme
    @import "~select2-bootstrap-theme/dist/select2-bootstrap.min.css";
</style>