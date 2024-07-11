import { Link, NavLink } from "react-router-dom";
import styled from "./header.module.css";
import mainLogo from "../../assets/mainLogo.jpg";

function Header() {
  return (
    <>
      <div className={styled.header}>
        <div className={styled.mainHeader}>
          <div>
            <img className={styled.logo} src={mainLogo} alt="logo" />
          </div>
          <div className={styled.mainMenu}>
            <p>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "firebrick" : "black",
                })}
                className={styled.menuItem}
              >
                Home
              </NavLink>
            </p>
            <p>
              <NavLink
                to="about"
                style={({ isActive }) => ({
                  color: isActive ? "firebrick" : "black",
                })}
                className={styled.menuItem}
              >
                About
              </NavLink>
            </p>
            <p>
              <NavLink 
                to="contact" 
                style={({isActive})=>({color:isActive ? "firebrick" : "black"})}
                className={styled.menuItem}>
                Contact
              </NavLink>
            </p>
            <p>
              <NavLink 
                to="github" 
                style={({isActive})=>({color:isActive? "firebrick" : "black"})}
                className={styled.menuItem}>
                Github
              </NavLink>
            </p>
          </div>
          <div className={styled.mainBtn}>
            <button className={styled.btnWithoutBorder}>Log in</button>
            <button className={styled.btnWithBorder}>
              <NavLink
                to="getStarted" 
                className={styled.menuItem}
                style={({isActive})=>({color:isActive? "black" : "white"})}  
              >
                Get started Something New
              </NavLink>   
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
