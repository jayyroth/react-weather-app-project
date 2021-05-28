import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by Jordyn Rothberg and is open-sourced on{" "}
          <a
            href="https://github.com/jayyroth/weather-app-project"
            alt="Link to GitHub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </p>
      </footer>
    </div>
  );
}
