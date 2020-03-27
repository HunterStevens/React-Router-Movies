import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import addToSavedList from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
     
    <div>
      <SavedList list={savedList} />
      <div>
      <Switch>
        <Route path="/movies/:movieID">
            <Movie addToSavedList = {addToSavedList}/>
        </Route>
        <Route path="/">
            <MovieList />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
};

export default App;
