
import React from 'react'
import styled from "./getstartedstyle.module.css";

export const VowelFind = () => {

    // let theQoute = "Hi guys, Presenting one of the beautifull girl from the eath..!";
    // const findVowel = {a:0, e:0, i:0, o:0, u:0}
    // for(let i=0; i < theQoute.length; i++){
    //     if(theQoute[i]== 'a' || theQoute[i]== 'e' || theQoute[i]== 'i' || theQoute[i]== 'o' || theQoute[i]== 'u'){
    //         return  findVowel[theQoute[i]] = findVowel[theQoute[i]] + 1
    //     }
    // }

    function vowelfun(str){
        const vowel = "aeiou";
        return str.split('').reduce(function(count, char){
            return vowel.indexOf(char) !== -1
                ? count + 1
                : count;
        }, 0)
    }
    const findVowel = vowelfun('Hi guys, Presenting one of the beautifull girl from the eath..!')

  return (
    <div>
        <div className={styled.GetStartedBox}>
            <h4>Find the Vowel from</h4>
            <div>
                <p>{findVowel}</p>
            </div>
        </div>
    </div>
  )
}
