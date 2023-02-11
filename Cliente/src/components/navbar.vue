<template>
  <div style="color:#d16b18;" >
    <div class="fijar2">
    <div class= "col fijar2">    
          <img src="../assets/img/cacao-tech2.0.png" class="placeimg_200_200_any.jpg" alt="cacao-tech2-0"  > 
        </div> 
 
    <b-navbar  toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >  
      <b-navbar-nav class="menu nav justify-content-start " style="width: 1090px; padding-left: 0px; padding-rigth:0px"> 
          <!-- <b-nav-item href="#section1">Seccion 1</b-nav-item>
          <b-nav-item href="#section2">Seccion 2</b-nav-item> -->
        <ul id="menu-menu-1"  >
          <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-21">
            <router-link to="/"><a href="" class=" nav-link has-sub-menu">Inicio</a></router-link>
          </li>
          <li  id="menu-item-25" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-25">
            <router-link   to="/servicios/services"> <a href="" class="c  nav-link has-sub-menu">SERVICIOS</a></router-link>
            <ul class="sub-menu">
              <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88" >
                <router-link to="/servicios/curso-fertilizantes"><a href=" " class=" nav-linkhas-sub-menu">CURSO FERTILIZANTES</a></router-link>	</li>
              <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                <router-link to="/servicios/curso-control-de-plagas"><a href=" " class="  ">CURSO CONTROL DE PLAGAS</a></router-link></li>
            </ul>
          </li>
          <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-23">
            <router-link   to="/productos/products"><a href="" class=" nav-link has-sub-menu">PRODUCTOS</a></router-link>
            <ul class="sub-menu"  >
              <li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-160">
                <router-link   to="/fertilizantes"><a href="" class=" nav-linkhas-sub-menu">FERTILIZANTES</a></router-link>	
              </li>
              <li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174">
                <router-link   to="/plaguicidas"><a href="" class=" nav-linkhas-sub-menu">PLAGUICIDAS</a></router-link>
              </li>
              <li id="menu-item-186" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-186">
                <router-link   to="/clones"><a href="" class=" nav-linkhas-sub-menu">CLONES</a></router-link></li>
              <li id="menu-item-198" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-198">
                <router-link   to="/herramientas"><a href="" class=" nav-linkhas-sub-menu">HERRAMIENTAS</a></router-link></li>
              <li id="menu-item-209" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209">
                <router-link   to="/infraestructura"><a href="" class=" nav-linkhas-sub-menu">INFRAESTRUCTURA</a></router-link></li>
            </ul>
            <span class="icon-angle-down"></span>
          </li>        
          <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20">
            <router-link to="/contactar"><a href="" class=" nav-link has-sub-menu">Contactar</a></router-link></li>
                    
        </ul> 
      
      </b-navbar-nav>
                   <b-navbar-nav class="ml-auto"></b-navbar-nav>
          
          <p class=" c  " style="">
            <router-link  to="/login"><a href="" class="  nav-link has-sub-menu "  >Acceder</a></router-link>  </p>   
      </b-collapse>   
    </b-navbar>
 
    </div>
  </div>
</template>
 