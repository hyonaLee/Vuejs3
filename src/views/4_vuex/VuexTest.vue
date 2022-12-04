<template>
  <div>
    <h1>{{ Vuex }} 공부하기</h1>
    <h3>{{ counter }}</h3>
    <h3>{{ test }}</h3>
    <h3>{{ test2 }}</h3>
    <h3>{{ doubleGetters }}</h3>
    <h3>{{ inc }}</h3>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'Vuex'
    }
  },
  setup() {
    const store = useStore()
    const counter = store.state.counter
    const test = store.getters.time2
    // getters와 mutation은 전역으로 들어가서 store.getters.Counter.time2가 아니라
    // store.getters.time2이다
    const doubleGetters = computed(() => store.getters.doubleCount)
    return {
      counter,
      test,
      doubleGetters
    }
  }
}
</script>
<style></style>
