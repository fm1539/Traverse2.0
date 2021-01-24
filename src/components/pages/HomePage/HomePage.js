import React, {useState} from 'react'

function HomePage(){

    const [login, setLogin] = useState(true)

    const loginHandler = (value) => {
        setLogin(value)
    }

    let lBtn = "lg"
    let rBtn = "lg"
    let height = "65vh"

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
                        <li><a href="#" className="nav-item">Reviews</a></li>
                        <li><a href="#" className="nav-item">Features</a></li>
                        <li><a href="#" className="nav-item">Contact Us</a></li>
                    </ul>
                </header>
            
                <div className="login-register">
                    <button className={lBtn} onClick={() => loginHandler(true)}>Login</button>
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
                    </div>
                    }

                </div>

            </div>

            <div style={{height: '25vh'}}>
            <ul className="reviews">
                        <li>
                            <div>
                                <h1>h</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                            <h1>h</h1>
                            </div>
                        </li>
                        <li>
                            <div>
                            <h1>h</h1>
                            </div>
                        </li>
                    </ul>
            </div>

            <a href="#intro"><img className="scroll" src="img/bScroll.png" style={{height: '50px'}}/></a>

            <div id="intro" style={{marginTop: '15vh', height: '90vh'}}>
                <h1>Details</h1>
            </div>

            <footer>
                <div className="isfar">
                    <h1>Isfar</h1>
                    <a href="https://www.linkedin.com/in/isfar-oshir-043403190/" target="_blank"><i className="fa fa-linkedin-square socialIcon"></i></a>
                </div>

                <div className="farhan">
                    <h1>Farhan</h1>
                    <a href="https://www.linkedin.com/in/farhan-m8/" target="_blank"><i className="fa fa-linkedin-square socialIcon"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default HomePage