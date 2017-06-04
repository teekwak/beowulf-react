import React from 'react';

/**
 * Get status of nodes using Bash script
 */
class StatusCheckerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        Hello from the StatusCheckerContainer
      </div>
    );
  }
}
export default StatusCheckerContainer;
