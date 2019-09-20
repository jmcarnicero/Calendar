import React, { Component } from "react";
import Hour from "./Hour";

export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { hours_start: 0, hours_end: 24 };
  }

  renderHours = () => {
    const Hours = [];

    for (let i = this.state.hours_start; i < this.state.hours_end; i++) {
      Hours.push(
        <Hour
          key={i}
          day={this.props.day}
          hour={i}
          hours={this.props.hours}
          setStartDay={(day, hour) => this.props.setStartDay(day, hour)}
          setEndtDay={(day, hour) => this.props.setEndtDay(day, hour)}
        />
      );
    }

    return Hours;
  };

  render() {

    return (
      <div className={this.props.className}>
        <h1>Day : {this.props.day}</h1>
        {this.renderHours()}
      </div>
    );
  }
}

export default Day;
