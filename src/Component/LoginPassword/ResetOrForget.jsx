import React from 'react'
import styled from "./loginstyle.module.css";

export const ResetOrForget = () => {
  return (
    <div className={styled.login}>
        <div className={styled.loginColoredBox}>
            <form>
                <div>
                    <label>Old Password</label><br />
                    <input 
                        className={styled.loginInput}
                        type='password' 
                        value=''
                    /><br />

                    <label>New Password</label><br />
                    <input 
                        className={styled.loginInput}
                        type='password' 
                    /><br />

                    <label>Confrim Password</label><br />
                    <input 
                        className={styled.loginInput}
                        type='password' 
                    /><br />

                </div>
                <div>
                    <button className={styled.signupbtn}>Confirm</button>
                </div>
            </form>
        </div>
    </div>
  )
}
