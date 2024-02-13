import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    query,
    collection,
    getFirestore,
    orderBy,
    onSnapshot,
} from "firebase/firestore";

var userId;
let auth, userName;
auth = getAuth();


export function callUser(userId) {
    console.log(userId);
    let db;
    db = getFirestore();
    const q = query(collection(db, "users"), orderBy("name"));
    onSnapshot(q, (snaps) => {
        snaps.forEach((doc) => {
            if (userId === doc.data().userId) {
                userName = doc.data().name;
                console.log(userName)
            }
        });
    });
}
