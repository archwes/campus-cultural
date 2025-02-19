import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { NotificationsContext } from "../providers";

export const NotificationsScreen = ({ navigation }) => {
  const { notificationsEnabled, setNotificationsEnabled, notifications, clearNotifications } = useContext(NotificationsContext);

  const handleNotificationPress = (notification) => {
    clearNotifications();
    navigation.navigate("FeedStack", { screen: "Feed" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Notificações de novos eventos</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.notificationWrapper}>
          <TouchableOpacity onPress={() => handleNotificationPress(notification)} style={styles.notificationContainer}>
            <Text style={styles.notificationText}>Novo evento adicionado!</Text>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
          </TouchableOpacity>
          {index < notifications.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
  notificationWrapper: {
    marginBottom: 8,
  },
  notificationContainer: {
    paddingVertical: 8,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationTitle: {
    fontSize: 14,
    color: "gray",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
    marginHorizontal: 16,
  },
});