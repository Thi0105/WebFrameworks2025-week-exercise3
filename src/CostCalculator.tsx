import React from 'react'

export default function CostCalculator({priceOfSingleVMPerHour}: {priceOfSingleVMPerHour: number}) {

    const [VMNumber, setVMNumber] = React.useState("1");
    const numVMs = Number(VMNumber);
    const perHour = numVMs * priceOfSingleVMPerHour;
    const perDay = perHour * 24;
    const perMonth = perDay * 30;
    const perYear = perDay * 365;

  return (
    <div>
        <h1>VM Cost Calculator</h1>
        <label htmlFor="vmNumber">Number of VMs</label>
        <input type="text" id="vmNumber" placeholder="Number of VMs" value={VMNumber} onChange={e => setVMNumber(e.target.value)}/>
        <div>
            <p>Cost per hour: {perHour}</p>
            <p>Cost per day: {perDay}</p>
            <p>Cost per month: {perMonth}</p>
            <p>Cost per year: {perYear}</p>
        </div>
    </div>
  )
}
