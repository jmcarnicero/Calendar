import React, { Component } from "react";
import moment from "moment";

export class Hour extends Component {
  render = () => {
    return (
      <div
        id={this.props.hour}
        className={`Hour ${this.props.selected}`}
      >
        {moment(this.props.hour).format("HH:mm")}
      </div>
    );
  };
}

export default Hour;
