import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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

/**
 * Entry point
 * Note: all routing happens here and NOT by Express
 * TODO: if I go directly to /about, the page will fail (probably expecting Express to handle)
 */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* this should be the NavigationBar component */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/status">Status</Link></li>
          </ul>

          {/* leave this here */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/status" component={StatusCheckerContainer}/>
        </div>
      </Router>
    );
  }
}
export default App;

