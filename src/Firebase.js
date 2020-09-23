import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp (
    {
        apiKey: "AIzaSyCJRF4YJZp75TIjMoIqDwW9m645T9vp5dw",
        authDomain: "instagram-clone-react-2140a.firebaseapp.com",
        databaseURL: "https://instagram-clone-react-2140a.firebaseio.com",
        projectId: "instagram-clone-react-2140a",
        storageBucket: "instagram-clone-react-2140a.appspot.com",
        messagingSenderId: "654053986749",
        appId: "1:654053986749:web:034c2092921c2d4c94c2d4",
        measurementId: "G-JJM9B201YH"
    }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };