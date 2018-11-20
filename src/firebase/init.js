  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB88S4BAK0zxwXSUZ7Ug35uvUsREmH20qU",
    authDomain: "vue-smoothies-e1c64.firebaseapp.com",
    databaseURL: "https://vue-smoothies-e1c64.firebaseio.com",
    projectId: "vue-smoothies-e1c64",
    storageBucket: "vue-smoothies-e1c64.appspot.com",
    messagingSenderId: "850817397575"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  //xport firestore database
  export default firebaseApp.firestore()