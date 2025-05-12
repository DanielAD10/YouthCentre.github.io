<template>
  <div class="post">
    <router-link :to="{name:'detail', params:{id:post.id}}">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ postBody }}</p>
    <div class="tags">
      <div v-for="tag in post.tags" :key="tag">
        <router-link :to="{name:'tag', params:{tag}}"><span>{{ tag }}</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props:['post'],
    setup(props){
        let postBody = computed(()=>{
            return props.post.body.substring(0,100) + ".....";
        })
        
        return {postBody}
    }
}
</script>

<style>

  .post {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    border-left: 4px solid #A5BFCC; /* Matches the logo's dark gray */
  }

  .post h2 {
    color: #4C585B; /* Dark gray from the logo */
    font-size: 20px;
    margin-bottom: 10px;
  }

  .post a {
    text-decoration: none;
  }

  .post p {
    font-size: 14px;
    color: #4C585B;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px; /* Adds space between tags */
    margin-top: 10px;
  }

  .tags a {
    display: inline-block;
    font-size: 13px;
    color: #4C585B;
    text-decoration: none;
    background: #A5BFCC;
    padding: 5px 8px;
    border-radius: 5px;
    white-space: nowrap; /* Prevents breaking inside a single tag */
  }

  .tags a:hover {
    background: #7E99A3;
    color: #EEEEEE;
  }
</style>