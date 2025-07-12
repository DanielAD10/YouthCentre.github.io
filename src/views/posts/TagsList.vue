<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <div>
        <PostsList :posts="filterPosts"></PostsList>
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
import TagCloud from '@/components/TagCloud.vue';
import PostsList from '../../components/PostsList'
import getPosts from '@/composables/getPosts';
import { computed } from 'vue';


export default {
  components: { PostsList, TagCloud },
    props: ['tag'],
    setup(props){
        let {posts, error, load}= getPosts();
        load();
        let filterPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })
        return {posts, error, filterPosts};
    }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr, 1fr;
    gap: 20px;
    padding: 20px;
  }
</style>