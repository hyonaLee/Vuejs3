<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <input type="checkbox" name="react" value="React" v-model="selectedLang" />
    <label for="react">React</label>
    <input
      type="checkbox"
      name="angular"
      value="Angular"
      v-model="selectedLang"
    />
    <label for="angular">Angular</label>
    <input type="checkbox" name="vue" value="Vue" v-model="selectedLang" />
    <label for="Vue">vue</label>
    <h3>선택한 언어는 {{ selectedLang }} 입니다.</h3>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'CheckboxData',
      // checkbox는 여러개 선택이 가능하기 때문에 배열로 선언
      selectedLang: []
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
