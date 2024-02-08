<template>
  <div class=" center full">
    <div class="login center">
      <div class="center">
        <div class="center">
          <h1>Entre na sua conta</h1>
          <p>E acesse seus pedidos favoritos</p>
          <div v-if="errorMsg" class="fade-in-image">
            <p class="center errorMsg">{{ errorMsg }}</p>
          </div>
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
        <button class="google-btn center" @click="signInGoogle">
          <i class="fa-brands fa-google"></i>CONECTE COM GOOGLE
        </button>
        <button class="button-74" @click="signIn">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

const auth = getAuth();
const router = useRouter();
const errorMsg = ref();
const email = ref("");
const password = ref("");
// const guestbook = document.getElementById('guestbook');

const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push("/home");
      setTimeout(() => {
        location.reload();
      },500);
    })
    .catch((error) => {
      if (
        error.code == "auth/invalid-password" ||
        error.code == "auth/invalid-email" ||
        error.code == "auth/invalid-credential"
      ) {
        errorMsg.value = "Email ou senha incorretos";
      }
    });
};
const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then((result) => {
    // alert("Loguei com google")
    router.push("/home");
    setTimeout(() => {
        location.reload();
      },500);
  });
};
</script>




<style lang="scss" scoped>
* {
  transition: 0.4s;
  color: var(--color1);
}
.fade-in-image {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.errorMsg {
  padding: 5px 10px;
  width: fit-content;
  font-size: 14px;
  border-radius: 10px;
  color: red;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login {
  padding: 10px 10px;
  width: 500px;
  height: 548px;
  border: 2px solid var(--color1);
  border-radius: 10px;
  background-color: #fff;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
}
.backfield {
  width: 70%;
  font-size: 20px;
  margin: 10px 0;
}
.fields {
  border-radius: 10px;
  width: 100%;
  border: 1px solid var(--color1);
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
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
  flex-direction: row;
  width: 70%;
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
  height: 30px;
  margin: 0 0 10px 0;
  font-weight: 600;
  justify-content: center;
  min-height: 3rem;
  transition: 0.2s;
  i {
    border: none;
    color: var(--color1);
    margin-right: 10px;
    font-size: 18px;
  }
  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    background-color: rgb(242, 243, 243);
  }
}
</style>
