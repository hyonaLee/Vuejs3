<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <button class="button" @click="increaseCounter">Plus</button>
    {{ counter }}
    <button class="button" @click="decreaseCounter">Minus</button>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'ClickEvent',
      counter: 0
    }
  },
  methods: {
    // 함수 정의하는 곳
    increaseCounter() {
      this.counter += 1
    },
    decreaseCounter() {
      this.counter -= 1
    }
  }
}
</script>
<style>
.button {
  border: 1px solid gray;
}
</style>
