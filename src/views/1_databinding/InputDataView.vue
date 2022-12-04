<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- v-model을 통해 value값 지정 -->
    <input
      type="text"
      v-model="user"
      style="border: 1px solid green"
      @change="changeFunc"
    />
    <br />
    <input type="text" v-model="num1" style="border: 1px solid gray" /> +
    <input type="text" v-model="num2" style="border: 1px solid gray" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" style="border: 1px solid gray" /> +
    <input type="text" v-model.number="num4" style="border: 1px solid gray" /> =
    <span>{{ num3 + num4 }}</span>
    <br />
    <input type="number" v-model="num5" style="border: 1px solid gray" /> +
    <input type="number" v-model="num6" style="border: 1px solid gray" /> =
    <span>{{ num5 + num6 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'InpuData',
      user: 'USER',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0
    }
  },
  methods: {
    // 함수 정의하는 곳
    changeFunc() {
      console.log(this.user)
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
