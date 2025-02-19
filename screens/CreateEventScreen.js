import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { Colors } from "../config";

export const CreateEventScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreateEvent = async () => {
    if (title === "" || description === "") {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      await addDoc(collection(db, "events"), {
        title,
        description,
        imageUrl,
        creator: auth.currentUser.email,
        createdAt: serverTimestamp(),
      });
      Alert.alert("Sucesso", "Evento criado com sucesso!");
      setTitle("");
      setDescription("");
      setImageUrl("");
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
      <Text style={styles.label}>URL da Imagem (opcional)</Text>
      <TextInput
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder="URL da imagem"
      />
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : null}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição do evento"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Criar Evento</Text>
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
  image: {
    width: "100%",
    height: 200,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
});