import React, { Component } from "react";
import moment from "moment";
import Hour from "./Hour";

export class Day extends Component {
  onMouseUpHandler = e => {
    this.props.setStartDay(e.target.id);
  };

  onMouseDownHandler = e => {
    this.props.setEndtDay(e.target.id);
    this.props.setStartDay(e.target.id);
  };

  
  onMouseEnterHandler = e => {
    if( e.buttons ) { 
      console.log('e', e, e.buttons);
      this.props.setStartDay(e.target.id);
    }
  };

  

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
        <div
        key={m.format("YYYY-MM-DDTHH")}
          onMouseUp={e => {
            this.onMouseUpHandler(e);
          }}
          onMouseDown={e => {
            this.onMouseDownHandler(e);
          }}          
          
          onMouseOver={e => {
            this.onMouseEnterHandler(e);
          }}          
        >
          <Hour
            key={m.format("YYYY-MM-DDTHH:mm")}
            hour={m.format("YYYY-MM-DDTHH:mm")}
            setDateStart={hour => this.props.setStartDay(hour)}
            setDateEnd={hour => this.props.setEndtDay(hour)}
            selected={selected}
          />
        </div>
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
