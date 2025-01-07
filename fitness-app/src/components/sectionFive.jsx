import React from "react";
import Button from "./button";
import { IoCheckmarkCircle } from "react-icons/io5";

const SectionFive = () => {
  return (
  <div className="sectionFive">
    <div className="sectionFive__text">
        <div className="h5">Why Should People Choose Fitnesxia Services</div>
        <div className="h6"><IoCheckmarkCircle color="rgb(255, 111, 0)" /> Personal Training</div>
        <div className="eyebrow">our personalized plan can help you create a personalized fitness plan and track your progress</div>
        <div className="h6"><IoCheckmarkCircle color="rgb(255, 111, 0)" /> Expert Trainer</div>
        <div className="eyebrow">our personalized plan can help you create a personalized fitness plan and track your progress</div>
        <div className="h6"><IoCheckmarkCircle color="rgb(255, 111, 0)" /> Flexible Time</div>
        <div className="eyebrow">our personalized plan can help you create a personalized fitness plan and track your progress</div>
        <Button text="Join Today" />
    </div>
      <figure className="sectionFive__picture">
        <img src="/boxing.png" alt="image" />
      </figure>
  </div>
  )
};

export default SectionFive;
