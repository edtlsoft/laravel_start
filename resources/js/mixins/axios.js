import Swal from "sweetalert2";

export default {
    methods: {
        setInterceptorAxios(message='Cargando') {
            return axios.interceptors.request.use((config) => {
                Swal.fire({ 
                    title: message, 
                    allowEscapeKey: false, 
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })
                
                return config;
            });
        },
        ejectInterceptorAxios(interceptor) {
            axios.interceptors.request.eject(interceptor);
        },
        showErrorHttpAxios(error) {
            let message = 'Ocurrio un error desconocido al intentar realizar la peticion, intentelo nuevamente.';

            if( error?.message || error?.response?.data ) {
                message = getMessageErrorHttp(error, message)
            }

            Swal.fire({ icon: 'error', title: message })
        }, 
        getMessageErrorHttp(error, message) {
            if( error.message ) {
                if( error.message === 'Network Error' ) {
                    message = 'Error al intentar establecer conexión con el servidor, revise su conexión de internet y vuelva a intentarlo.'
                }
                else {
                    message = `Ocurrio un error inesperado, "${error.message}", si el error persiste comuniquese con el administrador de sistemas.`
                }
            }
            else {
                if( error.reponse?.data?.errors ) {
                    message = error.reponse.data.errors[Object.keys(error.reponse.data.errors)[0]][0]
                }
                else {
                    message = error.response.data.message || message
                }
            }

            return message
        }
    }
}