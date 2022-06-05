import * as React from "react";
import SectionCard from "../atoms/SectionCard";
import TaglineCard from "../atoms/TaglineCard";
import "./index.css";

export default function IndexPage() {
  return (
    <main className="main">
      <div className="top-group">
        <TaglineCard type="about" title="About" subtitle="Me" />
        <SectionCard type="about" title="About" subtitle="Me" />
      </div>
      <div className="bottom-group">
        <SectionCard type="projects" title="My" subtitle="projects" />
        <SectionCard type="contact" title="Contact" subtitle="Me" />
      </div>
    </main>
  );
}
