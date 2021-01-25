import React, {useState} from 'react'

function HomePage(){

    const [login, setLogin] = useState(true)

    const loginHandler = (value) => {
        setLogin(value)
    }

    let lBtn = "lg"
    let rBtn = "lg"
    let height = "70vh"

    if (login){
        lBtn = "gl"
    }
    else{
        rBtn = "gl"
        height = "70vh"
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
                        
                        <label>Email</label>
                        <br/>
                        <input name="email" required/>
                        <br/>
                        <label>Password</label>
                        <input name="password" required/>
                        <br/><br/>
                        <button className="lg">Log In</button>
                    </div>
                    : 
                    <div>
                        <label>First Name</label>
                        <br/>
                        <input name="fName" required/>
                        <br/>
                        <label>Last Name</label>
                        <br/>
                        <input name="lName" required/>
                        <br/>
                        <label>Email</label>
                        <br/>
                        <input name="email" required/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input name="password" required/>
                        <br/>
                        <label>Repeat Password</label>
                        <br/>
                        <input name="repPass" required/>
                        <br /><br />
                        <button className="lg">Register</button>
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
                
            </div>

            <footer id="footer-begin">
                <div className="isfar" >
                    <img style={{height:'50px', borderRadius:'50%'}} src="img/isfarpic.jpg"/>
                    <h1>Isfar Oshir</h1>
                    <h2>(646)705-9950</h2>
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
                    
                    <p style={{fontSize:"11px"}}>© 2020 RateMyTutor. All Rights Reserved</p>
                </div>

                <div className="farhan">
                    <img style={{height:'50px', borderRadius:'50%'}} src="img/farhanpic.jpeg"/>
                    <h1>Farhan Mashud</h1>
                    <h2>Phone number</h2>
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