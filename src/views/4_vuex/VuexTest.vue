<template>
  <div>
    <div v-for="card in $store.state.cardList" :key="card.id">
      {{ card.title }}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    // state 저장하는 곳
    return {
      cardList: null
    }
  },
  methods: {
    getData() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          this.$store.commit('ADD_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style></style>
