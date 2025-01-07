import React from "react";
import ProgramCard from "../cards/programCard";
import { FaReact, FaNode, FaDatabase } from "react-icons/fa";
import { LiaDumbbellSolid } from "react-icons/lia";
import { GiMeditation } from "react-icons/gi";
import { LuBicepsFlexed } from "react-icons/lu";
import { MdDirectionsRun } from "react-icons/md";

const SectionFour = () => {
  const programs = [
    {
      Logo: LiaDumbbellSolid,
      heading: "Strength Training",
      text: "Learn React.js for building UIs. for building UIs. React.js for building UIs.",
    },
    {
      Logo: GiMeditation,
      heading: "Basic Yoga",
      text: "Learn React.js for building UIs. for building UIs. React.js for building UIs.",
    },
    {
      Logo: LuBicepsFlexed,
      heading: "Database Design",
      text: "Learn React.js for building UIs. for building UIs. React.js for building UIs.",
    },
    {
      Logo: MdDirectionsRun,
      heading: "Database Design",
      text: "Learn React.js for building UIs. for building UIs. React.js for building UIs.",
    },
  ];

  return (
    <div className="sectionFour">
      <div className="sectionFour__title">
        <div className="h4">The Best Programs We Offer For You</div>
        <div className="eyebrow">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem et ea
          reiciendis libero corporis natus atque expedita sit doloremque vel
          enim, unde quo, modi ducimus in vero?
        </div>
      </div>
      {/* Card */}
      <div className="sectionFour__card">
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          Logo={program.Logo}
          heading={program.heading}
          text={program.text}
        />
      ))}
      </div>
    </div>
  );
};

export default SectionFour;
