import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export const PostsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <MaterialIcons
          style={styles.logOutIcon}
          onPress={() => navigation.navigate("Створити публікацію")}
          name="logout"
          size={24}
          color="#BDBDBD"
        />
      </View>
      <View style={styles.container}>{/* <Text>PostsScreen</Text> */}</View>
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
  logOutIcon: {
    position: "absolute",
    bottom: 10,
    right: 16,
  },
});
