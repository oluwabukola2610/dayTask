import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const calender = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        className="p-6 gap-y-6"
      >
        <Text>calender</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default calender;
