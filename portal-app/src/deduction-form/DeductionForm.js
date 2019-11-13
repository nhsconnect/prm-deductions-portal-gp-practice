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
          className="nhsuk-input"
          id="nhs-number"
          name="nhs-number"
          type="text"
          onChange={event => setNhsNumber(event.target.value)}
        />
      </div>
      <button className="nhsuk-button" type="submit" disabled={isEmpty(nhsNumber)}>
        Submit
      </button>
      <div data-testid="error">
        {error}
      </div>
    </form>
  );
};

export default DeductionForm;
