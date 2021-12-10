import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const RegistrationScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


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
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Full Name"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Age"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Password"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

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
        width:176,
        marginTop: 0,
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