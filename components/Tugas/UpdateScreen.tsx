import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const images = [
  require("@/assets/images/image_1.png"),
  require("@/assets/images/image_2.png"),
  require("@/assets/images/image_3.png"),
  require("@/assets/images/image_4.png"),
];

export default function AddScreen() {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.form}>
          <TextInput
            placeholder="Update Note Title"
            style={styles.inputTitle}
            selectionColor="#FF5B13"
          />
          <TextInput
            placeholder="Update Note Content"
            style={styles.inputContent}
            selectionColor="#FF5B13"
            textAlignVertical="top"
            multiline={true}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {images.map((img, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.boxImage,
                  selectedImage === index && styles.imageSelected,
                ]}
                onPress={() => setSelectedImage(index)}
              >
                <Image style={styles.image} source={img} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.updateButtonContainer}>
        <Text style={styles.buttonUpdate}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 16,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  form: {
    padding: 16,
    paddingBottom: 80,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
  },
  inputContent: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    height: 150,
  },
  boxImage: {
    borderColor: "#ccc",
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 8,
    margin: 6,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  imageSelected: {
    borderColor: "#FF5B13",
  },
  updateButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "transparent",
  },
  buttonUpdate: {
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#FF5B13",
    color: "white",
    textAlign: "center",
  },
});
