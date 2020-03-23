import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

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
        <Link to="/">Movie List</Link>
      <Switch>
        <Route path="/movies/:movieID">
            <Movie />
        </Route>
        <Route path="/">
            <MovieList getMovies = {savedList}/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
};

export default App;
