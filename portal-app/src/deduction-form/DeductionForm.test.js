import React from "react";
import {render, fireEvent} from '@testing-library/react';
import DeductionForm from "./DeductionForm";

describe('<DeductionForm />', () => {
  it('should call submitDeduction with nhs number on form submit', () => {
    const submitDeduction = jest.fn();
    const {getByText, getByLabelText} = render(<DeductionForm submitDeduction={submitDeduction} />);

    const nhsNumberInput = getByLabelText('NHS Number');
    fireEvent.change(nhsNumberInput, {target: {value: 'some-nhs-number'}});

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(submitDeduction).toHaveBeenCalledWith('some-nhs-number');
  });
});