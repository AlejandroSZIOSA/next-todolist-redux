import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    setTaskStatus: (state, action) => {
      state.done = action.payload.done;
    },
  },
});

export const { addTask, setTaskStatus, removeTask } = todoListSlice.actions; //destructuring reducers

export default todoListSlice.reducer;
