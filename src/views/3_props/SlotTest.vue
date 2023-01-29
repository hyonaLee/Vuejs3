<template>
  <div class="fancyStyle">
    <slot>디폴트버튼</slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.fancyStyle {
  border: none;
  padding: 15px;
  border-radius: 10px;
  background-color: beige;
  width: fit-content;
  box-shadow: 1px 1px 2px black;
  cursor: pointer;
}
</style>
