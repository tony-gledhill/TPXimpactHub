import React from "react";
import Colours from "../utils/Colours";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  useState,
} from "react-native";

const scaleHeight = ({ source, desiredWidth }) => {
  const { width, height } = Image.resolveAssetSource(source);

  return (desiredWidth / width) * height;
};

const imageSource = "../../assets/images/google.png";
const imageWidth = 50;
const imageHeigh = scaleHeight({
  source: require(imageSource),
  desiredWidth: imageWidth,
});

function LoginButton({ onPress, theme }) {
  const styles = styling(theme);

  return (
    <View style={styles.container}>
      <Pressable style={styles.innerContainer} onPress={onPress}>
        <Image source={require(imageSource)} style={styles.logo} />
        <Text style={styles.buttonText}>Log in with google</Text>
      </Pressable>
    </View>
  );
}

const styling = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colours[theme]?.white,
      color: Colours[theme].black,
      borderRadius: 28,
      alignSelf: "center",
      overflow: "visible",
    },
    innerContainer :{
        flexDirection: "row",
    },
    logo: {
      margin: 10,
      borderWidth: 1,
      width: imageWidth,
      height: imageHeigh,
      resizeMode: "contain",
      alignSelf: "center",
    },
    buttonText: {
      margin: 20,
    },
  });

export default LoginButton;
