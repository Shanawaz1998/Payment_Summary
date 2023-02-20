import React, { useState } from 'react'
import DisplayPaymentRprt from './DisplayPaymentRprt';



export default function ReqPaymentRprt() {
    const [plan, setPlan] = useState("Medicaid")  //initial value will be coming from the props
    const [payment, setPayment] = useState(false); //initial value will be coming from the props
    const [displayReq, setDisplayReq] = useState(true);
    const [displayPay, setDisplayPay] = useState(false);
    const [program, setProgram] = useState("");
    const [time, setTime] = useState("Payment Date Range");
    const [option, setOption] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');
  return (
    <>
    {displayReq && 
        <fieldset>
            <legend>Req Payment Summary Report</legend>
                  <fieldset style={{ marginTop: 20, marginRight: 900 }}>
                      <legend>Plan Type</legend>
                      <input onClick={e => setPlan(e.target.value)} type="radio" id="Medicaid" name="paymentSummary" value="Medicaid" />
                      <label htmlFor="Medicaid">Medicaid</label><br />
                      <input onClick={e => setPlan(e.target.value)} type="radio" id="Commercial" name="paymentSummary" value="Commercial" />
                      <label htmlFor="Commercial">Commercial</label><br />
                      <input onClick={e => setPlan(e.target.value)} type="radio" id="State" name="paymentSummary" value="State" />
                      <label htmlFor="State">State</label><br />
                      <input onClick={e => setPlan(e.target.value)} type="radio" id="Suplement" name="paymentSummary" value="Suplement" />
                      <label htmlFor="Suplement">Suplement</label>
                  </fieldset><fieldset style={{ marginTop: 20, marginRight: 900 }}>
                      <legend>Rebate Program</legend>
                      {plan === "Medicaid" &&
                          <select onChange={(e) => setProgram(e.target.value)} >
                              <option value="Select">Select</option>
                              <option value="Medicaid1">Medicaid1</option>
                              <option value="Medicaid2">Medicaid2</option>
                              <option value="Medicaid3">Medicaid3</option>
                              <option value="Medicaid4">Medicaid4</option>
                              <option value="Medicaid5">Medicaid5</option>
                          </select>}
                      {plan === "Commercial" &&
                          <select onChange={(e) => setProgram(e.target.value)} >
                              <option value="Select">Select</option>
                              <option value="Commercial1">commercial1</option>
                              <option value="Commercial2">commercial2</option>
                              <option value="Commercial3">commercial3</option>
                              <option value="Commercial4">commercial4</option>
                              <option value="Commercial5">commercial5</option>
                          </select>}
                      {plan === "State" &&
                          <select onChange={(e) => setProgram(e.target.value)} >
                              <option value="Select">Select</option>
                              <option value="State1">State1</option>
                              <option value="State2">State2</option>
                              <option value="State3">State3</option>
                              <option value="State4">State4</option>
                              <option value="State5">State5</option>
                          </select>}
                      {plan === "Suplement" &&
                          <select onChange={(e) => setProgram(e.target.value)} >
                              <option value="Select">Select</option>
                              <option value="Suplement1">Suplement1</option>
                              <option value="Suplement2">Suplement2</option>
                              <option value="Suplement3">Suplement3</option>
                              <option value="Suplement4">Suplement4</option>
                              <option value="Suplement5">Suplement5</option>
                          </select>}
                  </fieldset><fieldset style={{ marginTop: 20, marginRight: 900 }} disabled={payment ? true : false}>
                      <legend>Rebate Quater Option</legend>
                      <input onClick={(e) => [setOption(e.target.value)]} type="radio" id="DRAMSInv" name="quaterOption" value="DRAMS" />
                      <label htmlFor="DRAMSInv">DRAMS Invoice Start Quater</label><br />
                      <input onClick={(e) => [setOption(e.target.value)]} type="radio" id="All" name="quaterOption" value="All" />
                      <label htmlFor="All">All</label><br />
                  </fieldset>
                  <fieldset style={{ marginTop: 20, marginRight: 700 }}>
                      <legend>Time Period</legend>
                      <input onClick={(e) => [setPayment(true), setTime(e.target.value)]} type="radio" id="PaymentDateRange" name="timePeriod" value="PaymentDateRange" />
                      <label htmlFor="PaymentDateRange">Payment Date Range</label><br />
                      Begin : <input onSelect={(e) => setBeginDate(e.target.value)} type="date" />
                      End : <input onSelect={(e) => setEndDate(e.target.value)} type="date" />
                      <br />
                      <input onClick={(e) => [setPayment(false), setTime(e.target.value)]} type="radio" id="QTR" name="timePeriod" value="QTR" />
                      <label htmlFor="QTR">QTR</label><br /><br />
                      <input onClick={(e) => [setPayment(false), setTime(e.target.value)]} type="radio" id="year" name="timePeriod" value="year" />
                      <label htmlFor="year">Year</label><br />
                      <select name="year" id="year">
                          <option value="Select">Select</option>
                          <option value="Calendar">Calendar</option>
                          <option value="Fiscal Year">Federal Fiscal</option>
                          <option value="State Year">State Fiscal</option>
                      </select>
                  </fieldset><div className='App'>
                      <button onClick={() => [setDisplayPay(true), setDisplayReq(false)]}>Search</button>
                      {/* <button><Link onClick={() => [<DisplayPaymentRprt  test={"for testing"}/>,setDisplayReq(false)]} className="nav-link" to="/payment">Search</Link></button>  */}
                  </div>
                  </fieldset>
 
        }
        {
            displayPay && <DisplayPaymentRprt program={program} time={time} option={option} beginDate={beginDate} endDate={endDate}/>
        }

    </>
  ) 
}
