import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Language Understanding",
    text: "GPT-3 Open AI demonstrates remarkable language understanding, comprehending prompts, context, and nuances, allowing it to generate coherent and contextually relevant responses.",
  },
  {
    title: "Creative Writing",
    text: "GPT-3 Open AI exhibits creative writing abilities, capable of generating unique and engaging content across various genres, styles, and topics, inspiring new possibilities for automated storytelling and content creation.",
  },
  {
    title: "Problem Solving",
    text: "GPT-3 Open AI can assist in problem-solving tasks by providing insights, suggestions, and generating potential solutions based on the information provided, offering a valuable resource for decision-making and brainstorming.",
  },
  {
    title: "Virtual Assistants",
    text: "GPT-3 Open AI can be integrated into virtual assistant applications, providing users with conversational interactions, answering questions, performing tasks, and offering personalized recommendations, enhancing user experiences and productivity in various domains.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
