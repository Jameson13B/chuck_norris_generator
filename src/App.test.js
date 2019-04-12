import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";

test("renders correct name/placeholder combo for first", () => {
  const { getByPlaceholderText } = render(
    <input name="custFirst" placeholder="First Name" />
  );
  const input = getByPlaceholderText("First Name");
  expect(input).toHaveAttribute("name", "custFirst");
});
it("renders correct name/placeholder combo for last", () => {
  const { getByPlaceholderText } = render(
    <input name="custLast" placeholder="Last Name" />
  );
  const input = getByPlaceholderText("Last Name");
  expect(input).toHaveAttribute("name", "custLast");
});
