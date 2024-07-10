import React from 'react'
import styled from './subcontent.module.css';
// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const User = () => {

  const {userId}= useParams()

  return (
    <div className={styled.subcontent}>
        <div className={styled.userBg}>
          <p>User ID : {userId} </p>
        </div>
    </div>
  )
}
