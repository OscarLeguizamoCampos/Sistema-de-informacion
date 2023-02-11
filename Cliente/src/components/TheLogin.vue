<template>
  

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form-login">
    <div>
    <h5>Ingreso Usuario</h5>
    <h4 class="label">Usuario</h4>
    <v-text-field
      v-model="identificacion"
      :rules="identificacionRules"
      label="Identificación"
      label-color="white"
      required
    ></v-text-field>   
    <h4 class="label">Contraseña</h4>
    <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal con texto sugerido"
        hint="Mínimo 8 caracteres"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    

    <v-btn
      block
      :disabled="!valid"
      color="success"
      class="mr-4  "
      @click="ingresar"
    >
      INGRESAR
    </v-btn>

    <v-btn
      block
      plain
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar
    </v-btn>
</div>
        <section class="img">
        <img src="../assets/img/logo-cacao1 550x550.png" alt="">
      </section>
  </v-form>
</template>



<script>
import axios from 'axios';

  export default {
    data: () => ({
      name: 'TheLogin',  
      mensaje: '',
      valid: true,  
      password : '',      
      identificacion: '',
      show1: false,
      emailRules: [
        v => !!v || 'Identificacion requerida',
        v => /\d/.test(v) || 'Identificación válida',
      ],
      rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Mínimo 8 caracteres',
          identificacionMatch: () => (`El usuario y contraseña no coinciden`),
        },     
      
    }),

    methods: {
      ingresar () { // Va a realizar una peticion axios. Peticion http a nuestro Backend
        axios.post('http://localhost:3000/api/usuario/login', { // se envian dos parametros
            identificacion : this.identificacion,
            password : this.password
        })
        .then(respuesta => {
            return respuesta.data
        })
        .then(data =>{
            localStorage.setItem('token', data.tokenReturn) // Almacenamos el token en el local storage
            this.$router.push( {name : 'Admin'} ) //Agregamos, o lo mandamos a la vista del Admin
        })
        .catch(err =>{ // Hacemos un manejo de los errores, solamente imprimiendo en console
            this.mensaje = null;
            if([404,401].includes(err.response.status)){
                this.mensaje = "El usuario o la contraseña son incorrectos"
                console.log(this.mensaje)
            }else{//en caso de error 500
                this.mensaje = "ocurrio un error interno"
                console.log(this.mensaje)
            }
        })
        
      },
      reset () {
        this.$refs.form.reset()
      },
      
    },
  }
</script>