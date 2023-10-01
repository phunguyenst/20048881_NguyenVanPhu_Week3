import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/Group.jpg")}
        style={{ width: 150, height: 150 , marginTop:20}}
      ></Image>
      <View style={styles.view1}>
        <TextInput
          left={<TextInput.Icon icon="account" size={36} color="blue" />}
          placeholder="Please input username"
          style={{
            height: 46,
            borderbottomcolor: "blue",
            borderBottomWidth: 1,
            borderWidth: 1,
            marginBottom: 40,
            backgroundColor: "#fff",
          }}
          underlineColor="none"
          activeUnderlineColor="none"
        />
        <TextInput
          left={<TextInput.Icon icon="lock" size={36} color={"blue"} />}
          placeholder="Please input password"
          style={{
            backgroundColor: "white",
            height: 50,
            marginBottom: 40,
            borderbottomcolor: "blue",
            borderBottomWidth: 1,
          }}
          underlineColor="none"
          activeUnderlineColor="none"
        />
          <TouchableOpacity style={{backgroundColor: "#386FFC", height:50, justifyContent:"center", borderRadius: 10, marginTop:20}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>


      </View>
      <View style = {styles.view_switch}>
          <Text style = {styles.text_switch}>Register</Text>
          <Text style = {styles.text_switch}>Forget password?</Text>
      </View>

      <View style={styles.view_method}>
        <Text style={styles.text_method}> -------------- Other login methods --------------</Text>
      </View>
      <View style = {styles.view_button_method}>
            <View style = {styles.button_method_plus}>
              <FontAwesome5 name="user-plus" size={45} color="white" />
            </View>
            <View style = {styles.button_method_wifi}>
            <FontAwesome5 name="wifi" size={45} color="white" />
            </View>
            <View style = {styles.button_method_facebook}>
            <FontAwesome5 name="facebook-f" size={45} color="white" />
            </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  view1: {
    flex: 1,
  },
  view_switch:{
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    
    
  },
  view_method:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view_button_method:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  buttonText:{
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize: 18,
  },
  text_switch:{
    fontSize:14,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom: 20,
    alignItems:"center"
  },
  text_method:{
    fontSize:18,
    textAlign:"center",
    fontWeight:"400",
    textDecorationStyle:"solid",
  },
  button_method_facebook:{
    height:74,
    width:74,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:"#3A579C",
    margin:10,

  },
  button_method_wifi:{
    height:74,
    width:74,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:"#F4AA47",margin:10
  },
  button_method_plus:{
    height:74,
    width:74,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:"#3AB4FF",
    margin:10
  }
});
