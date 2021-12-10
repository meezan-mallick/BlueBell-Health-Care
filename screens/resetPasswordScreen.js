import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const resetPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/login_images/password.png')}

                style={styles.illustration}
            />

            

            <Text style={styles.loginText}>Reset Password</Text>

            <Text style={styles.resetText}>Enter the mail associated with your account and we’ll send an email with instructions to reset you password.</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormButton
                buttonTitle="Send Email"
                onPress={() => login(email, password)}
            />

            <TouchableOpacity
                style={styles.signButton}
                onPress={() => navigation.navigate('RegistrationScreen')}>

                <Text style={styles.navButtonText}>
                    Don't have an account? Sign up
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default resetPasswordScreen;

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
        marginBottom:15
    },
    loginText: {
        fontSize: 24,
        marginBottom: 10,
        color: '#000',
        fontWeight: "bold",
        alignSelf:"flex-start"
    },
    resetText: {
        fontSize: 14,
        marginBottom: 24,
        color: '#051d5f',
        alignSelf:"flex-start"
    },
    navButton: {
        marginTop: 15,
    },
   
    signButton: {
        marginVertical: 35,
        
    },
    navButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#005F40'
    },
})