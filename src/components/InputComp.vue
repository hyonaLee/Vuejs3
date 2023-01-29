<template>
  <input type="text" v-bind:value="value" v-on:input="updateInput" />
  <h2>{{ value }}</h2>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    updateInput: function (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
