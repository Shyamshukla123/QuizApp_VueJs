<script setup>
    import {defineProps} from 'vue';
    import {useRouter} from 'vue-router'
    const router =useRouter();
    const {quiz} =defineProps(["quiz"]);



    const navigateToQuize=()=>{
      router.push(`/quiz/${quiz.id}`);
    }


    
</script>

<template >
    <div class="card" @click="navigateToQuize">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} quistions</p>
        </div>
    </div>
</template>

<style >
    
  .card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgb(0,0,0,0.1);
    margin-bottom: 30px;
    margin-right: 20px;
    cursor: pointer;
  }
  .card img{
    width: 100%;
    height: 190px;
    margin: 0;
  }
  .card .card-text{
    padding: 0 5px;
  }
  .card .card-text h2{
    font-weight: bold;
  }
</style>