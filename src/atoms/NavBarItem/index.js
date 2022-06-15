import { navigate } from "gatsby";
import React from "react";
import "./style.css";

export default class NavBarItem extends React.Component {
  onTapped() {
    navigate(this.props.destination);
  }

  render() {
    return (
      <p className="nav-bar-item text-light" onClick={this.onTapped.bind(this)}>
        {this.props.title}
      </p>
    );
  }
}
