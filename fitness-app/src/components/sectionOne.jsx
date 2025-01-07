import React from "react";
import Button from "./button";
import { BsFillPlayFill } from "react-icons/bs";

const SectionOne = () => {
  return (
    <section className="sectionOne">
      <div className="sectionOne__tag">
        <div className="h2">GET HEALTHY BODY WITH THE PERFECT EXERCISE</div>
        <div className="eyebrow">
        We are always there to help you to make a healthy body and mind through the power of fitness.
        </div>
        <div className="sectionOne__tag__click">
          <Button text="Get Started" />
          <div className="hey">
            <BsFillPlayFill className="arrow"/>
          </div>
          <div className="caption">Watch Video</div>
        </div>
        <div className="sectionOne__tag__trainee">
          <div className="h6 numbers">
            105+ <br /> <span className="smalleyebrow">Expert Traines</span>{" "}
          </div>
          <div className="h6 numbers">
            970+ <br /> <span className="smalleyebrow">Expert Traines</span>{" "}
          </div>
          <div className="h6 number">
            165+ <br /> <span className="smalleyebrow">Expert Traines</span>{" "}
          </div>
        </div>
      </div>
      <figure>
        <img src="/jumping-girl.png" alt="" />
      </figure>
    </section>
  );
};

export default SectionOne;
