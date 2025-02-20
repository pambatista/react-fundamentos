import React, { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Form.module.css";

interface Props {
  handleAdd: (todo: { id: number; title: string; stauts: boolean }) => void;
}

export function Form({ handleAdd }: Props) {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAdd({ id: Date.now(), title: newTodo, stauts: false });
    setNewTodo("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChange}
        value={newTodo}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
