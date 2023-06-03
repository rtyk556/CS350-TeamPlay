import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "./components/Register";
import Login from './components/Login';
import { TabBar } from "./components/TabBar";
import Home from "./components/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // TODO: if user is authenticated show tabs if not show login page
  // TODO: change components in routes to the correct ones

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Ranking" component={Register} />
        <Tab.Screen name="User" component={Register} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
