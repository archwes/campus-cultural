import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Erro ao realizar log off: ", error));
  };
  return (
    <View style={styles.container}>
      <Button title="Log off" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
