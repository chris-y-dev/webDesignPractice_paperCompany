import React from 'react'
import "./Team.css";

function Profile({  source, name, pos }) {
  return (
    <div>
        <div class="profile-img-container">
            <img src={source} class="profile-img"/>
        </div>
        <div class="profile-text">
            <p>{pos}</p>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Profile