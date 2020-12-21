<template>
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="/images/enterprise/logo.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form id="loginform" class="form-horizontal" @submit.prevent="iniciarSesion()">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input 
                                type="text" 
                                name="username"
                                class="form-control input_user" 
                                placeholder="username"
                                v-model="authentication.username"
                            />
						</div>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input 
                                type="password"
                                name="password"
                                class="form-control input_pass" 
                                placeholder="password"
                                v-model="authentication.password"
                            />
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input 
                                    type="checkbox" 
                                    class="custom-control-input" 
                                    id="customControlInline"
                                    v-model="authentication.remember"
                                />
								<label class="custom-control-label" for="customControlInline">Recordarme</label>
							</div>
						</div>
                        <div class="d-flex justify-content-center mt-4 login_container">
                            <button type="submit" name="button" class="btn login_btn" dusk="btn-login">
                                Iniciar sesión
                            </button>
                        </div>
					</form>
				</div>
		
				<div class="mt-4">
                    <div class="d-flex justify-content-center links">
                        Olvido su contraseña? 
                        <router-link to="/PasswordReset" class="ml-2">
                            Click aqui
                        </router-link>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
    export default {
        data: function(){
            return({
                authentication: {
                    token   : document.getElementsByName('_token')[0].value,
                    username: '',
                    password: '',
                    remember: false,
                }
            })  
        },
        computed: {
            params() {
                let params = {}
                
                window.location.search.substring(1).split('&').forEach(search => {
                    let param = search.split('=')
                    
                    params[param[0]] = decodeURIComponent(param[1])
                })
                return params
            }
        },
        methods: {
            iniciarSesion() {
                let interceptor = axios.interceptors.request.use((config) => {
                    Swal.fire({ title: 'Comprobando credenciales', allowEscapeKey: false, allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    })
                    
                    return config;
                });
                axios.post('login', this.authentication)
                .then( data => {
                    if( ! data.data.success ) {
                        return Swal.fire({ title: data.data.message, icon: 'error' });
                    }

                    Swal.fire({ title: 'Ingresando', icon: 'success', showConfirmButton: false });
                    
                    window.location = this.params.redirect_to || '/';
                })
                .catch( error => { 
                    Swal.fire({ 
                        title: 'Error desconocido al intentar iniciar session.', 
                        icon: 'error',
                    })
                    .then(() => {
                        if( error.response ){
                            error.response.status === 419 ? window.location.reload() : false;
                        }
                    })
                })
                axios.interceptors.request.eject(interceptor);
            },
        }
    }
</script>