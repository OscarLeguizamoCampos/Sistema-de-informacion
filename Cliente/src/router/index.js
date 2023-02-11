import Vue from 'vue'
import VueRouter from 'vue-router'

import decode from "jwt-decode"
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { BBreadcrumb } from 'bootstrap-vue'
//import router from './router' 
//import VueRouter from 'vue-router'


import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../css/inicio.css'
import '../css/login.css'
import '../css/servicios.css'
//importando las paginas de /views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Services from '../views/servicios/services.vue'
import CursoFertilizantes from '../views/servicios/curso-fertilizantes'
import CursoControlPlagas from '../views/servicios/curso-control-de-plagas' 
import Products from '../views/productos/products.vue'
import Contactar from '../views/contactar.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('b-breadcrumb', BBreadcrumb)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin, //() => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: { requiresAuth: true },
    children : [
      { //    /admin/usuarios
        path : 'usuarios',
        name : 'Usuarios',
        meta : {
          Administrador : true
        },
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import(/* webpackChunkName: "about" */ '../components/UsuariosDT.vue')

      },
      { //    /admin/categorias
        path : 'categorias',
        name : 'Categorias',

      },
      { //    /admin/articulos
        path : 'articulos',
        name : 'Articulos',

      },

    ]
  },{
    path: '/servicios/services',
    name: 'Services',
    component: Services
  },
  { path: '/servicios/curso-fertilizantes', component: CursoFertilizantes},
  { path: '/servicios/curso-control-de-plagas', component: CursoControlPlagas},
  { path: '/productos/products', component: Products},
  { path: '/contactar', component: Contactar}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => { // De acuerdo al ciclo de vida, nos va a permitir que antes de cada ruta, revise si tiene un tema de autenticacion
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = localStorage.getItem('token'); //revisar si el local storage tiene token
    if (!token) { // Preguntamos si no existe el token
      next({
        name: 'Login',
        // query: { redirect: to.fullPath }
      })
    } else {
      //si requiere Administrador
      let auxRol = decode(token); //decodifico el token
      let rolToken = auxRol["rol"];// de todo el token decodificado, obtengo el rol
      if( to.matched.some(record => record.meta.Administrador)){
        if(rolToken ==='Administrador'){ //ademas si el rol es administrador
          next()
        }else{// sino, el token permite entrar a la ruta admin
          next({
            name : 'Admin'
          })
        }

      }else{
        next();
      }
      
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
