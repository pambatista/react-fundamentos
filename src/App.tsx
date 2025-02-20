import React, { useState } from "react";

import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";

export interface Todo {
  id: number;
  title: string;
  stauts: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function handleCkeck(id: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.stauts = !todo.stauts;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <Header />
      <main className={styles.appContainer}>
        <Form handleAdd={handleAdd} />
        <List
          todos={todos}
          handleDelete={handleDelete}
          handleCkeck={handleCkeck}
        />
      </main>
    </div>
  );
}

export default App;
