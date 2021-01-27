import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, 
        Switch,
} from 'react-router-dom'

import HomePage from './components/pages/HomePage/HomePage'
import Friends from './components/pages/Friends/Friends'

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
          <HomePage />
        </Route>
        <Route path="/friends" exact>
          <Friends />
        </Route>
        </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
