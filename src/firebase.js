import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBgKSALfdQuFR5l_wReRj_9IzSo7ymdOLI",
  authDomain: "quoestionnaire.firebaseapp.com",
  databaseURL: "https://quoestionnaire.firebaseio.com",
  projectId: "quoestionnaire",
  storageBucket: "quoestionnaire.appspot.com",
  messagingSenderId: "999389640290"
};

firebase.initializeApp(config);

export default firebase;