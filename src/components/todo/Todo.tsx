import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { deleteTodo, onEditTodo, onStatusChange } from "../../redux/todoSlice";
import { TodoType } from "../../types";
import css from "./Todo.module.css";


const Todo: FC<TodoType> = (props) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState<string>(props.title);

  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(props.id));
  };

  const handleStatus = () => {
    dispatch(onStatusChange(props.id));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onEditTodo({ id: props.id, inputValue }));
    setEdit(false);
  };

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input
            value={inputValue}
            className="editInput"
            onChange={handleInput}
            type="text"
          />
          <button className="editBtn" type="submit">
            Save
          </button>
        </form>
      ) : (
        <label>
          <input
            checked={props.status}
            onChange={handleStatus}
            type="checkbox"
          />
          <p className={props.status ? css.compleat : ""}>{props.title}</p>
        </label>
      )}
      <div>
        <button onClick={handleEdit} className="mainBtn">
          Edit
        </button>
        <button onClick={handleDelete} className="mainBtn">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
