<template>
    <div class="layout">
        <div v-for="post in posts" :key="post.id">
            <SingleCourseHome :post="post"></SingleCourseHome>
        </div>
    </div>
  
</template>

<script>
import SingleCourseHome from './SingleCourseHome.vue';

export default {
  components: { SingleCourseHome },
    props:['posts'],    
    setup(props){
        

    }
}
</script>

<style>
  .layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
  }
</style>