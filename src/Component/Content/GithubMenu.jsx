import { useEffect, useState } from "react";
import styled from "./content.module.css";
// import { useLoaderData } from "react-router-dom";

export const GithubMenu = () => {
  // const[data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://github.com/Rajashree1234567')
  //   .then(response => response.json)
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])

  // we can use loader

  // const data = useLoaderData()
  // console.log(data);
  // console.log(data[0].population);

  return (
    <div className={styled.content}>
      <div className={styled.gitFollowbg}>
          <img src="" alt="git pic" />
          <p className={styled.gitFollowText}>
              Github follower: 
              {/* {data.follower} */}
          </p>
      </div>
    </div>
  );
};

// export const githubInfoLoader = async ()=> {
//   const response = await fetch ('https://github.com/Rajashree1234567')
//   return response.json()
// }