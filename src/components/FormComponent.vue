<script setup>
    import { ref, onMounted, reactive } from "vue";
    import { API_BASE_URL } from "@/config";
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';


    const cities = ref(null);
    const errors= ref(null);

    const form = reactive({
        name:null,
        city_id:null,
        address:null,
        rooms:null,
        nit:null,

    });

    const citiesget = async () => {
        fetch(`${API_BASE_URL}/cities`,{method:"GET"})
        .then(response => response.json())
        .then(data => cities.value = data.data.data);
    }

    const submit = async ()=>{  
        fetch(`${API_BASE_URL}/hotel`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.name, {autoClose: 2000,});
            }else{
                toast.success("Hotel registrado exitosamente", {autoClose: 2000,});
                resetForm();
            }
        })

    }

    function resetForm (){
        form.name=null,
        form.city_id=null,
        form.address=null,
        form.rooms=null,
        form.nit=null
    }
    onMounted(async () => {
        await citiesget();
    });
</script>


<template>
    <div class="relative overflow-x-auto mx-auto pt-5 mt-5">
        <div class="w-full ">
            <form class="max-w-4xl mx-auto" @submit.prevent="submit">
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="form.name" type="text" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <select v-model="form.city_id"  name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                        <option v-for="(city,index) in cities" :value="city.id" :key="index" >
                            <div class="" >{{ city.name }}</div>
                        </option>
                    </select>
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="form.rooms" type="number" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Habitaciones</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input v-model="form.address" type="text" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input v-model="form.nit" type="text" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT</label>
                    </div>
                </div>

                <button type="submit" class="w-full block mt-5 text-white bg-indigo-700 hover:bg-gray-750 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">GUARDAR</button>
                </form>
            </div>
    </div>
</template>
