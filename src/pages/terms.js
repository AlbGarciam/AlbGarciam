import * as React from "react";
import "./terms.css";
import "../css/typography.css";
import NavBar from "../molecules/NavBar";
import SectionTitle from "../atoms/SectionTitle";
import terms from "../json/terms";

export default class TermsPage extends React.Component {
  render() {
    return (
      <main className="terms-main">
        <NavBar light={true} />
        <div className="terms-container">
          <SectionTitle title="Terms & Conditions" />
          <div className="terms-column">
            <p className="terms-disclaimer text-medium">{terms.header}</p>
            {terms.paragraphs.map((element) => {
              return <p className="terms-paragraph text-regular">{element}</p>;
            })}
          </div>
        </div>
      </main>
    );
  }
}
