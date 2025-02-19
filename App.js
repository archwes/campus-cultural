import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider, NotificationsProvider } from "./providers";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <NotificationsProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </NotificationsProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;