import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: this.props.highlighted,
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">SDCL Beowulf</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className={this.props.highlighted == "home" ? "active" : ""}><Link to="/">Home</Link></li>
                <li className={this.props.highlighted == "status" ? "active" : ""}><Link to="/status">Status</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

NavigationBar.defaultProps = {
  highlighted: "",
};

NavigationBar.propTypes = {
  highlighted: PropTypes.string,
}

export default NavigationBar;
