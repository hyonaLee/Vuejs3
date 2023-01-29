<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- 인라인 핸들러는 간단한 경우에 사용 -->
    <button class="button" @click="counter++">Plus</button>
    <button class="button" @click="increaseCounter">Plus2</button>
    {{ counter }}
    <button class="button" @click="counter--">Minus</button>
    <button class="button" @click="decreaseCounter">Minus2</button>
    <button class="button" @click="specialCounter(5)">specialX5</button>
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
    // 주의! 매서드는 화살표 함수로 정의하는 것을 피해야한다. this의 값이 바뀌어 버리기 때문
    increaseCounter() {
      this.counter += 2
    },
    decreaseCounter() {
      this.counter -= 2
    },
    specialCounter(event) {
      this.counter = this.counter * event
    }
  }
}
</script>
<style>
.button {
  border: 1px solid gray;
}
</style>
