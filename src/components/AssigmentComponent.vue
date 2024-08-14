<script setup>
    import { ref, onMounted, reactive } from "vue";
    import { API_BASE_URL } from "@/config";
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const accommodations = ref(null);
    const roomtypes = ref(null);
    const id = ref(null);
    const errors= ref(null);

    const form = reactive({
        amount:null,
        accommodation_id:null,
        room_type_id:null,
        hotel_id: route.params.id 

    });

    const accommodationget = async () => {
        fetch(`${API_BASE_URL}/accommodation`,{method:"GET"})
        .then(response => response.json())
        .then(data => accommodations.value = data.data.data);
    }

    const roomtypesget = async () => {
        fetch(`${API_BASE_URL}/room-type`,{method:"GET"})
        .then(response => response.json())
        .then(data => roomtypes.value = data.data.data);
    }

    const submit = async ()=>{  
        fetch(`${API_BASE_URL}/room`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                if (data.amount) {
                    toast.error(data.amount, {autoClose: 2000,});
                }
                if (data.room_type_id) {
                    toast.error(data.room_type_id, {autoClose: 2000,});
                }
                if (data.accommodation_id) {
                    toast.error(data.accommodation_id, {autoClose: 2000,});
                }
                
            }else{
                toast.success("Asignación registrada exitosamente", {autoClose: 2000,});
                resetForm();
            }
        })

    }

    function resetForm (){
        form.amount=null,
        form.room_type_id=null,
        form.accommodation_id=null
    }
    onMounted(async () => {
        await accommodationget();
        await roomtypesget();
    });
</script>


<template>
    <div class="relative overflow-x-auto mx-auto pt-5 mt-5">
        <div class="w-full ">
            <!-- {{ $route.params.id }} -->
            <form class="max-w-4xl mx-auto" @submit.prevent="submit">
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="form.amount" type="number" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <select v-model="form.room_type_id"  name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                        <option v-for="(roomtype,index) in roomtypes" :value="roomtype.id" :key="index" >
                            <div class="" >{{ roomtype.name }}</div>
                        </option>
                    </select>
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo habitación</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <select v-model="form.accommodation_id"  name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                        <option v-for="(accommodation,index) in accommodations" :value="accommodation.id" :key="index" >
                            <div class="" >{{ accommodation.name }}</div>
                        </option>
                    </select>
                    <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acomodación</label>
                </div>
 
                <button type="submit" class="w-full block mt-5 text-white bg-indigo-700 hover:bg-gray-750 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">GUARDAR</button>
                </form>
            </div>
    </div>
</template>