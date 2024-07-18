import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/Store";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
const TaskDetails = () => {
  const params = useLocalSearchParams();
  const task = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === params.id)
  );

  if (!task) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl text-white">Task not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        className="p-6 gap-y-6"
      >
        <View className="p-4 flex-1 bg-primary">
          <Text className="text-xl font-bold text-white">{task.name}</Text>
          <Text className="text-lg text-gray-200 mt-2">{task.description}</Text>
          <Text className="text-lg text-gray-200 mt-2">{task.category}</Text>
          <Text className="text-lg text-gray-200 mt-2">{task.startDate}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetails;
