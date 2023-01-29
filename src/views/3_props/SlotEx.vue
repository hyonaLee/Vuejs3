<template>
  <ul>
    <li v-if="!items.length">로딩...</li>
    <li v-for="item in items" :key="item">
      <slot name="item" v-bind="item" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    // 모의 원격 데이터 가져오기
    setTimeout(() => {
      this.items = [
        { body: '범위가 지정된 슬롯 가이드', username: '신형만', likes: 20 },
        { body: 'Vue 튜토리얼', username: '나미리', likes: 10 }
      ]
    }, 1000)
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
