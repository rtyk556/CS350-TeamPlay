import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "./components/Register";
import { TabBar } from "./components/TabBar";
import { Records } from "./components/Records";
import { Match } from "./components/Match";
import { Ranking } from "./components/Ranking";

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
        <Tab.Screen name="Home" component={Match} />
        <Tab.Screen name="Matches" component={Records} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="User" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
