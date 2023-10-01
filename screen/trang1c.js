import { StyleSheet, View, Text, TextInput ,TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function App() {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FFFFFF", "#66CCFF"]}
      start={[0.1, 0.1]}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.view_header}>
          <Text style={styles.text_header}>CODE</Text>
        </View>
        <View style={styles.view_text}>
          <Text style={styles.text_medium}>VERIFICATION</Text>
          <Text style={styles.text}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>
        <View style={styles.view_input}>
          <View style={styles.view_otpCode}>
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
            <TextInput
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            />
          
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  view_header: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  view_text: {
    flex: 1,
    width: "54%",
    justifyContent: "space-around",
    height: 150,
    alignItems: "center",
  },
  view_input: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
  },
  view_otpCode: {
    flexDirection: "row",
  },
  text_header: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#000000",
  },
  text_medium: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  button:{
    width:"100%",
    height:50,
    backgroundColor:"#E3C000",
    justifyContent:"center",
    marginTop:30,

  },
  buttonText:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:"#000000"
  }
});
