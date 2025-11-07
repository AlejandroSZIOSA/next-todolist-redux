import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); //works!
    },
    updateTodo: (state, action) => {
      const updatedItem = action.payload; //problem fixed It!
      const index = state.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state[index] = updatedItem;
      }
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      //problem Fixed!
      return (state = state.filter((item) => item.id !== todoId));
    },
    resetTodoList: (state) => {
      return [];
    },
    setInitialList: (state, action) => {
      return [...action.payload];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  resetTodoList,
  setInitialList,
} = todoListSlice.actions; //destructuring reducers

export default todoListSlice.reducer;
