import react from "react";
import { Text, StyleSheet, View, Image, useColorScheme } from "react-native";
import Container from "../components/Container";
import Colours from "../utils/Colours";
import LoginButton from "../components/loginButton";

function LoginScreen(props) {
  const theme = useColorScheme();
  const styles = styling(theme);

  const image = theme === "light" ? require("../../assets/images/primary_logo.png") : require("../../assets/images/secondary_logo.png");

  return (
    <Container showLogo={false}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={image}
        />
        <LoginButton theme={theme} onPress={props.onPress} />
        <Image
          style={styles.logo}
          source={require("../../assets/illustrations/group.png")}
        />
      </View>
    </Container>
  );
}

const styling = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colours[theme]?.light_blue,
      color: Colours[theme].black,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      heigh: "100%",
    },
    logo: {
      resizeMode: "center",
    },
  });

export default LoginScreen;
