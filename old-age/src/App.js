import React from 'react';
import './static/css/app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Header from './components/Header';
import BG from './static/images/bg.jpg'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddOldage from './pages/AddOldage';

function App() {
  return (
    <Router>
      <div className="app">
      <img src='data:image/jpeg;base64,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' style={{width: '100%', filter: 'blur(4px)', position: 'fixed', objectFit: 'cover', left: 0}}/>
      <div className="fg">
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/add">
              <AddOldage/>
            </Route>
            <Route path="/searchresult">
              <SearchResults/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
        </Switch>
      </div>

      
    </div>
    </Router>
  );
}

export default App;
