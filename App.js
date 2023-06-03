import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "./components/Register";
import Login from './components/Login';
import { TabBar } from "./components/TabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  // TODO: if user is authenticated show tabs if not show login page
  // TODO: change components in routes to the correct ones

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
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
