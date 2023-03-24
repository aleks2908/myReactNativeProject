import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

// "expo": "~48.0.6",

const initialstate = {
  email: "",
  password: "",
};

export default Login = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState(initialstate);

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
    if (state.email && state.password) {
      keyboardHide();
      console.log(state);
      setState(initialstate);
    } else {
      alert("Заповніть поля");
    }
  };

  return (
    // <>
    <ImageBackground
      style={styles.image}
      source={require("../../assets/bg1.png")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{
              ...styles.formWrapper,
              marginBottom: isKeyboardShown ? -245 : 0,
            }}
          >
            <View style={styles.form}>
              <Text style={styles.formTitle}>Увійти</Text>

              <TextInput
                style={styles.input}
                placeholder={"Адреса електронної пошти"}
                placeholderTextColor={"#BDBDBD"}
                value={state.email}
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
                onChangeText={(value) =>
                  setState((prevstate) => ({ ...prevstate, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder={"Пароль"}
                placeholderTextColor={"#BDBDBD"}
                value={state.password}
                secureTextEntry={true}
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
                onChangeText={(value) =>
                  setState((prevstate) => ({ ...prevstate, password: value }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.formButton}
                onPress={onsubmit}
              >
                <Text style={styles.buttonTitle}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Registration");
                }}
              >
                <Text style={styles.alreadyHaveAccount}>
                  Немає акаунту? Зареєструватись
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
    // </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    height: 489,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  formTitle: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 32,
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

  alreadyHaveAccount: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
