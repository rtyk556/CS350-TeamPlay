import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export function Register() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileMessage, setProfileMessage] = useState("");

  const handleVerification = () => {
    // TODO: implement
  };

  const handleSubmit = () => {
    // TODO: implement
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>ID</Text>
        <TextInput value={id} onChangeText={setId} style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      </View>
      <Button
        color={"#50a42f"}
        style={styles.button}
        onPress={handleVerification}
        title="SEND VERIFICATION EMAIL"
      ></Button>
      <View style={styles.field}>
        <Text style={styles.label}>PROFILE MESSAGE (optional)</Text>
        <TextInput
          value={profileMessage}
          onChangeText={setProfileMessage}
          style={styles.input}
        />
      </View>
      <Button
        color={"#50a42f"}
        style={styles.button}
        onPress={handleSubmit}
        title="REGISTER"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
