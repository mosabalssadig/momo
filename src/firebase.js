import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseconfig = firebase.initializeApp({
    apiKey: "AIzaSyA_n_7UxZOxLYa3b-Igfv5nD2qYnJIM8pw",
    authDomain: "anjzly-32e7b.firebaseapp.com",
    databaseURL: "https://anjzly-32e7b-default-rtdb.firebaseio.com",
    projectId: "anjzly-32e7b",
    storageBucket: "anjzly-32e7b.appspot.com",
    messagingSenderId: "1078058061998",
    appId: "1:1078058061998:web:0ad15b428786731dc81d3f",
    measurementId: "G-M2TW71KVHR"
})

export {firebaseconfig as firebase};