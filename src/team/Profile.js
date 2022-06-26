import React from 'react'
import "./Team.css";

function Profile({  source, name, pos }) {
  return (
    <div>
        <div class="profile-img-container">
            <img src={source} class="profile-img"/>
        </div>
        <div class="profile-text">
            <p id="profile-name">{name}</p>
            <p id="profile-position">{pos}</p>
        </div>
    </div>
  )
}

export default Profile