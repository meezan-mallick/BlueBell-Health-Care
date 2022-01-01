import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const EventsScreen = () => {

    return (
        <ScrollView>
            <View style={[{ alignItems: "center", marginTop: 30 }]}>
                <Image
                    source={require('../assets/Calendar.png')}
                />
            </View>

            <Text style={[{ fontSize: 20, fontWeight: "bold", marginHorizontal: 15, marginVertical: 20 }]}>Upcoming Events</Text>

            <TouchableOpacity style={styles.event_box} >
                <View>

                <Text style={styles.event_text_date}>02 December 2021</Text>
                <Text style={styles.event_text_title}>Dental Checkup</Text>
                <Text style={styles.event_text_small}>Dr Ashish Nagpals</Text>
                </View>
                <View>

                <Text style={styles.event_text_time}>10:00 AM</Text>
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity style={[{ alignSelf: "center", backgroundColor: "#407BFF", paddingVertical: 10, paddingHorizontal: 30, marginTop: 40, borderRadius: 5 }]}>
                <Text style={{ color: "white" }}>Add New Event</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default EventsScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        paddingTop: 50,
        backgroundColor: "#fff"
    },


    event_box: {
        backgroundColor: "#407BFF",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#fff',
        alignItems: "flex-start",
        paddingHorizontal:23,
        paddingVertical:20,
        marginRight: 8,
        marginHorizontal:15,
        flexDirection:"row",
        marginVertical:5
      },
    
      event_text_date: {
        color: "white",
        textAlign: 'center',
        fontSize: 12
      },
      event_text_title: {
        color: "white",
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold"
      },
      event_text_small: {
        color: "white",
        marginLeft: 10,
        textAlign: 'right',
        fontSize: 10,
      },
      event_text_time: {
        color: "white",
        marginLeft: 20,
        textAlign: 'right',
        fontSize: 18,
        marginLeft:90,
        marginTop:18
        
      },
    

})