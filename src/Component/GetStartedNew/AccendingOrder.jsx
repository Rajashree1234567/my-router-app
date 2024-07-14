
import { useState } from "react";
import styled from "./getstartedstyle.module.css";

export const AccendingOrder = () => {

    let arrNumber = [67, 87,557, 7789, 56, 55]
    const strNumber = arrNumber.join(', ')
    // const AccNumber = arrNumber.sort((a,b)=>a-b)
    // const AccNumber = arrNumber.sort((a,b)=>a-b)[0]
    const AsNum = arrNumber.slice().sort((a,b)=>a-b)
    const AccedingNumber = AsNum.join(', ');

    const[actNumber, setactNumber] = useState()
  return (
    <div>
        <div className={styled.GetStartedBox}>
            <h4>Arrange in  Ascending Order</h4>
            <p>Actual Number : {strNumber}</p>
            {AccedingNumber}
        </div>
    </div>
  )
}
