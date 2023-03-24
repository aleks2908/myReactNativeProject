import React from "react";
import { StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import Register from "./Screens/auth/RegistrationScreen";
import Login from "./Screens/auth/LoginScreen";
import { PostsScreen } from "./Screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "./Screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./Screens/mainScreen/ProfileScreen";

// icons import
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import RegistrationScreen from "./Screens/auth/RegistrationScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// export const WTS = (value) => {
//   console.log("WTS", value);
//   let ttt;
//   if (value) {
//     ttt = value;
//   }

//   return ttt;
// };

// console.log("whatToShowttttttttttttttt: ", whatToShow);

export const useRout = (isAuth) => {
  console.log("isAuth: ", isAuth);
  // export const UseRout = ({ isAuth, whatToShow }) => {
  // console.log("whatToShow: ", whatToShow);
  // console.log("isAuth: ", isAuth);
  // const navigation = useNavigation();
  // whatToShow(1);
  // console.log(navigation);
  // RegistrationScreen()

  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={Register}
          // whatToShow={whatToShow}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        options={{
          //   headerTitle: "RRRRRRRRRRR",
          headerTitleAlign: "center",
          //   backgroundColor: "#FFFFFF",
          //   borderBottomWidth: 1,
          //   borderBottomColor: "red",

          headerShown: false,
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            borderBottomColor: "#cccdcd",
            height: 88,
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            // flex: 1,
            fontFamily: "Roboto-Medium",
            // fontWeight: 500,
            fontSize: 17,
            // borderBottomWidth: 1,
            // borderBottomColor: "red",
            // textAlign: "center",
            // alignItems: "flex-end",
            // justifyContent: "flex-start",
            // marginHorizontal: 50,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={size}
              color={color}
            />
          ),
        }}
        name="Публікації"
        style={styles.header}
        component={PostsScreen}
      ></MainTab.Screen>

      <MainTab.Screen
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            borderBottomColor: "#cccdcd",
            height: 88,
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            // flex: 1,
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              // onPress={() => navigation.navigate("Публікації")}
              name="arrow-left"
              size={24}
              color="#212121"
              marginLeft={16}
            />
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="plussquare" size={36} color={color} />
          ),
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      ></MainTab.Screen>

      <MainTab.Screen
        options={{
          //   headerTitle: "RRRRRRRRRRR",
          //   headerTitleAlign: "center",

          headerShown: false,
          //   headerStyle: {
          //     backgroundColor: "#FFFFFF",
          //     height: 88,
          //   },
          //   headerTintColor: "#212121",
          //   headerTitleStyle: {
          //     // flex: 1,
          //     fontFamily: "Roboto-Medium",
          //     // fontWeight: 500,
          //     fontSize: 17,
          //     // textAlign: "center",
          //     alignItems: "center",
          //     justifyContent: "center",
          //     // marginHorizontal: 50,
          //   },

          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    fontSize: 40,
  },
});
