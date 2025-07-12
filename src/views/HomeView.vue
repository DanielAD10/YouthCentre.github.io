<template>
  <div class="home">
    <div>
      <img src="/images/header.png" alt="Youth Center" class="header-image">
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div class="intro">
      <h1>Welcome to the Youth Center</h1>
      <p>Explore our courses and activities designed for the youth.</p>
    </div>
    <CourseHome></CourseHome>

  </div>
  <FooterHome></FooterHome>
</template>

<script>
import FooterHome from '../components/FooterHome'
import CourseHome from '../components/CourseHome'
import TagCloud from '../components/TagCloud'
// import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';

// @ is an alias to /src


export default {
  components: {
    FooterHome,
    CourseHome,
    TagCloud },
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
  .header-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .intro {
    text-align: center;
    margin: 20px auto;
  }
  .intro h1 {
    color: #4C585B; /* Matches the logo's light blue */
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .intro p {
    color: #4C585B; /* Light blue from the logo */
    font-size: 16px;
    margin-top: 0;
  }
  
</style>