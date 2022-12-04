<template>
  <div>
    <h1>Databinding {{ title }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'StringData'
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
