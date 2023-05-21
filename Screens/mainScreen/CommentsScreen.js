import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CommentsScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Коментарі</Text>
        <MaterialCommunityIcons
          style={styles.createPostsIcon}
          onPress={() => navigation.navigate("Публікації")}
          name="arrow-left"
          size={24}
          color="#212121"
        />
      </View>
      <View style={styles.container}>
        <View style={styles.photoPlace}>
          <Image
            source={{ uri: route.params.item.photo }}
            style={styles.photo}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
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
});
