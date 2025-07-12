<template>
  <div class="course-home">
    <div class="course-header">
        <h1>Our Courses</h1>
        <router-link :to="{name: 'courses'}" class="more-courses">
            More Courses
        </router-link>
    </div>
    <div v-if="posts.length">
      <div>
        <CoursesListHome :posts="posts"></CoursesListHome>
      </div>
    </div>
    <div v-else>
      Loading .....
    </div>
  </div>
</template>

<script>
import CoursesListHome from './CoursesListHome.vue';
import getPosts from '@/composables/getPosts';

export default {
    components: {
      CoursesListHome
    },
    setup() {
    let {posts, error, load} = getPosts();
    load();
    return {posts, error};
  }
}
</script>

<style>
.course-home {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  text-align: left; /* Keep this for overall text alignment if needed */
  background-color: #f9f9f9;
  border-radius: 10px;
  box-sizing: border-box;
}

.course-header {
  display: flex; /* Makes items align horizontally */
  justify-content: space-between; /* Pushes content to the ends */
  align-items: center; /* Vertically centers content */
  margin-bottom: 20px; /* Space between the header and the course list */
  /* Remove padding-left from h1 and apply it here for consistent alignment */
  padding-left: 10px;
  padding-right: 10px; /* Add padding to the right side as well */
}

.course-home h1 {
  color: #4C585B;
  font-size: 32px;
  margin: 0; /* Remove default margin from h1 to allow flexbox to control spacing */
  /* Remove padding-left here as it's now on .course-header */
}

.more-courses {
  display: flex; /* Make the button itself a flex container for icon alignment */
  align-items: center; /* Vertically align text and icon */
  gap: 5px; /* Space between text and icon */
  text-decoration: none;
  color: #333333; /* Example link color */
  font-weight: bold;
  font-size: 16px; /* Adjust font size */
  padding: 8px 15px; /* Add some padding to make it a clickable area */
  border: 1px solid #333333; /* Add a subtle border */
  border-radius: 5px; /* Slightly rounded corners */
  transition: background-color 0.3s, color 0.3s; /* Smooth hover effect */
}

.more-courses:hover {
  background-color: #C6372F;
  color: #fff;
  text-decoration: none;
  border: none;
}

</style>