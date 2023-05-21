import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const MapScreen = ({ navigation, route }) => {
  const location = route.params.item;
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Мапа</Text>
        <MaterialCommunityIcons
          style={styles.createPostsIcon}
          onPress={() => navigation.navigate("Публікації")}
          name="arrow-left"
          size={24}
          color="#212121"
        />
      </View>

      <View style={styles.container}>
        {/* <Text>PostsScreen</Text> */}
        <View style={styles.container}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.006,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="travel photo"
            />
          </MapView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // height: 530,
    // paddingHorizontal: 16,
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
});
