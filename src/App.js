import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePageContainer from './components/containers/HomePageContainer'
import AllCampusesContainer from './components/containers/AllCampusesContainer'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path ='/' element={<HomePageContainer />}/>
            <Route exact path ='/campuses' element={<AllCampusesContainer />}/>
        </Routes>
    </div>
  );
}

export default App;
