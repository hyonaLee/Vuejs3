<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- v-model을 통해 value값 지정 , 사용자가 바꿀 수 있는 값에 대해 지정 -->
    <select
      style="width: 100px; border: 1px solid black"
      v-model="selectedCity"
    >
      <!-- for를 통해 반복해서 화면을 그림 -->
      <!-- react map 사용 때와 동일하게 key를 필수적으로 넣어주어야한다 -->
      <!-- v-for는 컴포넌트에 직접 사용하는것도 가능함. 단 key 사용을 잊지말것 -->
      <!-- for 사용시 주의! -->
      <!-- v-if와 v-for는 함께 사용 할 수 없음 -->
      <!-- 같은 노드에 존재할 경우 v-if가 v-for보다 우선순위가 높기때문에 -->
      <!-- v-for에 접근할수없게됨. -->
      <option :value="city.title" :key="city.code" v-for="city in selectList">
        {{ city.title }}
      </option>
    </select>
    <h3>선택한 지역은 {{ selectedCity }} 입니다.</h3>
  </div>
  <br />
  <br />
  <br />
  <br />
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>제품번호</th>
        <th>제품가격</th>
        <th>주문수량</th>
        <th>총금액</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="index" v-for="(drink, index) in drinkList">
        <td>{{ drink.name }}</td>
        <td>{{ drink.code }}</td>
        <td>{{ drink.price }}</td>
        <td>
          <input
            type="number"
            v-model="drink.qty"
            style="width: 30px; border: 1px solid black"
          />
        </td>
        <td>{{ drink.price * drink.qty }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'v-forData',
      selectedCity: '',
      selectList: [
        { title: '서울', code: '02' },
        { title: '경기', code: '031' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        { name: '콜라', code: '059', price: 500, qty: 1 },
        { name: '사이다', code: '402', price: 550, qty: 1 },
        { name: '커피', code: '022', price: 800, qty: 1 },
        { name: '에너지드링크', code: '453', price: 900, qty: 1 },
        { name: '주스', code: '052', price: 600, qty: 1 }
      ]
    }
  },
  methods: {
    // 함수 정의하는 곳
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
