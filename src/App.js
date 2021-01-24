import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, 
        Switch,
} from 'react-router-dom'

import HomePage from './components/pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/friends" exact>
          
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
