import * as React from "react";
import "./index.css";
import "../css/typography.css";
import NavBar from "../molecules/NavBar";

export default class IndexPage extends React.Component {
  render() {
    return (
      <main className="home-main">
        <NavBar light={false} />
        <div className="tagline-container">
          <div className="circle" />
          <div className="text-container">
            <h1 className="left-text text-bold">The way I</h1>
            <div className="right-text-container">
              <h2 className="right-text text-bold">code</h2>
              <h2 className="right-text text-bold">work</h2>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
