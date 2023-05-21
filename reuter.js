<script src="http://localhost:8097"></script>;

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
import { CommentsScreen } from "./Screens/mainScreen/CommentsScreen";
import { MapScreen } from "./Screens/mainScreen/MapScreen";
// import RegistrationScreen from "./Screens/auth/RegistrationScreen";
// import { AntDesign } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();

// export const WTS = (value) => {
//   console.log("WTS", value);
//   let ttt;
//   if (value) {
//     ttt = value;
//   }

//   return ttt;
// };

// console.log("whatToShowttttttttttttttt: ", whatToShow);

function Home() {
  return (
    <MainTab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            // display: "none",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        options={{
          //   headerTitle: "RRRRRRRRRRR",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#8e8e8f",
          // tabBarActiveBackgroundColor: "yellow",
          // tabBarInactiveBackgroundColor: "green",
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
              // flex={1}
              // width={70}
              // style={styles.rrr}
              // paddingLeft={20}
              // paddingRight={20}
              // paddingTop={5}
              // paddingBottom={5}
              // backgroundColor={"red"}
              // textAlign={"center"}
              // justifyContent={"center"}
              // alignItems={"center"}
              // borderRadius={8}
              // borderBottomLeftRadius={18}
            />
          ),
        }}
        name="Публікації"
        style={styles.header}
        component={PostsScreen}
      ></MainTab.Screen>

      <MainTab.Screen
        // tabBarStyle={ display: "none" },
        // screenOptions={{
        //   tabBarStyle: { display: "none" },
        // }}
        // screenOptions={{
        //   tabBarStyle: { display: "none" },
        // }}
        options={{
          tabBarStyle: { display: "none" },
          // showBarTab: "false",
          // tapBarShow: "false",
          tabBarHideOnKeyboard: "true",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#FF6C00",
          // {fgffgfg}
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

          tabBarIcon: ({ focused, color, size }) =>
            !focused ? (
              <AntDesign
                name="plus"
                size={24}
                // color={"red"}
                // color={"#FFFFFF"}
                style={styles.plusIcon}
                // onPress={() => console.log("Видалити!")}
              />
            ) : (
              <AntDesign
                name="delete"
                size={24}
                // color="#212121"
                style={styles.deleteIcon}
                // onPress={() => alert("Видалити!")}
              />
            ),
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      ></MainTab.Screen>

      <MainTab.Screen
        options={{
          //   headerTitle: "RRRRRRRRRRR",
          //   headerTitleAlign: "center",

          // tabBarActiveTintColor: "#FF6C00",
          tabBarActiveTintColor: "#8e8e8f",

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
}

export const useRout = (isAuth) => {
  // console.log("isAuth: ", isAuth);
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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CommentsScreen"
        options={{
          headerShown: false,
        }}
        component={CommentsScreen}
      />
      <Stack.Screen
        name="MapScreen"
        options={{
          headerShown: false,
        }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

// console.log(456);

const r = true;

const styles = StyleSheet.create({
  // deleteIcon: {
  //   width: 70,
  //   height: 40,
  //   textAlign: "center",
  //   verticalAlign: "middle",
  //   borderRadius: 20,
  //   color: "#212121",
  //   // paddingHorizontal: 20,
  //   // paddingVertical: 5,
  //   backgroundColor: "#F6F6F6",
  //   // borderRadius: 15,
  // },
  plusIcon: {
    width: 70,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 20,
    color: "#FFFFFF",

    // paddingVertical: 5,
    backgroundColor: "#FF6C00",
    // borderRadius: 15,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    fontSize: 40,
  },
});
