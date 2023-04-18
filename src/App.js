import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ApplicationsList from './components/ApplicationsList';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ApplicationsList} />
        <Route path="/events/:app_key/:time" component={EventsPage} />
      </div>
    </Router>
  );
}

export default App;
