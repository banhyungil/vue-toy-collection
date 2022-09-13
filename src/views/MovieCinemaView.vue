<script>
import { ref } from 'vue';

export default {
  setup() {
    const isShowPost = ref(false);
    const openBox = () => {};

    const starList = ref([...Array(5).keys()].map((i) => i + 1));

    /* input */
    const url = ref('');
    const star = ref(1);
    const comment = ref('');
    const title = ref('');
    const desc = ref('');

    const dataList = ref([{}]);

    return {
      isShowPost,
      openBox,
      starList,
      url,
      star,
      comment,
      title,
      desc,
      dataList,
    };
  },
};
</script>

<template>
  <div>
    <div class="mytitle">
      <h1>내 생애 최고의 영화들</h1>
      <button @click="isShowPost = !isShowPost">영화 기록하기</button>
    </div>
    <div class="mypost" id="post-box" v-if="isShowPost">
      <div class="form-floating mb-3">
        <input
          id="url"
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
        <label>영화URL</label>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">별점</label>
        <select class="form-select" id="star">
          <option selected>-- 선택하기 --</option>
          <option v-for="n in 5" :key="n" :value="n">
            {{ '⭐'.repeat(n) }}
          </option>
        </select>
      </div>
      <div class="form-floating">
        <textarea
          id="comment"
          class="form-control"
          placeholder="Leave a comment here"
        ></textarea>
        <label for="floatingTextarea2">코멘트</label>
      </div>
      <div class="mybtns">
        <button onclick="posting()" type="button" class="btn btn-dark">
          기록하기
        </button>
        <button
          onclick="close_box()"
          type="button"
          class="btn btn-outline-dark"
        >
          닫기
        </button>
      </div>
    </div>
    <div class="mycards">
      <div class="row row-cols-1 row-cols-md-4 g-4" id="cards-box">
        <div v-for="(data, index) in dataList" :key="index" class="col">
          <div class="card h-100">
            <img src="${imgSrc}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ data.title }}</h5>
              <p class="card-text">{{ data.desc }}</p>
              <p>{{ '⭐'.repeat(data.star) }}</p>
              <p class="mycomment">{{ data.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mytitle {
  width: 100%;
  height: 250px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://movie-phinf.pstatic.net/20210715_95/1626338192428gTnJl_JPEG/movie_image.jpg');
  background-position: center;
  background-size: cover;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mytitle > button {
  width: 200px;
  height: 50px;

  background-color: transparent;
  color: white;

  border-radius: 50px;
  border: 1px solid white;

  margin-top: 10px;
}

.mytitle > button:hover {
  border: 2px solid white;
}

.mycomment {
  color: gray;
}

.mycards {
  margin: 20px auto 0px auto;
  width: 95%;
  max-width: 1200px;
}

.mypost {
  width: 95%;
  max-width: 500px;
  margin: 20px auto 0px auto;
  padding: 20px;
  box-shadow: 0px 0px 3px 0px gray;
}

.mybtns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
}

.mybtns > button {
  margin-right: 10px;
}
</style>
