import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Colors } from "../config";

export const EditEventScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);

  const handleUpdateEvent = async () => {
    if (title === "" || description === "") {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const eventDoc = doc(db, "events", event.id);
      await updateDoc(eventDoc, {
        title,
        description,
      });
      Alert.alert("Sucesso", "Evento atualizado com sucesso!");
      navigation.navigate("Feed");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Título do evento"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição do evento"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateEvent}>
        <Text style={styles.buttonText}>Atualizar Evento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  textArea: {
    height: 150,
  },
  button: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
});