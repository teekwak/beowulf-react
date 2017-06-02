import React from 'react';
import Counter from './components/Counter';
import StatusCheckerContainer from './containers/StatusCheckerContainer';

/**
 * Entry point
 */
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter />
        <StatusCheckerContainer />
      </div>
    );
  }
}
export default App;