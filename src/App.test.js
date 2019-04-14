import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import App from "./App";
import { debug } from "util";

afterEach(cleanup);

// App
describe("App Tests", () => {
  test("renders joke when App mounts", async () => {
    const { getByTestId } = render(<App />);
    // Create variables
    const joke = await waitForElement(() => getByTestId("joke-content"));
    // Run and check test
    expect(joke).toBeTruthy();
  });
});
// Elements
describe("Element Tests", () => {
  test("renders correct name/placeholder combo for first", () => {
    const { getByPlaceholderText } = render(
      <input name="custFirst" placeholder="First Name" />
    );
    // Create variables
    const input = getByPlaceholderText("First Name");
    // Run and check test
    expect(input).toHaveAttribute("name", "custFirst");
  });

  test("renders correct name/placeholder combo for last", () => {
    const { getByPlaceholderText } = render(
      <input name="custLast" placeholder="Last Name" />
    );
    // Create variables
    const input = getByPlaceholderText("Last Name");
    // Run and check test
    expect(input).toHaveAttribute("name", "custLast");
  });

  test("renders customize modal when customize btn is clicked", async () => {
    const { getByTestId } = render(<App state={{ settings: false }} />);
    // Create variables
    const button = getByTestId("custom-btn");
    // Run and check test
    fireEvent.click(button);
    const modal = getByTestId("custom-modal");
    await expect(modal).toBeTruthy();
  });
});
