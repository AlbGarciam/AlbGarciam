import { navigate } from "gatsby";
import React from "react";
import "./style.css";

export default class SectionTitle extends React.Component {
  render() {
    return <h1 className="section-title text-regular">{this.props.title}</h1>;
  }
}
