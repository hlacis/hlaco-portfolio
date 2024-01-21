import React from "react";

const Social = () => {
  return (
    <div className="home__social">
        <a
        href="https://www.instagram.com/jakub_hlacik/"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/hlacis"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
