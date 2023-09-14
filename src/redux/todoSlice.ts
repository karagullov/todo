import { TodoSliceType } from './../types/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types";


const datas = JSON.parse(localStorage.getItem("todos")) || [];
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: datas,
    isLoading: true,
  } as TodoSliceType,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.data.push({
        id: Date.now(),
        title: action.payload,
        status: false,
      });
    },
    deleteTodo: (state, { payload }: PayloadAction<string | number>) => {
      state.data = state.data.filter((el: TodoType) => el.id !== payload);
    },
    onStatusChange: (state, { payload }: PayloadAction<string | number>) => {
      state.data = state.data.map((item: TodoType) => {
        if (item.id === payload) {
          return { ...item, status: !item.status };
        }
        return item;
      });
    },
    onEditTodo: (
      state,
      { payload }: PayloadAction<{ id: number | string; inputValue: string }>
    ) => {
      state.data = state.data.map((item: TodoType) => {
        if (item.id === payload.id) {
          return { ...item, title: payload.inputValue };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, onStatusChange, onEditTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;