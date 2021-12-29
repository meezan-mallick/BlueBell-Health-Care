import React from 'react';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import apiKeys from './config/keys';
import Providers from './navigation';




export default function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return <Providers/>

}