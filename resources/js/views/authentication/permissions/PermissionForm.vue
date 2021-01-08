<template>
    <div class="modal fade show" id="modal-permission-form" aria-modal="true" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ title }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="permission-form" @submit.prevent="submitPermissionForm()">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" 
                                class="form-control" 
                                placeholder="modulo_permiso"
                                dusk="permission-name" 
                                v-model="permission.name"
                                pattern="\w{3,}"
                                title="El nombre debe contener al menos 3 caracteres"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Descripcion</label>
                            <textarea class="form-control" rows="5" 
                                placeholder="Descripcion..."
                                dusk="permission-description"
                                v-model="permission.description"
                            >
                            </textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="submit" 
                        form="permission-form"
                        class="btn btn-primary" 
                        dusk="btn-manage-permission"
                    >
                        Guardar
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data: () => {
            return({
                isUpdate: false, 
                permission: {
                    name: '',
                    description: '',
                }
            })
        },
        computed: {
            ...mapGetters({
                openPermissionsForm: 'permissions/getOpenPermissionsForm'
            }),
            title() {
                return this.isUpdate ? 'ACTUALIZAR PERMISO' : 'REGISTRAR PERMISO'
            }
        },
        watch: {
            openPermissionsForm(newVal) {
                if( newVal ) {
                    $('div#modal-permission-form').modal()
                    this.setOpenPermissionsForm(false)
                }
            }
        },
        methods: {
            ...mapMutations({
                setOpenPermissionsForm: 'permissions/setOpenPermissionsForm',
                addPermissionToList: 'permissions/addPermissionToList',
            }),
            submitPermissionForm() {
                axios.post('/permissions', this.permission)
                    .then(response => {
                        this.addPermissionToList(response.data)
                        
                        Swal.fire({
                            title: 'El permiso se registro correctamente.',
                            icon: 'success'
                        })
                        .then(() => this.modalHidden())
                    })
                    .catch(error => console.log(error))
            },
            modalHidden() {
                $('div#modal-permission-form').modal('hide')
            }
        }
    }
</script>