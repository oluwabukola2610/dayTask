import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const notification = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <Text>Notification</Text>
    </SafeAreaView>
  );
};

export default notification;
