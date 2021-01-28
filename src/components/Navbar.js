import React from 'react'

function PlatNavbar() {
    return (
        <div>
            <header className="homepage-header">
                    <img src="img/logo.png" className="homepage-logo"/>
                    <ul className="home-nav">
                        <li><a href="#" className="plat-nav-item">Messages</a></li>
                        <li><a href="#" className="plat-nav-item">My Friends</a></li>
                        <li><a href="#" className="plat-nav-item">Profile</a></li>
                        <li><a href="#" className="plat-nav-item">Log Out</a></li>
                    </ul>
                </header>
        </div>
    )
}

export default PlatNavbar;