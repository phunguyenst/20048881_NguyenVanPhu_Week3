import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook, faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
// const LoginScreen = () => {
//   return (
//     <View>
//       <Text>LoginScreen</Text>
//     </View>
//   )
// }

export default function LoginScreen() {
  return (

    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.text_header}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button>
        style={styles.button}
        title="Login"
      </Button>
      <View style={styles.textPrivate}>
        <Text style={styles.p_text}>
          When you agree to terms and conditions
        </Text>
        <Text style={styles.forget}>For got your Password?</Text>
        <Text style={styles.p_text}>Or login with</Text>
      </View>
      {/* <View style = {styles.all_button}>
      <Button
        style={styles.button}
        title="Facebook"
        leftIcon={<FontAwesomeIcon icon={faFacebook} />}
      />
      <Button
        style={styles.button}
        title="Apple"
        leftIcon={<FontAwesomeIcon icon={faApple} />}
      />
      <Button
        style={styles.button}
        title="Google"
        leftIcon={<FontAwesomeIcon icon={faGoogle} />}
      />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#31AA52"
  },
});
