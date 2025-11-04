import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Notes Detail</Text>
      </View>
      <ScrollView>
        <Image
          source={require("@/assets/images/image_4.png")}
          style={{ width: "100%", height: 220 }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Belajar Programming</Text>
          <Text style={styles.tanggal}>Selasa, 13 Mei 2025</Text>
          <Text style={styles.description}>
            Mulailah dengan memahami dasar JavaScript seperti fungsi, array, dan
            async/await. Pelajari konsep component di React dan gunakan
            functional component serta hooks seperti useState dan useEffect.
            Bangun proyek kecil seperti to-do list untuk latihan. Gunakan
            dokumentasi resmi React dan manfaatkan React Developer Tools untuk
            debugging. Terakhir, bergabunglah dengan komunitas agar semangat
            belajar tetap terjaga.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonUpdate}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonDelete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 48,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
  tanggal: {
    fontSize: 14,
    color: "gray",
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 92,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 160,
    gap: 8,
  },
  buttonUpdate: {
    paddingVertical: 16,
    paddingHorizontal: 72,
    borderRadius: 12,
    backgroundColor: "#FF5B13",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  buttonDelete: {
    paddingVertical: 16,
    paddingHorizontal: 72,
    borderRadius: 12,
    backgroundColor: "#FF3530",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
