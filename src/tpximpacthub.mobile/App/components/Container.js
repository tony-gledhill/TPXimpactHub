import React from "react";
import { View, SafeAreaView, StyleSheet, Platform, Text } from "react-native";
import Logo from "../components/logo";

function Container({ children, showLogo }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.logo}>{showLogo && <Logo />}</View>
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? 50 : 0,
    flexDirection: "column",
    height: "100%",
    flex: 1,
  },
  content: {},
});

export default Container;
