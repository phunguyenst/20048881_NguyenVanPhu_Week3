import { StyleSheet, View, Text,TextInput,TouchableOpacity,CheckBox } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
          Register
        </Text>
      </View>

      <View style={styles.view_form}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Pasword" />
        <TextInput style={styles.input} placeholder="Name" />
      </View>


    <View style={styles.view_checkbox}>

      
        <CheckBox 
             value ={true}
             style = {styles.checkBox}
        ></CheckBox>
        <Text>Male</Text>

        <CheckBox 
            value ={false}
            style = {styles.checkBox}
        ></CheckBox>
        <Text>Female</Text>
    </View>
       
        
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Resister</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom:50 }}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#D4EAD8",
    justifyContent:"space-around"
  },
  view_form: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    height: 46,
    width: 300,
    marginBottom: 40,
    backgroundColor: "#fff",
    paddingLeft: 10,
    borderRadius:10,
    backgroundColor:"#C4C4C4"
  },
  button:{
    backgroundColor:"#E53935",
    height:46,
    width:"80%",
    marginBottom:10,
    borderRadius:10,
    
  },
    buttonText:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize: 18,
        marginTop:5,
    },
    view_checkbox:{
        flex:1,
        flexDirection:"row",
        margin:20
    },

    checkBox:{
        //  margin:20
    }

    
});
