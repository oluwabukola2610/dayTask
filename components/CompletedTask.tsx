import { FC, useState } from "react";
import { FlatList, Text, View, ViewToken } from "react-native";
type Task = {
  id: string;
  name: string;
  category: string;
  description: string;
  startDate: string;
  completed: boolean;
};

type DataProps = {
  data: Task[];
};

const CompletedTask: React.FC<DataProps> = ({ data }) => {
  return (
    <FlatList
      data={data ?? []}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className=" flex px-2 ">
          <View className="space-y-2 bg-secondary/50 px-5 py-4 rounded-md w-[300px]">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-white ">
                {item.name}
              </Text>
              <Text className="text-xs text-gray-100 ">{item.startDate}</Text>
            </View>
            <Text className=" font-medium text-gray-100 mb-1">
              {item.category}
            </Text>
            <View className="">
              <Text className="text-sm text-gray-100 ">{item.description}</Text>
            </View>
          </View>
        </View>
      )}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
      ListEmptyComponent={() => (
        <View className="flex justify-center items-center px-4"></View>
      )}
    />
  );
};

export default CompletedTask;
