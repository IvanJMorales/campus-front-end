import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePageContainer from './components/containers/HomePageContainer'
import AllCampusesContainer from './components/containers/AllCampusesContainer'
import AllStudentsContainer from './components/containers/AllStudentsContainer'
import NewStudentContainer from './components/containers/NewStudentContainer'


function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path ='/' element={<HomePageContainer />}/>
            <Route exact path ='/campuses' element={<AllCampusesContainer />}/>
            <Route exact path ='/students' element={<AllStudentsContainer />}/>
            <Route exact path ='/newstudent' element={<NewStudentContainer />}/>

        </Routes>
    </div>
  );
}

export default App;
