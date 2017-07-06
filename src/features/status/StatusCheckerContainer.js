import React from 'react';
import NavigationBar from '../../NavigationBar';
import StatusChecker from './StatusChecker';

/**
 * Get status of nodes using Bash script
 */
class StatusCheckerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      date: "Never",
    };
  }

  getCurrentDate() {
    const now = new Date();

    const ampm = now.getHours() < 12 ? "am" : "pm";
    const hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    return (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + hour + ":" + minute + ":" + second + " " + ampm;
  }

  buttonClick() {
    this.setState({ data: "this is new data", date: this.getCurrentDate() }, () => {
      console.log("I did something: " + this.state.data);
      console.log("last updated: " + this.state.date);
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <button onClick={this.buttonClick.bind(this)}>click me</button>
        <StatusChecker data={this.state.data} date={this.state.date} />
      </div>
    );
  }
}
export default StatusCheckerContainer;
