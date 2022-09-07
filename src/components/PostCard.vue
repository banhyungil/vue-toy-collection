<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <p class="card-text">{{ createdAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'contents', 'createdAt'],
  setup() {
    return {};
  },
};
</script>
<script setup></script>

<style lang="scss" scoped></style>
