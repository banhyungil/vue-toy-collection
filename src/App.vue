<script setup>
import {RouterLink, RouterView} from 'vue-router'
import LoginView from './views/LoginView.vue'
import {ref} from 'vue'

const isLogin = ref(false);
</script>

<template>
  <div class="wrap">
    <LoginView  v-if="!isLogin" @changeMainView="isLogin = true"></LoginView>
    <div v-else>
      <header> <!-- main -->
        <nav>
          <RouterLink to="/fandiary">fandiary</RouterLink>
          <RouterLink to="/movieCinema">movieCinema</RouterLink>
          <RouterLink to="/bucket">bucket</RouterLink>
          <RouterLink to="/mars">mars</RouterLink>
        </nav>
      </header>
      <main>
        <RouterView/>
      </main>
    </div>
  </div>
</template>

<style scoped>
  header nav {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #2E2D2D;
  }
    
  header nav a {
    text-decoration: none;
    color: #fff;
    flex: 1;  /* flex-grow:1, flex-shrink:1, flex-basis:0 */
    text-align: center;
    padding: 18px 0;
  }

  header nav a:hover {
    background-color: #FF405C; 
    color: #fff;
  }
</style>
