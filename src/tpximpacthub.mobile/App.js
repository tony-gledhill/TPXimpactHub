import React, { useState, useCallback, useEffect } from "react";
import { View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/components/TabNavigation";
import LoginScreen from "./App/Screens/LoginScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const themeValue = useColorScheme();

  console.log(themeValue);

  function logUserIn() {
    setIsLoggedIn(true);
    console.log("user is logged in");
  }

  return (
    <View style={{ flexDirection: "column", height: "100%" }}>
      {isLoggedIn ? (
        <NavigationContainer>
          <TabNavigation></TabNavigation>
        </NavigationContainer>
      ) : (
        <LoginScreen onPress={logUserIn} />
      )}
    </View>
  );
}
