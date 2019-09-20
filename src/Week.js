import React, { Component } from "react";
import Day from "./Day";

export class Week extends Component {
  constructor(props) {
    super(props);
    this.state = { days: 7 };
  }

  setStartDayHandler = (day, hour) => {
    this.setState({ dayEnd: day, hourEnd: hour });
  };

  setEndtDayHandler = (day, hour) => {
    this.setState({ dayStart: day, hourStart: hour });
  };

  renderDays = () => {
    const Days = [];

    for (let i = 0; i < this.state.days; i++) {
      let classNameDaySelected = "";



      let hours = [];

      if (i >= this.state.dayStart && i <= this.state.dayEnd - 1) {
        hours = [0, 23];
      }


      if (i === this.state.dayStart - 1) {
        hours = [this.state.hourStart, 23];
      }

      if (i === this.state.dayEnd - 1) {
        hours = [0, this.state.hourEnd];
      }
    
      Days.push(
        <Day
          className={`Day ${classNameDaySelected}`}
          key={i}
          day={i + 1}
          hours={hours}
          setStartDay={(day, hour) => this.setStartDayHandler(day, hour)}
          setEndtDay={(day, hour) => this.setEndtDayHandler(day, hour)}
        />
      );
    }

    return Days;
  };

  render() {
    return (
      <div className="Week">
        <h1>Week</h1>
        {this.renderDays()}
      </div>
    );
  }
}

export default Week;
