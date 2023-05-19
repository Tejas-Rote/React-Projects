import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="May 19, 2023"
          text="Unleashing the Power of GPT-3 Open AI: Exploring its Limitless PotentialGPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="April 26, 2023"
          text="Transforming Industries with GPT-3 Open AI: A Paradigm Shift in Artificial Intelligence"
        />
        <Article
          imgUrl={blog03}
          date="March 2, 20213"
          text="The Creative Revolution: How GPT-3 Open AI is Shaping Content Generation"
        />
        <Article
          imgUrl={blog04}
          date="February 20, 2023"
          text="GPT-3 Open AI in Education: Revolutionizing Learning and Personalized Instruction"
        />
        <Article
          imgUrl={blog05}
          date="January 26, 2023"
          text="Ethical Implications of GPT-3 Open AI: Navigating the Challenges of AI Language Models"
        />
      </div>
    </div>
  </div>
);

export default Blog;
