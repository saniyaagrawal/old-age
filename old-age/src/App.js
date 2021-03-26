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
import BG from './static/images/background.jpg'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddOldage from './pages/AddOldage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <img 
        src={BG}
        style={{width: '100%',height:'100%', position: 'fixed', objectFit: 'cover', left: 0}}
        />
      
        {/* <div style={{marginTop: '100px'}}/> */}
        <div className='fg' style={{marginTop: '100px'}}>
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
              <Home/>
              <Footer/>
            </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
