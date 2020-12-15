import React from 'react';
import './App.css';
import PersistentDrawerLeft from './Components/Header'
import CustomCarousel from './Components/Carousel'
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      {/* <PersistentDrawerLeft />
      <CustomCarousel/> */}
      <SearchResults/>
    </div>
  );
}

export default App;
