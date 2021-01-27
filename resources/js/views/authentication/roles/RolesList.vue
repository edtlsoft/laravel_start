<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Roles</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/authentication">Autenticacion</a></li>
                            <li class="breadcrumb-item active">Roles</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <div class="d-flex justify-content-between">
                                    <h5 class="m-0">Listado de Roles</h5>
                                    <div>
                                        <button class="btn btn-primary" 
                                            dusk="btn-role-form" 
                                            @click="openRoleForm()"
                                        >
                                            <i class="fa fa-plus"></i> Role
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <DatatableComponent 
                                    :id="datatableSettings.id" 
                                    :settings="datatableSettings"
                                    @datatableMounted="datatableMounted($event)"
                                >
                                    <template v-slot:header>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Permisos</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </template>
                                    <template v-slot:footer>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Permisos</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </template>
                                </DatatableComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->

        <RoleForm />
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    import RoleForm from './RoleForm';
    
    import DatatableComponent from '@/components/DatatableComponent';

    export default {
        components: {
            RoleForm,
            DatatableComponent,
        },
        computed: {
            ...mapGetters({
                roles: 'roles/getRoles',
                datatable: 'roles/getDatatable',
                datatableSettings: 'roles/getDatatableSettings',
            }),
        },
        methods: {
            ...mapMutations({
                setRoles: 'roles/setRoles',
                setDatatable: 'roles/setDatatable',
                setDatatableSettings: 'roles/setDatatableSettings',
                setUpdateMode: 'roles/form/setUpdateMode',
                setRole: 'roles/form/setRole',
                setSelectedPermissions: 'roles/form/setSelectedPermissions',
            }),
            ...mapActions({
                ajaxReloadDatatable: 'roles/ajaxReloadDatatable',
            }),
            getUpdatedListOfRoles() {
                return this.roles
            },
            openRoleForm(updateMode=false, role=null) {
                this.setUpdateMode(updateMode)

                if( role ) {
                    let roleCopy     = Object.assign({}, role)
                    let permissions  = roleCopy.permissions
                    
                    roleCopy.permissions = []
                    
                    this.setRole(roleCopy)
                    this.setSelectedPermissions(permissions)
                }
                                
                this.openModal('div#modal-role-form')
            },
            openRoleUpdateForm(role) {
                this.openRoleForm(true, role)
            },
            openSwalWindowDeleteRole(permission){
                console.log(permission)
                Swal.fire({
                    text: `¿Está realmente seguro de eliminar el permiso ${permission.name}?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Si, eliminarlo!',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    let interceptor = this.setInterceptorAxios('Eliminando el permiso, espere un momento');
                    
                    axios.delete(`/roles/${permission.id}`)
                        .then(response => {
                            this.ajaxReloadDatatable()

                            Swal.fire({
                                title: 'El permiso se elimino correctamente de la base de datos.',
                                icon: 'success',
                            })
                        })
                        .catch(error => this.showErrorHttpAxios(error))

                    this.ejectInterceptorAxios(interceptor)
                })
            },
            mountDatatable() {
                let self = this

                let settings = {
                    mount: true,
                    ajax: {
                        url: '/roles',
                        dataSrc: function({ data }){
                            self.setRoles(data)
                            return data
                        }
                    }
                }
                
                this.setDatatableSettings(settings)
            },
            datatableMounted(datatable) {
                this.setDatatable(datatable)
                this.setDatatableSettings({mount: false})
                this.listenButtonWithinDatatable('.btn-role-update', this.getUpdatedListOfRoles, this.openRoleUpdateForm)
                this.listenButtonWithinDatatable('.btn-role-delete', this.getUpdatedListOfRoles, this.openSwalWindowDeleteRole)
            }
        },
        mounted() {
            this.mountDatatable()
        },
    }
</script>