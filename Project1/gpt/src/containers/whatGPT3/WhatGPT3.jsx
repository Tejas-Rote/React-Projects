import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components/index.js";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What is GPT-3"}
          text={
            "GPT-3 (Generative Pre-trained Transformer 3) is a cutting-edge language model developed by OpenAI. With 175 billion parameters, it is one of the largest and most advanced AI models, capable of generating human-like text, understanding context, and assisting in a wide range of tasks, from translation to content generation."
          }
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="graident__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Chatbots"}
          text={
            "Enhancing communication, simplifying tasks, and providing personalized assistance through intelligent conversation. "
          }
        />
        <Feature
          title={"Knowledge base"}
          text={
            "Augmenting GPT-3 Open AI with a comprehensive knowledge base for accurate and insightful responses."
          }
        />
        <Feature
          title={"Education"}
          text={
            "Empowering education by leveraging GPT-3 Open AI to provide personalized learning, answer questions, and foster intellectual growth."
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
