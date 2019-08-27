import React from 'react';
import { BrowserRouter as Router, Switch, Route ,withRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import routes from './routes/routes';
import './App.css';
import './country.css';

const App = () => {
  let RoutesSync = withRouter(routes);
  return (
    <Router routes = {routes}>
      <div className="App">
        <Navigation />
        <RoutesSync />
      </div>
    </Router>
  );
}

export default App;