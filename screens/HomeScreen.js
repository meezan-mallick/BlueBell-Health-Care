import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { loggingOut } from '../API/firebaseMethods';


export default function HomeScreen({ navigation }) {

  let currentUserUID = firebase.auth().currentUser.uid;
  const [fullName, setfullName] = useState('');

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection('users')
        .doc(currentUserUID)
        .get();

      if (!doc.exists) {
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setfullName(dataObj.fullName)
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.navigate('Login');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi {fullName}</Text>
      <Text style={styles.titleText}>Home  ne Screen</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
});