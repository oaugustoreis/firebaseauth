<template>
  <div class="home">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.home {
  width: calc(100vw / 2.5);
  height: 800px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  justify-items: center;
}

.card {
  border-radius: 10px;
  background-color: var(--color2);
  width: 200px;
  height: 200px;
}
</style>