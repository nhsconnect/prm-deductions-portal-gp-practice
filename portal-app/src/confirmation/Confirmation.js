import React from "react";
import {Link} from "react-router-dom";

const Confirmation = ({confirmDeduction}) => (
  <div data-testid="confirmation">
    <dl className="nhsuk-summary-list">
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key">NHS Number</dt>
        <dd className="nhsuk-summary-list__value">1234567890</dd>
      </div>
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key">Name</dt>
        <dd className="nhsuk-summary-list__value">Sarah Philips</dd>
      </div>
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key">Date of birth</dt>
        <dd className="nhsuk-summary-list__value">5 January 1978</dd>
      </div>
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key">Current GP Practice</dt>
        <dd className="nhsuk-summary-list__value">GP Practice 1</dd>
      </div>
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key">Contact details</dt>
        <dd className="nhsuk-summary-list__value">
          <p className="nhsuk-body">07700 900457</p>
          <p className="nhsuk-body">sarah.phillips@example.com</p>
        </dd>
      </div>
    </dl>
    <button className="nhsuk-button" onClick={() => confirmDeduction()}>
      Confirm
    </button>
    <div className="nhsuk-back-link">
      <Link className="nhsuk-back-link__link" to="/home">
        <svg
          className="nhsuk-icon nhsuk-icon__chevron-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"/>
        </svg>
        Go back
      </Link>
    </div>
  </div>
);

export default Confirmation;
