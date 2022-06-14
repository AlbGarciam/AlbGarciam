import React from "react";
import "./style.css";

export default class JobPosition extends React.Component {
  render() {
    return (
      <div className="job-position">
        <p className="job-position-title text-bold">{this.props.title}</p>
        <p className="job-position-description text-regular">
          {this.props.description}
        </p>
      </div>
    );
  }
}
