<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <!-- <HomeWorld />
  <RouterView /> -->
  <div class="">
    <NavbarComponent />
    <div class="container mx-auto">
      <RouterView /> 
    </div>
  </div>
     
    

</template>

