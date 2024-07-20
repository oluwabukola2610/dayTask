import React from "react";
import { Platform, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FED36A",
        tabBarInactiveTintColor: "#ffff",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#212832",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 85,
          right: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        key="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="home-outline" size={26} color={color} />
              <Text
                style={{
                  color: color,
                  marginTop: 4,
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calender"
        key="calender"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="calendar-outline" size={26} color={color} />
              <Text
                style={{
                  color: color,
                  marginTop: 4,
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Calendar
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        key="create"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: Platform.OS == "ios" ? -25 : -20,
                height: Platform.OS == "ios" ? 50 : 60,
                width: Platform.OS == "ios" ? 50 : 60,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
                backgroundColor: "#FED36A",
              }}
            >
              <Ionicons name="add" size={26} color="#232533" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        key="notification"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="notifications-outline" size={26} color={color} />
              <Text
                style={{
                  color: color,
                  marginTop: 4,
                  fontSize: 13,
                  fontWeight: "normal",
                }}
              >
                Notification
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        key="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="person-outline" size={26} color={color} />
              <Text
                style={{
                  color: color,
                  marginTop: 4,
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
