import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmnFNmMmHDYym64SanzxsmzQ0iuyyipTI",
  authDomain: "fir-auth-fed98.firebaseapp.com",
  projectId: "fir-auth-fed98",
  storageBucket: "fir-auth-fed98.appspot.com",
  messagingSenderId: "327697060475",
  appId: "1:327697060475:web:f5c52a3b7b508be9da48de",
  measurementId: "G-ND52L1T636"
};

// Initialize Firebase
// const 

const app = createApp(App)
initializeApp(firebaseConfig);
app.use(router)

app.mount('#app')
