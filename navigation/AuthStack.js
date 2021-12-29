import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import resetPasswordScreen from '../screens/resetPasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {

  //validation variable for firstLaunch for onboarding state
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);


  if (isFirstLaunch === null) {
    return null;
  }
  else if (isFirstLaunch === true) {
    routeName = 'Onboarding'
  }
  else {
    routeName = 'Login'
  }
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="resetPasswordScreen" component={resetPasswordScreen} />
      <Stack.Screen options={{ headerShown: false }} name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>

  );

}

