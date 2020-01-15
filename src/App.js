import React from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import ChangePage from './Components/ChangePage';
import LogIn from './Components/LogIn';
import Chat from './Components/Chat';


function App() {
  return (
    <div className="App">
      <Router>
        <ChangePage />
        <Route exact path="/" component={LogIn}/>
        <Route path="/chat/:id" render={(props) => <Chat username={props.match.params.id} />}/>
      </Router>
    </div>
  );
}

export default App;
