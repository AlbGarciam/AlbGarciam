import React from "react";
import "./style.css";

export default class SubsectionTitle extends React.Component {
  render() {
    return (
      <div className="sub-section">
        <div className="sub-section-decorator-container">
          <div className="circle" />
          <section className="sub-section-title text-regular">
            {this.props.title}
          </section>
        </div>
        <div>
          <h6 className="sub-section-subtitle text-light">
            {this.props.subtitle}
          </h6>
        </div>
      </div>
    );
  }
}
