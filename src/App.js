import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePageContainer from './components/containers/HomePageContainer'
import AllCampusesContainer from './components/containers/AllCampusesContainer'
import AllStudentsContainer from './components/containers/AllStudentsContainer'
import SingleCampusContainer from './components/containers/SingleCampusContainer'
import SingleStudentContainer from './components/containers/SingleStudentContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campuses/:id" component={SingleCampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/students/:id" component={SingleStudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
