import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {

    function handleLogin() {
    }
    function handleSignUp() {
    }
    
  return (
    <View style={styles.container}>
      <LinearGradient
       // colors={["#FFFFFF", "#66CCFF", "#66CCFF"]}
       colors={['#00ccF9', '#00F9CC']} 
        //start={[0.1, 0.1]}
        style={styles.container}
      >
        <StatusBar style="auto" />
     
      <View style={styles.view1}>
        <Image
          source={require("./assets/Ellipse 8.jpg")}
          style={styles.imageCircle}
        ></Image>
      </View>

      <View style={styles.view2}>
        <Text style={styles.textHeader}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>We will help you to grow your business using online server</Text>
      </View>
     
      <View style={styles.view4 }>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
      </View>
       
     
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 5,
    alignItems:"center",
    justifyContent:"flex-end",
    marginBottom:20
    
  },
  view2: {
    flex: 1,
    alignItems:"center",
    
 
  },
  view3: {
    flex: 2,
    alignItems:"center",
 
  },
  view4: {
    flex: 2,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    
  },
  view5: {
    flex: 1,
  },
  imageCircle: {
    height: 140,
    width: 140,
    alignItems: "center",
    
  },
  textHeader: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button:{
    width:130,
    height:40,
    backgroundColor: "yellow",
    borderRadius:5,
    marginBottom:10,
   
  },
  buttonText:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:5
  }


});
