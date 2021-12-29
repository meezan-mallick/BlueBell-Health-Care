import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, Alert } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>


      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.welcomeText1}>Welcome Back!</Text>
      <Text style={styles.welcomeText2}>{fullName}</Text>


      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.signButton}
        onPress={() => navigation.navigate("RegistrationScreen")}>

        <Text style={styles.navButtonText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#fff"
  },
  logo: {
    height: 40,
    width: 170,
    resizeMode: 'cover'
  },
  welcomeText1: {
    fontSize: 28,
    color: '#000',
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  welcomeText2: {
    fontSize: 28,
    marginBottom: 24,
    color: '#000',
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
});