import { navigate } from "gatsby";
import React, { useState } from "react";
import "./style.css";

export default class PortfolioButton extends React.Component {
  state = {
    isShown: false,
  };

  onTapped() {
    navigate(this.props.onClick());
  }

  render() {
    return (
      <div
        className="portfolio-button"
        onMouseEnter={() => this.setState({ isShown: true })}
        onMouseLeave={() => this.setState({ isShown: false })}
      >
        <div
          className={this.state.isShown ? "background expanded" : "background"}
        />
        <p
          className="portfolio-button-text text-medium"
          onClick={this.onTapped.bind(this)}
        >
          {this.props.title}
        </p>
      </div>
    );
  }
}
