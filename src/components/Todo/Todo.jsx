import { useRef, useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { List } from "../List";
import { ListElement } from "../ListElement";

import "./todo.css";
import { useTodo } from "./useTodo";

export function Todo({ "data-testid": dataTestId }) {
  const { 
    addTodo, 
    inputRef, 
    removeTodo,
    todos 
  } = useTodo();

  const rows = todos.map((element) => (
    <ListElement
      key={element.id}
      {...element}
      onRemove={removeTodo}
    />
  ));

  return (
    <div className="wrapper" data-testid={dataTestId}>
      <div className="row">
        <Input data-testid="input" ref={inputRef} />
        <Button
          data-testid="add-button"
          variant="add"
          onClick={addTodo}
        >
          +
        </Button>
      </div>
      <List elements={rows}>{rows}</List>
    </div>
  );
}
