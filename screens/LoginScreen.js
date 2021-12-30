import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
 
import { Image, Alert, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// import { signIn } from '../API/firebaseMethods';

import { AuthContext } from "../navigation/AuthProvider";


const LoginScreen = ({ navigation }) => {

    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
          Alert.alert('Email field is required.');
        }
    
        else if (!password) {
          Alert.alert('Password field is required.');
        }
    
        else{
            login(email, password);
            setEmail('');
            setPassword('');
            
        }
      };

    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/login_images/login.png')}

                style={styles.illustration}
            />

            <Text style={styles.loginText}>Login</Text>

            <FormInput
                labelValue={email}
                onChangeText={(email) => setEmail(email)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(password) => setPassword(password)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("resetPasswordScreen")}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <FormButton
                buttonTitle="Login"
                onPress={handlePress}
            />


            <TouchableOpacity
                style={styles.signButton}
                onPress={() => navigation.navigate("RegistrationScreen")}>

                <Text style={styles.navButtonText}>
                    Don't have an account? Sign up
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },
    logo: {
        height: 60,
        width: 240,
        resizeMode: 'cover'
    },
    illustration: {
        height: 270,
        width: 270,
        marginTop: 20,
        resizeMode: 'cover',
    },
    loginText: {
        fontSize: 28,
        marginBottom: 24,
        color: '#000',
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {

        alignSelf: "flex-end"
    },
    signButton: {
        marginVertical: 38,

    },
    navButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#005F40'
    },
})