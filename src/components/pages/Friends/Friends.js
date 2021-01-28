import React, {useState, useEffect} from 'react'
import PlatNavbar from '../../Navbar'

function Friends() {

    let [friendState, setFriend] = useState('friends')

    let friendHandler = (value) => {
        setFriend(value)
    }

    let friendsDiv = <div className="container">
        <h2>Isfar</h2>
        <hr></hr>
        <h2>Farhan</h2>
    </div>
    return (
        <div>
            <PlatNavbar />
            <h3>Friends Hub</h3>
            <div className="tab-container">
                <div className="tab">
                    <button style={{width: 100 }} onClick={() => friendHandler('friends')}>Friends</button>
                </div>
                <div className="tab">
                    <button style={{width: 100}} onClick={() => friendHandler('find')}>Find Friends</button>
                </div>
                <div className="tab">
                    <button style={{width: 100}} onClick={() => friendHandler('requests')}>Requests</button>
                </div>
            </div>
            {
                friendState == 'friends' ? friendsDiv : <div></div>
            }
            
        </div>
    )
}

export default Friends
