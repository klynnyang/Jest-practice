import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("renders button & checks for basic disable/enable button functionality", () => {
  render(<SummaryForm />);
  const btnElement = screen.getByRole("button", {
    name: "Confirm order",
  });

  const checkBoxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  // initial checkbox is not clicked
  expect(checkBoxElement).not.toBeChecked();

  // disabled btnElement upon initial render
  expect(btnElement).toBeDisabled();
});

test("Checkbox disables button on first click & enabled on second", () => {
  render(<SummaryForm />);
  const btnElement = screen.getByRole("button", {
    name: "Confirm order",
  });

  const checkBoxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  // click on the checkbox enabled the button
  userEvent.click(checkBoxElement);
  expect(btnElement).toBeEnabled();

  //click on the checkbox again disabled the button
  userEvent.click(checkBoxElement);
  expect(btnElement).toBeDisabled();
});

test("popover responses to hover", async () => {
  render(<SummaryForm />);
  //query for something not on DOM
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  //popover hidden at initial load
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears when mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when mouseout
  //   await waitForElementToBeRemoved(() =>
  //     screen.queryByText(/no ice cream will actually be delivered/i)
  //   );
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
