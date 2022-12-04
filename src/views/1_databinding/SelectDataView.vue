<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- v-model을 통해 value값 지정 , 사용자가 바꿀 수 있는 값에 대해 지정 -->
    <select
      name="number"
      v-model="selectedCity"
      style="width: 100px; border: 1px solid black"
    >
      <option value=""></option>
      <option value="02">서울</option>
      <option value="031">경기</option>
      <option value="064">제주</option>
    </select>
    <h3>선택한 번호는 {{ selectedCity }} 입니다.</h3>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'SlectData',
      selectedCity: ''
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
