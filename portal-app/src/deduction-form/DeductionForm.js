import React, {useState} from 'react';

const DeductionForm = ({submitDeduction, validateNhsNumber}) => {
  const [nhsNumber, setNhsNumber] = useState("");
  const [error, setError] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const result = validateNhsNumber(nhsNumber);
    if(result.length>0){
      setError(result)
    }else{
      submitDeduction(nhsNumber);
    }
  };

  const isEmpty = value =>{
    return !value
  };

  return (
    <form data-testid="deduction-form" onSubmit={onSubmit}>
      <div className="nhsuk-form-group">
        <label className="nhsuk-label" htmlFor="nhs-number">
          NHS Number
        </label>
        <input
          className={error ? "nhsuk-input nhsuk-input--error" : "nhsuk-input"}
          id="nhs-number"
          name="nhs-number"
          type="text"
          onChange={event => setNhsNumber(event.target.value)}
        />
      </div>

      <span className="nhsuk-error-message" data-testid="error">
        {error}
      </span>
      <button className="nhsuk-button" type="submit" disabled={isEmpty(nhsNumber)}>
        Submit
      </button>
    </form>
  );
};

export default DeductionForm;
