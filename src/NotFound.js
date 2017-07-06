import React from 'react';
import NavigationBar from './components/NavigationBar';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        404: page not found
      </div>
    );
  }
}

export default NotFound;
