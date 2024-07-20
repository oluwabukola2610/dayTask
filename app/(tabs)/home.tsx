import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Trending from "@/components/customs/Trending";
import { router, useNavigation, useRouter } from "expo-router";
import CustomSearch from "@/components/CustomSearch";
import CompletedTask from "@/components/CompletedTask";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/services/Store";
import { removeTodo, toggleTodo } from "@/services/TodoSlice";
import { FontAwesome } from "@expo/vector-icons";
const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const completedTasks = todos.filter((task) => task.completed);
  const { push } = useRouter();
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={todos ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="my-6 px-4 ">
            <Text className="text-lg font-pregular text-gray-100 mb-1">
              All Tasks
            </Text>
            <View className=" space-y-4">
              <TouchableOpacity
                onPress={() => push(`/details/${item.id}`)}
                className="bg-[#455A64] h-14 px-4 border-black-200 rounded-2xl w-full border focus:border-secondary flex items-center flex-row justify-between"
              >
                <Text className="text-lg font-pregular text-gray-100 mb-1">
                  {item.name}
                </Text>
                {/* <Text>{item?.startDate}</Text> */}
                <View className="flex flex-row space-x-3 items-center">
                  <TouchableOpacity
                    onPress={() => handleToggle(item.id)}
                    disabled={item.completed}
                  >
                    {item.completed ? (
                      <FontAwesome
                        name="check-square-o"
                        size={24}
                        color="#FED36A"
                      />
                    ) : (
                      <FontAwesome name="square-o" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <FontAwesome name="trash-o" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className=" my-6 px-4 space-y-12">
            <View className="">
              <Text className="font-semibold text-lg text-gray-100 mb-6">
                Welcome Back
              </Text>
              <CustomSearch />
            </View>
            <View className="w-full flex-1 ">
              {completedTasks && (
                <Text className="text-xl font-semibold text-gray-100 mb-4">
                  Completed Tasks
                </Text>
              )}
              <CompletedTask data={completedTasks} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex justify-center items-center px-4">
            <Image
              source={require("../../assets/images/empty.png")}
              resizeMode="contain"
              className="w-[270px] h-[216px]"
            />

            <Text className="text-xl text-center font-psemibold text-white mt-2">
              No Task created yet
            </Text>
          </View>
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onrefesh} />
        // }
      />
    </SafeAreaView>
  );
};

export default Home;
