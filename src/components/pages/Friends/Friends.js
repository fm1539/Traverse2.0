import React, {useState, useEffect, useRef} from 'react'
import PlatNavbar from '../../Navbar'
import SearchBar from '../../SearchBar'

function Friends() {

    const searchInput = useRef(null)

    let [friendState, setFriend] = useState('friends')

    let [searchVal, setSearchVal] = useState('')

    let [searchResults, setResults] = useState([])
    
    let friendHandler = (value) => {
        setFriend(value)
    }

    let searchHandler = () => {
        console.log(searchInput.current.value)
        // axios.get
    }

    const searchResultsHandler = (results) => {
        setResults(results)
    }


    // let [friends, setFriends] = useState([])

    let friends = [{
        id: '1', username: 'isfar1' ,fName: 'Isfar', lName: 'Oshir'
    }, {
        id: '2',username: 'fmash123', fName: 'Farhan', lName: 'Mashud'
    }, {id: '3', username: 'joe', fName: 'John', lName: 'Doe'}, 
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'},
    {id: '3', username: 'joe', fName: 'John', lName: 'Doe'}]

    useEffect(()=>{
        let input = searchVal.toLowerCase().trim();
        let results = []
        // console.log(tutorArr);
        if (input !== ''){
        for (let i = 0; i < friends.length; i++){
            const fullname = friends[i].fName.toLowerCase() + " " +friends[i].lName.toLowerCase()
            if (( friends[i].fName.toLowerCase().includes(input))
            || (friends[i].lName.toLowerCase().includes(input))
            || (fullname.includes(input))){
                results.push(friends[i])   
            }
        }
        }
        
        setTimeout(50);
        searchResultsHandler(results)
    }, [searchVal])

    let searchDiv = <div> <SearchBar 
        placeholder="Search for friend"
        setSearchVal={setSearchVal}
    /> </div>

    let friendsDiv = <div className="container">
        {searchResults.length != 0 ? 
            searchResults.map((person) => {
                return (
                    <React.Fragment>
                    <h2>
                        {person.fName + " " + person.lName}
                    </h2>
                    <hr></hr> 
                    </React.Fragment>
                )
            })
        
        :
            friends.map((friend) => {
                return (
                <React.Fragment>
                <h2>{friend.fName + ' ' + friend.lName}</h2>
                <hr></hr>
                </React.Fragment>
                )
            })
        }
    </div>

    let findDiv = <div className="container" style={{height:'150px', overflow: 'hidden'}}>
        <input ref={searchInput} placeholder="Search by username"/>
        <button className="lg">Search</button>
        <h2 className="h1find">Mashud</h2>
        <button className="lg" onClick={() => {console.log(searchInput);}}>Add</button>
        
        
    </div>

    let requestDiv = <div className="container">
        <div style={{position: 'relative'}}>
            <h2 className="h2find"> Isfar </h2>
            <button className="lg" style={{position: 'absolute', right: '10px', top: '0'}}>Accept</button>
        </div>
        <hr></hr>
        <div style={{position: 'relative'}}>
            <h2 className="h2find"> Oshir </h2>
            <button className="lg" style={{position: 'absolute', right: '10px', top: '0'}}>Accept</button>
        </div>
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
            <div className="hub-container">
                <div className="tab-container">
                    <button className={friendStatus} onClick={() => friendHandler('friends')}><h1 className="h1tab">Friends</h1></button>               
                    <button className={findStatus} onClick={() => friendHandler('find')}><h1 className="h1tab">Find Friends</h1></button>            
                    <button className={reqStatus} onClick={() => friendHandler('requests')}><h1 className="h1tab">Requests</h1></button>
                
                </div>
                <div style={{width: '100px'}}></div>
                {
                    friendState == 'friends' ? (
                        <div style={{height: '10px'}}>
                            {searchDiv}
                            {friendsDiv}
                        </div>
                         
                    ): (friendState == 'find' ? 
                    <div style={{height: '10px'}}>
                            {findDiv }
                        </div>
                    : 
                    <div style={{height: '10px'}}>
                            {requestDiv }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Friends
