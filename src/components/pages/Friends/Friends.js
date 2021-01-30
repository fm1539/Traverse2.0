import React, {useState, useEffect} from 'react'
import PlatNavbar from '../../Navbar'
import SearchBar from '../../SearchBar'

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
        <SearchBar />
        <h2 className="h1find"> Mashud </h2>
        <button className="add-btn"><h2 className="h2add">Add</h2></button>
        <hr></hr>
        <h2 className="h1find">Mashud</h2>
        <button className="add-btn"><h2 className="h2add">Add</h2></button>
    </div>

    let requestDiv = <div className="container">
        <h1 className="h1find"> Isfar </h1>
        <button className="add-btn"><h2 className="h2add">Accept</h2></button>
        <hr></hr>
        <h2 className="h1find">Oshir</h2>
        <button className="add-btn"><h2 className="h2add">Accept</h2></button>
    </div>

    let friendStatus = "friends-btn"
    let findStatus = "friends-btn"
    let reqStatus = "friends-btn"

    if (friendState === "friends") {
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
                <button className={friendStatus} onClick={() => friendHandler('friends')}><h1 className="h1tab">Friends</h1></button>               
                <button className={findStatus} onClick={() => friendHandler('find')}><h1 className="h1tab">Find Friends</h1></button>            
                <button className={reqStatus} onClick={() => friendHandler('requests')}><h1 className="h1tab">Requests</h1></button>
                
            </div>
            {
                friendState == 'friends' ? friendsDiv : (friendState == 'find' ? findDiv : requestDiv)
            }
            
        </div>
    )
}

export default Friends
