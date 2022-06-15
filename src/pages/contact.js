import * as React from "react";
import "./contact.css";
import "../css/typography.css";
import NavBar from "../molecules/NavBar";
import ContactItem from "../atoms/ContactItem";

export default class Contact extends React.Component {
  onGetResumeTapped() {}

  render() {
    return (
      <main className="contact-main">
        <NavBar light={true} />
        <div className="contact-container">
          <div className="basic">
            <ContactItem
              title="Email"
              url="mailto:alb.garciam@gmail.com"
              display="alb.garciam@gmail.com"
            />
            <ContactItem title="Location" description="Madrid (Spain)" />
          </div>
          <div className="social-media">
            <ContactItem
              title="LinkedIn"
              url="https://www.linkedin.com/in/alberto-garcia-munoz/"
              display="alberto-garcia-munoz"
            />
            <ContactItem
              title="Github"
              url="https://github.com/AlbGarciam"
              display="AlbGarciam"
            />
            <ContactItem
              title="Medium"
              url="https://medium.com/@albgarciam"
              display="@albgarciam"
            />
          </div>
        </div>
      </main>
    );
  }
}
