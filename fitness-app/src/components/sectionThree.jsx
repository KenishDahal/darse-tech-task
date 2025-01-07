import React from "react";
import Button from "./button";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <div>
        <img src="/scott.jpg" alt="" />
      </div>
      <div className="sectionThree__trial">
        <div className="h5 text">Get Ready To Reach Your Fitness Goal</div>
        <div className="eyebrow text">We are a gym that is committed to helping people reach their fitness goals. We offer a variety of theirs programs and services to fit your needs, whether you are a experienced athlete.<br/><br/>
        We believe that everyone should have access to the benefits of exercise make it happen.</div>
        <Button text="Free Trial Today"/>
      </div>
    </div>
  );
};

export default SectionThree;
