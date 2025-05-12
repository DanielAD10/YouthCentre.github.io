<template>
  <div v-if="post" class="post">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <div class="tags">
      <div v-for="tag in post.tags" :key="tag">
        <router-link :to="{name:'tag', params:{tag}}"><span>{{ tag }}</span></router-link>
      </div>
    </div>
    <!-- <p>{{ post.tags }}</p> -->
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
  <!-- <button @click="close">Close</button> -->

  <!-- <h1>Detail{{ id }}</h1> -->
</template>

<script>
import getPost from '@/composables/getPost';
import { useRouter } from 'vue-router';

export default {
    props: ['id'],
    setup(props) {
      let router = useRouter();
      let close = () => {
        router.push("/")
      };
      let {post, error, load} = getPost(props.id);
      load();
      return {post, error, close}
    }
}
</script>

<style>
  .post h1 {
  color: #6d6e71; /* Dark gray from the logo */
  font-size: 20px;
  margin-bottom: 10px;
}
</style>