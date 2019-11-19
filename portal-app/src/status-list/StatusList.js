import React from 'react';

const StatusList = () => {
  return (
    <div data-testid="status-list" className="nhsuk-table__panel-with-heading-tab">
      <h3 className="nhsuk-table__heading-tab">Status of Deduction Requests</h3>
      <div className="nhsuk-table-responsive">
        <table className="nhsuk-table">
          <caption className="nhsuk-table__caption">Other possible causes of your symptoms</caption>
          <thead className="nhsuk-table__head">
            <tr className="nhsuk-table__row">
              <th className="nhsuk-table__header" scope="col">NHS Number</th>
              <th className="nhsuk-table__header" scope="col">Patient Name</th>
              <th className="nhsuk-table__header" scope="col">Requested By</th>
              <th className="nhsuk-table__header" scope="col">Requested Date</th>
              <th className="nhsuk-table__header" scope="col">Request Status</th>
            </tr>
          </thead>
          <tbody className="nhsuk-table__body">
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">5637487498</td>
              <td className="nhsuk-table__cell ">Donald Duck</td>
              <td className="nhsuk-table__cell ">123456789012</td>
              <td className="nhsuk-table__cell ">16/11/2019</td>
              <td className="nhsuk-table__cell ">Pending</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">1343483498</td>
              <td className="nhsuk-table__cell ">Mickey Mouse</td>
              <td className="nhsuk-table__cell ">123456789012</td>
              <td className="nhsuk-table__cell ">15/11/2019</td>
              <td className="nhsuk-table__cell ">Requested</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">4574858758</td>
              <td className="nhsuk-table__cell ">Minnie Mouse</td>
              <td className="nhsuk-table__cell ">876543210123</td>
              <td className="nhsuk-table__cell ">14/11/2019</td>
              <td className="nhsuk-table__cell ">Awaiting Health Record</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">2384374874</td>
              <td className="nhsuk-table__cell ">Goofy</td>
              <td className="nhsuk-table__cell ">876543210123</td>
              <td className="nhsuk-table__cell ">14/11/2019</td>
              <td className="nhsuk-table__cell ">Error</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">2384374478</td>
              <td className="nhsuk-table__cell ">Pluto</td>
              <td className="nhsuk-table__cell ">123456789012</td>
              <td className="nhsuk-table__cell ">13/11/2019</td>
              <td className="nhsuk-table__cell ">Awaiting Health Record</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">3384374774</td>
              <td className="nhsuk-table__cell ">Tinker Bell</td>
              <td className="nhsuk-table__cell ">876543210123</td>
              <td className="nhsuk-table__cell ">12/11/2019</td>
              <td className="nhsuk-table__cell ">Completed</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">1198437472</td>
              <td className="nhsuk-table__cell ">Cruella de Vil</td>
              <td className="nhsuk-table__cell ">123456789012</td>
              <td className="nhsuk-table__cell ">10/11/2019</td>
              <td className="nhsuk-table__cell ">Error</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">1198437472</td>
              <td className="nhsuk-table__cell ">Daisy Duck</td>
              <td className="nhsuk-table__cell ">123456789012</td>
              <td className="nhsuk-table__cell ">10/11/2019</td>
              <td className="nhsuk-table__cell ">Completed</td>
            </tr>
            <tr className="nhsuk-table__row">
              <td className="nhsuk-table__cell">7658437471</td>
              <td className="nhsuk-table__cell ">Captain Hook</td>
              <td className="nhsuk-table__cell ">876543210123</td>
              <td className="nhsuk-table__cell ">05/11/2019</td>
              <td className="nhsuk-table__cell ">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusList;