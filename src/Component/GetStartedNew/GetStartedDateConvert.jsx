import React from 'react'
import styled from "./getstartedstyle.module.css";

export const GetStartedDateConvert = () => {
    let current = new Date();
    const todaysDate = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`
    const currentTime = `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`

    // usa time
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = -5; // UTC of USA Eastern Time Zone is -05.00
    const usa = utc + (3600000 * offset);
    let useCurrent = new Date(usa).toLocaleString();

    return (
        <div className={styled.GetStartedBox}>
            <h3>Convert India date to USA</h3>
            <div>
                <p>
                    <span className={styled.textDate}>Indian Date: </span>
                    <span>{todaysDate}</span>
                </p>
                <p>
                    <span  className={styled.textDate}>Indian Time: </span>
                    <span>{currentTime}</span>
                </p>
            </div>

            <div>
                <p>
                    <span  className={styled.textDate}>USA Date & Time: </span>
                    <span>{useCurrent}</span>
                </p>
                {/* <p>
                    <span>USA Time: </span> */}
                    {/* <span>{currentTime}</span> */}
                {/* </p> */}
            </div>

            <div>
                <button className={styled.signupbtn}>
                    Get the USA Time
                </button>
            </div>


        </div>
  )
}
