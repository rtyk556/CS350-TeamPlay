import { NavigationContainer } from "@react-navigation/native";
import { Button, Linking, StyleSheet, SwitchComponent, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import { Register } from "./Register";
import Home from "./Home";


export default function Login({ navigation }){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleForgot=() => {

    }
    const handleLogin=({ navigation }) => {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <View style={styles.field}>
                <Text style={styles.label}>ID</Text>
                <TextInput value={id} onChangeText={setId} style={styles.input}></TextInput>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={true}></TextInput>
            </View>
            <Button color={"#50a42f"} style={styles.button} onPress={handleForgot} title="Forgot Password?"></Button>
            <View style={{flexDirection: 'row'}}>
                <Button color={"#50a42f"} style={styles.button} onPress={() => navigation.navigate('Home')} title="Login"></Button>
                <View style={{width: "5%"}}></View>
                <Button color={"#50a42f"} style={styles.button} onPress={() => navigation.navigate('Register')} title="Register"></Button>
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
});