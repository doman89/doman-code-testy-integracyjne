import { act, renderHook } from "@testing-library/react";

import { useTodo } from "./useTodo";

describe("testing useTodo hook", () => {
  it("should have an empty array at the beginning", () => {
    const { result } = renderHook(useTodo);

    expect(result.current.todos).toEqual([]);
  });

  it("should add todo", () => {
    const { result } = renderHook(useTodo);
    const time = Date.now();

    result.current.inputRef.current = {value: "Doman Code"};

    act(() => result.current.addTodo());
    expect(result.current.todos).toEqual([{
      id: time,
      label: "Doman Code",
    }]);
  });

  it("should remove todo", () => {
    const { result } = renderHook(useTodo);
    const time = Date.now();

    result.current.inputRef.current = {value: "Doman Code"};

    act(() => result.current.addTodo());
    act(() => result.current.removeTodo({currentTarget: {dataset: {id: time}}}));

    expect(result.current.todos).toEqual([]);
  });
});

jest.useFakeTimers().setSystemTime(new Date("2016-04-02"));