import React from 'react';
import './static/css/app.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Header from './components/Header';
import BG from './static/images/bg.jpg'

function App() {
  return (
    <div className="app">
      <img src={BG} style={{width: '100%', filter: 'blur(4px)', position: 'fixed', objectFit: 'cover', left: 0}}/>
      <div className="fg">
        <Header/>
        <Home/>
        {/* <SearchResults/> */}
        {/* <SpecificPlace/> */}
      </div>
    </div>
  );
}

export default App;
