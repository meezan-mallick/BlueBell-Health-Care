import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import {Alert} from "react-native";

export async function registration(email, password, fullName, age) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        fullName: fullName,
        age: age,
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
      navigation.navigate('HomeScreen');
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
   
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}