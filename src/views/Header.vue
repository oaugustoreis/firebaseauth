<template>
  <nav>
    <div class="header " v-if="isLogged" >
      <div class="header-inner center">
        <div class="dropdown" >
          <div class="center user">
            <i class="fa-solid fa-angle-left"></i>
            <p id="namefield">{{ userName }}</p>
            <!-- <img  class="user-img-profile" src=""  alt="img"> -->
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div class="dropdown-content">
            <div class="center">
              <router-link to="/Home" class="dropdown-opt center"
                >Cardápio</router-link
              >
              <router-link to="/minhaconta" class="dropdown-opt center"
                >Minha Conta</router-link
              >
              <router-link to="/" class="dropdown-opt center"
                >Gorjeta</router-link
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  query,
  collection,
  getFirestore,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const userName = ref(null);
const router = useRouter();
const isLogged = ref(false);
let auth;
auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLogged.value = true;
    userName.value=user.displayName
    let db;
    db = getFirestore();
    const q = query(collection(db, "users"), orderBy("name"));
    onSnapshot(q, (snaps) => {
      snaps.forEach((doc) => {
        if (user.uid === doc.data().userId) {
          userName.value=doc.data().name
        }
      });
    });
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
.router-hover{
  padding: 5px 10px ;
  border-radius: 10px;
  &:hover {
    background-color: rgb(242, 243, 243);
  }
}
.header {
  padding: 10px;
  border-radius:10px ;
  background-color: white;
  width: 250px;
  height: 660px;
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
  color: var(--color1);
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