<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="course-layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      Loading .....
    </div>
  </div>
</template>

<script>

import PostsList from '@/components/PostsList.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';

// @ is an alias to /src


export default {
  components: { PostsList, TagCloud },
  setup() {
    let {posts, error, load} = getPosts();
    load();
    return {posts, error};
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
  }
  .course-layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
    padding: 20px;
  }
</style>