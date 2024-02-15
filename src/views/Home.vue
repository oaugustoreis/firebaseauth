<template>
  <div class="home">
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Carne na chapa a milanesa com arroz</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Frango a parmegiana com fritas</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Chambersburg</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">
        Carne na chapa a milanesa com arroz batata feijao e Coca cola Gratis
      </h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Carne na chapa a milanesa com arroz</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Frango a parmegiana com fritas</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">Chambersburg</h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
    </div>
    <div class="card center">
      <div class="img"></div>
      <h2 class="name">
        Carne na chapa a milanesa com arroz batata feijao e Coca cola Gratis
      </h2>
      <p class="price">R$ 48,90</p>
      <button class="button-74 button-pedidos">Adicionar</button>
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
* {
  transition: 0.2s;
}
.home {
  width: calc(100vw / 2.5);
  height: calc(100vh - 220px);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  align-items: start;
}

.card {
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 200px;
  transition: 0.2s;
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
  }
  &:hover {
    background-color: var(--hover);
  }
}

.img {
  border-radius: 10px;
  width: 130px;
  height: 110px;
  background-color: var(--color2);
}
.name {
  margin-top: 0;
  font-size: 1.2em;
}

.price {
  color: #444;
  font-size: 1.1em;
  text-decoration: underline;
  text-underline-offset: 5px;
  margin-bottom: 10px;
}

.button-pedidos {
  width: auto;
  line-height: 0;
  height: 30px;
  color: white;
  font-size: 15px;
  font-weight: 100;
  background-color: var(--color3);
  &:hover {
    background-color: white;
    color: var(--color1);
  }
}
</style>