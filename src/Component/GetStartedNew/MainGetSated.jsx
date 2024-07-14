
import React from 'react'
import { GetStartedDateConvert } from './GetStartedDateConvert'
import styled from "./getstartedstyle.module.css";
import { ReverseString } from './ReverseString';
import { NumberReverse } from './NumberReverse';
import { FindDuplicate } from './FindDuplicate';
import { AccendingOrder } from './AccendingOrder';
import { VowelFind } from './VowelFind';

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
            <div>
              <NumberReverse />
            </div>
            <div>
              <FindDuplicate />
            </div>
            <div>
              <AccendingOrder />
            </div>
            <div>
              <VowelFind />
            </div>
        </div>
    </div>
  )
}
