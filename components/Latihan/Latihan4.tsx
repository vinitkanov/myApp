import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Latihan4() {
  return (
    <View>
      <Text>Ini adalah Latihan 4</Text>
      <Button title="Press here" onPress={() => alert("Hello")} />

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          margin: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Press Here!!!</Text>
      </TouchableOpacity>
    </View>
  );
}
