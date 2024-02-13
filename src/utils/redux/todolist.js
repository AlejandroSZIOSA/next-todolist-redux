import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [
    {
      id: 0,
      title: "",
      done: false,
    },
  ],
  reducers: {
    addTask: (state, action) => {
      state.id = 1;
      state.title = action.payload.title;
      state.done = false; //redux
    },
    /*   removeTask: (state, action) => {
      state.loggedIn = false;
      state.username = null;
    }, */
    setTaskStatus: (state, action) => {
      state.done = action.payload.done;
    },
  },
});

export const { addTask } = todoListSlice.actions;

export default todoListSlice.reducer;
