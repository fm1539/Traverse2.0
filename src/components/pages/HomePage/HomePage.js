import React, {useState} from 'react'
import axios from 'axios'

function HomePage(){

    const [login, setLogin] = useState(true)

    const [switchStr, setSwitch] = useState('messaging')

    const [userObj, setUserObj] = useState({})

    const [registerEvent, setRegisterEvent] = useState({
        username: "",
        fName: "",
        lName: "",
        password: "",
        repPass: ""
    })

    const [loginEvent, setLoginEvent] = useState({
        email: "",
        password: ""
    })

    const loginButtonHandler = () => {
        console.log(loginEvent)
        axios.post('http://localhost:8000/loginRegister/login', loginEvent).then( response => {
            console.log(response.data);
            if (response.data.status === "logged"){
                console.log(response.data.userObj);
                setUserObj(response.data.userObj)
                window.location = '/messages'
            }
            else{
                alert('Username or password is incorrect. Please try again')
            }
        }

        )
        // window.location = '/'
    }

    const loginChangeHandler = (event) => {
        setLoginEvent({
            ...loginEvent, 
            [event.target.name]: event.target.value
        })
    }
    
    const registerChangeHandler = (event) => {
        setRegisterEvent({
            ...registerEvent,
            [event.target.name]: event.target.value
        })
    }

    const switchHandler = (event) => {
        setSwitch(prev => {
            if (prev !== event.target.id){
                return event.target.id
            }
        })
        
    }


    const registerButtonHandler = () => {
        console.log(registerEvent)
        axios.post('http://localhost:8000/loginRegister/register', registerEvent).then( response => {
            if (response.data.status === "registered"){
                window.location = '/'
            }
            else{
                alert('Username or Email already exists')
            }
        }

        )
        // window.location = '/'
    }


    const loginHandler = (value) => {
        setLogin(value)
    }

    let lBtn = "lg"
    let rBtn = "lg"
    let height = "70vh"

    let content = <div>
        <h1>Messaging</h1>
    </div>

    if (login){
        lBtn = "gl"
    }
    else{
        rBtn = "gl"
        height = "70vh"
    }

    if (switchStr === "event"){
        content = <div>
            <h1>Event Planning</h1>
        </div>
    }
    else if (switchStr === "sharing"){
        content = <div>
            <h1>Sharing</h1>
        </div>
    }

    return (
        <div style={{height: '100%'}}>
            <div className='top-section' style={{height: height}}>
                <header className="homepage-header">
                    <img src="img/logo.png" className="homepage-logo"/>
                    <ul className="home-nav">
                        <li><a href="#reviews-begin" className="nav-item">Reviews</a></li>
                        <li><a href="#intro" className="nav-item">Features</a></li>
                        <li><a href="#footer-begin" className="nav-item">Contact Us</a></li>
                    </ul>
                </header>

                <img className="personH" src="img/personDecision.png"/>
            
                <div className="login-register">
                    <button className={lBtn} onClick={() => loginHandler(true)}>Login</button>
                    <button style={{visibility:'hidden', width:'1px'}}></button>
                    <button className={rBtn} onClick={() => loginHandler(false)}>Register</button>
                    <br/><br/>
                    {login ? 
                    <div>
                        <form>
                            <label>Email</label>
                            <br/>
                            <input name="email" onChange={loginChangeHandler} type="email" required/>
                            <br/>
                            <label>Password</label>
                            <input name="password" onChange={loginChangeHandler} type="password" required/>
                            <br/><br/>
                            <button type="button" onClick={loginButtonHandler} className="lg">Log In</button>
                        </form>
                    </div>
                    : 
                    <div>
                        <form>
                            <label>Username</label>
                            <br/>
                            <input name="username" onChange={registerChangeHandler} required/>
                            <br/>
                            <label>First Name</label>
                            <br/>
                            <input name="fName" onChange={registerChangeHandler} required/>
                            <br/>
                            <label>Last Name</label>
                            <br/>
                            <input name="lName" onChange={registerChangeHandler} required/>
                            <br/>
                            <label>Email</label>
                            <br/>
                            <input name="email" onChange={registerChangeHandler} required/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input name="password" onChange={registerChangeHandler} required/>
                            <br/>
                            <label>Repeat Password</label>
                            <br/>
                            <input name="repPass" onChange={registerChangeHandler} required/>
                            <br /><br />
                            <button type="button" className="lg" onClick={registerButtonHandler}>Register</button>
                        </form>
                    </div>
                    }

                </div>

            </div>

            <div className="reviews-container">
            <ul id="reviews-begin" className="reviews">
                        <li>
                            <div>
                                <h1>Very Convenient!</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                            <h1>Very efficient!</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                            <h1>Very useful!</h1>
                            </div>
                        </li>
                    </ul>
            </div>

            <a href="#intro"><img className="scroll" src="img/bScroll.png" style={{height: '50px'}}/></a>

            <div id="intro" className="features-container">
                <h1>Features</h1>
                <div className="switchers-div">
                    <button id="messaging" style={switchStr==='messaging'? {backgroundColor: 'tomato'} :null} onClick={switchHandler}></button>
                    
                    <div className="vl"></div>
                    <button id="event" style={switchStr==='event'? {backgroundColor: 'tomato'} :null} onClick={switchHandler}></button>
                    
                    <div className="vl"></div>
                    <button id="sharing" style={switchStr==='sharing'? {backgroundColor: 'tomato'} :null} onClick={switchHandler}></button>
                    <div className="switcher-text">
                        <p>Messaging</p>
                        <p>Event Planning</p>
                        <p>Sharing</p>
                    </div>
                    
                </div>

                <div className="features-content">
                    {content}
                </div>
                
            </div>

            <footer id="footer-begin">
                <div className="isfar" >
                    <img style={{height:'50px', borderRadius:'50%'}} src="img/isfarpic.jpg"/>
                    <h1>Isfar Oshir</h1>
                    <h2>iao233@nyu.edu</h2>
                    <a href="https://www.linkedin.com/in/isfar-oshir-043403190/" target="_blank" style={{paddingRight: '10px'}}><i className="fa fa-linkedin-square socialIcon"></i></a>
                    <a href="http://www.isfaroshir.com/" target="_blank" style={{paddingRight: '10px'}}><img src="img/isfarcom.png" style={{height:'15px'}} /></a>
                    <a href="https://github.com/ioshir4350?tab=stars" target="_blank"><i className="fa fa-github socialIcon" style={{color: 'black'}}></i></a>
                </div>

                <div className="center-design">
                    <a href="/"><img style={{height: '20px'}} src="img/logo.png"/></a>
                    <br /><br />
                    <hr className="leftHR"/>
                    <div className="circle"></div>
                    <hr className="rightHR"/>
                    
                    <p style={{fontSize:"11px"}}>© 2021 Traverse. All Rights Reserved</p>
                </div>

                <div className="farhan">
                    <img style={{height:'50px', borderRadius:'50%'}} src="img/farhanpic.jpeg"/>
                    <h1>Farhan Mashud</h1>
                    <h2>fm1539@nyu.edu</h2>
                    <a href="https://www.linkedin.com/in/farhan-m8/" target="_blank" style={{paddingRight: '10px'}}><i className="fa fa-linkedin-square socialIcon"></i></a>
                    {/* <a href="http://www.isfaroshir.com/" target="_blank" style={{paddingRight: '10px'}}><img src="img/isfarcom.png" style={{height:'15px'}} /></a> */}
                    <a href="https://github.com/fm1539" target="_blank"><i className="fa fa-github socialIcon" style={{color: 'black'}}></i></a>
                </div>
            </footer>
        </div>
    )
}

export default HomePage