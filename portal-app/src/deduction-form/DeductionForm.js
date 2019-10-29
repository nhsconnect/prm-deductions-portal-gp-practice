import React, {useState} from 'react';

const DeductionForm = ({submitDeduction}) => {
  const [nhsNumber, setNhsNumber] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    submitDeduction(nhsNumber);
  };

  return (
    <form data-testid="deductions-form" onSubmit={onSubmit}>
      <div className="nhsuk-form-group">
        <label className="nhsuk-label" htmlFor="nhs-number">
          NHS Number
        </label>
        <input className="nhsuk-input" id="nhs-number" name="nhs-number" type="text" onChange={event => setNhsNumber(event.target.value)}/>
      </div>
      <button className="nhsuk-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default DeductionForm;
