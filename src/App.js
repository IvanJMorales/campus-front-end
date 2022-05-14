

import HomePageContainer from './components/containers/HomePageContainer'

import React from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path ='/' element={<HomePageContainer />}/>
        </Routes>
    </div>
  );
}

export default App;
