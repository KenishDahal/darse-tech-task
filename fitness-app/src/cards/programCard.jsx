import React from 'react';

const ProgramCard = ({ Logo, heading, text }) => {
  return (
    <div className='programCard'>
      {/* Render the dynamic Logo as a component */}
      <div>{<Logo size={65} />}</div>
      <div className='h6 programCard__heading'>{heading}</div>
      <div className='eyebrow'>{text}</div>
      <div className='caption'>Learn More</div>
    </div>
  );
};

export default ProgramCard;
