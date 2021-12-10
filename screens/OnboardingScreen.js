import React from "react";
import {  View, Text, Image, TouchableOpacity, StyleSheet  } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';



const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10,marginRight:20}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding_images/onboarding-img1.png')} />,
                    title: 'As reliable as your family.',
                    subtitle: 'Privacy matters the most.. we got you covered',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding_images/onboarding-img2.png')} />,
                    title: 'A better access to health.',
                    subtitle: 'Manage and track daily health parameters at your finger tips',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding_images/onboarding-img3.png')} />,
                    title: 'Feeling better starts here.',
                    subtitle: 'Get started today, and give yourself a healthier chance.',
                }
                
  ]}
        />

    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});