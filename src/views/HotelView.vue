<script setup>
  import { RouterLink } from 'vue-router'
  import { ref, onMounted, reactive } from "vue";
  import { API_BASE_URL } from "@/config";
  import { useRoute } from 'vue-router'


  // const hotels = ref(null);
  const rooms = ref(null);
  const route = useRoute()

    
    // const hotelsget = async () => {
    //     fetch(`${API_BASE_URL}/hotel/${route.params.id }`,{method:"GET"})
    //     .then(response => response.json())
    //     .then(data => hotels.value = data.data);
    // }

    const roomsget = async () => {
        fetch(`${API_BASE_URL}/room/${route.params.id }`,{method:"GET"})
        .then(response => response.json())
        .then(data => rooms.value = data.data.data);
    }

    onMounted(async () => {
        // await hotelsget();
        await roomsget();
    })
</script>

<template>
  <main>
    <div class="flex items-center justify-center">
      <router-link to='/' class="w-3/12 block mt-5 text-white bg-gray-800 hover:bg-gray-850 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">
        HOME
      </router-link>
    </div>
    <div class="mb-5 mt-5">
        <h1 class="text-center text-gray-900">ASIGNACIONES</h1>
   
        <div class=" w-12/12">
            <div class="columns-3 mt-3 p-1 bg-gray-200 shadow-lg rounded-lg overflow-hidden" v-for="(room,index) in rooms" :key="index">
                <h2 class="text-xl font-semibold text-gray-800 text-center">Cantidad: </h2>
                <p class="text-gray-600 mt-2 text-center"> {{ room.amount }}</p>
                <h2 class="text-xl font-semibold text-gray-800 text-center">Tipo: </h2>
                <p class="text-gray-600 mt-2 text-center">   {{ room.room_type.name }}</p>
                <h2 class="text-xl font-semibold text-gray-800 text-center">Comodidad: </h2>
                <p class="text-gray-600 mt-2 text-center">  {{ room.accommodation.name }}</p>
            </div>
        </div>
    </div>
  </main>
</template>