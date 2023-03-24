import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const CommentsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Коментарі</Text>
        <MaterialIcons
          style={styles.headerIcon}
          onPress={() => navigation.navigate("Публікації")}
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
  headerIcon: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },
});
