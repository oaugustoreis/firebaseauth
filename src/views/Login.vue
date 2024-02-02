<template>
  <div class="container-1">
    <div class="login center">
      <div class="center">
        <div class="center">
          <h1>Entre na sua conta</h1>
          <p>E acesse seus pedidos favoritos</p>
        </div>
        <div class="backfield">
          <span>Email:</span>
          <input
            class="fields"
            type="text"
            v-model="email"
            placeholder="Email..."
          />
          <span>Senha:</span>
          <input
            class="fields"
            type="password"
            v-model="password"
            placeholder="Senha..."
          />
        </div>
        <button class="google-btn">
          <i class="fa-brands fa-google"></i>CONECTE COM GOOGLE
        </button>
        <button class="btn" @click="register">Cadastrar</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from 'vue'


// 
// const signGoogle = () => {};

const auth = getAuth();
export default defineComponent({
  
  name: "Registration",
  setup(){

    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const register = () => {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          router.push('/home');
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    return {
      email,
      password,
      register
    };
  },
});
</script>




<style lang="scss" scoped>
* {
  color: var(--color1);
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login {
  padding: 10px 100px;
  width: 560px;
  height: 648px;
  border: 2px solid var(--color1);
  border-radius: 10px;
  background-color: #fff;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
}
.backfield {
  font-size: 20px;
  margin: 10px 0;
}
.fields {
  margin-bottom: 10px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid var(--color1);
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
}

.btn {
  text-transform: uppercase;
  color: var(--color1);
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid var(--color1);
  background-color: var(--color3);
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: #f3c052;
  }
}
span {
  margin: 10px 0;
  i {
    font-size: 10px;
    color: var(--color4);
    border-radius: 100%;
    border: 3px solid var(--color1);
  }
  a {
    color: var(--color4);
  }
}
.google-btn {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 30px ;
  min-height: 3rem;
  transition: 0.2s;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  i {
    border: none;
    color: var(--color1);
    margin-right: 10px;
    font-size: 18px;
  }
  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    background-color: rgb(242, 243, 243);
    color: rgba(0, 0, 0, 0.65);
  }
}

</style>
