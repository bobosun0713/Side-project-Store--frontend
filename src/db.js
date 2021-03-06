import firebase from 'firebase'

// firebase設定值
const firebaseConfig = {
  apiKey: 'AIzaSyBMGOT6H_wIOZhYXqUsyzvpMNSgZhoXcbQ',
  authDomain: 'store-1855a.firebaseapp.com',
  projectId: 'store-1855a',
  storageBucket: 'store-1855a.appspot.com',
  messagingSenderId: '237574852154',
  appId: '1:237574852154:web:0459502fff77d859022f03',
  measurementId: 'G-B81Z6SEQ6F',
}
firebase.initializeApp(firebaseConfig)

const User = firebase.auth()
const db = firebase.firestore()
const collectionProduct = db.collection('product')
const collectionCart = db.collection('cart')

export { collectionProduct, collectionCart, User }
