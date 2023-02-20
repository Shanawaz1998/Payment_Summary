import React from 'react'
import DisplayeGrid from './DisplayeGrid';

export default function DisplayPaymentRprt(props) {
  let dateRange = `${props.beginDate} - ${props.endDate}`;
  return (
    <div className='App'>
      <fieldset>
          Rebate Program : <input type="text" value={props.program} disabled/>
          Time Period : <input type="text" value={props.time} disabled/>
          Rebate Option : <input type="text" value={props.option} disabled/>
          Date range : <input type="text" value={dateRange}  disabled/>
      </fieldset>
      <DisplayeGrid/>
    </div>
  )
}
