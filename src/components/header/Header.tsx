import { PropsType } from "../../types";
import css from "./Header.module.css";


const Header: React.FC<PropsType> = (props) => {
  return (
    <header className={css.wrapper}>
      <h1>
        Todos ({props.compleatTodos} / {props.todos})
      </h1>
    </header>
  );
};

export default Header;
