import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomButton from "../components/customButton";

const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        label="Judul"
        onChange={setTitle}
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDD"
          color="#203239"
          text="Kembali"
          width="100%"
          onPress={() => {
            setCurrentPage("home");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    marginTop: 40,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
