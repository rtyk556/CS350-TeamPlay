import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "./Register";
import Login from './Login';
import { TabBar } from "./TabBar";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={Register} />
        <Tab.Screen name="Matches" component={Login} />
        <Tab.Screen name="Ranking" component={Register} />
        <Tab.Screen name="User" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
