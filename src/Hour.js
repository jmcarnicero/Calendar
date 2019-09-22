import React, { Component } from "react";
import moment from "moment";

export class Hour extends Component {
  constructor(props) {
    super(props)
    this.state = { flag: false };
  }
  onMouseUpHandler = e => {
    console.log("onMouseUpHandler", e.target.id);
    this.setState({ flag: false });
    this.props.setStartDay(e.target.id);
  };

  onMouseDownHandler = e => {
    console.log("onMouseDownHandler", e.target.id);
    this.setState({ flag: true });
    this.props.setEndtDay(e.target.id);
  };

  onEnterHandler = e => {
    console.log("onEnterHandler", e.target.id , this.state );
    // if (this.state.flag) {
    //   this.props.setStartDay(e.target.id);
    // }
  };

  render = () => {
    return (
      <div
        id={this.props.hour}
        className={`Hour ${this.props.selected}`}
        onMouseUp={this.onMouseUpHandler}
        onMouseDown={this.onMouseDownHandler}
        onMouseEnter={this.onEnterHandler}
      >
        {moment(this.props.hour).format("HH:mm")}
      </div>
    );
  };
}

export default Hour;
