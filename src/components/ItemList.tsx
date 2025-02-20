import { Trash } from "@phosphor-icons/react";

import styles from "./ItemList.module.css";
import { Todo } from "../App";

interface Props {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleCkeck: (id: number) => void;
}

export function ItemList({ todo, handleDelete, handleCkeck }: Props) {
  return (
    <li className={styles.itemList}>
      <input type="checkbox" onChange={() => handleCkeck(todo.id)} />

      <span className={todo.stauts ? styles.completed : ""}>{todo.title}</span>

      <button onClick={() => handleDelete(todo.id)}>
        <Trash size={16} />
      </button>
    </li>
  );
}
