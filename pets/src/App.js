import './App.css';
import React from 'react';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Pets from './views/Pets';
import Pet from './views/Pet';
import NewPet from './views/NewPet';
import EditPets from './views/EditPets';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Pets />
        </Route>
        <Route exact path="/pets/new">
          <NewPet />
        </Route>
        <Route exact path="/pets/:id">
          <Pet />
        </Route>
        <Route exact path="/pets/:id/edit">
          <EditPets />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
