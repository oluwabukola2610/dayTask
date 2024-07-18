import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";



interface Todo {
  id: string;
  name: string;
  category: string;
  description: string;
  startDate: string;
  completed: boolean;
  completedAt?: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push({ ...action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, name, category, description, startDate } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
        todoToUpdate.category = category;
        todoToUpdate.description = description;
        todoToUpdate.startDate = startDate;
      }
    },
  },
 
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
