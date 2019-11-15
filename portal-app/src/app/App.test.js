import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

describe('<App />', () => {
  it('should render the header', () => {
    const {getByTestId} = render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    expect(getByTestId("header")).toBeTruthy();
  });

  it('should render the login component', () => {
    const {getByTestId} = render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    expect(getByTestId("login")).toBeTruthy();
  });

  it('should go to the confirmation page when deductions form is submitted', () => {
    const {getByTestId, getByLabelText, getByText} = render(
      <MemoryRouter initialEntries={["/home"]}>
        <App/>
      </MemoryRouter>
    );

    expect(getByTestId("deduction-form")).toBeTruthy();

    const nhsNumberInput = getByLabelText('NHS Number');
    fireEvent.change(nhsNumberInput, {target: {value: '12345678901'}});

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(getByTestId("confirmation")).toBeTruthy();
  });

  it("should go to the success page when the confirm button is clicked on confirmation page", () => {
    const {getByTestId, getByText} = render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <App/>
      </MemoryRouter>
    );

    expect(getByTestId("confirmation")).toBeTruthy();

    const confirmButton = getByText("Confirm");
    fireEvent.click(confirmButton);

    expect(getByTestId("success")).toBeTruthy();
  });

  it("should go back to the deduction form when the back button is clicked on confirmation page", () => {
    const {getByTestId, getByText} = render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <App/>
      </MemoryRouter>
    );

    expect(getByTestId("confirmation")).toBeTruthy();

    const backButton = getByText("Go back");
    fireEvent.click(backButton);

    expect(getByTestId("deduction-form")).toBeTruthy();
  });

});
