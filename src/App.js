import React from 'react';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar highlighted="home" />
        Home
      </div>
    );
  }
}

export default App;
