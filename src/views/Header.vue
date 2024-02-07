<template>
  <nav>
    <div class="header center">
      <div class="header-inner">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/feed">Feed</router-link>
        <router-link to="/registration">Registration</router-link>
        <div class="dropdown" v-if="isLogged">
          <div class="center user">
            <i class="fa-solid fa-angle-left"></i>
            <p id="namefield">{{ userName }}</p>
            <!-- <img  class="user-img-profile" src=""  alt="img"> -->
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div class="dropdown-content">
            <div class="center">
              <router-link to="/" class="dropdown-opt center">Home</router-link>
              <router-link to="/login" class="dropdown-opt center"
                >Login</router-link
              >
              <router-link to="/feed" class="dropdown-opt center"
                >Feed</router-link
              >
              <router-link to="/registration" class="dropdown-opt center"
                >Registration</router-link
              >
            </div>
            <button class="button-74 logout" @click="signOutbt" role="button">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, watch } from "vue";
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
let auth, userId;
auth = getAuth();

var userName = localStorage.getItem("nome");

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLogged.value = true;
    userId = user.uid;
    if(user.displayName){
      localStorage.setItem("nome",user.displayName );
    }
    console.log(userId);
    let db;
    db = getFirestore();
    const q = query(collection(db, "users"), orderBy("name"));
    onSnapshot(q, (snaps) => {
      snaps.forEach((doc) => {
        if (userId === doc.data().userId) {
          localStorage.setItem("nome", doc.data().name);

          // location.reload();
        }
      });
    });
  } else {
    isLogged.value = false;
  }
});
console.log(userName);
const signOutbt = () => {
  signOut(auth).then(() => {
    router.push("/");
    localStorage.removeItem("nome");
    location.reload();
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
}
.dropdown {
  cursor: pointer;
  transition: 0.2s;
  border-radius: 10px 10px 0 0;
  position: relative;
  display: inline-block;

  &:hover {
    background-color: rgb(242, 243, 243);
  }
}
.dropdown-content {
  display: none;
  padding: 10px;
  position: absolute;
  background-color: rgb(242, 243, 243);
  width: calc(100% - 20px);
  z-index: 1;
  border-radius: 0 0 10px 10px;

  .logout {
    line-height: 0;
    height: 35px;
  }
}
.dropdown-opt {
  width: 80%;
  transition: 0.2s;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
}
.dropdown-opt:last-child {
  margin-bottom: 10px;
}
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}
// .user-img-profile{
//   margin: 0 10px;
//   border-radius: 100%;
//   width: 30px;
// }
</style>