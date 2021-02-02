import React from 'react';
import './static/css/app.css';
// import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Home/>
      {/* <SearchResults/>
      <SpecificPlace/> */}
    </div>
  );
}

export default App;
