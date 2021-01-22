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
                                title="El nombre debe contener al menos 3 caracteres"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Descripcion</label>
                            <textarea class="form-control" rows="5" 
                                placeholder="Descripcion..."
                                pattern="[\w\s]{5,}"
                                dusk="role-description"
                                v-model="role.description"
                            >
                            </textarea>
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

    export default {
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
        }
    }
</script>