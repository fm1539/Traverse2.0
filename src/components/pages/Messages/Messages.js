import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import PlatNavBar from '../../Navbar'

function Messages(){

    const [response, setResponse] = useState("")

    useEffect(() => {
        const socket = socketIOClient("http://localhost:8000", { 
            transport: ['websocket', 'polling', 'flashsocket'],
            
        })
        socket.on("FromAPI", data => {
            console.log(data);
            setResponse(data)
        })
    }, [])

    return (
        <div>
            <PlatNavBar />
            <h1>Messages</h1>
            <p>Here: {response}</p>
        </div>
    )
}

export default Messages