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

    let findDiv = <div className="container">
        <h2>Oshir</h2>
        <hr></hr>
        <h2>Mashud</h2>
    </div>

    let friendStatus = "friends-btn"
    let findStatus = "friends-btn"
    let reqStatus = "friends-btn"

    if (friendState==="friends") {
        friendStatus = "friends-btn active"
        findStatus = "friends-btn"
        reqStatus = "friends-btn"
    }
    else if (friendState === "find") {
        friendStatus = "friends-btn"
        findStatus = "friends-btn active"
        reqStatus = "friends-btn"
    }
    else {
        friendStatus = "friends-btn"
        findStatus = "friends-btn"
        reqStatus = "friends-btn active"
    }

    return (
        <div>
            <PlatNavbar />
            <h3>Friends Hub</h3>
            <div className="tab-container">
                <div className="tab">
                    <button className={friendStatus} onClick={() => friendHandler('friends')}><h1 className="h1">Friends</h1></button>
                </div>
                <div className="tab">
                    <button className={findStatus} onClick={() => friendHandler('find')}><h1 className="h1">Find Friends</h1></button>
                </div>
                <div className="tab">
                    <button className={reqStatus} onClick={() => friendHandler('requests')}><h1 className="h1">Requests</h1></button>
                </div>
            </div>
            {
                friendState == 'friends' ? friendsDiv : (friendState == 'find' ? findDiv : <div>
                </div>)
            }
            
        </div>
    )
}

export default Friends
