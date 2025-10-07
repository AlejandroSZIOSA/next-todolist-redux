import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); //works!
    },
    updateTask: (state, action) => {
      const updatedItem = action.payload; //problem fixed It!
      const index = state.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state[index] = updatedItem;
      }
    },
    removeTask: (state, action) => {
      const todoId = action.payload;
      //problem Fixed!
      return (state = state.filter((item) => item.id !== todoId));
    },
    resetList: (state) => {
      return [];
    },
    setInitialList: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { addTask, removeTask, updateTask, resetList, setInitialList } =
  todoListSlice.actions; //destructuring reducers

export default todoListSlice.reducer;
