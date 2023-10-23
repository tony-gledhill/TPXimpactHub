import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/components/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
}
