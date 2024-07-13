
import React, { useState } from 'react'
import styled from "./getstartedstyle.module.css";

export const FindDuplicate = () => {
    let aSentence= "dtf yg gyvfydu";
    const duplicateWord = aSentence.fin

    const[actualWord, setActualWord] = useState(true);
    const[FindDuplicate, setFindDuplicate] = useState(false);

    function handleDuplicate(){
        setActualWord(!actualWord)
        setFindDuplicate(!FindDuplicate)
    }
  return (
    <div>
        <div className={styled.GetStartedBox}>
            <h4>Find the Duplicate Word from sentence</h4>
            <p>
                Actual Sentence: 
                <span>{aSentence}</span>
            </p>
            {actualWord ?
                ( "" ): (
                    <p>
                        {duplicateWord}
                    </p>
                )
            }

            <button
                className={styled.signupbtn}
                onClick={handleDuplicate}
            >
                {FindDuplicate? "Hide the Duplicate" : "Find the Duplicate"}
            </button>
        </div>
    </div>
  )
}
