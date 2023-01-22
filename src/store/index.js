import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./to-dos-slice";

const store = configureStore({ reducer: toDoReducer });

export default store;
