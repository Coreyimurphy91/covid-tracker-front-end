import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const HealthProfile = (props, active, isRed) => {
    return (
        <div>
            <div className="container pt-5 my-5 border cardBg">
                <h1 className="center">{/* {user} */}User's Health Profile</h1>
            </div>
            <div className="container my-5 border cardBg">
                <h2>My Vaccines</h2>
            </div>
            <div className="container my-5 border cardBg">
                <h2>Saved locations</h2>
            </div>
        </div>

    )
}

export default HealthProfile;