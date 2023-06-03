import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";

const tabIconMap = {
  Home: "sports-kabaddi",
  User: "person",
  Matches: "format-list-bulleted",
  Ranking: "leaderboard",
};

export function TabBar({ state, descriptors, navigation }) {
  const handleNavigation = (routeName, index) => {
    if (state.index !== index) {
      navigation.navigate({ name: routeName, merge: true });
    }
  };

  return (
    <View style={styles.container}>
      {state.routeNames.map((routeName, index) => (
        <TouchableOpacity
          onPress={() => handleNavigation(routeName, index)}
          style={styles.tabButton}
        >
          <MaterialIcons
            name={tabIconMap[routeName]}
            size={20}
            style={{
              padding: 10,
              color: state.index === index ? "#50a42f" : "#bbb",
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabButton: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
});
