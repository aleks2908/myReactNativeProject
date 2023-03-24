import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useRout } from "./reuter";
// import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // console.log(props);
  // const navigation = useNavigation();
  // console.log("APP: ", value);

  // const routing = useRout(Math.random() > 0.5);
  const routing = useRout(1);

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  // const [isRegistrate, setIsRegistrate] = useState(true);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const whatToShow = (value) => {
  //   console.log("value: ", value);
  //   // setIsRegistrate(value);
  // };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {routing}
        {/* <UseRout whatToShow={whatToShow} isAuth={0} /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
