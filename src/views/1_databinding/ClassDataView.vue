<template>
  <div>
    <!-- class는 꼭 인라인일 필요는 없으므로 object(+array) & computed 로 관리 할 수 있다 -->
    <h1 :class="{ 'text-red': isRed, 'text-decoration': true }">
      Databinding {{ title }}
    </h1>
    <h1 :class="classObj">Databinding {{ title }}</h1>
    <h1 :class="classObject">Databinding {{ title }}</h1>
    <button @click="changeState">ChangeRed</button>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'ClassData',
      isRed: false,
      classObj: {
        'text-red': true,
        'text-decoration': true
      }
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
  },
  computed: {
    classObject() {
      return {
        'text-red': this.isRed
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
