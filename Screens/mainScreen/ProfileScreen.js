import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

export const ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/bg1.png")}
    >
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
        <View style={styles.form}>
          <View style={styles.backPhoto}>
            {/* <AntDesign name="pluscircleo" size={24} color="black" /> */}
            {/* <AntDesign name="pluscircle" size={24} color="black" /> */}
            {/* <AntDesign
              style={styles.plusSign}
              name="pluscircleo"
              size={25}
              color="#FF6C00"
              onPress={() => {
                alert("АГА!!!!!");
              }} */}
            {/* /> */}
          </View>
          <Text style={styles.pageTitle}>Natali Romanova</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backPhoto: {
    // flex: 1,
    position: "absolute",
    top: -60,
    left: 128,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  plusSign: {
    top: 81,
    left: 107,
    width: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  formWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  pageTitle: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 92,
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  input: {
    // marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  formButton: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
    marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
});
