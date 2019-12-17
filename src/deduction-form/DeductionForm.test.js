import React from "react";
import {render, fireEvent} from '@testing-library/react';
import DeductionForm from "./DeductionForm";

describe('<DeductionForm />', () => {

  const submitDeduction = jest.fn();
  const validNhsNumber = jest.fn(()=>{return''});
  const invalidNhsNumber=  jest.fn(()=>{return'No Patient found with that NHS Number'});
  const noMatchNhsNumber = jest.fn(() => "Patient is not in your practice");
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
    expect(errorMessage.textContent).toBe("No Patient found with that NHS Number");
  });

  it('should show error message if the patient is not from the same organisation as the user', () => {

    const {getByText, getByLabelText, getByTestId} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={noMatchNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');

    fireEvent.change(nhsNumberInput, {target: {value: '90192843274372932'}});
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    const errorMessage =getByTestId("error");

    expect(noMatchNhsNumber).toHaveBeenCalledWith('90192843274372932');
    expect(errorMessage.textContent).toBe("Patient is not in your practice");
  });

  it('should not show error message if the patient is from the same organisation as the user', () => {

    const {getByText, getByLabelText, getByTestId} = render(<DeductionForm submitDeduction={submitDeduction} validateNhsNumber={validNhsNumber}/>);
    const nhsNumberInput = getByLabelText('NHS Number');

    fireEvent.change(nhsNumberInput, {target: {value: '0192843274372932'}});
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    const errorMessage =getByTestId("error");

    expect(validNhsNumber).toHaveBeenCalledWith('0192843274372932');
    expect(errorMessage.textContent).toBe("");
  });
});