
import React from 'react'
import { GetStartedDateConvert } from './GetStartedDateConvert'
import styled from "./getstartedstyle.module.css";
import { ReverseString } from './ReverseString';

export const MainGetSated = () => {
  return (
    <div className={styled.getStarted}>
        <div className={styled.getstartedSubBox}>
            <div>
                <GetStartedDateConvert />
            </div>
            <div>
                <ReverseString />
            </div>
        </div>
    </div>
  )
}
