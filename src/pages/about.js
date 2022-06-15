import * as React from "react";
import "./about.css";
import "../css/typography.css";
import NavBar from "../molecules/NavBar";
import SectionTitle from "../atoms/SectionTitle";
import about from "../json/about";
import ContactFooter from "../molecules/ContactFooter";
import PortfolioButton from "../atoms/PortfolioButton";
import SubsectionTitle from "../atoms/SubsectionTitle";
import JobPosition from "../atoms/JobPosition";

export default class AboutPage extends React.Component {
  onGetResumeTapped() {}

  render() {
    return (
      <main className="about-main">
        <NavBar light={true} />
        <div className="about-container">
          <SectionTitle
            title={`About
              me`}
          />
          <div className="about-column">
            {about.intro.map((element) => {
              return (
                <p className="about-intro-paragraph text-regular">{element}</p>
              );
            })}
            <PortfolioButton
              title="Get CV/Resume"
              onClick={this.onGetResumeTapped.bind(this)}
            />
          </div>
        </div>
        <div className="about-container">
          <SubsectionTitle
            title={`My
              career`}
            subtitle="Since 2015"
          />
          <div className="about-column">
            {about.jobs.map((element) => {
              return (
                <JobPosition
                  title={element.title}
                  description={element.description}
                />
              );
            })}
          </div>
        </div>
        <ContactFooter />
      </main>
    );
  }
}
