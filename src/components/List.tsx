// import { EmptyList } from "./EmptyList";
import { ItemList } from "./ItemList";
import styles from "./List.module.css";
import { Todo } from "../App";
import { EmptyList } from "./EmptyList";

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleCkeck: (id: number) => void;
}

export function List({ todos, handleDelete, handleCkeck }: Props) {
  const completed = todos.filter((todo) => todo.stauts === true).length;
  const created = todos.length - completed;

  return (
    <div className={styles.listContainer}>
      <header>
        <div>
          <span className={styles.created}> Tarefas criadas</span>
          <span className={styles.counter}>{created}</span>
        </div>
        <div>
          <span className={styles.completed}> Concluídas</span>
          <span className={styles.counter}>{completed}</span>
        </div>
      </header>

      {todos.length === 0 ? (
        <EmptyList />
      ) : (
        <ul>
          {todos.map((todo) => (
            <ItemList
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleCkeck={handleCkeck}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
