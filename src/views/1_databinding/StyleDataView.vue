<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <p :style="styled">스타일</p>
    <p style="text-decoration: line-through">스타일</p>
    <p class="text-decoration" :style="styled">스타일</p>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'StyleData',
      styled: {
        color: 'pink',
        fontSize: '30px'
      }
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
.text-decoration {
  text-decoration: underline;
}
</style>
