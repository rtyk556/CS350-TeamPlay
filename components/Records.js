import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SportPicker } from "./SportPicker";

export function Records() {
  const [records, setRecords] = useState([
    {
      date: "",
      left: {
        name: "FC Daejeon",
        picture: "https://image.com",
      },
      right: {
        name: "FC KAI",
        picture: "https://image.com",
      },
      score: [2, 1],
    },
  ]);

  const [sport, setSport] = useState();

  return (
    <View style={styles.container}>
      <SportPicker
        sport={sport}
        setSport={setSport}
        style={styles.sportPickerContainer}
      />
      {records.map((record) => (
        <View style={styles.record}>
          <Text style={styles.recordDate}>{record.date}</Text>
          <View style={styles.recordData}>
            <View style={styles.left}>
              <Image source={{ url: record.left.picture }} />
              <Text>{record.right.name}</Text>
            </View>
            <Text
              style={
                record.score[0] > record.score[1]
                  ? styles.scoreWin
                  : styles.scoreLoose
              }
            >{`${record.score[0]} - ${record.score[1]}`}</Text>
            <View style={styles.right}>
              <Image source={{ url: record.right.picture }} />
              <Text>{record.left.name}</Text>
            </View>
          </View>
        </View>
      ))}
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
    gap: 10,
  },
  sportPickerContainer: {
    width: 200,
    alignSelf: "flex-start",
  },
  record: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    gap: 8,
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },
  recordDate: {
    color: "#aaa",
    fontSize: "8",
  },
  recordData: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 4,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flex: 2,
  },
  right: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    flex: 2,
  },
  scoreWin: {
    backgroundColor: "#50a42f",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  scoreLoose: {
    backgroundColor: "#db382c",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    flex: 1,
  },
});
