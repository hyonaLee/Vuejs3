<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <input
      class="border"
      type="text"
      v-model="search"
      @keyup="keyUpEvent($event)"
    />
    <input
      class="border"
      type="text"
      v-model="search"
      @keyup.enter="searchOn"
    />
    <button class="border" @click="decreaseCounter">검색</button>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'KeyEvent',
      search: ''
    }
  },
  methods: {
    searchOn() {
      console.log('search', this.search)
    },
    keyUpEvent(event) {
      if (event.keyCode === 13) {
        this.searchOn()
      }
    }
  }
}
</script>
<style>
.border {
  border: 1px solid gray;
}
</style>
