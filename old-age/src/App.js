import React from 'react';
import './App.css';
import PersistentDrawerLeft from './Components/Header'
import CustomCarousel from './Components/Carousel'

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <CustomCarousel/>
    </div>
  );
}

export default App;
