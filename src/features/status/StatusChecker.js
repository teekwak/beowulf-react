import React from 'react';

/**
 * Render the data from StatusCheckerContainer
 */
class StatusChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      date: this.props.date,
    };
  }

  render() {
    return (
      <div>
        Hello from the Status Checker
        <p>{this.props.data}</p>
        <p>Last updated: {this.props.date}</p>
      </div>
    );
  }
}
export default StatusChecker;
