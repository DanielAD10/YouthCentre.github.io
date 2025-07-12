<template>
  <div class="blog-card">
    <!-- Left side (image) -->
    <div class="blog-card-image-wrapper">
      <img :src="post.img" alt="Course image" class="blog-card-image" />
    </div>

    <!-- Right side (text content) -->
    <div class="blog-card-content">
      <h2 class="blog-card-title">{{ post.title }}</h2>
      <p class="blog-card-body">
        {{ postBody }}
        <router-link :to="{name:'detail', params:{id:post.id}}" class="blog-card-see-more">
          See more
        </router-link>
      </p>
      <div class="tags">
        <div v-for="tag in post.tags" :key="tag">
          <router-link :to="{name:'tag', params:{tag}}"><span>{{ tag }}</span></router-link>
        </div>
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
            return props.post.body.substring(0,100) + "... ";
        })
        
        return {postBody}
    }
}
</script>

<style>

 .blog-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Softer, larger shadow */
    overflow: hidden; /* Ensures rounded corners on image */
    display: flex;
    flex-direction: column; /* Stack content vertically */
    width: 100%; /* Take full width of its grid cell */
    max-width: 300px; /* Limit card width for a compact look */
    margin: 0 auto; /* Center card if it's the only one in a row */
    transition: transform 0.2s ease-in-out;
 }

 .blog-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

/* Image/Logo area at the top */
.blog-card-image-wrapper {
  width: 100%;
  /* Define a fixed height or aspect ratio for the image container */
  height: 200px; /* Example fixed height for the image/logo area */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8; /* Light background for the image area */
  overflow: hidden;
}

.blog-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the container, cropping if necessary */
  /* If the image is a logo and you want it centered and contained, use 'contain' */
  /* object-fit: contain; */
}

/* Content area below the image */
.blog-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows content to push tags to the bottom */
}

.blog-card-title {
  font-size: 1.5em; /* Larger title */
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1.2;
}

.blog-card-body {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  flex-grow: 1; /* Allows body to take up space, pushing tags down */
}

.blog-card-see-more {
  color: #6a0dad; /* Purple color for "See more" link */
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap; /* Keep "See more" on one line */
}

.blog-card-see-more:hover {
  text-decoration: underline;
}


.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Space between tags */
  margin-top: 15px; /* Space above tags */
}

.tags a {
  background: #333333; /* Darker grey background for tags */
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px; /* Pill shape for tags */
  text-decoration: none;
  font-size: 0.8em;
  white-space: nowrap; /* Prevent tag text wrapping */
  transition: background-color 0.2s ease-in-out;
}

.tags a:hover {
  background: #C6372F; /* Slightly darker on hover */
}

</style>