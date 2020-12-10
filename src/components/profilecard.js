import React from "react"
import "tachyons"
import './profilecard.css'

const ProfileCard = () => {
	return(
		<div class="profile-card">
            <img src={'./logo.jpg'} alt="John"/>
            {/* <h2>John Doe</h2>
            <p class="profile-title">Representative, Girnar</p>
            <button>Contact</button> */}
        </div>

		)
}

export default ProfileCard;