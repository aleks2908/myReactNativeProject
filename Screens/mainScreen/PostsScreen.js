import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, FlatList, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

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

      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 34,
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ height: 240, borderRadius: 8 }}
              />
              {item.name && <Text style={styles.photoTitle}>{item.name}</Text>}
              <View style={styles.photoData}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "baseline",
                    // justifyContent: "space-between",
                  }}
                >
                  <EvilIcons
                    name="comment"
                    size={24}
                    color="#BDBDBD"
                    onPress={() =>
                      navigation.navigate("CommentsScreen", { item })
                    }
                  />
                  <Text style={styles.photoComents}>0</Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                  }}
                >
                  <EvilIcons
                    name="location"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => navigation.navigate("MapScreen", { item })}
                  />
                  <Text style={styles.photoAdress}>{item.locality}</Text>
                </View>
              </View>
              {/* <Text>{item.locality}</Text> */}
            </View>
          )}
        />
      </View>
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
    // backgroundColor: "red",
  },
  photoData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
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
  photoTitle: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    marginTop: 8,
  },
  photoAdress: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
    // textAlign: "left",
  },
  photoComents: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
