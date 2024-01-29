import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "Suomi", level: 5 },
    { name: "Englanti", level: 4 },
    { name: "C", level: 3 },
    { name: "HTML", level: 3 },
    { name: "CSS", level: 2 },
    { name: "JavaScript", level: 3 },
    { name: "JAVA", level: 2 },
    { name: "React", level: 3 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;