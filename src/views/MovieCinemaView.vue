<template>
  <div>
    <div class="mytitle">
      <h1>내 생애 최고의 영화들</h1>
      <button onclick="open_box()">영화 기록하기</button>
    </div>
    <div class="mypost" id="post-box">
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
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
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
      <div class="row row-cols-1 row-cols-md-4 g-4" id="cards-box"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

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

  display: none;
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
