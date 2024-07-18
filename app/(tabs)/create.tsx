import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { schema } from "@/constants/Validation";
import { DefaultValues, formatDate } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTodo } from "@/services/TodoSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";

const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...DefaultValues,
    },
  });
  const dispatch = useDispatch();
  const { push } = useRouter();
  const onSubmit = async (data: any) => {
    const formattedData = {
      ...data,
      startDate: formatDate(data.startDate),
    };
    dispatch(addTodo({ id: uuidv4() as string, ...formattedData }));
    reset();
    push("home");
  };
  const currentDate = new Date();
  return (
    <SafeAreaView className="bg-primary h-full pt-10 px-4 space-y-8">
      <View className=" items-start">
        <Text className="font-semibold text-base text-gray-200 mb-4">
          Title
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="bg-[#455A64] h-14 px-4 border-black-200 rounded-2xl w-full border focus:border-secondary flex items-center flex-row">
              <TextInput
                className="text-base text-white font-psemibold flex-1"
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter Title"
                placeholderTextColor="#7B7B8B"
              />
            </View>
          )}
          name="name"
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}
      </View>
      <View className="space-y-2">
        <Text className="font-semibold text-base text-gray-200 mb-4">
          Task Category
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="bg-[#455A64] h-14 px-4 border-black-200 rounded-2xl w-full border focus:border-secondary flex items-center flex-row">
              <TextInput
                className="text-base text-white font-psemibold flex-1"
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter category"
                placeholderTextColor="#7B7B8B"
              />
            </View>
          )}
          name="category"
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}
      </View>
      <View className="mb-10">
        <Text className="font-semibold text-base text-gray-200 mb-4">
          Start Date
        </Text>
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              testID="dateTimePicker"
              value={value }
              display="calendar"
              mode="date"
              minimumDate={currentDate}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || value;
                onChange(currentDate);
              }}
            />
          )}
        />
      </View>
      <View className="space-y-2">
        <Text className="font-semibold text-base text-gray-200 mb-4">
          {" "}
          Description
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="bg-[#455A64] h-14 px-4 border-black-200 rounded-2xl w-full border focus:border-secondary flex items-center flex-row">
              <TextInput
                className="text-base text-white font-psemibold flex-1"
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter Name"
                placeholderTextColor="#7B7B8B"
                multiline
              />
            </View>
          )}
          name="description"
          defaultValue=""
        />
        {errors.description && (
          <Text style={{ color: "red" }}>{errors.description.message}</Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center"
      >
        <Text className="text-primary font-semibold text-lg ">Add Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Form;
