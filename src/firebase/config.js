import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA2tx0NcZqY6g_toKshllEtp-E1_t7GvOo",
    authDomain: "vue-blog-d3383.firebaseapp.com",
    projectId: "vue-blog-d3383",
    storageBucket: "vue-blog-d3383.appspot.com",
    messagingSenderId: "390170526176",
    appId: "1:390170526176:web:bcf435d386382f4173eb85"
  };

firebase.initializeApp(firebaseConfig)

let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;
export {db,timestamp};
