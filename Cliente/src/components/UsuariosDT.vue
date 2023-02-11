<template>
    <v-container>
        <v-data-table
        :headers="headers"
        :items="usuarios"
        sort-by="nombres"
        class="elevation-1"
    >
        <template v-slot:top>
        <v-toolbar
            flat
        >
            <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
            <v-divider
            class="mx-4"
            inset
            vertical
            
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
            v-model="dialog"
             width="453px"
             heigth="5 px"
            >
            <template v-slot:activator="{ on, attrs }"  >
                <v-btn
                color="#d16b18"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                >
                Crear nuevo usuario
                </v-btn>
            </template>
             
            <v-card v-b-modal class="v-card1"    >
                <v-card-title class="them--light v-card1"  style=" higth:30px;
                  width: 451.352px;border-top-right-radius: 4px; padding-left:95px;" >
                <span class="text  " >{{ formTitle }}</span>
                </v-card-title>

                
                  
                <v-container modal-body width="300px">      
                  <v-text-field
                    v-model="editItem.identificacion"
                    :counter="10"
                    label="N° Identificacion"
                  ></v-text-field>
   
                        <v-text-field
                        v-model="editedItem.nombres"
                        label="Nombres"
                        ></v-text-field>
                       <v-text-field
                        v-model="editedItem._id"
                        label="Identificador"
                        ></v-text-field>
                        <v-text-field
                        v-model="editedItem.apellidos"
                        label="Apellidos"
                        ></v-text-field>
                 
                        <v-text-field
                        v-model="editedItem.estado"
                         label="Estado" 
                        ></v-text-field>
                      <!--  <v-select
                        v-model="editedItem.estado"
 
                        :items="estados"
                        label="Estado" 
                        ></v-select>-->
 
                        <v-text-field
                        v-model="editedItem.contraseña"
                        label="Contraseña"
                        ></v-text-field>
 
                        <v-text-field
                        v-model="editedItem.rol"
                        label="Rol"
                        ></v-text-field>
 
                    
                </v-container>
                

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="#d16b18"
                    text
                    @click="close"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="#d16b18"
                    text
                    @click="save"
                >
                    Guardar
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">¿Eliminar Usuario?</v-card-title>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#d16b18" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="#d16b18" text @click="deleteItemConfirm">Aceptar</v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-toolbar>
        </template>
        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">

        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
            mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
            mdi-delete
        </v-icon>
        </template>
        <template v-slot:no-data>
        <v-btn
            color="#d16b18"
            @click="initialize"
        >
            Reiniciar
        </v-btn>
        </template>
        </v-data-table>
    </v-container>
    
</template>



<script>
 import axios from "axios";
  export default {
    name : 'UsuariosDT',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      estados: [
        'Activo',
        'Inactivo', 
      ],
      headers:[{ text: 'ID', value: '_id' },        
        {
          text: 'N° Identificación',
          align: 'start',
          sortable: false,
          value: 'identificacion',
        },
        { text: 'Nombres', value: 'nombres' },
        { text: 'Apellidos', value: 'apellidos' },
        { text: 'Estado', value: 'estado' },
        { text: 'Contraseña', value: 'contraseña' },
        { text: 'Rol', value: 'rol' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ], 
      identificacion: [],
      usuarios:[],
      editedIndex: -1,
      editedItem: {
        _id: '',
        nombres: '',
        apellidos: '',
        estado: 0,
 
        contraseña: '',
        rol: '',
      },
       
      defaultItem: {
        _id: '',
        nombres: '',
        apellidos: '',
        estado: 0,
      
        contraseña: '',
        rol: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar Nuevo Usuario' : 'Editar Usuario'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.identificacion = [
          { _id: '6561651651651',
            identificacion: 12,
            nombres: 'Andres',
            apellidos: 'Calvo',
            estado:1,
            contraseña: '123456',
            rol: 'Administrador',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
 
 
 
 
        ]
      },
            list(){
        axios.get('http://localhost:3000/api/usuario/list')
          .then(response=> {
            // handle success
            this.usuarios = response.data
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            return error
          })
      },
      editItem (item) {
        this.editedIndex = this.identificacion.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.identificacion.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.identificacion.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.identificacion[this.editedIndex], this.editedItem)
        } else {
          this.identificacion.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>