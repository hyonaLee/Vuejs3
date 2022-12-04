<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>count: {{ count }}</h1>
    <button class="border" @click="countUp">countUp!!!</button>
    <h1>todo title: {{ todo.title }}</h1>
    <h1>todo isDone: {{ todo.isDone }}</h1>
    <button class="border" @click="makeTodoToggle">makeTodoToggle!!!</button>
    <ul id="array-rendering">
      <li v-for="item in myArray" v-bind:key="item">items{{ item }}</li>
    </ul>
    <button class="border" @click="addItemToArray">아이템추가</button>
    <button class="border" @click="removeItemFromArray">아이템삭제</button>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
// ref는 string, number 원시적 자료형
// reactive는 배열이나 객체
export default {
  setup() {
    const count = ref(0)
    const todo = reactive({ title: '빨래하기', isDone: false })
    const myArray = reactive([])
    const countUp = () => {
      // ref 사용시 .value로 접근
      count.value++
      console.log('countUp() called', count.value)
    }
    const makeTodoToggle = () => {
      // reactive 사용시 바로 접근
      todo.isDone = !todo.isDone
      console.log('makeTodoToggle() called', todo.isDone)
    }
    const addItemToArray = () => {
      myArray.push('🔥')
      console.log('addItemToArray() called', myArray.count)
    }
    const removeItemFromArray = () => {
      myArray.pop()
      console.log('addItemToArray() called', myArray.count)
    }
    return {
      count,
      todo,
      countUp,
      makeTodoToggle,
      myArray,
      addItemToArray,
      removeItemFromArray
    }
  }
}
</script>
<style>
.border {
  border: 1px solid gray;
}
</style>
