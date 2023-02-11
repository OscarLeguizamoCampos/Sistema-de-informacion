<template>
  <div>
    <NavBar/>

    <div class="grid_12 border-bottom-black-tr" >
					<h1 class="headline marble headline">PRODUCTOS</h1>
					<div class="page-path headline ">
						<div id="crumbs" >
            <span typeof="v:Breadcrumb">
              <router-link style="  text-decoration: none;" to="/">
                <a style="font-size: 12px;" rel="v:url" property="v:title" href=" ">INICIO</a>
              </router-link>
            </span> 
            <span class="delimiter ">|</span> 
            <span class="current">PRODUCTOS</span>
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