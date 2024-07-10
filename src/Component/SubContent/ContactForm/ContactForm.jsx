import React, { useState } from 'react'
import styled from '../subcontent.module.css';

export const ContactForm = () => {

  const [formData, setFormData] = useState({
    name:'',
    phone: '',
    email: '',
  })

  const [error, setError] = useState({
    name: '',
    phone: '',
    email: ''
  })

  function ValidationError(){
    let errObj = {};

    if(formData.name.trim() === ''){
      errObj.name= 'Name is required';
    }

    if(formData.email.trim()=== ''){
      errObj.email='Email is required';
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errObj.email = 'Email is not Valid'
    }

    if(formData.phone.trim() === '' && !/^\d{10}$/.test(formData.phone)){
      errObj.phone = "Phone number should be 10 digit and it can't be empty"
    }

    if(Object.keys(errObj).length > 0){
      setError(errObj);
      return;
    }
  }

  function handleSubmitContact(e){
    e.preventDefault();
    const validation = ValidationError ();
  }

  
  return (
    <div>
        <form onSubmit={handleSubmitContact}>
            <input
              className={styled.inputField}
              type='text'
              value={formData.name}
              placeholder='Full Name'
              onChange={e=>setFormData({...formData, name:e.target.value})}
            />
            {error.name && <span style={{color: 'red'}}>{error.name}</span>}
            <input
              className={styled.inputField}
              type='email'
              value={formData.email}
              placeholder='Email'
              onChange={e=>setFormData({...formData, email:e.target.value})}
            />
            {error.email && <span style={{color: 'red'}}>{error.email}</span>}
            <input
              className={styled.inputField}
              type='tel'
              value={formData.phone}
              placeholder='000-000-0000'
              onChange={e=>setFormData( {...formData, phone:e.target.value})}
            />
            {error.phone && <span style={{color: 'red'}}>{error.phone}</span>}
            <button 
              className={styled.btnSingleValue}
              type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}
