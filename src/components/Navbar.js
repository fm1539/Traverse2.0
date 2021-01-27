import React from 'react'

function Navbar() {
    return (
        <div>
            <header className="homepage-header">
                    <img src="img/logo.png" className="homepage-logo"/>
                    <ul className="home-nav">
                        <li><a href="#" className="nav-item">Reviews</a></li>
                        <li><a href="#" className="nav-item">Features</a></li>
                        <li><a href="#" className="nav-item">Contact Us</a></li>
                    </ul>
                </header>
        </div>
    )
}

export default Navbar;