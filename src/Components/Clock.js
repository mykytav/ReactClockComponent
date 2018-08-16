import React, { Component } from 'react';

import Dispay from './Display';
import Panel from './Panel';

class Clock extends Component {
  state = {
    time: new Date(),
    isDateVisible: true
  };

  startTime() {
    this.time = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  toggleDate = () => {
    this.setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));
  };

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <Panel
          showDate={this.state.isDateVisible}
          toggleDate={this.toggleDate}
        />
        <Dispay showDate={this.state.isDateVisible} date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
