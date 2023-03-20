import React, { useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const [isRegistrate, setIsRegistrate] = useState(true);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const whatToShow = (value) => {
    setIsRegistrate(value);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/bg1.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {isRegistrate ? (
            <RegistrationScreen whatToShow={whatToShow} />
          ) : (
            <LoginScreen whatToShow={whatToShow} />
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
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
