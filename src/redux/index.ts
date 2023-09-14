import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.data));
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;