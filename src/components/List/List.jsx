import "./list.css";

export function List({ children, elements }) {
  if (!elements?.length) {
    return (
      <ul data-testid="no-results" className="list-wrapper">
        Nie ma elementów do wyświetlenia
      </ul>
    );
  }

  return (
    <ul data-testid="todo-list" className="list-wrapper">
      {children}
    </ul>
  );
}
