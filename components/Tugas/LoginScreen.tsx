import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
        Login Screen
      </Text>
      <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Email</Text>
      <TextInput
        placeholder="Masukan Email"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />
      <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Password</Text>
      <TextInput
        placeholder="Masukan Password"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />
      <Button title="Login" />
    </View>
  );
}
