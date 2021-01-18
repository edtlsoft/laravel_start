<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Permisos</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/authentication">Autenticacion</a></li>
                            <li class="breadcrumb-item active">Permisos</li>
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
                                    <h5 class="m-0">Listado de Permisos</h5>
                                    <div>
                                        <button class="btn btn-primary" 
                                            dusk="btn-permissions-form" 
                                            @click="openPermissionForm()"
                                        >
                                            <i class="fa fa-plus"></i> Permiso
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover" id="table-permissions-list">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Opciones</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
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

        <PermissionForm />
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    import PermissionForm from './PermissionForm';

    export default {
        components: {
            PermissionForm,
        },
        computed: {
            ...mapGetters({
                permissions: 'permissions/getPermissions',
                datatable: 'permissions/getDatatable',
                datatableSettings: 'permissions/getDatatableSettings',
            })
        },
        methods: {
            ...mapMutations({
                setPermissions: 'permissions/setPermissions',
                setDatatable: 'permissions/setDatatable',
                setDatatableSettings: 'permissions/setDatatableSettings',
                setUpdateMode: 'permissions/form/setUpdateMode',
                setPermission: 'permissions/form/setPermission',
            }),
            ...mapActions({
                loadPermissionsList: 'permissions/loadPermissionsList',
            }),
            openPermissionForm(updateMode=false, permission=null) {
                this.setUpdateMode(updateMode)
                permission ? this.setPermission(permission) : false
                this.openModal('div#modal-permission-form')
            },
            loadDatatableSettings() {
                let self = this

                return {
                    ajax: {
                        url: '/permissions',
                        dataSrc: function(json){
                            let data = json.data
                            self.setPermissions(data)
                            return data
                        },
                    },
                    columns: [
                        { data: 'id', },
                        { data: 'id', render: function(permissionId){
                            return `
                                <div class="w-100 text-center">
                                    <div class="btn-group">
                                        <button class="btn btn-sm btn-primary btn-permissions-update" data-id="${permissionId}" dusk="btn-permissions-update">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger">
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
            activeButtonPermissionUpdate() {
                let self = this
                
                $(document).on('click', '.btn-permissions-update', function(){
                    let permissionId = $(this).data('id')
                    let permission = self.filterArrayDataForId(self.permissions, permissionId)
                    self.openPermissionForm(true, permission)
                })
            },
        },
        mounted() {
            let datatableSettings = this.loadDatatableSettings()

            this.setDatatableSettings(datatableSettings)
            let datatable = this.loadDatatable('table#table-permissions-list', this.datatableSettings)
            this.setDatatable(datatable)

            this.activeButtonPermissionUpdate()
        },
    }
</script>