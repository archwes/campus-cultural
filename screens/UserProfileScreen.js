import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, updatePassword, signOut } from "firebase/auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "../config";

const UserProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [password, setPassword] = useState("********");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setPassword(isEditing ? "********" : "");
    setIsEditing(!isEditing);
  };

  const handleUpdatePassword = async () => {
    if (password === "********" || password === "") {
      Alert.alert("Erro", "Por favor, insira uma nova senha.");
      return;
    }

    try {
      await updatePassword(user, password);
      Alert.alert("Sucesso", "Senha atualizada com sucesso!");
      setPassword("********");
      setIsEditing(false);
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Erro ao realizar log off: ", error));
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setIsEditing(false);
        setPassword("********");
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        <TouchableOpacity onPress={handleEditToggle}>
          <Ionicons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={user?.email || ""}
        editable={false}
        style={styles.inputReadOnly}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        editable={isEditing}
        secureTextEntry
        placeholder={isEditing ? "Digite a nova senha" : ""}
        style={[styles.input, isEditing ? styles.inputEditable : styles.inputReadOnly]}
      />

      {isEditing && (
        <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
          <Text style={styles.buttonText}>Atualizar Senha</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log off</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
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
  inputReadOnly: {
    backgroundColor: "#f0f0f0",
  },
  inputEditable: {
    backgroundColor: "#fff",
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

export default UserProfileScreen;
