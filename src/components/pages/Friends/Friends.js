import React, {useState, useEffect} from 'react'
import PlatNavbar from '../../Navbar'

function Friends() {
    return (
        <div>
            <PlatNavbar />
            <h3>Friends Hub</h3>
            <div className="tab-container">
                <div className="tab">
                    <h2>Friends</h2>
                </div>
                <div className="tab">
                    <h2>Find Friends</h2>
                </div>
                <div className="tab">
                    <h2>Requests</h2>
                </div>
            </div>
        </div>
    )
}

export default Friends
