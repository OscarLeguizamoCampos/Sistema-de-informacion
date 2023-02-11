<template>
  <div>
    <NavBar/>

    <div class="grid_12 border-bottom-black-tr" >
					<h1 class="headline marble headline">CURSO FERTILIZANTES</h1>
					<div class="page-path headline ">
						<div id="crumbs" >
            <span typeof="v:Breadcrumb">
              <router-link style="  text-decoration: none;" to="/">
                <a style="font-size: 12px;" rel="v:url" property="v:title" href=" ">INICIO</a>
              </router-link>
            </span> 
            <span class="delimiter ">|</span> 
            <span typeof="v:Breadcrumb">
              <router-link style="  text-decoration: none;" to="/servicios/services">
                <a style="font-size: 12px;" rel="v:url" property="v:title" href=" ">SERVICIOS</a>
              </router-link>
            </span> 
            <span class="delimiter ">|</span> 
            <span class="current">CURSO FERTILIZANTES</span>
            </div>					
          </div>
				</div> 
        	<v-container style="
    position: relative;
    top: 161px;
"> 
        <div class="two">
            <h3>FERTILIZACIÓN DEL CULTIVO DE CACAO</h3>
        </div>

        <div class="three">
            <p>Antes de iniciar cualquier tipo de fertilización es preciso conocer el nivel de fertilidad natural del suelo. Este
                diagnóstico se hará por medio de análisis de suelo y análisis foliar. Este último análisis es quizá el más
                recomendado en el caso de posibles deficiencias de elementos menores. Sobre la base de esa interpretación
                se recomendarán los niveles de fertilización requeridos.</p>

            <p>Una cosecha de cacao seco de 1000 Kg. extrae aproximadamente 44 Kg. De Nitrógeno (N), 10 Kg. de fosfato
                (P2 O5) y 77 Kg. de potasio (K2O). Si las mazorcas se partieren en el mismo campo y las cáscaras quedasen
                en el suelo, se reciclará aproximadamente 2 Kg. de N, 5 Kg. de P2O5 y 24 Kg. de K2O. Por lo tanto, todo suelo
                que se explota tiende a empobrecerse y a reducir su capacidad de alimentar a las plantas, en consecuencia
                decae la producción de frutos. Por lo que es necesario mejorar los suelos adicionando oportunamente abonos
                orgánicos o fertilizantes químicos. </p>

            <p>Del mismo modo, se recomienda la fertilización y mejora del suelo usando productos orgánicos como la roca
                fosfórica (P2O5), compost, bocachi, cal dolomita, etc.</p>
            
            <p>Las formulaciones se basan sobre los niveles de nitrógeno, fósforo y potasio que muestren los análisis de suelo
                y en las proporciones que permitan obtener mayores repuestas de producción. Generalmente hay que hacer
                aplicaciones de fertilizantes compuestos (N-P-K), aplicarlos edáficamente (Aplicación radicular), los elementos
                menores se pueden aplicar foliares, son bien asimilados por las hojas. 
                </p>

            <p>Al transplantar los arbolitos de cacao se debe fertilizar el sitio definitivo (Hoyo) de la siguiente manera: 150
                gramos de cal dolomita + 80 gramos de roca fosfórica + 75 gramos de triple 15 o cafetero, estos fertilizantes se
                deben mezclar uno a uno con el suelos que va tapar el hoyo. Cabe anotar que los hoyos deben tener las
                siguientes medidas: 40 cm x 40cm x 40 cm. </p>

            <h4>Tabla 1. Recomendación de fertilizacion por planta de cacao </h4>

            <table class="table table-bordered border-primary">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Triple 15 o 12-24-12</th>
                        <th scope="col">Cafetero</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Transplante</th>
                        <td>75-100 gramos/planta/año</td>
                        <td>75-125 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">1 año</th>
                        <td>150-225 gramos/planta/año</td>
                        <td>150-250 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">2 años</th>
                        <td>225-337 gramos/planta/año</td>
                        <td>225-400 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">3 años</th>
                        <td>375-562 gramos/planta/año</td>
                        <td>375-562 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">4 años</th>
                        <td>375-562 gramos/planta/año</td>
                        <td>375-562 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">5 años</th>
                        <td>375-562 gramos/planta/año</td>
                        <td>375-562 gramos/planta/año</td>
                        
                      </tr>

                      <tr>
                        <th scope="row">6 años en adelante</th>
                        <td>562 gramos/planta/año</td>
                        <td>562 gramos/planta/año</td>
                        
                      </tr>

                 </tbody>       

                      
            </table>

            <p>Las dosis que aparecen en la tabla 1. Están por planta/año, estas se debe fraccionar por lo menos en
                dos aplicaciones en el año, generalmente debe aplicarlas iniciando los periodos de lluvias (Marzo –
                septiembre), también se puede fraccional en tres partes iguales la dosis recomendada y aplicarla en
                los periodos de inicio de lluvias. </p>

            <p>Las distancias para su aplicación serían: para el primer año a los 50 cm del tallo, al segundo año a 80
                cm de distancia, dentro del tercer y sexto año a 110 cm y a partir del séptimo año a 150 cm del
                tronco, dividido en dos aplicaciones en el año, en forma circular alrededor de la planta, el fertilizante
                debe quedar tapado ligeramente con hojarasca o con el suelo. </p>

        </div>	</v-container> 
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