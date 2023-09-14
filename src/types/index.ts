
export interface TodoType {
  id: number | string;
  title: string;
  status: boolean;
}

export interface PropsType {
  compleatTodos: number;
  todos: number;
}

export interface TodoSliceType {
  data: TodoType[];
  isLoading: boolean;
}