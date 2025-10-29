import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
  {
    id: "001",
    image: "@/assets/images/logo.png",
    title: "Belajar Mobile App",
    description:
      "Belajar Mobile App adalah aplikasi yang membantu Anda belajar mobile app development.",
    date: "2023-01-01",
  },
  {
    id: "002",
    image: "@/assets/images/logo.png",
    title: "Belajar React Native",
    description:
      "Belajar React Native adalah aplikasi yang membantu Anda belajar React Native development.",
    date: "2023-01-02",
  },
];

type Note = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: 48, height: 48 }}
        source={require("@/assets/images/logo.png")}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </View>
  );
};
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.kodeinText}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={38} style={{ color: "white" }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  kodeinText: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 5,
  },
  notesText: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 2,
    color: "#FF5B13",
  },
  content: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FF5B13",
    borderRadius: 50,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  cardContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: 18,
  },
  cardDesc: {
    fontSize: 16,
  },
  cardDate: {
    fontSize: 14,
    color: "#999",
  },
});
