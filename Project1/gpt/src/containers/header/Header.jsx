import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Unveiling the Genius Within: GPT-3 Open AI Extraordinary
        </h1>
        <p>
          GPT-3 Open AI: Unleashing the power of language, igniting the spark of
          imagination, and revolutionizing the way we interact with artificial
          intelligence.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
