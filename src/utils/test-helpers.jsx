import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cloneElement } from "react";

export function snapshotComponent(component) {
  const { asFragment, getByTestId } = render(
    cloneElement(component, {
      "data-testid": "test",
    }),
  );

  const renderedComponent = getByTestId("test");

  expect(renderedComponent).toBeDefined();
  expect(asFragment()).toMatchSnapshot();
}

export function renderComponent(component) {
  const user = userEvent.setup();

  render(component);

  return { screen, user };
}

export function mockDateNow(time) {
  jest.spyOn(global.Date, "now").mockImplementation(() => time);
}
