<template>
  <button><span></span></button>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width:$h*2;
  border-radius: $h/2;
  border:none;
  background: blue;

  span {
    position: absolute;
    height:$h2;
    width:$h2;
    background:white;
    border-radius: $h2/2;
    top:2px;
    left:2px;
  }
}
</style>