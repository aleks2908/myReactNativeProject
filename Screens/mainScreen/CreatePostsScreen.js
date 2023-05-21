import React, { useState, useEffect, useRef } from "react";
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
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const initialstate = {
  name: "",
  locality: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [photoDescr, setPhotoDescr] = useState(initialstate);

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    keyboardHide();

    const location = await Location.getCurrentPositionAsync();
    alert(location.coords.latitude);

    navigation.navigate("Публікації", {
      photo,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...photoDescr,
    });

    setPhoto(null);
    setPhotoDescr(initialstate);
  };

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

  return (
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
        style={{
          justifyContent: isKeyboardShown ? "flex-end" : "flex-start",
          ...styles.container,
        }}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{
              ...styles.formWrapper,
              marginBottom: isKeyboardShown ? 0 : 118, // 135
            }}
          >
            <View style={styles.photoPlace}>
              {photo ? (
                <Image source={{ uri: photo }} style={styles.photo} />
              ) : (
                <Camera
                  style={styles.camera}
                  type={Camera.Constants.Type.back}
                  ref={setCamera}
                >
                  <TouchableOpacity
                    style={styles.photoBackIconWrapper}
                    onPress={takePhoto}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </Camera>
              )}
            </View>
            <Text style={styles.addPhotoText}>
              {photo ? "Редагувати фото" : "Завантажте фото"}
            </Text>

            <TextInput
              style={styles.input}
              placeholder={"Назва..."}
              placeholderTextColor={"#BDBDBD"}
              value={photoDescr.name}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
              onChangeText={(value) =>
                setPhotoDescr((prevstate) => ({ ...prevstate, name: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Місцевість..."}
              placeholderTextColor={"#BDBDBD"}
              value={photoDescr.locality}
              // secureTextEntry={true}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
              onChangeText={(value) =>
                setPhotoDescr((prevstate) => ({
                  ...prevstate,
                  locality: value,
                }))
              }
            />
            <TouchableOpacity
              disabled={!photo}
              activeOpacity={0.8}
              // style={styles.formButton}
              style={{
                backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
                ...styles.formButton,
              }}
              onPress={sendPhoto}
            >
              <Text
                style={{
                  color: photo ? "#FFFFFF" : "#BDBDBD",
                  ...styles.buttonTitle,
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>

            {photo && (
              <View style={styles.deleteIconWrapper}>
                <AntDesign
                  name="delete"
                  size={20}
                  // color="#212121"
                  style={styles.deleteIcon}
                  onPress={() => setPhoto(null)}
                />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: isShowKeyboadr ? "flex-end" : "flex-start";
    // justifyContent: "flex-end",
    width: "100%",
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

  photoPlace: {
    height: 240,
    // width: "100%",
    // backgroundColor: "#F6F6F6",
    // backgroundColor: "red",
    borderRadius: 8,
    overflow: "hidden",
    // paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 8,

    // flex: 1,
  },

  photo: { height: "100%", width: "100%" },

  camera: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    // borderColor: "red",
    // borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "100%",
    // alignItems: "center",
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
    // backgroundColor: photo ? "#F6F6F6" : "#FF6C00",
    borderRadius: 100,
    marginTop: 16,
    // marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    // color: "#BDBDBD", // FFFFFF
    fontFamily: "Roboto-Regular",
  },
  deleteIconWrapper: {
    top: 90,
    alignItems: "center",
    // backgroundColor: "orange",
    // marginBottom: "auto",
    // justifyContent: "flex-end",
    // marginBottom: 34,
  },
  deleteIcon: {
    width: 70,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 20,
    color: "#8e8e8f",
    // paddingHorizontal: 20,
    // paddingVertical: 5,
    backgroundColor: "#F6F6F6",
    // borderRadius: 15,
  },

  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 28,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
