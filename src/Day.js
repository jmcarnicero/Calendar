import React, { Component } from "react";
import moment from "moment";
import Hour from "./Hour";

export class Day extends Component {
  renderHours = () => {
    const Hours = [];
    const b = moment(this.props.day).add(1, "day");

    for (
      var m = moment(this.props.day);
      m.diff(b, "hour") <= 0;
      m.add(1, "hour")
    ) {
      let selected = "";

      if (this.props.hourEnd > this.props.hourStart) {
        if (m.isBetween(this.props.hourStart, this.props.hourEnd, null, "[]")) {
          selected = "HourSeleted";
        }
      } else {
        if (m.isBetween(this.props.hourEnd, this.props.hourStart, null, "[]")) {
          selected = "HourSeleted";
        }
      }

      Hours.push(
        <Hour
          key={m.format("YYYY-MM-DDTHH:mm")}
          hour={m.format("YYYY-MM-DDTHH:mm")}
          setStartDay={hour => this.props.setStartDay(hour)}
          setEndtDay={hour => this.props.setEndtDay(hour)}
          selected={selected}
        />
      );
    }

    return Hours;
  };

  render() {
    return (
      <div className={`Day `}>
        <h2>Day : {moment(this.props.day).format("YYYY-MM-DD")}</h2>
        {this.renderHours()}
      </div>
    );
  }
}

export default Day;
