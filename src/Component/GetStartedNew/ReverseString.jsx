import React, { useState } from 'react'
import styled from "./getstartedstyle.module.css";

export const ReverseString = () => {
  let oneString = "I'm one of the beautiful girl in the earth ";

  // const revStr = oneString.split("").reduce((a, b)=> b + a, "")
  // const revStr = oneString.split('').reverse().join('');
  // const revStr = [...oneString].reverse().join("");
  // const revStr = Array.from(oneString).reverse().join('');
  // const revStr = [...oneString].reduce((x, y)=> y.concat(x))
  // let rev1 = ""
  // for (let i = oneString.length-1; i>=0; i--){
  //   rev1+=oneString[i];
  // }


  let revStr = '';
  for( let i = oneString.length-1 ; i>=0; i--){
    // revStr = revStr+str[i]
    revStr += oneString[i]
  }


// note
// number = number +10
// number +=10 //shorthand operator
// number = number -10
// number -=10 //shorthand operator

  const[btnRevConvert, setRevBtnConvert] = useState(false);
  const[actualString, setActualString] = useState(true)
  const handleReverseBtn = () => {
    setActualString(!actualString);
    setRevBtnConvert(!btnRevConvert)
  }
  return (
    <div>
        <div  className={styled.GetStartedBox}>
            <div>
                <p>Actual String : {oneString}</p>
                
                <p>
                  {actualString ? ( '') : (<span>{revStr}</span>)}
                </p>
                <button 
                  className={styled.signupbtn}
                  onClick={handleReverseBtn}
                >
                 {btnRevConvert?  "Hide the String" : "Reverse the String" } 
                </button>
            </div>
        </div>
    </div>
  )
}
