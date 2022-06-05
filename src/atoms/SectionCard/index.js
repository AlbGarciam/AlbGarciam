import * as React from "react";
import "../../css/typography.css";
import "./styles.css";

export default class SectionCard extends React.Component {
  render() {
    const className = "section-card " + this.props.type;
    return (
      <div className={className}>
        <div>
          <p className="text-semibold">{this.props.title}</p>
          <p className="text-semibold">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
