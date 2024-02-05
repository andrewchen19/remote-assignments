import React from "react";

const Repo = ({ name, visibility, description, topics }) => {
  return (
    <div className="repo">
      <div className="repo-header">
        <h3>{name}</h3>
        <span>{visibility}</span>
      </div>

      <p className="repo-desc">{description}</p>

      <div className="repo-topics">
        {topics.length > 0 &&
          topics.map((topic, index) => {
            return (
              <span key={index} className="repo-topic">
                {topic}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Repo;
