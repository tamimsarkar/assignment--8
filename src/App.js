import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom'
import NewsFeed from './Components/NewsFeed/NewsFeed';
import NotFound from './Components/NotFound/NotFound';
import FeedDetails from './Components/FeedDetails/FeedDetails';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      
        <div className="App">
        <Navbar></Navbar>
      <Switch>
        <Route path="/newsfeed">
        <NewsFeed />
        </Route>
        <Route path="/feed-details/:id">
          <FeedDetails></FeedDetails>
        </Route>
        <Route exact path="/">
        <NewsFeed></NewsFeed>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
       
      </Switch>
      </div>
    </Router>
  );
}

export default App;
