import React, { createContext, useState } from "react";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { Alert } from "react-native";
import "firebase/compat/auth"
import apiKeys from '../config/keys';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase
                            .auth()
                            .signInWithEmailAndPassword(email, password);
                    }
                    catch (err) {
                        Alert.alert("There is something wrong!", err.message);

                    }
                },
                register: async (email, password, fullName, age) => {
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(email, password);
                        const currentUser = firebase.auth().currentUser;
                    
                        const db = firebase.firestore();
                        db.collection("users")
                          .doc(currentUser.uid)
                          .set({
                            email: currentUser.email,
                            fullName: fullName,
                            age: age,
                          });
                      } catch (err) {
                        Alert.alert("There is something wrong!!!!", err.message);
                      }
                },
                logout: async () => {
                    try {
                        await firebase.auth().signOut();
                      } catch (err) {
                        Alert.alert('There is something wrong!', err.message);
                      }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
