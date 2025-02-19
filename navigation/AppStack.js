import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import { CreateEventScreen } from "../screens/CreateEventScreen";
import { EditEventScreen } from "../screens/EditEventScreen";
import { AuthenticatedUserContext, NotificationsContext } from "../providers";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={HomeScreen} options={{ headerTitle: "Feed" }} />
    <Stack.Screen name="EditEvent" component={EditEventScreen} options={{ headerTitle: "Editar Evento" }} />
  </Stack.Navigator>
);

const CreateEventStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Criar Evento" component={CreateEventScreen} options={{ headerTitle: "Criar Evento" }} />
  </Stack.Navigator>
);

const UserProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Configurações de Usuário" component={UserProfileScreen} options={{ headerTitle: "Configurações de Usuário" }} />
  </Stack.Navigator>
);

const NotificationsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notificações" component={NotificationsScreen} options={{ headerTitle: "Notificações" }} />
  </Stack.Navigator>
);

export const AppStack = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const { notifications } = useContext(NotificationsContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NotificaçõesStack"
        component={NotificationsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="notifications" size={size} color={color} />
              {notifications.length > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationCount}>{notifications.length}</Text>
                </View>
              )}
            </View>
          ),
          headerShown: false,
        }}
      />
      {user?.email.endsWith("@utfpr.edu.br") && (
        <Tab.Screen
          name="CreateEventStack"
          component={CreateEventStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      )}
      <Tab.Screen
        name="UserProfileStack"
        component={UserProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  notificationBadge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationCount: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});