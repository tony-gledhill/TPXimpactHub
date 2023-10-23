import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import Logo from "../components/logo";

function Container({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? 50 : 0,
  },
});

export default Container;
