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
                                :id="select2Settings.id"
                                :settings="select2Settings"
                                :collection="role.permissions"
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
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    import Select2Component from '@/components/Select2Component.vue'

    export default {
        components: {
            Select2Component,
        },
        computed: {
            ...mapGetters({
                updateMode: 'roles/form/getUpdateMode',
                role: 'roles/form/getRole',
                select2Settings: 'roles/form/getSelect2Settings',
                selectedPermissions: 'roles/form/getSelectedPermissions',
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
        watch: {
            selectedPermissions: function(permissions) {
                let selectId = this.select2Settings.id
                    
                $(`select#${selectId}`).val(null).trigger('change');

                if( Array.isArray(permissions) && permissions.length ) {
                    for(let permission of permissions) {
                        let option = new Option(permission.name, permission.id, true, true);
                        $(`select#${selectId}`).append(option).trigger('change');
                    }
                }
            }
        },
        methods: {
            ...mapMutations({
                setSelect2Settings: 'roles/form/setSelect2Settings',
            }),
            ...mapActions({
                submitRoleForm: 'roles/form/submitRoleForm',
            }),
            mountSelect2() {
                const self   = this

                let settings = {
                    mount: true,
                    templateSelection: function (data){
                        //console.log('templateSelection', data)

                        if( typeof data.id !== 'undefined' && data.id !== '' ) {
                            if( ! self.role.permissions.includes(data.id) ) {
                                self.role.permissions.push(data.id); 
                            }
                            return data.name || data.text;
                        }
                        return 'Seleccione los permisos para el rol';
                    },
                    unselect: function (e) {
                        self.role.permissions.splice(self.role.permissions.indexOf(e.params.data.id), 1);
                    }
                }

                this.setSelect2Settings(settings)
            }
        },
        mounted() {
            this.mountSelect2()
        }
    }
</script>
