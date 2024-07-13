import React, {useState} from 'react'
import styled from "./getstartedstyle.module.css";

export const NumberReverse = () => {
    let oneNumber = 145;
    let displayNumber = oneNumber;
    // const revNumber = oneNumber.toString().split('').reduce((a,b)=>(b+a))
    // const revNumber = oneNumber.toString().split('').reverse().join('')

    let remainder = 0
    let revNumber = 0
    while(oneNumber != 0){
        remainder = oneNumber%10
        revNumber = (revNumber * 10) + remainder
        oneNumber = Math.floor(oneNumber/10)
    }


    const[btnRevConvert, setRevBtnConvert] = useState(false);
    const[actualNumber, setactualNumber] = useState(true)
    const handleReverseBtn = () => {
      setactualNumber(!actualNumber);
      setRevBtnConvert(!btnRevConvert)
    }

    // reverse from input
    const[numberInput, setNumberInput] = useState('');
    const[btnRevnumberInput, setbtnRevnumberInput] = useState([])
    const [inputHide, setnputHide] = useState(true);
    const reversenumberInput =numberInput.toString().split('').reverse().join('')
    function handleReversenumberInput(){
        setbtnRevnumberInput(!btnRevnumberInput);
        setnputHide(!inputHide)
    }

    return (
    <div>
        <div className={styled.GetStartedBox}>
            
            <div>
                <p>
                    Actual String : {displayNumber}
                </p>
                    
                <p>
                    {actualNumber ? ('') : (<span>{revNumber}</span>)}
                </p>
                <button 
                    className={styled.signupbtn}
                    onClick={handleReverseBtn}
                >
                    {btnRevConvert?  "Hide the Number" : "Reverse the Number" } 
                </button>
            </div>            <br /> <br/>
            <h2>Please Enter only Number</h2>
            <h6>Don't PAanic 😇, character will not work here.</h6>
            <div>
                <textarea
                    placeholder="Enter Number..."
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value.replace(/[^0-9]/g, ''))}
                    rows={4}
                    cols={50}
                />
                <p>
                    {inputHide ? ('Get the Reverse Number') : (<span>Get the Reverse Number: {reversenumberInput}</span>)}
                </p>
                <button 
                    className={styled.signupbtn}
                    onClick={handleReversenumberInput}
                >
                    {!btnRevnumberInput?  "Hide the Number" : "Reverse the Number" } 
                </button>
            </div>
        </div>
    </div>
  )
}
