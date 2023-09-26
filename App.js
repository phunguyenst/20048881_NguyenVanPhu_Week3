import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, h1, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
export default function App() {
    return ( 
        <View style = { styles.container } >
            <LinearGradient
                colors={['#FFFFFF','#66CCFF', '#66CCFF']}
                start={[0.1, 0.1]}
                style = {styles.linearGradient}

            >
                <StatusBar style = "auto" />

            </LinearGradient>
            <view style={styles.view1}>
                <Image
                    source = {require("./assets/Rectangle 25.png")}
                    style = {styles.imageCircle}
                >
                    
                </Image>
            </view >
                
            <view style={styles.view2}>
                <text style={styles.textHeader}>GROW YOUR BUSINESS</text>
            </view>
            <view>
            <Text style={styles.text} >We will help you to grow your business using online server </Text> 
            </view>
            <view>

            </view>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1:{
        flex:1
    },
    view2:{
        flex:1
    },
    view3:{
        flex:1
    },
    imageCircle:{
        height: "25px",
        width:'25px',
        alignItems:'center'
    },
    linearGradient:{
        width:'100%',
        height:'100%',
        opacity:0.95,
        justifyContent: "center",
        alignItems:'center'
    },
    textHeader:{
        color: 'black',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    text:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    }
});