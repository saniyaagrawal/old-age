import React from 'react';
import './App.css';
import PersistentDrawerLeft from './Components/Header'
import CustomCarousel from './Components/Carousel'
import SearchResults from './pages/SearchResults';
import SpecificPlace from './Components/SpecificPage/SpecificPlace';

function App() {
  return (
    <div className="App">
      {/* <PersistentDrawerLeft />
      <CustomCarousel/> */}
      {/* <SearchResults/> */}
      <SpecificPlace/>
    </div>
  );
}

export default App;
