<template>
  <div class="flex flex-center q-mt-xl">
    <div class="login column flex-center justify-around">
      <div class="full-width column">
        <div class="top column items-center">
          <h1>Entre na sua conta</h1>
          <p>E tenha acesso aos seus pedidos favoritos</p>
        </div>
        <div class="backfield column q-my-md items-start">
          <span>Email:</span>
          <input
            class="fields"
            v-model="email"
            type="text"
            placeholder="Digite seu email..."
          />
          <span>Senha:</span>
          <input
            v-model="password"
            class="fields"
            type="text"
            placeholder="Digite seu telefone..."
          />
        </div>
        <q-btn class="google-btn" unelevated outline rounded
          ><i class="fa-brands fa-google"></i>CONECTE COM GOOGLE</q-btn
        >
      </div>
      <span>
        <i class="fa-solid fa-circle"></i> Concordo com os
        <a href="">Termos e Condições</a></span
      >
      <q-btn class="btn" @click="register" unelevated label="CADASTRAR!!" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
});
</script>
<style lang="scss" scoped>
* {
  color: $color1;
}
.login {
  padding: 10px 100px;
  width: 560px;
  height: 648px;
  border: 2px solid $color1;
  border-radius: 10px;
  background-color: #fff;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
}
.top {
  p {
    margin-top: -50px;
  }
}
.backfield {
  font-size: 20px;
}
.fields {
  margin-bottom: 10px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid $color1;
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
}

.btn {
  color: $color1;
  height: 62px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid $color1;
  background-color: $color3;
  margin-bottom: 50px;
}
span {
  i {
    font-size: 10px;
    color: $color4;
    border-radius: 100%;
    border: 3px solid $color1;
  }
  a {
    color: $color4;
  }
}
.google-btn {
  i {
    border: none;
    color: $color1;
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>
