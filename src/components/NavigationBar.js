import React from 'react';
import {Link} from 'react-router-dom';

/**
 * A counter button: tap the button to increase the count.
 */
class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">SDCL Beowulf</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/status">Status</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavigationBar;
