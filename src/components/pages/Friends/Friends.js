import axios from 'axios'
import React, {useState, useEffect} from 'react'
import PlatNavbar from '../../Navbar'
import SearchBar from '../../SearchBar'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function Friends() {

    let [friendState, setFriend] = useState('friends')

    let [searchVal, setSearchVal] = useState('')
    
    let [fFsearchVal, setfFVal] = useState('')

    let [searchCurrentFriends, setResults] = useState([])

    let [foundUserObj, setFoundUser] = useState({})

    let [requested, setRequestStatus] = useState('none')

    let [friends, setFriends] = useState([])

    
    let friendHandler = (value) => {
        setFriend(value)
        if (value === 'friends'){
            axios.get('http://localhost:8000/users/getFriends/' + JSON.parse(localStorage.getItem('userObj')).username).then(
            res => {
                setFriends(res.data)
            }
        )
        }
        else if (value === "requests"){
            axios.get('http://localhost:8000/users/'+JSON.parse(localStorage.getItem('userObj')).username).then(
            response2 => {
                localStorage.setItem('userObj', JSON.stringify(response2.data.foundUser))
            }
            )
        }
    }

    let searchChangeHandler = (event) => {
        setfFVal(event.target.value)
    }

    const addBtnHandler = () => {
        axios.get('http://localhost:8000/users/'+JSON.parse(localStorage.getItem('userObj')).username).then(
            response2 => {
                localStorage.setItem('userObj', JSON.stringify(response2.data.foundUser))

                if ( !JSON.parse(localStorage.getItem('userObj')).requests.includes(foundUserObj.username) ){

                    axios.post('http://localhost:8000/users/addFriend/' + foundUserObj.username, {user: JSON.parse(localStorage.getItem('userObj'))})
                    .then(response => {
                        if (response.data.status === 'request sent'){
                            setRequestStatus('to')
                        }
                        else{
                            setRequestStatus('none')
                        }
                    })

                }
                else{
                    setRequestStatus('from')
                }
                

            }
        )
    }

    let searchHandler = () => {
        console.log(foundUserObj);
        if (!(fFsearchVal==='')){
            console.log(fFsearchVal);
            axios.get('http://localhost:8000/users/'+fFsearchVal).then(
                response=>{
                    if (response.data.status === 'found user'){
                        console.log('here');
                        setFoundUser(response.data.foundUser)
                        if (response.data.foundUser.requests.includes(JSON.parse(localStorage.getItem('userObj')).username)){
                            console.log('if');
                            setRequestStatus('to')
                        }
                        else if (JSON.parse(localStorage.getItem('userObj')).requests.includes(response.data.foundUser.username)) {
                            setRequestStatus('from')
                        }
                        else if (JSON.parse(localStorage.getItem('userObj')).friends.includes(response.data.foundUser.username)) {
                            setRequestStatus('friends')
                        }
                        else{
                            console.log('else');
                            setRequestStatus('none')
                        }
                    }
                    else {
                        setFoundUser({})
                    }
                }
            )
        }
    }

    const searchResultsHandler = (results) => {
        setResults(results)
    }

    const acceptBtnHandler = (event) => {
        console.log(event.target.id);
        axios.post('http://localhost:8000/users/acceptFriend/'+event.target.id, {currUser: JSON.parse(localStorage.getItem('userObj'))}).then(
            res => {
                if (res.data.status === 'friends'){
                    axios.get('http://localhost:8000/users/'+JSON.parse(localStorage.getItem('userObj')).username).then(
                    response2 => {
                        localStorage.setItem('userObj', JSON.stringify(response2.data.foundUser))
                        window.location = '/friends'
                    }
                    )
                }
            }
        )
    }


    // let [friends, setFriends] = useState([])



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

    useEffect(()=> {
        axios.get('http://localhost:8000/users/'+JSON.parse(localStorage.getItem('userObj')).username).then(
            response2 => {
                localStorage.setItem('userObj', JSON.stringify(response2.data.foundUser))
            }
            )
        //TODO: Change location of this because this method is being called too many times according to console.
        // axios.get('http://localhost:8000/users/getFriends/' + JSON.parse(localStorage.getItem('userObj')).username).then(
        //     res => {
        //         setFriends(res.data)
        //     }
        // )
    }, [])

    let searchDiv = <div> <SearchBar 
        placeholder="Search for friend"
        setSearchVal={setSearchVal}
    /> </div>

    let friendsDiv = <div className="container">
        {searchCurrentFriends.length != 0 ? 
            searchCurrentFriends.map((person) => {
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

    let findDiv = <div className="container" style={{height:'200px', overflow: 'hidden'}}>
        <input onChange={searchChangeHandler} placeholder="Search by username"/>
        <button className="lg" onClick={searchHandler}>Search</button>
        {!isEmpty(foundUserObj) ? 
        <React.Fragment>
            <h2 className="h1find">{foundUserObj.username}</h2>
            <h2 className="h1find">{foundUserObj.fName + ' ' + foundUserObj.lName}</h2>
            {foundUserObj.username === JSON.parse(localStorage.getItem('userObj')).username ? 
        null 
        :
        
         requested==='to' ? //u already sent a request
         <h2 className="h1find">Request Sent!</h2> 
         : (requested === 'friends'? 
         <h2 className="h1find">Already Friends!</h2>
         :
         (requested === 'from' ? 
            <h2 className="h1find">Sent you request</h2> 
            : 
            <button className="lg" onClick={addBtnHandler}>Add</button>)          
         )
         
        }
        </React.Fragment>
        :
            null
        }
        
        
    </div>

    let requestDiv = <div className="container">

        {JSON.parse(localStorage.getItem('userObj')).requests.map((request)=>{
            return (
                <React.Fragment>
                <div style={{position: 'relative'}}>
                    <h2 className="h2find"> {request} </h2>
                    <button className="lg" id={request} onClick={acceptBtnHandler} style={{position: 'absolute', right: '10px', top: '0'}}>Accept</button>
                </div>                
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                </React.Fragment>
            )
        })}
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
