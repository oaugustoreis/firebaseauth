<template>
  <div class="center">
    <div class="account-info">
      <div class="center account-info-top">
        <h1>Augusto Reis</h1>
        <p>ask5.fnr@gmail.com</p>
        <p><a href="">Trocar senha</a></p>
        <hr class="center"/>
        
      </div>
      <p class="title">Últimos Pedidos</p>
      <div class="container1">
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
        <div class="container-pedidos">
          <div class="center-row">
            <p>05/04/2024</p>
            <p>R$48,50</p>
          </div>
          <div>
            <p>1x Prato Top de Alguma coisa</p>
            <p>2x Outra coisa</p>
          </div>
          <div class="center-row">
            <button class="button-74 button-pedidos">Ver Pedido</button>
            <button class="button-74 button-pedidos">Pedir de novo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>




<style lang="scss" scoped>
* {
  transition: 0.4s;
}
hr {
  border: 1px solid var(--color1);
  margin-top: 5px;
  width: 73%;
}
.container1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  overflow: auto;
  
}
.title {
  font-size: 16px;
  margin-bottom: 5px;
  align-self: self-start;
  margin-left: 13%;
}

.container-pedidos {
  margin-bottom: 10px;
  width: 70%;
  font-size: 16px;
  padding: 0  10px 10px  10px;
  align-items: start;
  
  border-radius: 10px;
  &:hover{
    background-color: var(--hover);
  }
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button-pedidos {
  width: auto;
  line-height: 0;
  height: 30px;
  color: white;
  font-size: 15px;
  font-weight: 100;
  &:last-child {
    background-color: var(--color3);
  }
  &:first-child {
    background-color: var(--color5);
  }
  &:hover {
    background-color: white;
    color: var(--color1);
  }
}
.account-info { 
  padding: 10px 0;
  width: 520px;
  height: 548px;
  border: 2px solid var(--color1);
  border-radius: 10px;
  background-color: #fff;
}
.account-info-top {
  line-height: 1.3;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
  p,
  a {
    font-size: 20px;
  }
  a {
    color: var(--color4);
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
}
</style>
