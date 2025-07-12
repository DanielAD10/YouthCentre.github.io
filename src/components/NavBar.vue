<template>
  <header>
    <div class="logo">
        <router-link :to="{name: 'home'}"><img src="../assets/logo.jpg" alt=""></router-link>
    </div>
    <nav>
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'courses'}">Courses</router-link>
        <!-- <router-link :to="{name:'home'}">About</router-link> -->
        <router-link :to="{name:'faqs'}">FAQs</router-link>
    </nav>
    <!-- <div>
        <router-link :to="{name:}"></router-link>
    </div> -->
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
        /* max-width: 1200px; */
        /* margin: 0 auto; */
        padding: 10px;
        background-color: #ffffff; /* Matches the logo's light blue */
    }
    .logo img {
        max-width: 100px;
        cursor: pointer;
    }
    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #4C585B;
        text-decoration: none;
        margin-left: 20px;
    }

    nav a.router-link-exact-active {
        color: #7E99A3;
    }
</style>