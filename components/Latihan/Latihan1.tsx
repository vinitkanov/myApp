import { Text, View, TextInput } from "react-native";

export default function Latihan1() {
  return (
    <View>
      <Text>App Data Diri Saya</Text>
      <Text>Nama</Text>
      <TextInput
        placeholder="Miqdad"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />
      <Text>Kelas</Text>
      <TextInput
        placeholder="11"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />
      <Text>Hobi</Text>
      <TextInput
        placeholder="Ngopi"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />
      <Text>Terima Kasih sudah mengisi form!</Text>
    </View>
  );
}
