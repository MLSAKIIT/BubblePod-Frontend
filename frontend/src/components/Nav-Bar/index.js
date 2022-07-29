import React from 'react'
import "./navbar.css"
import navgradient from "./Rectangle2.svg";
import logo from "./bubblepodlogo.svg";
import key from "./key.svg";
function NavBar() {
  return (
    <>
    <div className="Nav">
    <img src={navgradient}/>
    <div>
    <img className="logo " src={logo}/>
    </div>
    <div className="Nav-items">
        <li className="Margin">Options</li>
        <li className="Margin">Options</li>
        <li className="Margin">Options</li>
        <li className="Margin">Options</li>
            <li className="">
                <button className="login-button image-shadow"><img className="img-size" src={key}/>Login</button>
            </li>
        </div>
</div>
    </>
  )
}
//3BC5AB login button
export default NavBar