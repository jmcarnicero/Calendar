import React, { Component } from "react";
import moment from "moment";
import Day from "./Day";

export class Week extends Component {
  constructor(props) {
    super(props);

    const today = moment();
    const firstDAyWeek = today.startOf("week");
    const lastDAyWeek = today
      .clone()
      .startOf("week")
      .add(7, "day");

    this.state = {
      days: 7,
      firstDAyWeek: firstDAyWeek,
      lastDAyWeek: lastDAyWeek
    };
  }

  setDayHandler = (param, hour) => {
    this.setState({ [param]: hour });
  };

  renderDays = () => {
    const Days = [];

    for (
      var m = moment(this.state.firstDAyWeek);
      m.isBefore(this.state.lastDAyWeek, "day");
      m.add(1, "day")
    ) {
      Days.push(
        <Day
          key={m.format("YYYY-MM-DDTHH:mm")}
          day={m.format("YYYY-MM-DDTHH:mm")}
          setEndtDay={hour => this.setDayHandler("hourEnd", hour)}
          setStartDay={hour => this.setDayHandler("hourStart", hour)}
          hourStart={this.state.hourStart}
          hourEnd={this.state.hourEnd}
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
