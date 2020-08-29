import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCctdnr6vVwE_qsD5JWEInZIueg-09Kcek",
    authDomain: "facebook-clone-24370.firebaseapp.com",
    databaseURL: "https://facebook-clone-24370.firebaseio.com",
    projectId: "facebook-clone-24370",
    storageBucket: "facebook-clone-24370.appspot.com",
    messagingSenderId: "451852243436",
    appId: "1:451852243436:web:89e69ac433c114d97030c9",
    measurementId: "G-TE0PP2YCBD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const storage=firebase.storage()

  export {db,auth,storage}