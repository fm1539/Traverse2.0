import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Profile(){
    const { userId } = useParams()

    const [userObj, setUserObj] = useState({})

    const [personal, setPersonal] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/users/'+userId).then(
            response => {
                if (response.data.status === 'found user'){
                    setUserObj(response.data.foundUser)
                    if (JSON.parse(localStorage.getItem('userObj')).username === response.data.foundUser.username){
                        setPersonal(true)
                    }
                    else{
                        setPersonal(false)
                    }
                }
                else{
                    setUserObj({})
                }
            }
        )
    }, [])

    return (
        <div>
            {personal ? 
            <div>
                <h1>Personal Profile</h1>
                <h1>{userObj.fName + ' ' + userObj.lName}</h1>
            </div> 
            : 
            <div>
                <h1>Public Profile</h1>
                <h1>{userObj.fName + ' ' + userObj.lName}</h1>
            </div>
            }
        </div>
    )
}

export default Profile