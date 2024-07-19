import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
    <ScrollView
       contentContainerStyle={{ flexGrow: 1 }} 
       className="p-6 gap-y-6"
     >
        <Text>calender</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
