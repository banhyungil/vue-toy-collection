<script>
export default {
  mounted() {
    //this.show_order();
  },
  data() {
    return {
      sizeList: ['10평', '20평', '30평', '40평', '50평'],
    };
  },
  // methods: {
  //   show_order() {
  //     $.ajax({
  //       type: 'GET',
  //       url: '/mars/mars',
  //       data: {},
  //       success: function (res) {
  //         this.createOrderList(res);
  //       },
  //     });
  //   },
  //   createOrderList(orders) {
  //     for (const order of orders) {
  //       $('tbody').append(
  //         `<tr>
  //             <td>${order.name}</td>
  //             <td>${order.address}</td>
  //             <td>${order.size}</td>
  //           </tr>`,
  //       );
  //     }
  //   },
  //   save_order() {
  //     let name = $('#name').val();
  //     let address = $('#address').val();
  //     let size = $('#size').val();

  //     $.ajax({
  //       type: 'POST',
  //       url: '/mars/mars',
  //       data: {
  //         name: name,
  //         address: address,
  //         size: size,
  //       },
  //       success: function (response) {
  //         alert(response['msg']);
  //         window.location.reload();
  //       },
  //     });
  //   },
  // },
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
      <div class="order-info">
        <div class="input-group mb-3">
          <span class="input-group-text">이름</span>
          <input id="name" type="text" class="form-control" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">주소</span>
          <input id="address" type="text" class="form-control" />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="size">평수</label>
          <select class="form-select" id="size">
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
        <button
          onclick="save_order()"
          type="button"
          class="btn btn-warning mybtn"
        >
          주문하기
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">주소</th>
            <th scope="col">평수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Half Road</td>
            <td>Address</td>
            <td>Size</td>
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

.input-group-text {
  color: black;
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
