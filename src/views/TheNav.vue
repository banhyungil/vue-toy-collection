<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/home">Navbar</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/home"
                active-class="active"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/link"
                active-class="active"
                >Link</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/posts"
                active-class="active"
                >게시판</RouterLink
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const clicked = ref('1');

    return { clicked };
  },
};
</script>

<style lang="scss" scoped></style>
