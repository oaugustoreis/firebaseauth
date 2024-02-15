<template>
  <div class="home">
    <div class="card"  :key="item" v-for="item in 7">
      <div class="center">
        <div class="img">
          <img src="../assets/frango.jpg" alt="" />
          <div class="details">
            <div class="center">
              <ul>
                <p>Acompanha:</p>
                <li>Arroz</li>
                <li>Feijao</li>
                <li>Pure de batata</li>
                <li>Farofa</li>
              </ul>
            </div>
          </div>
        </div>
        <h2 class="name">Carne na chapa a milanesa com arroz</h2>
        <p class="price">R$ 48,90</p>
        <button class="button-74 button-pedidos">Adicionar</button>
      </div>
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
.details .center {
  display: none;
  transform: scale(0);
}

.details .center ul {
  list-style: inside;
  line-height: 1.1;
  padding: 0;
}

.details .center ul li {
  font-size: 16px;
  color: var(--color1);
  p{
    font-size: 18px;
  }
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
    transform: scale(1.01);
    .details .center {
      display: block;
      transform: scale(1);
    }
    .img img {
      display: none;
    }
  }
}
.hover-info {
  width: 130px;
  height: 110px;
  z-index: 1;
}
.img {
  border-radius: 10px;
  width: 130px;
  height: 110px;
  img {
    width: 130px;
    height: 110px;
    border-radius: 10px;
  }
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