import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { View, Alert, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { registration } from '../API/firebaseMethods';


const RegistrationScreen = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emptyState = () => {
        setEmail('');
        setFullName('');
        setAge('');
        setPassword('');
        setConfirmPassword('');
    };

    const handlePress = () => {
        if (!email) {
            Alert.alert('Email is required',"Please enter Your Email");
            
        } 
        else if (!fullName) {
            Alert.alert('Full name field is required.');
        } 
        else if (!age) {
            Alert.alert('Age field is required.');
        } 
        else if (!password) {
            setPassword('');
            Alert.alert('Password field is required.');
        } 
        else if (!confirmPassword) {
            setConfirmPassword('');
            Alert.alert('Confirm password field is required.');
        } 
        else if (password !== confirmPassword) {
            Alert.alert('Password does not match!');
        } 
        else {
            registration(
                email,
                password,
                fullName,
                age,
            );
            navigation.navigate('HomeScreen');
            emptyState();
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/login_images/register.png')}

                style={styles.illustration}
            />

            <Text style={styles.loginText}>Registration</Text>

            <FormInput
                labelValue={email}
                onChangeText={(email) => setEmail(email)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus = {true}
            />
            <FormInput
                labelValue={fullName}
                onChangeText={(name) => setFullName(name)}
                placeholderText="Full Name"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={age}
                onChangeText={(age) => setAge(age)}
                placeholderText="Age"
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

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(password2) => setConfirmPassword(password2)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Login"
                onPress={handlePress}
            />



            <TouchableOpacity
                style={styles.signButton}
                onPress={() => navigation.navigate('Login')}>

                <Text style={styles.navButtonText}>
                    Already have an account? Sign in
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 40,
        backgroundColor: "#fff"
    },
    logo: {
        height: 60,
        width: 240,
        resizeMode: 'cover'
    },
    illustration: {
        height: 168,
        width: 176,
        marginTop: 0,
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