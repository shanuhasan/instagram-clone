import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUlseGmQh0WD7Tnra9pgr6Rchj_yFi_U0",
    authDomain: "instagram-clone-1ad4b.firebaseapp.com",
    databaseURL: "https://instagram-clone-1ad4b.firebaseio.com",
    projectId: "instagram-clone-1ad4b",
    storageBucket: "instagram-clone-1ad4b.appspot.com",
    messagingSenderId: "253420968373",
    appId: "1:253420968373:web:b25e2179761dbd384221fc",
    measurementId: "G-15NBPNRJP8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };