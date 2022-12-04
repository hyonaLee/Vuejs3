<template>
  <div>
    <h1 :class="{ 'text-red': isRed, 'text-decoration': true }">
      Databinding {{ title }}
    </h1>
    <button @click="changeState">ChangeRed</button>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'ClassData',
      isRed: false
    }
  },
  methods: {
    // 함수 정의하는 곳
    changeState() {
      if (this.isRed) {
        this.isRed = false
      } else {
        this.isRed = true
      }
    }
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
