import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const BloodPressureScreen = () => {

    return (
        <ScrollView>
            <View style={styles.toplist}>
                <View>
                    <Text style={[{ fontSize: 20 }]}>Last Reading</Text>
                    <Text>Today 12:08  PM</Text>

                </View>
                <View style={[{ alignItems: "center" }]}>
                    <Text style={[{ fontSize: 26, fontWeight: "bold", color: "#407BFF" }]}>139/80</Text>
                    <Text >SYS | DIA</Text>
                </View>
            </View>
            <TouchableOpacity style={[{ alignSelf: "center", backgroundColor: "#407BFF", padding: 10 }]}>
                <Text style={{ color: "white" }}>Add New Data</Text>

            </TouchableOpacity>

            <View style={[{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }]}>
                <View style={styles.color_indicators}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10 }}>Low</Text>
                        <View style={[{ backgroundColor: "#797676", height: 25, width: 25, borderRadius: 30 }]}></View>
                    </View>
                </View>
                <View style={styles.color_indicators}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10 }}>Normal</Text>
                        <View style={[{ backgroundColor: "green", height: 25, width: 25, borderRadius: 30 }]}></View>
                    </View>
                </View>
                <View style={styles.color_indicators}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10 }}>High</Text>
                        <View style={[{ backgroundColor: "#FF3333", height: 25, width: 25, borderRadius: 30 }]}></View>
                    </View>
                </View>

            </View>

            <View style={styles.bottomlist}>
                <View style={[{ alignContent: "space-between",alignItems:"center", flexDirection:"row",flex:3 }]}>
                    <View style={[{marginLeft:10, backgroundColor: "green", height: 25, width: 25, borderRadius: 30 }]}></View>
                    <View style={{marginLeft:40}}>
                        <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>30/11/2021</Text>
                        <Text style={[{ fontSize: 12 }]}>Yesterday 12:08  PM</Text>
                    </View>
                </View>
                <View style={[{ alignItems: "center", flex:1 }]}>
                    <Text style={[{ fontSize: 20, fontWeight: "bold", color: "#407BFF" }]}>129/60</Text>
                    <Text >SYS | DIA</Text>
                </View>
            </View>

            <View style={styles.bottomlist}>
                <View style={[{ alignContent: "space-between",alignItems:"center", flexDirection:"row",flex:3 }]}>
                    <View style={[{marginLeft:10, backgroundColor: "#FF3333", height: 25, width: 25, borderRadius: 30 }]}></View>
                    <View style={{marginLeft:40}}>
                        <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>29/11/2021</Text>
                        <Text style={[{ fontSize: 12 }]}>Later 12:08  PM</Text>
                    </View>
                </View>
                <View style={[{ alignItems: "center", flex:1 }]}>
                    <Text style={[{ fontSize: 20, fontWeight: "bold", color: "#407BFF" }]}>189/90</Text>
                    <Text >SYS | DIA</Text>
                </View>
            </View>

         


        </ScrollView>
    )
}
export default BloodPressureScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },

    toplist: {
        marginTop: 10,
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        padding: 15,

    },
    bottomlist: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    color_indicators: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        paddingHorizontal: 15,

    }

})