<template>
  <div v-if="post" class="detail-container">
    <div class="detail-image-container">
      <img :src="post.img" alt="Course image" class="detail-image" />
    </div>
    <div>
      <h2>{{ post.title }}</h2>
      <p>
        {{ post.body }}
      </p>
      <div class="tags">
        <div v-for="tag in post.tags" :key="tag">
          <router-link :to="{name:'tag', params:{tag}}"><span>{{ tag }}</span></router-link>
        </div>
      </div>
    </div>
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
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  /* background: #fff; */
  /* padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-left: 4px solid #A5BFCC; Matches the logo's dark gray */
}
.detail-image-container {
  text-align: center;
  margin-bottom: 20px;
}
.detail-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>