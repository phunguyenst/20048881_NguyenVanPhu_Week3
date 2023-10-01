import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Entypo ,FontAwesome} from "@expo/vector-icons";
import React from "react";

// const LoginScreen = () => {
//   return (
//     <View>
//       <Text>LoginScreen</Text>
//     </View>
//   )
// }

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.text_header}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
    
        right={
          <TextInput.Icon
            color="black"
            icon="eye"
            size="36px"
            style={{ marginTop: "10px" }}
          />
        }
      />
      
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text_button}>Login</Text>
      </TouchableOpacity>

  
     
      <View style={styles.textPrivate}>
        <Text style={styles.p_text}>
          When you agree to terms and conditions
        </Text>
        <Text style={styles.forget_text}>For got your Password?</Text>
        <Text style={styles.p_text}>Or login with</Text>
      </View>
      <View style = {styles.view_all_button}>
      <TouchableOpacity style={styles.button_login_facebook}>
            <Entypo name="facebook" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_login_zing}>
            <Text style={{fontSize:45, fontWeight:"bold", color:"#fff",}}>Z</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_login_google}>
        <FontAwesome name="google" size={40} color="blue" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"#D4EAD8"
  },
  view_all_button:{
    flex:1,
    flexDirection:"row",

  },
  textPrivate:{
    flex:1,
   
    alignItems:"center",
    textAlign:"center",
    margin:20,
    padding:20,
  },
  text_header:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:50,
  },
  button:{
    
    width:350,
    height:50,
    backgroundColor:"#ff8365",
    borderRadius:10,
    marginTop:30,
 
  },
  text_button:{
    fontSize:20,
    fontWeight:"bold",
    color:"#fff",
    textAlign:"center"
  
  },
  input: {
    width: 350,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 20,
    paddingLeft: 10,
  },

  p_text:{
     fontSize:14,
      margin:10,
  },

  forget_text:{
    color:"#5D25FA",
    fontSize:14,
     margin:10,

  },
  button_login_zing:{
    width:115,
    height:45,
    backgroundColor:"#4696e7",
    alignItems:"center",
  
  },
  button_login_facebook:{
    width:115,
    height:45,
    backgroundColor:"#29f0ff",
    alignItems:"center",
  },
  button_login_google:{
    width:115,
    height:45,
    backgroundColor:"#fff",
    alignItems:"center",
  }

});
