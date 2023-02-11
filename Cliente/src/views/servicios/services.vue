<template>
  <div>
    <NavBar/>

    <div class="grid_12 border-bottom-black-tr" >
					<h1 class="headline marble headline">SERVICIOS</h1>
					<div class="page-path headline ">
						<div id="crumbs" >
            <span typeof="v:Breadcrumb">
              <router-link style="  text-decoration: none;" to="/">
                <a style="font-size: 12px;" rel="v:url" property="v:title" href=" ">INICIO</a>
              </router-link>
            </span> 
            <span class="delimiter ">|</span> 
            <span class="current">SERVICIOS</span>
            </div>					
          </div>
				</div>	<v-container style="
    
    padding-top: 192px;
"> 
<div id="app">
  <v-app id="inspire">
    <div>

        <v-expansion-panels
        v-model="panel"
        :disabled="disabled"
        multiple
      >
        <v-expansion-panel>
          <v-expansion-panel-header>FORMACIÓN</v-expansion-panel-header>
          <v-expansion-panel-content>
       
              <li id="menu-item-x" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88" >
                <router-link to="/servicios/curso-fertilizantes"><a href=" " class=" nav-link has-sub-menu">CURSO FERTILIZANTES</a></router-link>	</li>
              <li id="menu-item-y" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                <router-link to="/servicios/curso-control-de-plagas" ><a href=" " class="  nav-link has-sub-menu ">CURSO CONTROL DE PLAGAS</a></router-link></li>
             </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-app>
</div>
     </v-container>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    FORMACIÓN
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <section>
                            <div class="seccion-cursos">
                                <article class="servicios-cursos">
                                    <h6> <a href="cursoFertilizacion.html">CURSO FERTILIZACIÓN</a> </h6>
                                   
                                </article>

                                <article class="servicios-cursos">
                                    <h6> <a href="cursoPlagas.html">CURSO CONTROL PLAGAS Y ENFERMEDADES</a> </h6>
                
                                </article>


                            </div>
                        </section>
                    
                    </div>
                </div>
                </div>
            </div>   
  </div>
</template>
<script>
import NavBar from '../../components/navbar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style  >
.acordion{
    width: 120px;
}
 
.menu-container{
    width: 40px;
    
    
}
</style> 