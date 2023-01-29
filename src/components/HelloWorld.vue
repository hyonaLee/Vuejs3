<template>
  <div>{{ name }} {{ isSubmited ? 'submited' : 'not yet' }}</div>
  <button @click="onSubmit">Submit</button>
</template>
<script>
import { version, ref, onMounted } from 'vue'

export default {
  props: {
    name: String
  },
  setup(props) {
    const isSubmited = ref(false)
    const onSubmit = () => {
      isSubmited.value = !isSubmited.value
    }

    onMounted(() => console.log('Component Mounted Vue.js Version :', version))

    // template에 전달한다.
    return {
      isSubmited,
      onSubmit
    }
  }
}
</script>
