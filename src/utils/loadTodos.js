import { store } from "@/utils/redux/store";
import { setInitialList } from "@/utils/redux/todolist"; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";

export const loadTodos = () => {
  const { dispatch } = store; // Access dispatch from the store
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
