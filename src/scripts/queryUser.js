import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  addDoc, collection } from "firebase/firestore";
import { useRouter } from "vue-router";

let auth;
auth = getAuth();



export function signInGoogleF() {
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        addDoc(collection(db, "users"), {
            timestamp: Date.now(),
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            userId: auth.currentUser.uid,
            googleLogin: true
        });
        router.push("/home");
    });
};
