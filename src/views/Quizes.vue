
<script setup>
import q from "../data/quizes.json";
import {ref,watch} from 'vue';
import Card from "../components/Card.vue"
import {useRoute} from 'vue-router';
import {RouterView} from "vue-router"
const quizes =ref(q);
const search =ref("");

// watch function runs whenever there is any change on the given function/file
watch(search,()=>{
  quizes.value =q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLowerCase()));
})


</script>

<template setup>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
     <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  
  header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  header h1{
    font-weight: bold;
    margin-right: 30px;

  }
  header input{
    border: none;
    background-color: rgb(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }
  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  /* Card */

  
</style>