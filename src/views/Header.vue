<script setup>
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { onMounted,ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const isLogged=ref(false)
let auth
onMounted(()=>{
    auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user){
            isLogged.value=true
        }else{
            isLogged.value=false
        }
    })
})

const signOutbt = ()=>{
    signOut(auth).then(()=>{
        router.push("/");
    })
}
</script>



<template>
  <nav>
    <div class="header center">
      <div class="header-inner">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/feed">Feed</router-link>
        <router-link to="/registration">Registration</router-link>
        <button @click="signOutbt" v-if="isLogged" role="button">logout</button>
        <section id="guestbook"></section>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.header {
  background-color: white;
  width: 100vw;
  border-bottom: 2px solid var(--color1);
  height: 60px;
}
.header-inner{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
}
</style>