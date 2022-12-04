<template>
  <div>{{ name }} {{ isSubmited ? 'submited' : 'not yet' }}</div>
  <button @click="onSubmit">Submit</button>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    name: String
  },
  setup(props) {
    const isSubmited = ref(false)
    const onSubmit = () => {
      isSubmited.value = !isSubmited.value
    }

    onMounted(() => console.log('component mounted'))

    // template에 전달한다.
    return {
      isSubmited,
      onSubmit
    }
  }
}
</script>
