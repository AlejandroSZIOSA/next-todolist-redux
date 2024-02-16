import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); //works!
    },
    updateTask: (state, action) => {
      const task = action.payload;
      /*   console.log(task); */

      state.map((task) => console.log(task.id, task.title));
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
