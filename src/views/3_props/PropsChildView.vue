<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <p>누구지 누구지?</p>
    <slot></slot>
    <p>{{ whoareyou }}</p>
    <input type="text" :v-model="whoareyou" />
    <button @click="sendParents">부모에게 props 보내기</button>
  </div>
</template>
<script>
export default {
  // 받아오는 Props의 데이터 타입 기입하기
  props: {
    whoareyou: {
      type: String,
      required: true,
      default: '누군지몰라'
    },
    age: {
      type: String,
      required: true,
      default: '몇살인지몰라'
    }
  },
  data() {
    // state 저장하는 곳
    return {
      title: 'Props배우기 :자식',
      name: '자식이름'
    }
  },
  methods: {
    sendParents() {
      console.log(this.name)
      //   부모에게 props 보내기
      this.$emit('child', this.name)
    }
  }
}
</script>
<style></style>
