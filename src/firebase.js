import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// replace the values with your firebase config
var firebaseConfig = {
  apiKey: "AIzaSyBe1CKrtm7987g9fORHTiY4GLy57cjYw5s",
  authDomain: "vue-project-60191.firebaseapp.com",
  projectId: "vue-project-60191",
  storageBucket: "vue-project-60191.appspot.com",
  messagingSenderId: "352757218579",
  appId: "1:352757218579:web:1382fa75e5412ac5366ee6"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection ref
const usersCollection = db.collection('users')
const gamesCollection = db.collection('games')

export {
    db,
    auth,
    storage,
    usersCollection,
    gamesCollection
}
