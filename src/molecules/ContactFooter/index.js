import React from "react";
import "./style.css";
import { navigate } from "gatsby";
import PortfolioButton from "../../atoms/PortfolioButton";

export default class ContactFooter extends React.Component {
  onConnectTapped() {
    navigate("/contact");
  }

  render() {
    return (
      <div className="contact-footer">
        <div className="contact-footer-align">
          <div className="contact-footer-container">
            <section className="text-regular">Let's get in touch</section>
            <PortfolioButton
              title="Connect"
              onClick={this.onConnectTapped.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
