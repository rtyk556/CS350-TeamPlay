import { Button, Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import { Records } from "./Records";

export default function Mypage(){
    const [teams, setteams] = useState([
        {
            name: "FC Daejeon"
        },
        {
            name: "FC KAI"
        },
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.userInfo}>
                {/* <Image></Image> */}
                <Text style={styles.title}>Gildong Hong</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Teams</Text>
            </View>
            <View style={styles.teamsWrapper}>
                {teams.map((team) => (
                    <View style={styles.team}>
                        {/* <Image></Image> */}
                        <Text style={styles.teamName}>{team.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 80,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },
    field: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    label: {
        color: "#50a42f",
        alignSelf: "stretch",
        fontSize: 8,
    },
    input: {
        borderBottomColor: "#50a42f",
        borderBottomWidth: 2,
        padding: 2,
        outline: "none",
    },
    button: {
        backgroundColor: "#50a42f",
        padding: 8,
        borderRadius: 20,
        color: "#fff",
    },
    userInfo: {
        padding: "10%", 
        display: "flex",
        position: "absolute",
        top: 0,
    }, 
    titleContainer: {
        padding: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    teamsWrapper: {
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    team: {
        flex: 4,
        flexDirection: "row",
    },
    teamName: {
        textSize: 16,
        color: "#666",
        fontWeight: "bold",
    },
});