<template>
  <div class="py-4">
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  setup() {
    const sayHello = () => {
      alert('안녕하세요.');
    };
    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
