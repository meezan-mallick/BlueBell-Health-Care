import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const ActivityItem = () => {

    return (
        <View style={styles.bottomlist}>
        <View style={[{ alignContent: "space-between",alignItems:"center", flexDirection:"row",flex:3 }]}>
            <View style={[{marginLeft:10, backgroundColor: "green", height: 25, width: 25, borderRadius: 30 }]}></View>
            <View style={[{marginLeft:20, flexDirection:"row", justifyContent:"space-between", alignContent:"center"}]}>
                <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>Check Your Weight</Text>
                <Text style={[{ fontSize: 12 }]}>                  12:08  PM</Text>
            </View>
        </View>
       
    </View>
    )
}
export default ActivityItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },
    bottomlist: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor:"#D5D5D5",
        marginHorizontal:15,
        marginVertical:10,
        borderRadius:10,

    },
    color_indicators: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        paddingHorizontal: 15,

    }


})