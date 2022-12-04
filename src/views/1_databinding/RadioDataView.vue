<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- v-model을 통해 value값 지정 , 사용자가 바꿀 수 있는 값에 대해 지정 -->
    <input type="radio" name="react" value="React" v-model="selectedLang" />
    <label for="react">React</label>
    <input type="radio" name="angular" value="Angular" v-model="selectedLang" />
    <label for="angular">Angular</label>
    <input type="radio" name="vue" value="Vue" v-model="selectedLang" />
    <label for="Vue">vue</label>
    <h3>선택한 언어는 {{ selectedLang }} 입니다.</h3>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'RadioData',
      selectedLang: ''
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
