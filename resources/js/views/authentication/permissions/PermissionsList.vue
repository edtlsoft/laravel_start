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
                                            @click="openForm()"
                                        >
                                            <i class="fa fa-plus"></i> Permiso
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Description</th>
                                            <th>Fecha de creación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="permission in permissions" :key="permission.id">
                                            <td v-text="permission.id"></td>
                                            <td v-text="permission.name"></td>
                                            <td v-text="permission.description"></td>
                                            <td v-text="permission.created_at"></td>
                                        </tr>
                                    </tbody>
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
    import { mapGetters, mapMutations } from 'vuex'

    import PermissionForm from './PermissionForm';

    export default {
        components: {
            PermissionForm,
        },
        computed: {
            ...mapGetters({
                permissions: 'permissions/getPermissions',
                openPermissionsForm: 'permissions/getOpenPermissionsForm'
            })
        },
        methods: {
            ...mapMutations({
                setOpenPermissionsForm: 'permissions/setOpenPermissionsForm'
            }),
            openForm() {
                this.setOpenPermissionsForm(true)
            }
        }
    }
</script>