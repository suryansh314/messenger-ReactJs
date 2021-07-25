import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "YOUR API KEY HERE",
  authDomain: "whatsapp-rc.firebaseapp.com",
  databaseURL: "https://whatsapp-rc.firebaseio.com",
  projectId: "whatsapp-rc",
  storageBucket: "whatsapp-rc.appspot.com",
  messagingSenderId: "1036024210898",
  appId: "1:1036024210898:web:8257f9f74351ff259d940b",
  measurementId: "G-9YF91R46NP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
