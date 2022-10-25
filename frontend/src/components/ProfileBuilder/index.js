import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./profile.css"

function Profile() {
  return (
    <div>


    <nav>
         <div className="logo">
            <img height="70" src="logo.png" alt=""></img>
         </div>
         <input type="checkbox" id="click"></input>
         <label for="click" className="menu-btn">
         <FontAwesomeIcon icon="fa-solid fa-bars" />
         </label>
         <ul>
            <li><a href="#">Option</a></li>
            <li><a href="#">Option</a></li>
            <li><a href="#">Option</a></li>
            <li><a href="#">Option</a></li>
            <li><a href="#">Option</a></li>
         </ul>
      </nav>
     
      <div className="profile-container">
         <input className="profile-img" type="image" src="https://www.w3schools.com/w3css/img_avatar3.png" />
         <input
           className="Questions" id="first-qtn"
           type="text"
           name="firstname"
           placeholder="What do we call you ?"
         />
         <input
           className="Questions" id="second-qtn"
           type="text"
           name="firstname"
           placeholder="What are your pronouns?"
         />
         <input
           className="Questions" id="third-qtn"
           type="text"
           name="firstname"
           placeholder="What tech stack do you prefer?"
         />
         <input
           className="Questions" id="fourth-qtn"
           type="text"
           name="firstname"
           placeholder="What are your hobbies?"
         />
         </div>
   
    
    </div>
  )
}

export default Profile