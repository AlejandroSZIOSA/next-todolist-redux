import { setInitialList } from "@/utils/redux/todolist";

export const loadSavedTodos = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    // Check if localStorage is available
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const todos = JSON.parse(savedTodos);
      setInitialList(todos);
    }
  } else {
    console.warn("localStorage is not available in this environment.");
  }
};
