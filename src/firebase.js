import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp({
  apiKey: "AIzaSyDEq3nD7-ryk8drazOcdtMf291hQGYLHv0",
  authDomain: "zeraf-d63c5.firebaseapp.com",
  databaseURL: "https://zeraf-d63c5-default-rtdb.firebaseio.com",
  projectId: "zeraf-d63c5",
  storageBucket: "zeraf-d63c5.appspot.com",
  messagingSenderId: "770254289988",
  appId: "1:770254289988:web:73cb28426883e4f8309011"
})

const auth = firebase.auth()

export function authMtd() {
  const user = ref(null)
  const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
  onUnmounted(unsubscribe)
  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)
  }
  const isLoggedin = computed(() => user.value !== null)
  const signOut = () => auth.signOut()
  return { user, isLoggedin, signIn, signOut }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)

export function chatMtd() {
  const messages = ref([])
  const unsubscribe = messagesQuery.onSnapshot(snapshot => {
    messages.value = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .reverse()
  })
  onUnmounted(unsubscribe)

  const { user, isLoggedin } = authMtd()
  const sendMessage = text => {
    if (!isLoggedin.value) return
    const { photoURL, uid, displayName } = user.value
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
//text: filter.clean(text),
  return { messages, sendMessage }
}

export function deleteMsg(msg){
  messagesCollection.doc(msg).delete().then(() => {
    console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  
}