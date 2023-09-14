import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import css from "./CreateTodo.module.css";

const CreateTodo: FC = () => {
  const [inputValue, setInputValue] = useState("");
   
  const dispatch = useDispatch()
  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue) {
      dispatch( addTodo(inputValue) )
      setInputValue('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={submit} className={css.wrapper}>
      <input value={inputValue} onChange={handleChange} className="mainInput" placeholder="Add some todo" type="text" />
      <button className="mainBtn">+Add</button>
    </form>
  );
};

export default CreateTodo;