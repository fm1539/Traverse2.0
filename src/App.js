import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, 
        Switch,
        Redirect
} from 'react-router-dom'

import HomePage from './components/pages/HomePage/HomePage'
import Friends from './components/pages/Friends/Friends'
import Messages from './components/pages/Messages/Messages'

function App() {
  return (
    <React.Fragment>
    <div className="mobile" style={{overflow:'hidden'}}>
      <h1 style={{width:'100px', textAlign:'center'}}>Mobile is not ready yet!</h1>
    </div>
    <div className="App">
      <Router>
          <Switch>
          <Route path="/" exact>
          {JSON.parse(localStorage.getItem('userObj')) ?
          <Redirect to="/messages" /> :
          <HomePage />
          } 
        </Route>
        <Route path="/messages" exact>
          {
            JSON.parse(localStorage.getItem('userObj')) ? <Messages />
             : <Redirect to="/" />
          }
        </Route>
        <Route path="/friends" exact>
          { 
              JSON.parse(localStorage.getItem('userObj')) ? <Friends />
               : <Redirect to="/" />
          }
        </Route>
        </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
