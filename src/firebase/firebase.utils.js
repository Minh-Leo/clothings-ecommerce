import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD0zAeOTNQc1UVlDYcOhffXjAmWyHQe1HY',
  authDomain: 'crwn-clothings-41e99.firebaseapp.com',
  databaseURL: 'https://crwn-clothings-41e99.firebaseio.com',
  projectId: 'crwn-clothings-41e99',
  storageBucket: 'crwn-clothings-41e99.appspot.com',
  messagingSenderId: '952716642714',
  appId: '1:952716642714:web:d71972e19f3704d0189223',
  measurementId: 'G-T6BQNXXETL'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
