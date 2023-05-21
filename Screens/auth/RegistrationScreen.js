<script src="http://localhost:8097"></script>;

// import { useRoute } from "@react-navigation/native";
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
// import App from "../../App";
// import { useRout } from "../../reuter";
// import { isSignedIn, useRout } from "../../reuter";
// import { AntDesign } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// const initialstate = {
//   login: "",
//   email: "",
//   password: "",
// };

export default Register = ({ navigation }) => {
  // console.log("whatToShow7777777777: ", whatToShow);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  // const [state, setState] = useState(initialstate);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (login && email && password) {
      keyboardHide();
      console.log(login, email, password);
      // setState(initialstate);
      setLogin("");
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
              marginBottom: isKeyboardShown ? -175 : 0,
            }}
          >
            <View style={styles.form}>
              <View style={styles.backPhoto}>
                <AntDesign
                  style={styles.plusSign}
                  name="pluscircleo"
                  size={25}
                  color="#FF6C00"
                  onPress={() => {
                    alert("АГА!!!!!");
                  }}
                />
              </View>
              <Text style={styles.formTitle}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder={"Логін"}
                placeholderTextColor={"#BDBDBD"}
                value={login}
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
                onChangeText={(value) => setLogin(value)}
              />
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
                  // onPress={() => {
                  //   navigation.navigate("Registration");
                  // }}
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
                <Text style={styles.buttonTitle}>Зареєструватись</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.alreadyHaveAccount}>
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
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
  formTitle: {
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
