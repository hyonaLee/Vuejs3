<template>
  <div class="border">
    <h1>Databinding {{ title }}</h1>
    <h3>{{ title2 }}공부중</h3>
    <h3>{{ newTitle }}</h3>
    <!-- text input 사용시 @input 이벤트 걸어야 대체적으로 정상적으로 작동함 -->
    <input
      type="text"
      :v-model="currentTitle"
      @input="currentTitle = $event.target.value"
    />
    <p>{{ currentTitle }}</p>
    <button class="border" @click="sendParents">부모에게 props 보내기</button>
    <!-- 인라인에서 emit 보내기도 가능 -->
    <button class="border" @click="$emit('child', 'twosome')">
      부모에게 props 보내기'twosome'
    </button>
  </div>
</template>
<script>
export default {
  // 받아오는 Props의 데이터 타입 기입하기
  props: {
    title: {
      type: String,
      required: false,
      // prop의 타입이 Boolean이 아닌 경우에 값이 안들어오면 undefined 값을 가진다.
      // prop의 타입이 Boolean인 경우에 값이 안들어오면 false 값을 가진다.
      default: 'Title 없음'
    }
  },
  data() {
    // state 저장하는 곳
    return {
      currentTitle: '자식컴포넌트',
      title2: this.title
    }
  },
  methods: {
    sendParents() {
      console.log('부모에게 데이터 전달:', this.currentTitle)
      // 부모에게 props 보내기
      this.$emit('child', this.currentTitle)
      // methods에서 data에 접근하기 위해서는 this 필요.
      // $emit()에서 이벤트 이름 뒤에 전달된 모든 추가 인자는 리스너로 전달됨
    }
  },
  computed: {
    newTitle() {
      return `${this.title}!!`
    }
  }
}
</script>
<style>
.border {
  width: fit-content;
  padding: 20px;
  border: 1px solid black;
}
</style>
