import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePageContainer from './components/containers/HomePageContainer'
import AllCampusesContainer from './components/containers/AllCampusesContainer'
import AllStudentsContainer from './components/containers/AllStudentsContainer'
import SingleCampusContainer from './components/containers/SingleCampusContainer'
import SingleStudentContainer from './components/containers/SingleStudentContainer';
import NewCampusContainer from './components/containers/NewCampusContainer';
import NewStudentContainer from './components/containers/NewStudentContainer';
import EditCampusContainer from './components/containers/EditCampusContainer';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/campuses/:id" component={SingleCampusContainer} />
        <Route exact path="/students/:id" component={SingleStudentContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/editcampus" component={EditCampusContainer} />

      </Switch>        
    </div>
  );
}

export default App;
