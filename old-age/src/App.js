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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
      {/* <img src={BG} style={{width: '100%', filter: 'blur(4px)', position: 'fixed', objectFit: 'cover', left: 0}}/> */}
      <Header/>
      <div className="fg">
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/searchresult">
              <SearchResults/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
        </Switch>
        <Footer/>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
