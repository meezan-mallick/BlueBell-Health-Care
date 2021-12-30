import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, Text, Image, View, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { loggingOut } from '../API/firebaseMethods';

// import { AuthContext } from "../navigation/AuthProvider";

import { AuthContext } from "../navigation/AuthProvider";

export default function HomeScreen({ navigation }) {

  const {logout} = useContext(AuthContext);

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

 


  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
    />

    <View style={[{ flexDirection: "row", marginTop: 10 }]}>

      <Text style={styles.welcomeText1}>Welcome Back,
        <Text style={styles.welcomeText2}>{"\n"}{fullName}</Text>
      </Text>

      <TouchableOpacity onPress={() => logout()}>
      <Image
        
        source={require('../assets/profile_pic.png')}
        style={styles.profile_pic}
      />
      </TouchableOpacity>
    </View>


    <View style={[{ flexDirection: "row", marginTop: 20 }]}>

      <Text style={styles.upcomingtext}>Upcoming Appointments</Text>

      <TouchableOpacity style={styles.blue_btn} onPress={() => navigation.navigate("resetPasswordScreen")}>
        <Text style={styles.blue_btn_txt}>View all</Text>
      </TouchableOpacity>
    </View>

    <ScrollView  horizontal={true} style={[{ flexDirection: "row", marginTop: 20, marginBottom: 20 }]}>


      <TouchableOpacity style={styles.event_box} >
        <Text style={styles.event_text_date}>02 December 2021</Text>
        <Text style={styles.event_text_title}>Dental Checkup</Text>
        <Text style={styles.event_text_small}>Dr Ashish Nagpals</Text>
        <Text style={styles.event_text_small}>10:00 am - 11:00 am</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.event_box} >
        <Text style={styles.event_text_date}>02 December 2021</Text>
        <Text style={styles.event_text_title}>Dental Checkup</Text>
        <Text style={styles.event_text_small}>Dr Ashish Nagpals</Text>
        <Text style={styles.event_text_small}>10:00 am - 11:00 am</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.event_box} >
        <Text style={styles.event_text_date}>02 December 2021</Text>
        <Text style={styles.event_text_title}>Dental Checkup</Text>
        <Text style={styles.event_text_small}>Dr Ashish Nagpals</Text>
        <Text style={styles.event_text_small}>10:00 am - 11:00 am</Text>

      </TouchableOpacity>
    </ScrollView>

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
    padding: 15,
    paddingTop: 50,
    backgroundColor: "#fff"
  },
  logo: {
    height: 40,
    width: 170,
    resizeMode: 'cover'
  },
  profile_pic: {
    height: 55,
    width: 55,

  },
  welcomeText1: {
    fontSize: 20,
    color: '#000',
    alignSelf: "flex-start",
    flex: 1,

  },
  welcomeText2: {
    fontSize: 20,
    marginBottom: 24,
    color: '#407BFF',
    fontWeight: "bold",
    alignSelf: "flex-start"
  },

  upcomingtext: {
    fontSize: 18,
    color: '#000',
    alignSelf: "flex-start",
    flex: 1,
    fontWeight: "bold",
  },

  blue_btn: {
    backgroundColor: "#407BFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#fff',
  },

  blue_btn_txt: {
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center',
    fontSize: 12
  },
  
  event_box: {
    backgroundColor: "#407BFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#fff',
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight:8
    
  },

  event_text_date: {
    color: "white",
    textAlign: 'center',
    fontSize: 12
  },
  event_text_title: {
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight:"bold"
  },
  event_text_small: {
    color: "white",
    marginLeft:20,
    textAlign: 'right',
    fontSize: 12,
  },
 


});