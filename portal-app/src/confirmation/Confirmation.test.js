import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Confirmation from "./Confirmation";
import { MemoryRouter } from "react-router-dom";

describe("<Confirmation />", () => {
  it("should call confirmDeduction when confirm button is clicked", () => {
    const confirmDeduction = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Confirmation confirmDeduction={confirmDeduction} />
      </MemoryRouter>
    );

    const confirmButton = getByText("Confirm");
    fireEvent.click(confirmButton);

    expect(confirmDeduction).toHaveBeenCalled();
  });
});
