import React from "react";
import "./style.css";

export default class ContactItem extends React.Component {
  buildSubtitle() {
    if (this.props.description != null) {
      return (
        <p className="contact-item-subtitle text-light">
          {this.props.description}
        </p>
      );
    } else if (this.props.url != null) {
      return (
        <a className="contact-item-subtitle text-light" href={this.props.url}>
          {this.props.display}
        </a>
      );
    }
  }

  render() {
    return (
      <div className="contact-item">
        <div className="contact-item-decorator-container">
          <div className="circle" />
          <section className="contact-item-title text-regular">
            {this.props.title}
          </section>
        </div>
        <div>{this.buildSubtitle()}</div>
      </div>
    );
  }
}
