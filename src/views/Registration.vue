<template>
  <div class="mg-auto">
    <div class="login center">
      <div class="center">
        <div class="center">
          <h1>Crie sua conta</h1>
          <p>E faça seu pedido muito mais rápido</p>
        </div>
        <div class="backfield">
          <span>Nome:</span>
          <input
            class="fields"
            type="text"
            v-model="nome"
            placeholder="Digite seu nome..."
          />
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
        <button class="google-btn" @click="signInGoogle">
          <i class="fa-brands fa-google"></i>CONECTE COM GOOGLE
        </button>
        <div class="checkbox-wrapper-2 center">
          <input type="checkbox" class="sc-gJwTLC ikxBAC" /><span>
            Concordo com os <a href="">Termos e Condições</a></span
          >
        </div>
        <button class="btn" @click="register">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useRouter } from "vue-router";
import { ref } from "vue";

const auth = getAuth();
const router = useRouter();
const email = ref("");
const nome = ref("");
const password = ref("");

let db;
db = getFirestore();

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      addDoc(collection(db, "users"), {
        email: email.value,
        timestamp: Date.now(),
        name: nome.value,
        userId: auth.currentUser.uid,
        googleLogin:false
      });
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then((result) => {
    addDoc(collection(db, "users"), {
        email: auth.currentUser.value,
        timestamp: Date.now(),
        name: auth.currentUser.value,
        userId: auth.currentUser.uid,
        googleLogin:true
      });
    router.push("/feed");
  });
};
</script>




<style lang="scss" scoped>
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
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
}
.google-btn {
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
.checkbox-wrapper-2 {
  flex-direction: row;
}
.checkbox-wrapper-2 .ikxBAC {
  appearance: none;
  background-color: #dfe1e4;
  border-radius: 72px;
  border-style: none;
  flex-shrink: 0;
  height: 20px;
  margin: 0 10px;
  position: relative;
  width: 30px;
}

.checkbox-wrapper-2 .ikxBAC::before {
  bottom: -6px;
  content: "";
  left: -6px;
  position: absolute;
  right: -6px;
  top: -6px;
}

.checkbox-wrapper-2 .ikxBAC,
.checkbox-wrapper-2 .ikxBAC::after {
  transition: all 100ms ease-out;
}

.checkbox-wrapper-2 .ikxBAC::after {
  background-color: #fff;
  border-radius: 50%;
  content: "";
  height: 14px;
  left: 3px;
  position: absolute;
  top: 3px;
  width: 14px;
}

.checkbox-wrapper-2 input[type="checkbox"] {
  cursor: default;
}

.checkbox-wrapper-2 .ikxBAC:hover {
  background-color: #c9cbcd;
  transition-duration: 0s;
}

.checkbox-wrapper-2 .ikxBAC:checked {
  background-color: #6e79d6;
}

.checkbox-wrapper-2 .ikxBAC:checked::after {
  background-color: #fff;
  left: 13px;
}

.checkbox-wrapper-2 :focus:not(.focus-visible) {
  outline: 0;
}

.checkbox-wrapper-2 .ikxBAC:checked:hover {
  background-color: #535db3;
}
</style>
