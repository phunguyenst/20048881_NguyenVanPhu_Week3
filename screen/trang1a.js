import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FFFFFF", "#66CCFF"]}
      start={[0.1, 0.1]}
      style={styles.container}
    >
      <View
      style={[
        styles.container,
       
      ]}
    >
      <Image
        source={require("../assets/Ellipse 8.jpg")}
        style={styles.imageCircle}
      ></Image>
      <View style={styles.view_header}>
          <Text style={styles.text_header}>GROW </Text>
          <Text style={styles.text_header}>YOUR BUSINESS</Text>
        </View>
      <View style = {styles.view_text}>
      <Text style={styles.text}>
        We will help you to grow your business using online server
      </Text>
      </View>
     
      <View style={styles.view_button}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text_medium}>
        HOW WE WORK?
      </Text>
    </View>

    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  view_header:{
    alignItems: "center",
    flex:2, 
    marginTop:40,

  },
  view_text:{
    flex:1,
    alignItems: "center",
    marginBottom:40
  },
  view_button:{
    flex:3,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  
  
  
  imageCircle:{
    height: 140,
    width: 140,
    marginTop: 50,
  },
  text_header:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text:{
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  text_medium:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:100,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin:20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
  },

});
