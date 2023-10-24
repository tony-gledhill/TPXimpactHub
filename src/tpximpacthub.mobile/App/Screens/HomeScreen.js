import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Container from "../components/Container";
import { HomePageData } from "../utils/http";

function HomeScreen() {
  const [homePageData, setHomePageData] = useState({});

  const getHomePageData = useCallback(async () => {
    var hpd = await HomePageData();
    setHomePageData(hpd.data);
    console.log(hpd.data);
  }, []);

  useEffect(() => {
    getHomePageData();
  }, [getHomePageData]);

  return (
    <Container>
      <Text>{homePageData.name}</Text>
    </Container>
  );
}

export default HomeScreen;
