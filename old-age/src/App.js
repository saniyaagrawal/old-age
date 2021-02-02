import React from 'react';
import './static/css/app.css';
// import PersistentDrawerLeft from './Components/Header'
// import CustomCarousel from './Components/Carousel'
// import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      {/* <Home /> */}
      {/* <PersistentDrawerLeft />
      <CustomCarousel/>
      <SearchResults/>
      <SpecificPlace/> */}
    </div>
  );
}

export default App;
