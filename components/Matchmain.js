import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SportPicker } from "./SportPicker";

export function Matchmain() {
  const [ready, setReady] = useState([
    {
        left: {
            name: "FC Daejeon", 
            picture: "https://image.com",
        },
        right: {
            name: "Hurricane", 
            picture: "https://image.com",
        },
        datetime: "Sunday, March 26",
        location: "KAIST stadium",
        type: "TEAM",
    },
  ]);

  const [recruiting, setRecruiting] = useState([
    {
        left: {
            name: "FC Daejeon", 
            picture: "https://image.com",
        },
        right: {
            name: "FC KAI", 
            picture: "https://image.com",
        },
        datetime: "Sunday, March 29",
        location: "Colosseum",
        type: "INDIV",
    }
  ]);

  const [sport, setSport] = useState();

  return (
    <View style={styles.container}>
      <SportPicker
        sport={sport}
        setSport={setSport}
        style={styles.sportPickerContainer}
      />
      <Text style={{alignItems: "flex-start"}}>MY MATCH</Text>
      {ready.map((match) => (
        <View style={styles.match}>
          <Text style={styles.matchDate}>{match.date}</Text>
          <View style={styles.matchData}>
            <View style={styles.left}>
              <Image source={{ url: match.left.picture }} />
              <Text>{match.left.name}</Text>
              <Text>{match.datetime}</Text>
            </View>
            <Text
              style={
                match.type=="TEAM"
                  ? styles.team
                  : styles.indiv
              }
            >{match.type}</Text>
            <View style={styles.right}>
              <Image source={{ url: match.right.picture }} />
              <Text>{match.right.name}</Text>
              <Text>{match.location}</Text>
            </View>
          </View>
        </View>
      ))}
      <Text style={{alignItems: "flex-start"}}>RECRUITING MATCH</Text>
      {recruiting.map((match) => (
        <View style={styles.match}>
          <Text style={styles.matchDate}>{match.date}</Text>
          <View style={styles.matchData}>
            <View style={styles.left}>
              <Image source={{ url: match.left.picture }} />
              <Text>{match.left.name}</Text>
              <Text>{match.datetime}</Text>
            </View>
            <Text
              style={
                match.type=="TEAM"
                  ? styles.team
                  : styles.indiv
              }
            >{match.type}</Text>
            <View style={styles.right}>
              <Image source={{ url: match.right.picture }} />
              <Text>{match.right.name}</Text>
              <Text>{match.location}</Text>
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
  match: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    gap: 8,
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },
  matchDate: {
    color: "#aaa",
    fontSize: "8",
  },
  matchData: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 4,
    justifyContent: "center",
  },
  left: {
    display: "flex",
    alignItems: "flex-start",
    //flexDirection: "row",
    flex: 2,
    padding: 10,
  },
  right: {
    display: "flex",
    alignItems: "flex-end",
    //flexDirection: "row-reverse",
    flex: 2,
  },
  team: {
    backgroundColor: "#50a42f",
    borderRadius: 10,
    padding: 10,
    width: "5%",
    color: "#fff",
    //flex: 1,
    textAlign: "center",
  },
  indiv: {
    backgroundColor: "#e6a03c",
    borderRadius: 10,
    padding: 10,
    width: "5%",
    color: "#fff",
    //flex: 1,
    textAlign: "center",
  },
});