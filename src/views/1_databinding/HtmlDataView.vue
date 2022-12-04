<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <p>{{ htmlString }}</p>
    html 태그를 허용하는 방법
    <p v-html="htmlString"></p>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'HtmlData',
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
