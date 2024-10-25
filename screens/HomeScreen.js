import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
