import React from 'react'
import styled from "./loginstyle.module.css";

export const LoginModal = () => {
  return (
    <div className={styled.login}>
        <div className={styled.loginColoredBox}>
            <form>
                <div>
                    <label>Email:</label><br />
                    <input 
                        className={styled.loginInput}
                        type='text' 
                        value=''/><br />
                    <label>Password</label><br />
                    <input 
                        className={styled.loginInput}
                        type='password' /><br />
                </div>
                <div className={styled.resetFogetMain}>
                    <p className={styled.resetForget}>Reset Your Password</p>
                    <p className={styled.resetForget}>Forget Password</p>
                </div>
                <div>
                    <button className={styled.signupbtn}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}
