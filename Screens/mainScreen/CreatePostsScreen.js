import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const initialstate = {
  name: "",
  locality: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState(initialstate);

  // console.log(headerLeft);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsKeyboardShown(false)
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onsubmit = () => {
    // if (state.email && state.password) {
    keyboardHide();
    console.log(state);
    setState(initialstate);
    // navigation.navigate("Login", { screen: "PostsScreen" });
    // navigation.navigate("PostsScreen");
    // } else {
    //   alert("Заповніть поля");
    // }
  };

  return (
    // <>
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Створити публікацію</Text>
        <MaterialCommunityIcons
          style={styles.createPostsIcon}
          onPress={() => navigation.navigate("Публікації")}
          name="arrow-left"
          size={24}
          color="#212121"
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{
              ...styles.formWrapper,
              marginBottom: isKeyboardShown ? 50 : 118, // 135
            }}
          >
            <View style={styles.photoBack}>
              <View style={styles.photoBackIconWrapper}>
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </View>
            </View>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>

            {/* <View style={styles.form}> */}
            {/* <Text style={styles.formTitle}>Увійти</Text> */}

            {/* <MaterialCommunityIcons
            onPress={() => navigation.navigate("Публікації")}
            name="arrow-left"
            size={24}
            color="#212121"
            marginLeft={16}
          /> */}

            <TextInput
              style={styles.input}
              placeholder={"Назва..."}
              placeholderTextColor={"#BDBDBD"}
              value={state.name}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
              onChangeText={(value) =>
                setState((prevstate) => ({ ...prevstate, name: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Місцевість"}
              placeholderTextColor={"#BDBDBD"}
              value={state.locality}
              // secureTextEntry={true}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
              onChangeText={(value) =>
                setState((prevstate) => ({ ...prevstate, locality: value }))
              }
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.formButton}
              onPress={onsubmit}
            >
              <Text style={styles.buttonTitle}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // height: 530,
    paddingHorizontal: 16,
    // justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  header: {
    // flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#cccdcd",
    height: 88,
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingBottom: 10,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    // marginRight: 100,
    marginBottom: 11,
    // fontWeight: 500,
    fontSize: 17,
  },
  createPostsIcon: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },
  // formWrapper: {
  //   // flex: 1,
  //   // height: 530,

  //   backgroundColor: "yellow",
  // },

  photoBack: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 8,

    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photoBackIconWrapper: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  addPhotoText: {
    fontSize: 16,
    lineHeight: 19,
    // textAlign: "center",
    // letterSpacing: 0.01,
    // marginTop: 92,
    marginBottom: 32,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },

  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  // },

  // form: {
  //   height: 549,
  //   backgroundColor: "#FFFFFF",
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  //   paddingHorizontal: 16,
  // },
  // formTitle: {
  //   fontSize: 30,
  //   lineHeight: 35,
  //   textAlign: "center",
  //   letterSpacing: 0.01,
  //   marginTop: 92,
  //   marginBottom: 32,
  //   color: "#212121",
  //   fontFamily: "Roboto-Medium",
  // },
  input: {
    // marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#E8E8E8",
    height: 50,
    // borderRadius: 8,
    color: "#212121",
    // backgroundColor: "#F6F6F6",
    // paddingLeft: 16,
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
    marginTop: 16,
    // marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
});
