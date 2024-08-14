<script setup>
  import { RouterLink } from 'vue-router'
  import AssigmentComponent from '@/components/AssigmentComponent.vue';

  defineProps({
    id: String
  })
</script>


<template>
  <main>
    <div class="flex items-center justify-center">
      <router-link to='/' class="w-3/12 block mt-5 text-white bg-gray-800 hover:bg-gray-850 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">
        HOME
      </router-link>
    </div>
    <AssigmentComponent></AssigmentComponent>
  </main>
</template>