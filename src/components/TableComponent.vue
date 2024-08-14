<script setup>
  import { RouterLink } from 'vue-router'
  import { ref, onMounted, reactive } from "vue";
  import { API_BASE_URL } from "@/config";

    const hotels = ref(null);
  
    const hotelsget = async () => {
        fetch(`${API_BASE_URL}/hotel`,{method:"GET"})
        .then(response => response.json())
        .then(data => hotels.value = data.data.data);
    }
    onMounted(async () => {
        await hotelsget();
    })
</script>
<template>
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg rounded-2xl mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs bg-gray-800 text-gray-50 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-8 py-4">
                    Nombre
                </th>
                <th scope="col" class="px-8 py-4">
                    Habitaciones
                </th>
                <th scope="col" class="px-8 py-4">
                    Ciudad
                </th>
                <th scope="col" class="px-8 py-4">
                    Dirección
                </th>
                <th scope="col" class="px-8 py-4">
                    NIT
                </th>
                <th scope="col" class="px-8 py-4">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(hotel,index) in hotels" :key="index" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ hotel.name }}
                </th>
                <td class="px-8 py-4">
                    {{ hotel.rooms }}
                </td>
                <td class="px-8 py-4">
                    {{ hotel.cities.name }}
                </td>
                <td class="px-8 py-4">
                    {{ hotel.address }}
                </td>
                <td class="px-8 py-4">
                    {{ hotel.nit }}
                </td>
                <td class="px-8 py-4">
                    <router-link :to="'/hotel/'+hotel.id" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Asignar
                    </router-link>
                    <router-link :to="'/ver-hotel/'+hotel.id" class="ml-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Ver
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>