import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ForgetPassword() {
  navigation = useNavigation();
  return (
    <LinearGradient
    colors={["#FFFFFF", "#FFFFFF", "#66CCFF"]}
    start={[0.1, 0.5]}
    style={styles.gradientContainer}
  >
    <View style={styles.container}>
     
    <View style={styles.header0}>
          {/* <Button
            title="chuyển trang ->"
            onPress={() => navigation.navigate("screen3")}
          >
          </Button> */}
          </View>
        <StatusBar style="auto" />
        <View style={styles.view1}>
         
          
          <Image
            source={require("../assets/lock-152879 1.jpg")}
            style={styles.imageLock}
          ></Image>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text_head}>FORGET</Text>
          <Text style={styles.text_head}>PASSWORD</Text>
          <Text style={styles.text_title}>
            Provide your account's email for which you want to reset your
            password
          </Text>
          <View style={styles.view_inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <View style = {styles.iconContainer}>
                <Image
                source={require("../assets/mail-2935365 1.jpg")}
                style={styles.iconemail}
                ></Image>
            </View>
            
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      
        </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
    gradientContainer:{
        flex:1,
    },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header0: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },

  view1: {},
  view2: {},
  view_inputBox: {
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor:"#C4C4C4",
  
    marginLeft:40,
  },
  view3: {},
  imageLock: {
    height: 112,
    width: 90,
    alignItems: "center",
  },
  text_head: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  text_title: {
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
  input: {
    width: 250,
    height: 50,
    // borderColor: "#ccc",
    // borderWidth: 1,
    // borderRadius: 5,
    // padding: 10,
    marginLeft:40
    
  },
  iconemail: {
    height: 40,
    width: 40,
  },
    iconContainer: {
        position: "absolute",
        left: 0,
        top:0,
    },
    button:{
        width: 200,
        height: 40,
        backgroundColor: "#E3C000",
        borderRadius: 5,
        marginBottom: 30,
        alignItems:"center",
    },

    buttonText:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
    },
    
});
