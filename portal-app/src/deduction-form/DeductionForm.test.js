import React from "react";
import {render, fireEvent} from '@testing-library/react';
import DeductionForm from "./DeductionForm";

describe('<DeductionForm />', () => {

  const submitDeduction = jest.fn();
  const validNhsNumber = jest.fn(()=>{return''});
  const invalidNhsNumber=  jest.fn(()=>{return'The NHS number is invalid'})
  afterEach(()=>{jest.clearAllMocks()});

  it('should call submitDeduction with nhs number on form submit', () => {

    const {getByText, getByLabelText} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={validNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');
    fireEvent.change(nhsNumberInput, {target: {value: 'some-nhs-number'}});

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(submitDeduction).toHaveBeenCalledWith('some-nhs-number');
  });

  it('should disable submit button if the field of nhs id is empty', () => {

    const {getByText, getByLabelText} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={validNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');
    fireEvent.change(nhsNumberInput, {target: {value: ''}});

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(submitDeduction).not.toHaveBeenCalled();
  });


  it('should not submit the form if NHS number is invalid format', () => {

    const {getByText, getByLabelText} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={invalidNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');

    fireEvent.change(nhsNumberInput, {target: {value: 'invalidId'}});
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(invalidNhsNumber).toHaveBeenCalledWith('invalidId');
    expect(submitDeduction).not.toHaveBeenCalled();
  });

  it('should show error message if NHS number is invalid format', () => {

    const {getByText, getByLabelText, getByTestId} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={invalidNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');

    fireEvent.change(nhsNumberInput, {target: {value: 'invalidId'}});
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    const errorMessage =getByTestId("error");
    expect(invalidNhsNumber).toHaveBeenCalledWith('invalidId');
    expect(errorMessage.textContent).toBe("The NHS number is invalid");
  });
});