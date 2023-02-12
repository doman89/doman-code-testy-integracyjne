import { Button } from "../Button";

import "./list-element.css";

export function ListElement({ id, label, onRemove }) {
  return (
    <li className="list-element">
      <span data-testid={`todo-${id}`}>{label}</span>
      <Button
        data-id={id}
        data-testid={`remove-button-${id}`}
        variant="remove"
        onClick={onRemove}
      >
        -
      </Button>
    </li>
  );
}
