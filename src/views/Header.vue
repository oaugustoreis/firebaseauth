<template>
  <nav>
    <div class="header center">
      <div class="header-inner">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/feed">Feed</router-link>
        <router-link to="/registration">Registration</router-link>
        <div class="user" v-if="isLogged">
          <i class="fa-solid fa-angle-left"></i>
          <p id="namefield">{{ googleUserName }}{{ displayUserName }}</p>
          <!-- <img  class="user-img-profile" src=""  alt="img"> -->
          <i class="fa-solid fa-circle-user"></i>

          <button @click="signOutbt" role="button">logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  query,
  collection,
  getFirestore,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const router = useRouter();
const isLogged = ref(false);
var displayUserName = ref("");
var googleUserName = "";
let auth
auth=getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    googleUserName = user.displayName;
    isLogged.value = true;
  } else {
    isLogged.value = false;
  }
});

const signOutbt = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  width: 100vw;
  border-bottom: 2px solid var(--color1);
  height: 60px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.user {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
  p {
    padding-bottom: 5px;
  }
  i {
    margin: 0 10px;
    font-size: 30px;
    color: var(--color1);
  }
  i:first-child {
    font-size: 20px;
  }
  &:hover {
    background-color: rgb(242, 243, 243);
  }
}
// .user-img-profile{
//   margin: 0 10px;
//   border-radius: 100%;
//   width: 30px;
// }
</style>