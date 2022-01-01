import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const BloodSugarScreen = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[{fontSize:18,marginBottom:15}]}>No Data Found</Text>
            <TouchableOpacity style={[{ alignSelf: "center", backgroundColor: "#407BFF", padding: 10 }]}>
                <Text style={{ color: "white" }}>Add New Data</Text>

            </TouchableOpacity>
        </View>
    )
}
export default BloodSugarScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },

})