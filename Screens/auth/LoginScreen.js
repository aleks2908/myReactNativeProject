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

// const initialstate = {
//   email: "",
//   password: "",
// };

export default Login = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [email, setEmail] = useState("");
  // console.log("654: ", email);
  const [password, setPassword] = useState("");
  // const [state, setState] = useState(initialstate);
  const [showPassword, setShowPassword] = useState(true);

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
    if (email && password) {
      keyboardHide();
      console.log(email, password);
      // setState(initialstate);
      setEmail("");
      setPassword("");
    } else {
      alert("Заповніть поля");
    }
  };

  return (
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
                value={email}
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
                onChangeText={(value) => setEmail(value)}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  value={password}
                  // {const ttt = () => {secureTextEntry={true}}}
                  secureTextEntry={showPassword}
                  // secureTextEntry={true}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity
                  style={styles.showPassWhapper}
                  activeOpacity={0.7}
                  onPress={() => setShowPassword((prevState) => !prevState)}
                >
                  <Text style={styles.showPassText}>
                    {showPassword ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>

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
    // alignItems: "center",
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
  showPassWhapper: {
    position: "absolute",
    right: 16,
    height: 50,
    verticalAlign: "middle",
    textAlign: "center",
    // backgroundColor: "red",
    justifyContent: "center",
    // alignItems: "center",
  },
  showPassText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
