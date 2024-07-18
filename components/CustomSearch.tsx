import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useState } from "react";

const CustomSearch = () => {
  const [searchquery, setSearchquery] = useState("");

  return (
    <View className="bg-[#455A64] h-14 px-4 border-black-200 rounded-2xl w-full border focus:border-secondary flex items-center flex-row">
      <TextInput
        className="text-base text-white font-pregular mt-0.5 flex-1 "
        value={searchquery}
        placeholder="Search for task.."
        placeholderTextColor="#c3c5c8"
        onChangeText={(e: any) => setSearchquery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (searchquery === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );
        }}
      >
        <Ionicons name="search" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearch;
