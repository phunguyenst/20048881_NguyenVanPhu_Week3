import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import screen1 from "./screen/FirstScreen";
import screen2 from "./screen/trang1a";
import screen3 from "./screen/trang1b";
import screen4 from "./screen/trang1c"
import screen5 from "./screen/trang1d"
import screen6 from "./screen/trang1e"
import screen7 from "./screen/trang2a"
import screen8 from "./screen/trang2b"
let Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={screen1} options={{ headerShown: false }} />
        <Stack.Screen name="screen2" component={screen2} options={{ headerShown: false }} />
        <Stack.Screen name="screen3" component={screen3} options={{ headerShown: false }} />
        <Stack.Screen name="screen4" component={screen4} options={{ headerShown: false }}/>
        <Stack.Screen name="screen5" component={screen5} options={{ headerShown: false }}/>
        <Stack.Screen name="screen6" component={screen6} options={{ headerShown: false }}/>
        <Stack.Screen name="screen7" component={screen7} options={{ headerShown: false }}/>
        <Stack.Screen name="screen8" component={screen8} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}