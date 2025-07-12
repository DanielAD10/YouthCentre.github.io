<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
  components: {
    SinglePost },
    props:['posts'],    
    setup(props){
        

    }
}
</script>

<style>
  
  /* .courses-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  } */
</style>