import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); //works!
    },
    updateTask: (state, action) => {
      /*   console.log(task); */
      const updatedItem = action.payload;
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
  },
});

export const { addTask, removeTask, updateTask } = todoListSlice.actions; //destructuring reducers

export default todoListSlice.reducer;
