import { useCallback, useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({ onCreatePlace }) {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [selectImage, setSelectImage] = useState();
  const [pickLocation, setPickLocation] = useState();
  function changeTitleHandler(enterdTitle) {
    setEnteredTitle(enterdTitle);
  }

  function takeImageHandler(imageUri) {
    setSelectImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickLocation(location);
  }, []);

  function savePlaceHandler() {
    const palceData = new Place(enterdTitle, selectImage, pickLocation);
    onCreatePlace(palceData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.lable}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enterdTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  lable: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
