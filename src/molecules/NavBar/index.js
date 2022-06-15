import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";
import NavBarItem from "../../atoms/NavBarItem";
import { navigate } from "gatsby";

export default class NavBar extends React.Component {
  state = {
    menuExpanded: false,
  };

  getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  onIconTapped() {
    navigate("/");
  }

  onMenuButtonTapped() {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  getLargeNavBar() {
    return (
      <div className="nav-bar-items-container">
        {/* <NavBarItem title="Projects" destination="/projects" /> */}
        {/* <NavBarItem title="Blog" destination="/blog" /> */}
        <NavBarItem title="About" destination="/about" />
        <NavBarItem title="Contact" destination="/contact" />
      </div>
    );
  }

  getImage() {
    if (this.props.light || false) {
      return (
        <StaticImage
          src="../../images/logo-light.svg"
          className="nav-bar-logo"
          alt="AlbGarciam's logo"
        />
      );
    } else {
      return (
        <StaticImage
          src="../../images/logo-dark.svg"
          className="nav-bar-logo"
          alt="AlbGarciam's logo"
        />
      );
    }
  }

  render() {
    const image = this.getImage();
    const className =
      "nav-bar" + (this.props.light || false ? " light" : " dark");
    const navBar = this.getLargeNavBar();
    return (
      <div className={className}>
        <div className="nav-bar-align">
          <div className="nav-bar-container">
            <div className="nav-bar-contents">
              <div onClick={this.onIconTapped.bind(this)}>{image}</div>
              {navBar}
            </div>
            <div className="bottom-line" />
          </div>
        </div>
      </div>
    );
  }
}
