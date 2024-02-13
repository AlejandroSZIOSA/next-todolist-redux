//1
import { configureStore } from "@reduxjs/toolkit";

//2
export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

import todoListReducer from "./todolist";
