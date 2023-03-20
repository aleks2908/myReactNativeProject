import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialstate = {
  login: "",
  email: "",
  password: "",
};

export default RegistrationScreen = ({ whatToShow }) => {
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
    if (state.email && state.password && state.login) {
      keyboardHide();
      console.log(state);
      setState(initialstate);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          ...styles.formWrapper,
          marginBottom: isKeyboardShown ? -164 : 0,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            placeholder={"Логін"}
            placeholderTextColor={"#BDBDBD"}
            value={state.login}
            onFocus={() => {
              setIsKeyboardShown(true);
            }}
            onChangeText={(value) =>
              setState((prevstate) => ({ ...prevstate, login: value }))
            }
          />
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
            <Text style={styles.buttonTitle}>Зареєструватись</Text>
          </TouchableOpacity>
          <Text
            onPress={() => {
              whatToShow(false);
            }}
            style={styles.alreadyHaveAccount}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
  formButton: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
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
