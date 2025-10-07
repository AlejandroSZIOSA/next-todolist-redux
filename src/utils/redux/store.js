//1 Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todolist";

// Load todos from localStorage
const loadState = () => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const serializedState = localStorage.getItem("todos");
      return serializedState ? JSON.parse(serializedState) : [];
    }
    return []; // Return an empty array if localStorage is not available
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return [];
  }
};

// Save todos to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.todoList);
    localStorage.setItem("todos", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

//2 Redux Toolkit
export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
  // localStorage
  preloadedState: {
    todoList: loadState(),
  },
});

// Subscribe to store changes to save state
store.subscribe(() => saveState(store.getState()));
