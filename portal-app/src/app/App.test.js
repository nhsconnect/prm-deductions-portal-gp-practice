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

  it('should go to the confirmation page when deductions form is submitted', () => {
    const {getByTestId, getByLabelText, getByText} = render(
      <MemoryRouter initialEntries={["/"]}>
        <App/>
      </MemoryRouter>
    );

    expect(getByTestId("deduction-form")).toBeTruthy();

    const nhsNumberInput = getByLabelText('NHS Number');
    fireEvent.change(nhsNumberInput, {target: {value: 'some-nhs-number'}});

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(getByTestId("confirmation")).toBeTruthy();
  });
});
