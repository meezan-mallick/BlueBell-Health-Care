import React from 'react'
import {Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen1 from '../screens/HomeScreen';

function HomeScreen() {
    return (
      <HomeScreen1/>
    );
  }
  
  function ActivityScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Activity!</Text>
      </View>
    );
  }
  
  function EventsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
      </View>
    );
  }
  
  function BlogScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Blog!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        // <Stack.Navigator>
        //     <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen1} />
        // </Stack.Navigator>

        <Tab.Navigator 
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home': 'ios-home-outline';
            } 
            else if (route.name === 'Activity') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            else if (route.name === 'Events') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            }
            else if (route.name === 'Blog') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
      </Tab.Navigator>
    );
}

export default AppStack