import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/login'
import Register from './src/screens/register'
import Home from './src/screens/home'
import Desc from './src/screens/desc'
import Tambah from './src/screens/tambah'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Desc" component={Desc} />
        <Stack.Screen name="Tambah" component={Tambah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
