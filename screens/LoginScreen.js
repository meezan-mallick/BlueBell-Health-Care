import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


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
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("resetPasswordScreen")}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <FormButton
                buttonTitle="Login"
                onPress={() => login(email, password)}
            />



            {/* {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null} */}

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
        alignSelf:"flex-start"
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