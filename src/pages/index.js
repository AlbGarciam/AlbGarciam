import * as React from "react";
import { navigate } from "gatsby";
import SectionCard from "../atoms/SectionCard";
import TaglineCard from "../atoms/TaglineCard";
import "./index.css";

export default class IndexPage extends React.Component {
  onAboutClicked() {
    console.log("About tapped");
  }

  onProjectsClicked() {
    console.log("Project tapped");
  }

  onContactClicked() {
    console.log("Contact tapped");
    navigate("/404");
  }

  render() {
    return (
      <main className="main">
        <div className="top-group">
          <TaglineCard />
          <SectionCard
            type="about"
            title="About"
            subtitle="Me"
            onClick={this.onAboutClicked.bind(this)}
          />
        </div>
        <div className="bottom-group">
          <SectionCard
            type="projects"
            title="My"
            subtitle="projects"
            onClick={this.onProjectsClicked.bind(this)}
          />
          <SectionCard
            type="contact"
            title="Contact"
            subtitle="Me"
            onClick={this.onContactClicked.bind(this)}
          />
        </div>
      </main>
    );
  }
}
