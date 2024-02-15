<template>
  <div class="home">
    <div class="card center">
      <div class="img">
      </div>
      <h2 class="name">Carne na chapa a milanesa com arroz</h2>
      <p class="price">R$ 48,90</p>
      <button class="add-button">Adicionar</button>
    </div>
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
  height: calc(100vh - 220px);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  justify-items: center;
}

.card {
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  width: 200px;
  h2{
    text-align: center;
    font-weight: 400;
    font-size: 16px;
  }
}
.img{
width: 150px;
height: 150px;
background-color: var(--color2);
}
.name {
  margin-top: 0;
  font-size: 1.2em;
}

.price {
  color: #444;
  font-size: 1.1em;
  margin-bottom: 10px;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>