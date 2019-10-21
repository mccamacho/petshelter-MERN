import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AllPets from './allpets'
import NewPet from './newpet';
import OnePet from './onepet';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import EditPet from './editpet';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <>
      <div className="jumbotron"><Link to="/">All Pets</Link> |&nbsp; 
      <Link to="/new">Add a pet to the Shelter</Link>
      <h1 className="display-4">Pet Shelter</h1>
      </div>
      <Route exact path="/" component={AllPets}></Route>
      <Route path="/new" component={NewPet}></Route>
      <Route exact path="/pets/:_id" component={OnePet}></Route>
      <Route path="/pets/:_id/edit" component={EditPet}></Route>
    </>
    </BrowserRouter>
    );
  }
}

export default App;
