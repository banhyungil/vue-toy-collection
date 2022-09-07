<template>
  <div class="container px-4 text-center">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-4">
        <PostCard
          :title="item.title"
          :contents="item.contents"
          :createdAt="item.createdAt"
        ></PostCard>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/posts/PostCard.vue';
import { ref } from 'vue';
export default {
  components: { PostCard },
  setup() {
    const items = ref([
      {
        title: '제목1',
        contents: '내용1',
        createdAt: '2020-01-01',
      },
      {
        title: '제목2',
        contents: '내용2',
        createdAt: '2020-01-02',
      },
      {
        title: '제목3',
        contents: '내용3',
        createdAt: '2020-01-03',
      },
      {
        title: '제목4',
        contents: '내용4',
        createdAt: '2020-01-03',
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped></style>
