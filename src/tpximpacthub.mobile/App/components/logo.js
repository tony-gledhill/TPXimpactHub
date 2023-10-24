import React from "react";
import { Image, View, StyleSheet } from "react-native";

function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/primary_logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    height: 25,
    width: 150,
    resizeMode: "contain",
  },
});

export default Logo;
