import { RootState } from "@/services/Store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DefaultValues = {
  category: "",
  name: "",
  description: "",
  startDate: new Date(),
};

export const formatDate = (dob: Date) => {
  const date = new Date(dob);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
// export const saveTodos = async (todos: any) => {
//   await AsyncStorage.setItem("todos", JSON.stringify(todos));
// };
// export const loadTodos = async () => {
//   const storedTodos = await AsyncStorage.getItem("todos");
//   return storedTodos ? JSON.parse(storedTodos) : [];
// };

export type RootStackParamList = {
  index: undefined;
  tabs: undefined;
  details: { taskId: string };
};

