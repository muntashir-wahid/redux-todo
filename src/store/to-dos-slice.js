import { createSlice } from "@reduxjs/toolkit";

const toDosSclice = createSlice({
  name: "toDo",
  initialState: [],
  reducers: {
    addToDo(state, action) {
      state.push(action.payload);
    },
    deleteToDo(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
    updateToDo(state, action) {
      state.forEach((el) => {
        if (el.id === action.payload.id) {
          el.task = action.payload.task;
          el.description = action.payload.description;
        }
      });
    },
  },
});

export const toDoActions = toDosSclice.actions;

export default toDosSclice.reducer;
