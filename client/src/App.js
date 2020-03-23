import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
        <Route path="/movies/">
            <MovieList/>
        </Route>
        <Route path="/movies/:movieID">
            <Movie/>
        </Route>
      </div>
    </div>
    </Router>
  );
};

export default App;
