import React, { createContext, useState } from "react";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationsContext.Provider
      value={{
        notificationsEnabled,
        setNotificationsEnabled,
        notifications,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};