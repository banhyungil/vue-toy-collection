<script setup>
import { ref } from 'vue';
import * as bucket from '@/api/bucket';

const contents = ref('');
const bucketList = ref([]);

// getList, 최초 호출
const getList = async () => {
  const { data } = await bucket.getList();
  bucketList.value = data;
};
getList();

const saveBucket = () => {
  bucket.createBucket({ contents: contents.value }).then(() => {
    contents.value = '';
    getList();
  });
};

const saveBucketDone = (data) => {
  bucket.updateBucket(data.id, { done: true }).then(() => {
    getList();
  });
};
</script>

<template>
  <div>
    <div class="mypic">
      <h1>나의 버킷리스트</h1>
    </div>
    <div class="mybox">
      <div class="mybucket">
        <input
          id="bucket"
          class="form-control"
          type="text"
          placeholder="이루고 싶은 것을 입력하세요"
          v-model="contents"
        />
        <button
          @click="saveBucket"
          type="button"
          class="btn btn-outline-primary"
        >
          기록하기
        </button>
      </div>
    </div>
    <div class="mybox" id="bucket-list">
      <li v-for="bucket in bucketList" :key="bucket.id">
        <h2 :class="{ done: bucket.done }">✅ {{ bucket.contents }}</h2>
        <button
          @click="saveBucketDone(bucket)"
          type="button"
          class="btn btn-outline-primary"
          v-if="!bucket.done"
        >
          완료!
        </button>
      </li>
    </div>
  </div>
</template>

<style scoped>
.mypic {
  width: 100%;
  height: 200px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://images.unsplash.com/photo-1601024445121-e5b82f020549?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80');
  background-position: center;
  background-size: cover;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mypic > h1 {
  font-size: 30px;
}
.mybox {
  width: 95%;
  max-width: 700px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px lightblue;
  margin: 20px auto;
}
.mybucket {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.mybucket > input {
  width: 70%;
}
.mybox > li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  min-height: 48px;
}
.mybox > li > h2 {
  max-width: 75%;
  font-size: 20px;
  font-weight: 500;
  margin-right: auto;
  margin-bottom: 0px;
}
.mybox > li > h2.done {
  text-decoration: line-through;
}
</style>
