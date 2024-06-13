import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

const EditNote = ({ setCurrentPage, input, editNote }) => {
  const [title, setTitle] = useState(input.title);
  const [desc, setDesc] = useState(input.desc);

  // Optionally use useEffect to handle any side-effects if input changes
  useEffect(() => {
    setTitle(input.title);
    setDesc(input.desc);
  }, [input]);

  return (
    <View style={style.Container}>
      <View style={style.landingPage}>
        <Text>Ubah Note</Text>
        <CustomTextInput
          text={title}
          label="title"
          onChange={(title) => setTitle(title)} // Correctly update state
          multiline={false}
          numberOfLines={4}
        />
        <CustomTextInput
          text={desc}
          label="description"
          onChange={(desc) => setDesc(desc)} // Correctly update state
          multiline={true}
          numberOfLines={4}
        />
        <View>
          <View style={style.button}>
            <CustomButton
              style={style.button}
              backgroundColor="#247881"
              color="#203239"
              text="Update"
              width="100%"
              onPress={() => {
                editNote(input.id, title, desc); // Call editNote to update the note
                setCurrentPage("home");
              }}
            />
          </View>
          <View style={style.button2}>
            <CustomButton
              style={style.button}
              backgroundColor="#247881"
              color="#203239"
              text="Kembali"
              width="100%"
              onPress={() => {
                setCurrentPage("home");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  landingPage: {
    marginTop: 60,
    width: "100%",
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
  button2: {
    marginTop: 5,
  },
});

export default EditNote;
