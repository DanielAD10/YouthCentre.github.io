<template>
  <div class="single-post-container">
    <!-- Left side (image) -->
    <div class="single-post-image-container">
      <img :src="post.img" alt="Post image" class="single-post-image" />
    </div>

    <!-- Right side (text content) -->
    <div class="single-post-content">
      <h2>{{ post.title }}</h2>
      <p>
        {{ postBody }}
        <router-link :to="{name:'detail', params:{id:post.id}}" class="blog-card-see-more">
          See more
        </router-link>
      </p>


      <div class="tags">
        <div v-for="tag in post.tags" :key="tag">
          <router-link :to="{ name: 'tag', params: { tag } }">
            <span>{{ tag }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    const postBody = computed(() => {
      return props.post.body.substring(0, 300) + '...';
    });

    return { postBody };
  }
};
</script>

<style>
.single-post-container {
  display: flex;
  gap: 20px;
  flex-direction: row; /* Aligns items in a row */
  /* align-items: flex-start; */
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.single-post-image-container {
  flex: 1;
  max-width: 350px;
}

.single-post-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.single-post-content {
  flex: 1;
  min-width: 250px;
}

/* .single-post-content h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
} */

/* .single-post-content p {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
} */

</style>