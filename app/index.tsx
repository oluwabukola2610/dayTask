import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const index = () => {
  const handleButton = () => {
    router.push("home");
  };
  return (
    <SafeAreaView className="h-full bg-primary">
     <ScrollView
        contentContainerStyle={{ flexGrow: 1 }} 
        className="p-6 gap-y-6"
      >
        <View>
          <Image
            source={require("../assets/images/Group.png")}
            className="w-24 h-24"
            resizeMode="contain"
          />
        </View>
        <View className="bg-[#FFFFFF] rounded-sm ">
          <Image
            source={require("../assets/images/pana.png")}
            className="w-full "
            resizeMode="contain"
          />
        </View>
        <View>
          <Animated.Text className="text-6xl leading-tight w-full  font-medium text-white">
            Manage {"\n"}
            Your {"\n"}Task with <Text className="text-secondary">DayTasK</Text>
          </Animated.Text>
        </View>
        <TouchableOpacity
          onPress={handleButton}
          className="bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center"
        >
          <Text className="text-primary font-semibold text-lg ">
            Get Started
          </Text>

          <Ionicons
            name="chevron-forward"
            size={24}
            color=""
            className="text-black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
