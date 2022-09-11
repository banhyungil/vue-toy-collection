<script>
export default {
  mounted() {
    //this.show_order();
  },
  data() {
    return {
      /* input */
      name: '',
      addr: '',
      size: '',

      dataList: [{ name: 'Harf Road', addr: '합정동', size: '30평' }],

      sizeList: ['10평', '20평', '30평', '40평', '50평'],
    };
  },
  methods: {
    saveOrder() {
      const data = {
        name: this.name,
        addr: this.addr,
        size: this.size,
      };

      this.dataList.push(data);

      this.name = '';
      this.addr = '';
      this.size = '';
    },
  },
};
</script>

<template>
  <div class="wrap">
    <div class="order">
      <h1>화성에 땅 사놓기!</h1>
      <h3>가격: 평 당 500원</h3>
      <p>
        화성에 땅을 사둘 수 있다고?<br />
        앞으로 백년 간 오지 않을 기회. 화성에서 즐기는 노후!
      </p>
      <form @submit.prevent="saveOrder" class="order-info">
        <div class="input-group mb-3">
          <span class="input-group-text">이름</span>
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="이름을 입력해주세요"
            required
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">주소</span>
          <input
            v-model="addr"
            type="text"
            class="form-control"
            placeholder="주소를 입력해주세요"
            required
          />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="size">평수</label>
          <select v-model="size" class="form-select" required>
            <option selected>-- 주문 평수 --</option>
            <option
              v-for="(size, index) in sizeList"
              :key="index"
              :value="size"
            >
              {{ size }}
            </option>
          </select>
        </div>
        <button class="btn btn-warning mybtn">주문하기</button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">주소</th>
            <th scope="col">평수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in dataList" :key="index">
            <td>{{ data.name }}</td>
            <td>{{ data.addr }}</td>
            <td>{{ data.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
* {
  color: aliceblue;
}
.wrap {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://cdn.aitimes.com/news/photo/202010/132592_129694_3139.jpg');

  background-size: cover;
  display: inline-block;
  width: 100%;
}

h1 {
  font-weight: bold;
}

.input-group input,
.input-group select {
  color: #222;
}
.input-group-text {
  color: #222;
}
.order {
  width: 500px;
  margin: auto;
  margin-top: 60px;
  padding-bottom: 60px;
}

.mybtn {
  width: 100%;
}

.order > table {
  margin: 40px 0;
  font-size: 18px;
}

option {
  color: black;
}
</style>
