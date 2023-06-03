import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SportPicker } from "./SportPicker";

export function Ranking() {
  const [rank, setRank] = useState([
    { name: "FC KAI", picture: "https://image.com", points: 123 },
  ]);
  const [sport, setSport] = useState();

  return (
    <View style={styles.container}>
      <SportPicker
        sport={sport}
        setSport={setSport}
        style={styles.sportPickerContainer}
      />
      <View style={styles.wrapper}>
        <View style={styles.rank}>
          <Text style={[styles.tableLabel, { flex: 1 }]}>#</Text>
          <Text style={[styles.tableLabel, { flex: 4 }]}>Team</Text>
          <Text style={[styles.tableLabel, { flex: 1 }]}>PTS</Text>
        </View>
        {rank.map((team, index) => (
          <View style={styles.rank}>
            <Text style={index <= 2 ? styles.indexTop : styles.index}>
              {index + 1}
            </Text>
            <View style={styles.team}>
              <Image source={{ url: team.picture }} />
              <Text style={styles.teamName}>{team.name}</Text>
            </View>
            <Text style={styles.points}>{team.points}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    heigh: "100%",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  sportPickerContainer: {
    width: 200,
    alignSelf: "flex-start",
  },
  rank: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },
  tableLabel: {
    textSize: 12,
    color: "#999",
    fontWeight: "bold",
  },
  indexTop: {
    textSize: 16,
    color: "#50a42f",
    flex: 1,
  },
  index: {
    textSize: 16,
    color: "#666",
    flex: 1,
  },
  team: {
    flex: 4,
  },
  teamName: {
    textSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  points: {
    textSize: 16,
    color: "#666",
    flex: 1,
    fontWeight: "bold",
  },
});
