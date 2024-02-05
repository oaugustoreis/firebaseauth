
<template>
  <Header :displayName="displayName"/>
  <RouterView />
</template>
<script setup>
import Header
 from './views/Header.vue'
 import {
  query,
  collection,
  getFirestore,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
let db, auth
db = getFirestore();
auth=getAuth()
const q = query(collection(db, "users"), orderBy("name"));
onSnapshot(q, (snaps) => {
  snaps.forEach((doc) => {
    // Create an HTML entry for each document and add it to the chat
    console.log(doc.data().email);
  });
});
props: {
  displayName:"Augusto"
}
 </script>
<style scoped>
</style>