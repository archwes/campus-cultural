import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../config";

export const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const eventsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "events", id));
      Alert.alert("Sucesso", "Evento deletado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  const handleEdit = (event) => {
    navigation.navigate("EditEvent", { event });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.creator}>Criado por: {item.creator}</Text>
            <Text style={styles.date}>
              Data: {item.createdAt?.toDate().toLocaleString()}
            </Text>
            {auth.currentUser.email === item.creator && (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
                  <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  eventContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  creator: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 0,
    marginTop: 15,
  },
  button: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
});