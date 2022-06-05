import * as React from "react";
import "../../css/typography.css";
import "./styles.css";

export default class TaglineCard extends React.Component {
  render() {
    return (
      <div className="tagline-card">
        <p className="text-regular">iOS Architect @ OpenBank</p>
        <div>
          <p className="text-bold">Alb</p>
          <p className="text-bold outlined">Garcíam.</p>
        </div>
      </div>
    );
  }
}
