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
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhLdmW4W5Ctkh48lz8tmnXIwaqQ6ZuaHLoQgZCWAXc1xO7nH2nR81MTwDfut3f6rPDFY&usqp=CAU'
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
