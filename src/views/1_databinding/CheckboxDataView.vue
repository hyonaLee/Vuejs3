<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <h3>isComputer ?</h3>
    <input type="checkbox" value="computer" v-model="isComputer" />
    {{ isComputer }}
    <br />
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
    <input
      type="checkbox"
      v-model="toggle"
      true-value="네"
      false-value="아니오"
    />
    {{ toggle }}
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'CheckboxData',
      isComputer: false,
      toggle: '네',
      // 단일 체크박스인 경우에는 불리언 값을 사용
      // 보통 checkbox는 여러개 선택이 가능하기 때문에 배열로 선언
      // check 된 순서대로 들어감.
      // checked 됬을때의 값을 불리언 값이 아닌 다른 텍스트로 바꿀수있음.
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
