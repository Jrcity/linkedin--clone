import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCjwFslBXv7mK9X4gGF-KZ2Rwh3ojnKRzw',
  authDomain: 'linkedin--clone.firebaseapp.com',
  projectId: 'linkedin--clone',
  storageBucket: 'linkedin--clone.appspot.com',
  messagingSenderId: '977466312836',
  appId: '1:977466312836:web:e15988d6f140a812411ad1',
  measurementId: 'G-KBXVF8DRPE',
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
