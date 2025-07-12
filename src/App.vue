<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

  export default {
    components:{
      NavBar
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #4C585B;
}

body {
  background-color: #ffffff; /* Matches the logo's light blue */
  padding: 0;
  margin: 0;
}

</style>
