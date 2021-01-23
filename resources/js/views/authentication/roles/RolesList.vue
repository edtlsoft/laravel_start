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
                                <table class="table table-bordered table-hover" id="table-roles-list">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Permisos</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="role in roles" :key="role.id">
                                            <td>{{ role.id }}</td>
                                            <td></td>
                                            <td>{{ role.name }}</td>
                                            <td>{{ role.description }}</td>
                                            <td>{{ role.permissions.map(p => p.name).join(', ') }}</td>
                                            <td>{{ role.created_at }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Permisos</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </tfoot>
                                </table>
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

    export default {
        components: {
            RoleForm,
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
                setPermission: 'roles/form/setPermission',
            }),
            ...mapActions({
                ajaxReloadDatatable: 'roles/ajaxReloadDatatable',
            }),
            getUpdatedListOfRoles() {
                return this.roles
            },
            openRoleForm(updateMode=false, permission=null) {
                this.setUpdateMode(updateMode)
                permission ? this.setPermission(permission) : false
                this.openModal('div#modal-role-form')
            },
            loadDatatableSettings() {
                let self = this

                return {
                    ajax: {
                        url: '/roles',
                        dataSrc: function(json){
                            let data = json.data
                            self.setRoles(data)
                            return data
                        },
                    },
                    columns: [
                        { data: 'id', },
                        { data: 'id', render: function(permissionId){
                            return `
                                <div class="w-100 text-center">
                                    <div class="btn-group">
                                        <button class="btn btn-sm btn-primary btn-roles-update" data-id="${permissionId}">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger btn-roles-delete" data-id="${permissionId}">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            `
                        } },
                        { data: 'name', },
                        { data: 'description', },
                        { data: 'created_at', render: function(data){
                            return moment(data).format('YYYY-MM-DD hh:mm:ss A')
                        } },
                    ],
                }
            },
            openPermissionUpdateForm(permission) {
                this.openRoleForm(true, permission)
            },
            openSwalWindowDeletePermission(permission){
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
            }
        },
        mounted() {
            // let datatableSettings = this.loadDatatableSettings()

            // this.setDatatableSettings(datatableSettings)
            // let datatable = this.loadDatatable('table#table-roles-list', this.datatableSettings)
            // this.setDatatable(datatable)

            // console.log(this.roles, this.roles.length)

            // this.listenButtonWithinDatatable('.btn-roles-update', this.getUpdatedListOfRoles, this.openPermissionUpdateForm)
            // this.listenButtonWithinDatatable('.btn-roles-delete', this.getUpdatedListOfRoles, this.openSwalWindowDeletePermission)
        },
    }
</script>