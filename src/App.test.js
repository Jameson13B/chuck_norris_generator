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

afterEach(cleanup);

// App
test("renders joke when App mounts", async () => {
  const { getByTestId } = render(<App />);
  const joke = await waitForElement(() => getByTestId("joke-content"));
  expect(joke).toBeTruthy();
});
// Elements
test("renders correct name/placeholder combo for first", () => {
  const { getByPlaceholderText } = render(
    <input name="custFirst" placeholder="First Name" />
  );
  const input = getByPlaceholderText("First Name");
  expect(input).toHaveAttribute("name", "custFirst");
});

test("renders correct name/placeholder combo for last", () => {
  const { getByPlaceholderText } = render(
    <input name="custLast" placeholder="Last Name" />
  );
  const input = getByPlaceholderText("Last Name");
  expect(input).toHaveAttribute("name", "custLast");
});

// test("renders new joke when new btn is clicked", async () => {
//   const { getByText, getByTestId, debug } = render(<App />);
//   const joke1 = await waitForElement(() => getByTestId("joke-content"));
//   const button = getByTestId("new-btn");
//   expect(button).toHaveAttribute("className", "new-btn");
//   // debug();
//   // // expect(button).toHaveTextContent("New");
//   // fireEvent.click(button);
//   // // debug();
//   // const joke2 = await waitForElement(() => getByTestId("joke-content"));
//   // expect(joke2.innerHTML).not.toBe(joke1.innerHTML);
// });

const handleNew = () => {
  let url = "https://api.icndb.com/jokes/random/";
  if (this.state.custFirst !== "") {
    url = `https://api.icndb.com/jokes/random/?firstName=${
      this.state.custFirst
    }&lastName=${this.state.custLast}`;
  }
  this.handleAxios(url);
};
