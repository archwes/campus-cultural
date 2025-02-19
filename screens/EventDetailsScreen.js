import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../config";

export const EventDetailsScreen = () => {
  const route = useRoute();
  const { event } = route.params;

  const formatDateTime = (date) => {
    const formattedDate = date.toDate().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = date.toDate().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    return `${formattedDate}, às ${formattedTime}`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      {event.imageUrl ? (
        <Image source={{ uri: event.imageUrl }} style={styles.image} />
      ) : null}
      <Text style={styles.description}>{event.description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.creator}>Criado por: {event.creator}</Text>
        <Text style={styles.date}>
            Data: {event.createdAt ? formatDateTime(event.createdAt) : "Data não disponível"}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  infoContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  creator: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 20,
  },
});