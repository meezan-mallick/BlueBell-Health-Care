import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import ActivityItem from "./activity_list/ActivityItem";

const ActivityScreen = () => {

    return (
        <ScrollView>
            <View style={styles.blueBox}>
                <View style={styles.darkblueBox}>

                    <Text style={styles.blueBoxtext} >You’re 25% Done {"\n"}for today,{"\n"}Keep Goining</Text>
                </View>
            </View>

            <Text style={[{ fontSize: 20, fontWeight: "bold", marginHorizontal: 15, marginVertical: 20 }]}>Daily Activity</Text>

            <ActivityItem></ActivityItem>
            <ActivityItem></ActivityItem>
            <ActivityItem></ActivityItem>

            <TouchableOpacity style={[{ alignSelf: "center", backgroundColor: "#407BFF", paddingVertical: 10, paddingHorizontal: 30, marginTop: 10, borderRadius: 5 }]}>
                <Text style={{ color: "white" }}>Add New Data</Text>
            </TouchableOpacity>

            <Text style={[{ fontSize: 20, fontWeight: "bold", marginHorizontal: 15, marginVertical: 20 }]}>Daily Activity</Text>

            <View  style={[{flexDirection:"row",paddingHorizontal:15, justifyContent:"center"}]}>
                <Image
                    source={require('../assets/full_glass.png')}
                />
                <Image
                    source={require('../assets/full_glass.png')}
                />
                <Image
                    source={require('../assets/full_glass.png')}
                />
                <Image
                    source={require('../assets/full_glass.png')}
                />
                <Image
                    source={require('../assets/empty_glass.png')}
                />
                <Image
                    source={require('../assets/empty_glass.png')}
                />
            </View>

        </ScrollView>
    )
}
export default ActivityScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },
    blueBox: {
        marginHorizontal: 15,
        backgroundColor: "#A2BEFE",
        marginTop: 20,
        height: 162,
        borderRadius: 10,
    },
    darkblueBox: {
        backgroundColor: "#4D84FF",
        height: 162,
        borderRadius: 10,
        width: 80,
    },
    blueBoxtext: {
        width: 200,
        fontSize: 20,
        marginTop: 45,
        marginLeft: 85
    }


})