<template>
   
    <div>   
    <NavBar/>
    
   
      <div style="
        padding-left: 0px;
        padding-right: 30px;
        right: 15px;z-index:50000;padding-top:114px; ">
        <b-carousel
          
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1200"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333; width:1200px;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1200"
                height="480"
                src="../assets/img/spander-1.png"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1200"
                height="480"
                src="../assets/img/spander-2.png"
                alt="image slot"
              >
              </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1200"
                height="480"
                src="../assets/img/spander-3.png"
                alt="image slot"
              >
                </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    <!-- <nav-bar/> -->
        <div class="container-lg">
      
        <section class="row  center  ">
          <h3 class="col"> PRODUCTOS RELEVANTES </h3>
        </section>
        
          <section class="row recommendations" type="recommendations"> 
            <div class="row container highlight-seeds">
              <div class="row carousel-container" style="width:1200px;min-width:1200px">
                <div class=" slick-initialized slick-slider">
                  
                    <div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px); width: 1200px;">
                      <div class="ui-item__wrapper trigger-item__wrapper">
                        <div data-index="0" class="col-4 slick-slide slick-active"   >
                          <div class="ui-item__wrapper trigger-item__wrapper">
                            <div class="ui-item__image-container">
                              <a class="ui-item__link" href="">
                                <img src="https://placeimg.com/200/200/tech" class="ui-item__image" alt="image" srcset="" style="
                                margin-top: 10px;"></a>
                            </div>
                            <div class="ui-item__price-block">
                              <span class="price-tag ui-item__price">
                                <p class="ui-item__title" aria-hidden="true">Ferrita</p>
                                <span></span> 
                                <span class="price-tag-amount" aria-hidden="true"><span class="price-tag-symbol">$</span><span class="price-tag-fraction">102.000</span></span>
                              </span>
                            </div>  
                          </div> 
                        </div>
                        <div data-index="1" class="col-4 slick-slide slick-active"    >
                          <div class="ui-item__wrapper trigger-item__wrapper">
                            <div class="ui-item__image-container">
                              <a class="ui-item__link" href="">
                                <img src="https://placeimg.com/200/200/tech" class="ui-item__image"  alt="image" srcset="" style="
                                margin-top: 10px;"></a>
                            </div>
                            <div class="ui-item__price-block">
                              <span class="price-tag ui-item__price">
                                <p class="ui-item__title" aria-hidden="true">Ferrita</p>
                                <span></span> 
                                <span class="price-tag-amount" aria-hidden="true"><span class="price-tag-symbol">$</span><span class="price-tag-fraction">102.000</span></span>
                              </span>
                            </div>  
                          </div> 
                        </div>
                        <div data-index="2" class="col-4 slick-slide slick-active"  >
                          <div class="ui-item__wrapper trigger-item__wrapper">
                            <div class="ui-item__image-container">
                              <a class="ui-item__link" href="">
                                <img src="https://placeimg.com/200/200/tech" class="ui-item__image"  alt="image" srcset="" style="
                                margin-top: 10px;"></a>
                            </div>
                            <div class="ui-item__price-block">
                              <span class="price-tag ui-item__price">
                                <p class="ui-item__title" aria-hidden="true">Ferrita</p>
                                <span></span> 
                                <span class="price-tag-amount" aria-hidden="true"><span class="price-tag-symbol">$</span><span class="price-tag-fraction">102.000</span></span></span>
                            </div>  
                          </div> 
                        </div>
                      </div>
                    </div> 
                </div>
              </div>
            </div>
          </section>
        
          <section class="row     center ">
            <h3 class="col"> TESTIMONIOS </h3>
          </section>             
          
          <section class="row justify-content-centered">
              
              <div class="col-4   card  " style="margin-left: 115px;"  >
                  <img src="https://placeimg.com/200/200/people" class="card-img-top   " alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Testimonio 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Ver más...</a>
                  </div>
                </div>

                <div class="col-4 card"   >
                  <img src="https://placeimg.com/200/200/people" class="card-img-top  " alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Testimonio 2</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Ver más...</a>
                  </div>
                </div>
              
          </section>
        </div>

          <!-- Noticias -->
          <section class="row  center   ">
            <h3 class="col"> EQUIPO </h3>
          </section> 
          <section class="seccion-noticias seccion-noticias--equipo">
                  
            <article class="equipo noticia--Equipo">
                <div class="noticia__cuadradito"></div>
                <h3 class="noticia__titulo">Oscar Leguizamo</h3>
                <img class="noticia__imagen" src="https://placeimg.com/150/150/people" alt="">
                <p class="noticia__texto">PRODUCT OWNER</p>
          
            </article>

            
            <article class="equipo noticia--Equipo">
                <div class="noticia__cuadradito"></div>
                <h3 class="noticia__titulo">Vivian Moreno</h3>
                <img class="noticia__imagen" src="https://placeimg.com/150/150/people" alt="">
                <p class="noticia__texto">SCRUM MASTER</p>
            </article>

            <article class="equipo noticia--Equipo">
                <div class="noticia__cuadradito"></div>
                <h3 class="noticia__titulo">Andres Hernandez</h3>
                <img class="noticia__imagen" src="https://placeimg.com/150/150/people" alt="">
                <p class="noticia__texto">TEAM DEVELOPER</p>
            </article>
            <article class="equipo noticia--Equipo">
                <div class="noticia__cuadradito"></div>
                <h3 class="noticia__titulo">Davian Gallego</h3>
                <img class="noticia__imagen" src="https://placeimg.com/150/150/people" alt="">
                <p class="noticia__texto">TEAM DEVELOPER</p>
            </article>

            <article class="equipo noticia--Equipo">
                <div class="noticia__cuadradito"></div>
                <h3 class="noticia__titulo">Wilson Cortes</h3>
                <img class="noticia__imagen" src="https://placeimg.com/150/150/people" alt="">
                <p class="noticia__texto">TEAM DEVELOPER</p>
            </article>                
                

      
    </section>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <router-link to="/"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Inicio</a></li></router-link>
            <router-link to="/services"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Servicios</a></li></router-link>
            <router-link to="/products"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Productos</a></li></router-link>
            <router-link to="/contacts"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contactar</a></li></router-link>
          </ul>
          <p class="text-center text-muted">GRUPO 51 E-5</p>
          <p class="text-center text-muted">© Misión TIC 2022</p>
        </footer>
     </div>
</template>
<script>
import NavBar from '../components/navbar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      isVisibleUpButton: true,
      scrollPosition: 0,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    }
  },
}
</script>
 
