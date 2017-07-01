import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Counter from './components/Counter';
import NavigationBar from './components/NavigationBar';
import StatusCheckerContainer from './containers/StatusCheckerContainer';

// crap
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
  </div>
);

/**
 * Entry point
 * Note: all routing happens here and NOT by Express
 * TODO: if I go directly to /about, the page will fail (probably expecting Express to handle)
 */
class App extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

App.Home = Home;
App.About = About;
App.NotFound = NotFound;

export default App;

