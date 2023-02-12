import { useState, useRef } from "react";

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    if (!inputRef.current) {
      return;
    }

    const label = inputRef.current.value;

    setTodos((prev) =>
      prev.concat([{ id: Date.now(), label }]),
    );
    inputRef.current.value = "";
  };

  const removeTodo = ({ currentTarget }) => {
    const { id } = currentTarget.dataset;

    setTodos((prev) =>
      prev.filter((todo) => todo.id !== Number(id)),
    );
  };

  return { 
    addTodo, 
    inputRef, 
    removeTodo,
    todos 
  }
}