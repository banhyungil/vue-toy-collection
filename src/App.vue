<script setup>
import { RouterLink, RouterView } from 'vue-router';
import LoginView from './views/LoginView.vue';
import { ref } from 'vue';

const isLogin = ref(true);
</script>

<template>
  <div class="wrap">
    <LoginView v-if="!isLogin" @changeMainView="isLogin = true"></LoginView>
    <header v-else>
      <nav>
        <RouterLink to="/fandiary">fandiary</RouterLink>
        <RouterLink to="/movieCinema">movieCinema</RouterLink>
        <RouterLink to="/bucket">bucket</RouterLink>
        <RouterLink to="/mars">mars</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header nav {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #2e2d2d;
}

header nav a {
  text-decoration: none;
  color: #fff;
  flex: 1; /* flex-grow:1, flex-shrink:1, flex-basis:0 */
  text-align: center;
  padding: 18px 0;
}

header nav a:hover {
  background-color: #ff405c;
  color: #fff;
}
</style>
