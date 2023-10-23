import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import LandingPageScreen from "../Screens/LandingPageScreen";
import PeopleLandingScreen from "../Screens/PeopleLandingScreen";
import PlacesLandingScreen from "../Screens/PlacesLandingScreen";
import PlanetLandingScreen from "../Screens/PlanetLandingScreen";

const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={styles.container}
      activeColor="#ffffff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/illustrations/home.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleLandingScreen}
        options={{
          title: "People",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/illustrations/group.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Places"
        component={PlacesLandingScreen}
        options={{
          title: "Places",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/illustrations/location.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Planet"
        component={PlanetLandingScreen}
        options={{
          title: "Planet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/illustrations/earth.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={LandingPageScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
        options={{
          title: "Menu",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/illustrations/group.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8E9FF",
  },
});

export default TabNavigation;
