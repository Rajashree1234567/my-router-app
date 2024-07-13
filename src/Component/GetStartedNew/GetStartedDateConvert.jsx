import React, { useEffect, useState } from 'react'
import styled from "./getstartedstyle.module.css";
import axios from 'axios';

export const GetStartedDateConvert = () => {
    let current = new Date();
    const todaysDate = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`
    const currentTime = `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`

    // usa time
    // const d = new Date();
    // const localTime = d.getTime();
    // const localOffset = d.getTimezoneOffset() * 60000;
    // const utc = localTime + localOffset;
    // const offset = -5; // UTC of USA Eastern Time Zone is -05.00
    // const usa = utc + (3600000 * offset);
    // let useCurrent = new Date(usa).toLocaleString();

    // get USA est date
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const fetchDate = async () => {
            try {
            const response = await axios.get('http://worldclockapi.com/api/json/est/now');
            setCurrentDate(response.data.currentDateTime);
            } catch (error) {
            console.error('Error fetching date:', error);
            }
        };
        fetchDate();
    }, []);

    const[ind, SetInd] = useState(true);
    const[btnConvert, setBtnConvert] = useState(false);

    function handleConvertBtn() {
        SetInd(!ind);
        setBtnConvert(!btnConvert)
    }

    return (
        <div className={styled.GetStartedBox}>
            <h3>Convert India date to USA</h3>
            <div>
                {ind ? 
                   ( <div>
                        <p>
                            <span className={styled.textDate}>Indian Date: </span>
                            <span>{todaysDate}</span>
                        </p>
                        <p>
                            <span  className={styled.textDate}>Indian Time: </span>
                            <span>{currentTime}</span>
                        </p>
                    </div>) : 
                    (
                        <div>
                            <p>
                                <span  className={styled.textDate}>USA Date & Time: </span>
                                {/* <span>{useCurrent}</span> */}
                                <span>{currentDate}</span>
                            </p>
                        </div>
                    )
                }              
            </div>         

            <div>
                <button 
                    className={styled.signupbtn}
                    onClick={handleConvertBtn}
                >
                    {btnConvert? "Get the India Time" : "Get the USA Time" }
                </button>
            </div>


        </div>
  )
}
