import React, { Component } from "react";

export class Hour extends Component {
  constructor(props) {
    super(props);
  }

  onMouseUpHandler = e => {
    this.props.setStartDay(this.props.day, Number(e.target.id));
  };

  onMouseDownHandler = e => {
    this.props.setEndtDay(this.props.day, Number(e.target.id));
  };

  render = () => {
    let classNameSelected = "";

    if (this.props.hours.length > 0) {
      if (
        this.props.hour >= this.props.hours[0] &&
        this.props.hour <= this.props.hours[1]
      ) {
        classNameSelected = "HourSeleted";
      }
    }

    return (
      <div
        id={this.props.hour}
        className={`Hour ${classNameSelected}`}
        onMouseUp={this.onMouseUpHandler}
        onMouseDown={this.onMouseDownHandler}
      >
        {this.props.hour}
      </div>
    );
  };
}

export default Hour;
