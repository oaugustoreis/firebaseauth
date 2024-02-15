<template>
  <div class="center">
    <div class="img">
      <img alt="" src="../assets/frango.jpg"/>
      <div class="details">
        <div class="center">
          <ul>
            <p>Acompanha:</p>
            <li v-for="(element, index) in item.descPedido" :key="index">
              - {{ element }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="name">{{ item.nomePedido }}</h2>
    <p class="price">R${{ item.precoPedido }}</p>
    <button class="button-74 button-pedidos" @click="emit('add-to-cart', item)">Adicionar</button>
  </div>
</template>
<script setup>
import {computed} from "vue";

const emit = defineEmits(['update:model-value', 'add-to-cart'])
const props = defineProps({
  modelValue: Object
})
const item = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:model-value', value)
})

</script>
<style lang="scss" scoped>
* {
  transition: 0.2s;
}

.details .center {
  p {
    color: var(--color1);
    font-size: 18px;
  }

  display: none;
  transform: scale(0);
}

.details .center ul {
  list-style: none;
  line-height: 1.1;
  padding: 0;
}

.details .center ul li {
  font-size: 16px;
  color: var(--color1);

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