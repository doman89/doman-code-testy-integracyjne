import { mockDateNow, renderComponent, snapshotComponent } from "../../utils/test-helpers";

import { Todo } from "./Todo";
import * as useTodoMock from "./useTodo";

describe("<Todo />", () => {
  describe("integration", () => {
    it("should work as expected", async () => {
      mockDateNow(1);
      const { screen, user } = renderComponent(<Todo />);
      const button = screen.getByTestId("add-button");
      const input = screen.getByTestId("input");

      expect(screen.getByTestId("no-results")).toBeInTheDocument();

      await user.type(input, "Doman Code");
      await user.click(button);

      const label = await screen.findByTestId("todo-1");

      expect(label).toHaveTextContent("Doman Code");

      const removeButton = screen.getByTestId("remove-button-1");

      await user.click(removeButton);

      expect(screen.getByTestId("no-results")).toBeInTheDocument();
    });
  });

  describe("only UI testing", () => {
    beforeEach(() => {
      mockUseTodo();
    });

    it("should match snapshot without data", () => {
      snapshotComponent(<Todo />);
    });

    it("should match snapshot with data", () => {
      mockUseTodo({
        todos: [
          { id: "test", label: "test" },
          { id: "Doman", label: "Doman Code" },
        ]
      });
      snapshotComponent(<Todo />);
    });

    it("should call addTodo function when '+' button has been clicked", async () => {
      const addTodo = jest.fn();

      mockUseTodo({
        addTodo,
      });

      const { screen, user } = renderComponent(<Todo />);
      const button = screen.getByTestId("add-button");

      await user.click(button);

      expect(addTodo).toHaveBeenCalled();
    });

    it("should call removeTodo function when '-' button has been clicked", async () => {
      const removeTodo = jest.fn();

      mockUseTodo({
        todos: [{ id: 1 }],
        removeTodo,
      });

      const { screen, user } = renderComponent(<Todo />);
      const button = screen.getByTestId("remove-button-1");

      await user.click(button);

      expect(removeTodo).toHaveBeenCalled();
    });

    it("should have correct label base on data in todo array", () => {
      mockUseTodo({
        todos: [{ id: 1, label: "Doman Code" }],
      });

      const { screen } = renderComponent(<Todo />);
      const label = screen.getByTestId("todo-1");

      expect(label).toBeInTheDocument();
    });

    it("should have value in input after user interaction", async () => {
      const { screen, user } = renderComponent(<Todo />);
      const input = screen.getByTestId("input");

      await user.type(input, "Doman Code");

      expect(input).toHaveValue("Doman Code");
    });

    it("should show information about lack of data when array is empty", () => {
      const { screen } = renderComponent(<Todo />);
      const noResult = screen.getByTestId("no-results");

      expect(noResult).toBeInTheDocument();
    });

    it("should render all elements", () => {
      mockUseTodo({
        todos: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
        ],
      });
      const { screen } = renderComponent(<Todo />);
      const list = screen.getByTestId("todo-list");

      expect(list.childElementCount).toBe(5);
    });
  });
});

const useTodoMockData = { 
  addTodo: jest.fn(), 
  inputRef: { current: null }, 
  removeTodo: jest.fn(),
  todos: [],
}

function mockUseTodo(mockData) {
  jest.spyOn(useTodoMock, "useTodo").mockImplementation(() => ({
    ...useTodoMockData,
    ...mockData,
  }));
}