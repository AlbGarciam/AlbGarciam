import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";
import NavBarItem from "../../atoms/NavBarItem";
import { navigate } from "gatsby";

export default class NavBar extends React.Component {
  onIconTapped() {
    navigate("/");
  }

  render() {
    let image;
    let className = "nav-bar";
    if (this.props.light || false) {
      image = (
        <StaticImage
          src="../../images/logo-light.svg"
          className="nav-bar-logo"
          alt="AlbGarciam's logo"
          onClick={this.onIconTapped.bind(this)}
        />
      );
      className += " light";
    } else {
      image = (
        <StaticImage
          src="../../images/logo-dark.svg"
          className="nav-bar-logo"
          alt="AlbGarciam's logo"
          onClick={this.onIconTapped.bind(this)}
        />
      );
      className += " dark";
    }

    return (
      <div className={className}>
        <div className="nav-bar-align">
          <div className="nav-bar-container">
            <div className="nav-bar-contents">
              {image}
              <div className="nav-bar-items-container">
                <NavBarItem title="Projects" destination="/projects" />
                <NavBarItem title="Blog" destination="/blog" />
                <NavBarItem title="About" destination="/about" />
                <NavBarItem title="Contact" destination="/contact" />
              </div>
            </div>
            <div className="bottom-line" />
          </div>
        </div>
      </div>
    );
  }
}
