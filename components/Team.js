import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TEST_PICTURE_URI =
  "namu.wiki/i/4FwXyyH-0M4G4Zpj_h0HBcCIjhoHIMU57o_Qiz03raoZenpknpiumP7UIyyZWhbVCtdSqMO7Ys7f7hWWDT5EQA.webp";

export function Team() {
  const [team, setTeam] = useState({
    name: "FC daejeon",
    picture:
      "https://m.media-amazon.com/images/M/MV5BZTEzZTdkN2UtNmE0OS00ZTZiLTk0YWEtZmQyNDQyNDE4NGVlXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_FMjpg_UX1000_.jpg",
    members: [
      { name: "Gildong Hong", picture: TEST_PICTURE_URI },
      { name: "Gildong Hong", picture: TEST_PICTURE_URI },
      { name: "Gildong Hong", picture: TEST_PICTURE_URI },
    ],
  });
  const [user, setUser] = useState({
    name: "Gildong Hong",
    picture:
      "https://i.namu.wiki/i/4FwXyyH-0M4G4Zpj_h0HBcCIjhoHIMU57o_Qiz03raoZenpknpiumP7UIyyZWhbVCtdSqMO7Ys7f7hWWDT5EQA.webp",
  });
  const [chat, setChat] = useState();

  return (
    <View style={styles.container}>
      <Ionicons
        name="settings"
        size={16}
        style={{ alignSelf: "flex-end" }}
        color="#666"
      />
      <View style={styles.pictureContainer}>
        <Image style={styles.userPicture} source={{ uri: user.picture }} />
        <Image style={styles.teamPicture} source={{ uri: team.picture }} />
      </View>
      <Text style={styles.teamName}>{team.name}</Text>
      <Text style={styles.welcomeMessage}>Welcome, {user.name}</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.memberContainer}>
        <Text style={styles.title}>Members</Text>
        {team.members.map(({ name, picture }) => (
          <View style={styles.member}>
            <Image
              soruce={{ uri: TEST_PICTURE_URI }}
              style={styles.memberPicture}
            />
            <Text>{name}</Text>
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
    paddingHorizontal: 40,
  },
  pictureContainer: {
    position: "relative",
    alignSelf: "center",
    height: 120,
    width: 150,
  },
  teamPicture: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  userPicture: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 20,
    top: 15,
    left: 80,
    backgroundColor: "#fff",
  },
  teamName: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  welcomeMessage: {
    alignSelf: "center",
  },
  chatContainer: {
    display: "flex",
    flexDirection: "col",
    gap: 8,
  },
  memberContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "col",
    gap: 20,
  },
  member: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  memberPicture: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});
